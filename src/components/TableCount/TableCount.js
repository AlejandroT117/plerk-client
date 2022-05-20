export const TableCount = ({
  titleTable,
  className,
  title_col1,
  title_col2,
  data_array,
}) => {
  return (
    <>
      <h4>{titleTable}</h4>
      <table className={className}>
        <thead>
          <tr>
            <th>{title_col1}</th>
            <th>{title_col2}</th>
          </tr>
        </thead>
        <tbody>
          {data_array &&
            data_array.map((data) => (
              <tr>
                <td>{data._id}</td>
                <td>{data.count}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
