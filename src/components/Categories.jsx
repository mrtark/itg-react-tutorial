import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import AddCategories from './AddCategories';

function Categories() {

    const [categories, setcategories] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/categories").then(x => {

            if (x.status === 200) {
                setcategories(x.data);
            } else {
                console.log("-> " + x.status + " " + x.data);
            }
        })
            .catch(e => {
                console.log(e);
            })

            .finally(x => {
                setloading(false);
            })
    }, [])

    return (
        <>
            {loading ? (
                <div className="card shadow mt-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="spinner-border text-warning spinner-border-m" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <div className="card shadow mt-3">
                    <div className="card-body">
                        <h4 className="card-title"><span className='bg-success text-white p-1'>GET</span> <span className='bg-secondary text-light p-1'>https://northwind.vercel.app/api/categories</span></h4>
                        <div className="table-responsive-md">
                            <table className="table table-warning mt-2">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">NAME</th>
                                        <th scope="col">DESCRIPTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map(category => (
                                        <tr className="" key={category.id}>
                                            <td>{category.id}</td>
                                            <td>{category.name}</td>
                                            <td>{category.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            <AddCategories></AddCategories>
        </>

    )
}

export default Categories