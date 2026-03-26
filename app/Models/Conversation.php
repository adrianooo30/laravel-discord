<?php

namespace App\Models;

use Database\Factories\ConversationFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Conversation extends Model
{
    /** @use HasFactory<ConversationFactory> */
    use HasFactory, HasUuids;

    /**
     * @var list<string>
     */
    protected $fillable = [
        'member_one_id',
        'member_two_id',
    ];

    /**
     * @return BelongsTo<Member, $this>
     */
    public function memberOne(): BelongsTo
    {
        return $this->belongsTo(Member::class, 'member_one_id');
    }

    /**
     * @return BelongsTo<Member, $this>
     */
    public function memberTwo(): BelongsTo
    {
        return $this->belongsTo(Member::class, 'member_two_id');
    }

    /**
     * @return HasMany<DirectMessage, $this>
     */
    public function directMessages(): HasMany
    {
        return $this->hasMany(DirectMessage::class);
    }
}
