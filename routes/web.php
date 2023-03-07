<?php

use App\Http\Controllers\SpaController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/logout', function () {
    Auth::logout();
    return redirect('/login');
});

Auth::routes();

Route::group(['middleware' => 'auth', 'prefix' => 'web-api'], function () {
    Route::apiResource('users', UserController::class);
});

Route::view('/{path?}', 'layouts.app')->where('any', '^(?!login|register|forgot-password|reset-password*|verify-email|email/verification-notification*).*$')->middleware('auth');
