#pragma strict

var label : UnityEngine.UI.Text = GetComponent(UnityEngine.UI.Text);

function Start () {

    label.text = "You have crashed with a BAC of " + editText.bac.ToString("F2") + ". This is equivalent to " + beers(editText.bac).ToString("F2") + " cans(12oz) of 4.5% beer, " 
    + shots(editText.bac).ToString("F2") + " shots(1.5oz) of 80 proof, or " + wine(editText.bac).ToString("F2") + " glasses(5oz) of 12% wine over an hour. Your final score was " + editText.score.ToString("F2");

}

function Update () {

}

function beers(bac: float){
    return bac / 0.008;
}

function shots(bac: float){
    return bac / 0.008;
}

function wine(bac: float){
    return bac / 0.008;
}