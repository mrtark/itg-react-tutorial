import React from 'react'
//import { suppliers } from '../data/Suppliers';

function Contents(props) {

    let name = "VSRM";
    let isBest = true;

    const hello = () => {
        alert("Hi !!");
    }

    /*
        ! test
        ? test
        * test
        TODO: test
    */

    return (
        <>
            <div className="card mt-4 mb-4 shadow">

                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    {
                        isBest === true ? <p className="card-text">Yes</p> : <p className="card-text">No</p>
                    }
                </div>
            </div>

            <button type="button" className="btn btn-primary" onClick={hello}>Hello</button>

            <div className="card mt-4 shadow">
                <div className="card-body">
                    <h4 className="card-title">Data Props Arr</h4>
                    <ul>
                        {/* {
                            props.data.map(i => <li>{i}</li>)
                        } */
                        }
                    </ul>
                </div>
            </div>
        </>


    )
}

export default Contents