document.getElementById("valtGomb").addEventListener("click", function() {

    const osszeg = document.getElementById("osszeg").value;
    const radioGombok = document.getElementsByName("deviza");
    let kivalasztottDeviza = "";

    for (let i = 0; i < radioGombok.length; i++) {
        if (radioGombok[i].checked) {
            kivalasztottDeviza = radioGombok[i].value;
        }
    }

   
    if (osszeg == "" || kivalasztottDeviza == "") {
        document.getElementById("eredmeny").textContent = "Tölts ki mindent!";
        return;
    }

    
    fetch("https://hexarate.paikama.co/api/rates/latest/HUF?target=" + kivalasztottDeviza)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const arfolyam = json.data.mid;
        const eredmeny = osszeg * arfolyam;
        document.getElementById("eredmeny").textContent = osszeg + " HUF = " + eredmeny.toFixed(2) + " " + kivalasztottDeviza;
    });

});