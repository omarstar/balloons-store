import "./promobar.css"
const Promobar = () => {
    return ( 
        <>
            <div class="promobar">
                <div class="col-xs-12 col-md-3 promo_left-section">
                    <div class="promo-bar-label">
                    <span class="promo-bar-label-text">
                        <input type="hidden" id="is_sameday_cutoff_reached" name="is_sameday_cutoff_reached" value="yes"/>Get It By Tomorrow!
                    </span>
                    </div>
                </div>
                <div class="promo_right-section">
                    <p class="promo-text">Delivery areas: Business Bay. Speical Offer! 20% off DISCOUNT</p>
                    <button class="promo-button">Learn More</button>
                </div>
            </div>
        </>
     );
}
 
export default Promobar
;