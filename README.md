# Discord Clone - Feature Analysis & Laravel/React Recreation Guide

## Core Features Overview

Here's a structured breakdown of everything built in the tutorial, organized by complexity.

---

## Feature Categories

### 1. Authentication & User Management
- Clerk-based auth (email, Google OAuth)
- User profiles auto-created on first login
- Light/dark mode toggle with persistence

### 2. Server Management
- Create, edit, delete servers
- Server image upload
- Unique invite link generation & regeneration
- Member roles: Admin, Moderator, Guest
- Kick members, change member roles

### 3. Channel System
- Three channel types: Text, Audio, Video
- Create, edit, delete channels
- Protected "general" channel (undeletable, unrenamable)
- Channel search with keyboard shortcut (CMD+K)

### 4. Real-Time Messaging
- Socket.IO for live message delivery
- Polling fallback when socket fails
- Infinite scroll with cursor-based pagination (batches of 10)
- Message attachments: images and PDFs
- Edit and soft-delete messages
- Emoji picker

### 5. Direct Messaging
- One-on-one conversations between members
- Same messaging features as channels
- Auto-created on first click

### 6. Video & Audio
- Video channels via LiveKit
- Audio channels via LiveKit
- One-on-one video calls in direct messages
- Toggle camera/mic

### 7. UI/UX
- Fully responsive (mobile drawer)
- Connection status indicator (live vs polling)
- Tooltips, modals, dropdowns throughout

---

## Laravel + React Tech Stack Mapping

| Original (Next.js) | Laravel Equivalent |
|---|---|
| Next.js App Router | Laravel + Inertia.js OR Laravel API + React SPA |
| Clerk Auth | Laravel Breeze / Jetstream / Socialite |
| Prisma ORM | Eloquent ORM |
| PlanetScale MySQL | MySQL (any host) |
| Socket.IO | Laravel Reverb (first-party) OR Soketi |
| UploadThing | Spatie Media Library + custom storage |
| LiveKit | LiveKit PHP SDK |
| TanStack Query | TanStack Query (React, same library) |
| shadcn/ui | shadcn/ui (same, works with any React setup) |

---

## Recommended Stack

**Laravel 11 + Inertia.js + React** is your cleanest path. This keeps everything in one codebase, shares session auth naturally, and Laravel Reverb handles WebSockets natively.

```
Laravel 11
├── Inertia.js (bridges Laravel ↔ React)
├── Laravel Reverb (WebSockets, first-party)
├── Laravel Socialite (Google OAuth)
├── Spatie Media Library (file uploads)
├── Eloquent ORM (replaces Prisma)
└── React (frontend)
    ├── shadcn/ui
    ├── TanStack Query
    ├── LiveKit React SDK
    └── Zustand (replaces custom Zustand hooks)
```

---

## Database Schema (Eloquent Models)

```php
// migrations structure

Profile         → id, user_id, name, image_url, email
Server          → id, profile_id, name, image_url, invite_code (unique)
Member          → id, server_id, profile_id, role (admin/moderator/guest)
Channel         → id, server_id, profile_id, name, type (text/audio/video)
Message         → id, channel_id, member_id, content, file_url, deleted (bool)
Conversation    → id, member_one_id, member_two_id (unique composite)
DirectMessage   → id, conversation_id, member_id, content, file_url, deleted
```

Relationships mirror the Prisma schema exactly — just use Eloquent `hasMany`, `belongsTo`, and `belongsToMany`.

---

## Implementation Roadmap

I'd suggest tackling this in phases:

**Phase 1 — Foundation**
- Laravel 11 + Inertia + React scaffold
- Auth with Breeze + Socialite (Google)
- Profile auto-creation on login
- Database migrations + Eloquent models

**Phase 2 — Servers & Members**
- Server CRUD (create, edit, delete)
- Invite system with unique codes
- Member role management (kick, promote)
- File upload for server images (Spatie)

**Phase 3 — Channels & Messaging**
- Channel CRUD with type support
- REST API for message pagination (cursor-based)
- TanStack Query infinite scroll on the frontend
- Soft delete + edit for messages

**Phase 4 — Real-Time**
- Laravel Reverb setup
- Broadcasting events for new/edited/deleted messages
- Frontend Echo listener replacing the Socket.IO hooks
- Polling fallback

**Phase 5 — Direct Messages & Video**
- Conversation auto-creation logic
- Direct message API + broadcasting
- LiveKit integration for video/audio channels
- One-on-one video calls

**Phase 6 — Polish**
- Mobile responsive sidebar (Sheet component)
- Emoji picker, file attachments
- CMD+K search
- Connection status indicator

---

## Key Laravel Reverb Difference

The biggest architectural difference from the tutorial is replacing Socket.IO with Reverb. Instead of custom Pages-folder API routes, you'll broadcast Eloquent model events:

```php
// In your MessageController
broadcast(new MessageSent($message))->toOthers();

// Frontend (replaces useSocket hook)
window.Echo.channel(`chat.${channelId}`)
  .listen('MessageSent', (e) => {
    queryClient.setQueryData(...)
  })
```

This is actually cleaner than the Next.js/Socket.IO approach since Reverb is tightly integrated with Laravel's event system.

---

Would you like me to dive deeper into any specific phase, generate the migration files, or scaffold out a specific controller/component?
