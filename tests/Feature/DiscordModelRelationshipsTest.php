<?php

use App\Models\Channel;
use App\Models\Conversation;
use App\Models\DirectMessage;
use App\Models\Member;
use App\Models\Message;
use App\Models\Profile;
use App\Models\Server;
use App\Models\User;

it('wires discord domain relationships, has-many-through, and soft deletes', function () {
    $user = User::factory()->create();
    $profile = Profile::factory()->for($user)->create();

    $server = Server::factory()->for($profile)->create();
    $channel = Channel::factory()->for($server)->for($profile)->create();
    $member = Member::factory()->for($profile)->for($server)->create();

    $message = Message::factory()->for($member)->for($channel)->create();

    expect($user->profile->is($profile))->toBeTrue();
    expect($server->profile->is($profile))->toBeTrue();
    expect($channel->server->is($server))->toBeTrue();
    expect($message->channel->is($channel))->toBeTrue();
    expect($message->member->is($member))->toBeTrue();

    expect($server->messages()->first()->is($message))->toBeTrue();
    expect($profile->messages()->first()->is($message))->toBeTrue();

    $message->delete();
    expect(Message::query()->count())->toBe(0);
    expect(Message::withTrashed()->count())->toBe(1);

    $memberOne = Member::factory()->for($profile)->for($server)->create();
    $memberTwo = Member::factory()->create();

    $conversation = Conversation::factory()->create([
        'member_one_id' => $memberOne->id,
        'member_two_id' => $memberTwo->id,
    ]);

    $dm = DirectMessage::factory()->for($conversation)->for($memberOne)->create();

    expect($conversation->memberOne->is($memberOne))->toBeTrue();
    expect($conversation->memberTwo->is($memberTwo))->toBeTrue();
    expect($conversation->directMessages->first()->is($dm))->toBeTrue();

    $dm->delete();
    expect(DirectMessage::query()->count())->toBe(0);
    expect(DirectMessage::withTrashed()->count())->toBe(1);
});
