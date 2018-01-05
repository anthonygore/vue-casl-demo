<template>
  <div class="post">
    <div class="content">{{ post.content }} <br/><small>posted by {{ username }}</small></div>
    <button @click="del(post)">Delete</button>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    props: ['post', 'username'],
    methods: {
      del(post) {
        if (this.$can('delete', post)) {
          axios.get(`/delete/${post.user}`, ).then(res => {
            if (res.data.success) {
              this.$emit('delete-post', post);
              this.$emit('err', false);
            } else {
              this.$emit('err', 'There was an error!');
            }
          });
        } else {
          this.$emit('err', 'Only the owner of a post can delete it!');
        }
      }
    }
  }
</script>
<style lang="scss">
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
</style>
