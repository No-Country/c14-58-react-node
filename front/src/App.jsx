import './App.css'
import { RouterProvider } from "react-router-dom";
import router from './routes';

import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getUser } from './redux/slices/user';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);

  return (
    <RouterProvider router={router} />
  
  )
}

export default App
