import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { authContext } from "../../Contexts/AuthContext";
import { productContext } from "../../Contexts/ProductsContext";

const AddProduct = () => {
  const { user } = useContext(authContext);
const { addProducts, error, categories, getCategories } = 
    useContext(productContext);

  useEffect(() => {
    getCategories();
  }, []);
//   console.log(categories);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", product.title);
    newProduct.append("description", product.description);
    newProduct.append("price", product.price);
    newProduct.append("image", product.image);
    newProduct.append('category', product.category)

    addProducts(newProduct);
  }
 
  return (
    <div>
      {" "}
      {user === "admin@admin.com"? (
        <Box
          sx={{
            width: "40vw",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ m: 2 }}>
            Add new product
          </Typography>
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Название"
            variant="outlined"
            fullWidth
            name="title"
            value={product.name}
            onChange={handleInp}
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Описание"
            variant="outlined"
            fullWidth
            name="description"
            value={product.description}
            onChange={handleInp}
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="price"
            variant="outlined"
            fullWidth
            name="price"
            value={product.price}
            onChange={handleInp}
          />
        
          
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="сфеупщкн"
              onChange={handleInp}
              value={product.category}
              name="category"
            >
              {categories?.map((item) => (
                <MenuItem value={item.id} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          

          <input
            type="file"
            // hidden
            name="image"
          />

          <Button
            sx={{
              m: 1,
            }}
            variant="outlined"
            fullWidth
            size="large"
            onClick={handleSave}
          >
            ADD PRODUCT
          </Button>
          {error ? (
            <Alert severity="error">{error.map((item) => item)}</Alert>
          ) : null}
        </Box>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default AddProduct;
