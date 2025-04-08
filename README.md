# Dewesoft Assignment – To-Do App

This is a modern full-stack web application for managing tasks. Built using **Next.js 14** and **Chakra UI**, it allows users to create, toggle, and delete todos with persistent storage. The app is styled for both light and dark mode and fully responsive across devices.

**Link to deployed site:** [dewesoft-todo](https://dewesoft-todo-j4gyeedpi-majs-projects-c18becb5.vercel.app)

---

## 🔧 Features

-   Create a new todo
-   Toggle completion status
-   Delete an existing todo
-   Dark/light mode toggle
-   Persistent database (PostgreSQL + Prisma)
-   Deployed with Vercel

---

## 🧱 Tech Stack

-   **Next.js 14**
-   **Chakra UI** (Styling & components)
-   **Prisma** (ORM for database access)
-   **PostgreSQL** (via Neon.tech)
-   **TypeScript**
-   **Vercel** (Deployment)

---

## 📁 Project Structure

```
📂 src
 ├── 📂 app
 │    ├── layout.tsx             # Root layout
 │    ├── page.tsx               # Home page
 │    ├── providers.tsx          # Chakra provider setup
 │    ├── globals.css            # Global styles
 │    ├── 📂 todos/
 │    │    ├── page.tsx          # Main To-Do page
 │    │    ├── error.tsx         # Error boundary for /todos
 │    │    ├── loading.tsx       # Loading spinner for /todos
 │    ├── 📂 api/
 │    │    ├── Interfaces.ts     # TypeScript interfaces
 │    │    ├── Schemas.ts        # Zod schemas for validation
 ├── 📂 components
 │    ├── Navbar.tsx             # Navigation bar
 │    ├── TodoInput.tsx          # Input field for new todos
 │    ├── TodoItem.tsx           # Display + actions for each todo
 ├── 📂 lib
 │    ├── prisma.ts              # Prisma client
 │    ├── todo.ts                # Server actions and DB logic
 ├── 📂 theme
 │    ├── theme.ts               # Custom Chakra theme
 ├── .env                        # Environment variables
```

---

## 🚀 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/TasTyy/dewesoft-todo.git
cd dewesoft-todo
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL="postgresql://neondb_owner:npg_oqwAZF09WGbL@ep-rough-glitter-a2o7wtfx-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require"
```

Push Prisma schema to the DB:

```bash
npx prisma db push
```

Generate the Prisma Client:

```bash
npx prisma generate
```

Start the development server:

```bash
npm run dev
```

App will be available at:

```bash
http://localhost:3000
```

---

## 🧠 Usage

-   Type a task and click "Add" to create a new todo
-   Check/uncheck the checkbox to toggle its completion
-   Click the red trash icon to delete a task
-   Toggle dark/light theme via the icon in the navbar

---

## 🛠️ Future Improvements

-   Add search functionality (filter todos)
-   Confirm deletion with modal
-   Support for editing existing todos

---

## 📜 License

This project is licensed under the Dewesoft Assignment Terms.

**Author:** Maj Koren  
**GitHub:** [@TasTyy](https://github.com/TasTyy)
