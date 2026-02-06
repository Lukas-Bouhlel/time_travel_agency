'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound, useParams } from 'next/navigation'
import parisImg from '@/assets/images/Destination1/paris.png'
import dinoImg from '@/assets/images/Destination2/dino.png'
import florenceImg from '@/assets/images/Destination3/florence.png'

const destinations = [
    {
        slug: 'paris-1889',
        era: 'Belle Époque',
        year: '1889',
        title: 'L\'Exposition Universelle',
        description: 'Admirez la toute nouvelle Tour Eiffel et les merveilles de l\'industrie.',
        longDescription: 'Plongez dans l\'effervescence de Paris en 1889. Soyez parmi les premiers à gravir la Tour Eiffel, visitez le Pavillon des Machines et flânez sur les boulevards illuminés par l\'électricité naissante. Une immersion totale dans le triomphe de la modernité française.',
        image: parisImg,
        video: 'https://cdn.pixabay.com/video/2020/05/25/40149-425126131_large.mp4', 
        highlights: ['Inauguration de la Tour Eiffel', 'Dîner au Moulin Rouge', 'Galerie des Machines'],
        duration: '2 Jours'
    },
    {
        slug: 'cretace-superieur',
        era: 'Crétacé Supérieur',
        year: '-65M d\'années',
        title: 'Le Crépuscule des Géants',
        description: 'Un safari sauvage à l\'ombre du redoutable Tyrannosaure.',
        longDescription: 'Bienvenue au Crétacé Supérieur, la dernière grande époque des dinosaures. Observez des troupeaux de Tricératops, évitez les prédateurs apex et découvrez une flore luxuriante aujourd\'hui disparue. Un voyage où vous n\'êtes plus au sommet de la chaîne alimentaire.',
        image: dinoImg,
        video: 'https://cdn.pixabay.com/video/2021/04/20/71741-540321240_large.mp4',
        highlights: ['Observation du T-Rex', 'Vol en Ptéranodon', 'Safari Herbivore'],
        duration: '5 Jours'
    },
    {
        slug: 'renaissance-florence',
        era: 'Haute Renaissance',
        year: '1504',
        title: 'Le Siècle d\'Or',
        description: 'Rencontrez Michel-Ange et assistez à la naissance du David.',
        longDescription: 'Florence est à son apogée artistique. Dans les rues pavées, vous pourriez croiser Léonard de Vinci ou Machiavel. Ce séjour vous offre un accès exclusif aux ateliers des maîtres et une immersion dans la politique fascinante de la famille Médicis.',
        image: florenceImg,
        video: 'https://cdn.pixabay.com/video/2020/07/21/45142-443310705_large.mp4',
        highlights: ['Dévoilement du David', 'Atelier de Léonard de Vinci', 'Banquet chez les Médicis'],
        duration: '3 Jours'
    },
]

export default function DestinationPage() {
    const params = useParams()
    const destination = destinations.find(d => d.slug === params.slug)

    if (!destination) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section with Video Background */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover opacity-60"
                    >
                        <source src={destination.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
                </div>

                <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
                    <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors w-fit">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Timeline
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm tracking-wider text-accent uppercase font-medium">
                            {destination.era}
                        </span>
                        <span className="text-sm text-muted-foreground">·</span>
                        <span className="text-sm text-muted-foreground">{destination.year}</span>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl font-light text-foreground mb-6">
                        {destination.title}
                    </h1>
                </div>
            </section>

            {/* Details Content */}
            <section className="container mx-auto px-4 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="font-serif text-3xl font-light mb-6">Experience Overview</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            {destination.longDescription}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3">
                                <Clock className="h-5 w-5 text-accent mt-1" />
                                <div>
                                    <h3 className="font-medium mb-1">Duration</h3>
                                    <p className="text-sm text-muted-foreground">{destination.duration}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Calendar className="h-5 w-5 text-accent mt-1" />
                                <div>
                                    <h3 className="font-medium mb-1">Best Time to Visit</h3>
                                    <p className="text-sm text-muted-foreground">Year Round</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="font-serif text-2xl font-light mb-4">Journey Highlights</h3>
                        <ul className="space-y-3 mb-8">
                            {destination.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>

                        <Button size="lg" className="w-full sm:w-auto">
                            BOOK THIS JOURNEY
                        </Button>
                    </div>

                    <div className="relative h-[400px] lg:h-auto rounded-lg overflow-hidden border border-border">
                        <Image
                            src={destination.image}
                            alt={destination.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}