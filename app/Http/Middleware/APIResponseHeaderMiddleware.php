<?php

namespace App\Http\Middleware;

use Closure;

class APIResponseHeaderMiddleware
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
        header("Access-Control-Allow-Origin: http://localhost:4005");
        $headers = [
            'Access-Control-Allow-Methods'=> 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers'=> 'Content-Type, X-Auth-Token, Origin'
        ];
        if($request->getMethod() == "OPTIONS") {
            // The client-side application can set only headers allowed in Access-Control-Allow-Headers
            return \Response::make('OK', 200, $headers);
        }

        $response = $next($request);
        $response->header('Access-Control-Allow-Credentials', 'true');
        foreach($headers as $key => $value)
            $response->header($key, $value);
        return $response;
    }
}
