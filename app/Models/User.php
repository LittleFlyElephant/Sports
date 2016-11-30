<?php
/**
 * Created by PhpStorm.
 * User: raychen
 * Date: 2016/11/29
 * Time: 11:21
 */

namespace App\Models;


class User extends \Eloquent{
    const UPDATED_AT = 'updatedAt';
    const CREATED_AT = 'createdAt';

    protected $table = 'tbl_user';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'username',
        'avatar',
        'password',
        'phone',
        'email',
        'level',
        'exp',
        'permission',
        'accessToken',
        'deviceId'
    ];

    public static function findOneByUsername($username){
        $students = self::where('username', $username)
            ->first();
        return $students;
    }

    public static function findUserRecords($username, $day){
        if ($day == null){
            $today = date('Y-m-d');
            $records = \DB::table('tbl_record')
                ->join('tbl_user', 'tbl_user.id', '=', 'tbl_record.userId')
                ->where('tbl_user.username', $username)
                ->where('tbl_record.time', $today)
                ->select(\DB::raw('SUM(step) as total_step'))
                ->first();
        } else if ($day != 'all'){
            $records = \DB::table('tbl_record')
                ->join('tbl_user', 'tbl_user.id', '=', 'tbl_record.userId')
                ->where('tbl_user.username', $username)
                ->where('tbl_record.time', $day)
                ->select('tbl_record.*')
                ->get();
        } else {
            $records = \DB::table('tbl_record')
                ->join('tbl_user', 'tbl_user.id', '=', 'tbl_record.userId')
                ->where('tbl_user.username', $username)
                ->select('tbl_record.*')
                ->get();
        }
        return $records;
    }

    public static function findUserRanks($day){
        if ($day != -1){
            $records = \DB::table('tbl_record')
                ->select('userId', \DB::raw('SUM(step) as total_step'))
                ->where('time', $day)
                ->groupBy('userId')
                ->orderBy('total_step', 'desc')
                ->limit(5)
                ->get();
        } else {
            $records = \DB::table('tbl_record')
                ->select('userId', \DB::raw('SUM(step) as total_step'))
                ->groupBy('userId')
                ->orderBy('total_step', 'desc')
                ->limit(5)
                ->get();
        }
        return $records;
    }

    public static function findUserId($username){
        $user = self::where('username', $username)->first();
        if ($user != null) return $user->id;
        else return null;
    }
}