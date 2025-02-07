const Company = require("../model/company")

module.exports ={
    createCompany:async(payload)=>{
    let company=await Company.create(payload)
    return company
},
getAllCompany:async()=>{
    let company=await Company.find()
    return company
},
getCompanyById:async(id)=>{
    let company=await Company.findById(id)
    return company
},
updateCompany:async(id, payload)=>{ 
    let company=await Company.findByIdAndUpdate(id, payload,{new:true})
    return company
},
deleteCompany:async(id)=>{
    let company=await Company.findByIdAndDelete(id)
    return company
}
}
