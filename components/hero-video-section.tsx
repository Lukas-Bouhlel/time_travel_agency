'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

const getAssetPath = (path: string) => {
  const isProd = process.env.NODE_ENV === 'production';
  const repoName = '/time_travel_agency';
  return isProd ? `${repoName}${path}` : path;
};

interface HeroSectionProps {
  destination: {
    title: string
    subtitle: string
    image: StaticImageData | string
    video: string
    era: string
    year: string
  }
}

export default function HeroVideoSection({ destination }: HeroSectionProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black">
      <div 
        className={`absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        onCanPlayThrough={() => setIsVideoLoaded(true)}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src={getAssetPath(destination.video)} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute top-6 left-6 z-30">
        <Button asChild variant="outline" className="bg-background/80 backdrop-blur-sm">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Link>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-30 container mx-auto px-4 lg:px-8 pb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm tracking-wider text-amber-500 uppercase font-medium">
            {destination.era}
          </span>
          <span className="text-sm text-muted-foreground">·</span>
          <span className="text-sm text-muted-foreground">{destination.year}</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
          {destination.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          {destination.subtitle}
        </p>
      </div>
    </section>
  )
}