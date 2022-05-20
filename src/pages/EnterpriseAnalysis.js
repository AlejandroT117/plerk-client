import { useContext, useEffect, useState } from "react";
import { FormEnterprise } from "../components/FormEnterprise/FormEnterprise";
import { TableCount } from "../components/TableCount/TableCount";
import {
  getDateMostTransOFEnterprise,
  getNameOfEnterpriseById,
  getTotalTransNonPaidOfEnterprice,
  getTotalTransPaidOfEnterprise,
  gateDatesTransOFEnterprise,
} from "../helpers/enterprises";

export const EnterpriseAnalysis = () => {
  const [enterpriseId, setEnterpriseId] = useState("");
  const [nameEnter, setNameEnter] = useState("");
  const [totalPaid, setTotalPaid] = useState(0);
  const [totalNonPaid, setTotalNonPaid] = useState(null);
  const [dateMost, setDateMost] = useState("");
  const [datesTrans, setDatesTrans] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const name = await getNameOfEnterpriseById(enterpriseId);
      const totalPaid = await getTotalTransPaidOfEnterprise(enterpriseId);
      const totalNonPaid = await getTotalTransNonPaidOfEnterprice(enterpriseId);
      const dateMost = await getDateMostTransOFEnterprise(enterpriseId);
      const dateTrans = await gateDatesTransOFEnterprise(enterpriseId);

      let nameCapitalize =
      name.name.charAt(0).toUpperCase() + name.name.slice(1);

      setNameEnter(nameCapitalize);
      setTotalPaid(totalPaid.length>0 ? totalPaid[0].count: 0);
      setTotalNonPaid(totalNonPaid); //by status_transfer
      setDateMost(dateMost._id);
      setDatesTrans(dateTrans);
      setLoading(false);
    }
    if (enterpriseId) {
      fetchData();
    }
  }, [enterpriseId]);

  return (
    <>
      <FormEnterprise
        enterpriseId={enterpriseId}
        setEnterpriseId={setEnterpriseId}
        loading={loading}
        setLoading={setLoading}
      />
      <div className="generalData">
        <h4>Datos generales</h4>
        <h3>Nombre: {nameEnter}</h3>
        <h4>Día en el que se registraron más transacciones: {dateMost}</h4>
        <h4>Total de transacciones SÍ cobradas: {totalPaid}</h4>
        <TableCount
          className={"bigTable"}
          titleTable={"Total de transacciones NO cobradas"}
          title_col1="Status de Transacción"
          title_col2={"Frecuencia"}
          data_array={totalNonPaid}
          counter_name={"count"}
        />
        <TableCount
          className={"bigTable"}
          titleTable={"Frecuencia de transacciones por fecha"}
          title_col1="Fecha"
          title_col2={"Frecuencia"}
          data_array={datesTrans}
          counter_name={"count"}
        />
      </div>
    </>
  );
};
