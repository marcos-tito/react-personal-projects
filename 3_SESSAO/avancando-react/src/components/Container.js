const Container = ({children, myValue}) => {

    return (
        <div>
            {children}
            <p>O valor é {myValue}</p>
        </div>
    );
}

export default Container