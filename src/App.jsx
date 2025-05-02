import styles from "./style";
import { Navbar } from "./components";

import { Home, About, Expertise, Packages, ContactUs  } from "./pages";


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Page Sections */}
    <Home />

    <About />

    <Expertise />

    <Packages />

    <section id="destinations" className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Destinations</h1>
    </section>

    <section id="packages" className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Packages</h1>
    </section>

    <section id="booking" className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Booking</h1>
    </section>

    <ContactUs />

    {/* Repeat for Packages, Booking, Gallery, Contact */}
  </div>
);


export default App;
