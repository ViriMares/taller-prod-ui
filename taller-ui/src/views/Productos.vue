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
        :key="producto.idProducto"
        :producto="producto"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Card from '@/components/card.vue';

const route = useRoute();
const categoriaActual = ref('Todos');
const isFading = ref(false);
const busqueda = ref('');
const productos = ref([]);

// ▶️ Llamada a la API
const cargarProductos = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/productos');
    productos.value = response.data;
  } catch (error) {
    console.error('❌ Error al cargar productos:', error);
  }
};

onMounted(cargarProductos);

//  Cambiar categoría según URL
watch(
  () => route.query.categoria,
  async (nuevaCategoria) => {
    isFading.value = true;
    await new Promise((resolve) => setTimeout(resolve, 100));
    categoriaActual.value = nuevaCategoria || 'Todos';
    isFading.value = false;
    console.log('📂 Categoría actual:', categoriaActual.value);
  },
  { immediate: true }
);

//  x  Filtro por categoría y texto
const productosFiltrados = computed(() => {
  const actual = categoriaActual.value.toLowerCase();
  const texto = busqueda.value.trim().toLowerCase();

  return productos.value.filter((producto) => {
    const categoria = (producto.categoria || '').toLowerCase();
    const nombre = (producto.nombreProducto || '').toLowerCase();
    const descripcion = (producto.descripcion || '').toLowerCase();

    const coincideCategoria = actual === 'todos' || categoria === actual;
    const coincideBusqueda = nombre.includes(texto) || descripcion.includes(texto);

    return coincideCategoria && coincideBusqueda;
  });
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

