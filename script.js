const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

p1.addEventListener('click', function(){
    p1.style.backgroundColor = 'lightgreen';
});

p2.addEventListener('mouseenter', function(){
    p2.style.backgroundColor = 'lightblue';
});

p2.addEventListener('mouseleave', function(){
    p2.style.backgroundColor = 'white';
});

// Tambah Item
const ul = document.querySelector('section#b ul');
const p4 = document.querySelector('section#b p');
const sectionB = document.getElementById('b');
let warnaLi = sectionB.getElementsByTagName('li');



p4.addEventListener('click', function() {
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Oh hi mark.');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
    for( i = 0; i < warnaLi.length; i++ ){
        if(i == 0 || i == 2){
            warnaLi[i].style.backgroundColor = 'white';
        }
        else if(i % 2 == 0){
            warnaLi[i].style.backgroundColor = 'red';
        }else if(i == 1){
            warnaLi[i].style.backgroundColor = 'white';
        }else{
            warnaLi[i].style.backgroundColor = 'green';
        }
    }
});