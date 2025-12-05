# News Magazine

A modern, responsive news magazine website built with Astro.js and Tailwind CSS. Inspired by AP News design, this project provides a clean and professional interface for news content.

![Homepage](https://github.com/user-attachments/assets/2bbc1ca6-66c6-4a11-acc4-9f5fda9bff42)

## 🚀 Features

- **Static Site Generation (SSG)** - Fast, optimized static pages
- **Modern UI** - Clean, professional design inspired by AP News
- **Responsive Layout** - Mobile-first design that works on all devices
- **Category & Tag Filtering** - Browse articles by category or tag
- **SEO Optimized** - Built-in meta tags and OpenGraph support
- **TypeScript** - Type-safe code with strict mode enabled
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

## 📸 Screenshots

### Homepage
![Homepage](https://github.com/user-attachments/assets/2bbc1ca6-66c6-4a11-acc4-9f5fda9bff42)

### Article Detail Page
![Article Detail](https://github.com/user-attachments/assets/a3955900-671c-4a77-90a4-898d38fbd2a4)

### Category Page
![Category Page](https://github.com/user-attachments/assets/85695a69-f918-498c-8e89-e2150421f420)

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) v5+
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v3
- **Date Handling:** date-fns
- **Typography Plugin:** @tailwindcss/typography

## 📦 Project Structure

```
news-magazine/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ArticleCard.astro    # Reusable article card component
│   │   ├── Footer.astro          # Site footer
│   │   └── Navbar.astro          # Navigation bar
│   ├── layouts/
│   │   └── Layout.astro          # Base layout with SEO meta tags
│   ├── lib/
│   │   ├── api.ts                # API utility functions
│   │   ├── mockData.ts           # Mock data for development
│   │   └── types.ts              # TypeScript interfaces
│   └── pages/
│       ├── index.astro           # Homepage
│       ├── articles/
│       │   └── [slug].astro      # Dynamic article detail page
│       ├── categories/
│       │   └── [category].astro  # Dynamic category listing page
│       └── tags/
│           └── [tag].astro       # Dynamic tag listing page
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/smithgh-ops/news-magazine.git
cd news-magazine
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment file:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
PUBLIC_API_BASE_URL=https://api.bepress.com
PUBLIC_TENANT_SLUG=news1
PUBLIC_SITE_NAME=News Magazine
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321/`

### Build

Build the static site for production:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview

Preview the production build locally:
```bash
npm run preview
```

## 🎨 Design Features

### Color Scheme
- **Primary Blue:** `#0066CC` - Used for links and brand elements
- **Accent Red:** `#D32F2F` - Used for breaking news and category badges
- **Secondary Gray:** `#333333` - Used for text and headers

### Typography
- **Sans Serif:** Inter - Used for body text and UI elements
- **Serif:** Merriweather - Used for headlines and article titles

### Layout Components

#### Navbar
- Sticky navigation bar with site logo
- Category links for quick navigation
- Mobile-responsive hamburger menu
- Search button (placeholder)

#### Article Card
- Featured image with category badge
- Headline with hover effect
- Excerpt preview
- Author and publish date
- Supports featured and standard layouts

#### Footer
- Four-column layout (Brand, Quick Links, About, Social Media)
- Copyright information
- Responsive grid layout

## 🔌 API Integration

The project is designed to work with the BePress Public API. The API utility layer (`src/lib/api.ts`) handles all data fetching with proper error handling.

### Available API Functions

```typescript
// Fetch latest articles
getLatestArticles(page?: number, perPage?: number)

// Fetch single article by slug
getArticleBySlug(slug: string)

// Fetch articles by category
getArticlesByCategory(category: string, page?: number, perPage?: number)

// Fetch articles by tag
getArticlesByTag(tag: string, page?: number, perPage?: number)

// Fetch all categories
getCategories()

// Fetch all tags
getTags()
```

### Mock Data

For development and testing, the project includes comprehensive mock data in `src/lib/mockData.ts` with:
- 6 sample articles covering different categories
- 5 categories (Politics, Business, Technology, Sports, World)
- 4 tags (Breaking News, Analysis, Opinion, Investigation)
- 3 authors with bio information

## 🌐 Deployment

This is a static site that can be deployed to any static hosting service:

- **Vercel:** `vercel --prod`
- **Netlify:** Connect your repository and deploy
- **GitHub Pages:** Build and deploy the `dist/` folder
- **Cloudflare Pages:** Connect repository for automatic deployments

## 📝 Customization

### Adding New Categories

1. Update the navigation in `src/components/Navbar.astro`
2. Add to mock data in `src/lib/mockData.ts`
3. Create articles with the new category

### Changing Colors

Edit the Tailwind config in `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      'news-primary': '#YOUR_COLOR',
      'news-secondary': '#YOUR_COLOR',
      'news-accent': '#YOUR_COLOR',
    },
  },
}
```

### Adding New Fonts

1. Add Google Fonts link in `src/layouts/Layout.astro`
2. Update `tailwind.config.mjs` with new font families

## 🔒 Environment Variables

Required environment variables:

- `PUBLIC_API_BASE_URL` - Base URL for the BePress API
- `PUBLIC_TENANT_SLUG` - Tenant identifier for API requests
- `PUBLIC_SITE_NAME` - Display name for the website

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For questions or support, please open an issue on GitHub.

---

Built with ❤️ using [Astro](https://astro.build/)
