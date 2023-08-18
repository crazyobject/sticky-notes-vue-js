<script setup>
import useNotes from "./use/useNotes";
const {notes,addNote,newNote,showModal} = useNotes();
</script>

<template>
  <main>
   <div v-show="showModal" class="overlay">
      <div class="modal">
        <textarea name="note" v-model="newNote" id="note" cols="30" rows="10"></textarea>
        <button @click="addNote">Save Note</button>
        <button class="close" @click="showModal=false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Sticky Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <hr/>
      <div class="cards-container">
        <div v-for="note in notes" :key="note.id" class="card" :style="{backgroundColor:note.bgColor}">
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{note.date}}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main{
  height:100vh;
  width: 100vw;
}

.overlay{
  position: absolute;
  width:100%;
  height: 100%;
  background-color:rgba(0,0,0,0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay .modal{
  width:350px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.overlay .modal textarea{
 border-radius: 10px;
}
.overlay .modal button{
 padding:10px;
 font-size: 20px;
 width:100%;
 background-color: blueviolet;
 color:white;
 cursor: pointer;
 border-radius: 10px;
 margin-top:20px;
}
.overlay .modal button.close{
 padding:10px;
 font-size: 20px;
 border-radius: 10px;
 width:100%;
 background-color: red;
 color:white;
 cursor: pointer;
 margin-top:20px;
}
.container{
  max-width: 1000px;
  padding:10px;
  margin:0 auto;
  border-radius: 22px;
  border:1px solid #ccc;
  background-color: #eee;
}

header{
  display:flex;
  align-items: center;
  justify-content: space-between;
}

header button{
  border:2px solid black;
  height:50px;
  width:50px;
  cursor:pointer;
  background-color: #ccc;
  font-size:40px;
  border-radius: 100%;
  transition: all 0.3s ease 0s;
  box-shadow: 0px 15px 20px #ccc;
}
header button:hover {
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
.cards-container{
  display: flex;
  flex-wrap: wrap;
}
.cards-container .card{
  box-shadow: 0px 15px 20px #ccc;
  border-radius: 10px;
  border:1px solid black;
  background-color: coral;
  width:20%;
  height:200px;
  padding:10px;
  margin:10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
} 
.cards-container .card:hover{
transform: translateY(-4px);
}
.cards-container .date{
  font-weight: bold;
  font-size: 11px;
}
</style>