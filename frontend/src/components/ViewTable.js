import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ViewTable(props) {
    const [data, getData] = useState([]);
    const [deleteId, id] = useState('');
    const [show, showModal] = React.useState(false);
    const [state, setState] = useState({
        city: '',
        fullname: '',
        id : ''
    })
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


    const editBtn = (id) => {
        const selectedItem = data.find(item => item.id === id);
        if (selectedItem) {
            setState({
                fullname: selectedItem.name,
                city: selectedItem.city,
                id: selectedItem.id,
            });
            showModal(true);
        }
    };

    const handleClose = () => {
        showModal(false);
    }

    const deleteBtn = (id) => {
        axios.post('http://localhost:8000/deleteRow', { 'id': id }).then(function (response) {
            if (response.data.error == 0) {
                props.showAlert('successfully Deleted');
                getTableData();
            }
        })

    }

    const updateApiCall = () => {
        var payload = {
            name: state.fullname,
            city: state.city,
            id: state.id,
        };
        axios.post('http://localhost:8000/updateRow', payload) // Removed the extra object wrapping
            .then(function (response) {
                if (response.data.error == 0) {
                    props.showAlert('Successfully updated');
                    showModal(false);
                    getTableData();
                }
            })
            .catch(function (error) {
                console.error("There was an error updating the data!", error);
            });
    };
    
    const updateBtn = (e) => {
        e.preventDefault();
        if (state.city == '' || state.fullname == '') {
            props.showAlert('Fill Fields');
        } else {
            updateApiCall();
        }
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

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
                                    <td scope="row">{index + 1}</td>
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

            <Modal show={show} onHide={handleClose} static>
                <Modal.Header closeButton>
                    <Modal.Title>Test</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="form-group">
                <label for="full_name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullname" // Change to match the key in state
                        placeholder="Enter FullName"
                        value={state.fullname}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group" >
                        <label for="city">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter City"
                        value={state.city}
                        onChange={handleChange}
                    />
                    </div>


                    <button className="btn btn-primary my-3 float-end" onClick={updateBtn} type="submit">Update</button>

                </Modal.Body>
            </Modal>

        </>
    );
}
