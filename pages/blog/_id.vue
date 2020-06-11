<template>
  <b-container class="mt-5">
    <b-row>
      <b-col cols="12">
        <b-card>
          <b-card-title>
            {{article.title}}
          </b-card-title>
          <b-card-body>
            <p class="small">{{article.user.name}}</p>
            <p>{{article.body}}</p>
          </b-card-body>
          <b-card-footer>
            <b-btn to="/blog">Regresar</b-btn>
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import axios from "axios";
    export default {
        name: "blogId",
      data() {
          return {

          }
      },
      async created() {
      },
      async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        try {
          const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
          const article = res.data;
          const resUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${article.userId}`)
          article.user = resUser.data;
          //retorna objecto article
          return {
            article
          }
        } catch (e) {
          console.error(e)
          return {error: e}
        }
      }
    }
</script>

<style scoped>

</style>
