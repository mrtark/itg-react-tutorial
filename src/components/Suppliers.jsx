import React from 'react'
import { suppliers } from '../data/Suppliers'
import { Link } from 'react-router-dom'

function Suppliers() {
    return (
        <div className="card mt-4 shadow">
            <div className="card-body">
                <h4 className="card-title text-center">Suppliers</h4>
                <table>
                    <thead className="bg-warning text-center">
                        <tr>
                            <th>ID</th>
                            <th>Company Name</th>
                            <th>Contact Name</th>
                            <th>Contact Title</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody className='text-center bg-secondary text-white'>
                        {
                            suppliers.map(suppDatas =>
                                <tr>
                                    <td><Link to={'/suppliers' + suppDatas.id}>{suppDatas.id}</Link></td>
                                    <td>{suppDatas.companyName}</td>
                                    <td>{suppDatas.contactName}</td>
                                    <td>{suppDatas.contactTitle}</td>
                                    <td>{suppDatas.address?.country}</td>  {/* //TODO: null Check = ? */}
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Suppliers