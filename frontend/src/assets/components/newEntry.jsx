import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function NewEntry() {

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

        const data = {
            roll_number: formData.rollnumber,
            name: formData.name,
            department: formData.department,
            subject: formData.subject,
            remarks: formData.remark,
            application_document: formData.applicationdocument,
        }

        try {
            const response = await axios.post('http://localhost:8000/compose/', data);
            console.log('Response:', response);
            alert('Entry created successfully');

            setFormData({
                rollnumber: '',
                name: '',
                department: '',
                subject: '',
                remark: '',
                applicationdocument: ''
            });
        }
        catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }

        navigate(0);
    };

    return (
        <>
            <div className="newentry-container">
                <h1 className="newentry-heading">NEW ENTRY</h1>
                <form className="input-container" onSubmit={handleCreateClick}>
                    <div className="label">
                        <label htmlFor="rollnumber">ROLL NUMBER</label>
                        <input type="text" name="rollnumber" className="input" value={formData.rollnumber} onChange={handleChange} />
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

                    <div className="create-container">
                        <button className="create" onClick={handleCreateClick} >
                            <div > Create Entry
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}