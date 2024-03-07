# Taskello: Trello Clone project

This is a task/project management developed with [Next.js 14](https://nextjs.org) app inspired by [Trello](https://www.trello.com).

## Features

- Authentication / Authorization by [Clerk](https://clerk.com)
- Organizations / Workspaces
- Activity log for entire organization
- Board CRUD operations
- [Unsplash API](https://unsplash.com/developers) for random beautiful cover images
- List CRUD operations (with drag & drop reordering)
- Card CRUD operations (with drag & drop reordering)
- Card activity log
- Board limit for unsubscripted organizations and [Stripe](https://stripe.com) subscription for each organization to unlock unlimited boards
- [PostgreSQL](https://www.postgresql.org) DB
- [Prisma](https://www.prisma.io) ORM
- [shadcnUI](https://ui.shadcn.com) & [TailwindCSS](https://tailwindcss.com)

## Installation

### 1. Clone the repository

```
git clone https://github.com/ardakoc/trello-clone.git
```

### 2. Install packages

```
npm i
```

### 3. Create the env file

```
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
NEXT_PUBLIC_APP_URL=
DATABASE_URL=
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
```

### 4. Setup Prisma

```
npx prisma generate
npx prisma db push
```

Change the db provider with yours in schema.prisma datasource db section.

### 5. Start the app

```
npm run dev
```
