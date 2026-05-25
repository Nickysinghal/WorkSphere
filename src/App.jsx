import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  useEffect(() => {

    setLocalStorage()
  }, [])

  const [user, setUser] = useState(null) //emp or admin
  const [LoggedInUserData, setLoggedInUserData] = useState(null)

  //getting global data into auth data {employees,admin}
  const authData = useContext(AuthContext)
  console.log("auth data", authData);
  // console.log("auth data",authData.employees.find((e)=> firstName == "Arjun"));

  //here loggedInUser is saved in local storage so do not login again and again
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    // console.log("logggednn in user", loggedInUser);
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      if(userData){
      // console.log("user data", userData)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      }
    }
  }, [])



  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == '123') {
      // console.log("admin")
      const admin = authData.admin.find((a) => email == a.email && password == a.password);
      console.log("admin data derived",admin);
      if (admin) {
        setUser("admin")
        setLoggedInUserData(admin);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: admin }))
      }

    } else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password);
      if (employee) {
        // console.log("employee")
        setUser("employee")
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }))
      }


    } else {
      alert("invaild data")
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user == "admin" ? <AdminDashboard data={LoggedInUserData} /> : null}
      {user == "employee" ? <EmployeeDashboard data={LoggedInUserData} /> : null}

      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </>
  )
}
export default App
