import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import ProductCard from './components/productCard';
import ProductList from './components/productList';
export interface categoryDetailsProps {
  categoryDetails: string;
}
export interface NavbarProps {
  navDetails: [];
}
export interface DetailsProps {
  details: [];
}
// for product card
export interface CardProps {
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: string;
  };
}

const App: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [da] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchMovies404();
  }, []);
  console.log(data);

  async function fetchMovies404() {
    setLoading(true);
    await fetch('https:fakestoreapi.com/products')
      .then((res) => res.json())
      .then((resp) => setData(resp));
    setLoading(false);
  }

  data.map((itm: any) => {
    // return <div key = {index}>{itm.category}</div>
    return da.push(itm.category);
  });
  return (
    <>
      <div className="App">
        {}
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <Router>
            <Routes>
              {data.map((itm: any, i: number) => {
                return (
                  <Route
                    key={i}
                    path={`/${itm.category.replace(/ /g, '')}/${itm.id}`}
                    element={
                      <ProductCard
                        title={itm.title}
                        price={itm.price}
                        description={itm.description}
                        category={itm.category}
                        image={itm.image}
                        rating={itm.rating}
                      />
                    }
                  />
                );
              })}
              <Route
                path="/"
                element={
                  <Navbar
                    // da state theke unique value nisi
                    navDetails={da.filter(
                      (v: string, i: number, a: any) => a.indexOf(v) === i
                    )}
                  />
                }
              />
              {da.map((category: string, i: number) => {
                return (
                  <Route
                    key={i}
                    path={`/${category.replace(/ /g, '')}`}
                    element={
                      <ProductList details={data} categoryDetails={category} />
                    }
                  />
                );
              })}
            </Routes>
          </Router>
        )}
      </div>
    </>
  );
};
export default App;
