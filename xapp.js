var xswitch = document.querySelector(".switch");
var tabs = document.querySelectorAll(".tab");

tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        var datavalue = this.getAttribute('data-id');

        xswitch.classList.toggle("move-right-once", datavalue === 'b');
        xswitch.classList.toggle("move-right-twice", datavalue === 'c');
    });
});



document.querySelector(".closer").addEventListener("click", function() {
    var content = document.querySelector(".content")
    content.classList.add("invokeCloseAnimation")
    setTimeout(function() {
        content.style.display = "none"
    }, 90)
})

var ignore_buttons = document.querySelectorAll(".i")

ignore_buttons.forEach(function(i){
    i.addEventListener('click',function(){
        this_element = (this.parentElement).parentElement
        this_element.classList.add("invokeCloseAnimation")
        setTimeout(function() {
            this_element.style.display = "none"
        }, 100)
    })
})

var respond_buttons = document.querySelectorAll(".r")

respond_buttons.forEach(function(r){
    r.addEventListener('click',function(){
        rr = r.dataset.id
        alert("respond event for "+rr)
        console.log("respond event is triggered")
    })
})
