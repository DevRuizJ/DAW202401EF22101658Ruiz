<template>
  <h6>Filtros</h6>
  <div class="filtro-categoria">
    <label>Categoría:</label>
    <q-select filled v-model="model" :option="categorias" />
  </div>
  <div class="filtro-precio">
    <label>Canales:</label>
    <q-input class="channel" filled v-model="precioMin" type="number" label="Mínimo" />
    <q-input class="channel" filled v-model="precioMax" type="number" label="Máximo" />
  </div>
</template>

<style>
.channel {
  max-width: 200px;
}
</style>
<script>

export default {
  name: "ProgramFilter",
  data() {
    return {
      model: null,
      categorias: ["Celulares", "Televisores"]
    }
  }
}
</script>
