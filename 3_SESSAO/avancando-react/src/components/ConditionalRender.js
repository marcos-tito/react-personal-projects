import { useState } from "react"

const ConditionalRender = () => {
    const [x, setX] = useState(false);
 
    const [name, setName] = useState("Jorge")

    return (
        <div>
            <button onClick={()=>  setX(!x)}>Muda Valor do X</button>
            <div>Isso será exibido?</div>
            {x && <p> X é true</p>}
            {!x && <p> X é false</p>}

            <h1>If ternário</h1>
            <button onClick={() => setName("João")}>Altera Nome</button>
            {name === "João" ? (
                <div>
                    <p>O nome é João</p>
                </div>

            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}

        </div>
    )
}

export default ConditionalRender