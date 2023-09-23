import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'
import styledComponents from "./styled-components"
import VerticalListItem from "./components/VerticalListItem"
import BreadCrumbs from "./components/BreadCrumbs"
import plugins from "./remark/plugins"
import components from "./remark/components"

const getOptions = (md) => {
    const ops = {}
    const opsStrs = md.replace(/\s/g, "")
                .split('::Options[start]')[1]
                .split('::Options[end]')[0]
                .split(/[\[\]]/)
                .filter(o => o !== '::Option' && !!o)
    opsStrs.forEach(o => {
        const [k,v] = o.split(':')
        ops[k] = v
    })
    return ops
}

export default function Show(props) {
    const splat = useParams()["*"]
    const [content, setContent] = useState(null)
    const [indexList, setIndexList] = useState(null)
    const [indexContent, setIndexContent] = useState(null)
    const [notFound, setNotFound] = useState(false)
    const [options, setOptions] = useState({})
    const [siteMap, setSiteMap] = useState({})

    useEffect(() => {
        fetch(`${process.env.REACT_APP_CONTENT_URL}/sitemap.json`)
        .then(data => data.json())
        .then(siteMapData => {
            setSiteMap(siteMapData)
        })
    }, [])

    useEffect(() => {
        setContent(null)
        window.scrollTo(0, 0)
        // TODO: move path to content to env var
        const pathToContent = `${process.env.REACT_APP_CONTENT_URL}${splat ? '/' : ''}${splat}`
        // if path is markdown we fetch and render it, otherwise we treat it like an index, need to support other file formats
        if (splat.split('.').pop() === 'md') {
            fetch(pathToContent)
            .then(data => data.text())
            .then(md => setContent(md))
            .catch(() => setNotFound(true))
        } else {
            // if we assume index we assume json; this is too much based on nginx servers, might be good to either support multiple index styles. 
            // I think a manual or automatic standardized index format could also work, like you have to run an indexing script, but perhaps the publishing app...
            // is on your local machine and has ftp access to your feed and when you go to publish in a folder it automatically handles index regeneration
            fetch(`${pathToContent}/index.json`)
            .then(data => data.json())
            .then(indexes => {
                indexes = indexes.map(index => ({ date: new Date(index.mtime * 1000), ...index }))
                const indexContentReference = indexes.find((index) => index.name === "index.md")
                indexes = indexes.sort((a, b) => b.date - a.date)
                if (indexContentReference) {
                    indexes = indexes.filter(index => index !== indexContentReference)
                    fetch(`${pathToContent}/index.md`)
                    .then(data => data.text())
                    .then(md => {
                        setIndexContent(md)
                        setOptions(getOptions(md))
                    })
                    .catch(() => setNotFound(true))
                }
                setIndexList(indexes)
            })
            .catch(() => setNotFound(true))
        }
    }, [splat])

    if (content) {
        return (
            <styledComponents.Page>
                <BreadCrumbs splat={splat} />
                <ReactMarkdown components={components} remarkPlugins={plugins}>{ content }</ReactMarkdown>
            </styledComponents.Page>
        )
    } else if (indexList) {
        return (
            <styledComponents.Page>
                <BreadCrumbs splat={splat} />
                <ReactMarkdown components={components} remarkPlugins={plugins}>{ indexContent }</ReactMarkdown>
                <styledComponents.SubTitle>{ splat.split('/').pop() + ' contents' || 'contents of my mind' }</styledComponents.SubTitle>
                <styledComponents.VerticalList>
                    { 
                        indexList.filter(item => item.name.split('.')[1] !== 'json' && item.name[0] !== '_')
                        .map(item => {
                            let icon
                            if (item.name.split('.').length === 1) {
                                icon = "📁"
                            } else {
                                icon = "📝"
                            }
                            return (
                                <VerticalListItem
                                    key={item.name}
                                    title={`${icon}  ${item.name}`}
                                    date={item.date.toDateString()}
                                    link={`${splat ? `/${splat}/` : '/'}${item.name}` }
                                />
                            )
                        })
                    }
                </styledComponents.VerticalList>
            </styledComponents.Page>
        )
    } else if (notFound) {
        return (
            <div>404 :(</div>
        )
    }

}