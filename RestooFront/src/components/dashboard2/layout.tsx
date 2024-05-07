import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="dashboard">
      <div className="container">
        <div className="row">
          <Sidebar />

          <div className="col-lg-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="dashboard-item-taitel">
                  <h4>Dashboard</h4>
                  <p>Let’s check your today</p>
                </div>
                {children}
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layout;
