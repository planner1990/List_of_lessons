import React  from 'react';
import './App.css';
import Navbar from './component/navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Form from './component/courses';
import Header from './component/header';


function App() {
  
 return(
     <div  className="container app">
                     <Navbar/>
         <div className="card text-center">
            <div className="card-header">
                     <Header/>
            </div>
            <div className="card-body">
                <Form/>
               
            </div>
         </div>
       
     </div>
 )
}

export default App;

 