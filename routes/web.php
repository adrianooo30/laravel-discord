<?php

use App\Http\Controllers\ServerController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::get("server/{server}/image", [ServerController::class, "getImageUrl"])->name("server.image");
    Route::resource("server", ServerController::class);
});

require __DIR__ . '/settings.php';
