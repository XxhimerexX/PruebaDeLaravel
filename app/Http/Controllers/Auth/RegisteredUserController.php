<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\TipoDocumento;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $tipos_documentos = TipoDocumento::all();
        return Inertia::render('Auth/Register', ['tipos_documentos' => $tipos_documentos]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $user = new User();
        $data = array(
            'p_nombre' => $request->input('p_nombre'),
            's_nombre' => $request->input('s_nombre'),
            'p_apellido' => $request->input('p_apellido'),
            's_apellido' => $request->input('s_apellido'),
            't_identificacion' => $request->input('t_identificacion'),
            'identificacion' => $request->input('identificacion'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        );

        $user->create($data);

        // $user = User::create([
        //     'p_nombre' => $request->p_nombre,
        //     's_nombre' => $request->s_nombre,
        //     'p_apellido' => $request->p_apellido,
        //     's_apellido' => $request->s_apellido,
        //     't_identificacion' => $request->t_identificacion,
        //     'identificacion' => $request->identificacion,
        //     'email' => $request->email,
        //     'password' => Hash::make($request->password),
        // ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
