function search_book() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    
    let x = document.getElementsByClassName('book');

    /*
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display="inline";                 
        }
    }
    */
    
    for (i = 0; i < x.length; i++) { 
        if (x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="inline";
        }
        else {
            x[i].style.display = "none";    
        }
    }
}
