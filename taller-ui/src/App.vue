<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const showSubmenu = ref(false);
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>

      <!-- "Productos" con Submenú Centrado -->
      <div 
        class="relative group flex items-center"
        @mouseenter="showSubmenu = true"
        @mouseleave="showSubmenu = false"
      >
        <RouterLink to="/productos" class="submenu-link">Productos</RouterLink>
        <ul v-if="showSubmenu" class="submenu">
          <li>
            <RouterLink to="/productos?categoria=videovigilancia">Videovigilancia</RouterLink>
          </li>
          <li>
            <RouterLink to="/productos?categoria=control-acceso">Control de Acceso</RouterLink>
          </li>
          <li>
            <RouterLink to="/productos?categoria=alarmas">Alarmas</RouterLink>
          </li>
        </ul>
      </div>

      <RouterLink to="/inventario">Inventario</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
/* Mantiene la barra de navegación fija arriba */
header {
  background: black;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

/* Ajusta la distribución de los elementos */
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px; /* Espaciado uniforme */
}

/* Estiliza los enlaces */
nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  transition: background 0.3s;
  border-radius: 5px;
}

/* Hover */
nav a:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Resalta el enlace activo */
nav a.router-link-exact-active {
  background: white;
  color: black;
}

/* Ajusta el margen superior del contenido */
.content {
  margin-top: 80px; /* Ajustado para que no quede pegado */
}

/* Estilos del Submenú */
.relative {
  position: relative;
  display: flex;
  align-items: center;
}

/* Centrar y alinear correctamente el submenú */
.submenu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 8px 0;
  display: none;
}

/* Hace que el submenú aparezca al pasar el mouse */
.relative:hover .submenu {
  display: block;
}

/* Estiliza los elementos del submenú */
.submenu li {
  list-style: none;
}

.submenu a {
  display: block;
  padding: 10px;
  color: black;
  text-decoration: none;
  transition: background 0.3s;
  text-align: center;
}

.submenu a:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>

