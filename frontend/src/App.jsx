import ProtectedRoute from './utils/ProtectedRoute';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import UpdatePage from './pages/Update';
import { Toaster } from 'react-hot-toast';


function App() {
 

  return (
    <BrowserRouter>
     <Toaster position="bottom-right"/>
  
    <Routes>
    
        <Route path="/" element={<Login />} />
        <Route path="/update-page" element={<ProtectedRoute Component={UpdatePage} />} />
        <Route path="/*" element={<NotFound />} />

    </Routes>
  
  </BrowserRouter>
  )
}

export default App
