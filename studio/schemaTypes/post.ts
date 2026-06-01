import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'פוסט בבלוג',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'כותרת',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'כתובת URL (Slug)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'תמונת כותרת',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      title: 'תקציר',
      type: 'text',
      rows: 3,
      description: 'משפט קצר שמוצג בכרטיס הפוסט ברשימת הבלוג',
    }),
    defineField({
      name: 'body',
      title: 'תוכן',
      type: 'text',
      rows: 20,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'כותב',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'תאריך פרסום',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'תאריך פרסום (חדש ראשון)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'coverImage' },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString('he-IL') : '',
        media,
      }
    },
  },
})
