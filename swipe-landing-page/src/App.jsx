import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
import { Section3 } from './components/Section3'
import { Section4 } from './components/Section4'
import { Section5 } from './components/Section5'
import { Section6 } from './components/Section6'
import { Section7 } from './components/Section7'
import { Section8 } from './components/Section8'
import { Section9 } from './components/Section9'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 src={"https://getswipe.in/static/img/illustrations-new/swipe_software.webp"} h1={"Create invoices in less than 10 seconds"}
      para={"Swipe helps you track your sales, manage inventory, customers & vendors and be in control of your business. Create GST compliant invoices & share with customers easily."}
      btn={"Create Invoices For Free"} />
      <Section7 src={"https://getswipe.in/static/img/illustrations-new/share_invoices_on_whatsapp_1.webp"}
      h1={"Share invoices on WhatsApp & Email"}
      para={"Swipe helps you reach your customers and vendors wherever they are. Share invoices and purchase orders on WhatsApp and Email."}
      btn={"Get Started with swipe"} />
      <Section6 src={"https://getswipe.in/static/img/illustrations-new/gst_filings.webp"}
      h1={"GST filings made easy"}
      para={"Using Swipe, you can quickly generate GST reports to instantly file your returns."}
      btn={"Get GST Reports in One-Click"} />
      <Section7 src={"https://getswipe.in/static/img/illustrations-new/inventory_management.webp"}
      h1={"Manage inventory"}
      para={"Swipe Inventory is designed to help you spend less time in front of the screen and more time with your customers. Download reports on current inventory and update inventory quantities in bulk, which is helpful when adding new inventory."}
      btn={"Manage Inventory For Free"} />
      <Section6 src={"https://getswipe.in/static/img/illustrations-new/fast_payments.webp"}
      h1={"Get Payments Faster"}
      para={"With Swipe you can send payment links and even QR codes so that customers can pay you quickly. Send payment reminders easily. Make payments to your suppliers conveniently from your trusted UPI apps."}
      btn={"Try Swipe For Free"} />
      <Section7 src={"https://getswipe.in/static/img/illustrations-new/online_store.webp"}
      h1={"Get Your Store Online"}
      para={"With Swipe you can setup your online store and grow your business. Set up your online store with products, images, prices & exclusive offers. Directly share your store link with customers to receive online orders and payments!"}
      btn={"Create Online Store Now"} />
      <Section6 src={"https://getswipe.in/static/img/illustrations-new/business_analytics.webp"}
      h1={"Powerful Business Analytics and Reports"}
      para={"Swipe automatically generates all the business analytics you will ever need to answer any question about the product/categorywise sales or to understand your users and payments."}
      btn={'Get Sale Reports'} />
      <Section8 />
      <Section9 />
      <Footer />
    </>
  )
}

export default App
