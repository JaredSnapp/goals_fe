import { RecruiterModel } from "../models/models";
// import { useEffect, useState } from "react";
import { RecruiterCard } from "./recruiterCard";

const l:RecruiterModel[] = [
  {
    id: "1234",
    name: "James Deanally",
    company: "ABC Corporation",
    lastContactDate: new Date("09 January 2025 14:48 UTC").toISOString(),
    status: "Interview Scheduled",
  },
  {
    id: "1235",
    name: "Jimmy Dean",
    company: "ABC Corporation",
    lastContactDate: new Date("05 October 2024 14:48 UTC").toISOString(),
    status: "Waiting for call",
  },
  {
    id: "1236",
    name: "Jimmy Dean",
    company: "ABC Corporation",
    lastContactDate: new Date("05 October 2024 14:48 UTC").toISOString(),
    status: "Waiting for call",
  },
  {
    id: "1237",
    name: "Jimmy Dean",
    company: "ABC Corporation",
    lastContactDate: new Date("12 January 2025 14:48 UTC").toISOString(),
    status: "Waiting for call",
  },
  {
    id: "1238",
    name: "Jimmy Dean",
    company: "ABC Corporation",
    lastContactDate: new Date("05 October 2024 14:48 UTC").toISOString(),
    status: "Waiting for call",
  }
];

export function RecruiterList() {
  return (
    <div className={"grid grid-cols-3 gap-4 m-2"}>
      {l &&
        l.map((recruiter) => (
          <RecruiterCard key={recruiter.id} recruiter={recruiter} />
        ))}
    </div>
  );
}
