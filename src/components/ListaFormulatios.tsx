// src/components/FormList.tsx
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";

const FormList = () => {
  const forms = useSelector((state: RootState) => state.form.forms);

  return (
    <Box sx={{ marginTop: 4, mx: "auto", my: 5 }} maxWidth="md">
      <Typography variant="h5" gutterBottom>
        Lista de Formularios Enviados
      </Typography>
      {forms.length > 0 ? (
        <List>
          {forms.map((form, index) => (
            <ListItem key={index} sx={{ borderBottom: "1px solid #ccc" }}>
              <ListItemText
                primary={`Nombre: ${form.name}`}
                secondary={`Email: ${form.email} - Mensaje: ${form.message}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">
          No hay formularios enviados aún.
        </Typography>
      )}
    </Box>
  );
};

export default FormList;
