import { useEffect } from "react";
import { Button } from "../components/Button";
import useAxios from "../hooks/useApi";
import { GoalCard } from "./goalCard";
import { GoalModel } from "../models/models";

export default function GoalsList() {
  // const { fetch: fetchGoals } = useApi("goal");
  const { response, loading, error } = useAxios<GoalModel[]>("goal");


  useEffect(() => {
    console.log(response);
    if (error) {
      console.log("Error:");
      console.log(error);
    }
  }, [response, loading, error]);

  return (
    <>
    <div className={"flex justify-center mt-2"}> 
    <Button >Add Goal</Button>
    </div>
      <ul>
        {response && response.map((goal) => (<li key={goal.id}><GoalCard goal={goal} /></li>))}
      </ul>
    </>
  );
}
