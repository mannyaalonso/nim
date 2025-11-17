'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Magnetic } from '@/components/ui/magnetic'
import {
  GALLERY_IMAGES,
  COLLABORATIONS,
  EMAIL,
  SOCIAL_LINKS,
  BIO,
  BIO_INTRO,
  BIO_PARAGRAPHS,
  ARTIST_LINKS,
} from './data'
import Image from 'next/image'
import { useState } from 'react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type GalleryImageProps = {
  src: string
  alt: string
}

function GalleryImage({ src, alt }: GalleryImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-xl"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-6 right-6 rounded-full bg-white p-2 transition-colors hover:bg-zinc-100"
          >
            <XIcon className="h-5 w-5 text-zinc-500" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-full rounded-xl object-contain"
            loading="eager"
          />
        </div>
      )}
    </>
  )
}

function renderBioParagraph(text: string) {
  const parts = text.split(/(\{[^}]+\})/)

  return parts.map((part, index) => {
    const match = part.match(/\{([^}]+)\}/)
    if (match) {
      const artistName = match[1]
      const instagramUrl = ARTIST_LINKS[artistName]
      if (instagramUrl) {
        return (
          <a
            key={index}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-400 underline-offset-2 transition-colors hover:decoration-zinc-600 dark:decoration-zinc-500 dark:hover:decoration-zinc-300"
          >
            {artistName}
          </a>
        )
      }
      return artistName
    }
    return part
  })
}

function BioSection() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="flex-1 space-y-4">
      <p className="text-zinc-600 dark:text-zinc-400">{BIO_INTRO}</p>
      <p className="text-zinc-600 dark:text-zinc-400">
        {renderBioParagraph(BIO_PARAGRAPHS[0])}
      </p>

      {showMore && (
        <>
          {BIO_PARAGRAPHS.slice(1).map((paragraph, idx) => (
            <p key={idx + 1} className="text-zinc-600 dark:text-zinc-400">
              {renderBioParagraph(paragraph)}
            </p>
          ))}
        </>
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        className="text-sm font-medium text-zinc-900 underline decoration-zinc-400 underline-offset-2 transition-colors hover:decoration-zinc-600 dark:text-zinc-100 dark:decoration-zinc-500 dark:hover:decoration-zinc-300"
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <BioSection />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium text-zinc-900 dark:text-zinc-50">Setup</h4>
            <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
              <li>{BIO.gear.drums} ({BIO.gear.sizes})</li>
              <li>{BIO.gear.snare}</li>
              <li>{BIO.gear.hardware}</li>
              {BIO.gear.cymbals.map((cymbal, idx) => (
                <li key={idx}>{cymbal}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Gallery</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY_IMAGES.map((image) => (
            <div key={image.id} className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <GalleryImage src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Collaborations</h3>
        <div className="flex flex-wrap gap-2">
          {COLLABORATIONS.map((collab) => (
            <a
              key={collab.id}
              href={collab.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-900 transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
              {collab.artist}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <div className="flex items-center justify-start space-x-3">
          <MagneticSocialLink link={`mailto:${EMAIL}`}>
            Email
          </MagneticSocialLink>
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
