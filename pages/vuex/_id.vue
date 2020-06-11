<template>
    <b-container>
      <h2>Editar tarea:</h2>
      {{$route.params.id}}
      <b-form @submit.prevent="editarTarea(tarea)">
        <b-form-group label="Actualiza tarea:">
          <b-form-input v-model="tarea.nombre"></b-form-input>
        </b-form-group>
        <b-btn type="submit">Editar</b-btn>
      </b-form>
    </b-container>
</template>

<script>
  import {mapState, mapActions} from "vuex";
  import {db} from "@/plugins/firebase"
    export default {
    methods:{
      ...mapActions(['editarTarea'])
    },
      fetch({store, params}) {
        return db.collection("tareas").doc(params.id).get().then(res=> {
          let tarea = res.data();
          tarea.id = res.id;
          return store.commit('setTareaOnly', tarea)
        }).catch(e=>{
          console.error(e)
        })
      },
      computed: {
        tarea: {
          get() {
            return {
              nombre: this.$store.state.tarea.nombre,
              id: this.$store.state.tarea.id
            }
          }
        }
      }
    }
</script>

<style scoped>

</style>
