import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'next/navigation';

function ProjectItem({image, name, id}) 
{
  const navigate = useNavigate();
  return (
    <div className="projectItem" onClick={() => {navigate('/personal-project/' + id)}}>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem