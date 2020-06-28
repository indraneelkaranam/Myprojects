package com.example.myactivity

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.ImageView
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    lateinit var photo : ImageView      /*global variables declared and extended to predefined classes */


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)



        photo = findViewById(R.id.profilePic)

        photo?.setOnClickListener(
            {
                var clickIntent =Intent(this@MainActivity,profilePhoto::class.java)
                startActivity(clickIntent)
            }
        )

        eduButton.setOnClickListener {
            val intent =Intent(this,Education::class.java)
            startActivity(intent)
        }

        hobButton.setOnClickListener {
            val intent =Intent(this,Hobbies::class.java)
            startActivity(intent)
        }

        locButton.setOnClickListener {
            val intent =Intent(this,Googlemap::class.java)
            startActivity(intent)
        }


    }

}
