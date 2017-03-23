function a(){
      for(var i=0;i<10;i++){
         for(var j=0;j<i;j++){
               document.getElementById("a").innerHTML +=  "*";
         }
         document.getElementById("a").innerHTML += "<br />";
  }
}
a();