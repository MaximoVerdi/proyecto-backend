# Sneakers Manager - Mongoose + TypeScript

Este proyecto es un sistema básico para gestionar productos del tipo _Sneakers_ utilizando **MongoDB** con **Mongoose** y **TypeScript**. Permite crear, buscar, actualizar y eliminar registros en una base de datos MongoDB.

## 📦 Requisitos

- Node.js >= 16
- MongoDB
- Archivo `.env` con las variables necesarias

## 📁 Estructura del proyecto

```
.
├── index.ts
├── package.json
├── .env
└── README.md
```

## ⚙️ Instalación

1. Cloná el repositorio:

```bash
git clone https://github.com/tuusuario/sneakers-manager.git
cd sneakers-manager
```

2. Instalá las dependencias:

```bash
npm install
```

3. Configurá las variables de entorno:

Creá un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
URI_DB=tu_uri_de_mongodb
```

> Por ejemplo:  
> `mongodb+srv://usuario:password@cluster.mongodb.net/mydb?retryWrites=true&w=majority`

4. Ejecutá el proyecto:

```bash
npx ts-node index.ts
```

> Asegurate de tener TypeScript y ts-node instalados globalmente o como dependencia del proyecto.

---

## 🧠 Funcionalidades

### Conexión a la base de datos

La función `connectDB()` conecta tu aplicación con MongoDB utilizando la URI que se encuentra en `.env`.

---

### Crear Sneaker

```ts
createSneaker({
  model: "Jordan 1",
  color: "Chicago",
  price: 250,
  stock: 10,
});
```

---

### Buscar por color

```ts
findSneakerByColor("Chicago");
```

---

### Actualizar Sneaker por ID

```ts
updateSneaker("id_del_sneaker", {
  model: "Jordan 1",
  color: "UNC",
  price: 300,
  stock: 5,
});
```

---

### Eliminar Sneaker por ID

```ts
deleteSneaker("id_del_sneaker");
```

---

## 🛠 Tecnologías usadas

- [Mongoose](https://mongoosejs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 📝 Notas

- Este proyecto está pensado para aprender a crear un CRUD básico con MongoDB y TypeScript.

## 📌 To-Do

- [ ] Conexión con Express para exponer endpoints.
- [ ] Testing con Jest.

---

## 👨‍💻 Autor

Hecho por [Maximo Verdi](https://github.com/MaximoVerdi) 🚀
