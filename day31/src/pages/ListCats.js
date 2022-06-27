import React, {useState, useEffect} from 'react'

let totalCats = 0;
let weight_average = 0;
let years_average = 0;
let List = []


const ListCats = () => {
    const [cats, setCats ] = useState([])
    
    useEffect( () => {
        const url = 'https://api.thecatapi.com/v1/breeds'
        const fetchCats = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setCats(data)
                console.log(data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchCats()
    }
    , [])

    if (cats.length >= 1) {
        List = cats.map((cat, id) => {
            const {
                name, 
                origin, 
                temperament, 
                life_span, 
                weight,
                description,
                image
            } = cat
            if (image === undefined) {
                console.log(id)
            }
            else {
                return (
                    <li key = {id} className = 'cat-item'>
                    <img src = {image.url} alt = {name} />
                    <div className='cat-card'>
                    <h2>{name} </h2>
                    <h2>{origin} </h2>
                    <h3>Temperament: {temperament}</h3>
                    <h3>Life span: {life_span}</h3>
                    <h3>Weight: {weight.metric}</h3>
                    <br/>
                    <h3>Description: </h3>
                    <p>{description} </p>
                    </div>
                    </li>
                )
            }
        }
        )   
        return List
}
}

export default ListCats