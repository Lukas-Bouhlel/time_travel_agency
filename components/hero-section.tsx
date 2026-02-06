'use client'

import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'

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
          Voyagez Au-Delà · Du Temps
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-balance mb-6 text-foreground leading-tight">
          {'Vivez Sans'}
          <br />
          {'Limites'}
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          {'Découvrez les plus grands moments de l\'histoire avec une élégance et une précision inégalées. Votre voyage temporel vous attend.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button
            size="lg"
            onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black font-semibold hover:from-amber-400 hover:to-yellow-500 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 px-8 py-6 text-base"
          >
            EXPLORER LES DESTINATIONS
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-amber-500/50 text-foreground hover:bg-amber-500/10 hover:border-amber-500 px-8 py-6 text-base font-semibold"
          >
            <Link href="/contact">NOUS CONTACTER</Link>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-wider text-muted-foreground uppercase">Défiler pour découvrir</span>
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
