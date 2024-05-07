import Footer from "../../components/footer";
import Breadcrumbs from "../../components/breadcrumbs2";
import Layout from "../../components/dashboard/layout";

function Dashboard({ children }: { children?: React.ReactElement }) {
  return (
    <div>
  
      
        {/* <Breadcrumbs title="Admin Dashboard" address="Admin Dashboard" /> */}
        <Layout children={children} />
        
      
      
      <Footer />
    </div>
  );
}

export default Dashboard;
