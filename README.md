# 🍽️ Coding Challenge Instructions – Spring 2025

## Overview

This project is part of the **Spring 2025 Coding Challenge** where the goal is to **replicate a live restaurant website**. The challenge demonstrates front-end development skills including layout replication, responsiveness, styling, and interaction fidelity.

## 📌 Objective

Recreate the look and feel of a selected restaurant website using modern web technologies. The focus is on **accuracy, responsiveness, and code quality**.

## 🔧 Technologies Used

- **Next.js** / **React**
- **Tailwind CSS**
- HTML5 / CSS3

## 📂 Project Structure

monabigabi/
├── components/             # Reusable UI components (Navbar, Footer, EventList)
│   ├── EventList.js
│   ├── Footer.js
│   └── Nav.js
│
├── public/                 # Static assets (images, icons, etc.)
│   └── favicon.ico
│
├── src/
│   ├── app/                # App directory (Next.js 13+)
│   │   ├── layout.js       # Shared layout across pages
│   │   ├── page.js         # Home page
│   │   ├── contact/
│   │   │   └── page.js
│   │   ├── delivery/
│   │   │   └── page.js
│   │   ├── events/
│   │   │   └── page.js
│   │   ├── gallery/
│   │   │   └── page.js
│   │   ├── menu/
│   │   │   └── page.js
│   │   ├── pick-up/
│   │   │   └── page.js
│   │   └── private-parties/
│   │       └── page.js
│   │
│   └── styles/
│       └── globals.css     # Global Tailwind styles
│
├── .gitignore
├── README.md
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.mjs
├── eslint.config.mjs
├── jsconfig.json
├── package.json
└── package-lock.json


## 🖥️ Live Demo

> **Deployed link:** [https://monabigabi.vercel.app/]

✅ Requirements
Replicate the homepage layout as closely as possible.

Ensure mobile responsiveness.

Use semantic HTML and reusable components.

Maintain clean, readable, and organized code.

Host the site (optional but recommended).


🙋‍♂️ Author
Farzin Rezvani
