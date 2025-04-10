<template>
  <div class="productos-container">
    <h1 class="page-title">Productos - {{ categoriaActual }}</h1>

    <!-- Búsqueda con botón limpiar -->
    <div class="busqueda-wrapper">
      <input
        type="text"
        v-model="busqueda"
        placeholder="Buscar productos..."
        class="busqueda-input"
      />
      <button v-if="busqueda" @click="busqueda = ''" class="clear-button">×</button>
    </div>

    <!-- Mensaje si no hay resultados -->
    <p v-if="productosFiltrados.length === 0" style="color: red;">
      No se encontraron productos para esta búsqueda.
    </p>

    <!-- Tarjetas -->
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
const busqueda = ref('');

//  Cambiar categoría según la URL
watch(
  () => route.query.categoria,
  async (nuevaCategoria) => {
    isFading.value = true;
    await new Promise((resolve) => setTimeout(resolve, 100));
    categoriaActual.value = nuevaCategoria || 'Todos';
    isFading.value = false;
    console.log('Categoría actual:', categoriaActual.value);
  },
  { immediate: true }
);

// Productos
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

// ▶️ Filtro combinado (categoría + texto de búsqueda)
const productosFiltrados = computed(() => {
  const actual = categoriaActual.value.toLowerCase();
  const texto = busqueda.value.trim().toLowerCase();

  return productos.value.filter((producto) => {
    const coincideCategoria =
      actual === 'todos' || producto.category === actual;

    const coincideBusqueda =
      producto.productName.toLowerCase().includes(texto) ||
      producto.description.toLowerCase().includes(texto);

    return coincideCategoria && coincideBusqueda;
  });
});

//  Depuración
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

/* Búsqueda */
.busqueda-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.busqueda-input {
  width: 100%;
  max-width: 400px;
  padding: 10px 40px 10px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.clear-button {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 20px;
  color: #888;
  cursor: pointer;
}

/* Tarjetas */
.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  width: 100%;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.productos-grid.fading {
  opacity: 0;
}

/* Móvil */
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
