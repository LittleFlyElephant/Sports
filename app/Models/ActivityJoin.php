<?php
/**
 * Created by PhpStorm.
 * User: raychen
 * Date: 2016/11/30
 * Time: 10:32
 */

namespace App\Models;


class ActivityJoin extends \Eloquent
{
    const UPDATED_AT = 'updatedAt';
    const CREATED_AT = 'createdAt';

    protected $table = 'tbl_join_activity';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'userId',
        'activityId',
        'step',
        'expDiff',
        'energy'
    ];
}