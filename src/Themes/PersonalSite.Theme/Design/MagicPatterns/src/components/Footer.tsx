import React from 'react';
import { BranchLine } from './BotanicalAccents';
import { ThemedSection } from './ThemedSection';
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig';
import type { SectionTheme } from '../utils/themeConfig';
function FooterContent() {
  const theme = useSectionTheme();
  const t = getThemeClasses(theme);
  return (
    <div>
      {/* Divider */}
      <div className="max-w-xs mx-auto mb-14" aria-hidden="true">
        <BranchLine variant={t.botanicalVariant} />
      </div>

      <div className="text-center">
        <h2
          className={`font-display text-3xl md:text-4xl ${t.heading} mb-4 font-normal tracking-widest uppercase`}>

          Klára &amp; Krisztián
        </h2>
        <p
          className={`font-display text-sm tracking-[0.2em] ${t.bodyMuted} uppercase mb-8`}>

          03 . 07 . 2027
        </p>
        <p
          className={`font-serif text-sm ${t.bodyFaint} tracking-widest uppercase`}>

          Budapest, Hungary
        </p>
      </div>
    </div>);

}
interface FooterProps {
  theme?: SectionTheme;
}
export function Footer({ theme = 'dark' }: FooterProps) {
  return (
    <ThemedSection theme={theme} className="py-20 px-6">
      <FooterContent />
    </ThemedSection>);

}