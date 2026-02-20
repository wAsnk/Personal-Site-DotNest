import React from 'react';
import { motion } from 'framer-motion';
import { BranchLine } from './BotanicalAccents';
import { ANIM } from '../utils/animConfig';
import { ThemedSection } from './ThemedSection';
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig';
import type { SectionTheme } from '../utils/themeConfig';
interface Milestone {
  year: string;
  title: string;
  description: string;
}
const milestones: Milestone[] = [
{
  year: '2019',
  title: 'First Met',
  description:
  'A chance encounter that neither of us expected — but one that changed everything.'
},
{
  year: '2020',
  title: 'First Adventure Together',
  description:
  'We discovered that the best journeys are the ones shared with someone special.'
},
{
  year: '2023',
  title: 'A New Chapter',
  description:
  'Building a home together and learning what it truly means to be a team.'
},
{
  year: '2025',
  title: 'The Proposal',
  description:
  'A question asked, a joyful yes, and the beginning of forever.'
},
{
  year: '2027',
  title: 'Forever Begins',
  description:
  'The day we say "I do" — surrounded by the people we love most.'
}];

function OurStoryContent() {
  const theme = useSectionTheme();
  const t = getThemeClasses(theme);
  const d = ANIM.DURATION;
  const s = ANIM.STAGGER;
  const lineColor = theme === 'dark' ? 'bg-gold-light/30' : 'bg-gold/30';
  const diamondBorder = theme === 'dark' ? 'border-gold-light' : 'border-gold';
  const diamondBg = theme === 'dark' ? 'bg-garden-dark' : 'bg-paper';
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
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
        className="text-center mb-20">

        <h2
          id="our-story-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}>

          Our Story
        </h2>
        <BranchLine className="max-w-xs mx-auto" variant={t.botanicalVariant} />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Center line */}
        <div
          className={`absolute left-1/2 top-0 bottom-0 w-px ${lineColor} -translate-x-1/2 hidden md:block`}
          aria-hidden="true" />

        {/* Mobile left line */}
        <div
          className={`absolute left-6 top-0 bottom-0 w-px ${lineColor} md:hidden`}
          aria-hidden="true" />


        <div className="space-y-16 md:space-y-20">
          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={milestone.year}
                initial={{
                  opacity: 0,
                  y: 24
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
                  delay: s * 2
                }}
                className="relative">

                {/* Diamond dot on line — desktop */}
                <div
                  className={`absolute left-1/2 top-1 -translate-x-1/2 w-3 h-3 rotate-45 border ${diamondBorder} ${diamondBg} z-10 hidden md:block`}
                  aria-hidden="true" />

                {/* Diamond dot on line — mobile */}
                <div
                  className={`absolute left-6 top-1 -translate-x-1/2 w-3 h-3 rotate-45 border ${diamondBorder} ${diamondBg} z-10 md:hidden`}
                  aria-hidden="true" />


                {/* Content */}
                <div
                  className={`md:w-[calc(50%-2rem)] pl-14 md:pl-0 ${isLeft ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'}`}>

                  <p
                    className={`font-display text-sm tracking-[0.2em] ${t.accent} uppercase mb-2`}>

                    {milestone.year}
                  </p>
                  <h3
                    className={`font-display text-xl md:text-2xl font-normal ${t.heading} tracking-wide uppercase mb-3`}>

                    {milestone.title}
                  </h3>
                  <p className={`font-serif text-lg ${t.body} leading-relaxed`}>
                    {milestone.description}
                  </p>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </div>);

}
interface OurStoryProps {
  theme?: SectionTheme;
}
export function OurStory({ theme = 'light' }: OurStoryProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="our-story-heading">

      <OurStoryContent />
    </ThemedSection>);

}