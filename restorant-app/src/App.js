import React from 'react';
//import logo from './logo.svg';
import './App.css';

import{BrowserRouter as Router,Route,Link} from 'react-router-dom'

import Home from './component/Home'
import RestauranstList from './component/RestauranstList'
import RestaurantDetail from './component/RestaurantDetail'
import RestaurantMake from './component/RestaurantMake'
import RestaurantSearch from './component/RestaurantSearch'
import RestaurantUpdate from './component/RestaurantUpdate'
import Login from './component/Login'
import Navibar from './component/Navibar'

function App() {
 
  return (
    <div className="App">
     <Router>
    <Navibar />
       
       <Route path="/List">
         <RestauranstList/>
       </Route>
       <Route path="/Detail">
         <RestaurantDetail />
       </Route>
       <Route path="/Create">
         <RestaurantMake/>
       </Route>
       <Route path="/Search">
         <RestaurantSearch />
       </Route>
       <Route path="/Update/:id" 
       render={props=>(<RestaurantUpdate {...props}    />
        
        )}
       >
         
       </Route>
       <Route path="/login" 
       render={props=>(<Login {...props}    />
        
        )}
       >
         
       </Route>
       <Route exact path="/">
         <Home/>
       </Route>
     </Router>
    </div>
  );
}

export default App;
