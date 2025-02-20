<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/productos">Productos</RouterLink>
      <RouterLink to="/inventario">Inventario</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
/*  Hace que la barra de navegación esté en la parte superior con fondo negro */
header {
  background: black;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

/*  Alinea los enlaces al centro en horizontal */
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/*  Estiliza los enlaces */
nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  transition: background 0.3s;
  border-radius: 5px;
}

/*  Agrega efecto hover */
nav a:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Resalta el enlace activo */
nav a.router-link-exact-active {
  background: white;
  color: black;
}
/* Ajusta el margen superior del contenido para que no quede detrás del Navbar */
.content {
  margin-top: 70px; /* Ajusta según la altura del Navbar */
}
</style>