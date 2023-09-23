import styledCOmponents from "../styled-components"
import { useParams } from "react-router-dom"

export default function QuickLink({ children }){
    const splat = useParams()["*"]
    let ref = children[0]
    ref = ref[0] === "~" ? `${splat.split('/').filter(crumb => crumb !== ref.slice(1)).join('/')}/${ref.slice(1)}` : ref
    ref = ref[0] === '/' ? ref : '/' + ref
    return (
        <styledCOmponents.Link to={`https://ari-irl.net${ref}`}>{ ref.split('/').pop().split('.')[0] }</styledCOmponents.Link>
    )
}