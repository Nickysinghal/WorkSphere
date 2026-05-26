import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null)

    const updateEmployees = (updatedEmployees) => {
        setUserData(prev => ({ ...prev, employees: updatedEmployees }))
    }
    //runs in side stack
    useEffect(() => {
        if (!localStorage.getItem("Employees")) {
            setLocalStorage()
        }
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin })
    }, [])

    return (
        <div>
            <AuthContext.Provider value={{...userData, updateEmployees}}>
                {children}

            </AuthContext.Provider>

        </div>
    )
}

export default AuthProvider
