import styledComponents from "../styled-components"
import VerticalListItem from "../components/VerticalListItem"
import QuickLink from "../components/QuickLink"
import YoutubeEmbed from "../components/YoutubeEmbed"
import SoundCloudEmbed from "../components/SoundCloudEmbed"
import AutoImg from "../components/AutoImg"
import SlideShow from "../components/SlideShow"
const option = () => null

export default {
    a: styledComponents.Anchor,
    h1: styledComponents.PageTitle,
    h2: styledComponents.SubTitle,
    h3: styledComponents.SectionTitle,
    Quote: styledComponents.Quote,
    Tagline: styledComponents.PageTagline,
    VerticalList: styledComponents.VerticalList,
    VerticalListItem: VerticalListItem,
    Option: option,
    Options: option,
    p: styledComponents.Content,
    li: styledComponents.ListItem,
    ql: QuickLink,
    yt: YoutubeEmbed,
    sc: SoundCloudEmbed,
    pic: AutoImg,
    slideshow: SlideShow
}