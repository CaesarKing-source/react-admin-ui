import { GridColDef } from '@mui/x-data-grid';
import './add.scss'

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = (props: Props) => {
  const handleSubmit = (e:React.DOMAttributes<HTMLFormElement> ) => {
    e.preventDefault();
    // Adding New Record
  }

  return (
    <div className="add">
      <div className="modal">
        <span className='close-modal' onClick={() => props.setOpen(false)}>X</span>
        <h2 className="modal-header">Add New {props.slug}</h2>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            { props.columns.filter(item => item.field != 'id' && item.field != 'img')
              .map(column => (
                <div className="item">
                  <label htmlFor="" className='form-label'>{column.headerName}</label>
                  <input type={column.field} />
                </div>
            )) }
            <button type="submit">ADD RECORD</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Add
