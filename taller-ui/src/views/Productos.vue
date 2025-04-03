<template>
  <div class="productos-container">
    <h1 class="page-title">Nuestros Productos</h1>
    <div class="productos-grid">
      <Card
        v-for="producto in productos"
        :key="producto.id"
        :nombre="producto.nombre"
        :descripcion="producto.descripcion"
      />
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/card.vue';

const productos = [
  { id: 2, nombre: 'Cámara de Seguridad HD', descripcion: 'Visión nocturna con grabación 1080p.' },
];
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

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;
}
</style>
