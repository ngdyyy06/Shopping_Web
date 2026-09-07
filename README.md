# The North Face — Shopping Web

A full-stack e-commerce website inspired by **The North Face**, built with **Next.js, React, TypeScript, Tailwind CSS, Prisma, and a database**.

The project provides a complete shopping flow including product browsing, categories, authentication, shopping cart, checkout, order processing, payment integration, and an admin area for product management.

---

## Overview

**The North Face Shopping Web** is a full-stack e-commerce project developed using the Next.js App Router.

The application is designed to simulate a real-world online shopping system with both customer-facing features and backend API functionality.

Users can:

- Browse products
- Browse products by category
- View product details
- Add products to the shopping cart
- Increase or decrease product quantities
- Remove products from the cart
- Register an account
- Log in to the system
- Proceed to checkout
- Create orders
- Make payments
- View order completion status

Administrators can:

- Access the admin page
- Manage products
- Add new products
- Update product information
- Delete products

---

## Tech Stack

### Frontend

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **HTML5**
- **CSS3**

### Backend

- **Next.js Route Handlers**
- **REST API**
- **Prisma ORM**
- **Node.js**

### Database

- **Database managed through Prisma**
- **Prisma Client**
- **Prisma migrations**

### State Management

- **React Context API**
- **React Hooks**
  - `useState`
  - `useEffect`
  - `useContext`

### Development Tools

- Git
- GitHub
- npm
- Visual Studio Code

---

# Features

## 1. Home Page

The home page provides the main entry point to the shopping website.

It includes:

- Navigation bar
- Product sections
- Product categories
- Category cards
- Links to product listings
- Responsive layout

---

## 2. Product Categories

The `/categories` page allows users to browse products based on their categories.

Users can select a category and navigate to the corresponding product listing.

---

## 3. Product Listing

The `/products` page displays available products.

Users can:

- Browse products
- Filter products
- Sort products
- Open individual product pages

Products are displayed using reusable components such as:

```text
ProductCard

---

### Responsive Design

The website is designed to work across different screen sizes from the beginning of development.

Supported layouts include:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive behavior is implemented using Tailwind CSS responsive utilities rather than creating a separate responsive version later.

---

## Project Structure

```text
Shopping_Web/
│
├── app/
│   │
│   ├── admin/
│   │   └── page.tsx
│   │
│   ├── api/
│   │   │
│   │   ├── payment/
│   │   │   └── create/
│   │   │       └── route.ts
│   │   │
│   │   └── products/
│   │       └── route.ts
│   │
│   ├── cart/
│   │   └── page.tsx
│   │
│   ├── categories/
│   │   └── page.tsx
│   │
│   ├── checkout/
│   │   └── page.tsx
│   │
│   ├── generated/
│   │   └── prisma/
│   │
│   ├── login/
│   │   └── page.tsx
│   │
│   ├── products/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   │
│   │   └── page.tsx
│   │
│   ├── register/
│   │   └── page.tsx
│   │
│   ├── order-success/
│   │   └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── AddToCartButton.tsx
│   ├── AdminGuard.tsx
│   ├── CategoryCard.tsx
│   ├── CheckoutGuard.tsx
│   ├── Navbar.tsx
│   └── ProductCard.tsx
│
├── context/
│
├── data/
│
├── lib/
│
├── prisma/
│
├── public/
│
├── types/
│
├── .env
├── .env.local
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
└── README.md
```

### Main directories

#### `app/`

Contains the application's pages and routing structure using the **Next.js App Router**.

#### `components/`

Contains reusable UI components such as the navbar, product cards, category cards, and other interface elements.

#### `context/`

Contains React Context used for managing global application state.

For example:

```text
CartContext.tsx
```

is responsible for managing shopping cart data and cart-related operations.

#### `data/`

Contains the initial product dataset used by the frontend.

This layer can later be replaced by API requests to a backend server and database.

#### `public/`

Contains static assets such as product images and other public resources.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ngdyyy06/Shopping_Web.git
```

### 2. Navigate to the project

```bash
cd Shopping_Web
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open:

```text
http://localhost:3000
```

in your browser.

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm start
```

Runs the application in production mode after building the project.

### Lint

```bash
npm run lint
```

Checks the project for code quality and linting issues.

---

## Application Architecture

The application follows a component-based architecture provided by React and Next.js.

The general data flow is:

```text
User
  │
  ▼
Next.js Page
  │
  ▼
Reusable Components
  │
  ├── ProductCard
  ├── CategoryCard
  ├── Navbar
  └── Cart Components
  │
  ▼
Application State
  │
  ▼
CartContext
  │
  ▼
Shopping Cart
```

Product data currently comes from the local data layer:

```text
data/products.ts
```

In a future version, the architecture can be extended to:

```text
Frontend
   │
   ▼
Next.js
   │
   ▼
Backend API
   │
   ▼
Database
```

This allows the application to move from static product data to a real e-commerce system.

---

## Future Improvements

The project can be extended with the following features:

### Authentication

* User registration
* User login
* Logout
* User profile
* Authentication and authorization

### Backend

* REST API
* Product API
* User API
* Cart API
* Order API

### Database

Replace the local product data with a database system such as:

* MySQL
* SQL Server
* PostgreSQL

Possible database entities:

```text
Users
Products
Categories
Cart
CartItems
Orders
OrderItems
Payments
```

### E-commerce Features

* Product detail page
* Product search
* Wishlist
* Checkout
* Shipping information
* Order management
* Payment integration
* Order history

### Admin Dashboard

An administration system could be added for:

* Product management
* Category management
* User management
* Order management
* Inventory management
* Sales statistics

---

## Project Goals

The main goals of this project are:

1. Practice **Next.js App Router**
2. Improve understanding of **React components**
3. Practice **React Hooks**
4. Understand **Context API and global state management**
5. Build reusable UI components
6. Practice responsive web development
7. Understand URL query parameters and client-side interactions
8. Build a realistic e-commerce frontend architecture
9. Prepare the project for future backend and database integration

---

## Future Architecture

The long-term architecture of the project is planned to evolve from a frontend-only application into a full-stack e-commerce system:

```text
                    The North Face
                    Shopping Web
                         │
          ┌──────────────┴──────────────┐
          │                             │
       Frontend                       Backend
          │                             │
      Next.js                       REST API
      React                             │
      TypeScript                        │
      Tailwind CSS                      ▼
          │                          Database
          │                             │
          └──────────────┬──────────────┘
                         │
                       Users
                         │
                      Products
                         │
                       Orders
                         │
                      Payments
```

---

## License

This project is developed for **educational and portfolio purposes**.

The project is inspired by the design and concept of The North Face and is not an official The North Face website.

---

## Author

**Nguyen Quang Duy**

GitHub:

```text
https://github.com/ngdyyy06
```

