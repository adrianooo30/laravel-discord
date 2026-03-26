# TODOS

- [ ] sidebar
- [ ] create server
    - [] text
    - [] video
    - [] audio
    - upload image
- [ ] send message
    - attachment files
- [ ] invite user
- [ ]

Here's the complete task list, organized so every parent feature is built before its dependents.

---

## Phase 1 — Project Foundation

- [*] Create new Laravel 11 project
- [*] Install and configure Inertia.js with React
- [*] Install and configure Tailwind CSS
- [*] Install and configure shadcn/ui
- [ ] Set up `.env` file with all required keys
- [*] Create database and run initial migrations
    - [*] setup database structure

---

## Phase 2 — Authentication

- [*] Install and configure Laravel Fortify
- [ ] Install and configure Laravel Socialite
- [*] Create `users` migration and model
- [*] Create `profiles` migration and model
- [*] Build Register page (React/Inertia)
- [*] Build Login page (React/Inertia)
- [*] Implement email/password auth via Fortify
- [ ] Implement Google OAuth via Socialite
- [ ] Auto-create profile on first login
- [ ] Implement logout
- [ ] Protect routes using Fortify middleware
- [ ] Build light/dark mode toggle with persistence

---

## Phase 3 — Layout & Navigation Shell

- [ ] Build root layout (sidebar + main content area)
- [ ] Build mobile responsive layout with drawer
- [ ] Build navigation sidebar shell (left icon bar)
- [ ] Build server sidebar shell (channels + members list)
- [ ] Build mobile toggle button for sidebar drawer
- [ ] Add user avatar component
- [ ] Add user button (profile + logout)

---

## Phase 4 — Server Management

- [ ] Create `servers` migration and model
- [ ] Create `members` migration and model
- [ ] Set up Eloquent relationships (Server, Member, Profile)
- [ ] Build create server modal (name + image upload)
- [ ] Build initial server prompt page (shown when user has no servers)
- [ ] Implement server creation API endpoint
- [ ] Auto-create general channel and admin member on server creation
- [ ] Redirect user to general channel after server creation
- [ ] Render server icons in navigation sidebar
- [ ] Highlight active server in navigation sidebar
- [ ] Build edit server modal
- [ ] Implement edit server API endpoint
- [ ] Build delete server modal
- [ ] Implement delete server API endpoint
- [ ] Build server header dropdown (shows server name + actions)
- [ ] Show correct dropdown actions based on role (admin/moderator/guest)

---

## Phase 5 — Invite System

- [ ] Add `invite_code` unique field to servers migration
- [ ] Build invite people modal (shows invite link + copy button)
- [ ] Implement generate new invite link API endpoint
- [ ] Build invite acceptance page (`/invite/{inviteCode}`)
- [ ] Implement join server logic (check existing membership, create member)
- [ ] Redirect already-joined members back to their server

---

## Phase 6 — Member Management

- [ ] Build manage members modal (lists all members with roles)
- [ ] Show role icons (admin shield, moderator shield, guest none)
- [ ] Implement change member role API endpoint
- [ ] Implement kick member API endpoint
- [ ] Build leave server modal (for non-admin members)
- [ ] Implement leave server API endpoint

---

## Phase 7 — Channel Management

- [ ] Create `channels` migration and model
- [ ] Set up Eloquent relationships (Channel, Server, Member)
- [ ] Build create channel modal (name + type selector)
- [ ] Implement create channel API endpoint
- [ ] Prevent naming a channel "general"
- [ ] Pre-select channel type based on which section was clicked
- [ ] Render text channels list in server sidebar
- [ ] Render voice channels list in server sidebar
- [ ] Render video channels list in server sidebar
- [ ] Show lock icon on general channel
- [ ] Show edit/delete icons on non-general channels (admin/moderator only)
- [ ] Build edit channel modal
- [ ] Implement edit channel API endpoint
- [ ] Build delete channel modal
- [ ] Implement delete channel API endpoint
- [ ] Highlight active channel in server sidebar
- [ ] Redirect to general channel when visiting a server root URL

---

## Phase 8 — Member Sidebar List

- [ ] Render members list in server sidebar
- [ ] Show role icons next to member names
- [ ] Exclude current user from members list
- [ ] Highlight active member conversation in sidebar
- [ ] Navigate to member conversation on member click

---

## Phase 9 — Server Search

- [ ] Build CMD+K search modal
- [ ] Search across text channels, voice channels, video channels, and members
- [ ] Redirect to channel on channel select
- [ ] Redirect to conversation on member select
- [ ] Trigger search modal via keyboard shortcut

