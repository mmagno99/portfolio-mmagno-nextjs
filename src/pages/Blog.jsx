import React from "react";

import BlogItem from '../components/BlogItem.jsx';
import '../styles/Blog.css';
import { BlogList } from '../helpers/BlogList.jsx'
import { useTranslation } from 'react-i18next';

function Blog() {
    const { t } = useTranslation();
    return (
        <div className="blogs">
             <h1 className="blogTitle">{t("blog.title")}</h1> 
             <div className="blogList">
                {BlogList.map((blog, idx) => {
                    return (
                        <BlogItem id={idx} name={t(blog.name)} image={blog.image} />
                        

                        // <BlogItem id={idx} name={blog.name} image={blog.image} />
                    );
                })
            }
            </div> 
        </div>
    )
}

export default Blog;