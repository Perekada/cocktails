import React, { useEffect } from 'react'
import { useGlobal } from '../context'

const SearchForm = () => {
  const {setKeyword} = useGlobal()
  const valueSearch = React.useRef('')

  useEffect(()=>{
    valueSearch.current.focus()
  })

  const searchCocktail = () => {
    setKeyword(valueSearch.current.value)
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="name">search for your favorite cocktail</label>
          <input type="text" id='name' ref={valueSearch} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
