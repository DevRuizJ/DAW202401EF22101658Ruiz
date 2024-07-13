<template>
    <h5>Listado de Programas</h5>
    <div class="program-list">
        <div class="program-grid">
            <div class="program-item" v-for="program in programs" :key="program.id">
                <programItem :program="program" />
            </div>
        </div>
    </div>
</template>

<style>
.program-grid{
    display: grid;
    grid-template-columns: repeat(3,1fr) ;
    grid-gap: 20xp;
}

</style>

<script>
import programItem from 'src/components/program/programItem.vue'

export default{
    name:"programList",
    components: {programItem},
    data(){
        return {
            programs: []
        }
    },
    mounted(){
        this.loadprograms()
    },
    methods:{
        loadprograms(){
            var URL = "/program"
            var token = JSON.parse(localStorage.getItem("userData")).result.token
            console.log("TOKEN es : " + token)
            this.$api.get(URL,{
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            .then(response=>{
                this.programs = response.data
                console.log(JSON.stringify(response))
            }).catch(error=>{
                console.log("Ocurrio un error: " + error)
                this.$router.push("/")
            })
        }
    }
}


</script>