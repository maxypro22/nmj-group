-- ============================================
-- NMJ Group - Supabase Database Setup
-- Run this in Supabase SQL Editor
-- ============================================

-- 1. Create Messages table
create table if not exists messages (
  id uuid default uuid_generate_v4() primary key,
  name text,
  email text,
  subject text,
  message text,
  date text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 2. Create Site Content table
create table if not exists site_content (
  id integer primary key default 1,
  data jsonb not null
);

-- 3. Initialize default content row
insert into site_content (id, data) values (1, '{}')
on conflict (id) do nothing;

-- 4. Enable RLS and allow public access
alter table messages enable row level security;
create policy "Allow all access to messages" on messages for all using (true) with check (true);

alter table site_content enable row level security;
create policy "Allow all access to site_content" on site_content for all using (true) with check (true);
