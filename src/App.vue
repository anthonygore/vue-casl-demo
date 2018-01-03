<template>
  <div id="app">
    <p>Hi, {{ currentUserName() }}</p>
    <h1>For Sale</h1>
    <div class="post" v-for="post in posts">
      <div class="content">{{ post.content }} <br/><small>posted by {{ getUserName(post) }}</small></div>
      <button @click="del(post)">Delete</button>
    </div>
    <div class="error" v-if="error">{{ error }}</div>
  </div>
</template>
<script>
  import axios from 'axios';

  let { posts, users } = JSON.parse(window.data);

  export default {
    data() {
      return {
        posts,
        users,
        error: false
      }
    },
    methods: {
      currentUserName() {
        return users.find(user => user.active).name;
      },
      getUserName(post) {
        return users.find(user => user.id === post.user).name;
      },
      del(post) {
        if (this.$can('delete', post)) {
          axios.get(`/delete/${post.user}`, ).then(res => {
            if (res.data.success) {
              this.posts = this.posts.filter(cur => cur !== post);
              this.error = false;
            } else {
              this.error = 'There was an error!';
            }
          });
        } else {
          this.error = 'Only the owner of a post can delete it!'
        }
      }
    }
  }
</script>
<style lang="scss">
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .post {
    max-width: 350px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 3px;
    margin-bottom: 20px;

    .content {
      padding-bottom: 10px;
      border-bottom: 1px solid lightgray;
      margin-bottom: 10px;

      small {
        font-weight: bold;
        color: gray;
      }
    }
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
