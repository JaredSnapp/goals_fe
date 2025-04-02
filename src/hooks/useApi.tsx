import useAxios from "./useAxios";
import { RecruiterModel, GoalModel } from "../models/models";

// TODO: Is there even a point to doing all this?
// Thinking it might be over abstraction. Refactor for actual benefit
function useApi<T> (endpoint: string) {
    return {
      fetch: () => useAxios.get<T>({ url: endpoint, headers: null}),
      post: () => useAxios.post<T>({ url: endpoint, headers: {"Content-Type": "application/json"}}),
      del: () => useAxios.del<T>({ url: endpoint, headers: null})
    }
}

export default useApi;

export const useRecruiterApi = useApi<RecruiterModel[]>("recruiter")
export const useGoalApi = useApi<GoalModel[]>("goal")
