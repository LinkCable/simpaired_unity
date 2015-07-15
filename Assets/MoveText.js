#pragma strict
var count = 0.1;
var speed = 1.0;
var rotat = -20.0;

function Start () {
}

function Update () {
transform.Translate(Vector3(0.0, 0.0, count));
transform.Rotate(Vector3(0.0, -Input.GetAxis("Horizontal") * rotat * Time.deltaTime, 0.0));
}
