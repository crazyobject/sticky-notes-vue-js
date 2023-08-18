import {reactive, ref} from "vue";
const newNote= ref("");
const showModal = ref(false);
const localStorageKey = "stickyNotes";

const loadNotes = (()=>{
    const localNotes = localStorage.getItem(localStorageKey);
    return localNotes ? ref(JSON.parse(localNotes)) : ref([]);
})
const notes = loadNotes();

const useNotes = (()=>{
    const addNote = (()=>{
        notes.value.push({
          id: notes.length>0 ? notes[notes.length-1].id+1 : 1,
          text:newNote.value,
          date: new Date(),
          bgColor:(()=>{
            return "hsl("+Math.random()*360+", 100%, 75%)";
          })()
        });  
        newNote.value = "";
        showModal.value = false;  
        localStorage.setItem(localStorageKey, JSON.stringify(notes.value));
      });

    return {notes,addNote,newNote,showModal}
    
})

export default useNotes;