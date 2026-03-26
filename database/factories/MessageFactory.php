<?php

namespace Database\Factories;

use App\Models\Channel;
use App\Models\Member;
use App\Models\Message;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Message>
 */
class MessageFactory extends Factory
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
            'channel_id' => Channel::factory(),
            'content' => fake()->sentence(),
            'file_url' => null,
        ];
    }
}
