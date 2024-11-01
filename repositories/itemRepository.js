// repositories/itemRepository.js
module.exports = (db) => {
  const itemsRef = db.collection("items");

  const addItem = async (item) => {
    const docRef = await itemsRef.add(item);
    return { id: docRef.id, ...item };
  };

  const getAllItems = async () => {
    const snapshot = await itemsRef.get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const getItemById = async (id) => {
    const doc = await itemsRef.doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  };

  const updateItem = async (id, updatedData) => {
    await itemsRef.doc(id).update(updatedData);
    return { id, ...updatedData };
  };

  const deleteItem = async (id) => {
    await itemsRef.doc(id).delete();
    return { id };
  };

  return {
    addItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
  };
};
