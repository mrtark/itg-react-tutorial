import React, { useState } from 'react'
import { countries } from '../data/Countries';

function Odev1() {

  const [size, setSize] = useState({ width: 55, height: 40 });

  // ? const tenCountrys = countries.slice(0, 10);
  const [countrys, setCountry] = useState(countries.slice(0, 10));
  //const [showTable, setShowTable] = useState(true);

  const removeTop = () => {
    setCountry(topCountri => topCountri.slice(1));
  };

  const removeAll = () => {
    setCountry([]);
    //setShowTable(false);
  };
  
  // if(!countrys.length > 0){
  //   setShowTable(false);
  // }

  // TODO: const [buttonStyle, setButtonStyle] = useState({width : 50, height : 50});
  // ?

  return (
    <>
      <div className="card mt-3 shadow mx-auto w-25 text-center">
        <div className="card-body">
          <button type="button" className="btn btn-primary"
            style={{ width: `${size.width}px`, height: `${size.height}px` }}
            onClick={() => setSize({ width: size.width + 100, height: size.height + 100 })}>btn</button>
        </div>
      </div>

      <div className="card mt-4 mx-auto w-75">
        <div className="card-body">
          <h4 className="card-title text-center">Countries</h4>
          <hr />
          <button type="button" className="btn btn-warning m-2 shadow" onClick={removeTop}><i className="fa-solid fa-trash-arrow-up"></i></button>
          <button type="button" className="btn btn-danger shadow" onClick={removeAll}><i className="fa-solid fa-trash-can"></i></button>


          <div className="table-responsive mt-2 shadow-lg" >
            <table className="table table-success table-striped table-hover shadow-lg">
              <thead className='text-center'>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Code</th>
                  <th scope="col">Capital</th>
                  <th scope="col">Currency</th>
                </tr>
              </thead>
              <tbody className='text-center'>
              {
                    countrys.map(coountries =>
                      <tr key={coountries.id}>
                        <td >{coountries.name}</td>
                        <td >{coountries.code}</td>
                        <td >{coountries.capital}</td>
                        <td >{coountries.currency}</td>
                      </tr>
                    )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}

export default Odev1