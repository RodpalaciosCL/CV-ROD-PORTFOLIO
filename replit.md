# EY Partnership Proposal Website

## Overview

This is a strategic partnership proposal website for EY that showcases expertise, active business pipeline, and value proposition in the mining and energy technology sectors. The application is built as a professional business development tool to demonstrate capabilities and facilitate partnership discussions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based architecture with the following key decisions:

- **React with Vite**: Chosen for fast development and build times, with hot module replacement for efficient development workflow
- **TypeScript**: Provides type safety and better developer experience
- **Wouter**: Lightweight client-side routing library instead of React Router for minimal bundle size
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development and consistent design
- **Shadcn/ui Components**: Pre-built, accessible UI components based on Radix UI primitives

### Backend Architecture
Simple Express.js server setup with the following characteristics:

- **Express.js**: Lightweight web framework for Node.js
- **TypeScript**: Backend also uses TypeScript for consistency
- **Modular Route System**: Routes are organized in a separate module for scalability
- **Development/Production Setup**: Vite integration for development with production build capabilities

### Data Storage Solutions
Currently configured for database integration:

- **Drizzle ORM**: Modern TypeScript ORM for database operations
- **PostgreSQL**: Configured as the primary database (via Neon serverless)
- **In-Memory Storage**: Temporary storage implementation for development
- **Schema Definition**: Shared schema definitions between frontend and backend

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Professional introduction with animated counters
3. **Content Sections**: Modular sections for different value propositions
4. **UI Components**: Comprehensive set of reusable components from Shadcn/ui

### Backend Components
1. **Server Setup**: Express server with middleware configuration
2. **Route Registration**: Modular route system for API endpoints
3. **Storage Interface**: Abstracted storage layer supporting both in-memory and database operations
4. **Development Tools**: Vite integration for development workflow

### Styling System
1. **EY Brand Colors**: Custom CSS variables for official EY branding
2. **Design System**: Consistent component styling with Tailwind utilities
3. **Responsive Design**: Mobile-first approach with breakpoint-specific styling
4. **Animation Support**: CSS animations for professional user experience

## Data Flow

### Client-Side Flow
1. User navigates to different sections via smooth scrolling
2. React Query manages any API calls and caching
3. Components use shared state and context where needed
4. Form submissions and interactions handled through React hooks

### Server-Side Flow
1. Express server handles API requests under `/api` prefix
2. Storage layer abstracts database operations
3. Routes process requests and return JSON responses
4. Middleware handles logging, error handling, and CORS

### Build and Deployment Flow
1. Vite builds the frontend to `dist/public`
2. ESBuild bundles the backend to `dist/index.js`
3. Production serves static files and API from single server
4. Environment variables configure database connections

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Query for state management
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Build Tools**: Vite, ESBuild, TypeScript compiler

### UI Component Dependencies
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating component variants
- **Tailwind Merge**: Intelligent Tailwind class merging

### Backend Dependencies
- **Express.js**: Web framework and middleware
- **Database**: Drizzle ORM, Neon serverless PostgreSQL
- **Development**: TSX for TypeScript execution, Nodemon equivalent functionality

### Development Dependencies
- **Replit Integration**: Custom plugins for Replit environment
- **Error Handling**: Runtime error overlay for development
- **TypeScript**: Comprehensive type checking and compilation

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend
- **Hot Reload**: Both frontend and backend support hot reloading
- **Environment Variables**: DATABASE_URL and other config via .env files
- **Replit Integration**: Special handling for Replit development environment

### Production Build
- **Frontend Build**: Vite builds optimized static assets
- **Backend Build**: ESBuild creates single Node.js executable
- **Static Serving**: Express serves built frontend from `/dist/public`
- **Database Migration**: Drizzle handles schema migrations with `db:push` command

### Hosting Considerations
- **Single Server Deployment**: Backend serves both API and static files
- **PostgreSQL Database**: External database service (Neon) for data persistence
- **Environment Configuration**: Production environment variables for database and security
- **Asset Optimization**: Vite optimizes images, CSS, and JavaScript for production

The architecture prioritizes simplicity, type safety, and professional presentation while maintaining scalability for future enhancements.