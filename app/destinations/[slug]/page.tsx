import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Clock, Users, Shield, Calendar, MapPin, Star } from 'lucide-react'
import parisImg from '@/assets/images/Destination1/paris.png'
import dinoImg from '@/assets/images/Destination2/dino.png'
import florenceImg from '@/assets/images/Destination3/florence.png'

const destinationsData = {
  'paris-1889': {
    slug: 'paris-1889',
    era: 'Belle Époque',
    year: '1889',
    title: 'L\'Exposition Universelle de Paris',
    subtitle: 'Admirez la Tour Eiffel fraîchement inaugurée',
    image: parisImg,
    video: '/videos/destination1.mp4',
    price: '38 000€',
    duration: '7 jours',
    maxTravelers: 12,
    safetyRating: 9.8,
    description: 'Plongez au cœur de la Belle Époque parisienne et vivez l\'effervescence de l\'Exposition Universelle de 1889. Admirez la Tour Eiffel fraîchement inaugurée, flânez sur les Champs-Élysées illuminés, et côtoyez les grands artistes de l\'époque dans les cafés montmartrois.',
    highlights: [
      'Inauguration de la Tour Eiffel par Gustave Eiffel',
      'Visite privée de l\'Exposition Universelle',
      'Dîner au Maxim\'s avec la haute société parisienne',
      'Spectacle au Moulin Rouge (version originale)',
      'Balade en calèche dans le Bois de Boulogne',
      'Rencontre avec des artistes impressionnistes',
    ],
    included: [
      'Hébergement 5 étoiles d\'époque (Hôtel Ritz Paris)',
      'Garde-robe Belle Époque complète (robes, hauts-de-forme, etc.)',
      'Traducteur temporel neural',
      'Guide chrono-historien certifié',
      'Tous les repas gastronomiques d\'époque',
      'Assurance chrono-sécurité premium',
      'Transport en capsule temporelle aller-retour',
    ],
    practical: [
      'Certificat médical obligatoire (<3 mois)',
      'Formation de 2 jours avant le départ',
      'Âge minimum : 18 ans',
      'Vaccinations temporelles incluses',
      'Monnaie d\'époque fournie (francs-or)',
    ],
  },
  'cretace-superieur': {
    slug: 'cretace-superieur',
    era: 'Crétacé Supérieur',
    year: '-65 millions d\'années',
    title: 'Safari Préhistorique',
    subtitle: 'Observez les derniers dinosaures avant leur extinction',
    image: dinoImg,
    video: '/videos/destination2.mp4',
    price: '85 000€',
    duration: '7 jours',
    maxTravelers: 8,
    safetyRating: 9.5,
    description: 'Embarquez pour l\'aventure ultime : un safari au temps des dinosaures ! Observez les T-Rex, Tricératops et autres géants de la préhistoire dans leur habitat naturel. Une expérience scientifique et aventureuse unique, encadrée par nos meilleurs guides paléontologues.',
    highlights: [
      'Observation de T-Rex en chasse (à distance sécurisée)',
      'Camp de base fortifié en forêt crétacée',
      'Étude de traces de dinosaures avec paléontologues',
      'Vol en hélicoptère temporel au-dessus des troupeaux',
      'Nuit sous les étoiles du Crétacé (camp sécurisé)',
      'Documentation photo/vidéo professionnelle',
    ],
    included: [
      'Camp de base ultra-sécurisé avec dôme de protection',
      'Tenue d\'exploration adaptée (anti-moustiques géants)',
      'Équipement scientifique d\'observation',
      'Guides paléontologues et biologistes',
      'Rations alimentaires optimisées',
      'Assurance chrono-sécurité extrême',
      'Évacuation d\'urgence garantie 24/7',
    ],
    practical: [
      'Excellente condition physique requise',
      'Certificat médical + test d\'effort',
      'Formation intensive de 4 jours',
      'Âge minimum : 21 ans',
      'Vaccinations préhistoriques spéciales',
    ],
  },
  'renaissance-florence': {
    slug: 'renaissance-florence',
    era: 'Haute Renaissance',
    year: '1504',
    title: 'Florence, Berceau de la Renaissance',
    subtitle: 'Côtoyez Michel-Ange et Léonard de Vinci',
    image: florenceImg,
    video: '/videos/destination3.mp4',
    price: '45 000€',
    duration: '7 jours',
    maxTravelers: 12,
    safetyRating: 9.9,
    description: 'Vivez l\'âge d\'or de la Renaissance italienne ! Assistez au dévoilement du David de Michel-Ange, visitez les ateliers des plus grands artistes, et découvrez Florence à son apogée culturelle. Un voyage pour les amoureux d\'art et d\'histoire.',
    highlights: [
      'Dévoilement du David de Michel-Ange (septembre 1504)',
      'Visite de l\'atelier de Léonard de Vinci',
      'Audience privée avec les Médicis',
      'Cours de peinture Renaissance avec un maître',
      'Banquet Renaissance au Palazzo Vecchio',
      'Concert de musique de la Renaissance',
    ],
    included: [
      'Palazzo privatisé dans le centre de Florence',
      'Garde-robe Renaissance sur mesure',
      'Traducteur italien ancien',
      'Historien d\'art spécialisé Renaissance',
      'Repas Renaissance gastronomiques',
      'Assurance chrono-sécurité premium',
      'Accès VIP aux événements majeurs',
    ],
    practical: [
      'Certificat médical standard',
      'Formation culturelle de 2 jours',
      'Âge minimum : 16 ans (avec autorisation)',
      'Cours d\'italien Renaissance recommandé',
      'Florins d\'or fournis',
    ],
  },
}

