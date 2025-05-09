/**
 * Styles de boutons uniformes pour JaelleShop
 * Ce fichier définit des styles cohérents pour tous les boutons du site
 */

// Types de variants de boutons
export type ButtonVariant = 
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'gradient'
  | 'outlined'
  | 'danger'
  | 'success'
  | 'link'
  | 'icon';

// Types de tailles de boutons
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Classes de base pour tous les boutons (utilisées dans le composant Button)
export const baseButtonClasses = "inline-flex items-center justify-center font-medium transition-colors duration-300 rounded-full focus:outline-none whitespace-nowrap focus:ring-2 focus:ring-offset-2";

// Définition des styles par variant
export const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 active:bg-primary-800 shadow-sm hover:shadow-md",
  secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-primary-600 focus:ring-primary-400 active:bg-gray-100 shadow-sm hover:shadow",
  accent: "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-400 active:bg-secondary-800 shadow-sm hover:shadow-md",
  gradient: "bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:from-primary-600 hover:to-primary-800 focus:ring-primary-400 shadow-sm hover:shadow-md",
  outlined: "border-2 border-primary-500 text-primary-600 hover:bg-primary-50 focus:ring-primary-400 active:bg-primary-100",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 active:bg-red-800 shadow-sm hover:shadow-md",
  success: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 active:bg-emerald-800 shadow-sm hover:shadow-md",
  link: "text-primary-600 hover:text-primary-800 hover:underline focus:ring-primary-400 px-0 py-0",
  icon: "text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:ring-primary-400 rounded-full p-2"
};

// Définition des tailles
export const sizeStyles: Record<ButtonSize, string> = {
  xs: "text-xs px-2.5 py-1 gap-1",
  sm: "text-sm px-3.5 py-1.5 gap-1.5",
  md: "text-base px-5 py-2 gap-2",
  lg: "text-lg px-6 py-2.5 gap-2",
  xl: "text-xl px-8 py-3 gap-2.5"
};

// Animation de clic pour tous les boutons (utilisée avec framer-motion)
export const buttonTapAnimation = {
  scale: 0.97, 
  transition: { 
    type: "spring", 
    stiffness: 500, 
    duration: 0.15
  }
};

// Animation de survol pour tous les boutons
export const buttonHoverAnimation = {
  scale: 1.02,
  transition: { 
    type: "spring", 
    stiffness: 400, 
    duration: 0.2
  }
};

// Utilitaire pour générer les classes complètes de bouton
export const generateButtonClasses = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  fullWidth: boolean = false,
  customClasses: string = ''
): string => {
  return [
    baseButtonClasses,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    customClasses
  ].filter(Boolean).join(' ');
}; 