<template>
  <div class="card" :class="categoriaClass">
    <!-- Imagen del Producto -->
    <img
      class="product-image"
      :src="imagenProducto"
      :alt="producto.nombreProducto"
      @error="imagenError"
    />

    <!-- Información del Producto -->
    <div class="card-content">
      <h3 class="product-title">{{ producto.nombreProducto }}</h3>
      <p class="product-price">Precio: ${{ producto.precio }}</p>
      <p class="product-stock">Stock: {{ producto.stock }}</p>
      <button class="buy-button">¡Me interesa!</button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  producto: Object
});

const imagenProducto = ref(`/images/${props.producto.imagen || 'default.jpg'}`);

const imagenError = () => {
  imagenProducto.value = '/default.jpg'; // fallback
};

const categoriaClass = computed(() => {
  switch ((props.producto.categoria || '').toLowerCase()) {
    case 'videovigilancia':
      return 'videovigilancia-theme';
    case 'control-acceso':
      return 'control-acceso-theme';
    case 'alarmas':
      return 'alarmas-theme';
    default:
      return '';
  }
});
</script>

<style scoped>
.card {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  text-align: center;
  transition: transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card:hover {
  transform: scale(1.03);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  padding: 10px;
  background: #f8f8f8;
}

.card-content {
  padding: 15px;
}

.product-title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
}

.product-price,
.product-stock {
  font-size: 14px;
  margin: 4px 0;
  color: #555;
}

.buy-button {
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.buy-button:hover {
  background-color: #0056b3;
}

/* Temas por categoría */
.videovigilancia-theme .product-title {
  color: #1976d2;
}
.videovigilancia-theme .buy-button {
  background-color: #1976d2;
}

.control-acceso-theme .product-title {
  color: #2e7d32;
}
.control-acceso-theme .buy-button {
  background-color: #2e7d32;
}

.alarmas-theme .product-title {
  color: #d32f2f;
}
.alarmas-theme .buy-button {
  background-color: #d32f2f;
}
</style>

