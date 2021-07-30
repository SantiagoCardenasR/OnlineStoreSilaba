import React, { useState } from 'react'
import {reference} from '../../firebase';
import DataTable from 'react-data-table-component';
import { useStateValue } from '../../StateProvider';
import Icon1 from '@material-ui/icons/ReplyAll';
import Icon2 from '@material-ui/icons/Markunread';
import Icon3 from '@material-ui/icons/CloudDownload';
import TextField from '@material-ui/core/TextField';
import "../styles/AdminBillsTable.css"
function AdminBillsTable() {
    const [{bills}, dispatch] = useStateValue();
    const [search, setSearch] = useState("");
    const data = bills;

    const getItemsNames = (buyerId, billDate) => {
        var itemsNames = "";
        bills.forEach(element => {
            if(element.buyerId === buyerId && element.date === billDate) {
                for(let i = 0; i < element.items.length; i++) {
                    itemsNames = itemsNames + " " + element.items[i].title + " " +element.items[i].code
                }
            }
        });
        return itemsNames;
    }

    const getItemsQuanities = (buyerId, billDate) => {
        var itemsQuantites = "";
        bills.forEach(element => {
            if(element.buyerId === buyerId && element.date === billDate) {
                for(let i = 0; i < element.items.length; i++) {
                    itemsQuantites = itemsQuantites + " -> " + element.items[i].quantity
                }
            }
        });
        return itemsQuantites;
    }

    const columns = [
        {
            name: 'date',
            selector: 'date',
            sortable: true,
            wrap: true,
            center: true,
        },
        {
          name: 'billPrice',
          selector: 'billPrice',
          sortable: true,
          wrap: true,
          center: true,
        },
        {
          name: 'buyerEmail',
          selector: 'buyerEmail',
          sortable: true,
          wrap: true,
          center: true,
        },
        {
          name: 'buyerId',
          selector: 'buyerId',
          sortable: true,
          wrap: true,
          center: true,
        },
        {
          name: 'buyerName',
          selector: 'buyerName',
          sortable: true,
          wrap: true,
          center: true,
        },
        {
            name: 'buyerPhone',
            selector: 'buyerPhone',
            sortable: true,
            wrap: true,
            center: true,
        },
        {
            name: 'shippingAddress',
            selector: 'shippingAddress',
            sortable: true,
            wrap: true,
            center: true,
        },
        {
            name: 'shippingCity',
            selector: 'shippingCity',
            sortable: true,
            wrap: true,
            center: true,
        },
        {
            name: 'items',
            selector: (row) => getItemsNames(row.buyerId, row.date),
            sortable: true,
            wrap: true,
            center: true,
        },
        {
            name: 'quantityOfItems',
            selector: (row) => getItemsQuanities(row.buyerId, row.date),
            sortable: true,
            wrap: true,
            center: true,
        }
    ];

    const searchData = (rows) => {
        return rows.filter((row) => row.buyerName.toLowerCase().indexOf(search) > -1 || row.buyerId.toLowerCase().indexOf(search) > -1)
    }

    return (
        <div className="adminBillsTable">
             <div class="container-fluid">
                <h1 class="h3 mb-2 text-gray-800">Facturas de la tienda virtual</h1>
                <p class="mb-4">Aquí puedes visualizar las facturas de la tienda</p>

                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Facturas</h6>
                    </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <DataTable
                            columns={columns}
                            data={searchData(data)}
                            pagination={true}
                            noHeader={true}
                            subHeader={true}
                            responsive={true}
                            subHeaderComponent={
                                (
                                  <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <TextField id="outlined-basic" label="Search" value={search} onChange={event => setSearch(event.target.value)} type="search" variant="outlined" size="small" style={{ margin: '5px' }} />
                                    <Icon1 style={{ margin: '5px' }} color="action" />
                                    <Icon2 style={{ margin: '5px' }} color="action" />
                                    <Icon3 style={{ margin: '5px' }} color="action" />
                                  </div>
                                )
                              }
                              subHeaderAlign={'left'}
                              fixedHeader={false}
                              fixedHeaderScrollHeight="300px"
                              direction={'auto'}
                              className="adminBillsTable__billsTable"
                        />
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default AdminBillsTable
