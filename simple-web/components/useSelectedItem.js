import { useState } from 'react';

const useSelectedItem = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return { selectedItem, selectItem };
};

export default useSelectedItem;
