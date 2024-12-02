import React from 'react';

const ItemList = ({ items, toggleItem, deleteItem }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
            <span
              onClick={() => toggleItem(item.id)}
              style={{
                textDecoration: item.purchased ? 'line-through' : 'none',
                cursor: 'pointer',
                flexGrow: 1,
              }}
            >
              {item.name}
            </span>
            <button onClick={() => deleteItem(item.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
