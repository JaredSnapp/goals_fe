import { Button } from "../components/Button";
import { RecruiterModel } from "../models/models";
import { useRecruiterApi } from "../hooks/useApi";
import { useEffect } from "react";
import { TextEditor } from "../components/TextEditor";


interface RecruiterDetailProps {
  recruiter: RecruiterModel;
}

const { del: useDeleteRecruiter } = useRecruiterApi;

export function RecruiterDetail({ recruiter }: RecruiterDetailProps) {
  const { response, deleteData } = useDeleteRecruiter();


  const deleteRecruiter = () => {
    if (recruiter) {
      console.log(`Delete ${recruiter?.id}`)
      deleteData(recruiter.id);
    }
  }

  useEffect(() => {
    if (response) {
      console.log(response);
    }
  }, [response])

  return (
    <>
    <div className={"m-2 mb-4"}>
    <h1 className={"text-2xl font-bold text-primary"}>
        {recruiter?.name}
    </h1>
    <p className={"text-greyText"}>{recruiter?.company}</p>
    </div>
    <p className={"content-center text-center text-balance"}>{recruiter?.status}</p>

    <TextEditor />

    <div className={"flex justify-center gap-4 mt-4"}>
      <Button color={"primary"}>Edit Recruiter</Button>
      <Button color={"red"} onClick={deleteRecruiter}>Delete Recruiter</Button>
    </div>
    </>
  )
}