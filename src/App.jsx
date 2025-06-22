import styles from "./style";
import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, About, Expertise, Packages, ContactUs } from "./pages";
import Destinations from "./pages/Destinations";
import TravelerAddPage from "./pages/TravelerAddPage";

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-20"> {/* Add margin-top to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/travelers-add" element={<TravelerAddPage />} />
        </Routes>
      </div>

      {/* Footer */}
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-gray-900`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </Router>
);

export default App;