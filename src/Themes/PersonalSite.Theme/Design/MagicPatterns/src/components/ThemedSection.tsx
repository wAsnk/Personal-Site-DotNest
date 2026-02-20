import React from 'react';
import { SectionThemeProvider, getThemeClasses } from '../utils/themeConfig';
import type { SectionTheme } from '../utils/themeConfig';
interface ThemedSectionProps {
  theme: SectionTheme;
  children: React.ReactNode;
  className?: string;
  id?: string;
  'aria-labelledby'?: string;
}
/**
 * Wraps a section with the correct background color and provides
 * theme context so all children can auto-adapt their colors.
 *
 * Usage:
 *   <ThemedSection theme="dark" aria-labelledby="my-heading">
 *     ...content...
 *   </ThemedSection>
 */
export function ThemedSection({
  theme,
  children,
  className = '',
  id,
  'aria-labelledby': ariaLabelledBy
}: ThemedSectionProps) {
  const t = getThemeClasses(theme);
  return (
    <SectionThemeProvider theme={theme}>
      <section
        id={id}
        aria-labelledby={ariaLabelledBy}
        className={`w-full ${t.bg} ${className}`}>

        {children}
      </section>
    </SectionThemeProvider>);

}