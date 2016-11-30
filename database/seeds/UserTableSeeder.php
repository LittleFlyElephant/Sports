<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('tbl_user')->delete();

        User::create(array(
            'username' => 'cr1',
            'password' => '123456',
            'email' => '1827618210@qq.com',
            'level' => 15,
            'exp' => 3928,
            'permission' => 1,
            'avatar' => '1.jpg'
        ));
        User::create(array(
            'username' => 'cr2',
            'password' => '123456',
            'email' => '1395314398@qq.com',
            'level' => 10,
            'exp' => 1092,
            'permission' => 1,
            'avatar' => '3.jpg'
        ));
        User::create(array(
            'username' => 'admin',
            'password' => '654321',
            'email' => '1395314348@qq.com',
            'level' => 1,
            'exp' => 10000,
            'permission' => 3,
            'avatar' => '4.jpg'
        ));
    }
}
