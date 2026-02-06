'use client'

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="font-serif text-2xl font-light tracking-wider text-foreground">
              Time Travel Agency
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="hidden md:inline-flex border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              NOUS CONTACTER
            </Button>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
