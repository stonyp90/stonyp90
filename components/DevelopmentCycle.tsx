'use client'

/* ==========================================================================
   DEVELOPMENT CYCLE — how Anthony delivers, animated.
   Renders the EXACT ScaleForged iteration-loop animation
   (components/IterationLoop.tsx, copied verbatim) with this site's English
   content. Phase icons match ScaleForged (lucide-react).
   ========================================================================== */

import { Rocket, Gauge, MessageSquare, Repeat } from 'lucide-react'
import { IterationLoopSection, type LoopPhase } from '@/components/IterationLoop'

/* Exactly four phases, ordered clockwise starting at the top. */
const PHASES: [LoopPhase, LoopPhase, LoopPhase, LoopPhase] = [
  { tag: '01', title: 'Ship', icon: Rocket, blurb: 'Put a small, useful first version in real hands fast.' },
  { tag: '02', title: 'Measure', icon: Gauge, blurb: 'Watch real usage and the numbers that matter.' },
  { tag: '03', title: 'Listen', icon: MessageSquare, blurb: 'Sit with the client and learn what actually helps.' },
  { tag: '04', title: 'Iterate', icon: Repeat, blurb: 'Cut what misses, sharpen what lands, ship again.' },
]

export default function DevelopmentCycle() {
  return (
    <IterationLoopSection
      id="how-i-work"
      sectionNum="02"
      sectionName="How I Work"
      heading={
        <>
          Outcomes by <span className="accent-text">short loops</span>.
        </>
      }
      lead={
        <>
          I ship a small, useful first version, then measure how it gets used in
          the real world. I listen to the client, cut what misses, and sharpen
          what lands. Each loop moves the work closer to the outcome you actually
          need.
        </>
      }
      pull="The client writes the roadmap."
      phases={PHASES}
      centerEyebrow="The target"
      centerLabel="Product-market fit"
      loopHint="continuous loop"
      interactHint="Hover or tap a step"
    />
  )
}
