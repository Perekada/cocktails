import React ,{useState, useEffect}from 'react'
import {ImShuffle} from 'react-icons/im'
import {Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const Randomizer = () => {
	const [id, setId] = useState('');

    useEffect(()=>{
const getId = async() =>{
      const response = await fetch(`${url}`)
      const data = await response.json();
      const {drinks} = data;
      const newId = drinks.map((item)=>{
        const {idDrink} = item
        return idDrink
      })		
      setId(newId)}
      getId()
    },[])
    // console.log(id[0]);
  return (
        <Link className='btn btn-details shuffle' to={`/cocktail/${id[0]}`}>
            <ImShuffle style={{width:'100%', height:'100%'}}/>
        </Link>
	);
}

export default Randomizer