---

## Phase 10 — File Uploads

- [ ] Install and configure Spatie Media Library
- [ ] Set up file upload endpoint for server images
- [ ] Set up file upload endpoint for message attachments (images + PDFs)
- [ ] Build file upload component (drag and drop)
- [ ] Build PDF preview component
- [ ] Build image preview component
- [ ] Add remove uploaded file button

---

## Phase 11 — Chat Header

- [ ] Build chat header component
- [ ] Show hashtag icon and channel name for text channels
- [ ] Show member avatar and name for direct message conversations
- [ ] Add mobile sidebar toggle button to chat header
- [ ] Add socket connection status indicator (live vs polling)

---

## Phase 12 — Text Channel Messaging

- [ ] Create `messages` migration and model
- [ ] Set up Eloquent relationships (Message, Channel, Member)
- [ ] Build chat welcome component (shown at top of empty channel)
- [ ] Build chat messages component
- [ ] Implement fetch messages API endpoint (cursor-based pagination)
- [ ] Implement TanStack Query infinite scroll (batches of 10)
- [ ] Build chat input component
- [ ] Implement send message API endpoint
- [ ] Build emoji picker component
- [ ] Implement message edit (inline input on edit click)
- [ ] Implement message soft delete
- [ ] Build delete message modal
- [ ] Implement delete message API endpoint
- [ ] Implement edit message API endpoint
- [ ] Show edited indicator on updated messages
- [ ] Show deleted placeholder on soft-deleted messages
- [ ] Show action buttons (edit/delete) on message hover
- [ ] Restrict edit to message owner only
- [ ] Restrict delete to message owner, moderator, and admin
- [ ] Navigate to member conversation on clicking member name or avatar

---

## Phase 13 — File Messages

- [ ] Add file upload button to chat input (opens file message modal)
- [ ] Build file message modal (upload attachment)
- [ ] Implement send file message API endpoint
- [ ] Render image messages inline in chat
- [ ] Render PDF messages with link and file icon in chat

---

## Phase 14 — Real-Time Messaging

- [ ] Install and configure Laravel Reverb
- [ ] Broadcast new message event on message creation
- [ ] Broadcast update event on message edit or delete
- [ ] Install and configure Laravel Echo on the frontend
- [ ] Build `useChatSocket` hook (listens for new and updated messages)
- [ ] Update TanStack Query cache in real time on socket events
- [ ] Implement polling fallback (every 1 second) when socket is disconnected
- [ ] Build `useChatScroll` hook (auto scroll on new message, manual scroll loads more)

---

## Phase 15 — Direct Messaging

- [ ] Create `conversations` migration and model
- [ ] Create `direct_messages` migration and model
- [ ] Set up Eloquent relationships (Conversation, DirectMessage, Member)
- [ ] Build get or create conversation utility (handles both member order combinations)
- [ ] Build direct message conversation page
- [ ] Implement fetch direct messages API endpoint (cursor-based pagination)
- [ ] Implement send direct message API endpoint
- [ ] Implement edit direct message API endpoint
- [ ] Implement delete direct message API endpoint
- [ ] Broadcast new direct message event via Reverb
- [ ] Broadcast update event on direct message edit or delete
- [ ] Reuse chat messages, chat input, and chat welcome components

---

## Phase 16 — Voice & Video Channels

- [ ] Install LiveKit PHP SDK and React SDK
- [ ] Add LiveKit environment variables
- [ ] Build LiveKit token generation API endpoint
- [ ] Build media room component (wraps LiveKit room)
- [ ] Render media room for audio channels (camera off by default)
- [ ] Render media room for video channels (camera on by default)
- [ ] Leave channel by clicking another channel

---

## Phase 17 — One-on-One Video Calls

- [ ] Build chat video button component (toggles video param in URL)
- [ ] Add video call button to chat header for direct message conversations
- [ ] Render media room when video param is present in URL
- [ ] Hide chat messages and input when video call is active
- [ ] Implement end video call (removes video param from URL)

---

## Phase 18 — Deployment

- [ ] Set `APP_ENV=production` and `APP_DEBUG=false`
- [ ] Configure production database
- [ ] Set all production environment variables including LiveKit and Reverb URLs
- [ ] Run `php artisan config:cache` and `php artisan route:cache`
- [ ] Build frontend assets with `npm run build`
- [ ] Configure Nginx/server for WebSocket proxy pass to Reverb
- [ ] Deploy and verify socket connection status indicator shows live
