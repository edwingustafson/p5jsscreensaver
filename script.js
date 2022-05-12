function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    noStroke();
    draw();
    frameRate(1.0 / 60.0 / 60.0);
}

function draw() {
    background(8.0, 16.0, 0.0);

    //  Point-topped hexagonal grid

    const dx = 15.0;
    const w = dx;
    const r = w / Math.sqrt(3.0) + 0.0;
    const h = r;
    const dy = 3.0 * r;

    for (let x = 0.0; x < width + r; x += dx)
        for (let y = 0.0; y < height + r; y += dy) {
            hexagon(x, y, r);
            hexagon(x + 0.5 * w, y + 1.5 * h, r);
        }
} 

function hexagon(x, y, r) {
    const angle = TWO_PI / 6.0;

    if( random() > 0.9975 ) {
        fill(32.0, 64 - random(32.0), 32.0);
    } else {
        fill(32.0 + random(64.0));
    }

	beginShape();

    for (let a = 0.0; a <= TWO_PI; a += angle) {
        const r0 = 0.95 * r;

        const sa = a + angle / 2.0;
        const sx = x + Math.cos(sa) * r0;
        const sy = y + Math.sin(sa) * r0;
        vertex(sx, sy);
    }

    endShape(CLOSE);
}
