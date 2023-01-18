var title = document.getElementById("title");
var sumbit = document.getElementById("submitTEXT");
var content = document.getElementById("content");


sumbit.addEventListener('click', function(){
    console.log(title.value)
    console.log(content.value)
})