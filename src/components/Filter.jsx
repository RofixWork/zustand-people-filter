import { useMemo } from "react";
import TableRow from "./TableRow";
import useStore from "../store/useStore";
import data from "../data/MOCK_DATA.json";
const Filter = () => {
  const { filters, setFilters, filterPeople } = useStore();
  const filteredData = useMemo(() => filterPeople(), [filters, filterPeople]);
  return (
    <div className="row">
      <div className="col-12 col-md-3">
        <input
          type="search"
          placeholder="Search"
          className="form-control"
          value={filters.name}
          onChange={(e) => setFilters("name", e.target.value)}
        />
        <div className="mt-2">
          <h6>Gender</h6>
          <select
            className="form-select my-2"
            value={filters.gender}
            onChange={(e) => setFilters("gender", e.target.value)}
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mt-2">
          <h6>Color</h6>
          <select
            className="form-select"
            value={filters.color}
            onChange={(e) => setFilters("color", e.target.value)}
          >
            <option value="">All</option>
            {Array.from(new Set(data.map((item) => item.color))).map(
              (color, index) => {
                return (
                  <option key={index} value={color}>
                    {color}
                  </option>
                );
              }
            )}
          </select>
        </div>
      </div>
      {/* table */}
      <div className="col-12 col-md-9">
        <h3 className="mb-4 text-primary">People ({filteredData.length})</h3>
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Category</th>
              <th scope="col">Color</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length ? (
              filteredData.map((item) => {
                return <TableRow key={item.id} {...item} />;
              })
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Filter;
