
import { useState } from "react";

const User= ({ name })=>{
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(2);
    return <div className="user-card">
        <h1>Name : {name}</h1>
        <h2>Count : {count}</h2>
        <h2>Count2 : {count2}</h2>
        <h2>Age : 24</h2>
        <h3>Location : Matara</h3>
        <h4>Contact : 0712503456</h4>



    </div>
}

export default User;
