import { Link } from "react-router-dom"
// import ProductCard from "../components/product-card"
import ProductCard from "../components/product-card";

const Home = () => {

  const addToCardHandler = ()=> {};

  return (
    <div className="home">
      <section>

      </section>


      <h1>Latest Products

        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard 
          productId="adacasca" 
          name="Macbook" 
          price={43242} 
          stock={321}  
          handler={addToCardHandler} 
          photo="https://m.media-amazon.com/images/I/71-D1xCuVwL._SL1500_.jpg" />
      </main>
    </div>
  )
}

export default Home
