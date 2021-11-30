import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

export const PostApi = () => {

    const [id, setId] = useState(1)
    const { data:pokemon } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id])

    const handleAnterior = () => {
        id > 1 && setId( id - 1)
    }
    const handleSiguiente = () => {
        setId( id + 1)
    }


    return (
        <div className="container my-5">
            <button className="btn btn-outline-primary mx-3" onClick={handleAnterior}>Anterior</button>
            <button className="btn btn-primary" onClick={handleSiguiente}>Siguiente</button>
            {pokemon && 
                <>
                   <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </>
            }
        </div>
    )
}