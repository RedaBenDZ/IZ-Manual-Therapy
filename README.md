# IZ Manual Therapy

Production-ready MVP for IZ Manual Therapy built with Next.js 14, Tailwind CSS, Supabase, Stripe Checkout, and Resend.

## Tech stack
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Supabase (PostgreSQL + Auth)
- Stripe Checkout
- Resend email
- Zod validation
- pnpm package manager

## Getting started
1. Install dependencies (pnpm required): `pnpm install`
2. Copy `.env.example` to `.env.local` and fill in values.
3. Run development server: `pnpm dev`

## Environment variables
See `.env.example` for required keys including Supabase, Stripe, Resend, and Google Maps settings.

## Supabase
Apply the SQL in `supabase/schema.sql` to create tables and policies. Update service role key and anon key in environment variables.

## Stripe
Configure webhook endpoint at `/api/booking/webhook` using the signing secret `STRIPE_WEBHOOK_SECRET`.

## Deployment
The project is ready for Vercel. Cron reminders are configured in `vercel.json` to trigger `/api/cron/reminders` daily at 09:00.
