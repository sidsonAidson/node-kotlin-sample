import kotlin.js.Promise
import kotlin.js.json

external fun require(module:String):dynamic

fun main(args: Array<String>) {
    println("Hello Word!")

    val express = require("express")
    val app = express()
    val request = require("request")

    app.get("/", { _, res: dynamic ->

        request("https://randomuser.me/api/", {_, _, body ->
            if(body != null){
                res.json( json(
                        "success" to 1,
                        "user" to JSON.parse(body),
                        "others" to arrayOf<String>(
                                "Kotin",
                                "Javascript",
                                "Intercal",
                                "Malbodge",
                                "BrainFuck"
                        )
                ));
            }
            else{
                res.json( json(
                        "success" to -1
                ));
            }

        })

    })

    app.get("/with-promise", { _, res ->

        val fetch = require("node-fetch") !!as (url: String) -> Promise<dynamic>

        fetch("https://randomuser.me/api/")
                .then({result -> result.json() !!as Any})
                .then({jsonResult: Any ->
                      res.json( json(
                            "success" to 1,
                            "user" to jsonResult,
                            "others" to arrayOf<String>(
                                    "Kotin",
                                    "Javascript",
                                    "Intercal",
                                    "Malbodge",
                                    "BrainFuck"
                            )
                    )) as? Unit
                })
                .catch { _ ->
                    res.json( json(
                            "success" to -1
                    )) as? Unit
                }
    })


    app.listen(5000, {
        println("Listening on port 5000")
    })

}