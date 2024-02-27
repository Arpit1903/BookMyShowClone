import React from "react";
import DefaultLayoutHoc from "../layouts/Default.Layout";
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";

const Plays = () => {
    return (
        <>
        <div className="container mx-auto px-4 my-10">
            <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
                <h2 className="text-2xl font-bold mb-4">Plays in Delhi NCR</h2>
                <div className="flex flex-wrap">
                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                        <Poster isPlay={true} src="" title="So Rude Of Me By Sweets" subtitle="Comedy Shows | English,Hindi | 18yrs+ | 2hr 30min" />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                        <Poster isPlay={true} src="" title="So Rude Of Me By Sweets" subtitle="Comedy Shows | English,Hindi | 18yrs+ | 2hr 30min" />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                        <Poster isPlay={true} src="" title="So Rude Of Me By Sweets" subtitle="Comedy Shows | English,Hindi | 18yrs+ | 2hr 30min" />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                        <Poster isPlay={true} src="" title="So Rude Of Me By Sweets" subtitle="Comedy Shows | English,Hindi | 18yrs+ | 2hr 30min" />
                    </div>
                </div>
            </div>

            <div className="lg:w-1/4 p-4 bg-white rounded">
                <h2 className="text-2xl font-bold mb-4">Filters</h2>
                <div>
                    <PlayFilters title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                </div>
                <div>
                    <PlayFilters title="Language" tags={["English", "Hindi", "Punjabi"]} />
                </div>
            </div>
        </div>
        </>
    )
}

export default DefaultLayoutHoc(Plays);