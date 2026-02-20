import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BranchLine } from './BotanicalAccents';
import { HeartIcon, LoaderIcon } from 'lucide-react';
import { ANIM } from '../utils/animConfig';
import { ThemedSection } from './ThemedSection';
import { useSectionTheme, getThemeClasses } from '../utils/themeConfig';
import type { SectionTheme } from '../utils/themeConfig';
/** RSVP form submission endpoint — paste your backend URL here */
const RSVP_ENDPOINT = '';
interface GuestInfo {
  name: string;
  dietary: string;
}
interface FormData {
  email: string;
  attending: string;
  guestCount: string;
  guests: GuestInfo[];
  message: string;
}
function createEmptyGuests(count: number): GuestInfo[] {
  return Array.from(
    {
      length: count
    },
    () => ({
      name: '',
      dietary: ''
    })
  );
}
function RsvpFormContent() {
  const theme = useSectionTheme();
  const t = getThemeClasses(theme);
  const d = ANIM.DURATION;
  const s = ANIM.STAGGER;
  const [formData, setFormData] = useState<FormData>({
    email: '',
    attending: '',
    guestCount: '1',
    guests: [
    {
      name: '',
      dietary: ''
    }],

    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  function handleChange(
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)

  {
    const { name, value } = e.target;
    if (name === 'guestCount') {
      const count = parseInt(value, 10);
      const currentGuests = formData.guests;
      let newGuests: GuestInfo[];
      if (count > currentGuests.length) {
        newGuests = [
        ...currentGuests,
        ...createEmptyGuests(count - currentGuests.length)];

      } else {
        newGuests = currentGuests.slice(0, count);
      }
      setFormData((prev) => ({
        ...prev,
        guestCount: value,
        guests: newGuests
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  }
  function handleGuestChange(
  index: number,
  field: keyof GuestInfo,
  value: string)
  {
    setFormData((prev) => {
      const updated = [...prev.guests];
      updated[index] = {
        ...updated[index],
        [field]: value
      };
      return {
        ...prev,
        guests: updated
      };
    });
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);
    const payload: Record<string, string> = {
      email: formData.email,
      attending: formData.attending,
      guestCount: formData.attending === 'yes' ? formData.guestCount : '0',
      message: formData.message
    };
    if (formData.attending === 'yes') {
      const guestSummary = formData.guests.
      map(
        (g, i) =>
        `Guest ${i + 1}: ${g.name || '(no name)'}${g.dietary ? ` — Dietary: ${g.dietary}` : ''}`
      ).
      join('\n');
      payload.guestDetails = guestSummary;
    }
    if (RSVP_ENDPOINT) {
      try {
        await fetch(RSVP_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        setIsSubmitted(true);
      } catch {
        setSubmitError(
          'Something went wrong. Please try again or contact us directly.'
        );
      }
    } else {
      console.log('RSVP submission (no endpoint configured):', payload);
      setIsSubmitted(true);
    }
    setIsSubmitting(false);
  }
  const inputClasses = t.cardInputClasses;
  return (
    <div className="max-w-xl mx-auto">
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
          id="rsvp-heading"
          className={`font-display text-3xl md:text-4xl font-normal ${t.heading} mb-5 tracking-widest uppercase`}>

          R.S.V.P.
        </h2>
        <BranchLine
          className="max-w-xs mx-auto mb-5"
          variant={t.botanicalVariant} />

        <p className={`font-serif text-base ${t.bodyFaint} italic`}>
          Kindly respond by 01 May 2027
        </p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.97
        }}
        whileInView={{
          opacity: 1,
          scale: 1
        }}
        viewport={{
          once: true,
          margin: '-60px'
        }}
        transition={{
          duration: d,
          delay: s * 2
        }}>

        <div className={`${t.cardBorderClass} ${t.cardBg} p-8 md:p-12`}>
          <AnimatePresence mode="wait">
            {!isSubmitted ?
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-8"
              initial={{
                opacity: 1
              }}
              exit={{
                opacity: 0,
                y: -10
              }}
              transition={{
                duration: d
              }}>

                {/* Email */}
                <div>
                  <label
                  htmlFor="email"
                  className={`block font-display text-sm uppercase tracking-widest ${t.cardHeading} mb-2`}>

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
                  className={inputClasses} />

                </div>

                {/* Attending */}
                <fieldset>
                  <legend
                  className={`block font-display text-sm uppercase tracking-widest ${t.cardHeading} mb-4 text-center w-full`}>

                    Will you be attending?
                  </legend>
                  <div className="flex gap-6 justify-center">
                    <label
                    className={`flex items-center gap-3 cursor-pointer transition-all duration-300 font-serif text-sm ${formData.attending === 'yes' ? t.cardRadioActive : t.cardRadioInactive}`}>

                      <div
                      className={`w-4 h-4 border ${t.cardRadioBorder} flex items-center justify-center ${formData.attending === 'yes' ? t.cardRadioFill : ''}`}>

                        {formData.attending === 'yes' &&
                      <div className={`w-2 h-2 ${t.cardRadioDot}`} />
                      }
                      </div>
                      <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === 'yes'}
                      onChange={handleChange}
                      className="sr-only"
                      required />

                      <span className="uppercase tracking-wide text-sm">
                        Accepts with Pleasure
                      </span>
                    </label>
                    <label
                    className={`flex items-center gap-3 cursor-pointer transition-all duration-300 font-serif text-sm ${formData.attending === 'no' ? t.cardRadioActive : t.cardRadioInactive}`}>

                      <div
                      className={`w-4 h-4 border ${t.cardRadioBorder} flex items-center justify-center ${formData.attending === 'no' ? t.cardRadioFill : ''}`}>

                        {formData.attending === 'no' &&
                      <div className={`w-2 h-2 ${t.cardRadioDot}`} />
                      }
                      </div>
                      <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === 'no'}
                      onChange={handleChange}
                      className="sr-only" />

                      <span className="uppercase tracking-wide text-sm">
                        Declines with Regret
                      </span>
                    </label>
                  </div>
                </fieldset>

                {/* Number of Guests */}
                {formData.attending === 'yes' &&
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0
                }}
                animate={{
                  opacity: 1,
                  height: 'auto'
                }}
                exit={{
                  opacity: 0,
                  height: 0
                }}
                transition={{
                  duration: d
                }}>

                    <label
                  htmlFor="guestCount"
                  className={`block font-display text-sm uppercase tracking-widest ${t.cardHeading} mb-2`}>

                      Number of Guests
                    </label>
                    <select
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className={inputClasses}>

                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                    </select>
                  </motion.div>
              }

                {/* Per-guest name & dietary fields */}
                {formData.attending === 'yes' &&
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0
                }}
                animate={{
                  opacity: 1,
                  height: 'auto'
                }}
                exit={{
                  opacity: 0,
                  height: 0
                }}
                transition={{
                  duration: d,
                  delay: s
                }}
                className="space-y-6">

                    <p
                  className={`font-display text-sm uppercase tracking-widest ${t.cardHeading} text-center`}>

                      Guest Details & Dietary Requirements
                    </p>
                    <p
                  className={`font-serif text-sm ${t.cardBodyFaint} italic text-center -mt-4`}>

                      Please list each guest's name and any allergies or dietary
                      needs
                    </p>

                    {formData.guests.map((guest, index) =>
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 10
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: d * 0.5,
                    delay: s * index
                  }}
                  className={`border ${t.cardInputBorder} p-5 space-y-4`}>

                        <p
                    className={`font-display text-sm uppercase tracking-widest ${t.cardAccent} opacity-60 mb-1`}>

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
                    required />

                        <input
                    type="text"
                    placeholder="Allergies or dietary needs (if any)"
                    value={guest.dietary}
                    onChange={(e) =>
                    handleGuestChange(index, 'dietary', e.target.value)
                    }
                    className={inputClasses} />

                      </motion.div>
                )}
                  </motion.div>
              }

                {/* Message */}
                <div>
                  <label
                  htmlFor="message"
                  className={`block font-display text-sm uppercase tracking-widest ${t.cardHeading} mb-2`}>

                    A Note to the Couple
                  </label>
                  <textarea
                  id="message"
                  name="message"
                  rows={2}
                  placeholder="Share your well wishes..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`} />

                </div>

                {/* Error message */}
                {submitError &&
              <p className="font-serif text-sm text-red-700 text-center">
                    {submitError}
                  </p>
              }

                {/* Submit */}
                <div className="pt-6 text-center">
                  <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`py-3 px-12 ${t.cardButtonBorder} ${t.cardButtonBg} ${t.cardButtonHover} disabled:opacity-60 ${t.cardButtonText} font-display text-sm tracking-[0.2em] uppercase transition-all duration-300 inline-flex items-center gap-2`}>

                    {isSubmitting ?
                  <>
                        <LoaderIcon className="w-4 h-4 animate-spin" />
                        Sending…
                      </> :

                  'Send Reply'
                  }
                  </button>
                </div>
              </motion.form> :

            <motion.div
              key="success"
              initial={{
                opacity: 0,
                scale: 0.97
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: d,
                ease: ANIM.EASE
              }}
              className="text-center py-16">

                <div className="flex justify-center mb-6" aria-hidden="true">
                  <HeartIcon className={`w-6 h-6 ${t.cardAccent}`} />
                </div>
                <h3
                className={`font-display text-2xl font-normal ${t.cardHeading} mb-3 tracking-wide uppercase`}>

                  Thank You
                </h3>
                <p
                className={`font-serif text-base ${t.cardBodyFaint} max-w-sm mx-auto leading-relaxed mb-8`}>

                  Your response has been received.
                </p>
                <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    email: '',
                    attending: '',
                    guestCount: '1',
                    guests: [
                    {
                      name: '',
                      dietary: ''
                    }],

                    message: ''
                  });
                }}
                className={`font-display text-xs ${t.cardAccent} opacity-60 uppercase tracking-widest hover:opacity-100 transition-colors border-b ${t.cardInputBorder} pb-1`}>

                  Submit another response
                </button>
              </motion.div>
            }
          </AnimatePresence>
        </div>
      </motion.div>
    </div>);

}
interface RsvpFormProps {
  theme?: SectionTheme;
}
export function RsvpForm({ theme = 'light' }: RsvpFormProps) {
  return (
    <ThemedSection
      theme={theme}
      className="py-24 md:py-32 px-6"
      aria-labelledby="rsvp-heading">

      <RsvpFormContent />
    </ThemedSection>);

}