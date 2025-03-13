# API de Gestión de Usuarios, Productos y Contadores

## 📌 Descripción
Esta API permite gestionar usuarios y productos con operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Además, proporciona un endpoint para contar los registros de la base de datos.

Está desarrollada con **Node.js** y **Express**, y utiliza **MongoDB** con **Mongoose**.

---

## 🚀 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```sh
git https://github.com/Jaime-Huaycho-UCB/TecnoWeb2-Parcial1.git
cd TecnoWeb2-Parcial1
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Configurar variables de entorno
Crear un archivo `.env` en la raíz con la conexión a MongoDB:
```
MONGODB_URI=mongodb://localhost:27017/mi_base_de_datos
```

### 4️⃣ Iniciar el servidor
```sh
node index.js
```
O con **nodemon**:
```sh
nodemon index.js
```

---

## 📂 Estructura del Proyecto

```
📂 proyecto
 ┣ 📂 src
 ┃ ┣ 📂 Usuario
 ┃ ┣ 📂 Producto
 ┃ ┣ 📂 Contador
 ┃ ┣ 📂 Util
 ┣ 📜 index.js
 ┣ 📜 package.json
 ┣ 📜 .env
 ┣ 📜 README.md
```

---

## 🔗 Endpoints Disponibles

### 🧑‍💼 **Usuarios**
| Método  | Endpoint       | Descripción |
|---------|---------------|-------------|
| **GET**  | `/usuarios`      | Obtiene todos los usuarios |
| **POST** | `/usuarios`      | Crea un nuevo usuario |
| **PUT**  | `/usuarios/:id`  | Edita un usuario por ID |
| **DELETE** | `/usuarios/:id` | Elimina un usuario por ID |

#### 📌 `GET /usuarios`
##### 🔹 Respuesta:
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

#### 📌 `POST /usuarios`
##### 🔹 Petición:
```json
{
  "nombre": "Ana López",
  "edad": 28,
  "ocupacion": "Diseñadora"
}
```
##### 🔹 Respuesta:
```json
{
  "code": 201,
  "mensaje": "Usuario registrado",
  "usuario": {
    "_id": "65a4f98d3b6c4c001f4e52da",
    "nombre": "Ana López",
    "edad": 28,
    "ocupacion": "Diseñadora"
  }
}
```

#### 📌 `PUT /usuarios/:id`
##### 🔹 Petición:
```json
{
  "nombre": "Ana López",
  "edad": 29,
  "ocupacion": "Arquitecta"
}
```
##### 🔹 Respuesta:
```json
{
  "code": 200,
  "mensaje": "Usuario actualizado",
  "usuario": {
    "_id": "65a4f98d3b6c4c001f4e52da",
    "nombre": "Ana López",
    "edad": 29,
    "ocupacion": "Arquitecta"
  }
}
```

#### 📌 `DELETE /usuarios/:id`
##### 🔹 Respuesta:
```json
{
  "code": 200,
  "mensaje": "Usuario eliminado correctamente"
}
```

---

### 📦 **Productos**
| Método  | Endpoint         | Descripción |
|---------|-----------------|-------------|
| **GET**  | `/productos`      | Obtiene todos los productos |
| **POST** | `/productos`      | Crea un nuevo producto |
| **PUT**  | `/productos/:id`  | Edita un producto por ID |
| **DELETE** | `/productos/:id` | Elimina un producto por ID |

#### 📌 `GET /productos`
##### 🔹 Respuesta:
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

#### 📌 `POST /productos`
##### 🔹 Petición:
```json
{
  "nombre": "Celular Samsung",
  "precio": 800,
  "categoria": "Electrónica"
}
```
##### 🔹 Respuesta:
```json
{
  "code": 201,
  "mensaje": "Producto registrado",
  "producto": {
    "_id": "65a4f9cd3b6c4c001f4e52dc",
    "nombre": "Celular Samsung",
    "precio": 800,
    "categoria": "Electrónica"
  }
}
```

#### 📌 `PUT /productos/:id`
##### 🔹 Petición:
```json
{
  "nombre": "Celular Samsung Galaxy",
  "precio": 750,
  "categoria": "Electrónica"
}
```
##### 🔹 Respuesta:
```json
{
  "code": 200,
  "mensaje": "Producto actualizado",
  "producto": {
    "_id": "65a4f9cd3b6c4c001f4e52dc",
    "nombre": "Celular Samsung Galaxy",
    "precio": 750,
    "categoria": "Electrónica"
  }
}
```

#### 📌 `DELETE /productos/:id`
##### 🔹 Respuesta:
```json
{
  "code": 200,
  "mensaje": "Producto eliminado correctamente"
}
```

---

### 📊 **Contadores**
| Método  | Endpoint       | Descripción |
|---------|---------------|-------------|
| **GET** | `/contadores` | Obtiene el número total de usuarios y productos |

#### 📌 `GET /contadores`
##### 🔹 Respuesta:
```json
{
  "code": 200,
  "usuarios": 10,
  "productos": 5
}
```

---

## 🚨 Manejador de Errores
Si un recurso no existe o hay errores en la solicitud, se devuelve un código con un mensaje descriptivo.

#### 📌 Ejemplo de error cuando un usuario no existe:
```json
{
  "code": 404,
  "mensaje": "Usuario no encontrado"
}
```

---