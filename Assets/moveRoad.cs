using UnityEngine;
using System.Collections;

public class moveRoad : MonoBehaviour {
    //Material texture offset rate
    float speed;
	// Use this for initialization
	void Start () {
        speed = .15f;
	}
	
	// Update is called once per frame
    void Update () {
        float offset = Time.time * speed;     
        GetComponent<Renderer>().material.mainTextureOffset = new Vector2(0, -offset); 
	}
}
