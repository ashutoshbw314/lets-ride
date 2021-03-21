import React from "react";
import NavBar from '../shared-components/NavBar/NavBar'
import {Link} from 'react-router-dom';

function Blog() {
  return (
    <div>
      <NavBar />
      <h1 className='text-3xl text-center text-white'>Blog</h1>
      <img src='/img/blog-post-1.jpg' className='block m-3 mx-auto h-96'/>
      <p className='max-w-2xl p-5 mx-auto text-gray-900 bg-white bg-opacity-80'>
        Lorem unde accusamus perspiciatis corporis at At quaerat et debitis officiis esse Inventore qui aperiam cum magni nostrum. Recusandae iste maxime veniam ipsum earum Laboriosam repudiandae porro repellendus fugit accusamus... 
        <Link className='ml-5' to='/'>Read more</Link> 
      </p>
    </div>
  );
}

export default Blog;
