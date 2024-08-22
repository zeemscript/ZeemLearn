import Search from "@/components/atoms/Search";

export default function Layout({ children }) {
  return (
    <main>
          <nav>
              <Search className="w-full"/>
      </nav>
      {children}
    </main>
  );
}
