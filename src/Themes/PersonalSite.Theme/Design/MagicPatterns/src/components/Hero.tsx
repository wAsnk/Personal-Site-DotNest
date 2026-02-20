import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ANIM } from '../utils/animConfig';
/**
 * Hero background image URL.
 * Replace with your own photo — ideally a high-res landscape/portrait
 * of the couple or the venue.
 */
const HERO_IMAGE = "/IMG_1283.jpg";

export function Hero() {
  const d = ANIM.DURATION;
  const e = ANIM.EASE;
  const s = ANIM.STAGGER;
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    let ticking = false;
    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const contentOpacity = Math.max(0, 1 - scrollY / 600);
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundPosition: 'center 20%',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.15}px)`
        }}
        aria-hidden="true" />


      {/* Dark overlay — gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
          'linear-gradient(to bottom, rgba(30,28,22,0.55) 0%, rgba(30,28,22,0.7) 50%, rgba(30,28,22,0.85) 100%)'
        }}
        aria-hidden="true" />


      {/* Subtle border frame */}
      <div className="absolute top-3 left-3 right-3 bottom-3 border border-gold-light/30 z-20 pointer-events-none" />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 py-12"
        initial={{
          opacity: 0,
          y: 30
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: d,
          ease: e
        }}
        style={{
          opacity: contentOpacity
        }}>

        <motion.p
          className="font-display text-sm md:text-base tracking-[0.25em] uppercase text-white/70 mb-12"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: s,
            duration: d
          }}>

          Please join us to celebrate the wedding of
        </motion.p>

        <div className="relative mb-12">
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gold-light leading-tight tracking-widest uppercase"
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: s * 2,
              duration: d,
              ease: e
            }}>

            Klára
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-6 my-4"
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: s * 3,
              duration: d
            }}>

            <span className="font-display text-2xl md:text-3xl text-gold-light/80 italic">
              &
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gold-light leading-tight tracking-widest uppercase"
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: s * 4,
              duration: d,
              ease: e
            }}>

            Krisztián
          </motion.h1>
        </div>

        <motion.div
          className="space-y-6"
          initial={{
            opacity: 0,
            y: 12
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: s * 5,
            duration: d
          }}>

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
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: s * 8,
          duration: d
        }}
        style={{
          opacity: contentOpacity
        }}>

        <div className="w-px h-8 bg-gold-light/40 mx-auto" />
      </motion.div>
    </section>);

}