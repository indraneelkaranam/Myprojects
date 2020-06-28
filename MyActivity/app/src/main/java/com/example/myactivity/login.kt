package com.example.myactivity

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_login.*

class login : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)


        button.setOnClickListener {
            if(etname.text.toString().equals("chiru")
            &&etpassword.text.toString().equals("chiru123"))
            {
                var clickIntent = Intent(this@login,MainActivity::class.java)
                startActivity(clickIntent)
            }
            else
            {
                Toast.makeText(this,"Login Failed",Toast.LENGTH_SHORT).show()
            }

        }
    }
}
