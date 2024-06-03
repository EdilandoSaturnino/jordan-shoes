import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-1xl'>
        <Outlet />
      </main>
    </>
  )
}
