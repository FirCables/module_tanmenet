const OraForm = () => {
    const [cim, setCim] = useState("");
    const [leiras, setLeiras] = useState("");
    return (
        <form action="#">
        <div className="col">
          <input type="text" placeholder="Cím" value={cim} onChange={(e) => setCim(e.target.value)} />
          <textarea placeholder="Leírás" rows="5" value ={leiras} onChange={(e) => setLeiras(e.target.value)} ></textarea>
        </div>
        <aside className="col">
          <button className="btn">Hozzáadás</button>
         {/*<button className="btn outline">Mégsem</button> */}
        </aside>
      </form>
    );
};

export default OraForm;