#pragma strict

var frameOffset = 2;
var spawnInterval = 1.5;

function Start () {
    transform.Rotate(Vector3(270.0, 0.0, 0.0));
}

var prefabToSpawn : GameObject;
  var spawnLocation : Vector3;

InvokeRepeating("spawno", frameOffset, spawnInterval);     

  function spawno () {
     Instantiate(prefabToSpawn, spawnLocation, Quaternion.identity);
}
