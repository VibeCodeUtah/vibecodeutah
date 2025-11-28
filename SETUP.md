# VibeCodeUtah - Database & Admin Setup

## Quick Setup (10 minutes)

### 1. Create Supabase Project (Free)

1. Go to [supabase.com](https://supabase.com) and sign up
2. Click "New Project"
3. Name it `vibecodeutah` (or whatever you want)
4. Set a database password (save this!)
5. Choose a region close to you
6. Click "Create new project" and wait ~2 minutes

### 2. Set Up Database Tables

1. In Supabase dashboard, click **SQL Editor** (left sidebar)
2. Click "New query"
3. Copy the contents of `supabase/schema.sql` and paste it
4. Click "Run" (or Cmd+Enter)
5. You should see "Success. No rows returned" - that's good!

### 3. Create Admin User

1. In Supabase, go to **Authentication** > **Users**
2. Click "Add user" > "Create new user"
3. Enter your admin email and password
4. Click "Create user"

### 4. Get Your API Keys

1. Go to **Settings** > **API** (in Supabase dashboard)
2. Copy these values:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **anon public** key (long string)
   - **service_role** key (keep this secret!)

### 5. Set Environment Variables

Create a `.env` file in your project root:

```bash
# Copy from .env.example and fill in your values
cp .env.example .env
```

Then edit `.env`:

```
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### 6. Run Locally

```bash
npm run dev
```

Then visit:
- `http://localhost:4321/join` - Registration form
- `http://localhost:4321/admin` - Admin dashboard (login with your admin user)

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The app builds to a Node.js server. Run with:
```bash
npm run build
node dist/server/entry.mjs
```

---

## Routes

| Route | Description |
|-------|-------------|
| `/join` | Team registration form |
| `/join/success` | Registration success page |
| `/teams` | View all teams |
| `/admin` | Admin dashboard (protected) |
| `/admin/login` | Admin login |

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/register` | POST | Submit team registration |
| `/api/donate` | POST | Submit donation inquiry |

---

## Database Tables

- **team_registrations** - Stores team signups
- **donation_inquiries** - Stores sponsor/donation inquiries
- **contact_submissions** - General contact form submissions

All submissions are viewable in:
1. Admin dashboard at `/admin`
2. Supabase dashboard (Table Editor)
