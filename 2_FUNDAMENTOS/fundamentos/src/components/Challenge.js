const Challenge = () => {
    const valueA = 1;
    const valueB = 2;

    const plusValues = () => {
        return console.log(valueA + valueB);            
    }

    return (
        <div>
            <h1>{valueA}</h1> 
            <h1>{valueB}</h1>
            <button onClick={plusValues}>Challenge</button>            
        </div>

    );
}

export default Challenge