import { useSelector } from "react-redux"
import { RootState } from "../store"
import MenuCard from "../components/MenuCard";

function AppIndex() {
  const { filterList } = useSelector((state: RootState) => state.menu);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
      {filterList.map((i) => (
        <MenuCard key={i.id} menu={i} />
      ))}
    </div>
  )
}

export default AppIndex