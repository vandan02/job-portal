const companysevice = require("../service/company.service");

module.exports = {
    createCompany: async (req, res) => {
        try {
            req.body.userId = req.user.id;
            const company = await companysevice.createCompany(req.body);
            res
                .status(201)
                .json({ message: "Company created successfully", company });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getAllCompany: async (req, res) => {
        try {
            const company = await companysevice.getAllCompany();
            res.status(200).json(company);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getCompanyById: async (req, res) => {
        const { id } = req.params;
        try {
            const company = await companysevice.getCompanyById(id);
            res.status(200).json(company);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    updateCompany: async (req, res) => {
        const { id } = req.params;
        try {
            const company = await companysevice.updateCompany(id, req.body);
            if (!updatedCompany) return res.status(404).json({ success: false, message: "Company not found" });

            res.status(200).json({ success: true, data: updatedCompany });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    deleteCompany: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedCompany = await companysevice.deleteCompany(id);
            if (!deletedCompany) return res.status(404).json({ success: false, message: "Company not found" });
            res.status(200).json({ success: true, message: "Company deleted successfully" });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getUnverified:async (req, res) => {
        try {
            let company=await companysevice.getAllUnverified()
           return res.send(company)
        } catch (error) {
          return res.status(500).json({ error: error });
            }
      }
};
