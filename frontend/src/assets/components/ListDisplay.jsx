import React,{useState , useEffect} from "react";
import ListItem from "./ListLabel";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Itemdisplay from "./NewItemDisplay";
import axios from "axios";
import ScrollToTop from "./ScrollToTop";
import { format } from 'date-fns';
import ip from "../../ip";

export default function Showitem(){
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setdata] = useState(null)
    const [filteredItems, setFilteredItems] = useState([]);

    ScrollToTop();

    useEffect(() => {
        axios.get(`https://${ip}/`)
        .then((response) => {
            console.log(response.data);
            setdata(response.data);
            setFilteredItems(response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query === '') {
            setFilteredItems(data);
        } else {
            setFilteredItems(
                data.filter(item =>
                    (item.id && item.id.toString().includes(query)) ||
                    (item.name && item.name.toLowerCase().includes(query.toLowerCase())) ||
                    (item.roll_number && item.roll_number.toLowerCase().includes(query.toLowerCase())) ||
                    (item.time && item.time.toLowerCase().includes(query.toLowerCase())) ||
                    (item.department && item.department.toLowerCase().includes(query.toLowerCase())) ||
                    (item.subject && item.subject.toLowerCase().includes(query.toLowerCase())) ||
                    (item.remarks && item.remarks.toLowerCase().includes(query.toLowerCase())) ||
                    (item.application_document && item.application_document.toLowerCase().includes(query.toLowerCase())) ||
                    item.id.toString().includes(query)
                )
            );
        }
    };    

    const Display = filteredItems.map((item)=>(
        <Link to={{ pathname: `/${item.id}`}} key={item.id} className="links">
            <ListItem
                id={item.id}
                roll={item.roll_number}
                date={format(new Date(item.time), 'dd/MM/yyyy')}
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