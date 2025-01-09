import * as Yup from "yup";

export default Yup.object({
  name: Yup.string()
    .required("Nombre es obligatorio")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Correo electrónico es obligatorio"),
  message: Yup.string()
    .required("Mensaje es obligatorio")
    .min(10, "El mensaje debe tener al menos 10 caracteres"),
});
