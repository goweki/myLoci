import Footer from "@/components/mols/footer";
import NavbarTop from "@/components/mols/navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavbarTop />
      <main className="flex flex-col flex-1 w-full mb-3 lg:mb-6 items-center">
        {children}
      </main>
      <Footer />
    </>
  );
}
