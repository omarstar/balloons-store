import { Link, useNavigate } from "react-router-dom";
import "./footer.css"
import { scrollToSection, scrollToSectionId, scrollToTop } from "../../utils/helpers";
const Footer = () => {

	const navigate = useNavigate();

    const handleNavigation = (sectionId) => {
        // Navigate to the homepage
        navigate('/');
        // Scroll to the specified section after a brief delay to allow the route change to take effect
        setTimeout(() => {
            scrollToSection(sectionId);
        }, 100);
    };

    return ( 
        <>
        {/* id="footer-wrapper" with padding is making the huge line below */}
            <div id="footer-wrapper">
				<div>
					<a
						href="https://wa.me/971551739652"
						className="whatsapp_float"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands fa-whatsapp whatsapp-icon"></i>
					</a>
				</div>
				<footer id="footer" className="">
					<div className="row justify-content-center">
						<div className="col-lg-2 col-md-6 col-12">

							<section>
								<h2 className="">Site map</h2>
								<ul className="divided">
									<li><Link to="/" onClick={scrollToTop}>HOME</Link></li>
									{/* <li><Link to="/#aboutus">ABOUT US</Link></li>
									<li><Link to="/#contactus">CONTACT US</Link></li> */}
									<li><Link to="/#aboutus" onClick={() => handleNavigation('aboutus')}>ABOUT US</Link></li>
									<li><Link to="/#contactus" onClick={() => handleNavigation('contactus')}>CONTACT US</Link></li>
									
								</ul>
							</section>

					    </div>
					    <div className="col-lg-3 col-md-6 col-12">

							<section>
								<h2 className="">BALLOONS</h2>
								<ul className="divided">
									<li><Link to="category">Nadia Picks</Link></li>
									<li><Link to="category">Balloon Decorations</Link></li>
									<li><Link to="category">Holidays & events</Link></li>
									<li><Link to="category">Bouquets & setups</Link></li>
									<li><Link to="/create-bouquet/">Create your won Bouquet</Link></li>
									<li><Link to="/party-rentals">Party Rentals</Link></li>
								</ul>
							</section>
						</div>
						<div className="col-12 col-md-6 imp-medium">


								<section>
									<h2 className="">Get in touch</h2>
											<div className="row">
												<div className="col-12 col-lg-6" styles={"padding-left: 20px"}>
												<dl className="contact">
													<dt>LinkedIn</dt>
													<dd><a href="https://www.linkedin.com/company/funkyballoons" target="_blank">linkedin.com/funkyballoons</a></dd>
													<dt>Facebook</dt>
													<dd><a href="https://business.facebook.com/funkyballoons/" target="_blank">facebook.com/funkyballoons</a></dd>
													<dt>WWW</dt>
													<dd><a href="https://funkyballoons.me" target="_blank">funkyballoons.com</a></dd>
													<dd><a href="mailto:omar.barakat@infracom.me" target="_blank">info@funkyballoons.com</a></dd>
												</dl>
											</div>
											<div className="col-12 col-lg-6">
												<dl className="contact">
													<dt>Our Address<span>📍</span></dt>
													<dd className="text-gray">
														<address>
															Al Wasl Center | 1st Floor<br />
															Sheikh Zayed Road | Dubai<br />
															United Arab Emirates
														</address>
													</dd>
													<dt>Call Us <span>📞</span></dt>
													<dd className="text-gray">
														{/* <a href="tel:+97143686083">+971 55 173 9652</a><br/> */}
														<a href="tel:+971551739652">+971 55 173 9652</a>
													</dd>
													<dt>Email Us <span>✉️</span></dt>
													<dd className="text-gray"><a href="mailto:omar@infracom.me">customer service</a></dd>
												</dl>
											</div>
										</div>
								</section>

						</div>
						<div className="col-12">
							<div id="copyright">
								<ol className="menu">
									<li>&copy; Funky Balloons by Nadia 2024. All rights reserved</li>
                                    <li>Design: <a href="https://funkyballoons.me">funky balloons</a></li>
								</ol>
							</div>
						</div>
					</div>
				</footer>
			</div>
        </>
     );
}
 
export default Footer;

