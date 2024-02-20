import React from 'react';
import { useNavigate } from 'react-router-dom';

function LaboralItem({image, name, id})
{

    const navigate = useNavigate();
    return (
      <div className="projectItemLaboral" onClick={() => {navigate('/bbxs/' + id)}}>
          <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
          <h1>{name}</h1>
      </div>
    )

}

export default LaboralItem;