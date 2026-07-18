import { defineField, defineType } from 'sanity'

export const tierSectionItem = defineType({
  name: 'tierSectionItem',
  title: 'Section Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title / Headline',
      type: 'string',
      description: 'The main text or headline of this item.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Optional italicized text underneath the title.',
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'text',
      description: 'Optional expanded body paragraph.',
    }),
    defineField({
      name: 'tag',
      title: 'Tag (Optional)',
      type: 'string',
      description: 'Used at the top of cards (e.g. "F&B EMERGING")',
    }),
    defineField({
      name: 'meta',
      title: 'Meta / Tag / Cadence (Optional)',
      type: 'string',
      description: 'Optional short detail e.g. "Weekly" or "24-48 hours".',
    }),
  ],
})
