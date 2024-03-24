import { Grid2Slot } from '@mui/material'
import DataTable from '../../components/dataTable/DataTable'
import { userRows } from '../../constants/data';
import { useState } from 'react';
import './user.scss'
import Add from '../../components/add/Add';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <button onClick={() => setOpen(true)}>ADD NEW USER</button>
      </div>
      <div className="dataTable">
        <DataTable slug="users" columns={columns} rows={userRows} />
      </div>
      { open && <Add slug="user" columns={columns}  setOpen={setOpen}/>}
    </div>
  )
}

export default Users
