<template>
  <div class="card" :class="categoriaClass">
    <img
      class="product-image"
      :src="imagenSrc"
      :alt="producto.productName"
      :key="imagenSrc"
      @error="onImageError"
    />

    <div class="card-content">
      <h3 class="product-title">{{ producto.productName }}</h3>
      <p class="product-description">{{ producto.description }}</p>
      <button class="buy-button">¡Me interesa!</button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  producto: Object
});

// Asignar clase por categoría para estilo temático
const categoriaClass = computed(() => {
  switch (props.producto.category) {
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

// Ruta de imagen inicial (.jpg forzado)
const imagenSrc = ref(
  `/images/${(props.producto.image || '').replace(/\.(png|jpeg|webp|jpg)$/i, '.jpg')}`
);

// Manejar error de carga: mostrar imagen por defecto desde /public
function onImageError() {
  if (!imagenSrc.value.includes('/default.jpg')) {
    imagenSrc.value = '/default.jpg'; // ruta correcta si está en public/
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  text-align: center;
  transition: transform 0.3s ease;
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
  background: #f1f1f1;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.card-content {
  padding: 15px;
}

.product-title {
  font-weight: bold;
  margin-bottom: 8px;
}

.product-description {
  font-size: 14px;
  color: #444;
  margin-bottom: 10px;
}

.buy-button {
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}

/* 🎨 Temas por categoría */
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
