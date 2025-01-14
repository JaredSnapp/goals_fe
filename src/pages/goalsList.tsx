import { useEffect } from "react";
import { Button } from "../components/Button";
import { GoalCard } from "./goalCard";
import { useGoalApi } from "../hooks/useApi";


const {fetch: usefetch} = useGoalApi;

export default function GoalsList() {
  const { response, loading, error } = usefetch();

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
