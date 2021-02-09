const addbtn=document.getElementById('add');
const UpdateLSData=()=>{
    const textareadata=document.querySelectorAll('textarea');
    const notes=[];
    textareadata.forEach((note)=> { return notes.push(note.value)
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}
const addNewNote=(text ='')=>{
    const note=document.createElement('div');
    note.classList.add('note');
    const htmldata=`<div class="operation">
    <button class="edit"><i class="fa fa-edit"></i></button>
    <button class="delete"><i class="fa fa-trash"></i></button>
</div>
<div class="main ${text?" ":"hidden"}"></div>
<textarea class="${text?"hidden":" "}"</textarea>`;
note.insertAdjacentHTML('afterbegin',htmldata);
//console.log(note);
//getting the references
const delbtn=note.querySelector('.delete');
const editbtn=note.querySelector('.edit');
const maindiv=note.querySelector('.main');
const textarea=note.querySelector('textarea');
//deleting the note
delbtn.addEventListener('click',()=>{
    note.remove();
   UpdateLSData();
});
//toogle using edit button
textarea.value=text;
maindiv.innerHTML=text;
editbtn.addEventListener('click', ()=>{
    maindiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
});

textarea.addEventListener('change',(event)=>{
        const value=event.target.value;
        maindiv.innerHTML=value;
        UpdateLSData();
});




document.body.appendChild(note);//append chid as the last element of node
}

const notes=JSON.parse(localStorage.getItem('notes'));
if(notes)
{
    notes.forEach((note)=>addNewNote(note));
}

addbtn.addEventListener('click',()=> addNewNote());