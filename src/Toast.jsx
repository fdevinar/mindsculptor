export default function Toast({ message, type }) {
  return (
    <div className={`toast ${type}`}>
      <h3>{message}</h3>
    </div>
  );
}