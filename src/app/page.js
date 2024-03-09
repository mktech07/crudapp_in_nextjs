'use client'
import { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import { queryData } from "../../utills/getQueryOutput";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link  from "next/link"

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Filed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <main >
      <Tbl users={users} />
    </main>
  )
}

const Tbl = ({ users }) => {
  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="text-left">Customer List</h5>
              <button className="btn btn-primary">Add New</button>
            </div>
            <div className="card-body">

              <table className="table table-hover">
                <thead>
                  <tr>
                    <th className="text-center bg-danger">id</th>
                    <th className="text-center bg-danger">First Name</th>
                    <th className="text-center bg-danger">Last Name</th>
                    <th className="text-center bg-danger">Status</th>
                    <th className="text-center bg-danger">createdAt</th>
                    <th className="text-center bg-danger">updatedAt</th>
                    <th className="text-center bg-danger" colSpan={2}>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td className="text-center">{user.id}</td>
                      <td className="text-center">{user.firstName}</td>
                      <td className="text-center">{user.lastName}</td>
                      <td className="text-center">{user.validated == 1 ? "Verified" : "Not Verified"}</td>
                      <td className="text-center">{user.createdAt}</td>
                      <td className="text-center">{user.updatedAt}</td>
                      <td>

                        <Link href="/edituser/[id]" as={`/edituser/${user.id}`}>
                        <i className="fa fa-edit"></i>
                        </Link>
                       
                      </td>
                      <td>
                        <button className="btn btn-danger">
                          <i class="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
