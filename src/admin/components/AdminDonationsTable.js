import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import { useStateValue } from '../../StateProvider';
import Icon1 from '@material-ui/icons/ReplyAll';
import Icon2 from '@material-ui/icons/Markunread';
import Icon3 from '@material-ui/icons/CloudDownload';
import TextField from '@material-ui/core/TextField';
import "../styles/AdminDonationTable.css";

function AdminDonationsTable() {
    const [{donations}, dispatch] = useStateValue();
    const [search, setSearch] = useState("");
    const data = donations;
    const columns = [
      {
        name: 'fecha',
        selector: 'date',
        sortable: true,
      },
      {
        name: 'valor',
        selector: 'donationValue',
        sortable: true,
      },
      {
        name: 'id del Donante',
        selector: 'donator_id',
        sortable: true,
      },
      {
        name: 'Nombre del Donante',
        selector: 'donatorFullName',
        sortable: true,
      },
      {
        name: 'Email del Donante',
        selector: 'donatorEmail',
        sortable: true,
      },
      {
        name: 'Mensaje de donación',
        selector: 'donationMessage',
        sortable: true,
      },
    ];

    const searchData = (rows) => {
        return rows.filter((row) => row.donatorFullName.toLowerCase().indexOf(search) > -1 || row.donator_id.toLowerCase().indexOf(search) > -1)
    }

    return (
        <div className="adminDonationsTable">
            <div class="container-fluid">
                <h1 class="h3 mb-2 text-gray-800">Ítems de la tienda virtual</h1>
                <p class="mb-4">Aquí puedes visualizar los ítems de la tienda</p>

                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Ítems</h6>
                    </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <DataTable
                            columns={columns}
                            data={searchData(data)}
                            pagination={true}
                            noHeader={true}
                            subHeader={true}
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
                        />
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default AdminDonationsTable
