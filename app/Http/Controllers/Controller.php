<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    const FAIL = 0;
    const SUCCESS = 1;
    const USER_NOT_FIND = -1;
    const PASSWORD_ERROR = -2;
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
