import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, RecyclingValue, SignUp } from '../components/landing-module';
import { Login, Profile } from '../components/profile-module';

const Loading = () => <p>Loading ...</p>;

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recycling-value" element={<RecyclingValue />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
};
export default Routing;
