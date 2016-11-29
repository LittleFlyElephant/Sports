<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Model;

class CommonController extends Controller
{
    //
    public function test(){
        $ret = array();
        $ret['res'] = 'success';
        return \Response::json($ret);
    }
}
