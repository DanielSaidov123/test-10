import "./table.css";

export default function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>img</th>
          <th>name</th>
          <th>attacksCount</th>
          <th>organization</th>
          <th>summary</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((s,i) => (
          <tr key={i}> 
            <td>
              <img src={s.imageUrl ? s.imageUrl:"https://picsum.photos/400/400?random=3"} alt="dsa" />
            </td>
            <td>{s.name}</td>
            <td>{s.attacksCount}</td>
            <td>{s.organization}</td>
            <td>{s.status}</td>
            <td>{s.relationToIsraelSummary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
