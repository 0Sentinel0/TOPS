import React from 'react'

const GenericCardItem = ({ item, onDelete, onClick }) => {
  return(
    <li className="list-group-item GC" key={item._id}>
      <div className="row w-100">
        <div className="col-11 p-0">
          { 
            item.type ? 
              <b onClick={() => onClick(item)}>{item.name}</b> 
            :
              <>
                <b>{item.name}</b>
                <span className="ms-3">
                  {
                    item.contribu === "on" 
                    && 
                    <>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </>
                  }
                </span>
              </>
          }
        </div>
        <div className="col-1 p-0">
          <span onClick={() => onDelete(item._id)} style={{cursor: 'pointer', color: 'red'}}>
            <i className="bi bi-trash-fill"></i>
          </span>
        </div>
      </div>
    </li>
  )
}

export default GenericCardItem