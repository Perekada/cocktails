import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('a')
  const [cocktails, setCocktails] = useState([])


  const fetchDrinks = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${keyword}`)
      const data = await response.json();
      const {drinks} = data;
      if(drinks){
        const newDrinks =  drinks.map((item) => {
          const { idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass,strCategory} = item;
          return {id:idDrink, name:strDrink, img:strDrinkThumb, info:strAlcoholic, glass:strGlass, category:strCategory}
        })
        setCocktails(newDrinks)
        // console.log({drinks});
      }
      else{
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  },[keyword])
  useEffect(()=>{
    fetchDrinks()
  },[keyword, fetchDrinks])

  return <AppContext.Provider value={{
    loading,
    keyword,
    cocktails,
    setKeyword
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobal = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
