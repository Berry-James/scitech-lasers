

const Game = {
    create: () => {
        var context;
        var x=900;
        var y=700;
        var dx= 5;
        var dy= 4;
        var xdim1= Math.floor((Math.random() * 100) + 1);
        var xdim2= Math.floor((Math.random() * 100) + 1 + xdim1);
        var xdim3= Math.floor((Math.random() * 100) + 1);
        var xdim4= Math.floor((Math.random() * 100) + 1 + xdim3);
        var ydim1= Math.floor((Math.random() * 500) + 1);
        var ydim2= Math.floor((Math.random() * 500) + 1 + ydim1);
        var ydim3= Math.floor((Math.random() * 500) + 1);
        var ydim4= Math.floor((Math.random() * 500) + 1 + ydim3);

        function init()
        {
        context= boxContainer.getContext('2d');
        setInterval(draw,10);
        }

        function draw()
        {
        context.clearRect(0,0,1000,800);
        context.beginPath();
        context.fillStyle="#41f477";
        context.fillRect(xdim3,xdim1,xdim4,xdim2);
        context.fillStyle="#4286f4";
        context.fillRect(ydim1,ydim3,ydim2,ydim4);
/*         context.fillStyle="#ff1e1e"; */
        context.arc(x,y,10,0,Math.PI*2,true);
        context.closePath();
        context.fill();

        // Boundary Logic
        if( x<0 || x>1000) dx=-dx;
        if( y<0 || y>800) dy=-dy;
        if( x<xdim3+xdim4 && x>xdim3 && y<xdim1+xdim2 && y>xdim1) dx=-dx, dy=Math.floor((Math.random() * -10) + dx);
        if( x<ydim1+ydim2 && x>ydim1 && y<ydim3+ydim4 && y>ydim3) dx=-dx, dy=Math.floor((Math.random() * -10) + dx);

        x+=dx;
        y+=dy;
        }
        init();

            }
}

export { Game }