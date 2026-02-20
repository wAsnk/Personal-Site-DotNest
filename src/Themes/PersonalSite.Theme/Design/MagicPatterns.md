```App.tsx
import React from 'react'
import { Hero } from './components/Hero'
import { SectionDivider } from './components/SectionDivider'
import { WhenWhere } from './components/WhenWhere'
import { OurStory } from './components/OurStory'
import { PhotoGallery } from './components/PhotoGallery'
import { RsvpForm } from './components/RsvpForm'
import { GiftRegistry } from './components/GiftRegistry'
import { FurtherDetails } from './components/FurtherDetails'
import { HungarianTraditions } from './components/HungarianTraditions'
import { Footer } from './components/Footer'
/**
 * ─── SECTION THEME CONTROL ───────────────────────────────
 * Change any section between 'light' (cream) and 'dark' (green)
 * and all text, accents, and dividers auto-adjust.
 * ──────────────────────────────────────────────────────────
 */
export function App() {
  return (
    <div className="w-full min-h-screen bg-paper font-serif">
      <div className="paper-texture" />

      <Hero />
      <RsvpForm theme="dark" />
      <SectionDivider />
      <WhenWhere theme="light" />
      <SectionDivider />
      <GiftRegistry theme="dark" />
      <SectionDivider />
      <OurStory theme="light" />
      <SectionDivider />
      <PhotoGallery theme="dark" />
      <SectionDivider />
      <HungarianTraditions theme="light" />
      <SectionDivider />
      <FurtherDetails theme="dark" />
      <Footer theme="light" />
    </div>
  )
}

```
```components/BotanicalAccents.tsx
import React from 'react'
/* ── Diamond ornament ── */
export function Diamond({
  className = '',
  size = 6,
  variant = 'default',
}: {
  className?: string
  size?: number
  variant?: 'default' | 'light'
}) {
  const strokeColor =
    variant === 'light' ? 'rgba(212,196,148,0.8)' : 'rgba(180,155,87,0.5)'
  const fillColor =
    variant === 'light' ? 'rgba(212,196,148,0.5)' : 'rgba(180,155,87,0.35)'
  const half = size / 2
  const path = `M ${half} 0 L ${size} ${half} L ${half} ${size} L 0 ${half} Z`
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
    >
      <path d={path} fill={fillColor} stroke={strokeColor} strokeWidth={0.8} />
    </svg>
  )
}
/* ── Horizontal rule ── */
export function Rule({
  className = '',
  width = 32,
  variant = 'default',
}: {
  className?: string
  width?: number
  variant?: 'default' | 'light'
}) {
  const color =
    variant === 'light' ? 'rgba(212,196,148,0.7)' : 'rgba(180,155,87,0.3)'
  return (
    <svg
      width={width}
      height={2}
      viewBox={`0 0 ${width} 2`}
      className={className}
      aria-hidden="true"
    >
      <line x1={0} y1={1} x2={width} y2={1} stroke={color} strokeWidth={1} />
    </svg>
  )
}
/* ── Branch line with triple-diamond center ── */
export function BranchLine({
  className = '',
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'light'
}) {
  const goldStroke =
    variant === 'light' ? 'rgba(212,196,148,0.7)' : 'rgba(180,155,87,0.4)'
  const goldFill =
    variant === 'light' ? 'rgba(212,196,148,0.45)' : 'rgba(180,155,87,0.25)'
  const centerStroke =
    variant === 'light' ? 'rgba(212,196,148,0.9)' : 'rgba(180,155,87,0.6)'
  const centerFill =
    variant === 'light' ? 'rgba(212,196,148,0.6)' : 'rgba(180,155,87,0.4)'
  const w = 300
  const h = 10
  const cy = h / 2
  const diamondSize = 4
  const diamondLargeSize = 5
  const gap = 10
  function diamondPath(cx: number, s: number) {
    return `M ${cx} ${cy - s / 2} L ${cx + s / 2} ${cy} L ${cx} ${cy + s / 2} L ${cx - s / 2} ${cy} Z`
  }
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={`w-full ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <line
        x1={w / 2 - gap - diamondLargeSize}
        y1={cy}
        x2={0}
        y2={cy}
        stroke={goldStroke}
        strokeWidth={0.6}
      />
      <line
        x1={w / 2 + gap + diamondLargeSize}
        y1={cy}
        x2={w}
        y2={cy}
        stroke={goldStroke}
        strokeWidth={0.6}
      />
      <path
        d={diamondPath(w / 2 - gap, diamondSize)}
        fill={goldFill}
        stroke={goldStroke}
        strokeWidth={0.6}
      />
      <path
        d={diamondPath(w / 2, diamondLargeSize)}
        fill={centerFill}
        stroke={centerStroke}
        strokeWidth={0.7}
      />
      <path
        d={diamondPath(w / 2 + gap, diamondSize)}
        fill={goldFill}
        stroke={goldStroke}
        strokeWidth={0.6}
      />
    </svg>
  )
}

