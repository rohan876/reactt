import React, { useState } from 'react'

const Student = () => {
        var [name,setNamefn]=useState("Rahul")
        var [rollno,setAge]=useState("32")
        var [college,setCollege]=useState("MZC")
        const changeName=() =>{

            setNamefn(name="Rohan" )
            setAge(rollno="20")
            setCollege(college="PTA")
        }
    
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

             <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Name </label><br/>
                <label for="" className="form-label">{name}</label>
                </div>
    

        
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">RollNumber</label><br/>
            <label for="" className="form-label">{rollno}</label>

            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">College</label><br/>
            
            <label for="" className="form-label">{college}</label>
            </div>
            
          
            
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <button onClick={changeName} className="btn btn-success">Change</button>
            
        </div>
    </div>
</div>
</div>
        
    
  )
}

export default Student