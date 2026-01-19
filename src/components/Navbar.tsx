'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Dropdown from './Dropdown';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { theme } = useTheme(); // Removed unused variable

  return (
    <nav className="shadow-sm border-b transition-colors duration-200" style={{
      backgroundColor: 'var(--nav-bg)',
      borderColor: 'var(--nav-border)'
    }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Site Title */}
          <Link href="/" className="flex items-center text-xl font-bold transition-colors gap-2" style={{
            color: 'var(--text-primary)'
          }}>
            <span className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="ethical-engineering Logo"
                fill
                className="object-contain drop-shadow"
                priority
                sizes="32px"
              />
            </span>
            <span>ethical-engineering</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Dropdown
              label="About"
              items={[
                { label: 'About TEE', href: '/about-tee' },
                { label: 'About Me', href: '/about' }
              ]}
            />
            <Link href="/" className="transition-colors" style={{ color: 'var(--text-secondary)' }}>
              Blog
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
              <Dropdown
                label="About"
                items={[
                  { label: 'About TEE', href: '/about-tee' },
                  { label: 'About Me', href: '/about' }
                ]}
                variant="mobile"
                onItemClick={() => setIsMenuOpen(false)}
              />
              <Link
                href="/"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 