```
```components/Footer.tsx
import React from 'react'
import { BranchLine } from './BotanicalAccents'
import { ThemedSection } from './ThemedSection'
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig'
import type { SectionTheme } from '../utils/themeConfig'
function FooterContent() {
  const theme = useSectionTheme()
  const t = getThemeClasses(theme)
  return (
    <div>
      {/* Divider */}
      <div className="max-w-xs mx-auto mb-14" aria-hidden="true">
        <BranchLine variant={t.botanicalVariant} />
      </div>

      <div className="text-center">
        <h2
          className={`font-display text-3xl md:text-4xl ${t.heading} mb-4 font-normal tracking-widest uppercase`}
        >
          Klára &amp; Krisztián
        </h2>
        <p
          className={`font-display text-sm tracking-[0.2em] ${t.bodyMuted} uppercase mb-8`}
        >
          03 . 07 . 2027
        </p>
        <p
          className={`font-serif text-sm ${t.bodyFaint} tracking-widest uppercase`}
        >
          Budapest, Hungary
        </p>
      </div>
    </div>
  )
}
interface FooterProps {
  theme?: SectionTheme
}
export function Footer({ theme = 'dark' }: FooterProps) {
  return (
    <ThemedSection theme={theme} className="py-20 px-6">
      <FooterContent />
    </ThemedSection>
  )
}

```
```components/FurtherDetails.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { BranchLine, Rule } from './BotanicalAccents'
import { ClockIcon } from 'lucide-react'
import { ANIM } from '../utils/animConfig'
import { ThemedSection } from './ThemedSection'
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig'
import type { SectionTheme } from '../utils/themeConfig'
function FurtherDetailsContent() {
  const theme = useSectionTheme()
  const t = getThemeClasses(theme)
  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: ANIM.DURATION,
        }}
        className="text-center"
      >
        <h2
          id="further-details-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}
        >
          Further Details
        </h2>
        <BranchLine
          className="max-w-xs mx-auto mb-10"
          variant={t.botanicalVariant}
        />

        <div className="flex justify-center mb-8" aria-hidden="true">
          <ClockIcon className={`w-5 h-5 ${t.accent}`} />
        </div>

        <p
          className={`font-serif text-lg ${t.italic} italic leading-relaxed max-w-md mx-auto mb-6`}
        >
          More details about the day will follow in due course.
        </p>

        <div className="flex justify-center mb-6">
          <Rule width={32} variant={t.botanicalVariant} />
        </div>

        <p
          className={`font-serif text-lg ${t.bodyMuted} leading-relaxed max-w-sm mx-auto`}
        >
          Information regarding accommodation, transport, and the evening
          programme will be shared closer to the date.
        </p>
      </motion.div>
    </div>
  )
}
interface FurtherDetailsProps {
  theme?: SectionTheme
}
export function FurtherDetails({ theme = 'light' }: FurtherDetailsProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="further-details-heading"
    >
      <FurtherDetailsContent />
    </ThemedSection>
  )
}

```
```components/GiftRegistry.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { BranchLine, Rule } from './BotanicalAccents'
import { GiftIcon } from 'lucide-react'
import { ANIM } from '../utils/animConfig'
import { ThemedSection } from './ThemedSection'
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig'
import type { SectionTheme } from '../utils/themeConfig'
function GiftRegistryContent() {
  const theme = useSectionTheme()
  const t = getThemeClasses(theme)
  const d = ANIM.DURATION
  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: d,
        }}
        className="text-center mb-14"
      >
        <h2
          id="gifts-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}
        >
          Gifts
        </h2>
        <BranchLine
          className="max-w-xs mx-auto mb-6"
          variant={t.botanicalVariant}
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-60px',
        }}
        transition={{
          duration: d,
          delay: ANIM.STAGGER * 2,
        }}
        className="text-center"
      >
        <div className="w-10 h-10 flex items-center justify-center mx-auto mb-6">
          <GiftIcon className={`w-5 h-5 ${t.accent}`} aria-hidden="true" />
        </div>

        <p
          className={`font-serif text-lg ${t.body} italic leading-relaxed max-w-lg mx-auto mb-8`}
        >
          Your presence at our celebration is the most meaningful gift we could
          receive.
        </p>

        <div className="flex justify-center mb-8">
          <Rule width={32} variant={t.botanicalVariant} />
        </div>

        <p
          className={`font-serif text-lg ${t.body} leading-relaxed max-w-md mx-auto`}
        >
          If you would like to give us a gift, we would be truly grateful for a
          monetary contribution towards our future together.
        </p>
      </motion.div>
    </div>
  )
}
interface GiftRegistryProps {
  theme?: SectionTheme
}
export function GiftRegistry({ theme = 'dark' }: GiftRegistryProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="gifts-heading"
    >
      <GiftRegistryContent />
    </ThemedSection>
  )
}

```
```components/Hero.tsx
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ANIM } from '../utils/animConfig'
/**
 * Hero background image URL.
 * Replace with your own photo — ideally a high-res landscape/portrait
 * of the couple or the venue.
 */
const HERO_IMAGE =
  'https://cdn.magicpatterns.com/uploads/7Q1BZdeJT94annecS5TuZq/IMG_1283.jpg'
