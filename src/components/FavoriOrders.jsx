import React, { useContext } from 'react'
import { FavoritesContext } from '../contexts/FavoritesContext'

function FavoriOrders() {

    const {favorites, clear} = useContext(FavoritesContext)


  return (
    <>
        

        <div className="card mt-4">
        <div className="card-body">
        <button type="button" className="btn btn-warning" onClick={() => clear()}>Temizle</button>
            <h4 className="card-title text-center">Favoriler</h4>
            <ul>
                {
                    favorites.map(x =>(
                        <li key={x.id}>{x}</li>
                    ))
                }
            </ul>
        </div>
        </div>
    </>
  )
}

export default FavoriOrders