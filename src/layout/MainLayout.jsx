import React from 'react'
import Navbar from '../pages/Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer'

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-12'>
                    <div className='col-span-2 bg-amber-600'>
                        home
                    </div>
                <section className='min-h-screen col-span-10'>
                    <Outlet />
                </section>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
