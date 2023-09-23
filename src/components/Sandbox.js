import ReactMarkdown from 'react-markdown'
import styledComponents from '../styled-components'
import React, { useState } from 'react'
import plugins from "../remark/plugins"
import components from "../remark/components"

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <>
                <h1>There was an error parsing your markdown, check your syntax</h1>
                <button onClick={() => this.setState({ hasError: false })}>ok</button>
            </>
        )
      }
  
      return this.props.children; 
    }
  }

export default function Sandbox() {
    const [content, setContent] = useState('')
    const [renderedContent, setRenderedContent] = useState('')

    return (
        <ErrorBoundary>
            <styledComponents.Page>
                <textarea onChange={(event) => setContent(event.target.value)} style={{width: "100%", height: "50vh"}}></textarea>
                <button onClick={() => setRenderedContent(content)}>Render</button>
                <br />
                <ReactMarkdown components={components} remarkPlugins={plugins}>{ renderedContent }</ReactMarkdown>
            </styledComponents.Page>
        </ErrorBoundary>
    )
}