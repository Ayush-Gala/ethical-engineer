'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MobileDropdownItem {
  label: string;
  href: string;
  onClick?: () => void;
}

interface MobileDropdownProps {
  label: string;
  items: MobileDropdownItem[];
  onItemClick: () => void;
}

export default function MobileDropdown({ label, items, onItemClick }: MobileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item: MobileDropdownItem) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
    onItemClick(); // Close the mobile menu
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
      >
        <span>{label}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="space-y-1">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-6 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 