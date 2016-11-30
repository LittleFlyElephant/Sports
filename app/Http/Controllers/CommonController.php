<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Activity;
use Illuminate\Support\Facades\Input;

class CommonController extends Controller
{
    //
    public function test($id, $userid){
        $ret = array();
//        $res = \DB::table('tbl_join_activity')
//            ->where('userId', $userid)
//            ->where('id', $id)
//            ->delete();
//        $res = date('Y-m-d');
        $user = User::findOneByUsername('cr1');
        session([
            'user_name'=>$user->username,
            'user_id'=>$user->id,
            'user_per'=>$user->permission,
            'user_level'=>$user->level
        ]);
        $ret['content'] = session('user_per');
        return \Response::json($ret);
    }

    public function testActivity(){
        $ret = array();
        $act = Activity::findByUserId(1);
        $ret['res'] = $act;
        return \Response::json($ret, 200, array('Content-Type' => 'application/javascript'));
    }

    public function setSession(Request $request){
        $user = $request->get('user');
//        echo $user;
        $request->session()->put('user_name', $user);
//        $_SESSION['user_name'] = $user;
        $ret = array();
        $ret['sess'] = session('user_name');
        return \Response::json($ret);
    }
}
