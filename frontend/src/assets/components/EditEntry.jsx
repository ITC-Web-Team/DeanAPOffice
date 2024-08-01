import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { format, set } from 'date-fns';
import Departments from '../../departments';
import ip from '../../ip';

export default function EditEntry() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        id: '',
        rollnumber: '',
        date: '',
        name: '',
        department: '',
        subject: '',
        remark: '',
        applicationdocument: ''
    });

    const [searchQuery, setSearchQuery] = useState({
        id: '',
        rollnumber: '',
        name: '',
    });

    const [filteredItems, setFilteredItems] = useState([]);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchList();
    }, []);

    useEffect(() => {
        if (searchQuery.id === '') setFilteredItems([]);
        else if (data) setFilteredItems(data.filter(item => item.id && item.id.toString().includes(searchQuery.id)));
    }, [searchQuery.id]);

    useEffect(() => {
        if (searchQuery.rollnumber === '') setFilteredItems([]);
        else if (data) setFilteredItems(data.filter(item => item.roll_number && item.roll_number.toLowerCase().includes(searchQuery.rollnumber.toLowerCase())));
    }, [searchQuery.rollnumber]);

    useEffect(() => {
        if (searchQuery.name === '') setFilteredItems([]);
        else if (data) setFilteredItems(data.filter(item => item.name && item.name.toLowerCase().includes(searchQuery.name.toLowerCase())));
    }, [searchQuery.name]);

    const fetchList = async () => {
        try {
            const response = await axios.get(`http://${ip}:8000/`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (id) {
            fetch(`http://${ip}:8000/fetch/${id}/`)
                .then((response) => response.json())
                .then((data) => {
                    setFormData({
                        id: data.id,
                        rollnumber: data.roll_number,
                        date: data.time,
                        name: data.name,
                        department: data.department,
                        subject: data.subject,
                        remark: data.remarks,
                        applicationdocument: data.application_document
                    });
                })
                .catch((error) => {
                    console.error('Error fetching entry:', error);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdateClick = async (e) => {
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
        };

        try {
            const response = await axios.put(`http://${ip}:8000/edit/`, data);
            console.log('Response:', response);
            alert('Entry updated successfully!');
            window.location.reload();
        } catch (error) {
            console.error('Error updating entry:', error);
        }

    };

    return (
        <>
            <div className="newentry-container">
                <h1 className="newentry-heading">EDIT ENTRY</h1>

                <div className="edit-search-container">
                    <div className="edit-search">
                        <label htmlFor="id">ID</label>
                        <input
                            type="number"
                            name="id"
                            className="input"
                            value={searchQuery.id}
                            onChange={(e) => setSearchQuery({ ...searchQuery, id: e.target.value })}
                            placeholder="ID"
                        />
                    </div>

                    <div className="edit-search">
                        <label htmlFor="rollnumber">ROLL NUMBER</label>
                        <input
                            type="text"
                            name="rollnumber"
                            className="input"
                            value={searchQuery.rollnumber}
                            onChange={(e) => setSearchQuery({ ...searchQuery, rollnumber: e.target.value })}
                            placeholder="Roll Number"
                        />
                    </div>

                    <div className="edit-search">
                        <label htmlFor="name">NAME</label>
                        <input
                            type="text"
                            name="name"
                            className="input"
                            value={searchQuery.name}
                            onChange={(e) => setSearchQuery({ ...searchQuery, name: e.target.value })}
                            placeholder="Name"
                        />
                    </div>

                    {filteredItems &&
                        <div className="edit-search-result-container">
                            {filteredItems.map((item) => (
                                <Link to={`/${item.id}`} key={item.id} className="links" onClick={() => setSearchQuery({ id: '', rollnumber: '', name: '' })}>
                                    <div className="edit-search-label">{item.id}</div>
                                    <div className="edit-search-label">{item.roll_number}</div>
                                    <div className="edit-search-label">{item.name}</div>
                                </Link>
                            ))}
                        </div>
                    }
                </div>

                <form className="input-container">
                    <div className="toplabel">
                        <label htmlFor="id">ID: {formData.id}</label>
                    </div>
                    <div className="label">
                        <label htmlFor="rollnumber">ROLL NUMBER</label>
                        <input
                            type="text"
                            name="rollnumber"
                            className="input"
                            value={formData.rollnumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="label">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            name="date"
                            className="input"
                            value={formData.date}  
                            onChange={handleChange}
                        />
                    </div>
                    <div className="label">
                        <label htmlFor="name">NAME</label>
                        <input
                            type="text"
                            name="name"
                            className="input"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="label">
                        <label htmlFor="department">DEPARTMENT</label>
                        <select name="department" id="department" className="input" value={formData.department} onChange={handleChange}>
                            <option value="">Select Department</option>
                            {Departments.map((department) => (
                                <option key={department} value={department}>{department}</option>
                            ))}
                        </select>
                    </div>
                    <div className="label">
                        <label htmlFor="subject">SUBJECT</label>
                        <input
                            type="text"
                            name="subject"
                            className="input"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="label">
                        <label htmlFor="remark">REMARK</label>
                        <textarea
                            type="text"
                            name="remark"
                            className="inputarea"
                            value={formData.remark}
                            onChange={handleChange}
                        />
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
                        <button className="create" onClick={handleUpdateClick}>
                            <div>Update</div>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
