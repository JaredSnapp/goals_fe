import { RecruiterCard } from "./recruiterCard";
import { useRecruiterApi } from "../hooks/useApi";
import { useEffect } from "react";

const {fetch: usefetchRecruiters} = useRecruiterApi;

export function RecruiterList() {
  const { response, loading, error } = usefetchRecruiters();

  useEffect(() => {
    if (loading) {
      console.log("loading...")
    }
    if (error) {
      console.log("Error getting recruiters")
      console.log(error)
    }
    if (response) {
      console.log(response)
    }
  }, [loading, error])

  return (
    <div className={"grid grid-cols-3 gap-4 m-2"}>
      {response &&
        response.map((recruiter) => (
          <RecruiterCard key={recruiter.id} recruiter={recruiter} />
        ))}
    </div>
  );
}
