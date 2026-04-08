# 🏋️ FitZone Gym – Static Landing Page

A fully-responsive, modern landing page built with **plain HTML/CSS/JS** and powered by **Netlify**.  
All functionality (forms, slider, parallax, testimonials, etc.) is client-side – no backend needed.

![FitZone Gym](https://img.shields.io/badge/Status-Production%20Ready-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00c7b7)

---

## ✨ Features

| Feature                   | Description                             |
| ------------------------- | --------------------------------------- |
| 🎯 **Smooth Scrolling**   | Seamless navigation with scroll effects |
| 📱 **Mobile-First**       | Fully responsive on all devices         |
| 🎨 **Modern Design**      | Gradients, shadows, animations          |
| 📊 **Stat Counters**      | Animated numbers on scroll              |
| 🔄 **Testimonial Slider** | Powered by Swiper.js                    |
| 📧 **Netlify Forms**      | Instant form handling & email           |
| 🔍 **SEO-Friendly**       | Semantic markup & meta tags             |
| ⚡ **Fast Loading**       | Optimized assets & lazy loading         |
| 🔒 **HTTPS**              | Secure by default with Netlify          |

---

## 📁 Project Structure

---

## 🚀 How to Deploy

### Option 1: Netlify Drop (Quickest)

1. Download/clone this repository
2. Drag & drop the folder to [Netlify Drop](https://app.netlify.com/drop)
3. Done! Your site is live in seconds

### Option 2: Git Integration (Recommended)

1. **Fork or clone** this repository
2. **Push to GitHub** (or GitLab/Bitbucket)
3. **Create new Netlify site:**
   - Log into [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Connect to your repository
   - Choose `main` branch
   - Build command: _(leave empty)_
   - Publish directory: `.` (root)
4. **Add custom domain** (optional) in Domain management
5. **Enable Netlify Forms:**
   - Forms are auto-detected (`data-netlify="true"`)
   - Configure email notifications in Settings → Forms

### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod

```
