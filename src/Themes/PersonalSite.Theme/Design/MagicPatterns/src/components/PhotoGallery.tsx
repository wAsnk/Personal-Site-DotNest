import React from 'react';
import { motion } from 'framer-motion';
import { BranchLine } from './BotanicalAccents';
import { ANIM } from '../utils/animConfig';
import { ThemedSection } from './ThemedSection';
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig';
import type { SectionTheme } from '../utils/themeConfig';
interface PhotoPlaceholder {
  aspect: string;
  gradient: string;
  span?: string;
}
const photos: PhotoPlaceholder[] = [
{
  aspect: 'aspect-[3/4]',
  gradient: 'from-gold/30 via-gold-dark/20 to-bronze/10',
  span: 'md:row-span-2'
},
{
  aspect: 'aspect-square',
  gradient: 'from-bronze/20 via-gold/15 to-paper-dark/30'
},
{
  aspect: 'aspect-[4/3]',
  gradient: 'from-gold-dark/25 via-bronze/15 to-gold-light/20'
},
{
  aspect: 'aspect-[4/3]',
  gradient: 'from-paper-dark/30 via-gold/20 to-bronze/15'
},
{
  aspect: 'aspect-square',
  gradient: 'from-gold-light/25 via-gold-dark/20 to-bronze/10'
},
{
  aspect: 'aspect-[3/4]',
  gradient: 'from-bronze/15 via-gold/25 to-gold-light/15'
}];

function PhotoGalleryContent() {
  const theme = useSectionTheme();
  const t = getThemeClasses(theme);
  const d = ANIM.DURATION;
  const s = ANIM.STAGGER;
  const borderColor =
  theme === 'dark' ? 'border-gold-light/20' : 'border-gold/20';
  return (
    <div className="max-w-4xl mx-auto">
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
        className="text-center mb-16">

        <h2
          id="gallery-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}>

          Moments
        </h2>
        <BranchLine className="max-w-xs mx-auto" variant={t.botanicalVariant} />
      </motion.div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, index) =>
        <motion.div
          key={index}
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
          className="break-inside-avoid">

            <div
            className={`${photo.aspect} w-full bg-gradient-to-br ${photo.gradient} rounded-sm border ${borderColor}`} />

          </motion.div>
        )}
      </div>

      {/* Caption */}
      <motion.p
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: d,
          delay: s * 4
        }}
        className={`text-center font-serif text-sm ${t.bodyFaint} italic mt-12`}>

        Your photos will appear here
      </motion.p>
    </div>);

}
interface PhotoGalleryProps {
  theme?: SectionTheme;
}
export function PhotoGallery({ theme = 'dark' }: PhotoGalleryProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="gallery-heading">

      <PhotoGalleryContent />
    </ThemedSection>);

}