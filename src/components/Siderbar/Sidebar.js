import { useEffect, useState } from "react";
import { getEnterpriseLessSales, getEnterpriseMostSales, getMostReversedEnterprise, getTotalPriceNonPaidTransactions } from "../../helpers/enterprises";
import { Card } from "../Card/Card";
import { TableCount } from "../TableCount/TableCount";

const CardOneBody = ({ mostSales, lessSales, nonPaid, mostReversed }) => {
  return (
    <>
      <div className="data-group">
        <p>Empresa con más ventas ({mostSales && mostSales.count})</p>
        <h4>{mostSales && mostSales._id}</h4>
      </div>
      <div className="data-group">
        <p>Empresa con menos ventas ({lessSales && lessSales.count})</p>
        <h4>{lessSales && lessSales._id}</h4>
      </div>
      <div className="data-group">
        <p>Precio de transacciones NO cobradas</p>
        <h4>${nonPaid}</h4>
      </div>
      <div className="data-group">
        <p>Empresa con más rechazos de ventas ({mostReversed && mostReversed.count})</p>
        <h4>{mostReversed && mostReversed._id}</h4>
      </div>
    </>
  );
};

export const Sidebar = () => {
  const [mostSales, setMostSales] = useState(null);
  const [lessSates, setLessSates] = useState(null);
  const [nonPaid, setNonPaid] = useState(0);
  const [mostReversed, setMostReversed] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let mostSales = await getEnterpriseMostSales()
      let lessSales = await getEnterpriseLessSales()
      let nonPaid = await getTotalPriceNonPaidTransactions()
      console.log(nonPaid)
      let mostReversed = await getMostReversedEnterprise()
      setMostSales(mostSales[0])
      setLessSates(lessSales[0])
      setNonPaid(nonPaid.total)
      setMostReversed(mostReversed)
    }
    fetchData()
  }, [mostSales, lessSates, nonPaid, mostReversed])
  

  return (
    <div className="sidebar">
      <Card
        cardTitle={"Destacados"}
        cardBody={<CardOneBody mostSales={mostSales} lessSales={lessSates} nonPaid={nonPaid} mostReversed={mostReversed}/>}
      />
      <Card
        cardTitle={"Rechazos de ventas por empresa"}
        cardBody={<TableCount />}
      />
    </div>
  );
};
