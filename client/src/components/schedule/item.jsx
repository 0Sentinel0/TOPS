import React from 'react'

const ActivityItem = ({ item }) => {
  return (
    <div className="px-1 py-2">
      <h4>{item.name}</h4>
      <hr />
    </div>
  )
}

export default ActivityItem