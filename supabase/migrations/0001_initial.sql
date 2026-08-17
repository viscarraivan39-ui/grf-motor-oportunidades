-- GRF: esquema inicial conceptual
-- La ampliación completa del modelo se realizará durante la Etapa 1.

create extension if not exists pgcrypto;

create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  legal_name text not null,
  rut text,
  trade_name text,
  incorporation_date date,
  region text,
  commune text,
  website text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists companies_rut_idx on companies(rut);
