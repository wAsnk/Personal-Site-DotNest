import React from 'react';
import { motion } from 'framer-motion';
import { BranchLine, Diamond } from './BotanicalAccents';
import { openMap } from '../utils/mapLink';
import { ANIM } from '../utils/animConfig';
import { ThemedSection } from './ThemedSection';
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig';
import type { SectionTheme } from '../utils/themeConfig';
function WhenWhereContent() {
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
          id="when-where-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}>

          The Details
        </h2>
        <BranchLine className="max-w-xs mx-auto" variant={t.botanicalVariant} />
      </motion.div>

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
          margin: '-60px'
        }}
        transition={{
          duration: d,
          delay: ANIM.STAGGER * 2
        }}>

        <div
          className={`${t.cardBg} p-10 md:p-14 ${t.cardBorderClass} relative`}>

          <div className="space-y-12">
            {/* Ceremony */}
            <div className="text-center">
              <h3
                className={`font-display text-xl md:text-2xl font-normal ${t.cardHeading} tracking-wide mb-2 uppercase`}>

                Ceremony
              </h3>
              <p className={`font-serif text-lg ${t.cardBody} mb-1`}>
                Máriaremete Kisboldogasszony Bazilika Plébánia
              </p>
              <p className={`font-serif text-base ${t.cardBodyMuted} mb-1`}>
                Saturday, 03 July 2027 at 3:00 PM
              </p>
              <p className={`font-serif text-base ${t.cardBodyMuted} mb-3`}>
                1029 Budapest, Templom kert 1.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=47.56082341824489,18.945057936598808"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) =>
                openMap(e, {
                  lat: 47.56082341824489,
                  lng: 18.945057936598808,
                  label: 'Máriaremete Kisboldogasszony Bazilika'
                })
                }
                className={`inline-flex items-center gap-1.5 font-serif text-sm uppercase tracking-widest ${t.cardLink}`}>

                View Map
              </a>
            </div>

            {/* Divider */}
            <div className="flex justify-center">
              <Diamond size={7} variant={t.cardBotanicalVariant} />
            </div>

            {/* Venue */}
            <div className="text-center">
              <h3
                className={`font-display text-xl md:text-2xl font-normal ${t.cardHeading} tracking-wide mb-2 uppercase`}>

                Reception
              </h3>
              <p className={`font-serif text-lg ${t.cardBody} mb-1`}>
                Csillagkert Budapest
              </p>
              <p className={`font-serif text-base ${t.cardBodyMuted} mb-1`}>
                1029 Budapest, Feketefej utca 2.
              </p>
              <p className={`font-serif text-sm ${t.cardBodyFaint} mb-3`}>
                Budakeszi District, Hungary
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=47.541447915110226,18.93606702217123"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) =>
                openMap(e, {
                  lat: 47.541447915110226,
                  lng: 18.93606702217123,
                  label: 'Csillagkert Budapest'
                })
                }
                className={`inline-flex items-center gap-1.5 font-serif text-sm uppercase tracking-widest ${t.cardLink}`}>

                View Map
              </a>
            </div>

            {/* Divider */}
            <div className="flex justify-center">
              <Diamond size={7} variant={t.cardBotanicalVariant} />
            </div>

            {/* Reception Note */}
            <div className="text-center">
              <p className={`font-serif text-lg ${t.cardBody} italic`}>
                Dinner, dancing, and celebration into the night
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>);

}
interface WhenWhereProps {
  theme?: SectionTheme;
}
export function WhenWhere({ theme = 'dark' }: WhenWhereProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="when-where-heading">

      <WhenWhereContent />
    </ThemedSection>);

}