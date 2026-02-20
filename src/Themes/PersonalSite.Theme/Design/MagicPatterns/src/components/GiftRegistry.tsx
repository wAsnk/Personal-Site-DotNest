import React from 'react';
import { motion } from 'framer-motion';
import { BranchLine, Rule } from './BotanicalAccents';
import { GiftIcon } from 'lucide-react';
import { ANIM } from '../utils/animConfig';
import { ThemedSection } from './ThemedSection';
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig';
import type { SectionTheme } from '../utils/themeConfig';
function GiftRegistryContent() {
  const theme = useSectionTheme();
  const t = getThemeClasses(theme);
  const d = ANIM.DURATION;
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
          duration: d
        }}
        className="text-center mb-14">

        <h2
          id="gifts-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}>

          Gifts
        </h2>
        <BranchLine
          className="max-w-xs mx-auto mb-6"
          variant={t.botanicalVariant} />

      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 25
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-60px'
        }}
        transition={{
          duration: d,
          delay: ANIM.STAGGER * 2
        }}
        className="text-center">

        <div className="w-10 h-10 flex items-center justify-center mx-auto mb-6">
          <GiftIcon className={`w-5 h-5 ${t.accent}`} aria-hidden="true" />
        </div>

        <p
          className={`font-serif text-lg ${t.body} italic leading-relaxed max-w-lg mx-auto mb-8`}>

          Your presence at our celebration is the most meaningful gift we could
          receive.
        </p>

        <div className="flex justify-center mb-8">
          <Rule width={32} variant={t.botanicalVariant} />
        </div>

        <p
          className={`font-serif text-lg ${t.body} leading-relaxed max-w-md mx-auto`}>

          If you would like to give us a gift, we would be truly grateful for a
          monetary contribution towards our future together.
        </p>
      </motion.div>
    </div>);

}
interface GiftRegistryProps {
  theme?: SectionTheme;
}
export function GiftRegistry({ theme = 'dark' }: GiftRegistryProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="gifts-heading">

      <GiftRegistryContent />
    </ThemedSection>);

}