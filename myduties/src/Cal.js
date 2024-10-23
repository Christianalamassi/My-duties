import { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import { Link } from 'react-router-dom';

function Cal() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      <button><Link to="/">Home</Link></button>
    </div>
  );
}

export default Cal;