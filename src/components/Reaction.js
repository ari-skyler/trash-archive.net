import styledComponents from "../styled-components"
import { useParams } from "react-router-dom"

export default function Reaction({ email, children }) {
    const emoticons = [':)', ':D', 'XD', ':(', ':/', ':|', ':O', '(T_T)', '(?_?)', '=^_^=', 'o.O', 'uwu']
    return (
        <styledComponents.ReactionForm>
            <p>{ children || 'respond to this content by sending an email to: ' }</p>
            <styledComponents.Link href={`mailto:${email || 'conversation'}@ari-irl.net`}></styledComponents.Link>
        </styledComponents.ReactionForm>
    )
}