export const TableCount = ({
  titleTable,
  className,
  title_col1,
  title_col2,
  data_array,
  counter_name,
  symbol_counter,
}) => {
  return (
    <>
      <h4 className="title-table">{titleTable}</h4>
      <table className={className}>
        <thead>
          <tr>
            <th>{title_col1}</th>
            <th>{title_col2}</th>
          </tr>
        </thead>
        <tbody>
          {data_array &&
            data_array.map((data) => {
              let nameCapitalize =
                data._id.charAt(0).toUpperCase() + data._id.slice(1);
              return (
                <tr key={data._id}>
                  <td>{nameCapitalize}</td>
                  <td>
                    {symbol_counter}
                    {data[counter_name]}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
