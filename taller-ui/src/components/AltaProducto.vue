<template>
  <div class="form-container">
    <h2>Alta de Nuevo Producto</h2>
    <form @submit.prevent="agregarProducto">
      <label>Descripción:</label>
      <input v-model="nuevoProducto.description" required />

      <label>Precio:</label>
      <input type="number" v-model.number="nuevoProducto.price" required step="0.01" />

      <label>Stock:</label>
      <input type="number" v-model.number="nuevoProducto.stock" required />

      <label>URL de imagen:</label>
      <input v-model="nuevoProducto.imageSrc" required />

      <div class="form-buttons">
        <button type="submit">Guardar</button>
        <button type="button" @click="$emit('cancelar')">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AltaProducto',
  data() {
    return {
      nuevoProducto: {
        description: '',
        price: 0,
        stock: 0,
        imageSrc: ''
      }
    };
  },
  methods: {
    agregarProducto() {
      const productos = JSON.parse(localStorage.getItem('productosNuevos') || '[]');
      const nuevoId = productos.length + 1000; // evitar conflictos con productos base
      const nuevo = { id: nuevoId, ...this.nuevoProducto };
      productos.push(nuevo);
      localStorage.setItem('productosNuevos', JSON.stringify(productos));
      this.$emit('producto-agregado'); // notificar al componente padre
      this.nuevoProducto = { description: '', price: 0, stock: 0, imageSrc: '' };
    }
  }
};
</script>

<style scoped>
.form-container {
  background: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 600px;
}

.form-container label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

.form-container input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.form-buttons button {
  padding: 8px 15px;
  cursor: pointer;
  border: none;
  color: white;
  background-color: #007bff;
  border-radius: 4px;
}

.form-buttons button[type="button"] {
  background-color: #dc3545;
}
</style>
