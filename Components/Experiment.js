

class Experiment {

    constructor(height, width) {
        this.height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        this.width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    }   

    create(height, width) {
        let context;
        let x = this.width;
        let y = this.height;
        let dx = 5;
        let dy = 4;
        let xdim1 = Math.floor((Math.random() * 100) + 1);
        let xdim2 = Math.floor((Math.random() * 100) + 1 + xdim1);
        let xdim3 = Math.floor((Math.random() * 100) + 1);
        let xdim4 = Math.floor((Math.random() * 100) + 1 + xdim3);
        let ydim1 = Math.floor((Math.random() * 500) + 1);
        let ydim2 = Math.floor((Math.random() * 500) + 1 + ydim1);
        let ydim3 = Math.floor((Math.random() * 500) + 1);
        let ydim4 = Math.floor((Math.random() * 500) + 1 + ydim3);

        function init()
        {
        context = experiment.getContext('2d');
        setInterval(draw,10);
        }

        function draw()
        {
        context.clearRect(0,0,1000,800);
        context.beginPath();
        context.fillStyle = "#41f477";
        context.fillRect(xdim3,xdim1,xdim4,xdim2);
        context.fillStyle = "#4286f4";
        context.fillRect(ydim1,ydim3,ydim2,ydim4);
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

export { Experiment }