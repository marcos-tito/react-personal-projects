const CarDetails = ({brand, km, color, newCar}) => {

    return (
        <div>
            <h2>Detalhes do Carro: </h2>
            <ul>
                <li key={1}>Marca: {brand}</li>
                <li key={2}>Km: {km}</li>
                <li key={3}>Cor: {color}</li>
            </ul>

            {newCar && (
                <p>Este carro é novo.</p>
            )}
        </div>
    )
}

export default CarDetails