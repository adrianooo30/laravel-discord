<?php

namespace Database\Factories;

use App\Models\Conversation;
use App\Models\DirectMessage;
use App\Models\Member;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<DirectMessage>
 */
class DirectMessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'member_id' => Member::factory(),
            'conversation_id' => Conversation::factory(),
            'content' => fake()->sentence(),
            'file_url' => null,
        ];
    }
}
