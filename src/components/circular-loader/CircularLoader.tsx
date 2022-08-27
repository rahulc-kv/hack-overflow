import React, { FC } from 'react';

import { CircularLoaderProps } from './types';
import Modal from '../modal/SideModal';

const CircularLoader: FC<CircularLoaderProps> = props => {
  const { height = 'h-[500px]', isFullScreen = false } = props;

  const renderLoader = (
    <div
      className={`flex justify-center items-center ${
        isFullScreen ? 'w-full h-full' : height
      }`}>
      <img
        src="/images/fullScreenLoader.gif"
        alt="loader"
        className="w-[80px] h-[80px]"
      />
    </div>
  );

  return isFullScreen ? (
    <Modal isOpen={true} clickOutSideClose={false}>
      {renderLoader}
    </Modal>
  ) : (
    renderLoader
  );
};

export default CircularLoader;
