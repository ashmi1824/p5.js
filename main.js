function preload() {

}
function setup() {
    canvas = createCanvas(350, 350);
    canvas.position(565,255);
    video = createCapture(VIDEO);
    video.hide();


}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90,
});
camera = document.getElementById("webcam_view");


function draw() {

    canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(10, 10, 130, 10);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(130, 130, 10, -120);
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(10, 140, 10, -120);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(10, 130, 130, 10);
         image(video, 0, 0, 350, 350);
            }
}
function takeSnapshot() {
    console.log("finally!");
    save('student_name.png');
   
}
