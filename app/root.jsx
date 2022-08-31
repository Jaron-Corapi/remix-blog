import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import {Links} from '@remix-run/react'
import globalStylesUrl from '~/styles/global.css'

export const links = () => [{ rel: 'stylesheet', 
  href: globalStylesUrl }]

export default function App(){
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document ({children, title}){
  return (
<html lang='en'>
      <head>
        <Links />
        <title>Remix Blog</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

function Layout({children}){
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='logo'>
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        {children}
      </div>
    </>
  )
}

export function ErrorBoundary({error}) {
  console.log(error)
  return (
    <Document>
      <Layout>
      <h1>Error</h1>
      <p>{error.message}</p>
      </Layout>
    </Document>
  )
}