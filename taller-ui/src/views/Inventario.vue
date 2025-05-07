<template>
  <div class="inventory-container">
    <h1>Inventario de Productos de Seguridad</h1>

    <button @click="mostrarFormulario" class="btn-alta">+ Agregar Producto</button>

    <!-- Usamos el componente AltaProducto -->
    <AltaProducto 
      v-if="formularioVisible" 
      @producto-guardado="onProductoGuardado"
      @cancelar="cancelarFormulario" 
    />

    <table v-if="!formularioVisible" class="inventory-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Imagen</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in allProducts" :key="product.id">
          <td>{{ product.id }}</td>
          <td><img :src="product.imageSrc" class="product-image" /></td>
          <td>{{ product.description }}</td>
          <td>{{ formatPrice(product.price) }}</td>
          <td>{{ product.stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AltaProducto from '@/components/AltaProducto.vue';
import camaravigilancia from '@/views/images/camaravigilancia.png';
import controlacceso from '@/views/images/controlacceso.png';
import alarmaseguridad from '@/views/images/alarmaseguridad.png';
import camaraseguridad from '@/views/images/camaraseguridad.png';

export default {
  name: 'Inventario',
  components: { AltaProducto },
  data() {
    return {
      formularioVisible: false,
      productosBase: [
        { id: 1, description: 'Cámara de video vigilancia HD', price: 150.99, stock: 25, imageSrc: camaravigilancia },
        { id: 2, description: 'Control de acceso biométrico', price: 99.49, stock: 15, imageSrc: controlacceso },
        { id: 3, description: 'Alarma de seguridad inteligente', price: 199.99, stock: 40, imageSrc: alarmaseguridad },
        { id: 4, description: 'Cámara de seguridad IP exterior', price: 249.99, stock: 10, imageSrc: camaraseguridad },
        { id: 5, description: 'Control de acceso RFID', price: 89.99, stock: 30, imageSrc: controlacceso }
      ]
    };
  },
  computed: {
    allProducts() {
      const nuevos = JSON.parse(localStorage.getItem('productosNuevos') || '[]');
      return [...this.productosBase, ...nuevos];
    }
  },
  methods: {
    mostrarFormulario() {
      this.formularioVisible = true;
    },
    cancelarFormulario() {
      this.formularioVisible = false;
    },
    onProductoGuardado() {
      this.formularioVisible = false;
    },
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    }
  }
};
</script>

<style scoped>
/* Puedes dejar tus estilos originales aquí */
</style>
