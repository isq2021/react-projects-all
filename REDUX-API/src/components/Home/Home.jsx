import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callToApi } from "./HomeSlice";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(callToApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(data);
  return (
    <>
      <h1>home</h1>
    </>
  );
}
export default Home;
