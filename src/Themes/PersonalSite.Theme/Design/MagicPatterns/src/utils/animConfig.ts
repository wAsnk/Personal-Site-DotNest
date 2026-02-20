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
  STAGGER: 0.1
};