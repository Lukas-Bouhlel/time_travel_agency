'use client'

import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="https://cdn.pixabay.com/video/2022/11/10/138468-768940488_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex flex-col items-center justify-center text-center">
        <p className="text-sm tracking-[0.3em] text-muted-foreground mb-6 uppercase">
          Journey Beyond · Time Itself
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-balance mb-6 text-foreground leading-tight">
          {'Experience Without'}
          <br />
          {'Limitation'}
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          {'Discover the finest moments in history with unparalleled elegance and precision. Your temporal journey awaits.'}
        </p>

        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-wider text-muted-foreground uppercase">Scroll to Reveal</span>
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
