import { type SchemaTypeDefinition } from 'sanity'

import { aboutPage } from './aboutPage'
import { richText } from './richText'
import { servicesTiers } from './servicesTiers'
import { tierSectionItem } from './tierSectionItem'
import { tierSection } from './tierSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aboutPage, richText, servicesTiers, tierSectionItem, tierSection],
}
