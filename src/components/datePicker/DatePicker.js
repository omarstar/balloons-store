
import "./DatePicker.css"

const DatePicker = () => {    

    {
        $(document).ready(function(){

            $('.datepicker').datepicker({
                format: 'dd-mm-yyyy',
                autoclose: true,
                startDate: '0d'
            });
            
            $('.cell').click(function(){
                $('.cell').removeClass('select');
                $(this).addClass('select');
            });
            
            });
    }

    return ( 
        <>
        <div class="container-fluid px-0 px-sm-4 mx-auto">
            <div class="row justify-content-center mx-0">
                <div class="col-lg-10">
                <div class="card w-75 border-0">
                    <form autocomplete="off">
                    <div class="card-header bg-dark">
                        <div class="mx-0 mb-0 row justify-content-sm-center justify-content-start px-1">
                        <input type="text" id="dp1" class="datepicker" placeholder="Pick Date" name="date" readonly/><span class="fa fa-calendar"></span>
                        </div>
                    </div>
                    <div class="card-body p-3 p-sm-5">
                        <div class="row text-center mx-0">
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">9:00AM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">9:30AM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">9:45AM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">10:00AM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">10:30AM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">10:45AM</div></div>
                        </div>
                        <div class="row text-center mx-0">
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">11:00AM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">11:30AM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">11:45AM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">12:00PM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">12:30PM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">12:45PM</div></div>
                        </div>
                        <div class="row text-center mx-0">
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">1:00PM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">1:30PM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">1:45PM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">2:00PM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">2:30PM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">2:45PM</div></div>
                        </div>
                        <div class="row text-center mx-0">
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">3:00PM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">3:30PM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">4:15PM</div></div>
                        <div class="col-md-2 col-4 my-1 px-2"><div class="cell py-1">5:00PM</div></div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default DatePicker;