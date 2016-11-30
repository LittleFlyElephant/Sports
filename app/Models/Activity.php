<?php
/**
 * Created by PhpStorm.
 * User: raychen
 * Date: 2016/11/29
 * Time: 11:51
 */

namespace App\Models;


class Activity extends \Eloquent
{
    const UPDATED_AT = 'updatedAt';
    const CREATED_AT = 'createdAt';

    protected $table = 'tbl_activity';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'userId',
        'title',
        'type',
        'price',
        'timeBegin',
        'timeEnd',
        'description',
        'userNums'
    ];

    public static function findByUserId($userId){
        $activities = self::where('userId', $userId)
            ->get();
        return $activities;
    }

    public static function findRecent(){
        $activities = self::orderBy('timeBegin', 'desc')
            ->limit(5)
            ->get();
        return $activities;
    }

    public static function findAll($key){
        if($key == null){
            $activities = self::orderBy('beginTime', 'desc')
                ->get();
        } else{
            $activities = self::where('title', 'like', '%'.$key.'%')
                ->orWhere('description', 'like', '%'.$key.'%')
                ->orderBy('beginTime', 'desc')
                ->get();
        }
        return $activities;
    }
}