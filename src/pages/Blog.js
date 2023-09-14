import React from 'react';




import BlogItem from '../components/BlogItem.js';
import '../styles/Blog.css';
import { BlogList } from '../helpers/BlogList.js'

import CheemsClown from '../assets/images/doge-clown.png'

function Blog()
{
    return (
        <div className="blogs">
             <h1 className="blogTitle">Mi Blog Personal</h1> 
            {/* <h1 className="blogTitle">Proximamente</h1> */}
             <div className="blogList">
                {
                    BlogList.map((blog, idx) => {
                        return (
                            <BlogItem id={idx} name={blog.name} image={blog.image} />
                        );
                    })
                }
            </div> 

            {/* <img className='temporalImage' src={CheemsClown} alt="Cheems clown Xdd" /> */}
        </div>
    )
}

export default Blog;