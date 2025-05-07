<template>
  <div class="form-container">
    <h2>Alta de Producto</h2>
    <form @submit.prevent="guardarProducto">
      <label for="descripcion">Descripción:</label>
      <input v-model="producto.description" id="descripcion" required />

      <label for="precio">Precio:</label>
      <input v-model.number="producto.price" id="precio" type="number" step="0.01" required />

      <label for="stock">Stock:</label>
      <input v-model.number="producto.stock" id="stock" type="number" required />

      <label for="imagen">URL de Imagen:</label>
      <input v-model="producto.imageSrc" id="imagen" placeholder="Ej. /images/ejemplo.png" />

      <button type="submit">Guardar</button>
      <button @click.prevent="$emit('cancelar')" class="cancelar">Cancelar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AltaProducto',
  data() {
    return {
      producto: {
        description: '',
        price: 0,
        stock: 0,
        imageSrc: ''
      }
    };
  },
  methods: {
    guardarProducto() {
      const productosGuardados = JSON.parse(localStorage.getItem('productosNuevos') || '[]');
      productosGuardados.push({ ...this.producto, id: Date.now() });
      localStorage.setItem('productosNuevos', JSON.stringify(productosGuardados));
      alert('Producto guardado correctamente');
      this.$emit('producto-guardado');
    }
  }
};
</script>

<style scoped>
/* Puedes dejar tus estilos originales aquí */
</style>
