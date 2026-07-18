import { groq } from 'next-sanity'

export const aboutPageQuery = groq`*[_type == "aboutPage"][0] {
  ...,
  whatMakesUsDifferent[] {
    ...,
    items[] {
      ...
    }
  },
  engagementSnapshots[] {
    ...,
    items[] {
      ...
    }
  }
}`
export const servicesTiersQuery = groq`*[_type == "servicesTiers"] | order(order asc) {
  ...,
  sections[] {
    ...,
    items[] {
      ...
    }
  }
}`
