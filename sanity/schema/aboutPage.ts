import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'string',
      initialValue: 'About Page',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'founderLetter',
      title: 'Founder Letter',
      type: 'richText',
      description: 'The rich text for the letter from the founder.',
    }),
    defineField({
      name: 'whatMakesUsDifferent',
      title: 'What Makes Us Different Sections',
      type: 'array',
      of: [{ type: 'tierSection' }],
    }),
    defineField({
      name: 'engagementSnapshots',
      title: 'Engagement Snapshots Sections',
      type: 'array',
      of: [{ type: 'tierSection' }],
    }),
  ],
})
