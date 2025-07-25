import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchAPI, submitAPI } from './api';





function BookingPage() {
 
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const allTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [availableTimes, setAvailableTimes] = useState(allTimes);
 const [bookedTimesByDate, setBookedTimesByDate] = useState({});

 
console.log('wwwwwwwwww',bookedTimesByDate);

/*

  useEffect(() => {

    console.log('useEffect triggered');
  let isDuplicate = false;

  for (const [bookedDate, bookedTime] of Object.entries(bookedTimesByDate)) {
    if (bookedDate === date && bookedTime === time) {
      console.log('Checking for duplicates...');
      isDuplicate = true;
          console.log("✅ The table for this date and time is available");
      break;
    }
  }

  if (isDuplicate) {
    console.log("❌ The table for this date and time is already booked");
    // Do something if already booked
  } 
 
  }, [date, time, bookedTimesByDate]);
*/



useEffect(() => {
  if (!date || !time) return;

  console.log('useEffect triggered');

  const bookedTimes = bookedTimesByDate[date] || [];

  if (bookedTimes.includes(time)) {
    console.log("❌ The table for this date and time is already booked");
  } else {
    console.log("✅ The table for this date and time is available");
  }
}, [date, time, bookedTimesByDate]);




useEffect(() => {
   
 const W = bookedTimesByDate[date];
 for (let i = 0; i < allTimes.length; i++) {
      if (W && W.includes(allTimes[i])) {
        allTimes.splice(i, 1);
        i--;  
      }
    }

  setAvailableTimes(allTimes);
  console.log('Available times after booking:222222222222222', allTimes);
  },[date]);





  const handleSubmit = (e) => {  
    e.preventDefault();
    console.log({ date, time, guests, occasion });
setBookedTimesByDate(prev => {
  
  const existingTimes = prev[date] || [];
 
 
  if (!existingTimes.includes(time)) {
/*
        const index = allTimes.indexOf(time);
      allTimes.splice(index, 1);
      console.log('Available times after booking:', allTimes); 
*/
    return {
      ...prev,
      [date]: [...existingTimes, time],      
    };
  } else {
 
    return prev;
  }
});
    console.log('booked Times By Date',bookedTimesByDate);
    // Send to API later
  };

  return (
    <div className="booking-page">
      <div className="coverthis">
        <form
          onSubmit={handleSubmit}
          style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        >
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input type="submit" value="Make Your reservation" disabled={
  !date  
  || !time           
  || !guests         
  || guests < 1      
  || guests > 10     
  || !occasion       
} />
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
