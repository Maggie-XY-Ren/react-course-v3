import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
// QueryClientProvider: Wraps your app, 
// making the QueryClient and its cache available to any component via hooks.
<QueryClientProvider client={queryClient}>
    <App />
</QueryClientProvider>
);
