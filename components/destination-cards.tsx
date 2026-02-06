'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import parisImg from '@/assets/images/Destination1/paris.png'
import dinoImg from '@/assets/images/Destination2/dino.png'
import florenceImg from '@/assets/images/Destination3/florence.png'

const destinations = [
  {
    slug: 'paris-1889',
    era: 'Paris 1889',
    year: '1889',
    title: 'L\'Exposition Universelle',
    description: 'Admirez la Tour Eiffel fraîchement inaugurée et les merveilles de l\'Exposition Universelle dans la Ville Lumière.',
    image: parisImg,
  },
  {
    slug: 'cretace-superieur',
    era: 'Crétacé Supérieur',
    year: '-65M d\'années',
    title: 'Le Temps des Titans',
    description: 'Un voyage sauvage au cœur de la jungle préhistorique. Observez les géants avant leur extinction mystérieuse.',
    image: dinoImg,
  },
  {
    slug: 'renaissance-florence',
    era: 'Haute Renaissance',
    year: '1504',
    title: 'L\'Âge d\'Or à Florence',
    description: 'Assistez au dévoilement du David de Michel-Ange et côtoyez les génies qui ont façonné la civilisation occidentale.',
    image: florenceImg,
  },
];

export function DestinationCards() {
  return (
    <section id="destinations" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4 uppercase">
            Expériences Sur Mesure
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            {'Destinations Temporelles'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {'Chaque voyage est méticuleusement conçu pour garantir authenticité, sécurité et moments inoubliables à travers les époques.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card hover:border-accent transition-all duration-500 cursor-pointer"
            >
              <Link href={`/destinations/${destination.slug}`} className="block">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs tracking-wider text-accent uppercase font-medium">
                        {destination.era}
                      </span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{destination.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-2">
                      {destination.title}
                    </h3>
                  </div>
                </div>
              </Link>
              
              <div className="p-6 border-t border-border">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {destination.description}
                </p>
                <Button asChild variant="ghost" className="w-full justify-between group/btn hover:bg-accent hover:text-accent-foreground">
                  <Link href={`/destinations/${destination.slug}`}>
                    <span className="text-sm tracking-wide">EN SAVOIR PLUS</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}



    // {destinations.map((destination, index) => (
    //         <Card
    //           key={index}
    //           className="group overflow-hidden border-border bg-card hover:border-accent transition-all duration-500 cursor-pointer relative"
    //         >
    //           {/* On entoure TOUT le contenu par le Link */}
    //           <Link href={`/destinations/${destination.slug}`} className="flex flex-col h-full">

    //             {/* Section Image */}
    //             <div className="relative h-80 overflow-hidden">
    //               <Image
    //                 src={destination.image || "/placeholder.svg"}
    //                 alt={destination.title}
    //                 fill
    //                 className="object-cover transition-transform duration-700 group-hover:scale-110"
    //               />
    //               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
    //               <div className="absolute bottom-0 left-0 right-0 p-6">
    //                 <div className="flex items-center gap-3 mb-3">
    //                   <span className="text-xs tracking-wider text-accent uppercase font-medium">
    //                     {destination.era}
    //                   </span>
    //                   <span className="text-xs text-muted-foreground">·</span>
    //                   <span className="text-xs text-muted-foreground">{destination.year}</span>
    //                 </div>
    //                 <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-2">
    //                   {destination.title}
    //                 </h3>
    //               </div>
    //             </div>

    //             {/* Section Texte et "Faux" Bouton */}
    //             <div className="p-6 border-t border-border flex flex-col flex-grow">
    //               <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
    //                 {destination.description}
    //               </p>

    //               {/* Ici, le Button ne contient PAS de Link, car le parent est déjà un Link */}
    //               <div className="inline-flex items-center justify-between w-full p-2 px-4 rounded-md border border-transparent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
    //                 <span className="text-sm tracking-wide font-medium">EN SAVOIR PLUS</span>
    //                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    //               </div>
    //             </div>
    //           </Link>
    //         </Card>
    //       ))}