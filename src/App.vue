<template>
  <div id="app">
    <p>Hi, {{ currentUserName() }}</p>
    <h1>For Sale</h1>
    <post
      v-for="post in posts"
      :post="post"
      :username="getUserName(post)"
      @delete-post="deletePost"
      @err="updateErr"
    ></post>
    <div class="error" v-if="err">{{ err }}</div>
  </div>
</template>
<script>
  import Post from './Post.vue';

  let { posts, users } = JSON.parse(window.data);

  export default {
    data() {
      return {
        posts,
        users,
        err: false
      }
    },
    methods: {
      getUserName(post) {
        return users.find(user => user.id === post.user).name;
      },
      deletePost(post) {
        this.posts = this.posts.filter(cur => cur !== post);
      },
      updateErr(err) {
        this.err = err;
      },
      currentUserName() {
        return users.find(user => user.active).name;
      },
    },
    components: {
      Post
    }
  }
</script>
<style lang="scss">
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .error {
    display: inline-block;
    color: white;
    background: red;
    border-color: darkred;
    border-radius: 2px;
    padding: 10px;
  }
</style>
