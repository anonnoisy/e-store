import axios from "axios";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5254/api/products")
      .then(({ data }) => setProducts(data));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
