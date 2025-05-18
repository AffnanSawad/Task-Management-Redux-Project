import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.tsx'
import { ThemeProvider } from './shadcdnProvider/theme-provider.tsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'



createRoot(document.getElementById('root')!).render(
 <div className=' min-h-screen'>

 
  <StrictMode>
  

 {/* Wrap By Redux */}
 <Provider store={ store }>

   
   {/* Wrap By SHADCDN Dark Mode Theme : */}
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

   
   <RouterProvider  router={routes}>





    </RouterProvider>


  </ThemeProvider>

 </Provider>
  
    



  </StrictMode>,


 </div>
)
