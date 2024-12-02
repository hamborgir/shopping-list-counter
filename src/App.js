import React, { useState } from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Footer from './components/Footer';

const App = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const addItem = () => {
    if (itemName.trim() === '') return;
    const newItem = {
      id: Date.now(),
      name: itemName,
      purchased: false,
    };
    setItems([...items, newItem]);
    setItemName('');
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const purchasedCount = items.filter((item) => item.purchased).length;

  return (
    <div>
      <Header />
      <div>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Add new item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ItemList items={items} toggleItem={toggleItem} deleteItem={deleteItem} />
      <Footer purchasedCount={purchasedCount} />
    </div>
  );
};

export default App;
