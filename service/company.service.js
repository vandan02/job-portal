const companyRepository = require("../repository/company");


module.exports ={
    createCompany : async (payload) => {
        let company = await companyRepository.createCompany(payload);
        return company;
      },
      getAllCompany : async () => {
        let company = await companyRepository.getAllCompany();
        return company;
      },
      
      getCompanyById : async (id) => {
        let company = await companyRepository.getCompanyById(id);
        return company;
      },
      
      updateCompany : async (id, payload) => {
        let company = await companyRepository.updateCompany(id, payload);
        return company;
      },
      
      deleteCompany : async (id) => {
        let company = await companyRepository.deleteCompany(id);
        return company;
      },
      getAllUnverified :async () => {
        let company = await companyRepository.getAllCompany({ isVerified: false });
        return company;
      } 
}
