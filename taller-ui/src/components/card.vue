<template>
  <div class="card">
    <!-- Imagen del Producto (Ahora usa la nueva imagen Camara.png) -->
    <img class="product-image" :src="`/Camara.png`" :alt="nombre" />

    <!-- Información del Producto -->
    <div class="card-content">
      <h3 class="product-title">{{ nombre }}</h3>
      <p class="product-description">{{ descripcion }}</p>
      <button class="buy-button">Ver más</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  nombre: String,
  descripcion: String
});
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: white;
  text-align: center;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

/* 📌 Ajustar el tamaño de la imagen sin que se corte */
.product-image {
  width: 100%;
  height: 200px; /* Ajusta la altura según sea necesario */
  object-fit: contain; /* Asegura que la imagen no se corte */
  padding: 10px;
  background: #f8f8f8; /* Fondo gris claro para destacar la imagen */
}

.card-content {
  padding: 15px;
}

.product-title {
  font-weight: bold;
  color: #007bff;
  margin-bottom: 8px;
}

.product-description {
  font-size: 14px;
  color: #444;
  margin-bottom: 10px;
}

.buy-button {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.buy-button:hover {
  background: #0056b3;
}
</style>
