import { useState, useEffect } from 'react';
import './App.css';
import doors from './assets/json/doors.json';

function App() {

  // Let's create some state hook
  // This one to set if the door is open when the page loads or it should remain closed
  const [isOpen, setIsOpen] = useState([]);
  const [submitToStorage, setSubmitToStorage] = useState([]);

  // we create the function 'checkIfAllowedToOpen' that will check if we are allowed to open the door depending on the current day.
  const checkIfAllowedToOpen = (inputDate) => {
    const doorDate = new Date(inputDate);
    const today = new Date();

    // conditional: if true (doorDate is greater or equal to today's date) then calls the openDoor function, else we display an alert
    today >= doorDate 
    ? openDoor(inputDate) 
    : alert(
        "Your not allowed to open this yet, try again in a few days!"
      );
  };

  // When we open a door, this data is saved in local storage to remember which one has been already opened
    const openDoor = (doorDate) => {
    setSubmitToStorage(prevState => {
      const updatedState = [...prevState, doorDate];
      localStorage.setItem('isOpen', JSON.stringify(updatedState));
      return updatedState;
    });
  };

  // We need to convert the date format from string to date to compare it to today's date 
  const convertDateToDay = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();

    return day;
  };

  // We may need to reset doors and remove items from local storage
  const resetDoors = () => {
    setSubmitToStorage([]);
    localStorage.removeItem('isOpen');
  };

  // Let's create a useEffect hook with a variable called 'local' which is goin to get the local storage item that is called "isOpen"
  // then set isOpen to the local storage item if there is one, else we get an empty array.
  useEffect(() => {
    const local = localStorage.getItem('isOpen');
    setIsOpen(local ? local : []);
  }, [submitToStorage]);


   return (
    <div className='container'>
        <h1 className='calendar__title'>Advent Calendar</h1>
        <div className='calendar'>
          {doors.map((door, index) => {
            return (
              // condition: if isOpen includes the day of the selected door, then the div 'door_open' and its content is showed (the door is open) 
              // else, the div 'door' gets opened. When a click event occurs on this div, the function checks if we are allowed to open that door.
            <div key={index} className='door__container grow'>
              {isOpen.includes(door.day) ? (
                <div className='door__open'>
                  <p>{door.message}</p>
                </div>
              ) : (
                <div className='door'
                  onClick={() => checkIfAllowedToOpen(door.day)}
                >
                  <img src={door.imageUrl} alt={`Image for day ${door.day}`} />
                  <p>{convertDateToDay(door.day)}</p>
                </div>
              )}
            </div>
            );
          })}
        </div>
        <div className='button__container'>
          <button className='reset__button' onClick={resetDoors}>
          </button>
        </div>
      </div>
  );
}

export default App
