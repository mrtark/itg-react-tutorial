import axios from 'axios';
import React from 'react'
import { useState } from 'react'

function AddCategories() {

    const [name, setname] = useState("");
    const [description, setdescription] = useState("");

    const add = () => {
        let newProduct = {
            name: name,
            description: description
        }

        axios.post("https://northwind.vercel.app/api/categories", newProduct)
            .then(x => {
                alert("Add Sucess!");
            })
            .catch(ex => {
                alert("hata : " + ex)
            })
    }

    return (
        <>
            <div className="card shadow mt-3">
                <div className="card-body">
                    <h4 className="card-title"><span className='bg-warning text-white p-1'>POST</span> <span className='bg-secondary text-light p-1'>https://northwind.vercel.app/api/categories</span></h4>

                    <div className='mt-4'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(a) => setname(a.target.value)} />
                            <div id="emailHelp" className="form-text">Add Category Name</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(a) => setdescription(a.target.value)} />
                            <div id="emailHelp" className="form-text">Add Category Description</div>
                        </div>

                        <button type="button" className="btn btn-primary" onClick={add}>Add Category</button >
                    </div>

                </div>
            </div>

            <div className="card mt-5">
                <div className="card-body">
                    <h4 className="card-title">-</h4>
                    <p className="card-text">-</p>
                </div>
            </div>


        </>
    )
}

export default AddCategories