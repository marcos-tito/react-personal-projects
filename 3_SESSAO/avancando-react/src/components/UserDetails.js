const UserDetails = () => {

    const users = [
        {"id":1,"name":"John","age":15,"job":"Student"},
        {"id":2,"name":"Maria","age":18,"job":"Administrative"},
        {"id":3,"name":"Sophia","age":21,"job":"Teacher"},
        {"id":4,"name":"Katie","age":12,"job":"PMO"},
        {"id":5,"name":"Arobo","age":31,"job":"Developer"}        
    ]

    return (
        <div>
            <ul>
                {
                    users.map((user) => {                        
                        return <li key={user.id}>{user.name} - {user.age} - {user.job} {user.age >= 18 && " - Can drive" }</li>
                    })
                }
                
            </ul>
        </div>
    );
}

export default UserDetails;