function username(){
   var a = document.getElementById("firstUser").value;
   var b = document.getElementById("property").value;
   var c = document.getElementById("secondUser").value;
   var d = document.getElementById("property1").value;
   
  
}
function submit(){
    var f = document.getElementById("firstUser");
}
function data(){
    var fName = document.getElementById('firstUser').value;
    var property = document.getElementById('property').value;
    var SName = document.getElementById('secondUser').value;
    var Property1 = document.getElementById('property1').value;
    var Table = document.getElementById('table');

    table.innerHTML = <table><tr>
    <th>First User</th><th>property</th></tr><tr><td>"+fName+"</td><td>"+property+"</tr>;
   </table>
}