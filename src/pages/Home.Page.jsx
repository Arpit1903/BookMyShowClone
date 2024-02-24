import React, {useEffect, useState} from "react";
import axios from "axios";
import DefaultLayoutHoc from "../layouts/Default.Layout";

//Components:-
import HeroCarousel from "../components/HeroCarouosel/HeroCarousel.Component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCardComponent";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setPremierMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, []);

    useEffect(()=>{
        const requestPopularMovies = async () =>{
            const getPopularMovies = await axios.get("/movie/popular");
            setRecommendedMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    },[]);

    useEffect(()=>{
        const requestUpcomingMovies = async () =>{
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setOnlineStreamEvents(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    },[]);

    return(
        <>
            <HeroCarousel />
            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>

            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider 
                title="Recommended Movies" 
                subtitle="List of recommended movies" 
                posters={recommendedMovies} 
                isDark="false" 
                />
            </div>

            <div className="bg-premier-800 py-12">
                <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img src="" alt="rupay" className="w-full h-full" />
                    </div>
                </div>

                <PosterSlider 
                title="Premiers"
                subtitle="New Releases Every Friday"
                posters={premierMovies}
                isDark={true}
                />
            </div>

            <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                <PosterSlider 
                title="Online Streaming Events"
                subtitle="Online Streaming"
                posters={onlineStreamEvents}
                isDark={false}
                />
            </div>
        </>
    )
}

export default DefaultLayoutHoc(HomePage);