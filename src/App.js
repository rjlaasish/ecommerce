import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import products from './data.json';
import { useState,useEffect } from 'react';
function App() {

  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setData([...products]);
  }, [])



  const onAdd = (product) => {
    console.log(product)
    if (cartItems.length < 5) {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
          cartItems.map((x) =>
              x.id === product.id ? {...exist, qty: exist.qty + 1} : x
          )
      );
      const updateData = data.map(mydata => {
        if (mydata.id === product.id) {
          mydata.stock = mydata.stock - 1
        }
        return mydata;
      })
      setData([...updateData])
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
      const updateData = data.map(mydata => {
        if (mydata.id === product.id) {
          mydata.stock = mydata.stock - 1
        }
        return mydata;
      })
      setData([...updateData])
    }
  }else{
      alert("There is already 5 different genre items in cart. Please checkout it first!")
    }
  };
  console.log(cartItems)
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const getSearch = e => {
    e.preventDefault();
    const searchedData = [];
    if (search.length !== '') {
      data.map(searchdata => {
        if (searchdata.genre.toLowerCase().includes(search.toLowerCase())) {
          searchedData.push(searchdata)
        }
      })
      setData([...searchedData]);
    }
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }


  return (
    <div className="App">

      <Header countCartItems={cartItems.length} getSearch={getSearch} search={search} updateSearch={updateSearch}></Header>

      <div className="row">
        <Main products={data} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
