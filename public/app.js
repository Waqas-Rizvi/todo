function todo() {
    var inp = document.getElementById("inp")
    var todo = {
        input: inp.value
    }
    var key = firebase.database().ref("ToDo").push(todo).key

    var data = firebase.database().ref("ToDo/" + key + "/input").once("value", function (data) {
        var list = document.getElementById("wa")
        var text = document.createTextNode(data.val())
        var para = document.createElement("p")
        list.setAttribute('class', 'list')
        para.appendChild(text)
        list.appendChild(para)
        var btnDiv = document.createElement('div')
        var btn = document.createElement('button')
        btn.setAttribute('class', 'btn')
        btn.setAttribute('onClick', 'deletetodo(this)')
        var btnText = 'Delete'
        var finalbtnText = document.createTextNode(btnText)
        btn.appendChild(finalbtnText)
    
        btnDiv.appendChild(btn)
        list.appendChild(btnDiv)
    })
    inp.value = ""
}

function remove(){
    var list = document.getElementById("mainList")
    list.innerHTML = ''
    firebase.database().ref("ToDo").remove()
}

// function deletetodo(){

// }
function deletetodo(e) {
    var li = e.parentNode.parentNode
    li.remove()
    console.log(e.parentNode.parentNode)
}