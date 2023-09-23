export default function({ children }){
    return (
        <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameborder="no"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${children}&color=%2300593d&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
        ></iframe>)
  }