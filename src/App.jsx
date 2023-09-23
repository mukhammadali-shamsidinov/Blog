import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import Detail from './pages/Detail'
import {addDoc, collection, onSnapshot} from 'firebase/firestore'
import { auth, db } from './config'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import Add from './pages/Add'
export const Context = createContext()
function App() {


  const [posts,setPosts] = useState([])
  const [isUser,setIsUser] = useState(false)
  const [userData,setUserData] = useState(null)
  function isAuth(){
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider).then((userAuth)=>{
      console.log(userAuth);
      setUserData(userAuth.user)
      setIsUser(true)
    }).catch(err=>{
      console.log(err.message);
      
    })
  }

  const addPost = (data)=>{
    console.log(data);
    const {title,text,poster} = data
    if(userData.displayName){
      addDoc(collection(db,"blogs"),{
        title,
        text,
        poster,
        author:userData.displayName,
        created_time:new Date()
      }).then(()=>{
        console.log("success");
      }).catch(err=>{
        console.log(err.message);
      })
    }

  }


  useEffect(()=>{
    onSnapshot(collection(db,"blogs"),(snapshot)=>{
      console.log(snapshot.docs.map(doc=>({id:doc.id,...doc.data()})));
      setPosts(snapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
    })
  },[])


  return (
    <Context.Provider value={{posts,isAuth,isUser,userData,addPost}}>
<div>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/detail/:id' element={ <Detail />} />
        <Route path='/add' element={ <Add />} />
      </Routes>
     
    </div>
    </Context.Provider>
    
  )
}

export default App