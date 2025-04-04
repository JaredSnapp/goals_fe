import { RecruiterModel } from "../models/models";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";

interface RecruiterCardProps {
  onClick?: (recruiter: RecruiterModel) => void;
  recruiter: RecruiterModel;
}

export function RecruiterCard({ recruiter, onClick }: RecruiterCardProps) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    // calculate days since last contact
    if (recruiter.last_contact) {
      const millisecondsInDay: number = 1000 * 60 * 60 * 24;

    
      console.log(recruiter.last_contact)
      let lastContact = new Date(recruiter.last_contact)
      const today = new Date()

      let diff = today.valueOf() - lastContact.valueOf()
      const days = Math.floor(diff / millisecondsInDay);

      setDays(days)
    }
  }, [recruiter]);

  const click = () => {
    if (onClick) {
      onClick(recruiter);
    }
  }

  // min-w-72 max-w-96
  return (
    <>
    <Card className={"flex min-w-72 max-w-96 w-100 cursor-pointer"} onClick={click}>
      {/* <div className={"flex bg-white shadow-md min-w-72 max-w-96 rounded-xl w-100 cursor-pointer"} onClick={click}> */}
        <div className={`${days > 7 ? 'bg-red' : 'bg-green'} w-2 rounded-tl-xl rounded-bl-xl`}></div>
        <div className={"p-2 px-3 w-full"}>
          <div className={"flex justify-between"}>
            <h1 className={"text-2xl font-bold text-primary"}>
              {recruiter?.name}
            </h1>
            <p className={`${days > 7 ? 'text-red' : ''} content-center`}>{`${days}d`}</p>
          </div>
          <p className={"text-greyText"}>{recruiter?.company}</p>
          <div className={"flex justify-center min-h-20 w-100"}>
            <p className={"content-center text-center text-balance"}>{recruiter?.status}</p>
          </div>
        </div>
      {/* </div> */}
      </Card>
    </>
  );
}
