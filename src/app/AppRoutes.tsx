import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  About,
  ContactUs,
  Listings,
  Rentals,
  Sales,
  Team,
  PageNotFound,
} from "./pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Listings />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/team" element={<Team />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
