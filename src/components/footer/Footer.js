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
									<li><a href="/home">HOME</a></li>
									<li><a href="/home#aboutus">ABOUT US</a></li>
									<li><a href="/home#contactus">CONTACT US</a></li>
								</ul>
							</section>

					    </div>
					    <div className="col-lg-3 col-md-6 col-12">

							<section>
								<h2 className="">bALLOONS</h2>
								<ul className="divided">
									<li><a href="/balloons">Bulk Balloons</a></li>
									<li><a href="/balloons">Balloon Decorations</a></li>
									<li><a href="/balloons">Holidays & events</a></li>
									<li><a href="/balloons">Balloons Bouquet</a></li>
									<li><a href="/balloons">Create your won Bouquet</a></li>
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
													<dd><a href="https://www.linkedin.com/company/funkyballoons">linkedin.com/funkyballoons</a></dd>
													<dt>Facebook</dt>
													<dd><a href="https://business.facebook.com/funkyballoons/">facebook.com/funkyballoons</a></dd>
													<dt>WWW</dt>
													<dd><a href="https://infracommunication.com">funkyballoons.com</a></dd>
													<dd><a href="mailto:info@infracommunication.com">info@funkyballoons.com</a></dd>
												</dl>
											</div>
											<div className="col-12 col-lg-6">
												<dl className="contact">
													<dt>Our Address</dt>
													<dd className="text-gray">
														<address>
															JAFZA 14 | Office 434 | PO Box 262995<br />
															Jebel Ali | Dubai<br />
															United Arab Emirates
														</address>
													</dd>
													<dt>Phone Us</dt>
													<dd className="text-gray"><a href="tel:+97148876763">+971 4 887 6763</a> <br/> <a href="tel:+971553208899">+971 55 320 8899</a></dd>
													<dt>Email Us</dt>
													<dd className="text-gray"><a href="mailto:omar@infracom.me">constumer service email</a></dd>
												</dl>
											</div>
										</div>
								</section>

						</div>
						<div className="col-12">
							<div id="copyright">
								<ol className="menu">
									<li>&copy; Funky Balloons 2023. All rights reserved</li>
                                    <li>Design: <a href="https://www.">Omar Barakat | Balloon</a></li>
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

