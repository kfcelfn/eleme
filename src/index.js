import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'  
import { persistStore } from 'redux-persist'   
import { PersistGate } from 'redux-persist/lib/integration/react'; 
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import { store } from './store'
import routes from '@/router'; 
import '@/utils/rem'
import '@/index.less';
import '@/utils/reset.css'    

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>  
      <BrowserRouter>   {/* 路由 */}
        {renderRoutes(routes)}
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
