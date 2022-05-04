import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

const PageOne = () => {

  let invoices: any = getInvoices()

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice: any) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/one/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name} has to pay {invoice.amount} before {invoice.due}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default PageOne
