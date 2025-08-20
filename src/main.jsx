import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { myStore } from './store/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>
)
