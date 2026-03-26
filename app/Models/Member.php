<?php

namespace App\Models;

use Database\Factories\MemberFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Member extends Model
{
    /** @use HasFactory<MemberFactory> */
    use HasFactory, HasUuids;

    /**
     * @var list<string>
     */
    protected $fillable = [
        'profile_id',
        'server_id',
        'role',
    ];

    /**
     * @return BelongsTo<Profile, $this>
     */
    public function profile(): BelongsTo
    {
        return $this->belongsTo(Profile::class);
    }

    /**
     * @return BelongsTo<Server, $this>
     */
    public function server(): BelongsTo
    {
        return $this->belongsTo(Server::class);
    }

    /**
     * @return HasMany<Message, $this>
     */
    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }

    /**
     * @return HasMany<Conversation, $this>
     */
    public function conversationsAsMemberOne(): HasMany
    {
        return $this->hasMany(Conversation::class, 'member_one_id');
    }

    /**
     * @return HasMany<Conversation, $this>
     */
    public function conversationsAsMemberTwo(): HasMany
    {
        return $this->hasMany(Conversation::class, 'member_two_id');
    }

    /**
     * @return HasMany<DirectMessage, $this>
     */
    public function directMessages(): HasMany
    {
        return $this->hasMany(DirectMessage::class);
    }
}
