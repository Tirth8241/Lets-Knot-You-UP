# Lets Knot You UP

An AI-powered wedding planning website concept built for a portfolio project. The app helps couples discover wedding vendors, shortlist options, estimate budget, draft vendor messages, and follow a planning timeline.

## Overview

Lets Knot You UP is designed as a luxury wedding planning experience with a strong visual landing page, curated vendor marketplace, floating AI planner chatbox, and multi-page planning flow.

The current version uses a local demo recommendation engine in JavaScript. It is structured so a real AI backend, vendor database, authentication, and messaging system can be added later.

## Features

- AI-style wedding planner chatbox
- Vendor marketplace with venues, catering, decor, attire, rentals, photography, and beauty vendors
- Wedding profile form for city, date, guest count, budget, and style
- Vendor matching based on style, city, budget, guest count, and availability
- Vendor detail pages with portfolio gallery and package information
- Automated vendor inquiry message draft
- Shortlist system using browser local storage
- Smart package builder
- Budget tracking
- Planning timeline/checklist
- Responsive portfolio-style UI

## Pages

- `index.html` - Landing page and wedding profile setup
- `vendors.html` - Vendor marketplace and filters
- `vendor.html` - Dynamic vendor profile page
- `budget.html` - Budget tracker and shortlisted vendors
- `timeline.html` - Planning checklist and next steps

## Tech Stack

- HTML
- CSS
- JavaScript
- Local Storage
- GitHub Pages ready static site

## Run Locally

Open `index.html` directly in a browser.

Or run a local static server:

```bash
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173
```

## AI Note

The AI planner currently runs as a front-end demo assistant. It can parse common planning requests, update matching logic, suggest packages, and draft messages.

For production, the next step would be connecting it to an AI API and a backend vendor database.

## Future Improvements

- Real OpenAI-powered chat assistant
- Vendor login and dashboard
- Couple account system
- Real vendor database
- Availability calendar
- In-app messaging
- Reviews and verified vendor profiles
- Payment/deposit tracking
- Deployment with GitHub Pages, Netlify, or Vercel

## Repository

GitHub: [Tirth8241/Lets-Knot-You-UP](https://github.com/Tirth8241/Lets-Knot-You-UP)
