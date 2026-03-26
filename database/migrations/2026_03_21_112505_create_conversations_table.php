<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('conversations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('member_one_id');
            $table->uuid('member_two_id');
            $table->timestamps();

            $table->foreign('member_one_id')->references('id')->on('members')->cascadeOnDelete();
            $table->foreign('member_two_id')->references('id')->on('members')->cascadeOnDelete();
            $table->unique(['member_one_id', 'member_two_id']);
            $table->index('member_two_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('conversations');
    }
};
