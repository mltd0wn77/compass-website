-- Create the waitlist table
create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table waitlist enable row level security;

-- Create a policy that allows anyone to insert their email
create policy "Anyone can join waitlist"
  on waitlist
  for insert
  with check (true);

-- Create a policy that allows only authenticated users (admins) to view the list
-- Note: You'll need to set up auth or adjust this based on your admin needs
create policy "Only authenticated users can view waitlist"
  on waitlist
  for select
  using (auth.role() = 'authenticated');
