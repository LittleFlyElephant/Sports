<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Route::group(['middleware' => ['api_header'], 'prefix' => '/test/'], function () {
    Route::get('test/{id}/{userid}','CommonController@test');
    Route::get('act', 'CommonController@testActivity');
    Route::get('session', 'CommonController@setSession');
});

//common
Route::group(['middleware' => ['api_header'], 'prefix' => '/'], function(){
    Route::post('login', 'LoginController@login');
    Route::post('register', 'LoginController@register');
});

//user
Route::group(['middleware' => ['api_header'], 'prefix' => '/user/'], function(){
    Route::get('history/{user}/{day?}', 'UserController@getHistory');
    Route::get('rank/{day}/{type?}', 'UserController@getRank');
    Route::get('fans/{user}/{key?}', 'UserController@getFans');
    Route::get('followers/{user}/{key?}', 'UserController@getFollowers');
    Route::get('info/{user}', 'UserController@getUser');
    Route::post('modify', 'UserController@modifyUser');
    Route::post('follow', 'UserController@addFollowers');
    Route::post('unfollow/{user}', 'UserController@deleteFollowers');
});

//activity
Route::group(['middleware' => ['api_header'], 'prefix' => '/activity/'], function(){
    Route::get('recent', 'ActivityController@getRecentActivities');
    Route::get('list/{key?}', 'ActivityController@getAllList');
    Route::post('modify', 'ActivityController@modifyActivity');
    Route::post('delete', 'ActivityController@deleteActivity');
    Route::post('add', 'ActivityController@addActivity');
    Route::post('join', 'ActivityController@joinActivity');
    Route::post('drop', 'ActivityController@dropActivity');
});
