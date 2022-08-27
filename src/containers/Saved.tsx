import React from 'react';

import Footer from '@components/footer/Footer';
import { TopBar } from '@components';
import SavedFeed from '@components/saved-feeds/SavedFeeds';

const Saved = () => {


    return (
        <div className="w-full h-full ">
            <TopBar title={'Saved Feeds'} 
            />
            <div className="mx-2 mt-2">
               <SavedFeed></SavedFeed>

            </div>
            <Footer />
        </div>
    );
};

export default Saved;
