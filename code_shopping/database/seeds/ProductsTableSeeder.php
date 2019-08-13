<?php

use CodeShopping\Models\Category;
use CodeShopping\Models\Product;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    public function run()
    {
        $categories = Category::all();
        factory(Product::class, 30)
            ->create()
            ->each(function (Product $product) use ($categories){
                $categoryId = $categories->random()->id;
                $product->categories()->attach($categoryId);
            });
    }
}
