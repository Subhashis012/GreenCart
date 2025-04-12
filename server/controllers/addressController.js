import Address from "../models/Address.js";



// Add Address : /api/address/add
export const addAddress = async (req, res) => {
  try {
    const userId = req.userId;
    const address = req.body.address;

    if (!address) {
      return res.status(400).json({ success: false, message: "Address is required" });
    }

    
    const created = await Address.create({ userId, ...address });

    res.json({ success: true, message: "Address added successfully", address: created });
  } catch (error) {
    
    res.status(500).json({ success: false, message: error.message });
  }
};



// Get Address : /api/address/get
export const getAddress = async (req, res) => {
  try {
    const userId = req.userId; 

    const addresses = await Address.find({ userId });

    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};


