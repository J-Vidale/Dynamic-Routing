import React from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../lib/posts'

export const BlogIndex: React.FC = () => (
  <div style={{ padding: '1rem' }}>
    <h2>All Posts</h2>
    <ul>
      {posts.map(p => (
        <li key={p.id}>
          <Link to={`/blog/${p.slug}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)
