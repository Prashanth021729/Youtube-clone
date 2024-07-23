const VideoCard = ({info}) => {
    console.log(info)
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
    const {viewCount} = statistics;
    return(
        <div className="shadow-sm m-6 w-96 ">
            <img className="rounded-lg" alt="videocard" src={thumbnails.medium.url}/>
            <ul>
                <li>{title}</li>
                <li>{channelTitle}</li>
                <li>{viewCount} Views</li>
            </ul>
        </div>
    )
}
export default VideoCard;