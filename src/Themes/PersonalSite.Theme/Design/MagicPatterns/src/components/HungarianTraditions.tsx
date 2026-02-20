import React from 'react';
import { motion } from 'framer-motion';
import { BranchLine, Diamond } from './BotanicalAccents';
import { ANIM } from '../utils/animConfig';
import { ThemedSection } from './ThemedSection';
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig';
import type { SectionTheme } from '../utils/themeConfig';
const traditions = [
{
  title: "The Bride's Dance",
  description:
  "The bride's dance is a beloved tradition where guests queue to dance with the bride for a very short time, each placing money into a basket — a joyful way to wish the couple prosperity."
},
{
  title: 'The Stealing of the Bride',
  description:
  'During the celebration, friends playfully "kidnap" the bride. The groom must search for her, often completing humorous tasks or paying a ransom to win her back.'
},
{
  title: 'The Bouquet Toss',
  description:
  'The bride tosses her bouquet to the unmarried women at the celebration. Whoever catches it is said to be the next to marry — a moment of joyful anticipation on the dance floor.'
},
{
  title: 'Clinking Glasses & Tapping Plates',
  description:
  "When guests clink their glasses or tap their plates in unison, the newlyweds must kiss. The louder the clinking, the longer the kiss — a playful way for guests to celebrate the couple's love."
},
{
  title: 'Cutting the Cake',
  description:
  'The couple cuts the wedding cake together, hand over hand, symbolising their first shared act as husband and wife. The first slice is exchanged between them as a sweet promise of a life shared.'
}];

function HungarianTraditionsContent() {
  const theme = useSectionTheme();
  const t = getThemeClasses(theme);
  const d = ANIM.DURATION;
  const s = ANIM.STAGGER;
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
          id="traditions-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}>

          Hungarian Traditions
        </h2>
        <BranchLine
          className="max-w-xs mx-auto mb-6"
          variant={t.botanicalVariant} />

        <p
          className={`font-serif text-lg ${t.bodyMuted} italic max-w-md mx-auto`}>

          A glimpse into the customs that make a Hungarian wedding truly
          unforgettable
        </p>
      </motion.div>

      <div className="space-y-10">
        {traditions.map((tradition, index) =>
        <motion.div
          key={tradition.title}
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-40px'
          }}
          transition={{
            duration: d,
            delay: s * (index + 1)
          }}
          className="text-center">

            <h3
            className={`font-display text-xl md:text-2xl font-normal ${t.heading} tracking-wide mb-3 uppercase`}>

              {tradition.title}
            </h3>
            <p
            className={`font-serif text-lg ${t.body} leading-relaxed max-w-lg mx-auto`}>

              {tradition.description}
            </p>

            {index < traditions.length - 1 &&
          <div className="flex justify-center mt-10">
                <Diamond size={7} variant={t.botanicalVariant} />
              </div>
          }
          </motion.div>
        )}
      </div>
    </div>);

}
interface HungarianTraditionsProps {
  theme?: SectionTheme;
}
export function HungarianTraditions({
  theme = 'dark'
}: HungarianTraditionsProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="traditions-heading">

      <HungarianTraditionsContent />
    </ThemedSection>);

}