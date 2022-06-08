import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return(
        <div>
            <p>this page does not exist. Go <Link to='/'>home</Link></p>
        </div>
    )
}

export  {NotFoundPage};