import styledComponents from "../styled-components"

export default function BreadCrumbs({splat}) {
    const crumbs = splat.split('/')
    return (
        <styledComponents.BreadCrumbs>
            <styledComponents.Link to="/">home</styledComponents.Link>
            {
                crumbs.map((crumb, index) => {
                if (crumb) return (
                    <span key={crumb}> -&gt; <styledComponents.Link to={`/${crumbs.slice(0, index + 1).join('/')}`}>{crumb}</styledComponents.Link></span>
                )
            })
            }
        </styledComponents.BreadCrumbs>
    )
}