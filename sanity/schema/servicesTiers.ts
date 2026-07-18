import { defineField, defineType } from 'sanity'

export const servicesTiers = defineType({
  name: 'servicesTiers',
  title: 'Services Tiers',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'string',
      description: 'Internal key (e.g. sprint, study, partner)',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'E.g. Signal Sprint',
    }),
    defineField({
      name: 'cadence',
      title: 'Cadence',
      type: 'string',
      description: 'E.g. 1–2 weeks',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'fit',
      title: 'Ideal Fit',
      type: 'text',
    }),
    defineField({
      name: 'shortFit',
      title: 'Short Fit',
      type: 'string',
      description: 'E.g. Immediate decisions · First engagements',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'divider_sections',
      title: 'Additional Sections',
      type: 'string',
      description: 'You can add dynamic sections below this service tier here.',
      readOnly: true,
      hidden: false,
    }),
    defineField({
      name: 'sections',
      title: 'Dynamic Sections',
      type: 'array',
      of: [{ type: 'tierSection' }],
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'headline',
    },
  },
})
