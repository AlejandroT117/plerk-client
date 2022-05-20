import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/MainContext";
import { ListEnterprises } from "../ListEnterprises/ListEnterprises"
import { Spinner } from "../Spinner/Spinner";

export const FormEnterprise=({enterpriseId, setEnterpriseId, loading, setLoading})=>{
  const { enterprises } = useContext(AppContext);
  const [values, setValues] = useState(null)

  const selectEnterprise=(e)=>{
    e.preventDefault()
    if(values){
      setLoading(true)
      setEnterpriseId(values.enterprise)
    }
  }

  return(
    <>
      {
        loading?
        <Spinner/>:
        <div className="formEnterprise">
          <h4>Elige una empresa para buscar sus datos principales</h4>
          <form onSubmit={selectEnterprise}>
            <ListEnterprises enterprises={enterprises} values={values} setValues={setValues} enterpriseId={enterpriseId}/>
            <button type="submit" className="btn" disabled={values? false: true}>Buscar datos</button>    
          </form>
        </div>
      }
    </>
  )
}