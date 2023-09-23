import styled from "styled-components"
import { Link as ReactLink } from "react-router-dom"

const primaryColor = '#FF64CE'
const secondaryColor = '#E38BF7'
const bodyColor = '#83FFA0'

const Page = styled.div`
max-width: 800px;
margin:auto;
padding: 20px;
`

const PageTitle = styled.h1`
text-align: center;
color: ${primaryColor};
margin-top: 0px;
margin-bottom: 10px;
`

const PageTagline = styled.div`
color: ${bodyColor};
text-align: center;
border-bottom: ${secondaryColor} dashed 1px;
padding-bottom: 10px;
margin-bottom: 15px;
margin-left: auto;
margin-right: auto;
width: 90%;
`

const SubTitle = styled.div`
color: ${secondaryColor};
border-bottom: 2px solid ${secondaryColor};
padding-bottom: 10px;
margin-bottom: 15px;
font-size: 1.8em;
font-style: italic;
`

const SectionTitle = styled.div`
color: ${secondaryColor};
font-size: 1.3em;
margin-bottom: 10px;
text-align: center;
`

const ListTitle = styled.div`
font-size: 1.3em;
color: ${bodyColor};
`

const Quote = styled.p`
color: ${bodyColor};
border-left: 1px solid ${bodyColor};
padding-left: 10px;
`

const Link = styled(ReactLink)`
text-decoration: none;
color: ${primaryColor};
`

const Anchor = styled.a`
text-decoration: none;
color: ${primaryColor};
`

const HorizontalMenu = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 10px;
border-bottom: 1px dashed ${primaryColor};
`

const HorizontalMenuLink = styled(Link)`
padding-bottom: 2px;
border-bottom: 1px solid ${primaryColor};
border-top: 1px solid ${primaryColor};
`

const VerticalList = styled.div`
margin-bottom: 20px;
`

const VerticalListItem = styled.div`
display: flex;
margin-bottom:10px;
justify-content: space-between;
align-items: flex-end;
border-bottom: ${secondaryColor} 1px dashed;
& a {
    text-align: right;
    min-width: fit-content;
}
`

const Date = styled.span`
color: ${bodyColor};
font-size: .5em;
`

const Content = styled.p`
color: ${bodyColor};
`

const ListItem = styled.li`
color: ${bodyColor};
`

const BreadCrumbs = styled.div`
color: ${bodyColor};
border-top: 1px ${primaryColor} solid;
border-bottom: 1px ${primaryColor} solid;
margin-bottom: 20px;
`

export default {
    Page,
    PageTagline,
    PageTitle,
    SubTitle,
    SectionTitle,
    ListTitle,
    Quote,
    Link,
    HorizontalMenu,
    HorizontalMenuLink,
    VerticalList,
    VerticalListItem,
    Date,
    Content,
    ListItem,
    BreadCrumbs,
    Anchor
}