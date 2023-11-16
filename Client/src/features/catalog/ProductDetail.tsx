import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5254/api/Products/${id}`)
      .then(({ data }) => setProduct(data))
      .catch((err) => console.log(err))
      .finally(() => setTimeout(() => setLoading(false), 500));
  }, [id]);

  if (loading) return <h3>Loading ....</h3>;

  if (!product) return <h3>Product not found</h3>;

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <img
          src={product.pictureUrl}
          alt={product.name}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          ${(product.price / 100).toFixed()}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{product.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell>{product.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quantity in stock</TableCell>
                <TableCell>{product.quantityInStock}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
