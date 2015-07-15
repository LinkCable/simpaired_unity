#pragma strict
var count = 0.1;
var speed = 1.0;
//public var rotat = -10.0;

function Start () {
}

function Update () {
    transform.Translate(Vector3(0.0, 0.0, count));
    if(Input.GetKey(KeyCode.LeftArrow)){
        //transform.Translate(Vector3(0.02, 0.0, 0.0));
    }
    if(Input.GetKey(KeyCode.RightArrow)){
        //transform.Translate(Vector3(-0.02, 0.0, 0.0));
    }
    //transform.Rotate(Vector3(0.0, -Input.GetAxis("Horizontal") * rotat * Time.deltaTime, 0.0));
}
