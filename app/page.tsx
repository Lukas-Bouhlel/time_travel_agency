import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { DestinationCards } from '@/components/destination-cards'
import { ChatWidget } from '@/components/chat-widget'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <AboutSection />
      <DestinationCards />
      <ChatWidget />
    </main>
  )
}
