<template>
  <div class="inventory-container">
    <h1>Inventario de Productos de Seguridad</h1>

    <!-- Botón para mostrar el formulario de alta de producto -->
    <button @click="mostrarFormulario" class="btn-alta">+ Agregar Producto</button>

    <!-- Formulario de Alta de Producto -->
    <div v-if="formularioVisible" class="form-container">
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
        <button @click.prevent="cancelarFormulario" class="cancelar">Cancelar</button>
      </form>
    </div>

    <!-- Mostrar productos en inventario -->
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
          <td>
            <img :src="product.imageSrc" alt="Product Image" class="product-image" />
          </td>
          <td>{{ product.description }}</td>
          <td>{{ formatPrice(product.price) }}</td>
          <td>{{ product.stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import camaravigilancia from '@/views/images/camaravigilancia.png';
import controlacceso from '@/views/images/controlacceso.png';
import alarmaseguridad from '@/views/images/alarmaseguridad.png';
import camaraseguridad from '@/views/images/camaraseguridad.png';

export default {
  name: 'Inventario',
  data() {
    return {
      // Variable reactiva para controlar la visibilidad del formulario
      formularioVisible: false,
      producto: {
        description: '',
        price: 0,
        stock: 0,
        imageSrc: ''
      },
      productosBase: [
        { id: 1, description: 'Cámara de video vigilancia HD', price: 150.99, stock: 25, imageSrc: camaravigilancia },
        { id: 2, description: 'Control de acceso biométrico', price: 99.49, stock: 15, imageSrc: controlacceso },
        { id: 3, description: 'Alarma de seguridad inteligente', price: 199.99, stock: 40, imageSrc: alarmaseguridad },
        { id: 4, description: 'Cámara de seguridad IP exterior', price: 249.99, stock: 10, imageSrc: camaraseguridad },
        { id: 5, description: 'Control de acceso RFID', price: 89.99, stock: 30, imageSrc: controlacceso },
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
    // Mostrar el formulario de alta de producto
    mostrarFormulario() {
      this.formularioVisible = true;
    },
    // Cancelar el formulario y regresar a la vista de inventario
    cancelarFormulario() {
      this.formularioVisible = false;
    },
    guardarProducto() {
      const productosGuardados = JSON.parse(localStorage.getItem('productosNuevos') || '[]');
      productosGuardados.push({ ...this.producto, id: Date.now() });
      localStorage.setItem('productosNuevos', JSON.stringify(productosGuardados));
      alert('Producto guardado correctamente');
      this.cancelarFormulario(); // Ocultar el formulario después de guardar
    },
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    }
  }
};
</script>

<style scoped>
.inventory-container {
  font-family: Arial, sans-serif;
  padding: 20px;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  text-align: left;
  padding-top: 100px;
  padding-left: 50%;
}

h1 {
  color: #333;
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
  margin-left: 0;
}

.btn-alta {
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}

.inventory-table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.inventory-table th,
.inventory-table td {
  padding: 12px 15px;
  text-align: left;
  border: 1px solid #ddd;
  font-size: 1.1rem;
}

.inventory-table th {
  background-color: #f4f4f4;
  color: #333;
  font-weight: bold;
}

.inventory-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.inventory-table tr:hover {
  background-color: #f1f1f1;
}

.product-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
}

.inventory-table td {
  color: #555;
}

.inventory-table td:last-child {
  text-align: center;
}

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
