import React from 'react'
import DataTable from 'react-data-table-component';
import Loader from './Loader';

export const Tabla = ({ columns, data, loading, pagination, ...rest }) => {
    return (
        <div className='w-full'>
            <DataTable
                columns={columns}
                data={data || []}
                selectableRows
                pagination
                progressPending={loading}
                progressComponent={<Loader />}
                {...rest}
            />

        </div>
    )
}
