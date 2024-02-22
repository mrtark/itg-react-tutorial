import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios';

function Grid() {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then(x => setproducts(x.data))
    })


    const columns = [
        {
            field: "id",
            headerName: "Product Id",
            width: 200
        },
        {
            field: "name",
            headerName: "Product Name",
            width: 400
        },
        {
            field: "unitPrice",
            headerName: "Product Price",
            width: 300
        },
        {
            field: "kdvPrice",
            headerName: "KDV",
            width: 200,
            renderCell: (x) => {
                return <span>{(x.row.unitPrice * 0.2).toFixed(3)}</span>
            }
        },
        {
            field : "Delete",
            headerName : "Delete",
            width : 200,
            renderCell : (x => {
                return <button className='btn btn-danger'>Delete</button>
            })
        }
    ]


    // const productDelete = (id) => {
    //     axios.delete("https://northwind.vercel.app/api/products/${id}").then( x => {
            
    //     })
    // }

    return (
        <>
            
            <div className='mt-4 shadow'>
                <div style={{ height: 400 }}>
                    <DataGrid rows={products} columns={columns} />
                </div>
            </div>

        </>
    )
}

export default Grid