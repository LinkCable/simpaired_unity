#pragma strict

var frameOffset = 2;
var spawnInterval = 1.5;


function Start () {
 
}

var spawnLocationRight : Vector3;

InvokeRepeating("spawno", frameOffset, spawnInterval);     
	
  function spawno () {
  	var road_objects = GetComponent(roadObject).objects;
  	var left_or_right = [1, 2];

  	var spawnLocationLeft = Vector3(5.7, .0324, 45.26);
    var spawned_obj = road_objects[Random.Range(1, road_objects.length)];


    if(left_or_right[Random.Range(0,left_or_right.length)] == 1){
    	var cloneLeft = GameObject.Instantiate(spawned_obj, Vector3(5.7, .0324, 50), Quaternion.identity);
      cloneLeft.GetComponent(moveBack).moveY = 0.08;
      cloneLeft.GetComponent(moveBack).enabled = true;
      if(cloneLeft.name.Contains("road_Car")){
        cloneLeft.transform.rotation.y = 180;
        cloneLeft.transform.position.y = -.2;
        cloneLeft.GetComponent(moveBack).moveY = -0.08;
      }
    }

    if(left_or_right[Random.Range(0,left_or_right.length)] == 2){
    	var cloneRight = GameObject.Instantiate(spawned_obj, Vector3(7.8, .0324, 50), Quaternion.identity);
      cloneRight.GetComponent(moveBack).moveY = 0.03;
      cloneRight.GetComponent(moveBack).enabled = true;
      if (cloneRight.name.Contains("road_Cop")){
        cloneRight.transform.rotation.y = 180;
        cloneRight.GetComponent(moveBack).moveY = -0.03;
      }
      if(cloneRight.name.Contains("road_Car")){
        cloneRight.transform.position.y = -.2;
      }
      if (cloneRight.name.Contains("road_Chopper")){
        cloneRight.transform.rotation.y = 180;
        cloneRight.GetComponent(moveBack).moveY = -0.03;
      }
    }
}
