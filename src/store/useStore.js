import { create } from "zustand";
import data from "../data/MOCK_DATA";
const useStore = create((set, get) => ({
  people: data,
  filters: {
    name: "",
    gender: "",
    color: "",
  },
  setFilters: (type, value) =>
    set((state) => ({ filters: { ...state.filters, [type]: value } })),
  filterPeople: () =>
    get().people.filter(
      (p) =>
        (p.first_name.toLowerCase().includes(get().filters.name) ||
          p.last_name.toLowerCase().includes(get().filters.name)) &&
        (get().filters.gender === "" ||
          get().filters.gender.toLowerCase() === p.gender.toLowerCase()) &&
        (get().filters.color === "" ||
          get().filters.color.toLowerCase() === p.color.toLowerCase())
    ),
}));

export default useStore;
