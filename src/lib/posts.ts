export interface Post {
  id: number
  slug: string
  title: string
  content: string
}

export const posts: Post[] = [
  {
    id: 1,
    slug: 'my-first-post',
    title: 'My First Post',
    content: 'Welcome to my blog! This is the very first post.',
  },
  {
    id: 2,
    slug: 'react-router-dynamic-routing',
    title: 'React Router: Dynamic Routing',
    content:
      'In this post we explore how to implement dynamic routes in React Router...',
  },
  {
    id: 3,
    slug: 'protecting-routes',
    title: 'Protecting Routes with Context',
    content:
      'Learn how to build a basic auth system and protect client‑side routes using context.',
  },
]
