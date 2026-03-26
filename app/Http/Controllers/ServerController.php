<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServerRequest;
use App\Models\Server;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ServerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ServerRequest $request)
    {
        $validated = $request->validated();

        // dd($validated);

        $image_url = Storage::disk("local")->put("servers", $validated["image_url"]);

        $server = $request->user()->profile->servers()->create([
            "name" => $validated["name"],
            "image_url" => $image_url,
        ]);

        // dd($server->toArray());

        return redirect()->route('dashboard');
        // return redirect()->route('server.show', $server);
    }

    public function getImageUrl(Server $server)
    {
        return Storage::disk("local")->get($server->image_url);
    }

    /**
     * Display the specified resource.
     */
    public function show(Server $server)
    {
        // if ($server->profile->user_id !== auth()->id()) {
        // TODO: YOU'RE NOT A MEMBER OF THIS SERVER
        // abort(403);
        // }

        return inertia("server/show", [
            "server" => $server,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
