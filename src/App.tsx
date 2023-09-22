import React, { useContext, useState } from 'react'
import './styles/index.scss'
import { Route, Routes, Link } from 'react-router-dom'
import Loading from './pages/Loading'
import { Suspense } from 'react'
import {AsyncMainPage} from './pages/MainPage/AsyncMainPage'
import { AsyncAboutPage } from './pages/AboutPage/AsyncAboutPage'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classnames/className'



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
            <Route path='/about' element={<AsyncAboutPage/>}/>
            <Route path='/' element={<AsyncMainPage/>}/>
          </Routes>
      </Suspense>
      
    </div>
  )
}

export default App