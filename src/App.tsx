import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav className="border-4 border-teal-600 bg-teal-400 p-8 inline-block delay-100">
        <Link to="/one">Page one</Link> |{" "}
        <Link to="/two">Page two</Link> |{" "}
        <Link to="/three">Page three</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
