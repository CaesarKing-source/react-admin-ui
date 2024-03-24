import { Link } from 'react-router-dom';
import { menu } from '../../constants/data'
import './menu.scss';

const Menu = () => {
  return (
    <div className='menu'>
      { menu.map((item) => (
        <div className="item" key={item.id}>
          <span className='title'>{item.title}</span>

          { item.listItems.map((listitem) => (
            <Link className='listItem' to={listitem.url} key={listitem.id}>
              <img src={listitem.icon} alt="menu-icon" />
              <span className="listItemName">{listitem.title}</span>
            </Link>
          ))}
      </div>
      )) }
    </div>
  )
}

export default Menu
