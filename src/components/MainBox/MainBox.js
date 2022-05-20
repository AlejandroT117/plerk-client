import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/MainContext";
import {
  getTotalPricePaidTransactions,
  getTotalTransactionsByStatus,
} from "../../helpers/enterprises";
import { TableCount } from "../TableCount/TableCount";

export const MainBox = () => {
  const { enterprises } = useContext(AppContext);
  const [totalPaidTrans, setTotalPaidTrans] = useState(0);
  const [totalTrans, setTotalTrans] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const paid = await getTotalPricePaidTransactions();
      const totalTrans = await getTotalTransactionsByStatus();

      setTotalPaidTrans(paid.total);
      setTotalTrans(totalTrans);
    }

    fetchData();
  }, [totalPaidTrans]);

  return (
    <div className="main">
      <div className="main-header">
        <h3>Datos generales</h3>
      </div>
      Número de empresas registradas:
      <h3>{enterprises && enterprises.length}</h3>
      <br />
      Precio total de transacciones cobradas:
      <h3>${totalPaidTrans}</h3>
      <br />
      <TableCount
        className={'bigTable'}
        titleTable={"Precio total de transacciones por categoría"}
        title_col1={"Status de la transacción"}
        title_col2={"Precio Total"}
        data_array={totalTrans}
        counter_name={"totalEarnings"}
        symbol_counter={"$"}
      />
    </div>
  );
};
