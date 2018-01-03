<template>
  <div id="app">
    <div v-for="post in posts">
      {{ post.content }}
      <button @click="del(post)">Delete</button>
    </div>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
  let posts = [
    {
      id: 1,
      user: 1,
      content: 'Hi I\'m user 1 and this is my post'
    },
    {
      id: 2,
      user: 2,
      content: 'This is a post by user 2'
    }
  ];

  export default {
    data() {
      return {
        posts,
        msg: ''
      }
    },
    methods: {
      del(post) {
        this.msg = '';
        if (this.$can('delete', post)) {
          let pos = posts.findIndex(cur => cur.id === post.id);
          posts.splice(pos, 1);
        } else {
          this.msg = 'Only the owner of a post can delete it!'
        }
      }
    }
  }

</script>

<style lang="scss">
</style>
