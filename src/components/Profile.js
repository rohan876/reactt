import React, { useState } from 'react'

const Profile = () => {
    var [name,setNamefn]=useState("Rahul")
    var [name,setNamefn]=useState("32")

    const changeName=() => {

        setNamefn (
            name="robin"

        )
            
        
    }
  return (
    <div>
      
    </div>
  );
}

export default Profile