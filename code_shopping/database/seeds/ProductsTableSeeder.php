<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    public function run()
    {
        factory(\CodeShopping\Models\Product::class, 30)->create();
    }
}
