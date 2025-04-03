<template>
  <div class="productos-container">
    <h1 class="page-title">Productos - {{ categoriaActual }}</h1>

    <!-- Mostrar mensaje si no hay productos -->
    <p v-if="productosFiltrados.length === 0" style="color: red;">
      No se encontraron productos para esta categoría.
    </p>

    <!-- Contenedor responsivo -->
    <div :class="['productos-grid', { fading: isFading }]">
      <Card
        v-for="producto in productosFiltrados"
        :key="producto.productId"
        :producto="producto"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import Card from '@/components/card.vue';

const route = useRoute();
const categoriaActual = ref('Todos');
const isFading = ref(false);

// Actualizar categoría cuando cambia la URL
watch(
  () => route.query.categoria,
  async (nuevaCategoria) => {
    isFading.value = true;
    await new Promise((resolve) => setTimeout(resolve, 100));
    categoriaActual.value = nuevaCategoria || 'Todos';
    isFading.value = false;
    console.log('🔁 Categoría actual:', categoriaActual.value);
  },
  { immediate: true }
);

// Lista de productos
const productos = ref([
  {
    productId: 1,
    productName: 'Cámara HD',
    description: 'Alta resolución y visión nocturna.',
    image: 'Camara.jpg',
    category: 'videovigilancia'
  },
  {
    productId: 2,
    productName: 'DVR 4 Canales',
    description: 'Grabación en tiempo real.',
    image: 'DVR.jpg',
    category: 'videovigilancia'
  },
  {
    productId: 3,
    productName: 'Lector Biométrico',
    description: 'Control por huella.',
    image: 'Biometrico.jpg',
    category: 'control-acceso'
  },
  {
    productId: 4,
    productName: 'Tarjeta RFID',
    description: 'Acceso por tarjeta.',
    image: 'TarjetaRFID.jpg',
    category: 'control-acceso'
  },
  {
    productId: 5,
    productName: 'Sensor de Movimiento',
    description: 'Detecta presencia.',
    image: 'Sensor.jpg',
    category: 'alarmas'
  },
  {
    productId: 6,
    productName: 'Sirena de Alarma',
    description: 'Sonido potente.',
    image: 'Sirena.jpg',
    category: 'alarmas'
  }
]);

// Filtrar productos por categoría
const productosFiltrados = computed(() => {
  const actual = categoriaActual.value.toLowerCase();
  return actual === 'todos'
    ? productos.value
    : productos.value.filter((producto) => producto.category === actual);
});

// Log para depuración
watch(productosFiltrados, (val) => {
  console.log('📦 Productos filtrados:', val);
});
</script>

<style scoped>
.productos-container {
  text-align: center;
  padding: 20px;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}

/*  Cuadrícula responsiva */
.productos-grid {
  display: grid;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.productos-grid.fading {
  opacity: 0;
}

/*  Móvil */
@media (max-width: 768px) {
  .productos-grid {
    grid-template-columns: 1fr;
    padding: 10px;
  }

  .card {
    max-width: 100%;
    margin: 0 auto;
  }
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  .productos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>





