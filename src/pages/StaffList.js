import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Staffmodel from '../models/Staffmodel';

function StaffList(props) {
    // bookList
    const [staffs,setStaff] = useState([])
    const [loading,setLoading] = useState(true)
    // Goi API
    useEffect( () => {
        Staffmodel.all().then( function(data){
            // Log data trả về để kiểm tra dữ liệu
            setStaff(data.data)
            setLoading(false)
        }).catch( function(error){
            alert('500 error')
        })
    },[] );
    const handleStaff = () =>{
        let staff = localStorage.getItem('staffs');
        setStaff(staff);
    }
    console.log(staffs);

    return (
        <div>
            <Link to={'/create'}> Add new </Link>
            { loading ? <p>Data is loading</p> : null }
            <h1>Employee manager</h1>
            <table class="table table-striped" border={1}>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Branch</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        staffs.map( (staff,key) => (
                            <tr key={key}>
                                <th>{ staff.code }</th>
                                <th>{ staff.name }</th>
                                <th>{ staff.age }</th>
                                <th>{ staff.salary }</th>
                                <th>{ staff.branch }</th>

                                <th>
                                    <Link to={'edit/' + staff.id}> Edit </Link>
                                    <Link to={'delete/' + staff.id}> Delete </Link>
                                    <td>
                            </td>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}

export default StaffList;