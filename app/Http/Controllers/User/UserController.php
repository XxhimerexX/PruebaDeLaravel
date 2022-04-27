<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\TipoDocumento;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $users = User::all();
        return Inertia::render('Users/Index', ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $tipos_documentos = TipoDocumento::all();
        return Inertia::render('Users/Create',  ['tipos_documentos' => $tipos_documentos]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $user = new User();
        $request->validate([
            'p_nombre' => 'required',
            's_nombre' => 'required',
            'p_apellido' => 'required',
            's_apellido' => 'required',
            't_identificacion' => 'required',
            'identificacion' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);
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
        return Redirect::route('users')->with('success', 'User Create.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $id = $id;
        $users = User::all()->find($id);
        $tipos_documentos = TipoDocumento::all();
        return Inertia::render('Users/Edit', ['id' => $id, 'users' => $users, 'tipos_documentos' => $tipos_documentos]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $users = new User();
        // $users->update($request,$id);
        $users = User::findOrFail($id);
        $request->validate([
            'p_nombre' => 'required',
            's_nombre' => 'required',
            'p_apellido' => 'required',
            's_apellido' => 'required',
            't_identificacion' => 'required',
            'identificacion' => 'required',
            'email' => 'required|email|unique:users,email,'.$id,
        ]);
        $users->p_nombre = $request->p_nombre;
        $users->s_nombre = $request->s_nombre;
        $users->p_apellido = $request->p_apellido;
        $users->s_apellido = $request->s_apellido;
        $users->t_identificacion = $request->t_identificacion;
        $users->identificacion = $request->identificacion;
        $users->email = $request->email;
        // $users->password = $request->password;
        $users->save();
        // return Redirect::back()->with('success', 'Organization updated.');
        return Redirect::route('users')->with('success', 'User updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $users = new User();
        $users->destroy($id);
        // $users->findOrFail($id)
        // $users->delete($id);

        return Redirect::route('users')->with('success', 'User delete.');
    }
}
