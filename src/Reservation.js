export const headTable = [
    {headName: "Name", headnumber: "number", headdestination: "destination", headdepart: "depart", headpayment: "payment"},
  
  ]

export default function Client(firstEntry, firstIndex){
    return (
        <tr key={firstIndex}>
      <th>{firstEntry.headName}</th>
      <th>{firstEntry.headnumber}</th>
      <th>{firstEntry.headdestination}</th>
      <th>{firstEntry.headdepart}</th>
      <th>{firstEntry.headpayment}</th>
    </tr>
    );
}

export const tableElements = [
    {name: "client1", number: "0332545896", destination: "Toamasina", depart: "Date", payment: "OK" }
]

export function renderPerson (entry, index) {
    return(
        <>
      <tr key={index}>
        <td>{entry.name}</td>
        <td>{entry.number}</td>
        <td>{entry.destination}</td>
        <td>{entry.depart}</td>
        <td>{entry.payment}</td>
      </tr>

      <table  class="table table-bordered">
            <thead>
             {headTable.map(renderPerson)}
            </thead>
        </table>
        </>
    )
  }



