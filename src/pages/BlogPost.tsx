import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../lib/posts'

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return <p style={{ padding: '1rem' }}>Post not found.</p>
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  )
}
