#pragma strict
var moveX = 0.0;
var moveY = 0.0;
var moveZ = 0.0;
function Start () {

}

function Update () {
    transform.Translate(Vector3(moveX, moveY, moveZ));
     if (GetComponent.<Renderer>().transform.position.z < -14) {
        Destroy(this.gameObject);
    }
}
