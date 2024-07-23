import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    if (!isMenuOpen) return null;
    return(
        <div className="p-5 shadow-lg w-48">
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link>Shorts</Link></li>
                <li><Link>Subscription</Link></li>
            </ul>
            <h1 className="font-bold pt-5">You</h1>
            <ul>
                <li>Your Chanel</li> 
                <li>History</li>
                <li>Playlists</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
                <li>Liked Videos</li>
            </ul>
            <h1 className="font-bold pt-5">Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shoping</li>
                <li>Music</li>
                <li>Movies & Tv</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sport</li>
                <li>Courses</li>
                <li>Fashion & beauty</li>
                <li>Podcasts</li>
                <li>Playables</li>
            </ul>
            <h1 className="font-bold pt-5">More From Youtube</h1>
            <ul>
                <li>Youtube Premium</li>
                <li>Youtube Tv</li>
                <li>Youtube Studio</li>
                <li>Youtube Music</li>
                <li>Youtube Kids</li>
            </ul>
            <ul className="pt-5">
                <li>Settings</li>
                <li>Report history</li>
                <li>Help</li>
                <li>Send Feedback</li>
            </ul>
        </div>

    )
}
export default Sidebar;