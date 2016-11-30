<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Friends;
use Illuminate\Http\Request;

/**
 * Class UserController
 * @package App\Http\Controllers
 */
class UserController extends Controller
{
    /**
     * 返回登录用户基本信息
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUser($username){
        $ret = array();
        $ret['result'] = Controller::SUCCESS;
        $ret['content'] = User::findOneByUsername($username);
        return \Response::json($ret);
    }

    /**
     * 获得用户运动数据
     * @param $user
     * @param null $day
     * @return \Illuminate\Http\JsonResponse
     */
    public function getHistory($user, $day=null){
        $ret = array();
        $content = User::findUserRecords($user, $day);
        $ret['result'] = Controller::SUCCESS;
        $ret['content'] = $content;
        return \Response::json($ret);
    }

    /**
     * 获得排名
     * @param $day
     * @param null $type
     * @return \Illuminate\Http\JsonResponse
     */
    public function getRank($day, $type=null){
        $ret = array();
        if ($type == null){
            $ret['content'] = User::findUserRanks($day);
        }
        return \Response::json($ret);
    }

    /**
     * 修改用户基本信息
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function modifyUser(Request $request){
        $ret = array();
        $user = User::find($request->input('user_id'));
        $user->phone = $request->input('phone');
        $user->email = $request->input('email');
        $user->birth = $request->input('birth');

        $user->save();

        $ret['result'] = Controller::SUCCESS;
        return \Response::json($ret);
    }

    /**
     * 获得粉丝
     * @param null $key
     * @return \Illuminate\Http\JsonResponse
     */
    public function getFans($user, $key=null){
        $ret = array();
        $ret['content'] = Friends::getFriends($user, $key, 2);
        return \Response::json($ret);
    }

    /**
     * 获得关注的人
     * @param null $key
     * @return \Illuminate\Http\JsonResponse
     */
    public function getFollowers($user, $key=null){
        $ret = array();
        $ret['content'] = Friends::getFriends($user, $key, 1);
        return \Response::json($ret);
    }

    /**
     * 增加好友
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addFollowers(Request $request){
        $ret = array();
        Friends::create([
            'userId' => $request->input('user_id'),
            'fanId' => $request->input('id'),
            'value' => 0
        ]);
        $ret['result'] = Controller::SUCCESS;
        return \Response::json($ret);
    }

    /**
     * 删除好友
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteFollowers($user, $id){
        $ret = array();
        \DB::table('tbl_fan')->where('fanId', $id)->where('userId', $user)->delete();
        $ret['result'] = Controller::SUCCESS;
        return \Response::json($ret);
    }

    /**
     * 上传头像
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadAvatar(Request $request){
        $ret = array();
        $ret['result'] = Controller::SUCCESS;
        return \Response::json($ret);
    }
}
