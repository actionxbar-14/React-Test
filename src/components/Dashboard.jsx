import React, { useState } from 'react'
import UserCard from './UserCard'

const Dashboard = () => {
    const [users] = useState([
        {
            id:1,
            "name" : "Anubhav Pathak" ,
            email :"anubhavxyz@gmail.com",
            age: 20
        },
        {
            id:2,
            "name" : "Ankit Pathak" ,
            email :"ankitvxyz@gmail.com",
            age: 25
        },
        {
            id:3,
            "name" : "Divyanshu Chaouhan" ,
            email :"Divynashuxyz@gmail.com",
            age: 19
        },
        {
            id:4,
            "name" : "Sahil Rawat" ,
            email :"sahilvxyz@gmail.com",
            age: 22
        },
        {
            id:5,
            "name" : "trishu singh" ,
            email :"trishuvxyz@gmail.com",
            age: 40
        },
       
    ]);

    console.log("Users ArrY:",users);
  return (
    <div>
        <h1 className='text-center p-2'>User Dashboard</h1>
        <ul className='flex flex-wrap justify-center gap-6 bg-slate-400'>
            {
                users.map((user) => {
                    return(
                        <li>
                            <UserCard user={user.id} name ={user.name} email={user.email} age={user.age}/>

                         </li>

                    )
                    
                })
            }
        
        </ul>
        {/* <div>
            <ul className='bg-blue-700'>
            {
                users.map((user)=>{
                    <UserCard key={user.id}  name={user.name} email={user.email} age={user.age}/>
                })
            }

            </ul>
        </div> */}
      {/* <UserCard/> */}
    </div>
  )
}

export default Dashboard
