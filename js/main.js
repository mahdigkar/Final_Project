var Comments = [];
var CommentIndex = -1;
function btnAddClick() {
  console.log("add");
  if (validate()) {
    var comment = document.getElementById("comment").value;

    var Comment = [];
    Comment["comment"] = comment;
    Comment["selected"] = false;

    document.getElementById("comment").value = "";
    Comments.push(Comment);

    drowComments();
  }
}
function validate() {
  var comment = document.getElementById("comment").value;

  if (comment == "") {
    alert("لطفا نظر خود را وارد کنید");
    return false;
  } else {
    return true;
  }
}
function drowComments() {
  var tbl = document.getElementById("pnlComments");

  tbl.innerHTML = "";
  for (var i = 0; i < Comments.length; i++) {
    var div = document.createElement("div");
    div.classList.add("callout");
    div.classList.add("callout--primary");
    tbl.appendChild(div);

    var divgrid = document.createElement("div");
    divgrid.classList.add("grid");
    divgrid.classList.add("grid--1x2");
    div.appendChild(divgrid);
    var btndelete = document.createElement("input");
    btndelete.type = "button";
    btndelete.value = "حذف";
    btndelete.attributes["stdIndex"] = i;
    btndelete.classList.add("btn");
    btndelete.classList.add("btn--accent");
    btndelete.onclick = DeleteComment;
    divgrid.appendChild(btndelete);

    var divcontent = document.createElement("div");
    divgrid.appendChild(divcontent);
    divcontent.classList.add("callout__content");

    var pComment = document.createElement("p");
    divcontent.appendChild(pComment);
    pComment.innerText = Comments[i].comment;
  }
}
function DeleteComment() {
    Comments.splice(this.attributes["stdIndex"], 1);
    drowComments();
}
