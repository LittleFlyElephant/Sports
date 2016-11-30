<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

/**
 * Class LoginController
 * @package App\Http\Controllers
 */
class LoginController extends Controller
{
    /**
     * 登录
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request){
//        $rules = [
//            'user' => 'required|alpha_dash',
//            'password' => 'required|alpha_dash'
//        ];
//        $messages = [
//            'required' => ':attribute 字段必须!',
//            'user.alpha_num' => '用户名输入不合法!',
//            'password.alpha_dash' => '密码输入不合法!',
//        ];
//        //验证
//        $this->validate($request,$rules,$messages);
        $ret = array();
        $username = $request->input('username');
        $password = $request->input('password');
        $user = User::findOneByUsername($username);
        if ($user != null){
            if ($password != $user->password) {
                $ret['result'] = Controller::PASSWORD_ERROR;
                $ret['msg'] = 'user password different';
            } else{
                $ret['result'] = Controller::SUCCESS;
                $ret['id'] = $user->id;
                $ret['level'] = $user->level;
                $ret['avatar'] = $user->avatar;
                $ret['permission'] = $user->permission;
                $ret['msg'] = 'login successfully';
            }
        } else {
            $ret['result'] = Controller::USER_NOT_FIND;
            $ret['msg'] = 'user not find';
        }
        return \Response::json($ret);
    }

    /**
     * 注册
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request){
        $ret = array();
        $res = User::create([
            'username' => $request->input('username'),
            'password' => $request->input('password'),
            'email' => $request->input('email'),
            'level' => 0,
            'exp' => 0,
            'permission' => 1
        ]);
        $ret['res'] = $res;
        return \Response::json($ret);
    }
}
