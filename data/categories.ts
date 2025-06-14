import { url } from '@/data/url';
import type { Post } from './posts'

export interface Category {
  id: string,
  slug: string,
  name: string,
  count: number
}

export interface CategoryDetails {
  id: string,
  slug: string,
  name: string,
  posts: Post[]
}

export const getCategoriesUrl = () => (
  `${url}/categories`
)

export const getCategoryDetailsUrl = (categorySlug: string) => (
  `${url}/categories/${categorySlug}?_embed=posts`
)
