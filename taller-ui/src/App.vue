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

  <main class="content">
    <RouterView :key="$route.fullPath" />
  </main>
</template>

<style scoped>
/* Reset para evitar márgenes y padding no deseados */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100vw;  /* Asegurar que ocupa toda la pantalla */
  height: 100%;
  overflow-x: hidden; /* Evita desbordamientos laterales */
}

/* Navbar fijo */
header {
  background: black;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  text-align: center;
}

/* Enlaces de navegación */
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  transition: background 0.3s;
  border-radius: 5px;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.2);
}

nav a.router-link-exact-active {
  background: white;
  color: black;
}

/* Contenido debajo del navbar */
main.content {
  width: 100vw; /* Ocupar el ancho completo */
  min-height: 100vh; /* Evitar espacios en blanco */
  margin: 0 auto;
  padding: 20px;
  margin-top: 70px; /* Ajustar la separación del navbar */
}
</style>
