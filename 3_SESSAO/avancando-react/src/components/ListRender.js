import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["Marcos", "Tito", "Rodrigues", "Amparo"]);

    const [users, setUsers] = useState([
        {id:1, name:"Marcos", age:25},
        {id:2, name:"Tito", age:33},
        {id:3, name:"Rodrigues", age:54},
        {id:4, name:"Amparo", age:15}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * users.length)
        
        setUsers((prevUsers) => {
            console.log(prevUsers);

            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
    

    return (
        <div>
            <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            )) }
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name + ' - '+ user.age}</li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Delete random user</button>

        </div>
    );

}
export default ListRender