const Footer = () => {
    return (
      <footer className="bg-white border-t border-gray-200 py-8 mx-4 md:mx-28 font-outfit">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div className="mb-6 md:mb-0">
              <img
                src="https://getswipe.in/static/img/brand_logo.svg"
                alt="Swipe Logo"
                className="h-10 mb-4"
              />
              <p className="text-gray-700">Ab Business Karo, Tension Free!</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Facebook">
                  <img
                    src="https://getswipe.in/static/img/social/facebook.svg"
                    alt="Facebook"
                    className="h-6"
                  />
                </a>
                <a href="#" aria-label="Instagram">
                  <img
                    src="https://getswipe.in/static/img/social/instagram.svg"
                    alt="Instagram"
                    className="h-6"
                  />
                </a>
                <a href="#" aria-label="Twitter">
                  <img
                    src="https://getswipe.in/static/img/social/twitter.svg"
                    alt="Twitter"
                    className="h-6"
                  />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <img
                    src="https://getswipe.in/static/img/social/linkedin.svg"
                    alt="LinkedIn"
                    className="h-6"
                  />
                </a>
                <a href="#" aria-label="YouTube">
                  <img
                    src="https://getswipe.in/static/img/social/youtube.svg"
                    alt="YouTube"
                    className="h-6"
                  />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <h3 className="font-semibold mb-4 text-sm md:text-base">QUICK LINKS</h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li><a href="#">Why Swipe?</a></li>
                  <li><a href="#">E-Waybill</a></li>
                  <li><a href="#">E-Invoice</a></li>
                  <li><a href="#">Invoice Formats</a></li>
                  <li><a href="#">Swipe for Accountants</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Tutorials</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-sm md:text-base">EXPLORE</h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li><a href="#">Join Community 🤝</a></li>
                  <li><a href="#">Product Updates 🚀</a></li>
                  <li><a href="#">Tools</a></li>
                  <li><a href="#">Explore GST</a></li>
                  <li><a href="#">Trending</a></li>
                  <li><a href="#">Developers 👨‍💻</a></li>
                  <li><a href="#">API</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-sm md:text-base">COMPANY</h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-sm md:text-base">LEGAL</h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Refund</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Referral Program</a></li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="text-center mt-8 text-gray-500 p-7 text-sm md:text-base">
            <p>© 2024 Nextspeed Technologies Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  