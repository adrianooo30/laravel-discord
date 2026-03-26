<?php

namespace Database\Factories;

use App\Models\Member;
use App\Models\Profile;
use App\Models\Server;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Member>
 */
class MemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'profile_id' => Profile::factory(),
            'server_id' => Server::factory(),
            'role' => 'guest',
        ];
    }
}
