import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/MainContext"
import { getTotalPricePaidTransactions } from "../../helpers/enterprises"
import { TableCount } from "../TableCount/TableCount"

export const MainBox = ()=>{
  const { enterprises } = useContext(AppContext);
  const [totalPaidTrans, setTotalPaidTrans] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const paid = await getTotalPricePaidTransactions()

      setTotalPaidTrans(paid.total)
    }

    fetchData()
  }, [totalPaidTrans])
  

  return (
    <div className="main">
      <div className="main-header">
        <h3>Datos generales</h3>
      </div>
      Número de empresas registradas: 
      <h3>{enterprises && enterprises.length}</h3>
      <br/>
      Precio total de transacciones cobradas: 
      <h3>${totalPaidTrans}</h3>
      <br/>

      <TableCount titleTable={'Precio total de transacciones por categoría sin cobrar'}/>
    </div>
  )
}