import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styling/index.css';
import '../src/styling/Profile.css';
import '../src/styling/settings.css';
import '../src/styling/Login.css';
import '../src/styling/landingPage.css';
import '../src/styling/SignUpPageStyling/App.css';
import App from './App.js';
import './styling/SignUpPageStyling/style.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60 * 24,
        cacheTime: Infinity,
      },
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>

      <App />
  </QueryClientProvider>
  
);

