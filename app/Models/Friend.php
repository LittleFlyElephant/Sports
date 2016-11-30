<?php
/**
 * Created by PhpStorm.
 * User: raychen
 * Date: 2016/11/29
 * Time: 19:34
 */

namespace App\Models;


class Friends extends \Eloquent
{
    const UPDATED_AT = 'updatedAt';
    const CREATED_AT = 'createdAt';

    protected $table = 'tbl_fan';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'userId',
        'fanId',
        'value'
    ];

    public static function getFriends($id, $key, $type)
    {
        $thisId = $type == 1 ? 'userId' : 'fanId';
        if ($key != null) {
            $fans = \DB::table('tbl_fan')
                ->join('tbl_user', 'tbl_fan.'.$thisId, '=', 'tbl_user.id')
                ->where('tbl_fan.'.$thisId, $id)
                ->where('tbl_user.username', 'like', '%' . $key . '%')
                ->select('tbl_user.*');
        } else {
            $fans = \DB::table('tbl_fan')
                ->join('tbl_user', 'tbl_fan.'.$thisId, '=', 'tbl_user.id')
                ->where('tbl_fan.'.$thisId, $id)
                ->select('tbl_user.*');
        }
        return $fans;
    }
}