export function generateStaticParams() {
  return [
    { slug: 'paris-1889' },
    { slug: 'cretace-superieur' },
    { slug: 'renaissance-florence' },
  ]
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const destination = destinationsData[slug as keyof typeof destinationsData]

  if (!destination) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className="object-cover"
          priority
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={destination.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <Button asChild variant="outline" className="bg-background/80 backdrop-blur-sm">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Link>
          </Button>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 container mx-auto px-4 lg:px-8 pb-12">
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

      {/* Quick Info */}
      <section className="py-8 border-y border-border bg-zinc-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Calendar className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Durée</p>
                <p className="font-semibold">{destination.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Users className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Voyageurs max</p>
                <p className="font-semibold">{destination.maxTravelers} personnes</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Shield className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Sécurité</p>
                <p className="font-semibold">{destination.safetyRating}/10</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Star className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">À partir de</p>
                <p className="font-semibold text-amber-500">{destination.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="font-serif text-3xl font-light mb-6">Présentation</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {destination.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-serif text-3xl font-light mb-6">Points forts</h2>
                <div className="grid gap-3">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-zinc-900/50 border border-amber-500/10">
                      <Star className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included */}
              <div>
                <h2 className="font-serif text-3xl font-light mb-6">Inclus dans le forfait</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {destination.included.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 p-6 border-2 border-amber-500/20 bg-zinc-900">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">À partir de</p>
                  <p className="font-serif text-4xl font-light text-amber-500 mb-1">
                    {destination.price}
                  </p>
                  <p className="text-xs text-muted-foreground">par personne / semaine</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Durée du voyage</span>
                    <span className="font-medium">{destination.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">Places disponibles</span>
                    <span className="font-medium">{destination.maxTravelers} max</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm text-muted-foreground">Note sécurité</span>
                    <span className="font-medium text-emerald-500">{destination.safetyRating}/10</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:from-amber-400 hover:to-yellow-500 mb-3">
                  RÉSERVER MAINTENANT
                </Button>
                <Button variant="outline" className="w-full border-amber-500/50 hover:bg-amber-500/10">
                  DEMANDER UN DEVIS
                </Button>

                {/* Practical Info */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Informations pratiques</h3>
                  <div className="space-y-2">
                    {destination.practical.map((info, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground">{info}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
