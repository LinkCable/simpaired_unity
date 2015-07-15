#pragma strict

var blur = 0.0;
var bac = 0.01; 

function Start(){
     blur = GetComponent(UnityStandardAssets.ImageEffects.CameraMotionBlur).maxVelocity;    
}
 
function Update(){

	if (Time.frameCount % 800 == 0){
        bac += 0.01;
    }
     GetComponent(UnityStandardAssets.ImageEffects.CameraMotionBlur).maxVelocity = blur;
     blur = bac * 300;
 }