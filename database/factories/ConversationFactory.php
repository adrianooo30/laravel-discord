<?php

namespace Database\Factories;

use App\Models\Conversation;
use App\Models\Member;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Conversation>
 */
class ConversationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'member_one_id' => Member::factory(),
            'member_two_id' => Member::factory(),
        ];
    }
}
