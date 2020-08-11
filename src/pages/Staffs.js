import React,{useState} from "react"
import Layout from "../components/layout"
import Profile from "../staffs/Profile"

export default function Staffs({location}) {
  const [shown, setShown] = useState(0);
  
  let yearList = [];
  const currentYear = new Date().getFullYear();
  for (var i=2014; i<=currentYear; i++){
      yearList.unshift(i);
  }

  return (
    <Layout sideList={yearList} setSideCurrent={setShown} pathName={location.pathname}>
      <p> Clicked!!!</p>
      <Profile></Profile>
    </Layout>
  )
}