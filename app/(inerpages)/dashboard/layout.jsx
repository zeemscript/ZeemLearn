import DashNavbar from "@/components/atoms/DashNavbar";
import RouteProtector from "@/lib/RouteProtector";

export default function Layout({ children }) {
  return (
    <RouteProtector>
      <div>
        <DashNavbar />
        <main>{children}</main>
      </div>
    </RouteProtector>
  );
}
