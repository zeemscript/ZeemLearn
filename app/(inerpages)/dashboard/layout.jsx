import DashNavbar from "@/components/atoms/DashNavbar";
export default function Layout({ children }) {
  return (
    <div>
      <DashNavbar />
      <main>{children}</main>
    </div>
  );
}
