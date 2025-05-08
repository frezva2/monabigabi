"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import InputNumber from 'rc-input-number';


export default function Home() {
  const [numPeople, setNumPeople] = useState(2);
  const [date, setDate] = useState(new Date().toLocaleDateString("en-US", {
    year: 'numeric', month: 'short', day: 'numeric' }));
  const [rawTime, setRawTime] = useState(null);
  const [time, setTime] = useState(null);
  const [message, setMessage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [severity, setSeverity] = useState("error");


  const handleDateSelect = (date) => {
    setDate(date.toLocaleDateString("en-US", {
      year: 'numeric', month: 'short', day: 'numeric' }));
  };
  const handleDateChange = (date) => {
    setDate(date.toLocaleDateString("en-US", {
      year: 'numeric', month: 'short', day: 'numeric' }));
  }
  const extractTimeFromDate = (date) => {
    if (date) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const PM = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedTime = `${formattedHours}:${formattedMinutes} ${PM}`;
      setTime(formattedTime);
      return formattedTime;
    }
    return null;
  }
  const handleSubmit = () => {
    if (!numPeople || !date || !time) {
      setMessage("Please fill in all fields.");
      setSeverity("error");
      setShowAlert(true);
      console.log(
        `Please fill in all fields.`
      );
      return;
    } else {
      setMessage(`Reservation made for ${numPeople} people on ${date} at ${time}.`);
      setSeverity("success");
      setShowAlert(true);
      console.log(
        `Reservation made for ${numPeople} people on ${date} at ${time}.`
      );
    }
  };
  const handleClose = (_ev, reason) => {
    if (reason === "clickaway") return; 
    setShowAlert(false);
  };

  return (
    <div className="items-start justify-items-center mt-10">
      <main className="">
         <div className="sm:flex lg:flex-row md:flex-col-reverse sm:flex-col gap-[0px] row-start-2 items-center sm:items-center justify-center">
          <div className="lg:w-1/2 items-start md:w-full sm:w-full sm:mr-5">
            <div className="flex flex-row items-end justify-end ml-20 mr-10">  
              <Image
                src="/images/FarmersMarket_-2797.jpg"
                alt="Mon Abi Gabi Restaurant"
                width={800}
                height={1200}
                className=" flex mt-8 w-3/5 object-cover "
              />
              <Image
                src="/images/MAG-MushroomPasta-1578.jpg"
                alt="Mon Abi Gabi Restaurant"
                width={1200}
                height={800}
                className=" flex mt-8 w-2/5 object-cover ml-5"
              />
            </div>
            <div className="flex flex-row items-end justify-end  mr-10">
              <Image
                src="/images/MAG-382.jpg"
                alt="Mon Abi Gabi Restaurant"
                width={1200}
                height={800}
                className="mt-5 w-5/7 justify-end object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-start lg:w-1/2 h-auto lg:mt-30 p-10 pr-10">
            <h1 className="text-4xl font-baskerville text-start">
              About
            </h1>
            <p className="mt-4 text-xl font-outfit font-midnight">
              Mon Ami Gabi is a classic French bistro that embraces a passion for food, wine and culture. 
              Whether you come for the Onion Soup Au Gratin, Steak Frites or decadent Profiteroles,
              Mon Ami Gabi offers something to satisfy all tastes. For those looking to indulge in a
              <span className="text-burgendy italic"> unique dish</span>, the Escargots de Bourgogne with 
              garlic-herb butter is literally a sizzling experience.
              <br/> <br/>
              To complement the menu, an extensive selection of 
              <span className="text-burgendy italic "> 80 boutique French wine varietals</span>, 
              handpicked by renowned chef and owner Gabino Sotelino, are served by the glass 
              or bottle from our signature rolling wine cart.
              <br/> <br/>
              While the favorites are here in abundance, there’s always something new when you’re 
              ready to fall in love all over again.
            </p>
          </div>
        </div>
        <section id="reservations" className="flex md:flex-row flex-col items-center justify-center mt-10 bg-grayish">
          <div className="w-1/2 items-center justify-center bg-gray mr-10 mt-10 mb-10 ml-5">
            <h1 className="text-3xl mb-4 text-black text-center font-baskerville sm:ml-10">
              Make a Reservation
            </h1>
            <div className="flex flex-col items-center justify-center sm:ml-10">
              <button className="bg-white px-8 py-1 w-55 mb-3 border-1 rounded-tl-lg font-outfit color-midnight border-lightgreen flex flex-row items-center"> 
                <div className="w-1/3">
                  <InputNumber
                    className=" bg-white text-midnight text-center font-outfit ml-10"
                    value={numPeople}
                    min={1}
                    max={10}
                    step={1}
                    keyboard={true}
                    changeOnWheel={true}
                    stringMode={true}
                    onChange={(value) => setNumPeople(value)}
                    // upHandler={<span className="hover:cursor-pointer"> ▲ </span>}
                    // downHandler={<span className="hover:cursor-pointer"> ▼ </span>}
                    style={{ width: '100%' }}
                  />
                </div>
                <h3 className="w-1/8 ml-1">people</h3>
              </button>
              <div className="flex flex-col items-center w-full">
                <DatePicker
                  selected={date}
                  onSelect={handleDateSelect} //when day is clicked
                  onChange={handleDateChange} //only when value has changed
                  dateFormat="MMMM dd, yyyy"
                  className="hover:cursor-pointer border w-full border-lightgreen p-1 bg-white text-midnight text-center font-outfit mb-3"
                />
              </div> 
              <div className="w-55 mb-3 items-center justify-center border-1 border-lightgreen">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    className="bg-white hover:cursor-pointer font-outfit color-midnight items-center justify-center"
                    // label={label}
                    value={rawTime}
                    ampm={true}             // 24-hour format
                    minutesStep={15}         // step of 15 minutes
                    onChange={(newValue, context) => {
                      if (context.validationError) {
                        console.warn("Invalid time:", context.validationError);
                      } else {
                        setRawTime(newValue);
                        extractTimeFromDate(newValue);
                      }
                    }}
                    slotProps={{
                      textField: {
                        className: 'cursor-pointer w-55 h-8 mb-3',
                        sx: {
                          '& fieldset': {
                            border: 'none',
                          },
                          "& .MuiInputBase-input": {
                            textAlign: "center",
                            fontFamily: 'var(--font-outfit)',
                            color: 'var(--color-midnight)',
                          },
                        },
                      },
                    }}
                    
                  />
                </LocalizationProvider>
              </div>
              <button 
                onClick={handleSubmit}
                className="text-l hover:cursor-pointer px-8 py-1 w-55 rounded-br-lg font-baskerville bg-midnight text-grayish"
              >
                FIMD A TABLE
              </button>
            </div>
          </div>
          <div className="hidden md:flex w-full items-center justify-center">
            <Image
              src="/images/MAG-Salmon_Anjali Pinto.jpg"
              alt="Mon Abi Gabi Reservation"
              width={1200}
              height={800}
            />
          </div>
          <div className="block md:hidden w-full items-center justify-center">
            <Image
              src="/images/MAG-Salmon_Anjali Pinto.jpg"
              alt="Mon Abi Gabi Reservation"
              width={1200}
              height={800}
            />
          </div>
          <Snackbar
            open={showAlert}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleClose}
              severity={severity}   
              sx={{ width: "100%" }}
            >
              {message}
            </Alert>
          </Snackbar>
        </section>
      </main>
    </div>
  );
}
