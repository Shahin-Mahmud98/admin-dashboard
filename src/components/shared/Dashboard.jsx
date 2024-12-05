import Header from "/src/components/shared/Header";
const Dashboard = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <div className="w-full">
      <Header
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}
      ></Header>
    </div>
  )
}

export default Dashboard
