import { Card } from "../Card/Card"
import { TableCount } from "../TableCount/TableCount"

const CardOneBody =({moreSales, lessSales, nonPaid, mostReversed})=>{
  return (
    <>
      <div className="data-group">
        <p>Empresa con más ventas</p>
        <h4>{moreSales}</h4>
      </div>
      <div className="data-group">
        <p>Empresa con menos ventas</p>
        <h4>{lessSales}</h4>
      </div>
      <div className="data-group">
        <p>Precio de transacciones NO cobradas</p>
        <h4>{nonPaid}</h4>
      </div>
      <div className="data-group">
        <p>Empresa con más rechazos de ventas</p>
        <h4>{mostReversed}</h4>
      </div>
    </>
  )
}
export const Sidebar = ()=>{
  return (
    <div className="sidebar">
      <Card cardTitle={'Destacados'} cardBody={<CardOneBody/>}/>
      <Card cardTitle={'Rechazos de ventas por empresa'} cardBody={<TableCount/>}/>
    </div>
  )
}