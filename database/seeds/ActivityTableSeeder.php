<?php

use Illuminate\Database\Seeder;
use App\Models\Activity;

class ActivityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('tbl_activity')->delete();

        Activity::create(array('userId' => 1, 'title' => 'go run', 'type' => 1, 'price' => 11, 'timeBegin' => '2016-11-12 13:40:20', 'timeEnd' => '2016-11-13 18:20:10', 'description' => 'just go', 'userNums' => 1));
        Activity::create(array('userId' => 1, 'title' => 'go run', 'type' => 1, 'price' => 21, 'timeBegin' => '2016-11-13 13:40:20', 'timeEnd' => '2016-11-13 18:20:10', 'description' => 'with me!', 'userNums' => 1));
        Activity::create(array('userId' => 1, 'title' => 'go group', 'type' => 2, 'price' => 0, 'timeBegin' => '2016-11-14 13:40:20', 'timeEnd' => '2016-11-25 18:20:10', 'description' => 'me!', 'userNums' => 1));
        Activity::create(array('userId' => 2, 'title' => 'go run', 'type' => 1, 'price' => 1, 'timeBegin' => '2016-11-15 13:40:20', 'timeEnd' => '2016-11-16 18:20:10', 'description' => 'just!', 'userNums' => 1));
        Activity::create(array('userId' => 2, 'title' => 'go group', 'type' => 2, 'price' => 100, 'timeBegin' => '2016-11-16 13:40:20', 'timeEnd' => '2016-11-20 18:20:10', 'description' => 'just go with me!', 'userNums' => 1));
    }
}
