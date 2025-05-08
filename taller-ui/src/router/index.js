import { createRouter, createWebHistory } from 'vue-router';

// Importar las vistas
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
import Login from '@/views/Login.vue';
import Inventario from '@/views/Inventario.vue';
import Productos from '@/views/Productos.vue';
import AltaProducto from '@/views/AltaProducto.vue';  // Importando la vista de alta producto

// Definir las rutas
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/inventario', component: Inventario },
  { path: '/productos', component: Productos },
  { path: '/alta-producto', component: AltaProducto }  // Ruta para alta producto
];

// Crear la instancia del router
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
