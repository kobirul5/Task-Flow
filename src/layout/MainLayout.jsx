import React from 'react'
import Navbar from '../pages/Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer'

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <section className='min-h-screen'>
                <Outlet />
            </section>
            <Footer/>
        </div>
    )
}
