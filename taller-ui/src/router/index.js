import { createRouter, createWebHistory } from 'vue-router';

// Importar las vistas
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
import Login from '@/views/Login.vue';
import Inventario from '@/views/Inventario.vue';
import Productos from '@/views/Productos.vue';
import CreateUserView from '@/views/CreateUserView.vue';

// Definir las rutas
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  {
    path: '/inventario',
    component: Inventario,
    meta: { requiresAuth: true, requiredRole: 'admin' } // Solo accesible si es admin
  },
  { path: '/productos', component: Productos },
  { path: '/crear-usuario', component: CreateUserView }
];

// Crear la instancia del router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Guard global para proteger rutas
router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user')); // Simula autenticación

  if (to.meta.requiresAuth) {
    if (!user) {
      // Usuario no logueado
      return next('/login');
    }

    if (to.meta.requiredRole && user.role !== to.meta.requiredRole) {
      // Usuario logueado pero sin el rol adecuado
      return next('/'); // O redirige a una vista de "No autorizado"
    }
  }

  next(); // Continuar navegación normalmente
});

export default router;
