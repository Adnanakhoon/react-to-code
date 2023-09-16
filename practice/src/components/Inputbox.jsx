import React from "react";

function Inputbox() {
  return (
    <>
   
    {/* <div className="container">
      <div className="container2">
        <div className="inputneechelao" >
        <label htmlFor="from">From</label>
        <input type="Number" />
        </div>

        <div className="container3">
          <p>currency type</p>
          <select name="name" id="select">
            <option value="usd">usd</option>
          </select>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="container2">
        <div className="inputneechelao" >
        <label htmlFor="from">To</label>
        <input type="Number" />
        </div>

        <div className="container3">
          <p>currency type</p>
          <select name="name" id="select">
            <option value="usd">usd</option>
          </select>
        </div>
      </div>
    </div> */}


    <div className="container">
      <div className="container2">
       
          <div className="labelinput tree">
            <label htmlFor="from">From</label>
            <input type="Number" placeholder="0" />
          </div>
          <div className="selectcurrency tree">
           <label htmlFor="">currency type</label>
            <select name="name" id="select">
              <option value="
              usd">usd</option>
            </select>
          </div>
      
      </div>
    </div>
    
    </>
  );
}

export default Inputbox;
