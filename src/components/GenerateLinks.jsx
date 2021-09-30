import React, {useState} from 'react';
import database from '../firebase';
import { ref, set } from "firebase/database";

function GenerateLinks(props){


  const [link1 , setLink1] = useState("");
  const [link2 , setLink2] = useState("");
  const [link3 , setLink3] = useState("");
  const [link4 , setLink4] = useState("");
  const [link5 , setLink5] = useState("");
  const [link6 , setLink6] = useState(""); 
  const [name , setName] = useState("");
  
  const [url, setUrl] = useState();


   // Push Function
   function writeUserData() {
    const db = database;
    var uniqueId = Math.floor(Math.random()*100000);
    setUrl("http://localhost:4000/" + name+ uniqueId);
            set(ref(db, 'users/'+name + uniqueId), {
              username: name,
              link1: link1,
              link2: link2,
              link3: link3,
              link4: link4,
              link5: link5,
              link6: link6 
            }); 
      }

      if(props.count > 5){
        document.getElementById("addNewLink").disabled = true;
      }


      

    switch(props.count){
        case 1:
            return (
                <div>
                    <input className = "spacing" type = "text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input className = "spacing" type = "url" placeholder="Enter link1" value={link1} onChange={(e) => setLink1(e.target.value)}/> 
                    <button id = "pushBtn" onClick={writeUserData}>PUSH</button>
                    <p>{url}</p>
                </div>
            );
        case 2:
            return(
                <div>
                    <input className = "spacing" type = "text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link1" value={link1} onChange={(e) => setLink1(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link2" value={link2} onChange={(e) => setLink2(e.target.value)}/>
            <button id = "pushBtn" onClick={writeUserData}>PUSH</button>
            <p>{url}</p>
                </div>
            );
        case 3:
            return(
                <div>
                    <input className = "spacing" type = "text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link1" value={link1} onChange={(e) => setLink1(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link2" value={link2} onChange={(e) => setLink2(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link3" value={link3} onChange={(e) => setLink3(e.target.value)}/>
            <button id = "pushBtn" onClick={writeUserData}>PUSH</button>
            <p>{url}</p>
                </div>
            );
        case 4:
            return(
                <div>
                    <input className = "spacing" type = "text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link1" value={link1} onChange={(e) => setLink1(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link2" value={link2} onChange={(e) => setLink2(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link3" value={link3} onChange={(e) => setLink3(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link4" value={link4} onChange={(e) => setLink4(e.target.value)}/>
            <button id = "pushBtn" onClick={writeUserData}>PUSH</button>
            <p>{url}</p>
                </div>
            );
        case 5:
            return(
                <div>
                    <input className = "spacing" type = "text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link1" value={link1} onChange={(e) => setLink1(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link2" value={link2} onChange={(e) => setLink2(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link3" value={link3} onChange={(e) => setLink3(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link4" value={link4} onChange={(e) => setLink4(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link5" value={link5} onChange={(e) => setLink5(e.target.value)}/>
            <button id = "pushBtn" onClick={writeUserData}>PUSH</button>
            <p>{url}</p>
                </div>
            );
        case 6:
            return(
                <div>
                    <input className = "spacing" type = "text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link1" value={link1} onChange={(e) => setLink1(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link2" value={link2} onChange={(e) => setLink2(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link3" value={link3} onChange={(e) => setLink3(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link4" value={link4} onChange={(e) => setLink4(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link5" value={link5} onChange={(e) => setLink5(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link6" value={link6} onChange={(e) => setLink6(e.target.value)}/>
            <button id = "pushBtn" onClick={writeUserData}>PUSH</button>
            <p>{url}</p>
                </div>
            ); 


    }

    /*
            <input className = "spacing" type = "text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link1" value={link1} onChange={(e) => setLink1(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link2" value={link2} onChange={(e) => setLink2(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link3" value={link3} onChange={(e) => setLink3(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link4" value={link4} onChange={(e) => setLink4(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link5" value={link5} onChange={(e) => setLink5(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link6" value={link6} onChange={(e) => setLink6(e.target.value)}/> 
            <button onClick={writeUserData}>PUSH</button>
            <p>{url}</p> */
}

export default GenerateLinks;