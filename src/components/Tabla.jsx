import React from 'react'
import DataTable from 'react-data-table-component';

export const Tabla = () => {
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const columns = [
        {
            name: 'Name',
            selector: row => row.title,
            sortable: true,
            button: true
        },
        {
            name: 'Precio',
            selector: row => row.year,
            sortable: true,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
    return (
        <div className='w-full'>
            <DataTable
                columns={columns}
                data={data}
                selectableRows
                pagination
                expandableRows
                expandableRowsComponent={ExpandedComponent}
            />

        </div>
    )
}
