#pragma strict
static var bac = 0.01;
static var score = 0.00;

function Start () {

}

function Update () {

    if (Time.frameCount % 800 == 0){
        bac += 0.01;
    }

    score += 0.04;

    GetComponent.<TextMesh>().text = "                                                     BAC: " + bac.ToString("F2")  + " Score: " + score.ToString("F2") ;
}
