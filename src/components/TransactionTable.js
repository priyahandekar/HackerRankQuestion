import React, {useState} from "react";

function TransactionTable({txns}) {
  const [ date, setDate] = useState('');
  const [ finalMap, setFinalMap ] = useState(txns);
  const sort = () => {
    const sortedArr = [...txns];
    sortedArr.sort((a,b) => a.amount - b.amount);
    setFinalMap(sortedArr);
    console.log('txns', txns, sortedArr);
  };
  const handleClick = () => {
    console.log('date', date);
    const filterDateArray = txns.filter((keys) => keys.date == date);
    setFinalMap(filterDateArray);
    console.log('data', filterDateArray);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  
  console.log('', finalMap);
  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input id="date" type="date" value={date} defaultValue="2019-11-29" onChange={handleDateChange} />
        <button className="small" onClick={handleClick}>Filter</button>
      </section>

      <div className="card mt-50">
          <table className="table">
              <thead>
              <tr className="table">
                  <th className="table-header">Date</th>
                  <th className="table-header">Description</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">
                      <span id="amount" onClick={sort}>Amount ($)</span>
                  </th>
                  <th className="table-header">Available Balance</th>
              </tr>
              </thead>
              <tbody>
              {finalMap.map((keys) => (
                <tr>
                  <td>{keys.date}</td>
                  <td>{keys.description}</td>
                  <td>{keys.type === 1 ? "Debit" : "Credit"}</td>
                  <td>{keys.amount}</td>
                  <td>{keys.balance}</td>
                </tr>
              ))

              }
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default TransactionTable;
