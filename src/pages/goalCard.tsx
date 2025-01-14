import { GoalModel } from "../models/models";

interface GoalCardProps {
  goal: GoalModel;
}

/*
Tailwind options

max-w-300


*/

export function GoalCard({ goal }: GoalCardProps) {
  return (
    <>
      <div className={"bg-white border rounded p-2 m-2 "}>
        <h2 className={"font-bold"}>{goal?.name}</h2>
        <p>{`- Goal: ${goal?.goal} ${goal?.units}`}</p>
      </div>
    </>
  );
}
