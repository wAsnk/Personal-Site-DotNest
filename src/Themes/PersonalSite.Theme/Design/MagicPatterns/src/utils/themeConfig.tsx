import React, { createContext, useContext } from 'react';
export type SectionTheme = 'light' | 'dark';
const SectionThemeContext = createContext<SectionTheme>('light');
export function useSectionTheme(): SectionTheme {
  return useContext(SectionThemeContext);
}
interface SectionThemeProviderProps {
  theme: SectionTheme;
  children: React.ReactNode;
}
export function SectionThemeProvider({
  theme,
  children
}: SectionThemeProviderProps) {
  return (
    <SectionThemeContext.Provider value={theme}>
      {children}
    </SectionThemeContext.Provider>);

}
/**
 * Returns all semantic class names for a given theme.
 * Use these in section components to auto-adapt colors.
 *
 * Cards now match the section theme instead of always being paper-colored.
 */
export function getThemeClasses(theme: SectionTheme) {
  if (theme === 'dark') {
    return {
      bg: 'bg-garden-dark',
      heading: 'text-gold-light',
      body: 'text-paper/90',
      bodyMuted: 'text-paper/70',
      bodyFaint: 'text-paper/50',
      accent: 'text-gold-light',
      accentMuted: 'text-gold-light/60',
      italic: 'text-paper/70',
      link: 'text-gold-light hover:text-gold transition-colors duration-300 border-b border-gold-light/30 pb-0.5',
      botanicalVariant: 'light' as const,
      /** Card classes — match the dark section theme */
      cardBg: 'bg-garden-dark',
      cardBorderClass: 'card-border-dark',
      cardHeading: 'text-gold-light',
      cardBody: 'text-paper/90',
      cardBodyMuted: 'text-paper/70',
      cardBodyFaint: 'text-paper/50',
      cardAccent: 'text-gold-light',
      cardLink:
      'text-gold-light hover:text-gold transition-colors duration-300 border-b border-gold-light/30 pb-0.5',
      cardBotanicalVariant: 'light' as const,
      /** Form input classes for dark cards */
      cardInputClasses:
      'w-full px-4 py-3 bg-transparent border-b border-gold-light/50 font-serif text-paper placeholder:text-paper/30 focus:border-gold-light focus:ring-0 transition-colors duration-300 rounded-none',
      cardInputBorder: 'border-gold-light/40',
      cardRadioActive: 'text-gold-light',
      cardRadioInactive: 'text-paper/50 hover:text-paper/70',
      cardRadioBorder: 'border-gold-light',
      cardRadioFill: 'bg-gold-light/10',
      cardRadioDot: 'bg-gold-light',
      cardButtonBg: 'bg-transparent',
      cardButtonText: 'text-gold-light',
      cardButtonHover: 'hover:bg-gold-light/10',
      cardButtonBorder: 'border border-gold-light/60'
    };
  }
  return {
    bg: 'bg-paper',
    heading: 'text-gold-dark',
    body: 'text-bronze',
    bodyMuted: 'text-bronze/80',
    bodyFaint: 'text-bronze/60',
    accent: 'text-gold',
    accentMuted: 'text-gold/60',
    italic: 'text-bronze',
    link: 'text-gold-dark hover:text-gold transition-colors duration-300 border-b border-gold/30 pb-0.5',
    botanicalVariant: 'default' as const,
    /** Card classes — match the light section theme */
    cardBg: 'bg-paper',
    cardBorderClass: 'card-border',
    cardHeading: 'text-gold-dark',
    cardBody: 'text-bronze',
    cardBodyMuted: 'text-bronze/80',
    cardBodyFaint: 'text-bronze/70',
    cardAccent: 'text-gold',
    cardLink:
    'text-gold-dark hover:text-gold transition-colors duration-300 border-b border-gold/30 pb-0.5',
    cardBotanicalVariant: 'default' as const,
    /** Form input classes for light cards */
    cardInputClasses:
    'w-full px-4 py-3 bg-paper border-b border-gold font-serif text-bronze placeholder:text-bronze/30 focus:border-gold-dark focus:ring-0 transition-colors duration-300 rounded-none',
    cardInputBorder: 'border-gold',
    cardRadioActive: 'text-gold-dark',
    cardRadioInactive: 'text-bronze/50 hover:text-bronze',
    cardRadioBorder: 'border-gold',
    cardRadioFill: 'bg-gold/10',
    cardRadioDot: 'bg-gold',
    cardButtonBg: 'bg-transparent',
    cardButtonText: 'text-gold-dark',
    cardButtonHover: 'hover:bg-gold/10',
    cardButtonBorder: 'border border-gold/60'
  };
}