import Footer from "../ui/dashboard/footer/footer";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <div className="flex-1 bg-custom-blue  ">
        <Sidebar />
      </div>
      <div className="flex-4 bg-custom-blue p-5">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
