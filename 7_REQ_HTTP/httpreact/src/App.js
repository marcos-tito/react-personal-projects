
import './App.css';

import { useState } from 'react'

// 4 - Custom Hook
import { useFetch } from './hooks/useFetch';

function App() {

  const [products, setProducts] = useState([]);

  const baseUrl = 'http://localhost:3000/products';

  // 4 - Custom Hook

  const { data: items, httpConfig, loading, error } = useFetch(baseUrl)

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");




  //1 -Fetching data
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(baseUrl);

  //     const data = await res.json();
  //     setProducts(data);
  //   };

  //   fetchData();
  // }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(baseUrl, {
    //   method: "POST",
    //   headers:{
    //     "Content-type":"application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // //3 - Dynamic Reload
    // const addedProduct = await res.json();
    // setProducts((actualProducts) => [
    //   ...actualProducts,
    //   addedProduct
    // ]);

    // 5 - refatorando POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados....</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
        </ul>
      )}


      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 7 - state de loading no post */}
          {!loading && <input type='submit' value="Criar"></input>}
          {loading && <input type='submit' disabled value="Aguarde"></input>}
        </form>
      </div>



    </div>
  );
}

export default App;
