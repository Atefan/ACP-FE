import React, { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './services/User';
import { JwtContext } from './JwtContext';
import { getJwtWebStorage, getUIDWebStorage } from './configuration/webStorage';
import AppRoutes from './AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { UIDContext } from './UIDContext';

export const Types = {
    ACTION: 'ACTION',
    RESPONSIBILITY: 'RESPONSIBILITY',
    COMMUNICATION_SKILLS: 'COMMUNICATION_SKILLS',
    BUSINESS_IMPACT_AND_VALUE: 'BUSINESS_IMPACT_AND_VALUE',
    MASTERY: 'MASTERY'
  };
 // createAllFields();

export default function App() {
    const [jwt, setJwt] = useState(getJwtWebStorage());
    const [uid, setUID] = useState(getUIDWebStorage());

    useEffect(() => {
      setJwt(getJwtWebStorage());

    }, []);

    return (
    <ApolloProvider client={client}>
      <JwtContext.Provider value={jwt}>
      <UIDContext.Provider value={uid}>
        <Router>
            <ApolloProvider client={client}>
                <AppRoutes/>
            </ApolloProvider>
        </Router>
      </UIDContext.Provider>
      </JwtContext.Provider>
    </ApolloProvider>
  );
}

export { JwtContext as jwtContext };

