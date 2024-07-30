import { useState } from "react";
function FromSelect({ label, name, refSelect }) {
  const [form, setForm] = useState({
    name: "",
  });
  const handleChange = (event) => {
    setForm({ name: event.target.value });
  };
  return (
    <label className="form-control w-full max-w-xl">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select
        name={name}
        onChange={handleChange}
        className="select select-bordered"
        ref={refSelect}
      >
        <option defaultValue="All Countries">All Countries</option>
        <option defaultValue="Europa">Europa</option>
        <option defaultValue="Russia">Russia</option>
        <option defaultValue="Turky">Turky</option>
        <option defaultValue="Uzbek">Uzbek</option>
        <option defaultValue="China">China</option>
        
        
        <option defaultValue="USA">USA</option>
        
      </select>
    </label>
  );
}

export default FromSelect;