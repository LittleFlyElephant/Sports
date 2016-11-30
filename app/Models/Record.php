<?php
/**
 * Created by PhpStorm.
 * User: raychen
 * Date: 2016/11/29
 * Time: 23:56
 */

namespace App\Models;


class Record extends \Eloquent
{
    const UPDATED_AT = 'updatedAt';
    const CREATED_AT = 'createdAt';

    protected $table = 'tbl_record';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'userId',
        'step',
        'type',
        'energy',
        'time',
        'endTime'
    ];

}