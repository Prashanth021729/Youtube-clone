import { useEffect, useState } from "react";
import VideoCard from "./VideoCard"
import { Youtube_Api } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setvideos] = useState([]);
    useEffect(() => {
        getVideos();
    },[]);

    const getVideos = async ()=> {
        const data = await fetch(Youtube_Api);
        const result = await data.json()
        console.log(result)
        setvideos(result.items)
    }
    return(
        <div className="flex flex-wrap">
           
                {videos.map((video) =>(
                    <Link  to={"/watch?v="+ video.id}>
                        <VideoCard key={video.id} info={video}/>
                    </Link>
                ))}   
        </div>

    )
}
export default VideoContainer;