export function Hero() {
  const d = ANIM.DURATION
  const e = ANIM.EASE
  const s = ANIM.STAGGER
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    let ticking = false
    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const contentOpacity = Math.max(0, 1 - scrollY / 600)
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundPosition: 'center 20%',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
        aria-hidden="true"
      />

      {/* Dark overlay — gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(30,28,22,0.55) 0%, rgba(30,28,22,0.7) 50%, rgba(30,28,22,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle border frame */}
      <div className="absolute top-3 left-3 right-3 bottom-3 border border-gold-light/30 z-20 pointer-events-none" />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 py-12"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: d,
          ease: e,
        }}
        style={{
          opacity: contentOpacity,
        }}
      >
        <motion.p
          className="font-display text-sm md:text-base tracking-[0.25em] uppercase text-white/70 mb-12"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: s,
            duration: d,
          }}
        >
          Please join us to celebrate the wedding of
        </motion.p>

        <div className="relative mb-12">
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gold-light leading-tight tracking-widest uppercase"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: s * 2,
              duration: d,
              ease: e,
            }}
          >
            Klára
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-6 my-4"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: s * 3,
              duration: d,
            }}
          >
            <span className="font-display text-2xl md:text-3xl text-gold-light/80 italic">
              &
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gold-light leading-tight tracking-widest uppercase"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: s * 4,
              duration: d,
              ease: e,
            }}
          >
            Krisztián
          </motion.h1>
        </div>

        <motion.div
          className="space-y-6"
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: s * 5,
            duration: d,
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="font-display text-xl md:text-2xl tracking-[0.15em] text-gold-light uppercase">
              03 July 2027
            </p>
            <p className="font-serif text-base md:text-lg text-white/60 italic">
              at three o'clock in the afternoon
            </p>
          </div>

          <div className="w-16 h-px bg-gold-light/50 mx-auto my-6" />

          <div className="flex flex-col items-center gap-1">
            <p className="font-display text-base md:text-lg tracking-[0.2em] text-gold-light uppercase">
              Budapest
            </p>
            <p className="font-serif text-base text-white/50 italic">Hungary</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll fade indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: s * 8,
          duration: d,
        }}
        style={{
          opacity: contentOpacity,
        }}
      >
        <div className="w-px h-8 bg-gold-light/40 mx-auto" />
      </motion.div>
    </section>
  )
}

