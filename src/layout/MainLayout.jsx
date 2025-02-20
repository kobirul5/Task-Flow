import React, { useContext } from 'react'
import Navbar from '../pages/Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer'
import { AuthContext } from '../provider/AuthProvider'

export default function MainLayout() {
    const {logOut} = useContext(AuthContext)
    return (
        <div>
            {/* <Navbar /> */}
            <div className='grid grid-cols-12'>
                    <div className='col-span-2 bg-amber-600'>
                        home
                        <button className='btn' onClick={()=> logOut()}>Log Out</button>
                    </div>
                <section className='min-h-screen col-span-10'>
                    <Outlet />
                </section>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
