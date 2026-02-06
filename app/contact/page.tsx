'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Mail, Phone, MapPin, Send, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Back Button */}
          <Button asChild variant="outline" className="mb-10 bg-background/80 backdrop-blur-sm">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Link>
          </Button>

          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-amber-500 mb-4 uppercase font-medium">
              Contactez-Nous
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
              Planifiez Votre Voyage
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Notre équipe de conseillers temporels est à votre disposition pour créer le voyage à travers le temps de vos rêves.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 border-amber-500/10 bg-zinc-900/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-amber-500/10">
                    <Phone className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-sm text-muted-foreground">+33 1 88 00 24 00</p>
                    <p className="text-xs text-muted-foreground mt-1">Lun - Ven, 9h - 19h</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-amber-500/10 bg-zinc-900/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-amber-500/10">
                    <Mail className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">contact@timetravelagency.fr</p>
                    <p className="text-xs text-muted-foreground mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-amber-500/10 bg-zinc-900/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-amber-500/10">
                    <MapPin className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-sm text-muted-foreground">42 Avenue des Champs-Élysées</p>
                    <p className="text-sm text-muted-foreground">75008 Paris, France</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-amber-500/10 bg-zinc-900/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-amber-500/10">
                    <Clock className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horaires</h3>
                    <p className="text-sm text-muted-foreground">Lundi - Vendredi : 9h - 19h</p>
                    <p className="text-sm text-muted-foreground">Samedi : 10h - 17h</p>
                    <p className="text-sm text-muted-foreground">Dimanche : Fermé</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-2 border-amber-500/20 bg-zinc-900">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="inline-flex p-4 rounded-full bg-amber-500/10 mb-6">
                      <Send className="h-8 w-8 text-amber-500" />
                    </div>
                    <h2 className="font-serif text-3xl font-light mb-4">Message envoyé !</h2>
                    <p className="text-muted-foreground max-w-md mx-auto mb-8">
                      Merci pour votre demande. Un conseiller temporel vous recontactera dans les 24 heures.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: '', email: '', phone: '', destination: '', message: '' })
                      }}
                      variant="outline"
                      className="border-amber-500/50 hover:bg-amber-500/10"
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="font-serif text-2xl font-light mb-1">Envoyez-nous un message</h2>
                      <p className="text-sm text-muted-foreground">Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nom complet *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jean Dupont"
                          className="bg-zinc-800 border-amber-500/30 focus:border-amber-500 focus:ring-amber-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email *</label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jean@exemple.fr"
                          className="bg-zinc-800 border-amber-500/30 focus:border-amber-500 focus:ring-amber-500/20"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Téléphone</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+33 6 12 34 56 78"
                          className="bg-zinc-800 border-amber-500/30 focus:border-amber-500 focus:ring-amber-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Destination souhaitée</label>
                        <select
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="w-full h-10 rounded-md border border-amber-500/30 bg-zinc-800 px-3 text-sm focus:border-amber-500 focus:ring-amber-500/20 focus:outline-none"
                        >
                          <option value="">Sélectionnez une destination</option>
                          <option value="paris-1889">Paris 1889 - Belle Époque</option>
                          <option value="cretace">Crétacé Supérieur - Safari Préhistorique</option>
                          <option value="florence">Florence 1504 - Renaissance</option>
                          <option value="autre">Autre destination</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Votre message *</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Décrivez-nous votre projet de voyage temporel, vos dates souhaitées, le nombre de voyageurs..."
                        rows={5}
                        className="w-full rounded-md border border-amber-500/30 bg-zinc-800 px-3 py-2 text-sm focus:border-amber-500 focus:ring-amber-500/20 focus:outline-none resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:from-amber-400 hover:to-yellow-500"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      ENVOYER LE MESSAGE
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
