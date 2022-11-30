const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

strokeStyle = "Red";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let hue = 0
let LastX = 0;
let LastY = 0;
let direction =true;


let isDrawing = false;

function draw(e){
    
    if(!isDrawing) return;


    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.moveTo(LastX,LastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();

    [LastX,LastY] = [e.offsetX,e.offsetY]; 
    hue++;

    if (hue>=360){
        hue=0;
    }

    if (ctx.lineWidth >= 60 || ctx.lineWidth <= 1){
        direction = !direction ;

    } if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }


}


canvas.addEventListener('mousedown', (e)=>
{
    isDrawing=true;
    [LastX,LastY] = [e.offsetX,e.offsetY]
    
    

});
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup', ()=> isDrawing = false)
canvas.addEventListener('mouseout',()=> isDrawing= false)

