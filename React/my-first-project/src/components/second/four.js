import {useState} from 'react';
const Fourth =() =>{
    const [Address, setAddress] = useState("Pune");
    return(
        <div>
            Address: {Address}
            <button onClick={()=> setAddress("Kolhapur")}>Change Address</button>
        </div>
    )
}

export default Fourth;