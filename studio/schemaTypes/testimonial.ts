import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'המלצה',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'ציטוט',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'שם',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'תפקיד',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'חברה',
      type: 'string',
    }),
    defineField({
      name: 'avatar',
      title: 'תמונה (אופציונלי)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'rating',
      title: 'דירוג (1–5)',
      type: 'number',
      initialValue: 5,
      validation: Rule => Rule.min(1).max(5).integer(),
    }),
    defineField({
      name: 'order',
      title: 'סדר תצוגה',
      type: 'number',
      initialValue: 99,
    }),
  ],
  orderings: [
    {
      title: 'סדר תצוגה',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'company', media: 'avatar' },
  },
})