```
```components/HungarianTraditions.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { BranchLine, Diamond } from './BotanicalAccents'
import { ANIM } from '../utils/animConfig'
import { ThemedSection } from './ThemedSection'
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig'
import type { SectionTheme } from '../utils/themeConfig'
const traditions = [
  {
    title: "The Bride's Dance",
    description:
      "The bride's dance is a beloved tradition where guests queue to dance with the bride for a very short time, each placing money into a basket — a joyful way to wish the couple prosperity.",
  },
  {
    title: 'The Stealing of the Bride',
    description:
      'During the celebration, friends playfully "kidnap" the bride. The groom must search for her, often completing humorous tasks or paying a ransom to win her back.',
  },
  {
    title: 'The Bouquet Toss',
    description:
      'The bride tosses her bouquet to the unmarried women at the celebration. Whoever catches it is said to be the next to marry — a moment of joyful anticipation on the dance floor.',
  },
  {
    title: 'Clinking Glasses & Tapping Plates',
    description:
      "When guests clink their glasses or tap their plates in unison, the newlyweds must kiss. The louder the clinking, the longer the kiss — a playful way for guests to celebrate the couple's love.",
  },
  {
    title: 'Cutting the Cake',
    description:
      'The couple cuts the wedding cake together, hand over hand, symbolising their first shared act as husband and wife. The first slice is exchanged between them as a sweet promise of a life shared.',
  },
]
function HungarianTraditionsContent() {
  const theme = useSectionTheme()
  const t = getThemeClasses(theme)
  const d = ANIM.DURATION
  const s = ANIM.STAGGER
  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: d,
        }}
        className="text-center mb-14"
      >
        <h2
          id="traditions-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}
        >
          Hungarian Traditions
        </h2>
        <BranchLine
          className="max-w-xs mx-auto mb-6"
          variant={t.botanicalVariant}
        />
        <p
          className={`font-serif text-lg ${t.bodyMuted} italic max-w-md mx-auto`}
        >
          A glimpse into the customs that make a Hungarian wedding truly
          unforgettable
        </p>
      </motion.div>

      <div className="space-y-10">
        {traditions.map((tradition, index) => (
          <motion.div
            key={tradition.title}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-40px',
            }}
            transition={{
              duration: d,
              delay: s * (index + 1),
            }}
            className="text-center"
          >
            <h3
              className={`font-display text-xl md:text-2xl font-normal ${t.heading} tracking-wide mb-3 uppercase`}
            >
              {tradition.title}
            </h3>
            <p
              className={`font-serif text-lg ${t.body} leading-relaxed max-w-lg mx-auto`}
            >
              {tradition.description}
            </p>

            {index < traditions.length - 1 && (
              <div className="flex justify-center mt-10">
                <Diamond size={7} variant={t.botanicalVariant} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
interface HungarianTraditionsProps {
  theme?: SectionTheme
}
export function HungarianTraditions({
  theme = 'dark',
}: HungarianTraditionsProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="traditions-heading"
    >
      <HungarianTraditionsContent />
    </ThemedSection>
  )
}

```
```components/OurStory.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { BranchLine } from './BotanicalAccents'
import { ANIM } from '../utils/animConfig'
import { ThemedSection } from './ThemedSection'
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig'
import type { SectionTheme } from '../utils/themeConfig'
interface Milestone {
  year: string
  title: string
  description: string
}
const milestones: Milestone[] = [
  {
    year: '2019',
    title: 'First Met',
    description:
      'A chance encounter that neither of us expected — but one that changed everything.',
  },
  {
    year: '2020',
    title: 'First Adventure Together',
    description:
      'We discovered that the best journeys are the ones shared with someone special.',
  },
  {
    year: '2023',
    title: 'A New Chapter',
    description:
      'Building a home together and learning what it truly means to be a team.',
  },
  {
    year: '2025',
    title: 'The Proposal',
    description:
      'A question asked, a joyful yes, and the beginning of forever.',
  },
  {
    year: '2027',
    title: 'Forever Begins',
    description:
      'The day we say "I do" — surrounded by the people we love most.',
  },
]
function OurStoryContent() {
  const theme = useSectionTheme()
  const t = getThemeClasses(theme)
  const d = ANIM.DURATION
  const s = ANIM.STAGGER
  const lineColor = theme === 'dark' ? 'bg-gold-light/30' : 'bg-gold/30'
  const diamondBorder = theme === 'dark' ? 'border-gold-light' : 'border-gold'
  const diamondBg = theme === 'dark' ? 'bg-garden-dark' : 'bg-paper'
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: d,
        }}
        className="text-center mb-20"
      >
        <h2
          id="our-story-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}
        >
          Our Story
        </h2>
        <BranchLine className="max-w-xs mx-auto" variant={t.botanicalVariant} />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Center line */}
        <div
          className={`absolute left-1/2 top-0 bottom-0 w-px ${lineColor} -translate-x-1/2 hidden md:block`}
          aria-hidden="true"
        />
        {/* Mobile left line */}
        <div
          className={`absolute left-6 top-0 bottom-0 w-px ${lineColor} md:hidden`}
          aria-hidden="true"
        />

        <div className="space-y-16 md:space-y-20">
          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0
            return (
              <motion.div
                key={milestone.year}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-60px',
                }}
                transition={{
                  duration: d,
                  delay: s * 2,
                }}
                className="relative"
              >
                {/* Diamond dot on line — desktop */}
                <div
                  className={`absolute left-1/2 top-1 -translate-x-1/2 w-3 h-3 rotate-45 border ${diamondBorder} ${diamondBg} z-10 hidden md:block`}
                  aria-hidden="true"
                />
                {/* Diamond dot on line — mobile */}
                <div
                  className={`absolute left-6 top-1 -translate-x-1/2 w-3 h-3 rotate-45 border ${diamondBorder} ${diamondBg} z-10 md:hidden`}
                  aria-hidden="true"
                />

                {/* Content */}
                <div
                  className={`md:w-[calc(50%-2rem)] pl-14 md:pl-0 ${isLeft ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'}`}
                >
                  <p
                    className={`font-display text-sm tracking-[0.2em] ${t.accent} uppercase mb-2`}
                  >
                    {milestone.year}
                  </p>
                  <h3
                    className={`font-display text-xl md:text-2xl font-normal ${t.heading} tracking-wide uppercase mb-3`}
                  >
                    {milestone.title}
                  </h3>
                  <p className={`font-serif text-lg ${t.body} leading-relaxed`}>
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
interface OurStoryProps {
  theme?: SectionTheme
}
export function OurStory({ theme = 'light' }: OurStoryProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="our-story-heading"
    >
      <OurStoryContent />
    </ThemedSection>
  )
}

