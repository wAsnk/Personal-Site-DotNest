import React from 'react';
import { Hero } from './components/Hero';
import { SectionDivider } from './components/SectionDivider';
import { WhenWhere } from './components/WhenWhere';
import { OurStory } from './components/OurStory';
import { PhotoGallery } from './components/PhotoGallery';
import { RsvpForm } from './components/RsvpForm';
import { GiftRegistry } from './components/GiftRegistry';
import { FurtherDetails } from './components/FurtherDetails';
import { HungarianTraditions } from './components/HungarianTraditions';
import { Footer } from './components/Footer';
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
    </div>);

}