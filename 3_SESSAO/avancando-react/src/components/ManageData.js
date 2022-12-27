import {useState} from 'react'

const ManageData = () => {

    const [number, setNumber] = useState(5);

    return (
        <div>
            <p>{number}</p>
            <button onClick={() => setNumber(number+5)}>Soma</button>
        </div>

    );
}

export default ManageData