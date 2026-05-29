import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'unconfigured',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: import.meta.env.PROD,
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: SanityImageSource) => builder.image(source)

// ── Queries ───────────────────────────────────────────────────────────────────

export const JOBS_QUERY = `
  *[_type == "job" && isActive == true] | order(publishedAt desc) {
    _id,
    jobNumber,
    title,
    location,
    type,
    category,
    salary,
    description,
    isNew,
    isUrgent,
    applyUrl,
    publishedAt
  }
`

export const PARTNERS_QUERY = `
  *[_type == "partner"] | order(order asc) {
    _id,
    name,
    logo,
    website
  }
`

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    name,
    role,
    company,
    avatar,
    rating
  }
`