```
```components/PhotoGallery.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { BranchLine } from './BotanicalAccents'
import { ANIM } from '../utils/animConfig'
import { ThemedSection } from './ThemedSection'
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig'
import type { SectionTheme } from '../utils/themeConfig'
interface PhotoPlaceholder {
  aspect: string
  gradient: string
  span?: string
}
const photos: PhotoPlaceholder[] = [
  {
    aspect: 'aspect-[3/4]',
    gradient: 'from-gold/30 via-gold-dark/20 to-bronze/10',
    span: 'md:row-span-2',
  },
  {
    aspect: 'aspect-square',
    gradient: 'from-bronze/20 via-gold/15 to-paper-dark/30',
  },
  {
    aspect: 'aspect-[4/3]',
    gradient: 'from-gold-dark/25 via-bronze/15 to-gold-light/20',
  },
  {
    aspect: 'aspect-[4/3]',
    gradient: 'from-paper-dark/30 via-gold/20 to-bronze/15',
  },
  {
    aspect: 'aspect-square',
    gradient: 'from-gold-light/25 via-gold-dark/20 to-bronze/10',
  },
  {
    aspect: 'aspect-[3/4]',
    gradient: 'from-bronze/15 via-gold/25 to-gold-light/15',
  },
]
function PhotoGalleryContent() {
  const theme = useSectionTheme()
  const t = getThemeClasses(theme)
  const d = ANIM.DURATION
  const s = ANIM.STAGGER
  const borderColor =
    theme === 'dark' ? 'border-gold-light/20' : 'border-gold/20'
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: d,
        }}
        className="text-center mb-16"
      >
        <h2
          id="gallery-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}
        >
          Moments
        </h2>
        <BranchLine className="max-w-xs mx-auto" variant={t.botanicalVariant} />
      </motion.div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-40px',
            }}
            transition={{
              duration: d,
              delay: s * (index + 1),
            }}
            className="break-inside-avoid"
          >
            <div
              className={`${photo.aspect} w-full bg-gradient-to-br ${photo.gradient} rounded-sm border ${borderColor}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Caption */}
      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: d,
          delay: s * 4,
        }}
        className={`text-center font-serif text-sm ${t.bodyFaint} italic mt-12`}
      >
        Your photos will appear here
      </motion.p>
    </div>
  )
}
interface PhotoGalleryProps {
  theme?: SectionTheme
}
export function PhotoGallery({ theme = 'dark' }: PhotoGalleryProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="gallery-heading"
    >
      <PhotoGalleryContent />
    </ThemedSection>
  )
}

```
```components/RsvpForm.tsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BranchLine } from './BotanicalAccents'
import { HeartIcon, LoaderIcon } from 'lucide-react'
import { ANIM } from '../utils/animConfig'
import { ThemedSection } from './ThemedSection'
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig'
import type { SectionTheme } from '../utils/themeConfig'
/** RSVP form submission endpoint — paste your backend URL here */
const RSVP_ENDPOINT = ''
interface GuestInfo {
  name: string
  dietary: string
}
interface FormData {
  email: string
  attending: string
  guestCount: string
  guests: GuestInfo[]
  message: string
}
function createEmptyGuests(count: number): GuestInfo[] {
  return Array.from(
    {
      length: count,
    },
    () => ({
      name: '',
      dietary: '',
    }),
  )
}
function RsvpFormContent() {
  const theme = useSectionTheme()
  const t = getThemeClasses(theme)
  const d = ANIM.DURATION
  const s = ANIM.STAGGER
  const [formData, setFormData] = useState<FormData>({
    email: '',
    attending: '',
    guestCount: '1',
    guests: [
      {
        name: '',
        dietary: '',
      },
    ],
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target
    if (name === 'guestCount') {
      const count = parseInt(value, 10)
      const currentGuests = formData.guests
      let newGuests: GuestInfo[]
      if (count > currentGuests.length) {
        newGuests = [
          ...currentGuests,
          ...createEmptyGuests(count - currentGuests.length),
        ]
      } else {
        newGuests = currentGuests.slice(0, count)
      }
      setFormData((prev) => ({
        ...prev,
        guestCount: value,
        guests: newGuests,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }
  function handleGuestChange(
    index: number,
    field: keyof GuestInfo,
    value: string,
  ) {
    setFormData((prev) => {
      const updated = [...prev.guests]
      updated[index] = {
        ...updated[index],
        [field]: value,
      }
      return {
        ...prev,
        guests: updated,
      }
    })
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)
    const payload: Record<string, string> = {
      email: formData.email,
      attending: formData.attending,
      guestCount: formData.attending === 'yes' ? formData.guestCount : '0',
      message: formData.message,
    }
    if (formData.attending === 'yes') {
      const guestSummary = formData.guests
        .map(
          (g, i) =>
            `Guest ${i + 1}: ${g.name || '(no name)'}${g.dietary ? ` — Dietary: ${g.dietary}` : ''}`,
        )
        .join('\n')
      payload.guestDetails = guestSummary
    }
    if (RSVP_ENDPOINT) {
      try {
        await fetch(RSVP_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
        setIsSubmitted(true)
      } catch {
        setSubmitError(
          'Something went wrong. Please try again or contact us directly.',
        )
      }
    } else {
      console.log('RSVP submission (no endpoint configured):', payload)
      setIsSubmitted(true)
    }
    setIsSubmitting(false)
  }
  const inputClasses = t.cardInputClasses
  return (
    <div className="max-w-xl mx-auto">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: d,
        }}
        className="text-center mb-14"
      >
        <h2
          id="rsvp-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}
        >
          R.S.V.P.
        </h2>
        <BranchLine
          className="max-w-xs mx-auto mb-5"
          variant={t.botanicalVariant}
        />
        <p className={`font-serif text-base ${t.bodyFaint} italic`}>
          Kindly respond by 01 May 2027
        </p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          margin: '-60px',
        }}
        transition={{
          duration: d,
          delay: s * 2,
        }}
      >
        <div className={`${t.cardBorderClass} ${t.cardBg} p-8 md:p-12`}>
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-8"
                initial={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: d,
                }}
              >
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className={`block font-display text-sm uppercase tracking-widest ${t.cardHeading} mb-2`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                {/* Attending */}
                <fieldset>
                  <legend
                    className={`block font-display text-sm uppercase tracking-widest ${t.cardHeading} mb-4 text-center w-full`}
                  >
                    Will you be attending?
                  </legend>
                  <div className="flex gap-6 justify-center">
                    <label
                      className={`flex items-center gap-3 cursor-pointer transition-all duration-300 font-serif text-sm ${formData.attending === 'yes' ? t.cardRadioActive : t.cardRadioInactive}`}
                    >
                      <div
                        className={`w-4 h-4 border ${t.cardRadioBorder} flex items-center justify-center ${formData.attending === 'yes' ? t.cardRadioFill : ''}`}
                      >
                        {formData.attending === 'yes' && (
                          <div className={`w-2 h-2 ${t.cardRadioDot}`} />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === 'yes'}
                        onChange={handleChange}
                        className="sr-only"
                        required
                      />
                      <span className="uppercase tracking-wide text-sm">
                        Accepts with Pleasure
                      </span>
                    </label>
                    <label
                      className={`flex items-center gap-3 cursor-pointer transition-all duration-300 font-serif text-sm ${formData.attending === 'no' ? t.cardRadioActive : t.cardRadioInactive}`}
                    >
                      <div
                        className={`w-4 h-4 border ${t.cardRadioBorder} flex items-center justify-center ${formData.attending === 'no' ? t.cardRadioFill : ''}`}
                      >
                        {formData.attending === 'no' && (
                          <div className={`w-2 h-2 ${t.cardRadioDot}`} />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === 'no'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="uppercase tracking-wide text-sm">
                        Declines with Regret
                      </span>
                    </label>
                  </div>
                </fieldset>

                {/* Number of Guests */}
                {formData.attending === 'yes' && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: 'auto',
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: d,
                    }}
                  >
                    <label
                      htmlFor="guestCount"
                      className={`block font-display text-sm uppercase tracking-widest ${t.cardHeading} mb-2`}
                    >
                      Number of Guests
                    </label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                    </select>
                  </motion.div>
                )}

                {/* Per-guest name & dietary fields */}
                {formData.attending === 'yes' && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: 'auto',
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: d,
                      delay: s,
                    }}
                    className="space-y-6"
                  >
                    <p
                      className={`font-display text-sm uppercase tracking-widest ${t.cardHeading} text-center`}
                    >
                      Guest Details & Dietary Requirements
                    </p>
                    <p
                      className={`font-serif text-sm ${t.cardBodyFaint} italic text-center -mt-4`}
                    >
                      Please list each guest's name and any allergies or dietary
                      needs
                    </p>

                    {formData.guests.map((guest, index) => (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: d * 0.5,
                          delay: s * index,
                        }}
                        className={`border ${t.cardInputBorder} p-5 space-y-4`}
                      >
                        <p
                          className={`font-display text-sm uppercase tracking-widest ${t.cardAccent} opacity-60 mb-1`}
                        >
                          Guest {index + 1}
                        </p>
                        <input
                          type="text"
                          placeholder="Guest name"
                          value={guest.name}
                          onChange={(e) =>
                            handleGuestChange(index, 'name', e.target.value)
                          }
                          className={inputClasses}
                          required
                        />
                        <input
                          type="text"
                          placeholder="Allergies or dietary needs (if any)"
                          value={guest.dietary}
                          onChange={(e) =>
                            handleGuestChange(index, 'dietary', e.target.value)
                          }
                          className={inputClasses}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className={`block font-display text-sm uppercase tracking-widest ${t.cardHeading} mb-2`}
                  >
                    A Note to the Couple
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    placeholder="Share your well wishes..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* Error message */}
                {submitError && (
                  <p className="font-serif text-sm text-red-700 text-center">
                    {submitError}
                  </p>
                )}

                {/* Submit */}
                <div className="pt-6 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`py-3 px-12 ${t.cardButtonBorder} ${t.cardButtonBg} ${t.cardButtonHover} disabled:opacity-60 ${t.cardButtonText} font-display text-sm tracking-[0.2em] uppercase transition-all duration-300 inline-flex items-center gap-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderIcon className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      'Send Reply'
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: d,
                  ease: ANIM.EASE,
                }}
                className="text-center py-16"
              >
                <div className="flex justify-center mb-6" aria-hidden="true">
                  <HeartIcon className={`w-6 h-6 ${t.cardAccent}`} />
                </div>
                <h3
                  className={`font-display text-2xl font-normal ${t.cardHeading} mb-3 tracking-wide uppercase`}
                >
                  Thank You
                </h3>
                <p
                  className={`font-serif text-base ${t.cardBodyFaint} max-w-sm mx-auto leading-relaxed mb-8`}
                >
                  Your response has been received.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      email: '',
                      attending: '',
                      guestCount: '1',
                      guests: [
                        {
                          name: '',
                          dietary: '',
                        },
                      ],
                      message: '',
                    })
                  }}
                  className={`font-display text-xs ${t.cardAccent} opacity-60 uppercase tracking-widest hover:opacity-100 transition-colors border-b ${t.cardInputBorder} pb-1`}
                >
                  Submit another response
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
interface RsvpFormProps {
  theme?: SectionTheme
}
export function RsvpForm({ theme = 'light' }: RsvpFormProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="rsvp-heading"
    >
      <RsvpFormContent />
    </ThemedSection>
  )
}

