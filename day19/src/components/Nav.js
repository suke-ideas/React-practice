import {Link} from 'react-router-dom'

const Nav = () => (
    <ul id = 'nav'>
        <li>
            <Link to = '/' >Home</Link>
        </li>
        <li>
            <Link to = '/about' >About</Link>
        </li>
    </ul>
)

export default Nav