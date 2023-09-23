import React, { useContext, useState } from 'react'
import './styles/index.scss'
import { Route, Routes, Link } from 'react-router-dom'
import Loading from '../pages/Loading'
import { Suspense } from 'react'
import { MainPage } from '../pages/MainPage/UI/index'
import { AboutPage } from 'pages/AboutPage/UI'
import { useTheme } from './provider/ThemePRovider'
import { classNames } from '../shared/lib/classnames/className'



function App() {

  const { theme, toggleTheme } = useTheme();

  console.log(theme);
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'} >Main</Link>
      <Link to={'/about'} >About Site</Link>
      <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/' element={<MainPage/>}/>
          </Routes>
      </Suspense>
      
    </div>
  )
}

export default App