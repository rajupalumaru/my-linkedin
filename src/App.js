
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Feed from './components/Layouts/Main/Feed';
import Sidebar from './components/Layouts/Sidebar/Sidebar';
import Widget from './components/Layouts/Widget/Widget';
import Login from './components/Login/Login';
import { loginuser, logoutuser, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(loginuser({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          photoURL: userAuth.photoURL,
          displayName: userAuth.displayName,
      }))
      }
      else { 
        dispatch(logoutuser());

      }
    })
  }, [])
  console.log(user);
  return (
    <>
      {
        !user ? (<Login />) :
          <div className='app-wrapper'>
            <Header />
            <div className='app-body'>
              <Sidebar />
              <Feed />
              <Widget />
            </div>

          </div>
      }
    </>

  );
}

export default App;
