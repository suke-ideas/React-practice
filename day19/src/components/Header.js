import Nav from './Nav'
import { totalCats, weight_average, years_average } from '../pages/ListCats'

console.log(totalCats, weight_average, years_average)
const Header = () => (
    <div id = 'header'>
    <h1>30 DAYS OF REACT</h1>
    <Nav/>
    <h2>Cats Paradise</h2>
    <h3>There are {totalCats} cat breeds</h3>
    <h4>On average a cat can weight about {weight_average} kg and lives {years_average} years</h4>
    </div>
)
export default Header