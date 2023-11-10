
let getul = document.getElementById("ul");
function abc() {
  let a = document.getElementById("inp");
  let li = document.createElement("li");
  let litext = document.createTextNode(a.value)
  li.appendChild(litext)
  getul.appendChild(li)
  a.value = " "
  let deletebtn = document.createElement("button")
  let btntext = document.createTextNode("Delete")
  deletebtn.appendChild(btntext)
  li.appendChild(deletebtn)
  deletebtn.setAttribute('onclick', 'del(this)')
  let editbtn = document.createElement("button")
  let editbtntext = document.createTextNode("Edit")
  editbtn.appendChild(editbtntext)
  li.appendChild(editbtn)
  editbtn.setAttribute("onclick", 'editfun(this)')
}
function deleteall() {
  getul.innerHTML = ' '
}
function del(e) {
  e.parentNode.remove()
}
function editfun(e) {
  let a = prompt('Enter Edit Value', e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = a
}