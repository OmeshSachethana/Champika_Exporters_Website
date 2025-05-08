import styles from "./style";
import { Navbar } from "./components";

import { Home, About, Expertise, Packages, ContactUs  } from "./pages";
import Destinations from "./pages/Destinations";


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

    <Destinations />

    <ContactUs />

    {/* Repeat for Packages, Booking, Gallery, Contact */}
  </div>
);


export default App;