```
```components/SectionDivider.tsx
import React from 'react'
export function SectionDivider() {
  return (
    <div className="relative w-full h-0 z-30" aria-hidden="true">
      {/* Gold line spanning full width, positioned at the exact section boundary */}
      <div
        className="absolute left-0 right-0 top-0 h-px -translate-y-1/2"
        style={{
          backgroundColor: 'rgba(180,155,87,0.4)',
        }}
      >
        {/* Doubled diamond ornament — outer square + gap + inner square */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Outer diamond */}
          <div
            className="w-4 h-4 rotate-45 border border-gold/60 flex items-center justify-center"
            style={{
              backgroundColor: 'var(--paper)',
              boxShadow:
                '0 0 0 3px var(--paper), 0 0 0 4px rgba(180,155,87,0.4)',
            }}
          >
            {/* Inner diamond */}
            <div className="w-2 h-2 border border-gold/60 bg-paper" />
          </div>
        </div>
      </div>
    </div>
  )
}

```
```components/ThemedSection.tsx
import React from 'react'
import { SectionThemeProvider, getThemeClasses } from '../utils/themeConfig'
import type { SectionTheme } from '../utils/themeConfig'
interface ThemedSectionProps {
  theme: SectionTheme
  children: React.ReactNode
  className?: string
  id?: string
  'aria-labelledby'?: string
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
  'aria-labelledby': ariaLabelledBy,
}: ThemedSectionProps) {
  const t = getThemeClasses(theme)
  return (
    <SectionThemeProvider theme={theme}>
      <section
        id={id}
        aria-labelledby={ariaLabelledBy}
        className={`w-full ${t.bg} ${className}`}
      >
        {children}
      </section>
    </SectionThemeProvider>
  )
}

