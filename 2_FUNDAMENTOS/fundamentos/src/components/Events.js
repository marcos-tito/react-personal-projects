const Events = () => {

    const handleOnClick = (e) => {
        console.log(e);
        console.log("Clicou no botão.")
    }

    const renderSomething = (x) => {
        if(x)  {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando aquilo!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleOnClick}>Clique aqui</button>
            </div>
            <div>
                <button onClick={()=>console.log("Clicou aqui também.")}>Clique aqui também.</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );

}

export default Events;