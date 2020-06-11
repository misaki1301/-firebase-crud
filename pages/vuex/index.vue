<template>
    <div class="container">
      <h2>vuex</h2>
      <b-form @submit.prevent="agregarTarea(newTarea)">
        <b-form-group label="Ingrese una tarea:" label-for="inputTarea">
          <b-form-input id="inputTarea" v-model="newTarea"></b-form-input>
        </b-form-group>
      </b-form>
      <hr>
      <ul>
        <li v-for="(item,index) in tareas" :key="index" class="my-4">
          {{item.id}} - {{item.nombre}}
          <b-button class="btn btn-warning" :to="`/vuex/${item.id}`">Editar</b-button>
          <b-button class="btn btn-danger" @click="eliminarTarea(item)">Borrar</b-button>
        </li>
      </ul>
    </div>
</template>

<script>
  import {db} from "@/plugins/firebase"
  import {mapState, mapActions} from "vuex"
    export default {
        name: "index",
      data() {
          return {
            newTarea: ''
          }
      },
      computed: {
        ...mapState(['tareas'])
      },
      methods: {
          ...mapActions(['agregarTarea','eliminarTarea'])
      }
      /*fetch({store}) {
          return db.collection("tareas").get().then(res => {
            const tareas = []
            res.forEach(doc => {
              tareas.push(doc.data())
            })
            return store.commit('setTareas',tareas)

          }).catch(err => {
            console.error(err);
          })
      }*/
    }
</script>

<style scoped>

</style>
