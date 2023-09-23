import styledComponents from "../styled-components"
export default function VerticalListItem({ title, date, link, linkText }){
    return (
        <styledComponents.VerticalListItem>
            <div>
                { date &&
                    (<styledComponents.Date>last updated: { date }</styledComponents.Date>)
                }
                <styledComponents.ListTitle>{ title }</styledComponents.ListTitle>
            </div>
            <styledComponents.Link to={ link }>{ linkText || 'view content' }</styledComponents.Link>
        </styledComponents.VerticalListItem>
    )
}