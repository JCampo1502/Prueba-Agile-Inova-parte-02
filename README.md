# README.md

## Descripción del Proyecto

Este proyecto consiste en un formulario funcional desarrollado con **React.js**, utilizando tecnologías como **Formik** para la gestión de formularios, **Yup** para validaciones, **Material-UI** (MUI) para el diseño visual, y **Redux Toolkit** para el manejo del estado global. El formulario permite a los usuarios ingresar su nombre, correo electrónico y un mensaje, validando los datos antes de enviarlos a una API ficticia gestionada con **Axios**.

Además, los datos de los formularios enviados se almacenan en el estado global de Redux y se despliegan en una lista, proporcionando una visión clara de los formularios registrados.

## Optimización para un Volumen Masivo de Formularios

Si se esperara que este sistema maneje un volumen masivo de formularios enviados, las siguientes optimizaciones serían clave:

- Un **backend** que se encargue de la pesada carga de procesamiento.
- Uso de bases de datos escalables como **MongoDB** para almacenar los formularios.
- Implementar un sistema de **cacheo** para acelerar el acceso a información frecuente.
- Incluir **paginación** para optimizar la visualización de los datos en la interfaz.

Con estas mejoras, el sistema estaría preparado para manejar grandes volúmenes de formularios de manera eficiente.

## Capturas de Funcionamiento

1. **Vista del Formulario**

2. **Lista de Formularios Enviados**

## Instrucciones para Ejecutar la Aplicación

1. Asegúrate de tener **Node.js** y **npm** instalados en tu sistema.
2. Instala las dependencias del proyecto ejecutando el comando:
   ```bash
   npm install
   ```
3. Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:
   ```bash
   npm run dev
   ```
4. Abre tu navegador y accede a la URL proporcionada por Vite para ver la aplicación en funcionamiento.
