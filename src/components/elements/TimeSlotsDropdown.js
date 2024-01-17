// TimeSlotsDropdown.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAvailableTimeSlots } from '../../store/selectors';
import { checkOrderActions } from '../../store/contact/checkout-slice';

const TimeSlotsDropdown = () => {
  const availableTimeSlots = useSelector(getAvailableTimeSlots());
  console.log('availableTimeSlots', availableTimeSlots)

  const dispatch = useDispatch();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const handleDeliveryTimeOnSelectChange = (e) => {
    const { name, value } = e.target;
    console.log('time slot selected', value)
    setSelectedTimeSlot(value)
    dispatch(checkOrderActions.updateDeliveryData({ field: name, value }));
}

  return (
    <div>
      <label class="dis fw-bold mb-2">Select Delivery Time</label>
        {
            availableTimeSlots.length > 0 ? 
            <select
            name='timeslot'
            className="w-100 form-control text-center input-shadow fs-xs"
            value={selectedTimeSlot}
            onChange={handleDeliveryTimeOnSelectChange}
            required
            >
            <option value="">Select Delivery Time</option>
            { 
                availableTimeSlots.map((timeSlot, index)=> (
                <option key={index} value={timeSlot}>{timeSlot}</option>
            ))
            }
            </select>
            : (
                <input type='text' className="form-control fw-normal" disabled value="No Time Slots Available For This Date"/>
            )
        }
    </div>
  );
};

export default TimeSlotsDropdown;
