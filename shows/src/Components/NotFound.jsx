import { Link } from "react-router-dom"

export default function NotFound() {
    return(
        <div>
            <h1>--------------This is page does not exist--------------</h1>
            <Link to='/'>ось посилання на головну сторінку</Link>
        </div>
    )
}