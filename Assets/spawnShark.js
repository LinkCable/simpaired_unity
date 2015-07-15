#pragma strict

var drunkScript: editText = GetComponent(editText); 

function Start () {

}

function Update () {

	if(drunkScript.bac >= 0.20){
		GetComponent(moveBack).enabled = true;
	}
}