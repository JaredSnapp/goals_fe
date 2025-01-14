import HeaderBar from "./pages/headerBar"
import GoalsList from "./pages/goalsList"
import { RecruiterCard } from "./pages/recruiterCard"
import { RecruiterModel } from "./models/models"
import { RecruiterList } from "./pages/recruiterList"

function App() {
    

  return (
    <>
    <HeaderBar />
    <GoalsList />
    <RecruiterList />
    </>
  )
}

export default App