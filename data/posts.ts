import { url } from '@/data/url';
import type { Category } from './categories'

export interface Post {
  id: string,
  slug: string,
  category: Category,
  title: string,
  intro: string
}

export interface PostDetails {
  id: string,
  slug: string,
  category: Category,
  title: string,
  content: string
}

export const getPostsUrl = () => (
  `${url}/posts`
)

export const getPostDetailsUrl = (postSlug: string) => (
  `${url}/post-details/${postSlug}?_expand=category`
)

export const getPosts = async (): Promise<Post[]> => {
  const res = await fetch(getPostsUrl())
  return res.json()
}
