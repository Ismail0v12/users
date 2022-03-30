import React, {Suspense, lazy, useContext} from 'react';
import {Routes, Route} from "react-router";
import {Navigate} from "react-router";
import {Spinner} from "../spinner";
import AuthenticationContext from "../../store/authentication-context-provider";

const HomePage = lazy(() => import('../../pages/home'));
const UserListPage = lazy(() => import('../../pages/user-list'));
const UserDetailPage = lazy(() => import('../../pages/user-detail'));
const UnknownPage = lazy(() => import('../../pages/unknown-list'));
const UnknownDetailPage = lazy(() => import('../../pages/unknown-detail'));
const SearchPage = lazy(() => import('../../pages/search'));
const ProfilePage = lazy(() => import('../../pages/profile'));
const NotFoundPage = lazy(() => import("../../components/not-found"));
const SignInPage = lazy(() => import("../../pages/sign-in"));
const SignUpPage = lazy(() => import("../../pages/sign-up"));

function Routing() {
  const {isAuthenticated} = useContext(AuthenticationContext);
  return (
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route
          path="/"
          element={<HomePage/>}/>
        <Route
          path="/users"
          element={<UserListPage/>}/>
        <Route
          path="/users/:id"
          element={<UserDetailPage/>}/>
        <Route
          path="/unknown"
          element={<UnknownPage/>}/>
        <Route
          path="/unknown/:id"
          element={<UnknownDetailPage/>}/>
        <Route
          path="/search"
          element={<SearchPage/>}/>
        <Route
          path="/sign-in"
          element={<SignInPage/>}/>
        <Route
          path="/sign-up"
          element={<SignUpPage/>}/>
        <Route
          path="/profile"
          element={isAuthenticated ? <ProfilePage/> : <Navigate to="/sign-in"/>}/>
        <Route
          path="*"
          element={<NotFoundPage/>}/>
      </Routes>
    </Suspense>
  );
}

export default Routing;