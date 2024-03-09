'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function edituser() {
    const router =  useRouter();
    const {id} = router.query||{};

    const [users,setUsers]=useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch('/api/users/${id}');
                if(!response.ok){
                    throw new Error('Fieled to fetch user data');
                }
                const userData = await response.json();
                setUsers(userData);
            }catch(error){
                console.log(error);
            }
        };
        if (id) {
            fetchData();
        }
       
    },[id]);
    if (!users) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <Page users={users}/>
        </main>
    )
}
const Page = ({users}) => {
    return (
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-md-8">
                    <div className="card" >
                        <h5 className="card-header">Single User Page</h5>
                        <div className="card-body">
                            <form className='form'>
                                <div className="form-group">
                                    <label for="firstName">First Name:</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" value={users.firstName} />
                                </div>
                                <div className="form-group">
                                    <label for="lastName">Last Name:</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" value={users.lastName}/>
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