```
```components/WhenWhere.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { BranchLine, Diamond } from './BotanicalAccents'
import { openMap } from '../utils/mapLink'
import { ANIM } from '../utils/animConfig'
import { ThemedSection } from './ThemedSection'
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig'
import type { SectionTheme } from '../utils/themeConfig'
function WhenWhereContent() {
  const theme = useSectionTheme()
  const t = getThemeClasses(theme)
  const d = ANIM.DURATION
  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: d,
        }}
        className="text-center mb-14"
      >
        <h2
          id="when-where-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}
        >
          The Details
        </h2>
        <BranchLine className="max-w-xs mx-auto" variant={t.botanicalVariant} />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-60px',
        }}
        transition={{
          duration: d,
          delay: ANIM.STAGGER * 2,
        }}
      >
        <div
          className={`${t.cardBg} p-10 md:p-14 ${t.cardBorderClass} relative`}
        >
          <div className="space-y-12">
            {/* Ceremony */}
            <div className="text-center">
              <h3
                className={`font-display text-xl md:text-2xl font-normal ${t.cardHeading} tracking-wide mb-2 uppercase`}
              >
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
                    label: 'Máriaremete Kisboldogasszony Bazilika',
                  })
                }
                className={`inline-flex items-center gap-1.5 font-serif text-sm uppercase tracking-widest ${t.cardLink}`}
              >
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
                className={`font-display text-xl md:text-2xl font-normal ${t.cardHeading} tracking-wide mb-2 uppercase`}
              >
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
                    label: 'Csillagkert Budapest',
                  })
                }
                className={`inline-flex items-center gap-1.5 font-serif text-sm uppercase tracking-widest ${t.cardLink}`}
              >
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
    </div>
  )
}
interface WhenWhereProps {
  theme?: SectionTheme
}
export function WhenWhere({ theme = 'dark' }: WhenWhereProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="when-where-heading"
    >
      <WhenWhereContent />
    </ThemedSection>
  )
}

```
```index.css
/* @import url() FONT IMPORTS MUST ALWAYS BE AT THE VERY TOP OF THIS FILE, ABOVE THE TAILWIND IMPORTS — DO NOT DELETE THIS COMMENT */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cinzel:wght@400;500;600&display=swap');

/* CRITICAL: THE FOLLOWING TAILWIND IMPORTS MUST NEVER BE DELETED OR REORDERED — DO NOT DELETE THIS COMMENT */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* END TAILWIND IMPORTS — ALL OTHER CSS MUST GO BELOW THIS LINE */

