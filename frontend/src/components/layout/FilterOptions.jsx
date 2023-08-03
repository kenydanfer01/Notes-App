export const FilterOptions = () => {
  return (
    <>
      <div className="container ms-4 ps-0">
        <div className="row align-items-start">
          <div className="col-lg-6 col-md-9 col-sm-3">
            <h5>Filter By Category</h5>
            <div className="input-group">
              <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected>Category...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button className="btn btn-outline-secondary" type="button">
                <i className="fa-solid fa-magnifying-glass me-2"></i>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
