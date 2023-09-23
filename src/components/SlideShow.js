import { useState, useEffect } from "react"
import SC from '../styled-components'

export default function SlideShow({ children }) {
    const folder = children[0]
    const [index, setIndex] = useState([])
    const [selectedPicIndex, setSelectedPicIndex] = useState(0)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_CONTENT_URL}/_media/pics/${folder}/index.json`)
        .then(data => data.json())
        .then(json =>{ 
            setIndex(json.filter(f => ['jpg', 'JPG', 'jpeg', 'JPEG'].includes(f.name.split('.')[1])))
        })
    }, [])

    const handleNext = e => {
        e.preventDefault()
        if (selectedPicIndex < index.length) {
            setSelectedPicIndex(selectedPicIndex + 1)
        }
    }

    const handlePrev = e => {
        e.preventDefault()
        if (selectedPicIndex > 0) {
            setSelectedPicIndex(selectedPicIndex - 1)
        }
    }

    return (
        <>
            <SC.Anchor href="#" onClick={handlePrev}>⬅️ prev</SC.Anchor>
            &nbsp; | &nbsp;
            <SC.Anchor href="#" onClick={handleNext}>next ➡️</SC.Anchor>
            <img src={`${process.env.REACT_APP_CONTENT_URL}/_media/pics/${folder}/${index[selectedPicIndex]?.name}`} />
            <span className="caption">{ index[selectedPicIndex]?.name.split('.')[0] }</span>
        </>
    )
}