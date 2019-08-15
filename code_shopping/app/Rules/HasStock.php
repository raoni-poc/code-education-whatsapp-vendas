<?php

namespace CodeShopping\Rules;

use CodeShopping\Models\Product;
use Illuminate\Contracts\Validation\Rule;

class HasStock implements Rule
{
    private $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value): bool
    {
        return $this->product->stock - $value >= 0;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return "The product {$this->product->name} doesn't have sufficient stock to output";
    }
}
