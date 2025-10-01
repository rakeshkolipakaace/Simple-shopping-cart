import React from 'react'
import { useSelector } from 'react-redux'

const Post = () => {
    const posts = useSelector((state) => state.posts)
  return (
    // <div className="container py-4">
    //   <h1 className="mb-3">Posts</h1>
    //   <ul className="list-group">
    //     {posts.map((post) => (
    //       <li className="list-group-item" key={post.id}>
    //         <h5 className="m-0">{post.title}</h5>
    //         <p className="m-0 text-muted">{post.content}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <>
   
    <section className='container py-5'>
      <div className='row'>
        <div className='col-md-6'>
          <h1>Add Post</h1>
          <form>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input type='text' className='form-control' id='title' />
            </div>
          </form>
          <div className='form-group'>
            <label htmlFor='content'>Content</label>
            <textarea className='form-control' id='content' />
          </div>
          <button className='btn btn-primary'>Add Post</button>

        </div>
      </div>
      <div className='col-md-6'>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}
            <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
    
    
    
    </>
  )
}
export default Post