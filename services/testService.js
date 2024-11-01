const testRepository = require("../repositories/testRepository");

const createItem = async (data) => {
  const item = {
    title: data.title,
    description: data.description,
    specialSymbols: data.specialSymbols,
    problems: data.problems,
    createdAt: new Date().toISOString(),
    lastModified: new Date().toISOString(),
  };
  return await testRepository.addItem(item);
};

const retrieveAllItems = async () => {
  return await testRepository.getAllItems();
};

const retrieveItemById = async (id) => {
  return await testRepository.getItemById(id);
};

const modifyItem = async (id, data) => {
  const item = await testRepository.getItemById(id);
  const updatedData = {
    title: data.title,
    description: data.description,
    specialSymbols: data.specialSymbols,
    problems: data.problems,
    lastModified: new Date().toISOString(),
    createdAt: item.createdAt,
  };
  return await testRepository.updateItem(id, updatedData);
};

const removeItem = async (id) => {
  return await testRepository.deleteItem(id);
};

module.exports = {
  createItem,
  retrieveAllItems,
  retrieveItemById,
  modifyItem,
  removeItem,
};
