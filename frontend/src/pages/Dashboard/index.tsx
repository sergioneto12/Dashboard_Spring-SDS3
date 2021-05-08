import BarChart from "components/BarChart/Index";
import DonutChart from "components/DonutChart/Index";
import NavBar from "components/NavBar/Navbar";
import Datatable from "components/DataTable/Index";
import Footer from "components/Footer/Footer";

export default function Dashboard() {
    return (
        <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Sells Dashboard</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Sucess Percentage</h5>
            <BarChart/>
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Sucess Percentage</h5>
            <DonutChart/>
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">All Sells</h2>
        </div>

        <Datatable/>
      </div>

      <Footer/>
    </>
    );
}