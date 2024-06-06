function hideAll() {
    document.getElementById("about").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("clients").style.display = "none";
    document.getElementById("contact").style.display = "none";
  }
  
  function showAbout() {
    hideAll()
    document.getElementById("about").style.display = "block";
  }
  
  function showServices() {
    hideAll()
    document.getElementById("services").style.display = "block";
  }
  
  function showClients() {
    hideAll()
    document.getElementById("clients").style.display = "block";
  }
  
  function showContact() {
    hideAll()
    document.getElementById("contact").style.display = "block";
  }