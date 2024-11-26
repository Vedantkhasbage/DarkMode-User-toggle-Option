import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 ///Dark Mode on basis on user preference using TailWindCSS

 return <div className=' h-screen bg-white dark:bg-black dark:text-white text-black-600'>
        <button onClick={()=>{
          document.querySelector("html").classList.toggle("dark")
        }} className='h-[50px] w-[150px] bg-blue-700'>Toggle theme</button>
        <h1>Dark Mode Is Here!!!</h1>
 </div>
}

export default App
