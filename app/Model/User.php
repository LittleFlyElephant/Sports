<?php
/**
 * Created by PhpStorm.
 * User: raychen
 * Date: 2016/11/29
 * Time: 11:21
 */

namespace App;


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
//        $students = self::where('username','like','%'.$key.'%')
//            ->orWhere('name','like','%'.$key.'%')
//            ->orWhere('user_name','like','%'.$key.'%')
//            ->get();
        return $students;
    }
}