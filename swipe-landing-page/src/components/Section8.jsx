import { Features } from "./Features";

export const Section8 = () => {
  return (
    <div className="mx-4 md:mx-28">
      <div className="flex justify-center mb-6">
        <h1 className="font-outfit text-3xl font-medium">Why Swipe?</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Features title={"Create invoice within 10 seconds"} />
        <Features title={"Customize invoices"} />
        <Features title={"Multiple invoice templates"} />
        <Features title={"Delivery Challan"} />
        <Features title={"GSTR report"} />
        <Features title={"Credit note"} />
        <Features title={"Share invoices on WhatsApp and Email"} />
        <Features title={"Payment reminders"} />
        <Features title={"Integrated payment gateway"} />
        <Features title={"Payment ledger"} />
        <Features title={"POS billing"} />
        <Features title={"Thermal printing"} />
        <Features title={"Edit bills"} />
        <Features title={"Purchase orders and purchase invoices"} />
        <Features title={"Generate Estimates/Quotation"} />
        <Features title={"Generate ProForma Invoices"} />
        <Features title={"Stock and Inventory Management"} />
        <Features title={"Unlimited Logins"} />
        <Features title={"Unlimited Customers"} />
        <Features title={"Unlimited Products/ Bulk Upload"} />
        <Features title={"Multiple User/Business accounts"} />
        <Features title={"User Role Settings"} />
        <Features title={"Multiple GSTs Accounting"} />
        <Features title={"Multiple Pricing (Wholesale/Retail)"} />
        <Features title={"Customer/Vendor details"} />
        <Features title={"Manage Expenses"} />
        <Features title={"Profit/Loss statement"} />
        <Features title={"Real-time Analytics"} />
        <Features title={"Online Store"} />
        <Features title={"Add Product Variants"} />
        <Features title={"E-way Bills"} />
        <Features title={"E-Invoices"} />
        <Features title={"TDS"} />
        <Features title={"Cess"} />
        <Features title={"Recurring Invoices/ Subscriptions"} />
        <Features title={"SMS Campaigns"} />
        <Features title={"Export/ SEZ Invoices"} />
        <Features title={"Bill of Supply"} />
        <Features title={"Serial Number & IMEI"} />
        <Features title={"Batch & Expiry"} />
        <Features title={"Manufacturing & Grouping"} />
        <Features title={"Tally Integration"} />
        <Features title={"Advanced Column Linking"} />
      </div>
    </div>
  );
};
