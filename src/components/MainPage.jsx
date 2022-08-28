import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser({ name: 'Artem' }));
  }, []);
  return (
    <h1>Hello world</h1>
  );
}

export default MainPage;
