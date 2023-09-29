import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import png142 from '../png142.png'
import { useGlobal } from '../context'


const CocktailList = () => {
  const {loading, cocktails} = useGlobal()

  if (loading) {
    return <Loading/>
  }
  if(cocktails.length < 1) {
    return <div className='section-title'>
			<img
				src={png142}
				alt='sorry'
        style={{height:'100px', width:'100px'}}
			/>
			<h3>Cocktail not found</h3>
		</div>;
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) =>{
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
