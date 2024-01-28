import { useState } from 'react'
import './Header.css'

function Header() {
    const [count, setCount] = useState(0)

return (

<div>
<h1 className='header'>To-D0-List</h1>
</div>
)
}

export default Header