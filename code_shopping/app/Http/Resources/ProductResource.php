<?php

namespace CodeShopping\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' =>$this->description,
            'slug' => $this->slug,
            'price' => (float)$this->price,
            'stock' => $this->stock,
            'active' => (bool)$this->active,
            'created_at' => $this->created_at,
            'updated_at' => $this->update_at,
        ];
    }
}
