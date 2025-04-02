import { RecruiterCard } from "./recruiterCard";
import { useRecruiterApi } from "../hooks/useApi";
import { useEffect, useState, useCallback } from "react";
import { DetailPanel } from "../components/DetailPanel";
import { useToggle } from "../hooks/useToggle"
import { Page } from "../components/Page";
// import useToggle from "../hooks/useToggle"
import { RecruiterDetail } from "./recruiterDetail";
import { RecruiterModel } from "../models/models";
import { Button } from "../components/Button";
import { AddRecruiter } from "./addRecruiter";

const { fetch: usefetchRecruiters } = useRecruiterApi;

export function RecruiterList() {
  const { response, loading, error } = usefetchRecruiters();
  const [ detailView, toggleDetailView ] = useToggle(false);
  const [selectedRecruiter, setSelectedRecruiter] = useState<RecruiterModel | undefined>(undefined);

  useEffect(() => {
    if (loading) {
      console.log("loading...");
    }
    if (error) {
      console.log("Error getting recruiters");
      console.log(error);
    }
    if (response) {
      console.log(response);
    }
  }, [loading, error]);

  useEffect(() => { 
    console.log("Render");
  }, []);

  // const recruiterSelect = useCallback((recruiter: RecruiterModel) => {
  //   // console.log("recruiter ids:")
  //   // console.log(recruiter.id + "\n" + selectedRecruiter?.id)

  //   if (!detailView) {
  //     console.log("detail view " + detailView);
  //     setSelectedRecruiter(recruiter);
  //     toggleDetailView();
  //   }
  //   if (recruiter.id !== selectedRecruiter?.id) {
  //     setSelectedRecruiter(recruiter);
  //   }
  //   else {
  //     toggleDetailView();
  //   }
  // }, [selectedRecruiter, detailView]);

  const recruiterSelect = (recruiter: RecruiterModel) => {
    if (!detailView) {
      setSelectedRecruiter(recruiter);
      toggleDetailView();
    }
    else if (recruiter.id !== selectedRecruiter?.id) {
      setSelectedRecruiter(recruiter);
    }
    else {
      toggleDetailView();
    }
  };

  return (
    <> 
      <AddRecruiter />

    <Page>
      <div className={`grid ${detailView ? "grid-cols-1" : "grid-cols-3"} gap-4 m-2`}>
      {/* <div> */}
        {response &&
          response.map((recruiter) => (
            <RecruiterCard key={recruiter.id} recruiter={recruiter} onClick={recruiterSelect}/>
          ))}
      </div>
      <DetailPanel visible={detailView}>
        <RecruiterDetail recruiter={selectedRecruiter}/>
      </DetailPanel>
    {/* <Button onClick={() => console.log(detailView)}>Add Recruiter</Button> */}

    </Page>
    </>

  );
}
