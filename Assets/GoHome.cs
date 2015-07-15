using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class GoHome : MonoBehaviour {
	public Button homeText;
	// Use this for initialization
	void Start () {
	   homeText = homeText.GetComponent<Button> ();
	}
	

    public void pressHome(){
        Application.LoadLevel("menu");
    }

	// Update is called once per frame
	void Update () {
	
	}
}
