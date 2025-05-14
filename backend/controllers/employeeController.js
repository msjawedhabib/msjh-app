const EmployeeActivity = require('../models/employee');

exports.submitBranch = async (req, res) => {
  try {
    const { branch } = req.body;
    const entry = new EmployeeActivity({ branch });
    await entry.save();
    res.status(200).json({ message: 'Branch saved' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.checkIn = async (req, res) => {
  try {
    const { id, loginTime } = req.body;
    const updated = await EmployeeActivity.findByIdAndUpdate(id, { loginTime }, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.checkOut = async (req, res) => {
  try {
    const { id, logoutTime } = req.body;
    const updated = await EmployeeActivity.findByIdAndUpdate(id, { logoutTime }, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.submitBilling = async (req, res) => {
  try {
    const { id, customerName, serviceName, servicePrice, productName, productPrice } = req.body;
    const updated = await EmployeeActivity.findByIdAndUpdate(
      id,
      { customerName, serviceName, servicePrice, productName, productPrice },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.submitLeave = async (req, res) => {
  try {
    const { id, applicationDate, leaveType, leaveFrom, leaveTo } = req.body;
    const updated = await EmployeeActivity.findByIdAndUpdate(
      id,
      {
        leave: { applicationDate, leaveType, leaveFrom, leaveTo }
      },
      { new: true }
    );
    res.status(200).json({ message: 'Leave submitted', updated });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
