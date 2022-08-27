import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { startCase, toLower } from 'lodash';

import { translate } from '@utils/locale';
import { RootState } from '@store/reducers';
import { ProfilePropTypes } from './types';
import defaultAvatar from '@assets/icons/defaultAvatar.svg';

const ProfileComponent: FC<ProfilePropTypes> = props => {
  const { handleViewProfileClick, type } = props;

  const [isFetchingFailed, setIsFetchingFailed] = useState<boolean>(false);

  const { userDetails } = useSelector(
    (state: RootState) => state.rootReducer.userDetails
  );

  return (
    <div
      className="flex absolute bottom-1 flex-row p-4 w-full h-[76px] 
      border-t-2 border-gray-200 sm:static sm:bottom-auto">
      <img
        src={userDetails.photo || defaultAvatar}
        onError={(e: any) => {
          if (!isFetchingFailed) {
            e.target.src = defaultAvatar;
            setIsFetchingFailed(true);
          }
        }}
        className="w-[40px] h-[40px] rounded-full hover:cursor-pointer"
        referrerPolicy="no-referrer"
      />
      <div
        className={`flex flex-col ml-2 ${type} justify-end whitespace-nowrap overflow-hidden hover:cursor-pointer`}>
        <span className="flex text-base text-gray-700">
          {`${startCase(toLower(userDetails.firstName))} ${startCase(
            toLower(userDetails.lastName)
          )}`}
        </span>
        <div
          onClick={handleViewProfileClick}
          className="text-sm text-gray-500 hover:text-gray-700">
          {translate('logout')}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
