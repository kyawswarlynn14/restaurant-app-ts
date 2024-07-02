import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFilterList, setIsFetchingMenu, setMenuList } from "../store/menuSlice";
import { RootState } from "../store";
import HeaderSkeleton from "../components/HeaderSkeleton";
import AppIndexSkeleton from "../components/AppIndexSkeleton";

function AppStarter() {
  const { isFetchingMenu } = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();
  useEffect(() => {
    const startUp = async () => {
      dispatch(setIsFetchingMenu(true));
      try {
        const res = await fetch('/config/data.json');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        dispatch(setMenuList(data?.menu));
        dispatch(setFilterList(data?.menu));
      } catch (error) {
        console.error('Error fetching the data:', error);
      } finally {
        dispatch(setIsFetchingMenu(false));
      }
    }
    startUp();
  }, [])

  return (
    <>
    {isFetchingMenu ? (
      <>
        <HeaderSkeleton />
        <AppIndexSkeleton />
      </>
    ) : (
      <div className="w-full min-h-screen bg-gray-200 relative">
        <Header />
  
        <div className="w-full h-full px-10 py-4">
          <Outlet />
        </div>
      </div>
    )}
    </>
  )
}

export default AppStarter