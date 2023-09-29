import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({img, name,id, info , glass, category}) => {
  return (
		<article className='cocktail'>
			<div className='img-container'>
				<img
					src={img}
					alt={name}
				/>
			</div>
			<div className='cocktail-footer'>
				<h3>{name}</h3>
				<h4>{glass}</h4>
				<p>{info}
        <br />
        {category}
        </p>
				<Link to={`/cocktail/ ${id}`} className='btn btn-details'>details</Link>
			</div>
		</article>
	);
}

export default Cocktail
