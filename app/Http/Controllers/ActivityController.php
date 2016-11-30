<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Activity;
use App\Models\ActivityJoin;

/**
 * Class ActivityController
 * @package App\Http\Controllers
 */
class ActivityController extends Controller
{
    //
    /**
     * 获得近期活动
     * @return \Illuminate\Http\JsonResponse
     */
    public function getRecentActivities(){
        $ret = array();
        $ret['content'] = Activity::findRecent();
        return \Response::json($ret);
    }

    /**
     * 获得活动列表
     * @param null $key
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAllList($key=null){
        $ret = array();
        $ret['content'] = Activity::findAll($key);
        return \Response::json($ret);
    }

    /**
     * 删除活动
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteActivity(Request $request){
        $ret = array();
        \DB::table('tbl_user')->where('id', $request->input('id'))->delete();
        $ret['result'] = Controller::SUCCESS;
        return \Response::json($ret);
    }

    /**
     * 修改活动
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function modifyActivity(Request $request){
        $ret = array();
        $id = $request->input('id');
        $activity = Activity::find($id);
        if ($activity != null){
            $activity->title = $request->input('title');
            $activity->type = $request->input('type');
            $activity->price = $request->input('price');
            $activity->timeBegin = $request->input('timeBegin');
            $activity->timeEnd = $request->input('timeEnd');
            $activity->description = $request->input('description');
        }
        $activity->save();
        $ret['result'] = Controller::SUCCESS;
        return \Response::json($ret);
    }

    /**
     * 增加活动
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addActivity(Request $request){
        $ret = array();

        $userid = User::findUserId(session('user_name'));
        Activity::create([
            'userId' => $userid,
            'title' => $request->input('title'),
            'type' => $request->input('type'),
            'price' => $request->input('price'),
            'timeBegin' => $request->input('timeBegin'),
            'timeEnd' => $request->input('timeEnd'),
            'description' => $request->input('description'),
            'userNums' => 1
        ]);

        $ret['result'] = Controller::SUCCESS;
        return \Response::json($ret);
    }

    /**
     * 参加活动
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function joinActivity(Request $request){
        $ret = array();
        $userid = session('user_id');
        $activity = Activity::find($request->input('activityId'));
        ActivityJoin::create([
            'userId' => $userid,
            'activityId' => $request->input('activityId'),
            'step' => 0,
            'expDiff' => 0,
            'energy' => 0
        ]);
        $activity->userNums ++;
        $activity->save();
        $ret['result'] = Controller::SUCCESS;
        return \Response::json($ret);
    }

    /**
     * 退出活动
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function dropActivity(Request $request){
        $ret = array();
        $userid = session('user_id');
        $res = \DB::table('tbl_join_activity')
            ->where('userId', $userid)
            ->where('id', $request->input('activityId'))
            ->delete();
        if ($res == 1) {
            \DB::table('tbl_activity')->decrement('userNums');
        }
        $ret['result'] = $res;
        return \Response::json($ret);
    }
}
