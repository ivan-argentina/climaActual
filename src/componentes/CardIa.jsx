import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function CardId() {
  const [titulo, setTitulo] = useState("Prueba");
  const [ciudad, setCiudad] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  function handleClick() {
    setTitulo("Pronostico del Tiempo");
    console.log(titulo);
  }

  return (
    <Card>
      <Container
        maxWidth="xs"
        sx={{ mt: 2 }}
      >
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
        >
          Clima Actual
        </Typography>
        <Box
          sx={{ display: "grid", gap: 2 }}
          component="form"
          autoComplete="off"
          onSubmit={onSubmit}
          variant="outlined"
          size="small"
          required
          fullWitch
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        >
          <TextField
            id="city"
            label="Ciudad"
          />
          <LoadingButton
            type="submit"
            variant="contained"
          ></LoadingButton>
        </Box>
      </Container>
      <Button
        variant="contained"
        onClick={handleClick}
      >
        Buscar
      </Button>

      <CardMedia
        component="img"
        image="https://via.placeholder.com/1000X2000"
        height="200"
        alt="Una Descripcion"
      />

      <CardContent>
        <Typography variant="h5">{titulo}</Typography>
        <Typography
          component="p"
          variant="body2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          ratione nulla animi dicta neque itaque amet? Quisquam, odio magnam,
          pariatur reprehenderit fugiat quos iste quidem architecto dolorum
          deleniti possimus accusamus.
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
