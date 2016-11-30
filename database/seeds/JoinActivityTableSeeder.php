<?php

use Illuminate\Database\Seeder;
use App\Models\ActivityJoin;

class JoinActivityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \DB::table('tbl_join_activity')->delete();
        ActivityJoin::create(['userId' => 1, 'activityId' => 1, 'step' => 1029, 'expDiff' => 10, 'energy' => 129]);
        ActivityJoin::create(['userId' => 2, 'activityId' => 1, 'step' => 329, 'expDiff' => -1, 'energy' => 50]);
    }
}
