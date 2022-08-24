import "./code.css";

const Code = ({ code }) => {
  return (
    <div className="code">
      {code.map((c, i) => (
        <code key={i}>{c}</code>
      ))}
    </div>
  );
};

export default Code;
