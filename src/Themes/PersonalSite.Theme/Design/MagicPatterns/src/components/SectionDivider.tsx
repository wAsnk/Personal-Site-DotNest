import React from 'react';
export function SectionDivider() {
  return (
    <div className="relative w-full h-0 z-30" aria-hidden="true">
      {/* Gold line spanning full width, positioned at the exact section boundary */}
      <div
        className="absolute left-0 right-0 top-0 h-px -translate-y-1/2"
        style={{
          backgroundColor: 'rgba(180,155,87,0.4)'
        }}>

        {/* Doubled diamond ornament — outer square + gap + inner square */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Outer diamond */}
          <div
            className="w-4 h-4 rotate-45 border border-gold/60 flex items-center justify-center"
            style={{
              backgroundColor: 'var(--paper)',
              boxShadow:
              '0 0 0 3px var(--paper), 0 0 0 4px rgba(180,155,87,0.4)'
            }}>

            {/* Inner diamond */}
            <div className="w-2 h-2 border border-gold/60 bg-paper" />
          </div>
        </div>
      </div>
    </div>);

}