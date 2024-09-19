import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/about";

import TeamDetailsPage from "../pages/team-details";
// import ContactPage from "../pages/contact";
import ScrollToTop from "../components/scroll-to-top";
import CalculatorPage from "../pages/calculator";
import LoginPage from "../pages/login";
// import DashboardPage from "../pages/dashboard";
import CoachingPage from "../pages/coaching";
// import ProtectedRoute from "./protected-route";
import CoachDetailsPage from "../pages/coach-details";
import Faq from "../pages/faq";
import WorkInProgressPage from "../pages/wip";
import Home from "../pages/home";
import PaymentPage from "../pages/payment";
import AccVerifiedPage from "../pages/verified";
import NewPasswordPage from "../pages/new-password";
import CalculatorTftPage from "../pages/calculator-tft";
import BlogPage from "../pages/blog";
import BlogDetailsPage from "../pages/blog-details";
import DynamicBlogDetailsPage from "../pages/blog-details/dynamic-details";

export default function AppNavigation() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team-details" element={<TeamDetailsPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/contact" element={<WorkInProgressPage />} />
        <Route path="/boosting/lol" element={<CalculatorPage />} />
        <Route path="/boosting/valorant" element={<WorkInProgressPage />} />
        <Route path="/boosting/tft" element={<CalculatorTftPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/:id" element={<WorkInProgressPage />} />
        {/* TODO: dashboard dzialajacy */}
        {/* <Route
          path="/dashboard/:id"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/coaching/:id" element={<CoachDetailsPage />} />
        <Route path="faq" element={<Faq />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/verified" element={<AccVerifiedPage />} />
        <Route path="/new-password/:resetToken" element={<NewPasswordPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/blog-details/:id" element={<DynamicBlogDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
