import { useQuery } from "react-query";
import fetchPostData from "./fetchPostData";

export default function useFetchData(){
    const result = useQuery(["images"], fetchPostData);
    return result?.data || [];
}




