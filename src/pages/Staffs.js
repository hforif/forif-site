import React,{useState} from "react"
import Layout from "../components/layout/layout"
import Profile from "../staffs/Profile"

export default function Staffs({location}) {
  const [shown, setShown] = useState(0);
  
  let yearList = [];
  const currentYear = new Date().getFullYear();
  for (var i=2017; i<=currentYear; i++){
      yearList.unshift(i);
  }
  const year = yearList[shown];

  return (
    <Layout sideList={yearList} setSideCurrent={setShown} pathName={location.pathname}>
      <Profile
        year = {year}
      />
    </Layout>
  )
}