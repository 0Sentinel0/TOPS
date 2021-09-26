import React from 'react'

const GenericCardItem = ({ item, onDelete, onClick }) => {
  return (
    <li className="list-group-item">
      <div className="row w-100">
        <div className="col-11 p-0">
          {
            item.type? 
              <b onClick={() => onClick(item)} style={{cursor: 'pointer'}}>
                {item.name}
              </b> :
              <b>{item.name}</b>
          }
        </div>
        <div className="col-1 p-0">
          <span onClick={() => onDelete(item._id)} style={{cursor: 'pointer', color: 'red'}}>
            <i class="bi bi-trash-fill"></i>
          </span>
        </div>
      </div>
    </li>
  )
}

export default GenericCardItem