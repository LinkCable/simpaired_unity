#pragma strict
var count = 0.1;
var speed = 1.0;
var drunkScript: editText = GetComponent(editText); 
var canCallFunction = true;

function Start () {
}

function Update () {

    if(Input.GetKey(KeyCode.LeftArrow)){
        if(canCallFunction){
            wait(drunkScript.bac * 2, "left");
        }
    }
    if(Input.GetKey(KeyCode.RightArrow)){
        if(canCallFunction){
            wait(drunkScript.bac * 2, "right");      
            
        }
    }
}

function wait(seconds, direction){
    canCallFunction = false;
    yield WaitForSeconds(seconds);
    if(direction === "left"){
        transform.Translate(Vector3(-0.06 - drunkScript.bac , 0.0, 0.0));
    }
    if (direction === "right"){
        transform.Translate(Vector3(0.06 + drunkScript.bac , 0.0, 0.0));
    }

    canCallFunction= true;
} 

function OnTriggerEnter (other : Collider) {
    Application.LoadLevel(3);
}