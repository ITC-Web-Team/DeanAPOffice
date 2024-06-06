
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate} from 'react-router-dom';
import add from '../imgs/add.png';
import Footer from './footer';
import check from "../imgs/check.png"
import outward from "../imgs/outward.png"
import axios from 'axios';

export default function EditEntry(){

    const history = useNavigate();

    const [formData, setFormData] = useState({
        rollnumber: '',
        name: '',
        department: '',
        subject: '',
        remark: '',
        applicationdocument: ''
    });
    const {id}=useParams();
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:8000/${id}/`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setFormData({
                rollnumber: data.roll_number,
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

        const data =  {
            roll_number: formData.rollnumber,
            name: formData.name,
            department: formData.department,
            subject: formData.subject,
            remarks: formData.remark,
            application_document: formData.applicationdocument,
        } 

        try {
            const response = axios.put(`http://localhost:8000/update/${id}/`, data);
            console.log('Response:', response);
            alert('Entry updated successfully');
        }
        catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    }

    const handleOutwardClick = async (e) => {
        try {
            const response = await axios.put(`http://localhost:8000/convertoutward/${id}/`);
            console.log('Response:', response);
            alert('Entry moved to outward successfully');

        }
        catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }

        history.push('/');
    }

    return(
        <>
        <Link to="/" className="back_button"> Home </Link>
        <div className="newentry-container">
            <h1>Edit ENTRY</h1>
            <br />
            <form className="input-container">
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
                    
                <div className="edit-container">
                    <button className="edit" onClick={handleupdateClick} >
                        <div >Update
                            <img src={check} alt="" className="edit-button-img" />
                        </div>
                    </button>
                    <button className="Outward" onClick={handleOutwardClick} >
                        <div >Outward
                            <img src={outward} alt="" className="Outward-button-img" />
                        </div>
                    </button>
                </div>
            </form>  
        </div>
        <Footer /> 
        </>
    );
}