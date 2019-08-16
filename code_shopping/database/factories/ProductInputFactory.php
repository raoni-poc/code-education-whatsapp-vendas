<?php

use CodeShopping\Models\ProductInput;
use Faker\Generator as Faker;

$factory->define(ProductInput::class, function (Faker $faker) {
    return [
        'amount' => $faker->numberBetween(10, 150)
    ];
});
