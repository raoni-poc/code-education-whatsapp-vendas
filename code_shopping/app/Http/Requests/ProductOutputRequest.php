<?php

namespace CodeShopping\Http\Requests;

use CodeShopping\Models\Product;
use CodeShopping\Rules\HasStock;
use Illuminate\Foundation\Http\FormRequest;

class ProductOutputRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $product = Product::findOrFail($this->product_id);
        return [
            'amount' => ['required', 'integer', 'min:1', new HasStock($product)]
        ];
    }

}