<template>
  <div class="inventory-container">
    <h1>Inventario de Productos de Seguridad</h1>
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
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>
            <img :src="imageSrc" alt="Product Image" class="product-image" />
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
import image7 from '@/views/images/image7.png'; // Importar la imagen al principio del script

export default {
  name: 'Inventario',
  data() {
    return {
      products: [
        {
          id: 1,
          description: 'Cámara de video vigilancia HD',
          price: 150.99,
          stock: 25,
        },
        {
          id: 2,
          description: 'Control de acceso biométrico',
          price: 99.49,
          stock: 15,
        },
        {
          id: 3,
          description: 'Alarma de seguridad inteligente',
          price: 199.99,
          stock: 40,
        },
        {
          id: 4,
          description: 'Cámara de seguridad IP exterior',
          price: 249.99,
          stock: 10,
        },
        {
          id: 5,
          description: 'Control de acceso RFID',
          price: 89.99,
          stock: 30,
        },
      ],
      imageSrc: image7, // Asignar la imagen importada
    };
  },
  methods: {
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
  },
};
</script>