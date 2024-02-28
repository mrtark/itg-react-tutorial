import React, { useContext, useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { trTR } from '@mui/material/locale';
import axios from 'axios';
import Swal from 'sweetalert2';
import FavoriOrders from './FavoriOrders';
import { FavoritesContext } from '../contexts/FavoritesContext';


function Odev2() {

    const [orders, setOrders] = useState([]);

    const loadData = () => {
        axios.get("https://northwind.vercel.app/api/orders").then(x => { setOrders(x.data) });
    }

    const { addToFavorites } = useContext(FavoritesContext)

    useEffect(() => {
        loadData();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        const formattedDate = new Date(dateString).toLocaleDateString('tr-TR', options);
        return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    };

    const theme = createTheme(
        {
            palette: {
                primary: { main: '#1976d' },
            },
        },
        trTR
    );

    const localTx = {
        noRowsLabel: 'Veri bulunamadı',
        toolbarColumns: 'Sütunlar',
        toolbarFilter: 'Filtrele',
        toolbarDensity: 'Yoğunluk',
        toolbarDensityLabel: 'Yoğunluğu ayarla',
        toolbarDensityCompact: 'Sıkışık',
        toolbarDensityStandard: 'Normal',
        toolbarDensityComfortable: 'Geniş',
        columnMenuShowColumns: 'Sütunları göster',
        columnMenuFilter: 'Filtrele',
        columnMenuHideColumn: 'Sütunu gizle',
        columnMenuSortAsc: 'Artan sırala',
        columnMenuSortDesc: 'Azalan Sırala',
        columnMenuManageColumns: 'Sütunları Yönet',
        columnsPanelHideAllButton: 'Hepsini Gizle',
        columnsPanelShowAllButton: 'Hepsini Göster',
    }

    const deleteOrder = (id) => {
        axios.delete('https://northwind.vercel.app/api/orders/' + id).then(x => {
            loadData();
        }).catch(e => {
            error(e);
            console.log(e);
        });
    }

    const columns = [
        {
            field: "id",
            headerName: "Sipariş Numarası",
            width: 200
        },
        {
            field: "customerId",
            headerName: "Müşteri Numarası",
            width: 200
        },
        {
            field: "orderDate",
            headerName: "Sipariş Tarihi",
            width: 200,
            renderCell: (params) => {
                return <span>{formatDate(params.value)}</span>;
            }
        },
        {
            field: "shippedDate",
            headerName: "Gönderim Tarihi",
            width: 200,
            renderCell: (params) => {
                return <span>{formatDate(params.value)}</span>;
            }
        },
        {
            field: "Delete",
            headerName: "Sil",
            width: 200,
            renderCell: (x => {
                return <button className='btn btn-danger' onClick={() => handleDelete(x.row.id)}>Sil</button>
            })
        },
        {
            field: "addFav",
            headerName: "Favoriye Ekle",
            width: 200,
            renderCell: (x => {
                return <button className='btn btn-primary' onClick={() => addFav(x.row)}>Favoriye Ekle</button>
            })
        }

    ];

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Emin misiniz?',
            text: 'Bu öğeyi silmek istediğinizden emin misiniz?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Evet, sil',
            cancelButtonText: 'İptal',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteOrder(id);
                success();
            }
        });
    };

    const success = (row) => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            text: "[ " + row.customerId + " ] Favoriye Eklendi.",
            showConfirmButton: false,
            timer: 700
        });
    }

    const error = (e) => {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Hata",
            text: e,
            showConfirmButton: false,
            timer: 700
        });
    }

    const addFav = (id) => {
        addToFavorites(id.customerId);
        success(id);
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="card mt-5 shadow w-75 mx-auto">
                <div className="card-body">
                    <h4 className="card-title"><span className='bg-success text-white p-1'>GET</span> <span className='bg-secondary text-light p-1'>https://northwind.vercel.app/api/orders</span></h4>

                    <div className='mt-4 shadow'>
                        <div style={{ height: 400 }}>
                            <DataGrid rows={orders} columns={columns} localeText={localTx} />
                        </div>
                    </div>
                </div>
            </div>

            <FavoriOrders></FavoriOrders>

        </ThemeProvider>





    );
}

export default Odev2;
