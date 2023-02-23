import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetCountries = () => {
  return useQuery(
    ["getCountries"],
    () => axios.get("https://restcountries.com/v3.1/all"),
    { retry: 2 }
  );
};
