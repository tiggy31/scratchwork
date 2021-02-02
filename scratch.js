const cursor = document.querySelector('div.cursor');
const canvasIn = document.querySelector('canvas.in')
const canvasOut = document.querySelector('canvas.out')
const bodyTag = document.querySelector("body")
    // when I click down, I want the cursor to get bigger and when I let go I want it smaller
let isMouseDown = false
    const growCursor = function () {
        cursor.classList.add('is-down')
        cursor.innerHTML = `<span>Hello</span>`
    }

    const shrinkCursor = function () {
        cursor.classList.remove('is-down')
        cursor.innerHTML = `<span>Bye</span>`
    }


    const moveCursor = function (x,y) {
        cursor.style.left = x +"px"
        cursor.style.top = y +"px"
    }

//set up a canvas

  
const setupCanvas = function (canvas) {
    const sectionTag = document.querySelector("#section-1")
   const w = window.innerWidth
   const h = sectionTag.offsetHeight * 2
   console.log(h)
   console.log(w)
   const dpi = window.devicePixelRatio

   canvas.width = w * dpi
   canvas.height = h * dpi

   canvas.style.width = w +"px"
   canvas.style.height = h +"px"
   

   const context = canvas.getContext("2d")
          context.scale(dpi,dpi)

     if(canvas.classList.contains("in")) {
        context.fillStyle = "#000000"
        context.strokeStyle ="#ffffff"
     }else {
        context.fillStyle = "#ffffff"
        context.strokeStyle ="#000000"
     }



          context.fillStyle = "#000000"
          context.strokeStyle ="#ffffff"
          context.lineWidth = 80
          context.lineCap= "round"
          context.lineJoin = "round"
          context.rect(0,0,w,h)
          context.fill()

}

const letsDraw = (canvas,x,y) => {
    const context = canvas.getContext("2d")
    if(isMouseDown) {
        context.lineTo(x,y)
         context.stroke()
         
    }
    
    
}

 const startDraw = (canvas, x,y) => {
    const context = canvas.getContext("2d")
    // const colors = ["red","pink", "blue", "purple","green"]
    // const randomColor = Math.floor(Math.random()*colors.length)
    //     context.strokeStyle = colors[randomColor]
        context.beginPath()
        context.moveTo(x,y)
 }

setupCanvas(canvasIn)
setupCanvas(canvasOut)







 document.addEventListener("mousedown", function(e){
     isMouseDown = true
     growCursor()
     startDraw(canvasIn, e.pageX, e.pageY)
     startDraw(canvasOut, e.pageX, e.pageY)
 })

 document.addEventListener("mouseup", function(e){
    isMouseDown = false
    shrinkCursor()
   
})

document.addEventListener("mousemove", function(e) {
    console.log(e)
   moveCursor(e.pageX,e.pageY)
   letsDraw(canvasIn, e.pageX,e.pageY)
   letsDraw(canvasOut, e.pageX,e.pageY)
})

