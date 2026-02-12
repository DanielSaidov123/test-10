import "./table.css";

export default function Table(temp) {
  return (
    <table>
      <tr>
        <td><img src={temp.img} alt="" /></td>
        <td>{temp.name}</td>
        <td>{temp.organization}</td>
        <td>{temp.attacksCount}</td>
        <td>{temp.status}</td>
        <td>{temp.summary}</td>
      </tr>
    </table>
  );
}
