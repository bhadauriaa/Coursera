function search(){
    let searchInput=document.getElementById("searchInput").value="";
    document.getElementById("searchResults").innerHTML="<p>Searching for: " + searchInput + "</p">;
}
function reset() {
    document.getElementById("searchInput").value = "";
    document.getElementById("searchResults").innerHTML = "";
}