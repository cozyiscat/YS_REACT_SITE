import { Link } from "react-router-dom"
export function About2(){
    return(
        <>
            <h2>도움말</h2>
            <nav>
                <Link to="details">도움말 상세로 이동</Link>
            </nav>
        </>
    )
}
