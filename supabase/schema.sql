create table if not exists admin_profile (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz default now()
);

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  duration_minutes integer not null,
  price_pence integer not null,
  sort_order integer default 0,
  active boolean default true,
  created_at timestamptz default now()
);

create table if not exists packages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sessions integer not null,
  price_pence integer not null,
  savings text,
  sort_order integer default 0,
  active boolean default true,
  created_at timestamptz default now()
);

create table if not exists package_services (
  id uuid primary key default gen_random_uuid(),
  package_id uuid references packages(id) on delete cascade,
  service_id uuid references services(id) on delete cascade,
  created_at timestamptz default now()
);

create table if not exists availability_slots (
  id uuid primary key default gen_random_uuid(),
  start_time timestamptz not null,
  end_time timestamptz not null,
  booked boolean default false,
  created_at timestamptz default now()
);

create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text not null,
  phone text not null,
  address text not null,
  postcode text not null,
  created_at timestamptz default now()
);

create table if not exists medical_history (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id) on delete cascade,
  conditions text[] default '{}',
  medications text,
  allergies text,
  injuries text,
  updated_at timestamptz default now()
);

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id) on delete cascade,
  service_id uuid references services(id),
  package_id uuid references packages(id),
  slot_id uuid references availability_slots(id),
  status text default 'pending',
  price_paid_pence integer,
  payment_intent_id text,
  created_at timestamptz default now()
);

create table if not exists admin_notifications (
  id uuid primary key default gen_random_uuid(),
  message text not null,
  read boolean default false,
  booking_id uuid references bookings(id),
  created_at timestamptz default now()
);

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text,
  consent boolean default false,
  created_at timestamptz default now()
);

-- Policies
alter table services enable row level security;
alter table packages enable row level security;
alter table package_services enable row level security;
alter table availability_slots enable row level security;
alter table clients enable row level security;
alter table medical_history enable row level security;
alter table bookings enable row level security;
alter table admin_notifications enable row level security;
alter table contact_submissions enable row level security;

-- Public read policies
create policy "Public services read" on services for select using (true);
create policy "Public packages read" on packages for select using (true);
create policy "Public availability view" on availability_slots for select using (booked = false or booked is null);

-- Admin full access
create policy "Admin full access services" on services for all using (auth.uid() is not null);
create policy "Admin full access packages" on packages for all using (auth.uid() is not null);
create policy "Admin full access package services" on package_services for all using (auth.uid() is not null);
create policy "Admin full access slots" on availability_slots for all using (auth.uid() is not null);
create policy "Admin full access clients" on clients for all using (auth.uid() is not null);
create policy "Admin full access medical history" on medical_history for all using (auth.uid() is not null);
create policy "Admin full access bookings" on bookings for all using (auth.uid() is not null);
create policy "Admin full access notifications" on admin_notifications for all using (auth.uid() is not null);

-- Public inserts
create policy "Public create clients" on clients for insert with check (true);
create policy "Public create medical" on medical_history for insert with check (true);
create policy "Public create bookings" on bookings for insert with check (true);
create policy "Public create contact submissions" on contact_submissions for insert with check (true);
