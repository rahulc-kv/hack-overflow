import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { CircularLoader } from '@components';
import RoutesPath from './RoutesPath';
import Home from '@containers/Home';
import DetailedView from '@containers/DetailedView';
import Explore from '@containers/Explore';

const PrivateLayout = () => {
  return (
    <div className={'flex flex-col w-full h-full sm:flex-row'}>
      <Suspense fallback={<CircularLoader isFullScreen={true} />}>
        <Routes>
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/event-details/:id" element={<DetailedView />} />
            <Route
              path={RoutesPath.ALL}
              element={<Navigate replace={true} to={RoutesPath.home} />}
            />
            <Route path="/explore" element={<Explore />} />
            <Route path="/saved" element={<Home />} />
            <Route path="/user" element={<Home />} />
            <Route path="/profile" element={<Home />} />
          </>
        </Routes>
      </Suspense>
    </div>
  );
};

export default PrivateLayout;
