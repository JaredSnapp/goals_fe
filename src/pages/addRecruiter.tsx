import { SubmitHandler, useForm } from "react-hook-form";
import { RecruiterModel } from "../models/models";
import { Button } from "../components/Button";

import { useRecruiterApi } from "../hooks/useApi";

const {post: usePostRecruiters} = useRecruiterApi;

export function AddRecruiter() {
  const { postData } = usePostRecruiters();

  const {
    handleSubmit,
    register,
    reset
  } = useForm<RecruiterModel>()

  const onSubmit: SubmitHandler<RecruiterModel> = (data) => {
      data.last_contact = new Date(data.last_contact).toISOString();
      // TODO: Handle errors
      postData(data);
      reset()
    }

  const inputClassname = "m-1 p-1 mr-4 border rounded";

  return (
    <>
    <div className={"m-2 p-2 bg-white"}>
      <h1>Add Recruiter</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Name</label>
        <input className={inputClassname} {...register("name")} />
        <label>Company</label>
        <input className={inputClassname} {...register("company")} />
        <label>Status</label>
        <input className={inputClassname} {...register("status")} />
        <input aria-label="Date" type="date" className={"m-1 p-1 border rounded"} {...register("last_contact")}/>
        <Button type="submit" color="primary">Save</Button>
      </form>
    </div>
    </>
  );
}
