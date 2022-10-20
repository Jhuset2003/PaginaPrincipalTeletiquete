import {React} from 'react'
import { Helmet } from 'react-helmet-async'
import { InfoCompany } from './information/InfoCompany'


export const CompanyAutoboy = () => {

  const urlLog = require.context("./Resources/Logs", true)

  return (  
  
    <div>
      <Helmet>
        <title>{InfoCompany.companyName}</title>
      </Helmet>
      <h3>{InfoCompany.companyName}</h3>
      <img src={urlLog(`./${InfoCompany.nameLog}`)} alt={InfoCompany.companyName} />
    </div>
  )
}
