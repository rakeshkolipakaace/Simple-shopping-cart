import React from 'react'
import { useSelector } from 'react-redux'

const Post = () => {
    const posts = useSelector((state) => state.posts)
  return (
    <div className="container py-4">
      <h1 className="mb-3">Posts</h1>
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            <h5 className="m-0">{post.title}</h5>
            <p className="m-0 text-muted">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Post