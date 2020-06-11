<template>
  <div class="container">
    <h3>BLog index</h3>
    <div class="row">
      <div class="card my-4" v-for="(item, index) in articles" :key="index">
        <div class="card-body">
          <nuxt-link :to="`/blog/${item.id}`">
            <h1>{{item.title}}</h1>
          </nuxt-link>
          <p>{{item.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
    export default {
        name: "index",
      data() {
          return {
            articles: []
          }
      },
      async created() {
          try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
            console.log(res.data);
            this.articles = res.data;
          } catch (e) {
            console.error(e)
          }
      }
    }
</script>

<style scoped>

</style>
