import React,{useState , useEffect} from "react";
import ListItem from "./listlabel";
import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
import Itemdisplay from "./newitemdisplay";
import axios from "axios";

export default function Showitem({state}){
    const [searchQuery, setSearchQuery] = useState('');
    const [listdata, setListdata] = useState(null)
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/${state}/`)
        .then((response) => {
            console.log(response.data);
            setListdata(response.data);
            setFilteredItems(response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred');
        });
    }, [state]);

    if (!listdata) {
        return <div>Loading...</div>;
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query === '') {
            setFilteredItems(listdata);
        } else {
            setFilteredItems(
                listdata.filter(item => 
                    item.name.toLowerCase().includes(query.toLowerCase()) ||
                    item.roll_number.toLowerCase().includes(query.toLowerCase()) ||
                    item.date.toLowerCase().includes(query.toLowerCase()) ||
                    item.department.toLowerCase().includes(query.toLowerCase()) ||
                    item.subject.toLowerCase().includes(query.toLowerCase()) ||
                    item.remarks.toLowerCase().includes(query.toLowerCase())||
                    item.application_document.toLowerCase().includes(query.toLowerCase())||
                    item.id.toString().includes(query)
                )
            );
        }
    };

    const Display = filteredItems.map((item)=>(
        <Link to={{ pathname: `/${item.id}` , state: { item }}} key={item.id} className="links">
            <ListItem
                id={item.id}
                roll={item.roll_number}
                date={item.date}
                name={item.name}
                department={item.department}
                subject={item.subject}
                remarks={item.remarks}
                app_doc={item.application_document}
            />  
        </Link>  
    ));

    return (
        <div className="search-and-list">
            <SearchBar onSearch={handleSearch} />
            <Itemdisplay />
            <div className="list-container">
                {Display}
            </div>
        </div>
    );
}