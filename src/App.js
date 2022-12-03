import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Work from './components/work';
import Contact from './components/contact';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Blogs from './components/blogs';

function App() {
  const[fetchData,setFetchData]=useState([])
    const [owner,setOwner]=useState({
    })
    const[condition,setCondition]=useState(false)
    
        
    
    useEffect(()=>{
        const fetch =async ()=>{
            if (condition===false) {
               await axios.get(
                    `https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109dd/post`,
                    {
                        headers:{
                            'app-id':'638aa636904b75d69e10e94f'
                        }
                    }
                ).then(response=>{
                    return(
                    setFetchData(response.data.data),
                    setCondition(true),
                    setOwner(response.data.data[0].owner)
                )})
            }
            else{
                console.log('data already fetched');
                console.log(fetchData);
                console.log(owner);
            }
        };fetch()
    },[fetchData,setFetchData,condition,setCondition,owner,setOwner])
    
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home fetchData={fetchData} owner={owner}/>}/>
        <Route exact path='/work' element={<Work fetchData={fetchData}/>}/>
        <Route exact path='/work/:id' element={<Blogs fetchData={fetchData}/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
