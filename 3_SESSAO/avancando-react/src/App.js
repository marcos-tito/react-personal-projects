import './App.css';
import City from './assets/city.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender';
import PropsComponent from './components/PropsComponent';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import MessageFunction from './components/MessageFunction';
import UserDetails from './components/UserDetails';

function App() {
  const [userName] = useState("Marcos Tito")

  const cars = [
    {id: 1, brand:"Ferrari", km: 0, color: "Vermelha", newCar: true},
    {id: 2, brand:"Fiat", km: 100000, color: "Preto", newCar: false},
    {id: 3, brand:"Ford", km: 50000, color: "Branco", newCar: false},
    {id: 4, brand:"Honda", km: 0, color: "Verde", newCar: true},
    {id: 5, brand:"Hyundae", km: 56871, color: "Roxo", newCar: false},
    {id: 6, brand:"Kia", km: 0, color: "Prata", newCar: true},
  ]

  function showMessage() {
    console.log("Evento do componente pai.")
  }


  const [message, setMessage] = useState("")


  const handleMessage = (message) => {
    setMessage(message)
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>    
      <img src="/img1.jpg" alt="Paisagem" />

      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/** Usando props */}
      <PropsComponent name={userName}/>

      {/** destructing props */}
      <CarDetails brand="VolksWagem" km={100000} color="Black" newCar={false} />
      <CarDetails brand="Toyota" km={0} color="Amarelo" newCar={true}/>
      <CarDetails brand="VolksWagem" km={0} color="Verde" newCar={true}/>
      <CarDetails brand="VolksWagem" km={10000} color="Roxo" newCar={false}/>
      <CarDetails brand="VolksWagem" km={500} color="Vermelho" newCar={false}/>


      {/** destructing props usando loop de objetos */}
      {cars.map((car) => {
       return (<CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>)
      })

      }

      {/**Children */}
      <Container myValue="valor">
        <p>E este é o conteudo children</p>
      </Container>

      {/** executar funcao */}
      <ExecuteFunction myFunction={showMessage}></ExecuteFunction>

      {/**State lift */}
      <Message message={message}></Message>
      <MessageFunction handleMessage={handleMessage}/>

      <UserDetails/>
    
    </div>
  );
}

export default App;
