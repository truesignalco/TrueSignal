import { defineType, defineArrayMember } from 'sanity'

export const richText = defineType({
  name: 'richText',
  title: 'Rich Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Large Serif (Navy)', value: 'large-serif' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { 
            title: 'Accent Color (Orange)', 
            value: 'accent',
            icon: () => 'A'
          },
          { 
            title: 'Medium Text', 
            value: 'medium',
            icon: () => 'M'
          }
        ]
      }
    })
  ]
})
