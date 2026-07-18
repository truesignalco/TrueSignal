import { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Website Content')
    .items([
      S.listItem()
        .title('About Page')
        .id('aboutPageSingleton')
        .child(
          S.document().schemaType('aboutPage').documentId('aboutPage').title('About Page')
        ),
      S.listItem()
        .title('Services Page')
        .child(
          S.documentTypeList('servicesTiers').title('Service Tiers')
        ),
      // Optional: Add a divider and list out all types if they ever want to see them flat
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['aboutPage', 'servicesTiers'].includes(
            listItem.getId() as string
          )
      ),
    ])
