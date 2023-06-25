import {
  FaTripadvisor,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <img src="/webDevProF.png" className="w-8 h-8 mr-3" alt="" />
        {/* <FaTripadvisor className="w-8 h-8" /> */}
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div className="">
        <span className="footer-title">Contact Us</span>

        <address>
          Phone: 02 4564675678, <br />
          24/D Dhanmondi,
          <br /> House no #56,
          <br /> Road #7, <br />
          Bangladesh, Dhaka
        </address>
      </div>

      <div className="">
        <div className="flex space-x-4 w-full border-b pb-2">
          <a target="_blank" href="https://www.facebook.com/bishwajit.paul.52/">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a target="_blank" href="https://twitter.com/BishwajitPaul2">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a target="_blank" href="https://www.instagram.com/">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a target="_blank" href="">
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
        <hr />
        &copy; 2023 All rights reserved to Toy Mart.
      </div>
    </footer>
  );
};

export default Footer;
