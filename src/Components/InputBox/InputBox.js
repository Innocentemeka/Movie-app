import "./InputBox.css";


const InputBox = (props) => {
  return (
    <div className="input-box-container">
      <input
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={(e) => props.setSearch(e.target.value)}
      />
     <button type="search">Search</button>
    </div>
  );
};

export default InputBox;
