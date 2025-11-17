'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-zinc-200 dark:ring-zinc-800">
          <Image
            src="/assets/images/A.jpg"
            alt="HEX - Hector Morales"
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Hector Morales
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Professional Drummer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
