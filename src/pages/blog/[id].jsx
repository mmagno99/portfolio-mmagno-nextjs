import React from 'react';

// import { useParams } from 'react-router-dom';
import { useParams } from 'next/navigation'

import { BlogList } from '../helpers/BlogList.jsx';
import '../styles/BlogDisplay.css';
import BackToTop from '../components/BackToTop.jsx';
import { useTranslation } from 'react-i18next';

function BlogDisplay() {
    const { t } = useTranslation();

    const { id } = useParams();
    const blog = BlogList[id];
    
    return(

        // <div className="blog">
        //     <div className="contenedor-imagen">
        //         <img style={{ backgroundImage: `url(${blog.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='blogImages'/>
        //         <h1>{blog.name}</h1>
        //     </div>
           
        //    <div className="contenedor">
        //     <p className='paragraphBlog'>{blog.paragraph}</p>
        //    </div>
                       
        // </div>

        <div className="blog">
            <div className="blogImages contenedor-imagen" style={{ backgroundImage: `url(${blog.image})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                <h1 className="titulo-banner">{t(blog.name)}</h1>
            </div>

            <div className="contenedor">
                <p className="paragraphBlog">{blog.paragraph}</p>
            </div>

            <BackToTop/>
        </div>

    )
}

export default BlogDisplay;