# The Detail Clinic Website

A modern, high-quality website for The Detail Clinic - Premium auto detailing and protection services in Fullerton, CA.

## Features

- **Modern Design**: Beautiful, responsive design with gradient sections and smooth animations
- **Service Pages**: Detailed pages for Paint Protection Film, Window Tinting, Ceramic Coating, and Auto Detailing
- **Pricing Page**: Transparent pricing for all services and packages
- **Contact Page**: Contact form and business information
- **Gallery**: Showcase of work (ready for images)
- **SEO Optimized**: Proper metadata and semantic HTML

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Detail Clinic/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── services/           # Service pages
│   ├── pricing/            # Pricing page
│   ├── contact/            # Contact page
│   └── gallery/            # Gallery page
├── components/
│   ├── navbar.tsx          # Navigation component
│   ├── footer.tsx          # Footer component
│   └── ui/                 # shadcn/ui components
├── lib/
│   └── utils.ts            # Utility functions
└── public/                  # Static assets
```

## Business Information

- **Name**: The Detail Clinic
- **Address**: 634 S State College Blvd, Fullerton, CA 92831
- **Phone**: (562) 632-8290
- **Email**: TheDetailClinic@gmail.com
- **Website**: TheDetailClinic.com

## Services

### Paint Protection Film (PPF)
- Total Body Armor: $5,250
- Front End Procedure: $2,250
- Precision Trim Therapy: $450

### Window Tinting
- Complete Treatment: $700
- Perimeter Treatment: $550
- Front Windshield Rx: $250

### Ceramic Coating
- 5-Year Preservation Therapy: $650
- Wheel Therapy: $200
- Leather Coating: $250

### Auto Detailing
- Basic Detail: $120+
- Medium Detail: $320+
- Full Detail: $650+
- Paint Correction: $400-$2,000+

## Next Steps

1. Add high-quality images to the gallery
2. Generate hero images using Nano Banana 2
3. Set up contact form backend
4. Add Google Analytics
5. Optimize images and performance
