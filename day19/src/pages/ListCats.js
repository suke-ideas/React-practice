import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'

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
        
        // Tính sô lượng mèo, cân nặng trung bình, tuổi thọ trung bình
        totalCats = cats.length
        for (let cat of cats) {
            // Lấy dữ liệu vào biến string , tách dữ liệu và tính lấy trung bình gán vào average
            
            let metric = cat.weight.metric
            let vt  = metric.indexOf('-')
            let s1 = '' , s2 = ''
            for (let i = 0; i < metric.length; i++) {
                if (i === vt) {
                    i++
                }
                i < vt ? s1 += metric[i] : s2 += metric[i]
            }
            let average = (+s1 + +s2)/2
            weight_average += average

            // Tuổi thọ trung bình
            let span = cat.life_span
            vt = span.indexOf('-')
            s1 = ''
            s2 = ''
            for (let i = 0 ; i < span.length ; i++) {
                if (i===vt) {
                    i++
                }
                i < vt ? s1 += span[i] : s2 += span[i]
            }
            average = (+s1 + +s2)/2
            years_average += average
        }
        weight_average /= totalCats;
        years_average /= totalCats;
        // console.log(weight_average, years_average)
        
        weight_average = Math.round(weight_average*100) / 100;
        years_average = Math.round(years_average*100) / 100;

        return List
        
} else {
    console.log("error")
}
}

export default ListCats
export {totalCats, weight_average, years_average}