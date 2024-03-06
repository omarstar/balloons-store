import { Link } from "react-router-dom";
import "./footer.css"
const Footer = () => {
    return ( 
        <>
        {/* id="footer-wrapper" with padding is making the huge line below */}
            <div id="footer-wrapper">
				<div>
					<a
						href="https://wa.me/971553208899"
						className="whatsapp_float"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands fa-whatsapp whatsapp-icon"></i>
					</a>
				</div>
				<footer id="footer" className="">
					<div className="row">
						<div className="col-lg-2 col-md-6 col-12">

							<section>
								<h2 className="">Site map</h2>
								<ul className="divided">
									<li><Link to="/">HOME</Link></li>
									<li><Link to="/#aboutus">ABOUT US</Link></li>
									<li><Link to="/#contactus">CONTACT US</Link></li>
								</ul>
							</section>

					    </div>
					    <div className="col-lg-3 col-md-6 col-12">

							<section>
								<h2 className="">BALLOONS</h2>
								<ul className="divided">
									<li><Link to="category">Bulk Balloons</Link></li>
									<li><Link to="category">Balloon Decorations</Link></li>
									<li><Link to="category">Holidays & events</Link></li>
									<li><Link to="category">Balloons Bouquet</Link></li>
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
															JAFZA 14 | Office 434 | PO Box 262995<br />
															Jebel Ali | Dubai<br />
															United Arab Emirates
														</address>
													</dd>
													<dt>Call Us <span>📞</span></dt>
													<dd className="text-gray"><a href="tel:+97148876763">+971 4 887 6763</a> <br/> <a href="tel:+971553208899">+971 55 320 8899</a></dd>
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
									<li>&copy; Funky Balloons 2023. All rights reserved</li>
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

