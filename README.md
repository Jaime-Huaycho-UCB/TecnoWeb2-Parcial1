# API de Gestión de Usuarios, Productos y Contadores

## 📌 Descripción
Esta API proporciona endpoints para gestionar usuarios y productos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Además, cuenta con un endpoint adicional para obtener el número total de usuarios y productos registrados.

La API está desarrollada con **Node.js** y **Express**, y utiliza **MongoDB** como base de datos, manejada a través de **Mongoose**.

---

## 🚀 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```sh
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Configurar variables de entorno
Crear un archivo `.env` en la raíz del proyecto con la conexión a MongoDB, por ejemplo:
```
MONGODB_URI=mongodb://localhost:27017/mi_base_de_datos
```

### 4️⃣ Iniciar el servidor
Ejecutar el siguiente comando para iniciar la API:
```sh
node index.js
```
O si tienes **nodemon** instalado:
```sh
nodemon index.js
```

---

## 📂 Estructura del Proyecto

```
📂 proyecto
 ┣ 📂 src
 ┃ ┣ 📂 Usuario
 ┃ ┃ ┣ 📜 Usuario.controller.js  # Controlador de usuarios
 ┃ ┃ ┣ 📜 Usuario.service.js      # Lógica de negocio de usuarios
 ┃ ┃ ┣ 📜 Usuario.schema.js       # Modelo de datos de usuario
 ┃ ┃ ┣ 📜 Usuario.routes.js       # Rutas de usuarios
 ┃ ┣ 📂 Producto
 ┃ ┃ ┣ 📜 Producto.controller.js  # Controlador de productos
 ┃ ┃ ┣ 📜 Producto.service.js      # Lógica de negocio de productos
 ┃ ┃ ┣ 📜 Producto.schema.js       # Modelo de datos de productos
 ┃ ┃ ┣ 📜 Producto.routes.js       # Rutas de productos
 ┃ ┣ 📂 Contador
 ┃ ┃ ┣ 📜 Contador.controller.js  # Controlador de contadores
 ┃ ┃ ┣ 📜 Contador.service.js      # Lógica de negocio de contadores
 ┃ ┃ ┣ 📜 Contador.routes.js       # Ruta de contadores
 ┃ ┣ 📂 Util
 ┃ ┃ ┣ 📜 HttpError.js             # Manejador de errores
 ┣ 📜 index.js                     # Punto de entrada de la aplicación
 ┣ 📜 package.json
 ┣ 📜 .env
 ┣ 📜 README.md
```

---

## 🔗 Endpoints Disponibles

### 🧑‍💼 **Usuarios**
| Método | Endpoint     | Descripción |
|--------|-------------|-------------|
| **GET**    | `/usuarios`      | Obtiene la lista de usuarios registrados |
| **POST**   | `/usuarios`      | Crea un nuevo usuario |
| **PUT**    | `/usuarios`      | Edita un usuario existente |
| **DELETE** | `/usuarios/:id`  | Elimina un usuario por ID |

#### 🔹 Ejemplo de Respuesta - `GET /usuarios`
```json
{
  "code": 200,
  "usuarios": [
    {
      "_id": "65a4f98d3b6c4c001f4e52d9",
      "nombre": "Juan Pérez",
      "edad": 30,
      "ocupacion": "Ingeniero"
    }
  ]
}
```

#### 🔹 Ejemplo de Petición - `POST /usuarios`
```json
{
  "nombre": "Ana López",
  "edad": 28,
  "ocupacion": "Diseñadora"
}
```
#### 🔹 Respuesta Esperada
```json
{
  "code": 201,
  "mensaje": "El usuario se registró exitosamente",
  "usuario": {
    "_id": "65a4f98d3b6c4c001f4e52da",
    "nombre": "Ana López",
    "edad": 28,
    "ocupacion": "Diseñadora"
  }
}
```

---

### 📦 **Productos**
| Método | Endpoint     | Descripción |
|--------|-------------|-------------|
| **GET**    | `/productos`      | Obtiene la lista de productos registrados |
| **POST**   | `/productos`      | Crea un nuevo producto |
| **PUT**    | `/productos`      | Edita un producto existente |
| **DELETE** | `/productos/:id`  | Elimina un producto por ID |

#### 🔹 Ejemplo de Respuesta - `GET /productos`
```json
{
  "code": 200,
  "productos": [
    {
      "_id": "65a4f9cd3b6c4c001f4e52db",
      "nombre": "Laptop HP",
      "precio": 1200,
      "categoria": "Electrónica"
    }
  ]
}
```

#### 🔹 Ejemplo de Petición - `POST /productos`
```json
{
  "nombre": "Celular Samsung",
  "precio": 800,
  "categoria": "Electrónica"
}
```
#### 🔹 Respuesta Esperada
```json
{
  "code": 201,
  "mensaje": "El producto se registró exitosamente",
  "producto": {
    "_id": "65a4f9cd3b6c4c001f4e52dc",
    "nombre": "Celular Samsung",
    "precio": 800,
    "categoria": "Electrónica"
  }
}
```

---

### 📊 **Contadores**
| Método | Endpoint     | Descripción |
|--------|-------------|-------------|
| **GET** | `/contadores` | Obtiene el número total de usuarios y productos |

#### 🔹 Ejemplo de Respuesta - `GET /contadores`
```json
{
  "code": 200,
  "usuarios": 10,
  "productos": 5
}
```

---

## 🚨 Manejador de Errores
La API utiliza `HttpError.js` para manejar errores personalizados. Si un recurso no es encontrado o hay un error en la solicitud, se devuelve un código de error junto con un mensaje descriptivo.

Ejemplo de error al obtener usuarios cuando no hay registros:
```json
{
  "code": 400,
  "mensaje": "No hay usuarios registrados"
}
```

---

## 📢 Contribución
Si deseas contribuir al desarrollo de esta API:
1. Haz un **fork** del repositorio.
2. Crea una nueva rama con tu funcionalidad: `git checkout -b mi-nueva-funcion`
3. Realiza cambios y confirma: `git commit -m "Agregada nueva funcionalidad"`
4. Envía un **pull request**.

---

## ✨ Autor
- **Tu Nombre**  
- 📧 Contacto: [tuemail@example.com](mailto:tuemail@example.com)

---

¡Gracias por usar esta API! 🚀
