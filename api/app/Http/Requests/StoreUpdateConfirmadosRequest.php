<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateConfirmadosRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nome' => [
                'required',
                'min:3',
                'max:255'
            ],
            'numero_criancas' => [
                'required',
                'min:1'
            ],
            'telefone' => [
                'required',
                'unique:confirmados',
                'min:9',
                'max:14'
            ],
            'observacao' => [
                'max:255'
            ],
        ];
    }
}
