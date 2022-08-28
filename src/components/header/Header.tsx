import React from 'react';

import { LocationIcon, SettingsIcon } from '@assets/icons';
const Header = () => {

    return (
        <div
            className="flex relative top-0 z-50  px-2 pt-3 pb-2
       w-full h-14 font-inter bg-white border-b-[1px] border-[#E5E7EB] ">
            <img className='absolute left-[150px] h-[38px]' src="/images/whn.png" />
            <div className="flex absolute left-[10px] flex-row">
                <div className=" p-1 h-9 bg-gray-100 rounded-lg">
                    <LocationIcon
                        className="mt-1 h-[19px]"
                    />
                </div>
                <div className="flex flex-col pt-1 pl-2">
                    <div className="text-xs">Edachira</div>
                    <div className="text-[10px]">Kakkanad</div>
                </div>
            </div>
            <div className="flex absolute right-3 flex-row">

                <div className="mt-1"><SettingsIcon fill="#000000" className=" mr-2 w-7 h-7 " /> </div>

            </div>

        </div>
    );
};

export default Header;
