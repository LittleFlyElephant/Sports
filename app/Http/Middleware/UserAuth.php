<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Controller;
use Closure;

class UserAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!\Session::has('user_per') || \Session::get('user_per')<1){
            $ret = array();
            $ret['result'] = Controller::FAIL;
            return \Response::json($ret);
        }
        return $next($request);
    }
}
