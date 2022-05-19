export const ListEnterprises = ({ enterprises }) => {
  
  return (
    <select>
      {enterprises &&
        enterprises.map((data) => {
          let nameCapitalize =
            data.name.charAt(0).toUpperCase() + data.name.slice(1);
          return (
            <option key={data._id} value={data._id}>
              {nameCapitalize}
            </option>
          );
        })}
    </select>
  );
};
