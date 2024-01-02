
//import { useState } from 'react';
import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//import Profile from './Profile';
//import Login from './Login';
//import Product from './Product';
//import { useEffect } from 'react';
//import Counter from './Counter';
//import Usememo from './Usememo';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import User from './components/User';
import Homee from './components/Homee';
import Filter from './components/Filter';
import Contact from './components/Contact';
import Company from './components/Company';
import Other from './Other';
import Channel from './components/Channel';
import Datas from './components/Datas';
import Data from './components/Data';
import Post from './CRUD/Post';
// import Users from './Users';
// import Form from './Form';

function App() {

  // const [data, setdata] = useState("prince");
  // const [name, setname] = useState("AArati");
  //const [status, setstatus] = useState(false);
  // const [button, setbutton] = useState();
  // const [count, setcount] = useState(0);
  // useEffect(()=>{
  //   console.log('I am in the effect');
  // })

  // function updatedata() {
  //   setdata("raj")
  //   // alert(data)
  //   ok()
  // }
  // function ok() {
  //   setname("aarati")
  //   // alert(data)
  // }
  // <h1>Hello world</h1>
  // <p>{data}</p>

  // <button onClick={updatedata} >Click me updated</button>

  // <Users name={name} age={20} />
  // <button onClick={() => {
  //   setname("Prince")
  // }}>Change Name Prince</button>

  // <button onClick={() => {
  //   setname("Raj")
  // }}>Change Name Raj</button>
  //<Form/>
  return (
    <div className="App">
      {/*{
        button ?
        <h1>Hello World</h1>:null
      }
     {/* <button onClick={()=>{setstatus(false)}}>Hide</button><br/>
    <button onClick={()=>{setstatus(true)}}>show</button><br></br>*/}
      {/*{
        button ?
        <button onClick={()=>{setbutton(false)}}>set Hide</button> :
        <button onClick={()=>{setbutton(true)}}>set Show</button>
        }
        <h1>UseEgffect {count}</h1>
      <button onClick={()=>setcount(count+1)}>Updated Counter</button>*/}
      {/*<Profile/>
        <Login/>
      <Product/><Counter/>*/}

      <BrowserRouter>
        <Routes>

          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Homee />} />
          <Route path='/about' element={<About />} />
          <Route path='/data' element={<Data />} />
          <Route path='/filter' element={<Filter />} /> 
          <Route path='/datas' element={<Datas />} /> 
          <Route path='/CRUD/Post' element={<Post />} /> 

          <Route path='/contact/' element={<Contact />} >

            <Route path='company' element={<Company />} />
            <Route path='other' element={<Other />} />
            <Route path='channel' element={<Channel />} />

          </Route>

          <Route path='/User/:name' element={<User />} />
          <Route path='/*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
