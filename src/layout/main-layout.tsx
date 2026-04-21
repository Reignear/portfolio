import Footer from "../components/footer";
import NavBar from "../components/navbar";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}
const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <NavBar />
      <div className="pt-0">{children}</div>
      <div className={className}>
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
