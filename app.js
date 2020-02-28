const body = document.querySelector('body');
body.innerHTML = `
<div class="container">
<h1 class="mb-3 mx-auto text-center" >My Single Web-Page</h1>
 
  <button id="next" class="btn btn-dark btn-block">Update page</button>

</div>
`;



let count = 0;


update = () => {

    count += 1

    //creating and declaring the div
    let div = document.createElement("div");
    let textDiv = document.createTextNode(`item ${count} added`);
    div.className = 'container';
    div.appendChild(textDiv);
    body.appendChild(div);

};

let button = document.getElementById('next')
button.addEventListener('click',update)

