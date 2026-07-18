import { defineField, defineType } from 'sanity'

export const tierSection = defineType({
  name: 'tierSection',
  title: 'Tier Section',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'The small overline text (e.g. "For Example" or "The Working Rhythm").',
    }),
    defineField({
      name: 'headline',
      title: 'Headline (Optional)',
      type: 'richText',
    }),
    defineField({
      name: 'description',
      title: 'Description (Optional)',
      type: 'text',
      description: 'Optional sub-text that appears below the headline.',
    }),
    defineField({
      name: 'style',
      title: 'Formatting Style',
      type: 'string',
      options: {
        list: [
          { title: 'Style A (White Grid)', value: 'style-a' },
          { title: 'Style B (White List)', value: 'style-b' },
          { title: 'Style C (Navy Grid)', value: 'style-c' },
          { title: 'Style D (White Minimal)', value: 'style-d' },
          { title: 'Style E (Navy Minimal)', value: 'style-e' },
          { title: 'Style F (Navy List)', value: 'style-f' },
          { title: 'Style G (About: Different Grid)', value: 'style-g' },
          { title: 'Style H (About: Snapshots Cards)', value: 'style-h' },
        ],
        layout: 'radio',
      },
      initialValue: 'style-a',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'tierSectionItem' }],
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'style',
    },
  },
})
