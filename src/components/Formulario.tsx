import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addForm } from "../redux/FormSlice";
import { UsersReviewInstance } from "../Constants";
import ValidationForm from "../helpers/ValidationForm";
import IForm from "../Interfaces/IForm";
import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";

const Formulario = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values: IForm) => {
    try {
      await UsersReviewInstance.post("", values);
      dispatch(addForm(values));
      alert("Formulario enviado con éxito");
    } catch (error) {
      alert("Hubo un error al enviar el formulario");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 4,
          padding: 3,
          bgcolor: "background.paper",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            mb: 3,
          }}
        >
          Formulario con Redux, Formik y Axios
        </Typography>

        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={ValidationForm}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              {/* Campo Nombre */}
              <Box sx={{ marginBottom: 2 }}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Nombre"
                  variant="outlined"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  InputProps={{
                    style: { borderRadius: "24px" },
                    startAdornment: (
                      <InputAdornment position="start">👤</InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Campo Correo */}
              <Box sx={{ marginBottom: 2 }}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Correo Electrónico"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  InputProps={{
                    style: { borderRadius: "24px" },
                    startAdornment: (
                      <InputAdornment position="start">📧</InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Campo Mensaje */}
              <Box sx={{ marginBottom: 2 }}>
                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  label="Mensaje"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                  InputProps={{
                    style: { borderRadius: "24px" },
                    startAdornment: (
                      <InputAdornment position="start">📝</InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Botón Enviar */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ borderRadius: "24px", padding: "10px" }}
              >
                Enviar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Formulario;
