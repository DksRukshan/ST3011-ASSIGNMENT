window.onload = setTimeout(function() {
    console.log("loaded");
    var selector = document.querySelector('#select');
selector.onchange = function() { 
    if(document.getElementById("select").value =="Death Event"){
        document.getElementById("hide").style.display = "none";
    }
    else{
    document.getElementById("hide").style.display = "table-column";
    }
}
  },6000)