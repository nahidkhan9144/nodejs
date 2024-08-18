import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ViewTable(props) {
    const [data, getData] = useState([]);
    const [deleteId, id] = useState('');
    const getTableData = () => {
            axios.get('http://localhost:8000/getTable')
                .then(function (response) {
                    if (response.data.error == 0) {
                        getData(response.data.data);
                        // console.log(response.data.data);
                    } else {
                        props.showAlert(response.data.data);
                        // console.log(response.data.data); 
                    }
                })
                .catch(function (error) {
                    console.error("There was an error fetching the data!", error);
                });
    }
    useEffect(() => {
        getTableData();
    }, []); 
    const editBtn = () => {

    }

    const deleteBtn = (id) => {
        axios.post('http://localhost:8000/deleteRow', { 'id': id }).then(function (response) {
            if (response.data.error == 0) {
                props.showAlert('successfully Deleted');
                getTableData();
            }
        })

    }

    return (
        <>
            <div className='d-flex col-md-10' style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' }} >
                <table className={`table table-${props.mode}`}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">City</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td scope="row">{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.city}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>
                                        <button type='submit' className='btn btn-primary' onClick={() => editBtn(item.id)}><i className="fa fa-edit" ></i></button>
                                        <button type='submit' className='btn btn-warning mx-3' onClick={() => deleteBtn(item.id)}><i className="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}
