import {db} from "@/plugins/firebase";
export const state = () => ({
  tareas: '',
  tarea: ''
})

export const mutations = {
  setTareas(state, payload) {
    state.tareas = payload;
  },
  setTarea(state, payload) {
    state.tareas.push(payload);
  },
  deleteTarea(state, payload) {
    const index = state.tareas.findIndex(item => item.id === payload.id);
    state.tareas.splice(index, 1);
  },
  updateTarea(state, payload) {
    const index = state.tareas.findIndex(item => item.id === payload.id);
    state.tareas[index].nombre = payload.nombre;
  },
  setTareaOnly(state, payload) {
    state.tarea = payload
  }
}

export const actions = {
  nuxtServerInit ({commit},{req}) {
    return db.collection("tareas").get().then(res=>{
      const tareas = []
      res.forEach(doc => {
        let tarea = doc.data();
        tarea.id = doc.id;
        tareas.push(tarea)
      });
      return commit('setTareas', tareas);
    }).catch(err=> {
      console.error(err)
    })
  },
  async agregarTarea({commit}, payload) {
    try {
      const doc = await db.collection("tareas").add({
        nombre: payload,
        fecha: new Date()
      });
      //console.log(doc);
      commit('setTarea', {nombre: payload, id:doc.id});
    } catch (e) {
      console.error(e)
    }
  },
  eliminarTarea({commit}, payload) {
    db.collection("tareas").doc(payload.id).delete().then(res =>{
      console.log("tarea eliminada");
      commit('deleteTarea',payload);
    }).catch(e=>{
      console.error(e)
    })
  },
  editarTarea({commit}, payload) {
    db.collection("tareas").doc(payload.id).update({
      nombre: payload.nombre
    }).then(res=> {
      console.log("se actualizo con exito!!")
      commit('updateTarea', payload);
      this.app.router.push("/vuex")
    }).catch(e=>{
      console.error(e);
    })
  }
}
