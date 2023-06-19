
function isBoolean(variable) {
    return typeof variable === 'boolean';
}

const DynamicTable = (props) => {

    const {jsonArray,tableStyles,tableContainerStyles,theadStyles,
      tbodyStyles, trStyles, thStyles,tdStyles} = props;

      console.log(jsonArray)
  
    let jsonProperties = [];
  
   jsonArray.forEach(json => {
      console.log(json)
      jsonProperties = [...jsonProperties, Object.keys(json)];
    });
  
    jsonProperties = [...new Set(...jsonProperties)];
  console.log(jsonProperties)
    //classnamelere || "" eklemeli miyim 
    return (
      <div className={tableContainerStyles}>
        <table className={tableStyles}>
          <thead className={theadStyles}>
            <tr className={trStyles}>
              {jsonProperties && jsonProperties.map((val,i) => (
                <th key={i} className={thStyles}><strong>{val}</strong></th>
              ))}
            </tr>
          </thead>
          <tbody className={tbodyStyles}>
            {jsonArray && jsonArray.map((value, i) => (
              <tr className={trStyles} key={i}>
                {jsonProperties.map((val, j) => (
                  <td className={tdStyles} key={j}>
                    {value[val]}
                    {isBoolean(value[val]) && value[val] && "true"}
                    {isBoolean(value[val]) && !value[val] && "false"}
                    </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default DynamicTable;