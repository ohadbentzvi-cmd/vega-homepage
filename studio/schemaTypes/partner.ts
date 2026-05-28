import { defineField, defineType } from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'לוגו לקוח',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'שם החברה',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'לוגו',
      type: 'image',
      options: { hotspot: false },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'אתר (אופציונלי)',
      type: 'url',
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
    select: { title: 'name', media: 'logo' },
  },
})
