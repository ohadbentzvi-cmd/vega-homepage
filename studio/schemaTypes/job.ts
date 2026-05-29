import { defineField, defineType } from 'sanity'

export const job = defineType({
  name: 'job',
  title: 'משרה',
  type: 'document',
  fields: [
    defineField({
      name: 'jobNumber',
      title: 'מספר משרה',
      type: 'number',
      description: 'מספר ייחודי לזיהוי המשרה (לדוגמה: 1234567)',
      validation: Rule => Rule.integer().positive(),
    }),
    defineField({
      name: 'title',
      title: 'כותרת המשרה',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'מיקום',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'סוג משרה',
      type: 'string',
      options: {
        list: [
          { title: 'משרה מלאה', value: 'full-time' },
          { title: 'משרה חלקית', value: 'part-time' },
          { title: 'מיידי', value: 'immediate' },
          { title: 'זמני', value: 'temporary' },
        ],
      },
    }),
    defineField({
      name: 'salary',
      title: 'שכר (לתצוגה)',
      type: 'string',
      description: 'לדוגמה: ₪8,500–11,000',
    }),
    defineField({
      name: 'category',
      title: 'קטגוריה',
      type: 'string',
      options: {
        list: [
          { title: 'הנדסה', value: 'הנדסה' },
          { title: 'כלכלה', value: 'כלכלה' },
          { title: 'לוגיסטיקה', value: 'לוגיסטיקה' },
          { title: 'מנהל', value: 'מנהל' },
          { title: 'מכירות', value: 'מכירות' },
          { title: 'בנייה', value: 'בנייה' },
          { title: 'ניקיון ואחזקה', value: 'ניקיון ואחזקה' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'תיאור',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'isNew',
      title: 'תג "חדש"',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isUrgent',
      title: 'תג "דחוף"',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'applyUrl',
      title: 'קישור להגשת מועמדות',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'תאריך פרסום',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isActive',
      title: 'פעיל',
      type: 'boolean',
      initialValue: true,
      description: 'מסנן את המשרה מהאתר כשמסומן כלא פעיל',
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
    select: { title: 'title', subtitle: 'location', isActive: 'isActive' },
    prepare({ title, subtitle, isActive }) {
      return {
        title: `${isActive ? '' : '⏸ '}${title}`,
        subtitle,
      }
    },
  },
})
