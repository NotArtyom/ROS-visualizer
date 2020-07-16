import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route { ...rest }
         render={ props =>
           localStorage.getItem('LIRS token') === 'LIRS User'? (
             <Component { ...props } />
           ) : (
             <Redirect to={ {
               pathname: '/signIn',
               state: {from: props.location}
             } }
             />
           )
         }
  />
);

export default PrivateRoute;