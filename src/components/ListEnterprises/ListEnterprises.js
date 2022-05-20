export const ListEnterprises = ({ enterprises, values, setValues, enterpriseId }) => {
  
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <select onChange={handleInputChange} name='enterprise' onInput={handleInputChange} defaultValue={enterpriseId}>
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
