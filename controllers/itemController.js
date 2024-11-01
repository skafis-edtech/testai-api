// controllers/itemController.js
module.exports = (itemService) => {
  const createItem = async (req, res) => {
    try {
      const item = await itemService.createItem(req.body);
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getAllItems = async (req, res) => {
    try {
      const items = await itemService.retrieveAllItems();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getItemById = async (req, res) => {
    try {
      const item = await itemService.retrieveItemById(req.params.id);
      if (!item) return res.status(404).json({ error: "Item not found" });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateItem = async (req, res) => {
    try {
      const item = await itemService.modifyItem(req.params.id, req.body);
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteItem = async (req, res) => {
    try {
      const result = await itemService.removeItem(req.params.id);
      res.status(200).json({ message: "Item deleted successfully", ...result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  return {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
  };
};
