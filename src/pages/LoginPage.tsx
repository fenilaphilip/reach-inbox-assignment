import Header from "../components/Header";
import Login from "../components/Login";
import Footer from "../components/Footer";

export default function LoginPage() {
  return (
    <div className="min-h-full h-screen flex flex-col items-center justify-between sm:px-6 lg:px-8">
      <Header />
      <div className="max-w-md w-full space-y-8">
        <Login />
      </div>
      <Footer />
    </div>
  );
}
