const title = document.getElementById('title')

function typeWrite(e){
    const textarray = e.innerHTML.split('');
    e.innerHTML=' '
    textarray.forEach(function(letter,i){
        setTimeout(function(){
            e.innerHTML += letter
        }, 120 * i);
    });
}

typeWrite(title)

