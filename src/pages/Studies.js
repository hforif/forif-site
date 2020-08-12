import React,{useState} from "react"
import Layout from "../components/layout/layout"

export default function Studies({location}) {
  const [shown, setShown] = useState(0);
  const studiesList = ['C','Django','Godo','React','Python','Android'];

  return (
    <Layout sideList={studiesList} setSideCurrent={setShown} pathName={location.pathname}>
      <h1>WOOOWOWOWWOWOOWWOW</h1>
      <p>{studiesList[shown]} Clicked!!!</p>
    </Layout>
  )
}