import { useEffect, useState } from "react";
import {
  getEnterpriseLessSales,
  getEnterpriseMostSales,
  getMostReversedEnterprise,
  getReverseSalesByEnterprise,
  getTotalPriceNonPaidTransactions,
} from "../../helpers/enterprises";
import { useGet } from "../../hooks/useGet";
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
        <p>
          Empresa con más rechazos de ventas (
          {mostReversed && mostReversed.count})
        </p>
        <h4>{mostReversed && mostReversed._id}</h4>
      </div>
    </>
  );
};

export const Sidebar = () => {
  let mostSales = useGet(getEnterpriseMostSales)
  let lessSales = useGet(getEnterpriseLessSales)
  let nonPaid = useGet(getTotalPriceNonPaidTransactions)
  let mostReversed = useGet(getMostReversedEnterprise)
  let reversedEnter= useGet(getReverseSalesByEnterprise)

  return (
    <div className="sidebar">
      <Card
        cardTitle={"Destacados"}
        cardBody={
          <CardOneBody
            mostSales={mostSales && mostSales[0]}
            lessSales={lessSales && lessSales[0]}
            nonPaid={nonPaid && nonPaid.total}
            mostReversed={mostReversed}
          />
        }
      />
      <Card
        cardTitle={"Rechazos de ventas por empresa"}
        cardBody={
          <TableCount
            className={'smallTable'}
            title_col1={"Empresa"}
            title_col2={"Frecuencia"}
            data_array={reversedEnter}
            counter_name={"count"}
          />
        }
      />
    </div>
  );
};
