import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {v4 as uuidv4} from 'uuid';

const Post = () => {
    const posts = useSelector((state) => state.posts);
    const [formData,setFormData]=useState({title:'',content:''});

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
  }
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
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<label htmlFor='title'>Title</label>
						<input type='text' className='form-control' id='title' name='title' value={formData.title} onChange={handleChange} />
					</div>
					<div className='form-group mt-3'>
						<label htmlFor='content'>Content</label>
						<textarea className='form-control' id='content' name='content' value={formData.content} onChange={handleChange} />
					</div>
				<button className='btn btn-primary mt-3' type='submit'>Add Post</button>
				</form>
			</div>
			<div className='col-md-6'>
				<h1>Posts</h1>
				<ul>
					{posts.map((post) => (
						<li key={post.id} className='alert alert-info'>
							{post.title}
							<p>{post.content}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	</section>
    
    
    
    </>
  )
}
export default Post