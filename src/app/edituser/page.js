'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


export default function edituser() {
    // const [users,setUsers]=useState([]);
    // useEffect(()=>{
    //     const singleUser= async ()=>{
    //         try{
    //             const response = await fetch('')
    //         }
    //     }
    // })

    return (
        <main>
            <EditForm />
        </main>
    )
}
const EditForm = () => {
    return (
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-md-8">
                    <div className="card" >
                        <h5 className="card-header">Add User</h5>
                        <div className="card-body">
                            <form className='form'>
                                <div className="form-group">
                                    <label for="firstName">First Name:</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" />
                                </div>
                                <div className="form-group">
                                    <label for="lastName">Last Name:</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" />
                                </div>
                                <div className="form-group">
                                    <label for="mobileNo">Mobile No:</label>
                                    <input type="tel" className="form-control" id="mobileNo" name="mobileNo" />
                                </div>
                                <div className="form-group justify-content-center">
                                    <button type="submit" className="btn btn-primary w-50 mt-3">Add </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}