:root {
  --paper: #F5F2EA;
  --gold: #B49B57;
  --bronze: #3D3322;
  --garden: #5B6B4A;
}
html {
  scroll-behavior: smooth;
}
body {
  background-color: var(--paper);
  color: var(--bronze);
  font-family: 'EB Garamond', Georgia, 'Times New Roman', serif;
  font-weight: 500;
  overflow-x: hidden;
}
/* Paper texture overlay */
.paper-texture {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 50;
  opacity: 0.35;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
}
/* Scroll indicator animation */
@keyframes gentleBounce {
  0%, 100% { transform: translateY(0); opacity: 0.4; }
  50% { transform: translateY(6px); opacity: 0.8; }
}
.scroll-indicator {
  animation: gentleBounce 3s ease-in-out infinite;
}
/* Focus styles */
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 1px solid var(--gold);
  outline-offset: 2px;
}
button:focus-visible {
  outline: 1px solid var(--gold);
  outline-offset: 2px;
}
/* Gold foil text effect */
.text-gold-foil {
  background: linear-gradient(to bottom right, #D4C494, #B49B57, #8C7638, #B49B57);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 200% auto;
  animation: shine 5s linear infinite;
}
@keyframes shine {
  to {
    background-position: 200% center;
  }
}
/* Card border style */
.card-border {
  border: 1px solid rgba(180, 155, 87, 1);
  box-shadow: 0 0 0 4px rgba(245, 242, 234, 1), 0 0 0 5px rgba(180, 155, 87, 1);
}
/* Card border style — dark theme variant */
.card-border-dark {
  border: 1px solid rgba(212, 196, 148, 0.6);
  box-shadow: 0 0 0 4px rgba(62, 74, 51, 1), 0 0 0 5px rgba(212, 196, 148, 0.6);
}

```
```index.tsx
import './index.css';
import "./index.css";
import React from "react";
import { render } from "react-dom";
import { App } from "./App";
render(<App />, document.getElementById("root"));
```
```tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F5F2EA',
          dark: '#EBE6D8',
        },
        gold: {
          DEFAULT: '#B49B57',
          light: '#D4C494',
          dark: '#7A6530',
          text: '#6B5520',
        },
        bronze: {
          DEFAULT: '#3D3322',
          dark: '#2A2215',
          light: '#5C4E38',
        },
        garden: {
          DEFAULT: '#5B6B4A',
          light: '#7A8C66',
          dark: '#3E4A33',
          pale: '#E8EBE2',
          accent: '#6E8258',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"EB Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
      },
    },
  },
}
```
```utils/animConfig.ts
/**
 * Central animation configuration.
 * Change DURATION to control all animation speeds across the site.
 * All values are in seconds.
 */
export const ANIM = {
  /** Max duration for any entrance animation */
  DURATION: 1,
  /** Ease curve for all entrance animations */
  EASE: 'easeOut' as const,
  /** Base delay step for staggered hero elements */
  STAGGER: 0.1,
}

```
```utils/mapLink.ts
/**
 * Opens the best map application based on the user's platform.
 * - iOS: Apple Maps URL (works reliably on all iOS versions)
 * - Android: geo: URI (triggers OS app chooser)
 * - macOS: Apple Maps app (via maps:// protocol)
 * - Windows/Linux: Google Maps in browser
 */
export function openMap(
  e: React.MouseEvent,
  options: {
    lat: number
    lng: number
    label: string
  },
) {
  e.preventDefault()

  const { lat, lng, label } = options
  const encodedLabel = encodeURIComponent(label)
  const userAgent = navigator.userAgent || ''

  const isIOS = /iPad|iPhone|iPod/.test(userAgent)
  const isAndroid = /Android/.test(userAgent)
  const isMac = /Macintosh|MacIntel/.test(userAgent) && !isIOS

  if (isIOS) {
    // iOS: Use Apple Maps HTTP URL — this opens Apple Maps natively on iPhone/iPad.
    // If Google Maps is installed, users can still copy the address and open it there,
    // but iOS does not support an app chooser for map links.
    window.location.href = `https://maps.apple.com/?q=${encodedLabel}&ll=${lat},${lng}&z=16`
  } else if (isAndroid) {
    // Android: geo: URI triggers the OS "open with" dialog
    window.location.href = `geo:${lat},${lng}?q=${lat},${lng}(${encodedLabel})`
  } else if (isMac) {
    // macOS: open native Apple Maps app
    window.location.href = `maps://?q=${encodedLabel}&ll=${lat},${lng}`
  } else {
    // Windows/Linux: Google Maps in browser
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      '_blank',
    )
  }
}

```
```utils/themeConfig.tsx
import React, { createContext, useContext } from 'react'
export type SectionTheme = 'light' | 'dark'
const SectionThemeContext = createContext<SectionTheme>('light')
export function useSectionTheme(): SectionTheme {
  return useContext(SectionThemeContext)
}
interface SectionThemeProviderProps {
  theme: SectionTheme
  children: React.ReactNode
}
export function SectionThemeProvider({
  theme,
  children,
}: SectionThemeProviderProps) {
  return (
    <SectionThemeContext.Provider value={theme}>
      {children}
    </SectionThemeContext.Provider>
  )
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
      cardButtonBorder: 'border border-gold-light/60',
    }
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
    cardButtonBorder: 'border border-gold/60',
  }
}

```
