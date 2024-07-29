import React from 'react'
import App from './App'
import useLocalStorage from "use-local-storage";
import "./kuntun.css"

function kuntun() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);
   return (
      <div className='App'data-theme={isDark ? "dark" : "light"}>
      <App isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      
      </div>
  );
}

export default kuntun;