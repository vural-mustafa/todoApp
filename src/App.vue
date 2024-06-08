<template>
  <div class="at">
    <div class="container">
 <form @submit.prevent="addTodo">
  <h1>Todo App Vue Js</h1>
  <div class="form-elmans">
    <input v-model="todo" class="input" type="text" placeholder="Take a not..." required>
    <button type="submit" class="button">Add</button>
  </div>
 </form>
 <div v-for="todo in todos" :key="todo.id" class="card">
  <div class="card-content">
    <div class="meida">
      <button @click="removeTodo(todo)" class="delete-button">X</button>
      <div class="media-left"></div>
      
      <div class="media-content">
        <p :class="{done: todo.done}"@click="done(todo)" class="title cursor">{{ todo.content }}</p>
        <p class="subtitle">Done :{{ todo.done }}</p>
      </div>
    </div>
  </div>
 </div>
 </div>

  </div>
    
 
</template>

<script>
import {ref} from "vue"
export default {
  setup(){
    const todo = ref("")
    const todos =ref([])

    function addTodo(){
      todos.value.push({
        done:false,
        content:todo.value,
        id:Date.now(),
      })
       todo.value=''
    }
    function done(todo){
      todo.done =!todo.done
    }
    function removeTodo(todo){
      todos.value =todos.value.filter(item =>item.id!==todo.id)
    }
    return{
      todo,
      todos,
      addTodo,
      done,
      removeTodo,
    }
   
  }
}
</script>
<style lang="scss">
.at{
  width:1910px;
  height:978px;
  background-color: black;
  opacity: 0.9;
}
h1{
  text-align: center;
}
.container{
  width: 450px;
  height: 450px;
  background-color: white;
  opacity: 1.5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: -50px;
  overflow: auto;
  box-shadow: 5px 10px 20px rgba(0,0,0,0.20);
  border-radius: 10px;
}
.input{
  padding:15px;
  width: 300px;
  font-size: 18px;
  border-radius: 10px;
  color: grey;
  border: 1px solid grey;
  margin-left: 30px;
}
.button{
  padding: 15px;
  width: 60px;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  color: white;
  background-color: purple;
  border:1px solid purple
}
.button:hover{
  color: purple;
  background-color: white;
  cursor: pointer;
}
.card{
  margin-top: 10px;
  width: 360px;
  height: 100px;
  border: 1px solid grey;
  color: white;
  background-color: purple;
  border-radius: 15px;
  margin-left: 30px;
  font-size: 18px;
}
p{
  margin-left: 30px;
  margin-top: 10px;
}
.delete-button{
  margin-left: 300px;
  padding: 10px;
  font-size: 15px;
  position: absolute;
  margin-top: 10px;
  border-radius: 5px;
  background-color: red;
  color: white;
  border:1px solid red;
}
.cursor{
  cursor: pointer;
}
.done{
  text-decoration: line-through;
}
</style>
