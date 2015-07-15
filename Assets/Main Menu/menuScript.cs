using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class menuScript : MonoBehaviour {

    public Button playText;
    public Button helpText;
    public Button aboutText;
    public Button quitText;

	// Use this for initialization
	void Start () {
	   playText = playText.GetComponent<Button> ();
       helpText = helpText.GetComponent<Button> ();
       aboutText = aboutText.GetComponent<Button> ();
       quitText = quitText.GetComponent<Button> ();
	}
	
    public void pressPlay(){
        Application.LoadLevel(1);
    }

    public void pressQuit(){
        Application.Quit();
    }

    public void pressHelp(){
        Application.LoadLevel(4);
    }

    public void pressAbout(){
        Application.LoadLevel(2);

    }

	// Update is called once per frame
	void Update () {
	
	}
}
