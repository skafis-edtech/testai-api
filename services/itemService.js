// services/itemService.js
module.exports = (itemRepository) => {
  const createItem = async (data) => {
    const item = { name: data.name, description: data.description };
    return await itemRepository.addItem(item);
  };

  const retrieveAllItems = async () => {
    return await itemRepository.getAllItems();
  };

  const retrieveItemById = async (id) => {
    return await itemRepository.getItemById(id);
  };

  const modifyItem = async (id, data) => {
    const updatedData = { name: data.name, description: data.description };
    return await itemRepository.updateItem(id, updatedData);
  };

  const removeItem = async (id) => {
    return await itemRepository.deleteItem(id);
  };

  return {
    createItem,
    retrieveAllItems,
    retrieveItemById,
    modifyItem,
    removeItem,
  };
};
