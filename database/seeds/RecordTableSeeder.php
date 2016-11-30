<?php

use Illuminate\Database\Seeder;
use \App\Models\Record;

class RecordTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('tbl_record')->delete();

        Record::create(array('userId' => 1, 'step' => 4092, 'type' => 1, 'energy' => 673, 'time' => '2016-11-21'));
        Record::create(array('userId' => 1, 'step' => 2892, 'type' => 1, 'energy' => 400, 'time' => '2016-11-22'));
        Record::create(array('userId' => 1, 'step' => 10092, 'type' => 1, 'energy' => 1821, 'time' => '2016-11-23'));
        Record::create(array('userId' => 1, 'step' => 9092, 'type' => 2, 'energy' => 1781, 'time' => '2016-11-22'));
        Record::create(array('userId' => 2, 'step' => 17092, 'type' => 1, 'energy' => 2219, 'time' => '2016-11-21'));
        Record::create(array('userId' => 2, 'step' => 14092, 'type' => 1, 'energy' => 2009, 'time' => '2016-11-22'));
        Record::create(array('userId' => 1, 'step' => 8092, 'type' => 1, 'energy' => 1581, 'time' => '2016-11-30'));
        Record::create(array('userId' => 1, 'step' => 692, 'type' => 2, 'energy' => 40, 'time' => '2016-11-30'));
    }
}
