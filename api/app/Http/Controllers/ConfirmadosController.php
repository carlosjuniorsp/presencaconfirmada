<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUpdateConfirmadosRequest;
use App\Http\Resources\ConfirmadosResource;
use App\Models\Confirmados;
use Illuminate\Http\Request;

class ConfirmadosController extends Controller
{
    public function index(){
        $confirmados = Confirmados::all();
        return ConfirmadosResource::collection($confirmados);
    }

    public function store(StoreUpdateConfirmadosRequest $request)
    {
        $data = $request->validated();
        $user = Confirmados::create($data);
        return new ConfirmadosResource($user);
    }
}
