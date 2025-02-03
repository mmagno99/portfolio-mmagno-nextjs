import React from 'react';
import { useNavigate } from 'react-router-dom';

function BlogItem({image, name, id})
{
    const navigate = useNavigate();
    return (
        <div className="blogItem" onClick={() => {navigate(`/blog/${id}`)}}>

            <div style={{backgroundImage: `url(${image})`}} className='bgImageBlog' />
            <h1>{name}</h1>

        </div>
    )
}

export default BlogItem;