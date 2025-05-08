<template>
  <div class="inventory-container">
    <h1>Inventario de Productos de Seguridad</h1>

    <button class="btn-alta" @click="mostrarFormulario = true">+ Agregar Producto</button>

    <!-- Formulario de Alta -->
    <div v-if="mostrarFormulario" class="form-container">
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
          <button type="button" @click="mostrarFormulario = false">Cancelar</button>
        </div>
      </form>
    </div>

    <!-- Tabla de productos -->
    <table class="inventory-table">
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
      mostrarFormulario: false,
      nuevoProducto: {
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
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
    agregarProducto() {
      const nuevos = JSON.parse(localStorage.getItem('productosNuevos') || '[]');
      const nuevoId = this.allProducts.length + 1;
      const nuevo = {
        id: nuevoId,
        ...this.nuevoProducto
      };
      nuevos.push(nuevo);
      localStorage.setItem('productosNuevos', JSON.stringify(nuevos));
      this.nuevoProducto = { description: '', price: 0, stock: 0, imageSrc: '' };
      this.mostrarFormulario = false;
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
