import useAxios from "./useAxios";
import { RecruiterModel, GoalModel } from "../models/models";

function useApi<T> (endpoint: string) {
    return {fetch: () => useAxios<T>(endpoint)}
}

export default useApi;

export const useRecruiterApi = useApi<RecruiterModel[]>("recruiter")
export const useGoalApi = useApi<GoalModel[]>("goal")
