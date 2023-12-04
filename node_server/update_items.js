
function updateData() {
    loadURL("http://localhost:3000/test", function (data) {
        const obj = JSON.parse(data);
        document.getElementById("results").innerHTML = JSON.stringify(obj.name);
        console.log(typeof data);
    })
}
function start() {
    let apple_temp = document.getElementsByClassName("apple")[0];

    console.log(apple_temp.content);
    
    let show_tag = document.getElementsByClassName("show-apple")[0];

    let content = show_tag.content;

    content.querySelector('#show').innerHTML = apple_temp.content;

    
    setInterval("updateData()", 300);
}

