import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Paper,
  Stack,
  Alert,
} from "@mui/material";

export default function ProfileComponent() {
  const [perfil, setPerfil] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaPassword, setNuevaPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const fetchPerfil = async () => {
    const token = localStorage.getItem("access_token");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/mi-perfil/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("No se pudo cargar el perfil");

      const data = await response.json();
      setPerfil(data);
      setNuevoNombre(data.nombre);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleActualizar = async () => {
    const token = localStorage.getItem("access_token");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/mi-perfil/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nombre: nuevoNombre,
          password: nuevaPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.detail || "Error al actualizar");

      setMensaje("Perfil actualizado correctamente");
      setNuevaPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPerfil();
  }, []);

  if (!perfil) return null;

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 4 }}>
      <Paper sx={{ padding: 4 }}>
        <Stack alignItems="center" spacing={2}>
          <Avatar sx={{ bgcolor: "secondary.main", width: 64, height: 64 }}>
            {perfil.nombre.charAt(0).toUpperCase()}
          </Avatar>
          <Typography variant="h5">Hola, {nuevoNombre} 👋</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Puedes actualizar tu perfil aquí
          </Typography>
        </Stack>

        {mensaje && <Alert severity="success">{mensaje}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          fullWidth
          margin="normal"
          label="Nuevo nombre"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Nueva contraseña"
          value={nuevaPassword}
          onChange={(e) => setNuevaPassword(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleActualizar}
        >
          Actualizar perfil
        </Button>
      </Paper>
    </Box>
  );
}
