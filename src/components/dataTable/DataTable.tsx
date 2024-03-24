import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import './dataTable.scss';
import { Link } from 'react-router-dom';

type Props = {
  columns: GridColDef[],
  rows: object[],
  slug: string
}

const DataTable = (props: Props) => {
  const handleDelete = (id:number) => {
    // Delete API
    console.log(id + 'has been deleted')
  }


  const actionColumn:GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="view-icon" />
          </Link>
          <div className="delete" onClick={() => {handleDelete(params.row.id)}}>
            <img src="/delete.svg" alt="delete-icon" />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="dataTable">
      <DataGrid
        className='dataGrid'
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        rowHeight={40}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar: GridToolbar}}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {debounceMs: 500},
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableDensitySelector
      />
    </div>
  )
}

export default DataTable
