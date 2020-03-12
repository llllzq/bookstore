<template>
    <div>
        <button @click="login">login</button>
        <button @click="list">list</button>
        <button @click="post">post</button>
        <button @click="remove">remove</button>
    </div>
    <!--App -->
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    login () {
      axios.get('/api/login').then(response => {
        if (response.data) {
          console.log(response.data)
          alert(response.data.success + ',' + response.data.message)
        }
      })
    },
    list () {
      axios.get('/api/list').then(response => {
        if (response.data) {
          console.log(response.data)
          const list1 = response.data[0].id + ',' + response.data[0].sex + ',' + response.data[0].username
          const list2 = response.data[1].id + ',' + response.data[1].sex + ',' + response.data[1].username
          alert(list1 + '\n' + list2)
        }
      })
    },
    post () {
      axios.post('/api/post').then(response => {
        if (response.data) {
          console.log(response.data)
          alert(response.data.status + ',' + response.data.code)
        }
      })
    },
    remove () {
      axios.delete('/api/remove').then(response => {
        if (response.data) {
          console.log(response.data)
          alert(response.data.status + ',' + response.data.message)
        }
      })
    }
  }
}
</script>
