
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import add from '../imgs/add.png';
import Footer from './footer';
import { Link } from 'react-router-dom';

export default function NewEntry(){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        rollnumber: '',
        name: '',
        department: '',
        subject: '',
        remark: '',
        applicationdocument: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCreateClick = async (e) => {
        e.preventDefault();

        const data =  {
            roll_number: formData.rollnumber,
            name: formData.name,
            department: formData.department,
            subject: formData.subject,
            remarks: formData.remark,
            application_document: formData.applicationdocument,
        }

        try {
            const response = await axios.post('http://localhost:8000/inwardcreate/', data);
            console.log('Response:', response);
            alert('Entry created successfully');
        }
        catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }

        navigate('/');
    };

    return(
        <>
                <Link to="/" className="back_button"> Home </Link>

        <div className="newentry-container">
            <h1>NEW ENTRY</h1>
            <form className="input-container" onSubmit={handleCreateClick}>
                <div className="label">
                    <label htmlFor="rollnumber">ROLL NUMBER</label>
                    <input type="text" name="rollnumber" className="input" value={formData.rollnumber} onChange={handleChange}/>
                </div>
                <div className="label">
                    <label htmlFor="name">NAME</label>
                    <input type="text" name="name" className="input" value={formData.name} onChange={handleChange}/>
                </div>
                <div className="label">
                    <label htmlFor="department">DEPARTMENT</label>
                    <input type="text" name="department" className="input" value={formData.department} onChange={handleChange}/>
                </div>
                <div className="label">
                    <label htmlFor="subject">SUBJECT</label>
                    <input type="text" name="subject" className="input" value={formData.subject} onChange={handleChange}/>
                </div>
                <div className="label">
                    <label htmlFor="remark">REMARK</label>
                    <input type="text" name="remark" className="input" value={formData.remark} onChange={handleChange}/>
                </div>  
                <div className="label">
                    <label htmlFor="applicationdocument">APPLICATION DOCUMENT</label>
                    <input type="text" name="applicationdocument" className="input" value={formData.applicationdocument} onChange={handleChange}/>
                </div>
                    
                <div className="create-container">
                    <button className="create" onClick={handleCreateClick} >
                        <div >Create
                            <img src={add} alt="" className="create-button-img" />
                        </div>
                    </button>
                </div> 
            </form>  
        </div>
        <Footer /> 
        </>
    );
}