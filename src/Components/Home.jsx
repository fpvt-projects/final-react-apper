import '../App.css';
import PokeDex from './Resources/PokeDex.png'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from './UI/Card';

const Home = () => {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=649&offset=0")
        .then(res => {
            setPokemon(res.data.results.map(p => p.name))
            console.log(res.data.results.map(p => p.url))
        })
    }, [])
    

    return ( 
        <div className="homeContainer h-screen w-screen">

            <div className="pokeDexBar flex p-4 justify-center items-center shadow-md border border-b-slate-300 w-full">
                <img src={PokeDex} alt="PokeDex" className='pokeDexText'/>
            </div>

            <div className="pokeDexSection flex flex-wrap gap-4 justify-center w-full">

                {pokemon.map( (p,index) => (
                    <div className="cardWrapper bg-rose-800 h-full w-full rounded">
                        <div className="nameContainer uppercase text-slate-50 flex justify-center items-center font-mono font-semibold">{p}</div>
                        <div className="imgContainer flex justify-center items-center">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index+1}.gif`} alt="pokemon" srcset="" />
                        </div>
                        <div className="typeContainer"></div>
                    </div>

                ))}

            </div>
        </div>
     );
}
 
export default Home;