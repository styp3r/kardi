import express from 'express';
import database from './src/firebase.js';
import { ref, onValue } from "firebase/database";

const app = express();
const social = ["github", "#000000", "facebook", "#3b5998", "instagram", "#ff1a75", "behance", "#1769ff" ,"snapchat", "#fffc00","twitter", "#55acee", "linkedin", "#007bb5" ,"youtube", "#ff0000", "tiktok", "#333333", "reddit", "#ff4500", "tumblr", "#32506d", "apple", "#b3b3b3", "spotify", "#00e461"];

app.get("/:id", (req, res)=>{
    const db = database;
    const starCountRef = ref(db, 'users/'+req.params.id);
    onValue(starCountRef, (snapshot) => {
        if(snapshot.exists()){
            const data = snapshot.val();
            const entries = Object.entries(data);
            res.write("<body style = 'width: 100%; height: 100%; overflow-x: hidden; background-image: linear-gradient("+data.zcolor[0]+", "+data.zcolor[1]+");'><head><title>@"+data.username+" | Kardi5</title><link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.15.4/css/all.css' integrity='sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm' crossorigin='anonymous'></head></body>");
            res.write("<img style = 'display: block;margin-left: 50%; transform: translateX(-50%); margin-top: 5vmax; border-radius: 5vmin;' src = '"+data.zzurl+"' width= '200' height='200'/>");
            res.write("<h3 style = 'display: inline-block; margin-left: 50%; transform: translateX(-50%); margin-top: 2vmax;'>"+data.username+"</h3>");
            for(let i = 0; i < (entries.length-3); i = i + 2){

                var color = "#999999";
                var socialName = "link";
                var type = "fas";
                for(let j = 0; j< social.length; j++){

                    var str = entries[i][1];
                    var isFound = str.search(social[j]);
                    if(isFound !== -1){
                        socialName = social[j];
                        color = social[j + 1];
                        type = "fab";
                        break;
                    }
                }
    
                res.write("<h4 style = 'text-align: center; margin-left: 50%; transform: translateX(-50%); margin-top: 2vmax; width: 25vmax; border-radius: 2.5vmin ; background-color: "+color+"; padding: 2vmin;'><i style = 'position: absolute; left: 2vmin; display: inline-block; color: #ffffff;' class='"+type+" fa-"+socialName+"'></i><a style = 'display: inline-block; text-decoration: none; color: #ffffff;' href = '"+entries[i][1]+"' target='_blank'>"+entries[i+1][1]+"</a></h4>");
                
            }
            res.send();
        }else{
            res.send("ERROR 404");
        }
});   
});

app.listen(4000, ()=>{
    console.log("server started on port 4000");
});