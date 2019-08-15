<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Requests\ProductOutputRequest;
use CodeShopping\Http\Resources\ProductOutputResource;
use CodeShopping\Models\ProductOutput;
use CodeShopping\Http\Controllers\Controller;

class ProductOutputController extends Controller
{
    public function index()
    {
        $outputs = ProductOutput::with('product')->paginate();
        return ProductOutputResource::collection($outputs);
    }

    public function store(ProductOutputRequest $request)
    {
        $input = ProductOutput::create($request->all());
        return new ProductOutputResource($input);
    }

    public function show(ProductOutput $output)
    {
        return new ProductOutputResource($output);
    }
}
