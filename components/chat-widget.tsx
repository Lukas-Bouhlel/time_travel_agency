'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MessageCircle, X, Send } from 'lucide-react'

// Intelligence du chatbot
const getResponse = (userMessage: string): string => {
  const msg = userMessage.toLowerCase()

  // Questions sur les prix
  if (msg.includes('prix') || msg.includes('coût') || msg.includes('tarif') || msg.includes('combien') || msg.includes('price')) {
    return `Nos tarifs varient selon l'époque et la durée :\n\n🎨 Renaissance Florentine (1504) : 45 000€ / semaine\n🗼 Belle Époque Parisienne (1889) : 38 000€ / semaine\n🦕 Crétacé Supérieur (-65M années) : 85 000€ / semaine\n\nDestinations premium (sur demande) :\n👑 Égypte Ancienne : 62 000€ / semaine\n🏛️ Rome Antique : 58 000€ / semaine\n⚜️ Révolution Française : 52 000€ / semaine\n\nTous nos forfaits incluent : hébergement d'époque, garde-robe historique, traducteur temporel, et assurance chrono-sécurité.`
  }

  // Questions sur les destinations
  if (msg.includes('destination') || msg.includes('époque') || msg.includes('où') || msg.includes('when') || msg.includes('quand')) {
    return `Nos destinations phares :\n\n🎨 Renaissance Florentine (1504) - Assistez au dévoilement du David de Michel-Ange\n🗼 Belle Époque Paris (1889) - Admirez l'inauguration de la Tour Eiffel à l'Exposition Universelle\n🦕 Crétacé Supérieur (-65M années) - Safari préhistorique avec les derniers dinosaures\n\nDestinations premium disponibles :\n👑 Égypte Ancienne, 🏛️ Rome Antique, ⚜️ Révolution Française, et +40 autres époques\n\nChaque voyage est limité à 12 voyageurs pour préserver l'intégrité temporelle.`
  }

  // Conseils pour choisir
  if (msg.includes('conseil') || msg.includes('choisir') || msg.includes('recommand') || msg.includes('help') || msg.includes('aide')) {
    return `Pour choisir votre époque idéale :\n\n✨ Amateurs d'art : Renaissance Florentine ou Belle Époque\n🦕 Aventuriers/Scientifiques : Crétacé Supérieur (expérience unique !)\n🎭 Première fois : Belle Époque (époque sûre et fascinante)\n⚔️ Passionnés d'histoire : Rome Antique ou Révolution Française\n🌟 Luxe & mystère : Égypte Ancienne\n\nConsidérez aussi :\n• Votre tolérance aux changements climatiques\n• Les langues que vous parlez (traducteur fourni)\n• Votre condition physique\n• Le niveau d'aventure souhaité`
  }

  // Questions sur la sécurité
  if (msg.includes('sécur') || msg.includes('danger') || msg.includes('risque') || msg.includes('safe')) {
    return `La sécurité est notre priorité absolue :\n\n🛡️ Bracelet de sécurité temporelle (retour instantané en cas d'urgence)\n👔 Guides certifiés chrono-historiens\n📡 Surveillance continue depuis notre base 2025\n💊 Vaccinations temporelles incluses\n🔒 Assurance tous risques chrono-sécurité\n\nNotre taux de sécurité : 99.97% sur 15 ans d'opération.`
  }

  // Questions sur les documents/préparation
  if (msg.includes('document') || msg.includes('prépara') || msg.includes('besoin') || msg.includes('faut') || msg.includes('what do i need')) {
    return `Pour préparer votre voyage :\n\n📋 Documents requis :\n• Passeport temporel (nous vous l'obtenons)\n• Certificat médical (<3 mois)\n• Attestation d'assurance voyage\n\n🎒 Préparation :\n• Formation obligatoire de 2 jours\n• Cours d'histoire de l'époque visitée\n• Essayage de la garde-robe d'époque\n• Briefing protocole temporel\n\nTout est organisé depuis notre centre à Paris.`
  }

  // Questions sur la durée
  if (msg.includes('durée') || msg.includes('combien de temps') || msg.includes('long') || msg.includes('how long')) {
    return `Nos forfaits temporels :\n\n⏱️ Week-end découverte : 3 jours (à partir de 18 000€)\n📅 Séjour classique : 7 jours (meilleur rapport qualité/prix)\n🎭 Immersion approfondie : 14 jours (réduction de 15%)\n👑 Expérience exclusive : Sur mesure (nous consulter)\n\nNote : Le temps réel écoulé est toujours de 30% inférieur grâce à la compression temporelle.`
  }

  // Questions générales ou FAQ
  if (msg.includes('comment') || msg.includes('faq') || msg.includes('fonction') || msg.includes('how does it work')) {
    return `Questions fréquentes :\n\n❓ Puis-je changer l'histoire ? Non, protocole de non-intervention strict.\n❓ Et si je tombe malade ? Rapatriement immédiat + soins couverts.\n❓ Puis-je prendre des photos ? Oui, avec appareil d'époque fourni.\n❓ Parle-t-on ma langue ? Traducteur neural temporel inclus.\n❓ Âge minimum ? 18 ans (16 avec autorisation parentale).\n❓ Animaux acceptés ? Non, sauf chiens guides.\n\nD'autres questions ?`
  }

  // Réponse par défaut
  return `Je suis là pour vous aider ! Je peux répondre à vos questions sur :\n\n💰 Les tarifs et forfaits\n🌍 Nos destinations temporelles\n💡 Conseils pour choisir votre époque\n🛡️ Sécurité et préparation\n📋 Documents nécessaires\n⏰ Durées de séjour\n\nQue souhaitez-vous savoir ?`
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Bienvenue chez Time Travel Agency ! 🕰️ Posez-moi vos questions sur les voyages temporels, nos destinations, ou nos tarifs. Comment puis-je vous aider ?',
    },
  ])

  const handleSend = () => {
    if (!message.trim()) return

    const userMsg = message.trim()
    setMessages([...messages, { role: 'user', content: userMsg }])
    setMessage('')

    // Simulate response avec réponse intelligente
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: getResponse(userMsg),
        },
      ])
    }, 800)
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-black shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110 border-2 border-amber-300"
      >
        {isOpen ? (
          <X className="h-7 w-7" />
        ) : (
          <MessageCircle className="h-7 w-7" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-[420px] h-[600px] flex flex-col shadow-2xl border-2 border-amber-500/30 bg-zinc-900 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-black p-5 border-b border-amber-400/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-semibold tracking-wide">TTA Concierge</h3>
                <p className="text-xs font-medium opacity-80">Disponible à travers le temps</p>
              </div>
              <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-3.5 ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-amber-500 to-yellow-600 text-black font-medium'
                      : 'bg-zinc-800 text-zinc-100 border border-amber-500/20'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-amber-500/20 bg-zinc-900">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez-moi vos questions sur les voyages temporels..."
                className="flex-1 bg-zinc-800 border-amber-500/30 text-zinc-100 placeholder:text-zinc-400 focus:border-amber-500 focus:ring-amber-500/20"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-gradient-to-br from-amber-500 to-yellow-600 text-black hover:from-amber-400 hover:to-yellow-500 shadow-lg hover:shadow-amber-500/50 transition-all duration-200"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
