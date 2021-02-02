const cursor = document.querySelector('div.cursor');
    // when I click down, I want the cursor to get bigger and when I let go I want it smaller

    const growCursor = function () {
        cursor.classList.add('is-down')
    }

    const shrinkCursor = function () {
        cursor.classList.remove('is-down')
    }

 document.addEventListener("mousedown", function(){
     growCursor()
 })

 document.addEventListener("mouseup", function(){
    shrinkCursor()
})

document.addEventListener("mousemove", function(e) {
   
})

