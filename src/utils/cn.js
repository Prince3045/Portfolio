import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to conditionally merge Tailwind CSS classes
 * @param  {...(string|undefined|null|false)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
