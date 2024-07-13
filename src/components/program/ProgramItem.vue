<template>
<q-card class="program-card">
    <q-card-section>
        <q-img :src="program.imageUrl" alt="Logo del programa"/>
    </q-card-section>
    <q-card-section>
            <q-card-title>{{program.descripcion}}</q-card-title>
            <div class="text-h6 font-weight-bold">
                {{ program.channel }}
            </div>
            <div class="text-center">
                <q-btn color="primary" icon="add_shopping_cart" 
                label="Agregar"></q-btn>
            </div>
    </q-card-section>
</q-card>

</template>

<style>
    .program-card{
        width: 300px;
    }
    .program-card q-card-section {
        height: 100px;
        overflow: hidden;
    }
</style>

<script>

export default{
    name: "ProgramItem",
    props: {
        program:{
            type: Object,
            required: true
        }
    }
}

</script>