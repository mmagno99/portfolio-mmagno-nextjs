import React from 'react';

import { useParams } from 'react-router-dom';
import { BlogList } from '../helpers/BlogList';
import '../styles/BlogDisplay.css';

function BlogDisplay()
{

    const { id } = useParams();
    const blog = BlogList[id];
    
    return(

        <div className="blog">
            <h1>{blog.name}</h1>
           
           <div className="contenedor">
            <p className='paragraphBlog'>{blog.paragraph}</p>
           </div>
           

            <img src={blog.image} alt="" />
        </div>

    )
}

export default BlogDisplay;