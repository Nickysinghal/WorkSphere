import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  useEffect(() => {
   setLocalStorage()
  },[])
  
  const [user, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)

  //getting global data into auth data {employees,admin}
  const authData = useContext(AuthContext)
  console.log("auth data",authData);
  // console.log("auth data",authData.employees.find((e)=> firstName == "Arjun"));

  //here loggedinUser is uded to specify which role is currently active
  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }  
  // }, [authData])
  

  const handleLogin = (email,password)=>{
    if(email=="admin@me.com" && password=='123'){
      // console.log("admin")
      setUser("admin")
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    }else if(authData){
      const employee = authData.employees.find((e)=>email==e.email && password==e.password);
      if(employee){
        // console.log("employee")
        setUser("employee")
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee"}))
      }
      

    }else{
      alert("invaild data")
    }
  }

  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>:""}
      {user=="admin"?<AdminDashboard/>: ""}
      {user =="employee"?<EmployeeDashboard data={LoggedInUserData}/>:null}
      
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </>
  )
}
export default App
