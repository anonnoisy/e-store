import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

interface Props {
  products: Product[];
  addProduct?: () => void;
}

export default function Catalog(props: Props) {
  return (
    <>
      <ProductList products={props.products} />
      {props.addProduct && (
        <Button type="button" variant="contained" onClick={props.addProduct}>
          Add Product
        </Button>
      )}
    </>
  );
}
