import React from 'react';
import { motion } from 'framer-motion';
import { BranchLine, Rule } from './BotanicalAccents';
import { ClockIcon } from 'lucide-react';
import { ANIM } from '../utils/animConfig';
import { ThemedSection } from './ThemedSection';
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig';
import type { SectionTheme } from '../utils/themeConfig';
function FurtherDetailsContent() {
  const theme = useSectionTheme();
  const t = getThemeClasses(theme);
  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{
          opacity: 0,
          y: 30
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-80px'
        }}
        transition={{
          duration: ANIM.DURATION
        }}
        className="text-center">

        <h2
          id="further-details-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}>

          Further Details
        </h2>
        <BranchLine
          className="max-w-xs mx-auto mb-10"
          variant={t.botanicalVariant} />


        <div className="flex justify-center mb-8" aria-hidden="true">
          <ClockIcon className={`w-5 h-5 ${t.accent}`} />
        </div>

        <p
          className={`font-serif text-lg ${t.italic} italic leading-relaxed max-w-md mx-auto mb-6`}>

          More details about the day will follow in due course.
        </p>

        <div className="flex justify-center mb-6">
          <Rule width={32} variant={t.botanicalVariant} />
        </div>

        <p
          className={`font-serif text-lg ${t.bodyMuted} leading-relaxed max-w-sm mx-auto`}>

          Information regarding accommodation, transport, and the evening
          programme will be shared closer to the date.
        </p>
      </motion.div>
    </div>);

}
interface FurtherDetailsProps {
  theme?: SectionTheme;
}
export function FurtherDetails({ theme = 'light' }: FurtherDetailsProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="further-details-heading">

      <FurtherDetailsContent />
    </ThemedSection>);

}