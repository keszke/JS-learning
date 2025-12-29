const Box = document.querySelector(`#box`);
const handles = document.querySelector(`.resize-handle`)
let isDragingBox = false;
let isResizing = false;
let resizeDirection = "";
let StartBox = {
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    top: 0,
    bottom: 0
}

let Offset ={
    x: "",
    y: "",
}



function CheckCollision(event){
    const MousePosition = {
        x: event.clientX,
        y: event.clientY
    
    }
    const Boxrect = Box.getBoundingClientRect();
    if (MousePosition.x >= Boxrect.x &&
        MousePosition.x <= Boxrect.x + Boxrect.width &&
        MousePosition.y >= Boxrect.y &&
        MousePosition.y <= Boxrect.y + Boxrect.height) {
        isDragingBox = true;
        // calculate relative drag position from TOP
        Offset.x = Boxrect.left - MousePosition.x
        Offset.y = Boxrect.top - MousePosition.y
    }
    else if (event.target.matches(`.resize-handle`)){
        resizeDirection = event.target.dataset.direction
        isResizing = true;
        StartBox = {
            left: Boxrect.left,
            right: Boxrect.right,
            width: Boxrect.width,
            height: Boxrect.height,
            top: Boxrect.top,
            bottom: Boxrect.bottom
};
            console.log(resizeDirection);

    }
    }



function BoxMovement(event){
    const MousePosition = {
        x: event.clientX,
        y: event.clientY
        
    }
    if (isDragingBox && !isResizing){
    Box.style.left = `${MousePosition.x + Offset.x}px`;
    Box.style.top = `${MousePosition.y + Offset.y}px`;
    }
    if (isResizing){
        ResizeBox(MousePosition)
}
}

// TO DO TOp left etc
function ResizeBox(MousePosition){
    const deltaY = MousePosition.y - StartBox.top;
    const deltaX = MousePosition.x - StartBox.left;
    //Top
    if (resizeDirection === "top"){
        const newHeight = StartBox.height - deltaY;
        console.log("RESEIZIGN")
        Box.style.height = `${newHeight}px`;
        Box.style.top = `${StartBox.top + deltaY}px`;
        console.log(Box.style.height)
    }
    //Bottom
    if (resizeDirection == "bottom"){
        const newHeight = MousePosition.y - StartBox.top;
        Box.style.height = `${newHeight}px`;
    }
    //Left
    if (resizeDirection === "left"){
        const newWidth = StartBox.width - deltaX;
        Box.style.width = `${newWidth}px`;
        Box.style.left = `${StartBox.left + deltaX}px`;
    }
    //right
    if (resizeDirection === "right"){
        const newWidth = MousePosition.x - StartBox.left;
        Box.style.width = `${newWidth}px`;
    }
    // Top-Left

}

document.addEventListener(`mousedown`, CheckCollision)
document.addEventListener(`mouseup`, function(){
    isDragingBox = false;
    isResizing = false;
})
document.addEventListener(`mousemove`, BoxMovement)


