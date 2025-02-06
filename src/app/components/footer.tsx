import React from "react";
import Logo from "./frontend/logo";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="pt-[3rem] pb-[5rem] bg-blue-900">
      <div className="w-[80%] mx-auto border-b-[1.2px] pb-[2rem] border-b-slate-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
        <Logo />
        <div className="lg:mx-auto">
          <h1 className="text-[20px] sm:text-[30px] text-white mb-[1rem]">
            Information
          </h1>
          <p className="footer__link">About Us</p>
          <p className="footer__link">Privacy Police</p>
          <p className="footer__link">Wallet</p>
          <p className="footer__link">Sales</p>
          <p className="footer__link">FAQ</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] sm:text-[30px] text-white mb-[1rem]">
            Account
          </h1>
          <p className="footer__link">Dashboard</p>
          <p className="footer__link">My Sales</p>
          <p className="footer__link">My Wishlist</p>
          <p className="footer__link">Account Details</p>
          <p className="footer__link">Track My Bidding</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] sm:text-[30px] text-white mb-[1rem]">
            Shop
          </h1>
          <p className="footer__link">Affiliate</p>
          <p className="footer__link">Bestseller</p>
          <p className="footer__link">Discount</p>
          <p className="footer__link">Latest Product</p>
          <p className="footer__link">Sale Product</p>
        </div>
      </div>
      <div className="mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto">
        <p className="text-[14px] text-white opacity-60">
          &#169; Copyright evairo_dev 2025
        </p>
      </div>
    </div>
  );
};

export default Footer;
