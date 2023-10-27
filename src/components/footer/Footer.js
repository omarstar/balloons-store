import "./footer.css"
const Footer = () => {
    return ( 
        <>
        {/* id="footer-wrapper" with padding making the huge line below */}
            <div id="footer-wrapper">
				<footer id="footer" class="">
					<div class="row">
						<div class="col-lg-2 col-md-6 col-12">

							<section>
								<h2 className="ff-itali">Site map</h2>
								<ul class="divided">
									<li><a href="">HOME</a></li>
									<li><a href="">ABOUT US</a></li>
									<li><a href="">CONTACT US</a></li>
								</ul>
							</section>

					    </div>
					    <div class="col-lg-3 col-md-6 col-12">

							<section>
								<h2 className="ff-itali">bALLOONS</h2>
								<ul class="divided">
									<li><a href="">Bulk Balloons</a></li>
									<li><a href="">Balloon Decorations</a></li>
									<li><a href="">Holidays & events</a></li>
									<li><a href="">Balloons Bouquet</a></li>
									<li><a href="">Create your won Bouquet</a></li>
								</ul>
							</section>
						</div>
						<div class="col-12 col-md-6 imp-medium">


								<section>
									<h2 className="ff-itali">Get in touch</h2>
											<div class="row">
												<div class="col-12 col-lg-6" styles={"padding-left: 20px"}>
												<dl class="contact">
													<dt>LinkedIn</dt>
													<dd><a href="https://www.linkedin.com/company/13413794/">linkedin.com/Infracom</a></dd>
													<dt>Facebook</dt>
													<dd><a href="https://business.facebook.com/Infracom-200770853788242/">facebook.com/Infracom</a></dd>
													<dt>WWW</dt>
													<dd><a href="https://infracommunication.com">infracommunication.com</a></dd>
													<dd><a href="mailto:sales@infracommunication.com">Sales@infracommunication.com</a></dd>
												</dl>
											</div>
											<div class="col-12 col-lg-6">
												<dl class="contact">
													<dt>Our Address</dt>
													<dd class="text-gray">
														<address>
															JAFZA 14 | Office 434 | PO Box 262995<br />
															Jebel Ali | Dubai<br />
															United Arab Emirates
														</address>
													</dd>
													<dt>Phone Us</dt>
													<dd class="text-gray"><a href="tel:+97148876763">+971 4 887 6763</a> <br/> <a href="tel:+971553208899">+971 55 320 8899</a></dd>
													<dt>Email Us</dt>
													<dd class="text-gray"><a href="mailto:omar@infracom.me">balloon support mail</a></dd>
												</dl>
											</div>
										</div>
								</section>

						</div>
						<div class="col-12">
							<div id="copyright">
								<ul class="menu">
									<li>&copy; Funky Balloons 2023. All rights reserved</li>
                                    <li>Design: <a href="https://www.">Omar Barakat | Balloon</a></li>
								</ul>
							</div>
						</div>
					</div>
				</footer>
			</div>
        </>
     );
}
 
export default Footer;

