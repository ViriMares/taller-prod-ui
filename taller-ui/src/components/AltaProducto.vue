<template>
  <div class="form-container">
<<<<<<< HEAD
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
=======
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
>>>>>>> 571eed594c1c7f906d5eafa0cec61477c5fa5a0c
    </form>
  </div>
</template>

<script>
export default {
  name: 'AltaProducto',
  data() {
    return {
<<<<<<< HEAD
      nuevoProducto: {
=======
      producto: {
>>>>>>> 571eed594c1c7f906d5eafa0cec61477c5fa5a0c
        description: '',
        price: 0,
        stock: 0,
        imageSrc: ''
      }
    };
  },
  methods: {
<<<<<<< HEAD
    agregarProducto() {
      const productos = JSON.parse(localStorage.getItem('productosNuevos') || '[]');
      const nuevoId = productos.length + 1000; // evitar conflictos con productos base de acorde a las especificaciones
      const nuevo = { id: nuevoId, ...this.nuevoProducto };
      productos.push(nuevo);
      localStorage.setItem('productosNuevos', JSON.stringify(productos));
      this.$emit('producto-agregado'); // notificar al componente padre implicado
      this.nuevoProducto = { description: '', price: 0, stock: 0, imageSrc: '' };
=======
    guardarProducto() {
      const productosGuardados = JSON.parse(localStorage.getItem('productosNuevos') || '[]');
      productosGuardados.push({ ...this.producto, id: Date.now() });
      localStorage.setItem('productosNuevos', JSON.stringify(productosGuardados));
      alert('Producto guardado correctamente');
      this.$router.push('/inventario');
>>>>>>> 571eed594c1c7f906d5eafa0cec61477c5fa5a0c
    }
  }
};
</script>

<style scoped>
.form-container {
<<<<<<< HEAD
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
=======
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
>>>>>>> 571eed594c1c7f906d5eafa0cec61477c5fa5a0c
}
</style>
