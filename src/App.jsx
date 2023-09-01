import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from "./components/Home"
import Profile from "./components/Profile"
import './App.css'
import AppContextProvider from "./components/AppContextProvider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query" 
import Form from "./components/Form"
import Test from "./components/Test"
import Test2 from "./components/Test2"
import Login from "./components/Login"
import CountRedux from "./components/CountRedux"
import Data from "./components/Data"
import ThemeContext from "./Context/ThemeContext"




function App() {
 const client = new QueryClient({defaultOptions:{
  queries:{
    refetchOnWindowFocus:false
  }
 }});

  return (
    
    <BrowserRouter>
     
        <QueryClientProvider client={client}>
            <Link to='/'>Login</Link>
            <Link to='/home'>Home</Link>
            <Link to='profile'>Profile</Link>
            <Link to='form'>Form</Link>
            <Link to='test'>Test</Link>
            <Link to='test2'>Test2</Link>
            <Link to='test'>Test</Link>
            <Link to='count'>Count w/ RTK</Link>
            <Link to='data'>Data</Link>
        <AppContextProvider>
          <ThemeContext>
              <Routes>
                <Route path="/"  element={<Login />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="profile" element={<Profile  />}/>
                <Route path='form' element={<Form />} />
                <Route path='test' element={<Test />} />
                <Route path='test2' element={<Test2 />} />
                <Route path="count" element={<CountRedux />} />
                <Route path="data" element={<Data />} />
              </Routes>
              </ThemeContext>
            </AppContextProvider>
          </QueryClientProvider>
        
    </BrowserRouter>
   
  )
}

export default App
