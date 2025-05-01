import React from "react";

import BlogItem from '../components/BlogItem.jsx';
import '../styles/Blog.css';
import { BlogList } from '../helpers/BlogList.jsx'


function Blog()
{
    return (
        <div className="blogs">
             <h1 className="blogTitle">Mi Blog Personal</h1> 
             <div className="blogList">
                {BlogList.map((blog, idx) => {
                    return (
                        <BlogItem id={idx} name={blog.name} image={blog.image} />
                    );
                })
            }
            </div> 
        </div>
    )
}

export default Blog;