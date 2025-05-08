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
      <router-link to="/inventario" class="cancelar">Cancelar</router-link>
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
      this.$router.push('/inventario');
    }
  }
};
</script>

<style scoped>
.form-container {
  padding: 40px;
  max-width: 400px;
  margin: 0 auto;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 15px;
}
input {
  padding: 8px;
  margin-top: 5px;
}
button {
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
.cancelar {
  margin-top: 10px;
  text-align: center;
  display: block;
  color: #555;
  text-decoration: none;
}
</style>
