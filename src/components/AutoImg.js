export default function AutoImg({children}) {
    const src = children[0]
    return (
        <>
            <img src={`${process.env.REACT_APP_CONTENT_URL}/_media/pics/${src}`} />
            <span className="caption">{ src.split('/').pop().split('.')[0] }</span>
        </>
    )
}