'use client';

import posthog from 'posthog-js';

const ExploreButton = () => {
    const handleExploreClick = () => {
        posthog.capture('explore_events_clicked');
    };

    return (
        <>
         <button id="explore-btn" className="cursor-pointer mx-auto mt-7" onClick={handleExploreClick}>
           <a href="#events" className="text-white no-underline">Explore Events
           <img src="/icons/arrow-down.svg" alt="arrow right" width={24} height={24} className="inline-block ml-2"/>
           </a>
         </button>



        </>
    );
};

export default ExploreButton;