import React,{useState} from "react"
import Layout from "../components/layout/layout"
import HackOverview from "../components/hackaton/HackOverview"

export default function Hackathon({location}) {
  const [shown, setShown] = useState(0);
  
  let yearList = [];
  const currentYear = new Date().getFullYear();
  for (var i=2017; i<=currentYear; i++){
      yearList.unshift(i);
  }

  return (
    <Layout sideList={yearList} setSideCurrent={setShown} pathName={location.pathname}>
        <HackOverview
            year={yearList[shown]}
        />
    </Layout>
  )
}
