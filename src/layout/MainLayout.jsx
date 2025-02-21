import React, { useContext } from 'react'
import Navbar from '../pages/Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer'
import { AuthContext } from '../provider/AuthProvider'
import AddTaskModal from '../components/AddTaskModal'

export default function MainLayout() {
    const {logOut} = useContext(AuthContext)
    return (
        <div>
            <Navbar />
                <section className=''>
                    <Outlet />
                </section>
            {/* </div> */}
            <AddTaskModal/>
            {/* <Footer /> */}
        </div>
    )
}
