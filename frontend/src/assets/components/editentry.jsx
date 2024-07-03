import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';

export default function EditEntry() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: '',
        rollnumber: '',
        date:'',
        name: '',
        department: '',
        subject: '',
        remark: '',
        applicationdocument: ''
    });
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:8000/fetch/${id}/`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setFormData({
                    id: data.id,
                    rollnumber: data.roll_number,
                    date: format(new Date(data.time), 'dd/MM/yyyy'),
                    name: data.name,
                    department: data.department,
                    subject: data.subject,
                    remark: data.remarks,
                    applicationdocument: data.application_document
                })
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred');
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleupdateClick = async (e) => {
        e.preventDefault();

        const data = {
            id: formData.id,
            roll_number: formData.rollnumber,
            date: formData.date,
            name: formData.name,
            department: formData.department,
            subject: formData.subject,
            remarks: formData.remark,
            application_document: formData.applicationdocument,
        }

        try {
            const response = axios.put(`http://localhost:8000/edit/`, data);
            console.log('Response:', response);
            alert('Entry updated successfully');
        }
        catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }

        navigate('/');
    }

    return (
        <>
            <div className="newentry-container">
                <h1 className="newentry-heading">EDIT ENTRY</h1>
                <br />
                <form className="input-container">
                    <div className="label">
                        <label htmlFor="id">ID</label>
                        <input type="number" name="id" className="input" value={formData.id} onChange={handleChange} disabled />
                    </div>
                    <div className="label">
                        <label htmlFor="rollnumber">ROLL NUMBER</label>
                        <input type="text" name="rollnumber" className="input" value={formData.rollnumber} onChange={handleChange} />
                    </div>
                    <div className="label">
                        <label htmlFor="date">DATE</label>
                        <input type="text" name="date" className="input" value={formData.date} onChange={handleChange} disabled />
                    </div>
                    <div className="label">
                        <label htmlFor="name">NAME</label>
                        <input type="text" name="name" className="input" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="label">
                        <label htmlFor="department">DEPARTMENT</label>
                        <input type="text" name="department" className="input" value={formData.department} onChange={handleChange} />
                    </div>
                    <div className="label">
                        <label htmlFor="subject">SUBJECT</label>
                        <input type="text" name="subject" className="input" value={formData.subject} onChange={handleChange} />
                    </div>
                    <div className="label">
                        <label htmlFor="remark">REMARK</label>
                        <input type="text" name="remark" className="input" value={formData.remark} onChange={handleChange} />
                    </div>
                    <div className="label">
                        <label htmlFor="applicationdocument">TYPE</label>
                        <select
                            name="applicationdocument"
                            id="applicationdocument"
                            className="input"
                            value={formData.applicationdocument}
                            onChange={handleChange}
                        >
                            <option value="">Select Type</option>
                            <option value="Application">Application</option>
                            <option value="Letter">Letter</option>
                            <option value="Document">Document</option>
                        </select>
                    </div>

                    <div className="edit-container">
                        <button className="create" onClick={handleupdateClick} >
                            <div >Update
                            </div>
                        </button>
                        <button className="create" >
                            <div > <Link to="/"> Create New </Link>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}