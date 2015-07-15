#pragma strict 
var rotateX = 0.0;
var rotateY = 0.0;
var rotateZ = 0.0;

var transformY = 0.0;



function Start () {
    transform.Rotate(Vector3(rotateX, rotateY, rotateZ));
    //transform.Translate(Vector3(transform.position.x, transformY, transform.position.z));
}