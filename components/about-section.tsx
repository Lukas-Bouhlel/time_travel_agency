'use client'

import { Clock, Shield, Award, Users } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Technologie Temporelle',
    description: 'Nos capsules temporelles de dernière génération garantissent des voyages précis à la nanoseconde près.',
  },
  {
    icon: Shield,
    title: 'Sécurité Maximale',
    description: '99.97% de taux de sécurité sur 15 ans. Nos protocoles chrono-sécuritaires sont certifiés par l\'Autorité Temporelle Internationale.',
  },
  {
    icon: Award,
    title: 'Excellence & Luxe',
    description: 'Agence primée 5 années consécutives. Hébergements d\'époque 5 étoiles et expériences VIP exclusives.',
  },
  {
    icon: Users,
    title: 'Guides Experts',
    description: 'Historiens et chrono-guides certifiés vous accompagnent pour une immersion totale et authentique.',
  },
]

export function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] text-amber-500 mb-4 uppercase font-medium">
            Depuis 2010
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            {'Chronos Journeys'}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Pionniers du voyage temporel de luxe, nous offrons des expériences uniques à travers les époques.
            Notre mission : rendre l'histoire accessible tout en préservant son intégrité.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-zinc-900/50 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 hover:bg-zinc-900/80"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-600/20 group-hover:from-amber-500/30 group-hover:to-yellow-600/30 transition-all">
                <feature.icon className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-amber-500/20">
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-light text-amber-500 mb-2">
              15+
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Années d'expérience
            </p>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-light text-amber-500 mb-2">
              12K+
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Voyageurs temporels
            </p>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-light text-amber-500 mb-2">
              50+
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Destinations uniques
            </p>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-light text-amber-500 mb-2">
              99.97%
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Taux de sécurité
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
