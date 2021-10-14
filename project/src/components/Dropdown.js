import React from 'react'

function Sort(props, index) {
    return <option value={index}>{ props.brand }</option>;
   
}


function Dropdown({activ}) {
  const active = ['Active', 'BMW', 'Audi'];
  const sort = ['Sort by name', 'Tunde', 'Sunday'];
//   const{activ}=props
  return (
    <>
        <div class="select">
	    <select className="dropSort">
        {sort.map((car) =><Sort brand={car} />  )} 
        
      </select>
      </div>
     
    </>
  );
}
export default Dropdown