var title = document.getElementById("title");
var btn = document.getElementById("btn");
var content = document.getElementById("content");
var list = document.getElementById("list");


if(btn){
    btn.addEventListener( "click", function(){
        list.innerHTML = list.innerHTML + `
        <div id="list">
            <div class="article">
                <h2>${title.value}</h2>
                <p>${content.value}</p>
            </div>
        </div>
        `;
    } );
}
