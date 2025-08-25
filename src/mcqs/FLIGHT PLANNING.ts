const flightPlanning = [
  {
    question:
      "How many feet you have to climb to reach FL 75? Given: Departure aerodrome elevation = 1500 ft QNH = 1023 hPa Temperature = ISA 1 hPa = 30 ft",
    choices: {
      A: "6300 ft",
      B: "6000 ft",
      C: "6600 ft",
      D: "7800 ft",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "VFR flights shall not be flown over the congested areas of cities at a height less than",
    choices: {
      A: "the highest obstacle",
      B: "2000 ft above the highest obstacle within a radius of 600 ft from the aircraft",
      C: "500 ft above the highest obstacle",
      D: "1000 ft above the highest obstacle within a radius of 600m from the aircraft",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 10-28)The measured course 042o T The variation in the area is 6oW and the wind is calm The deviation is 4oW In order to follow this course, the pilot must fly a compass heading of",
    choices: {
      A: "040o",
      B: "044o",
      C: "052o",
      D: "058o",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart ED-6)What is the lowest ICAO VFR level for a flight from TRA (N47o42 E008o26) to KPT (N47o45 E010o21) ensuring that you are at least at minimum grid area altitude with QNH 1013?",
    choices: {
      A: "FL 070",
      B: "FL 095",
      C: "FL 075",
      D: "FL 090",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "On a flight from (N47o10 E010o00) to (N49o10 E010o00) at a TAS of 140 kt with a 20 kt headwind component, how many nautical air miles do you fly?",
    choices: {
      A: "100",
      B: "120",
      C: "140",
      D: "70",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Given CAS/RAS of 130 kt, OAT 0oC at 10000 ft, trip distance of 240 NGM, track 275 (T) and W/V 030/30 kt. What is your true heading and time en-route?",
    choices: {
      A: "287o and 103 minutes",
      B: "287o and 95 minutes",
      C: "285o and 95 minutes",
      D: "285o and 88 minutes",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to CAP 697 figure 3.1)What is the fuel, time and distance to climb from an aerodrome at sea level up to FL100 where the outside air temperature is 0oC?",
    choices: {
      A: "13 USG, 24 min, 45 NM",
      B: "9 USG, 16 min, 28 NM",
      C: "9 USG, 14 min, 27 NM",
      D: "5 USG, 10 min, 16 NM",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Given: True course: 017o W/V: 340/30 TAS: 420 kts Find: 1. the wind correction angle (WCA) 2. the Groundspeed (G/S)",
    choices: {
      A: "(i) +2o (ii) 416 kts",
      B: "(i) +2o (ii) 396 kts",
      C: "(i) -2o (ii) 426 kts FLIGHT PLANNING FLIGHT PLANS FOR CROSS-CONTRY FLIGHTS - Navigation plan",
      D: "(i) -2o (ii) 396 kts",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to CAP 697 figure 3.3)A flight has to be made with a multi-engine piston aeroplane. For the fuel calculations take 5 US gallons for the taxi, and an additional 13 minutes at cruise condition to account for climb and descent. Calculated time overhead to overhead is 2h37min.Power setting is 65%, 2500 RPMCalculated reserve fuel is 30% of the trip fuelFL 120, Temperature 1oCFind the minimum block fuel: Answers",
    choices: {
      A: "91 US gallons",
      B: "86 US gallons",
      C: "76 US gallons",
      D: "118 US gallons",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 3-2)A flight is to be made in a multi-engine piston aeroplane (MEP1). The cruising level will be 11000 ft. The outside air temperature at FL is -15oC. The usable fuel is 123 US gallons. The power is set to economic cruise. Find the range in NM with 45 min reserve fuel at 45% power.",
    choices: {
      A: "752 NM",
      B: "852 NM",
      C: "610 NM",
      D: "602 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 3-3)A flight has to be made with a multi-engine piston aeroplane (MEP 1).For the fuel calculations take 5 US gallons for the taxi and the additional 13 minutes at cruise condition to account for climb and descent. Calculated time from overhead to overhead is 1h 47min.Power setting is 45%, 2600 RPMCalculated reserve fuel is 30% of the trip fuelFL 100, Temperature -5oCFind the minimum block fuel: Answers",
    choices: {
      A: "47 US gallons",
      B: "37 US gallons",
      C: "60 US gallons",
      D: "470 US gallons FLIGHT PLANNING FLIGHT PLANS FOR CROSS-CONTRY FLIGHTS - Navigation plan",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 2.2.3)Given lean mixture, 23.0 in. HG (or full throttle), at 2300 RPMAt FL 75 and OAT +10oCFind:TASFuel flow in gallons per hour",
    choices: {
      A: "(i) 160 kts (ii) 11.6 GPH",
      B: "(i) 143 kts (ii) 71.1 GPH",
      C: "(i) 160 kts (ii) 68.5 GPH",
      D: "(i) 143 kts (ii) 11.6 GPH",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 ' figure 2.5)For a flight departing from MSL at 3663 lbs, cruising at FL 80 at 2300 RPM, 20oC lean of peak EGT, in 40 kt headwind, calculate endurance",
    choices: {
      A: "4.75 hrs",
      B: "5.3 hrs",
      C: "6.1 hrs",
      D: "6.55 hrs",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Given: Dry operating mass (DOM) = 33510 kg Load = 7600 kg Final reserve fuel = 983 kg Alternate fuel = 1100 kg Contingency fuel = 102 kg The estimated landing mass at alternate should be",
    choices: {
      A: "42312 kg",
      B: "42093 kg",
      C: "42210 kg",
      D: "42195 kg",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "A multi-engine piston aeroplane is on an IFR flight. The fuel plan gives a trip fuel of 65 US gallons. The alternate fuel, final reserve included, is 17 US gallons. Contingency fuel is 5% of the trip fuel. The usable fuel at departure is 93 US gallons. At a certain moment the fuel consumed according to the fuel A multi-engine piston aeroplane is on an IFR flight. The fuel plan gives a trip fuel of 65 US gallons. The alternate fuel, final reserve included, is 17 US gallons. Contingency fuel is 5% of the trip fuel. The usable fuel at departure is 93 US gallons. At a certain moment the fuel consumed according to the fuel gauges is 40 US gallons and the distance flown is half of the total distance. Assume that fuel consumption does not change. Which statement is right?",
    choices: {
      A: "At the destination there will still be 30 US gallons in the tanks",
      B: "The remaining fuel is not sufficient to reach the destination with reserves intact",
      C: "At departure the reserve fuel was 28 US gallons",
      D: "At destination the required reserves remain intact",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Given: Dry operating mass (DOM) = 33000 kg Load = 8110 kg Final reserve fuel = 983 kg Alternate fuel = 1100 kg Contingency fuel = 102 kg The estimated landing mass at alternate should be",
    choices: {
      A: "42312 kg",
      B: "41110 kg",
      C: "42210 kg",
      D: "42195 kg",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to CAP 697 figure 2-5) Given:FL 75 Lean mixture Full throttle at 2300 RPM Take-off fuel = 444 lbs Take-off from MSL Find endurance in hours",
    choices: {
      A: "5 hrs 12 mins",
      B: "5 hrs 20 mins",
      C: "4 hrs 42 mins",
      D: "5 hrs 23 mins",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to CAP 697 figure 2-2-2)A flight has to be made with the SEP1. For the fuel calculation allow:10 lbs fuel for start up and taxi 3 mins and 1 gallon of additional fuel to allow for the climb 10 mins and no fuel correction for the descent Planned flight time (overhead to overhead) is 3 hrs 12 mins Reserve fuel 30% of the trip fuel Power setting is 25 HG (or full throttle) 2100 RPM, 20oC lean FL 70 and OAT is 11oC The minimum block fuel is",
    choices: {
      A: "283 lb",
      B: "268 lb",
      C: "215 kg",
      D: "252 kg",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "During an IFR flight in a Beech Bonanza the fuel indicators show that the remaining amount of fuel is 100 lbs after 38 minutes. The total amount of fuel at departure was 160 lbs. For the alternate fuel, 30 lbs is necessary. The planned fuel for taxi was 13 lbs. Final reserve fuel is estimated at 50 lbs. If the fuel flow remains the same, how many minutes can be flown to the destination with the remaining fuel? Answers",
    choices: {
      A: "12 minutes",
      B: "63 minutes",
      C: "44 minutes",
      D: "4 minutes",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "For a planned flight the calculated fuel is as follows: Flight time: 3h06min Taxi fuel: 8 kg Block fuel: 118 kg The reserve fuel, at any time, should not be less than 30% of the remaining trip fuel How much fuel should remain after 2 hours flight time?",
    choices: {
      A: "27 kg trip fuel and 12 kg reserve fuel",
      B: "39 kg trip fuel and 12 kg reserve fuel",
      C: "30 kg trip fuel and 9 kg reserve fuel",
      D: "39 kg trip fuel and no reserve fuel",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "(Refer to CAP 697 figure 2-4) Using the following information, calculate the range.Given:Aeroplane mass at start up: 3663 lbs Fuel load (density 6 lbs/gal): 74 gal Take off altitude: sea level Headwind: 40 kt Cruise altitude: 8000 ft Power setting: full throttle 2300 RPM 20oC lean of peak",
    choices: {
      A: "633 nm",
      B: "844 nm",
      C: "730 nm",
      D: "547.5 nm",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 3-5)Given the following data:FL 75 Lean mixture Economy power setting Find the Endurance with no reserve",
    choices: {
      A: "06:12",
      B: "05:01",
      C: "06:06",
      D: "05:11",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "(Refer to CAP 697 figure 2.2 table 2.2.2)A flight has to be made with the single engine sample aeroplane. For the fuel calculation allow:10 lbs fuel for start up and taxi 3 minutes and 1 gallon of additional fuel to allow for the climb 10 minutes and no fuel correction for the descent Planned flight time (overhead to overhead) is 03 hours and 12 minutes Reserve fuel 30% of the trip fuel Power setting is 25 in.HG (or full throttle), 2100 RPM, 20oC lean Flight level is 70 and the OAT 11oC The minimum block fuel is",
    choices: {
      A: "283 lbs",
      B: "268 lbs",
      C: "252 lbs",
      D: "215 lbs",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to CAP 697 figure 2.2 table 2.2.3)A flight has to be made with the single engine sample aeroplane. For the fuel calculation allow:10 lbs fuel for start up and taxi 3 minutes and 1 gallon of additional fuel to allow for the climb 10 minutes and no fuel correction for the descent Planned flight time (overhead to overhead) is 02 hours and 37 minutes Reserve fuel 30% of the trip fuel Power setting is 23 in.HG (or full throttle), 2300 RPM, 20oC lean Flight level is 50 and the OAT -5oC The minimum block fuel is",
    choices: {
      A: "250 lbs",
      B: "208 lbs",
      C: "270 lbs",
      D: "265 lbs",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "Using the following data, determine the maximum fuel load: DOM: 2800 kg Trip: 300 kg Payload: 400 kg MTOM: 4200 kg MLM: 3700 kg",
    choices: {
      A: "700 kg",
      B: "1000 kg",
      C: "800 kg",
      D: "500 kg",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Given: DOM: 33510 kg Traffic load: 7600 kg Trip fuel: 2040 kg Final reserve: 983 kg Alternate fuel: 1100 kg Contingency: 5% of trip fuel Which of the following is correct?",
    choices: {
      A: "landing mass at destination = 43,193 kg",
      B: "landing mass at destination = 43,295 kg",
      C: "take-off mass = 43,295 kg",
      D: "take-off mass = 45,233 kg",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Given: MTOM: 64400 kg MLM: 56200 kg MZFM: 53300 kg DOM: 35500 kg Traffic load: 14500 kg Trip fuel: 4900 kg Minimum takeoff fuel: 7400 kg What is the maximum allowable take off fuel?",
    choices: {
      A: "11400 kg",
      B: "14400 kg",
      C: "8600 kg",
      D: "11100 kg",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to CAP 697 figure 2.4)At 6000 ft what is the range of the aircraft at full throttle with 2500 rpm set?",
    choices: {
      A: "840 NAM",
      B: "872 NAM",
      C: "914 NAM",
      D: "756 NAM",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "A jet aircraft is due to fly to an isolated aerodrome. The aircraft fuel burn in the cruise is 7500 kg/hr and 5000 kg/hr in the hold. What is the absolute minimum additional fuel it should carry?",
    choices: {
      A: "15000 kg",
      B: "10000 kg",
      C: "3750 kg",
      D: "5625 kg",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "You are required to uplift 40 US gallons of AVGAS with Sp. Gravity of 0.72. How many litres and kilograms is this?",
    choices: {
      A: "109 litres, 151 kg",
      B: "182 litres, 131 kg FLIGHT PLANNING FLIGHT PLANS FOR CROSS-CONTRY FLIGHTS - Navigation plan",
      C: "182 litres, 289 kg",
      D: "151 litres, 109 kg",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to CAP 697 figure 2.2.3)On a standard day what is the TAS and fuel flow in USG at 10000 ft?",
    choices: {
      A: "157 kt, 11.0 GPH",
      B: "137 kt, 66.2 GPH",
      C: "157 kt, 20.7 GPH",
      D: "157 kt, 11.4 GPH",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "Given: Dry Operating Mass: 33000 kg Load: 8110 kg Final reserve fuel: 983 kg Alternate fuel: 1100 kg Contingency: 102 kg The estimated landing mass at the alternate aerodrome is",
    choices: {
      A: "42210 kg",
      B: "42312 kg",
      C: "42195 kg",
      D: "41110 kg",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Given: Maximum allowable take off mass: 64000 kg Maximum Landing Mass: 56200 kg Maximum Zero Fuel Mass: 53000 kg Dry Operating Mass: 35500 kg Traffic Load: 14500 kg Trip fuel: 4900 kg Take off fuel: 7400 kg Find the maximum additional load",
    choices: {
      A: "3000 kg",
      B: "4000 kg",
      C: "7000 kg",
      D: "5600 kg",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to CAP 697 figure 2-4) Given:Aeroplane mass at start-up: 3663 lbs Fuel load (density 6 lbs/gal): 74 gals Take off altitude: sea level Headwind: 40 kts Cruise altitude: 8000 ft Power setting: Full throttle/2300 rpm 20oC lean of peak EGT Calculate the range",
    choices: {
      A: "844 nm",
      B: "633 nm",
      C: "730 nm",
      D: "547 nm",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "For a planned flight the calculated fuel is as follows: Flight time 2 hr 42 min Block fuel 136 kg Taxi fuel 9 kg The reserve fuel, at any time, should be not less than 30% of trip fuel remaining How many kg of fuel should remain after 2 hours of flight?",
    choices: {
      A: "33 kg trip and 10 kg reserve",
      B: "25 kg trip and 8 kg reserve",
      C: "23 kg trip and 10 kg reserve FLIGHT PLANNING FLIGHT PLANS FOR CROSS-CONTRY FLIGHTS - Navigation plan",
      D: "33 kg trip and no reserve",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "After flying for 16 min at 100 kt TAS with a 20 kt tail wind component, you have to return to the airfield of departure. You will arrive after",
    choices: {
      A: "20 min",
      B: "24 min",
      C: "10 min 40 sec",
      D: "16 min",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "ATC require a descent from FL270 to FL160 to be level 6 NM before a VOR. If rate of descent is 800 feet per minute, mean groundspeed is 256 kts, how far out from the VOR must descent be started?",
    choices: {
      A: "59 nm",
      B: "65 nm",
      C: "144 nm",
      D: "150 nm",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "In the cruise at FL155 at 260 kt TAS, the pilot plans for a 500 feet/min descent in order to fly overhead MAN VOR at 2000 feet (QNH 1030). TAS will remain constant during descent, wind is negligible, temperature is standard. The pilot must start the descent at a distance from MAN of",
    choices: {
      A: "140 NM",
      B: "120 NM",
      C: "110 NM",
      D: "130 NM",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "At a fuel check you have 60 US gallons (USG) of useable fuel remaining. Alternate fuel required is 12 USG. The flight time remaining is 1 hour 35 mins. What is the highest consumption rate acceptable?",
    choices: {
      A: "33.0 USG/Hr",
      B: "37.9 USG/Hr",
      C: "30.3 USG/Hr",
      D: "21.3 USG/Hr",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "An aircraft flying at 7500 ft is cleared to descend to be level at 1000 ft, 6 NM before reaching a beacon. If ground speed is 156 kt and Rate of Descent is 800 fpm, how many miles before the beacon should descent begin?",
    choices: {
      A: "15.0",
      B: "30.2",
      C: "27.1",
      D: "11.1",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "A descent is planned from 7500 ft MSL so as to arrive at 1000 ft MSL 6 NM from a VORTAC. With a GS of 156 kts and a rate of descent of 800 ft/min. The distance from the VORTAC when descent is started is",
    choices: {
      A: "15.0 NM",
      B: "27.1 NM",
      C: "11.7 NM",
      D: "30.2 NM",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Minimum planned take-off fuel is 160 kg (30% total reserve fuel is included). Assume the groundspeed on this trip is constant. When the aeroplane has done half the distance the remaining fuel is 70 kg. Is diversion to a nearby alternate necessary?",
    choices: {
      A: "Diversion to a nearby alternate is not necessary, because it is allowed to calculate withoutreserve fuel",
      B: "Diversion to a nearby alternate is not necessary, because the reserve fuel has not been usedcompletely",
      C: "Diversion to a nearby alternate is necessary, because the remaining fuel is not sufficient",
      D: "Diversion to a nearby alternate is necessary, unless the captain decides to continue on his ownresponsibility",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "An aircraft is in cruising flight at FL095, IAS 155 kt. The pilot intends to descend at 500 ft/min to arrive overhead the MAN VOR at 2000 ft (QNH 1030 hPa). The TAS remains constant in the descent, wind is negligible, temperature standard. At which distance from MAN should the pilot commence the descent?",
    choices: {
      A: "42 nm",
      B: "40 nm",
      C: "45 nm",
      D: "48 nm",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The still air distance in the climb is 189 NAM and time 30 minutes. What ground distance would be covered in a 30 kt headwind?",
    choices: {
      A: "193 nm",
      B: "203 nm",
      C: "188 nm",
      D: "174 nm",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "An aircraft climbs from an airfield, elevation 1500 ft, QNH 1023 mb, to FL75. What height does the aircraft have to climb? Assume 1mb = 30 ft",
    choices: {
      A: "6600 ft",
      B: "7800 ft",
      C: "6300 ft",
      D: "6000 ft",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "An aircraft is flying at an indicated pressure altitude of 5000 ft where the OAT is -10oC. What is the aircraft's true altitude?",
    choices: {
      A: "4750 ft",
      B: "5260 ft",
      C: "5120 ft",
      D: "4600 ft",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "A mountain 6011 ft AMSL lies along an aircraft's track of 356o(T), variation 10oW, HDG 355o(M). What is the lowest VFR ICAO level the aircraft may fly to miss the mountain by at least 2000 ft, QNH 990 hPa (assume 1 hPa = 30 ft)?",
    choices: {
      A: "FL075",
      B: "FL090",
      C: "FL095",
      D: "FL085",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "An aircraft takes 14 minutes to climb to FL290 covering 71 NAM, what is the ground distance covered in a 30 kt headwind?",
    choices: {
      A: "71 NGM",
      B: "57 NGM",
      C: "78 NGM",
      D: "64 NGM",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "Given variation 15E, deviation 6W and heading 080(T) an aircraft's compass and magnetic headings are respectively",
    choices: {
      A: "071, 065",
      B: "065, 071",
      C: "086, 095",
      D: "095, 086",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "Given variation 12W, deviation 3E and heading 180 (T) an aircraft's compass and magnetic headings are respectively",
    choices: {
      A: "168, 171",
      B: "168, 165",
      C: "192, 189",
      D: "189, 192",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to Jeppesen Manual ED-6 or figure ED6-02). Give the frequency of ZURICH Volmet.",
    choices: {
      A: "127.2 MHz FLIGHT PLANNING FLIGHT PLANS FOR CROSS-CONTRY FLIGHTS - Radio communication and navigation aids",
      B: "127.2 KHz",
      C: "128.525 MHz",
      D: "118.1 MHz",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual ED-6 or figures ED6-04 & ED6-06)Give the frequency of the GRENCHEN VOR at N4711 E00725.",
    choices: {
      A: "108.65 MHz",
      B: "326 KHz",
      C: "channel 23",
      D: "120.1 MHz",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E (HI)4 CAA-Edition or figure HI-26)The radio navigation aid serving STRASBOURG (48o30N 007o34E) is a",
    choices: {
      A: "VOR only, frequency 115.6 MHz",
      B: "DME only, channel 115.6",
      C: "TACAN only, frequency 115.6 MHz",
      D: "VOR/TACAN, frequency 115.6 MHz",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 CAA-Edition or figure HI-27)The radio navigation aid at ST DIZIER (48o38N 004o53E) is a",
    choices: {
      A: "VOR frequency 114.0 MHz, and TACAN channel 87",
      B: "TACAN, channel 114.0",
      C: "TACAN, channel 87, and NDB frequency 114.0 KHz",
      D: "TACAN, channel 87, frequency 114.0 MHz",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E (HI)4 CAA-Edition or figure HI-28)The radio navigation aid on airway UG4 at LUXEUIL (47o41N 006o18E) is a",
    choices: {
      A: "VOR/DME and NDB, identifier LXI",
      B: "VOR/DME only, identifier LUL",
      C: "VOR only, identifier LUL FLIGHT PLANNING ICAO ATC FLIGHT PLAN - Types of flight plan",
      D: "VOR, identifier LUL, frequency paired with TACAN identifier LXI",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E (LO) 1 or figure LO-12)The radio navigation aid at BELFAST CITY (54o37N 005o53W) is",
    choices: {
      A: "an NDB, frequency 420 KHz, continuous operation",
      B: "an NDB, frequency 420 KHz, NOT continuous operation",
      C: "a TACAN, channel 420",
      D: "a fan marker, frequency 420 KHz",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual ED-6 or figure ED6-01)What navigation or communications facilities are at 48o55N 009o20E?",
    choices: {
      A: "NDB",
      B: "TACAN",
      C: "VOR/DME",
      D: "VOR",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "During a flight at night a position has to be reported to ATC. The aeroplane is at a distance of 750 NM from the groundstation and at flight level 350. The frequency to be used is",
    choices: {
      A: "17286 KHz",
      B: "123.9 MHz",
      C: "5649 KHz",
      D: "1136 KHz",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "From the options given below select those flights which require flight plan notification: 1. - Any Public Transport flight 2. - Any IFR flight 3. - Any flight which is to be carried out in regions which are designated to ease the provision of the Alerting Service or the operations of Search and Rescue 4. - Any cross-border flights 5. - Any flight which involves over-flying water",
    choices: {
      A: "1 + 5",
      B: "2 + 4",
      C: "1 + 2 + 3",
      D: "3 + 4 + 5",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "A CURRENT flight plan is a",
    choices: {
      A: "flight plan in the course of which radio communication should be practised between aeroplane andATC",
      B: "filed flight plan",
      C: "flight plan with the correct time of departure",
      D: "filed flight plan with amendments and clearance included",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "Repetitive flight plans may be used for flights with a high degree of stability over the same days of consecutive weeks on at least occasions.",
    choices: {
      A: "IFR, 7",
      B: "VFR, 10",
      C: "IFR, 10",
      D: "VFR, 7",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "When completing an ATS flight plan for an European destination, clock times are to be expressed in",
    choices: {
      A: "Central European Time",
      B: "Local mean time",
      C: "Local standard time FLIGHT PLANNING ICAO ATC FLIGHT PLAN - Types of flight plan",
      D: "UTC",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In an ATS flight plan an aircraft will be classified as (L) if its MTOM is",
    choices: {
      A: "27000 kg",
      B: "10000 kg",
      C: "57000 kg",
      D: "7000 kg",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 10-26)In the ATS flight plan item 15, a cruising speed of 470 knots will be entered as",
    choices: {
      A: "N470",
      B: "KN470",
      C: "0470K",
      D: "N0470",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In the ATS flight plan item 15, when entering a route for which standard departure (SID) and standard arrival (STAR) procedures exist",
    choices: {
      A: "both should be entered in the ATS plan where appropriate",
      B: "SIDs should be entered but not STARs",
      C: "STARS should be entered but not SIDs",
      D: "neither SID nor STAR should be entered",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "When submitting a flight plan before flight, departure time is?",
    choices: {
      A: "Overhead the first reporting point",
      B: "At which the aircraft leaves the parking area",
      C: "Of take-off",
      D: "At which flight plan is filed",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An aircraft has a maximum certificated take-off mass of 137000 kg but is operating at take off mass 135000 kg. In item 9 of the ATS flight plan its wake turbulence category is",
    choices: {
      A: "medium plus (M+)",
      B: "heavy/medium (H?M)",
      C: "medium (M)",
      D: "heavy (H)",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The navigation plan reads: Trip fuel: 136 kg Flight time: 2h45min Calculated reserve fuel: 30% of trip fuel Fuel in tank is minimum (no extra fuel on board) Taxi fuel: 3 kg The endurance on the ICAO flight plan should read",
    choices: {
      A: "2h49min",
      B: "2h45min",
      C: "3h34min",
      D: "3h38min",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "In the appropriate box of a flight plan form, corresponding to the estimated time of departure, the time indicated is that at which the aircraft intends to",
    choices: {
      A: "start-up",
      B: "take-off",
      C: "go off blocks",
      D: "pass the departure beacon",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 10-26)In an ATS flight plan, item 15 (route), a cruising pressure altitude of 32000 feet would be entered as",
    choices: {
      A: "FL320",
      B: "F320",
      C: "S3200 FLIGHT PLANNING ICAO ATC FLIGHT PLAN - Types of flight plan",
      D: "32000",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An aeroplane is flying from an airport to another. In cruise, the calibrated airspeed is 150 kt, true airspeed 180 kt, average groundspeed 210 kt, the speed box on the filed flight plan shall be filled as follows",
    choices: {
      A: "K0150",
      B: "K0210",
      C: "K0180",
      D: "N0180",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "When completing an ATS flight plan, an elapsed time (item 16) of 1 hour 55 minutes should be entered as",
    choices: {
      A: "0115",
      B: "0155",
      C: "115M",
      D: "1H55",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "In the ATS flight plan item 13, in a flight plan submitted before departure, the departure time entered is the",
    choices: {
      A: "estimated off-block time",
      B: "estimated time over the first point en route",
      C: "estimated take-off time",
      D: "allocated slot time",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "For the purposes of item 9 (Wake turbulence category) of the ATS flight plan, an aircraft with a maximum certificated take-off mass of 62000 kg is",
    choices: {
      A: "light (L)",
      B: "medium (M)",
      C: "heavy (H)",
      D: "unclassified (U) FLIGHT PLANNING ICAO ATC FLIGHT PLAN - Types of flight plan",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An aircraft plans to depart London at 1000 UTC and arrive at Munich (EDDM) at 1215 UTC. In the ATS flight plan item 16 (destination/EET) should be entered with",
    choices: {
      A: "EDDM 1215",
      B: "EDDM 1415",
      C: "EDDM 0215",
      D: "EDDM 2H15",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "In the ATS flight plan item 19, if the number of passengers to be carried is not known when the plan is ready for filing",
    choices: {
      A: "the plan should be filed with the relevant box blank",
      B: "TBN (to be notified) may be entered in the relevant box",
      C: "an estimate may be entered but that number may not subsequently be exceeded",
      D: "the plan may not be filed until the information is available",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "In the ATS flight plan, for a non-scheduled flight which of the following letters should be entered in item 8 (Type of Flight)",
    choices: {
      A: "N",
      B: "N/S",
      C: "G",
      D: "X",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In the appropriate box of a flight plan, for endurance, one must indicate the time corresponding to",
    choices: {
      A: "the total usable fuel on board",
      B: "the required fuel for the flight",
      C: "the required fuel for the flight plus the alternate and 45 minutes",
      D: "the total usable fuel on board minus reserve fuel",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "When completing an ATS flight plan for a flight commencing under IFR but possibly changing to VFR, the letters entered in item 8 (FLIGHT RULES) would be",
    choices: {
      A: "X",
      B: "N/S",
      C: "G",
      D: "Y",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The cruising speed to write in the appropriate box of a flight plan is",
    choices: {
      A: "ground speed",
      B: "indicated air speed",
      C: "true air speed",
      D: "calibrated air speed",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "On a flight plan you are required to indicate in the box marked SPEED the planned speed for the first part of the cruise or for the entire cruise. This speed is",
    choices: {
      A: "The estimated ground speed",
      B: "The equivalent airspeed",
      C: "The indicated airspeed",
      D: "The true airspeed",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In the ATS flight plan item 15 (Cruising speed), when not expressed as a Mach number, cruising speed is expressed as",
    choices: {
      A: "IAS",
      B: "TAS",
      C: "CAS",
      D: "Groundspeed",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The navigation plan reads: Trip fuel: 100 kg Flight time: 1h35min The navigation plan reads: Trip fuel: 100 kg Flight time: 1h35min Taxi fuel: 3 kg Block fuel: 181 kg The endurance on the ICAO flight plan should read",
    choices: {
      A: "1h 35min",
      B: "2h 49min",
      C: "2h 04min",
      D: "2h 52min",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The maximum permissible take-off mass of an aircraft for the L wake turbulence category on a flight plan is",
    choices: {
      A: "7000 kg",
      B: "2700 kg",
      C: "5700 kg",
      D: "10000 kg",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In the ATS flight plan item 10 (equipment), the letter to indicate the carriage of a serviceable transponder mode A (4 digits 4096 codes) and mode C, is",
    choices: {
      A: "B",
      B: "C",
      C: "A",
      D: "P",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "In an ATS flight plan item 15, in order to define a position as a bearing and distance from a VOR, the group of figures should consist of",
    choices: {
      A: "VOR ident, magnetic bearing and distance in kilometres",
      B: "VOR ident, true bearing and distance in kilometres",
      C: "VOR ident, magnetic bearing and distance in nautical miles",
      D: "full name of VOR, true bearing and distance in kilometres FLIGHT PLANNING ICAO ATC FLIGHT PLAN - Types of flight plan",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "When filling in a flight plan, wake turbulence category is a function of?",
    choices: {
      A: "Maximum certified landing mass",
      B: "Maximum certified take-off mass",
      C: "Estimated landing mass",
      D: "Estimated take-off mass",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "When at ATS flight plan is submitted for a flight outside designated ATS routes, points included in item 15 (route) should not normally be at intervals of more than",
    choices: {
      A: "20 minutes flying time or 150 km",
      B: "30 minutes flying time or 370 km",
      C: "15 minutes flying time or 100 km",
      D: "1 hour flying time or 500 km",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "When a pilot fills in a flight plan, he must indicate the wake turbulence category. This category is a function of which mass?",
    choices: {
      A: "actual take-off mass",
      B: "estimated take-off mass",
      C: "maximum certified landing mass",
      D: "maximum certified take-off mass",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In the appropriate box of a flight plan form, concerning equipment, the letter to be used to indicate that the aircraft is equipped with a mode A 4096 codes transponder with altitude reporting capability is",
    choices: {
      A: "S",
      B: "P",
      C: "C",
      D: "A",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 10-26)In an ATS flight plan item 15 (route), in terms of latitude and longitude, a significant point at 41o35N 4o15E should be entered as",
    choices: {
      A: "N04134E0415",
      B: "41o35¿N 04o15¿E",
      C: "4135N00415E",
      D: "N4135 E00415",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "An aircraft in the cruise has a calibrated airspeed of 150 kt, a true airspeed of 1180 kt and an average ground speed of 210 kt.The speed box of the flight plan must be filled as follows",
    choices: {
      A: "K0210",
      B: "N0150",
      C: "N0180",
      D: "K0180",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "On an ATC flight plan, an aircraft indicated as H for HEAVY",
    choices: {
      A: "is of the highest wake turbulence category",
      B: "has a certified landing mass greater than or equal to 136000 kg",
      C: "has a certified take-off mass greater than or equal to 140000 kg",
      D: "requires a runway length of at least 2000m at maximum certified take-off mass",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "On a VFR flight plan, the total estimated time is",
    choices: {
      A: "the estimated time from take-off to overhead the destination airport",
      B: "the estimated time from take-off to overhead the destination airport, plus 15 minutes",
      C: "the estimated time from take-off to landing at the alternate airport",
      D: "the estimated time from engine start to landing at the destination airport",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "TOTAL ELAPSED TIME for an IFR flight, when filling in the ICAO flight plan at box 16, is the time elapsed from",
    choices: {
      A: "take-off until landing FLIGHT PLANNING ICAO ATC FLIGHT PLAN - Types of flight plan",
      B: "take-off until reaching the IAF (Initial Approach Fix) of the destination aerodrome",
      C: "taxi-out prior to take-off until taxiing after landing",
      D: "taxiing until the IAF (Initial Approach Fix) of the destination aerodrome",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Given the following flight plan information: Trip fuel: 136 kg Flight time: 2.75 hrs Reserve fuel: 30% of trip Fuel in tanks: minimum Taxi fuel: 3 kg State how ENDURANCE should be completed on the ICAO flight plan",
    choices: {
      A: "0338",
      B: "0334",
      C: "0245",
      D: "0240",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The navigation plan reads: Trip fuel: 100 kg Flight time: 1 hr 35 min Taxi fuel: 3 kg Block fuel: 181 kg How should ENDURANCE be shown on the flight plan?",
    choices: {
      A: "0204",
      B: "0240",
      C: "0249",
      D: "0252",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "On an ATC flight plan, the letter Y is used to indicate that the flight is carried out under the following flight rules",
    choices: {
      A: "IFR followed by VFR FLIGHT PLANNING ICAO ATC FLIGHT PLAN - Types of flight plan",
      B: "VFR followed by IFR",
      C: "IFR",
      D: "VFR",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "On an ATC flight plan, to indicate that you will over-fly the way point ROMEO at 120 kt at flight level 085, you will write",
    choices: {
      A: "ROMEO/K0120 FL085",
      B: "ROMEO/N0120 F085",
      C: "ROMEO/FL085 N0120",
      D: "ROMEO/F085 N0120",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "Reference item 19 of the ICAO flight plan, endurance is?",
    choices: {
      A: "maximum flight time plus 45 minutes holding fuel",
      B: "maximum flight time plus 30 minutes holding fuel",
      C: "fuel endurance of the aircraft",
      D: "total usable fuel required for the flight",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "In the event that SELCAL is prescribed by an appropriate authority, in which section of the ATS flight plan will the SELCAL code be entered?",
    choices: {
      A: "Equipment",
      B: "Route",
      C: "Aircraft identification",
      D: "Other information",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "For a radio equipped aircraft, the identifier in the ATS flight plan item 7 must always",
    choices: {
      A: "be the RTF call sign to be used",
      B: "include the aircraft registration",
      C: "include the operating agency designator FLIGHT PLANNING ICAO ATC FLIGHT PLAN - Types of flight plan",
      D: "include an indication of the aircraft type",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "You have a mode A transponder (4 digits, 4096 codes) and mode C. Item 10 of the flight plan should show",
    choices: {
      A: "C",
      B: "A",
      C: "P",
      D: "S",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "Prior to an IFR flight, when filling in the ICAO flight plan, the time information which should be entered in box 16 (total elapsed time) is the time elapsed from",
    choices: {
      A: "take off until reaching the IAF (initial approach fix) of the destination aerodrome",
      B: "taxi out prior to take-off until the IAF",
      C: "take-off until landing",
      D: "taxi-out prior to take-off until completion off taxiing after landing",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "On an ATC flight plan, to indicate you will over-fly the way point TANGO at 350 kts at flight level 280, you write",
    choices: {
      A: "TANGO/K0350 FL280",
      B: "TANGO/N0350 F280",
      C: "TANGO/FL280 N0350",
      D: "TANGO/KT350 F280",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "If the destination airport has no ICAO indicator, in box 16 of your ATS flight plan, you write",
    choices: {
      A: "////",
      B: "AAAA",
      C: "XXXX",
      D: "ZZZZ",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to sample ICAO flight plan form)Item 7 of the flight plan in accordance with PANS-RAC (DOC 4444) should always include, for an aircraft equipped with a radio",
    choices: {
      A: "Aircraft initialisation",
      B: "Aircraft type",
      C: "Aircraft call sign",
      D: "Aircraft operator",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Reference the ICAO flight plan, in item 15 (speed) this speed refers to",
    choices: {
      A: "indicated airspeed",
      B: "equivalent airspeed",
      C: "initial cruising true airspeed",
      D: "calculated groundspeed",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 10-26)When filling in item 9 of the flight plan and there is no aircraft designator listed, what should the entry be?",
    choices: {
      A: "none",
      B: "ZZZZ followed by an entry at item 18",
      C: "XXXX followed by an entry at item 18",
      D: "a descriptive abbreviation of the aircraft type",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 10-26)Prior to an IFR flight, when filling in the ICAO flight plan, the time information which should be entered in box 13 (TIME) is",
    choices: {
      A: "the time of flight plan filing",
      B: "estimated off-block time",
      C: "planned take-off time",
      D: "planned engine start time",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 10-26)In the ATS flight plan item 10 (standard equipment) is considered to be",
    choices: {
      A: "VHF RTF, ADF, VOR and ILS FLIGHT PLANNING ICAO ATC FLIGHT PLAN - Types of flight plan",
      B: "VHF RTF, ADF, VOR and transponder",
      C: "VHF RTF, VOR, ILS and transponder",
      D: "VHF RTF, radio altimeter, ILS and transponder",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 10-26)In the ATS flight plan item 15, for a flight along a designated route, where the departure aerodrome is not on or connected, to that route",
    choices: {
      A: "the letters DCT should be entered, followed by the point of joining the ATS route",
      B: "it is necessary only to give the first reporting point on that route",
      C: "the words AS CLEARED should be entered",
      D: "it is not necessary to indicate the point of joining that route as it will be obvious to the ATSunit",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 10-26)In the ATS flight plan item 19, emergency and survival equipment carried on the flight should be indicated by",
    choices: {
      A: "placing a tick in the relevant box",
      B: "listing the items carried on the REMARKS line",
      C: "crossing out the box relevant to any equipment not carried",
      D: "circling the relevant box",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 10-26)Item 9 of the ATS flight plan includes NUMBER AND TYPE OF AIRCRAFT. In this case, the NUMBER means",
    choices: {
      A: "the ICAO type designator number as set out in ICAO Doc 8643",
      B: "the number of aircraft flying in a group",
      C: "the registration number of the aircraft",
      D: "the number of aircraft which will separately be using a repetitive flight plan (RPL)",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An aircraft has: Maximum Certificated Take-off Mass: 137000 kg Actual Take-off Mass: 135000 kg Which wake turbulence category should be entered in item 9?",
    choices: {
      A: "Heavy (H)",
      B: "Medium (M)",
      C: "Medium/Heavy (M/H)",
      D: "Heavy/Medium (H/M)",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "For a flight plan filed before the flight, the indicated time of departure is",
    choices: {
      A: "the estimated off-block time",
      B: "the time at which the flight plan is filed",
      C: "the time of take-off",
      D: "the time overhead the first reporting point after take off",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "What is the maximum estimated elapsed time or distance between points on track mentioned in item 15 of the flight plan, for flights outside designated ATS routes?",
    choices: {
      A: "30 min / 200 nm",
      B: "60 min / 370 nm",
      C: "90 min / 370 km",
      D: "120 min / 370 nm",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      'Given: Trip fuel: 100 kg Planned flight time: 1 hr 30mins Taxi fuel: 3 kg Block fuel: 181 kg How should "endurance" be shown on the flight plan?',
    choices: {
      A: "0204 FLIGHT PLANNING ICAO ATC FLIGHT PLAN - Types of flight plan",
      B: "0240",
      C: "0249",
      D: "0252",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Your aircraft has a maximum certified take-off mass of 140000 kg. Today your calculated take-off mass is 130000 kg. What letter should appear in the Wake Turbulence Category on the flight plan form?",
    choices: {
      A: "Leave blank",
      B: "L",
      C: "H",
      D: "M",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Your initial cruising speed and level are 300 kt and flight level 250 at position STP on airway B3 you plan to climb to flight level 330 and increase speed to 350 kt. How should this change be shown in box 15 on the flight plan form?",
    choices: {
      A: "N0300 F250 from STP N0350 F330 B3",
      B: "STP/N0350F2330 B3",
      C: "STP/N0330F350 B3",
      D: "STP/N0350F330",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The cruising speed in item 15 of an ATS flight plan is",
    choices: {
      A: "Indicated Air Speed",
      B: "True Air Speed",
      C: "Ground Speed",
      D: "Calibrated Air Speed",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "It is possible, in flight, to: 1 - file an IFR flight plan 2 - modify an active IFR or VFR flight plan 3 - cancel an active VFR flight plan 4 - close an active VFR flight plan Which of the following combinations contains all of the correct statements?",
    choices: {
      A: "1 - 2 - 4",
      B: "1 - 2 - 3",
      C: "1 - 2 - 3 - 4",
      D: "2 - 3 - 4",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Which of the following statements regarding filing a flight plan is correct?",
    choices: {
      A: "A flying college can file repetitive flight plan for VFR flights",
      B: "Any flight plan should be filed at least 10 minutes before departure",
      C: "A flight plan should be filed when a national FIR boundary will be crossed",
      D: "In case of ATFM (Air Traffic Flow Management) the flight plan should be filed at least threehours in advance of the EQBT",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "How many hours in advance of departure time should a flight plan be filed in the case of flights into areas subject to air traffic flow management (ATFM)?",
    choices: {
      A: "1:00 hour",
      B: "3:00 hours",
      C: "0.30 hours",
      D: "0:10 hours",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The planned departure time from the parking area is 1815 UTC. The estimated take off time is 1825 UTC. The IFR flight plan must be filed with ATC at the latest at",
    choices: {
      A: "1755 UTC",
      B: "1725 UTC",
      C: "1745 UTC FLIGHT PLANNING ICAO ATC FLIGHT PLAN - Types of flight plan",
      D: "1715 UTC",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "A repetitive flight plan (RPL) is filed for a scheduled flight: Paris-Orly to Angouleme, Paris-Orly as alternate. Following heavy snow falls, Angouleme airport will be closed at the expected time of arrival. The airline decides before departure to plan a re-routing of that flight to Limoges.",
    choices: {
      A: "The pilot-in-command must advise ATC of his intention to divert to Limoges at least 15 minutesbefore the planned time of arrival",
      B: "The airline's Operations Department has to transmit a change in the RPL at the ATC office, atleast half an hour before the planned time of departure",
      C: "It is not possible to plan another destination and the fight has to be simply cancelled that day(scheduled flight and not chartered)",
      D: "The RPM must be cancelled for that day and a specific flight plan has to be filed",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "You have filed a flight plan for an uncontrolled flight and suffer a delay prior to departure. After how long a delay must you restate your OBT?",
    choices: {
      A: "30 mins",
      B: "40 mins",
      C: "60 mins",
      D: "90 mins",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "An aircraft has a flight time of 2 hrs 30 mins, a contingency fuel of 30% is carried. What is the total endurance?",
    choices: {
      A: "1 hr 55 mins",
      B: "3 hrs 15 mins",
      C: "3 hrs",
      D: "2 hrs 30 mins",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "For an intercontinental flight routed via the North Atlantic system, how long before start up is requested should your flight plan have been filed?",
    choices: {
      A: "30 mins",
      B: "6 hrs FLIGHT PLANNING ICAO ATC FLIGHT PLAN - Types of flight plan",
      C: "60 mins",
      D: "3 hrs",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "You make a diversion from the route given in the flight plan and land at an uncontrolled airfield. Within what time after landing should you inform ATC?",
    choices: {
      A: "10 mins",
      B: "20 mins",
      C: "30 mins",
      D: "45 mins",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "If a pilot lands at an aerodrome other than the destination aerodrome specified in the flight plan, he must ensure that the ATS unit at the destination aerodrome is informed within a certain number of minutes of his planned ETA at destination. This number of minutes is",
    choices: {
      A: "10",
      B: "30",
      C: "15",
      D: "45",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An aeroplane is on an IFR flight. The flight is to be changed from IFR to VFR. Is it possible?",
    choices: {
      A: "Yes, the pilot in command must inform ATC using the phrase cancelling my IFR flight",
      B: "No, you have to remain IFR in accordance to the filed flight plan",
      C: "No, only ATC can order you to do this",
      D: "Yes, but only with permission from ATC",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "During an IFR flight TAS and time appear to deviate from the data in the flight plan. The minimum deviations, that should be reported to ATC in order to conform to PANS-RAC, are",
    choices: {
      A: "TAS 5 kt and time 5 minutes",
      B: "TAS 3% and time 3 minutes",
      C: "TAS 5% and time 3 minutes FLIGHT PLANNING ICAO ATC FLIGHT PLAN - Types of flight plan",
      D: "TAS 10 kt and time 2 minutes",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "When at ATS flight plan has been submitted for a controlled flight, the flight plan should be amended or cancelled in the event of the off-block time being delayed by",
    choices: {
      A: "90 minutes or more",
      B: "45 minutes or more",
      C: "60 minutes or more",
      D: "30 minutes or more",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "If a pilot lands at an aerodrome other than the destination aerodrome specified in the ICAO flight plan, he must ensure that the ATS unit at the destination is informed within a specified time of her planned ETA at destination. The time is",
    choices: {
      A: "45 mins",
      B: "30 mins",
      C: "15 mins",
      D: "10 mins",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "In the ATS flight plan item 15, it is necessary to enter any point at which a change of cruising speed takes place. For this purpose a CHANGE OF SPEED is defined as",
    choices: {
      A: "20 km per hour or 0.1 Mach or more",
      B: "10% TAS or 0.05 Mach or more",
      C: "5% TAS or 0.01 Mach or more",
      D: "20 knots or 0.05 Mach or more",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "You have filed a flight plan for an uncontrolled flight and suffer a delay prior to departure.After how long a delay must you restate your OBT?",
    choices: {
      A: "30 mins",
      B: "40 mins",
      C: "60 mins",
      D: "90 mins FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Chart preparation",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "In flight, it is possible to: 1. File an IFR flight plan 2. Modify an active flight plan 3. Cancel a VFR flight plan 4. Close a VFR flight plan",
    choices: {
      A: "i, iii",
      B: "i, ii, iii, iv",
      C: "ii, iii, iv",
      D: "i, iv",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "You have a flight plan IFR from Amsterdam to London. In the flight plan it is noted that you will deviate from the ATS route passing the FIR boundary Amsterdam/London. The airway clearance reads: Cleared to London via flight planned route. Which of the following statements is correct?",
    choices: {
      A: "The route according to the flight plan is accepted",
      B: "The filed deviation is not accepted",
      C: "You will get a separate clearance for the deviation",
      D: "It is not allowed to file such a flight plan",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "If your speed, in flight, changes from that given in the flight plan, you should notify ATC for changes of more than",
    choices: {
      A: "5% TAS / ETA 5 mins",
      B: "3% TAS / ETA 3 mins",
      C: "5% TAS / ETA 3 mins",
      D: "3% TAS / ETA 5 mins",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "(Refer to Jeppesen Manual ED-6 or figure ED6-03)Flying VFR from VILLINGEN (48o03.5N, 008o27.0E) to FREUDENSTADT (48o28.0N, 008o24.0E), determine the distance",
    choices: {
      A: "54 nm",
      B: "29 km FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Chart preparation",
      C: "24 nm",
      D: "33 nm",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual ED-6 or figure ED6-04)The GRENCHEN LSZG aerodrome (N4711 E00725) has a tower frequency of 120.10 MHz. The (V) after the frequency indicates",
    choices: {
      A: "Available on request",
      B: "Only to be used during daylight",
      C: "Available for VFR flight only",
      D: "VDF available",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual ED-6 or figure ED6-05)What navigation or communication facilities are at N 48o23 E 008o39?",
    choices: {
      A: "NDB",
      B: "VOR",
      C: "VOR/DME",
      D: "VORTAC",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual ED-6 or figure ED6-07)An aeroplane is flying VFR and approaching position TANGO (N4837 E00916) at FL55 and on a magnetic track of 090. The distance from TANGO is 20 nm. The navigation aid and frequency at TANGO is",
    choices: {
      A: "VORTAC 112.50 KHz",
      B: "DME 112.50 MHz",
      C: "VOR 112.50 with no DME",
      D: "VORTAC 112.50 MHz",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual ED-6 or figure ED 6-08)Flying VFR from PEITING (47 48N 010 55.5E) to IMMENSTADT (47 33.5N 010 13.0E) determine the magnetic course.",
    choices: {
      A: "077",
      B: "243",
      C: "257 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Chart preparation",
      D: "063",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual ED-6 or figure ED6-09)Flying from position ERBACH (N 48o21 E009o55) to POLTRINGEN airport (N48o33 E008o57). Find the magnetic course and distance.",
    choices: {
      A: "108o / 60 NM",
      B: "252o / 41 NM",
      C: "287o / 41 NM",
      D: "287o / 60 NM",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual ED-6 or figure ED6-10)Flying from position SIGMARINGEN (N48o05 E009o13) to BIBERACH airport (N48o07 E009o46). Find the magnetic course and distance.",
    choices: {
      A: "093o / 41 NM",
      B: "086o / 22 NM",
      C: "267o / 22 NM",
      D: "086o / 32 NM",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual ED-6 or figure ED6-03)Flying VFR from VILLINGEN (48o03.5N, 008o27.0E) to FREUDENSTADT (48o28.0N, 008o24.0E), determine the magnetic course",
    choices: {
      A: "176o",
      B: "004o",
      C: "185o",
      D: "356o",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual VFR+GPS chart ED-6 or figure ED6-03)Flying VFR from VILLINGEN (48o03.5N 008o27.0E) to FREUDENSTADT (48o28.0N 008o24.0E). Determine the minimum altitude within a corridor 5 NM left and 5 NM right of the course-line in order to stay 1000 ft clear of obstacles.",
    choices: {
      A: "4200 ft",
      B: "1500 ft",
      C: "3900 ft",
      D: "2900 ft FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Chart preparation",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual VFR+GPS chart ED-6 or figure ED6-08)Flying VFR from PEITING (47o48.0N 010o55.5E) to IMMENSTADT (47o33.5N 010o13.0E). Determine the distance.",
    choices: {
      A: "32 NM",
      B: "46 NM",
      C: "58 NM",
      D: "36 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual VFR+GPS chart ED-6 or figure ED6-08)Flying VFR from PEITING (47o48.0N 010o55.5E) to IMMENSTADT (47o33.5N 010o13.0E). Determine the minimum altitude within a corridor 5 NM left and 5 NM right of the course line in order to stay 1000 ft clear of obstacles.",
    choices: {
      A: "5500 ft",
      B: "6600 ft",
      C: "5300 ft",
      D: "6900 ft",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Athinal (Hellinikon) Approach chart (29-1) or figure VFR-10)What is the variation shown on the chart?",
    choices: {
      A: "3oE",
      B: "3oW",
      C: "5oE",
      D: "5oW",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM (VFR). Aberdeen (Dyce) Area chart (10-1V) or figure VFR-1)What is the elevation of the highest ground within the boundary of Aberdeen Control Zone?",
    choices: {
      A: "1245 ft",
      B: "1733 ft",
      C: "2105 ft",
      D: "2025 ft",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual VFR+GPS chart ED-6)What is elevation of LSZH ZURICH KLOTHEN airport (47o28¿N, 008o33¿E)?",
    choices: {
      A: "1000 m",
      B: "1416 ft",
      C: "1421 ft",
      D: "1572 ft",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual VFR+GPS chart ED-6)Flying from EDPJ LAICHINGEN airport (48o30¿N, 009o38¿E) to EDSZ ROTTWEIL ZEPFENHAN (48o12¿N, 008o44¿E). Find magnetic course and the distance.",
    choices: {
      A: "Magnetic course 243o, distance 41 NM",
      B: "Magnetic course 063o, distance 41 NM",
      C: "Magnetic course 063o, distance 62 NM",
      D: "Magnetic course 243o, distance 62 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual VFR+GPS chart ED-6)Flying from EDPJ LAICHINGEN airport (48o30¿N, 009o38¿E) to EDTM MELGEN airport (48o03¿N, 009o22¿E). Find magnetic course and the distance.",
    choices: {
      A: "Magnetic course 022o, distance 44 NM",
      B: "Magnetic course 022o, distance 28 NM",
      C: "Magnetic course 202o, distance 28 NM",
      D: "Magnetic course 202o, distance 44 NM",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual VFR+GPS chart ED-6)Flying from EDSZ ROTTWEIL ZEPFENHAN (48o12¿N, 008o44¿E) to EDPJ LAICHINGEN airport (48o30¿N, 009o38¿E). Determine the highest obstacle within a corridor 5 NM left and right from track.",
    choices: {
      A: "2852 ft",
      B: "3612 ft",
      C: "3278 ft",
      D: "3760 ft",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual VFR+GPS chart ED-6)Flying from EDSZ ROTTWEIL ZEPFENHAN (48o12¿N, 008o44¿E) to EDPJ LAICHINGEN airport (48o30¿N, 009o38¿E). Find magnetic course and the distance.",
    choices: {
      A: "Magnetic course 063o, distance 62 NM",
      B: "Magnetic course 243o, distance 41 NM",
      C: "Magnetic course 063o, distance 41 NM",
      D: "Magnetic course 243o, distance 62 NM",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual VFR+GPS chart ED-6)Flying from EDSZROTTWEIL ZEPFENHAN (48o12¿N, 008o44¿E) to EDTM MENGEN airport (48o03¿N, 009o22¿E). Determine the highest obstacle within a corridor 5 NM left and 5 NM right of track.",
    choices: {
      A: "2920 ft",
      B: "3331 ft",
      C: "3760 ft",
      D: "2605 ft",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route manual VFR+GPS chart ED-6)Flying from EDSZ ROTTWEIL ZEPFENHAN (48o12¿N, 008o44¿E) to EDTM MENGEN airport (48o03¿N, 009o22¿E). Find magnetic course and the distance.",
    choices: {
      A: "Magnetic course 108o, distance 40 NM",
      B: "Magnetic course 288o, distance 27 NM",
      C: "Magnetic course 108o, distance 27 NM",
      D: "Magnetic course 288o, distance 40 NM",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual VFR+GPS chart ED-6)Flying from EDTM MELGEN airport (48o03¿N, 009o22¿E) to EDSZ ROTTWEIL ZEPFENHAN (48o12¿N, 008o44¿E). Find magnetic course and the distance",
    choices: {
      A: "Magnetic course 288o, distance 27 NM",
      B: "Magnetic course 108o, distance 27 NM",
      C: "Magnetic course 108o, distance 40 NM",
      D: "Magnetic course 288o, distance 40 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual VFR+GPS chart ED-6)Flying from EDTM MENGEN airport (48o03¿N, 009o22¿E) to EDPJ LAICHINGEN airport (48o30¿N, 009o38¿E). Determine the highest obstacle within a corridor 5 NM left and 5 NM right from track.",
    choices: {
      A: "2870 ft FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Chart preparation",
      B: "2838 ft",
      C: "2507 ft",
      D: "2120 ft",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual VFR+GPS chart ED-6)Flying from EDTM MENGEN airport (48o03¿N 009o22¿E) to EDPJ LAICHINGEN airport (48o30¿N 009o38¿E). Find magnetic course and the distance.",
    choices: {
      A: "Magnetic course 202o, distance 44 NM",
      B: "Magnetic course 202o, distance 28 NM",
      C: "Magnetic course 022o, distance 44 NM",
      D: "Magnetic course 022o, distance 28 NM",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual VFR+GPS chart ED-6)Name the frequency of TANGO VORTAC (48o37¿N, 009o16¿E)",
    choices: {
      A: "118.60 MHz",
      B: "422 KHz",
      C: "112.50 MHz",
      D: "118.80 MHz",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual VFR+GPS chart ED-6)What minimum grid area altitude is applicable for EDPJ LAICHINGEN airport (48o30¿N, 009o38¿E)?",
    choices: {
      A: "46",
      B: "43",
      C: "2434 ft",
      D: "402 m",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual VFR+GPS chart ED-6)What minimum grid area altitude is applicable for EDTM MENGEN airport (48o03¿N, 009o22¿E)?",
    choices: {
      A: "43",
      B: "46 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Chart preparation",
      C: "1819 ft",
      D: "1120 m",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual VFR+GPS chart ED-6)Which navigation aid is located in position 48o55¿N, 009o20¿E?",
    choices: {
      A: "NDB",
      B: "VORDME",
      C: "TACAN",
      D: "VOR",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Sabadell Area chart (19-1) or figure VFR-12)What is the published frequency for Barcelona ATIS?",
    choices: {
      A: "118.65",
      B: "119.10",
      C: "124.70",
      D: "120.80",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Sabadell Aerodrome chart (19-2) or figure VFR-13)What is the published initial VFR arrival procedure for helicopters?",
    choices: {
      A: "From the southwest",
      B: "From reporting point N or E",
      C: "From Sant Cugat del Vallis",
      D: "Fro reporting point MARTORELL or MOLLET",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Barcelona Area chat (10-1V) or figure VFR-16)If routing along the Barcelona VFR corridors from Reus REP to SAN CELONI, what is the maximum altitude available without changing?",
    choices: {
      A: "3000 ft",
      B: "2000 ft",
      C: "4500 ft FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Chart preparation",
      D: "3500 ft",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Athinal (Hellinikon) Approach chart (29-1) or figure VFR-10)What is the published frequency to use for start up?",
    choices: {
      A: "Approach 119.10",
      B: "Tower 118.10",
      C: "Ground 121.70",
      D: "ATIS 123.40",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Athinal (Hellinikon) Approach chart (29-1) or figure VFR-10)What is the frequency and ident of the DVOR/DME shown at the northern end of Hellinikon airfield?",
    choices: {
      A: "294 HN",
      B: "357 KVR",
      C: "275 HK",
      D: "114.40 ATH",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Athinal (Hellinikon) Approach chart (29-1) or figure VFR-10)What is the total distance when following the VFR routing fro Abeam Patrokios to Hellinikon?",
    choices: {
      A: "19 Km",
      B: "19 NM",
      C: "14 NM",
      D: "16 NM",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Athinal (Hellinikon) Area chart (29-1) or figure VFR-10)What is the maximum permitted altitude if routing in-bound from Abeam Patrokios to Hellinikon?",
    choices: {
      A: "1500 ft",
      B: "300 ft",
      C: "4000 ft",
      D: "322 ft FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Chart preparation",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Athinal (Hellinikon) Landing chart (29-2) or figure VFR-11)What is the position of the Aerodrome Reference Point?",
    choices: {
      A: "37o53.8¿N 23o43.7¿E",
      B: "37o54.2¿N 23o44.3¿E",
      C: "37o53.2¿N 23o43.3¿E",
      D: "37o54.8¿N 23o44.7¿E",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Athinai (Hellinikon) Aerodrome chart (29-2) or figure VFR-11)What are the available outbound tracks for helicopters from the helicopter landing point at approximately 37o54¿N 23o44E?",
    choices: {
      A: "215o or 035o",
      B: "245o or 035o",
      C: "065o or 245o",
      D: "065o or 215o",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Aberdeen (Dyce) Information Page (19-6) or figure VFR-2)Which of the Helicopter Routes in the Aberdeen CTR is the designated low visibility/bad weather route?",
    choices: {
      A: "H4",
      B: "H1",
      C: "H2",
      D: "H6",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, De Kooy Aerodrome chart (19-2) or figure VFR-8)How many Helicopter landing points are shown on the chart for De Kooy Aerodrome?",
    choices: {
      A: "Fifteen (15)",
      B: "Four (4)",
      C: "Two (2)",
      D: "Six (6)",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, De Kooy Area chart (19-1) or figure VFR-7)What is (i) the frequency and (ii) QDM of the ILS at De Kooy Aerodrome?",
    choices: {
      A: "(i) 123.30; (ii) 220oM",
      B: "(i) 109.70; (ii) 216oM",
      C: "(i) 109.70; (ii) 214oT",
      D: "(i) 123.30; (ii) 220oT",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, De Kooy Area chart (19-1) or figure VFR-7)What is the minimum altitude over the Quiet Zone in the vicinity of De Kooy?",
    choices: {
      A: "1,500 ft",
      B: "3,500 ft",
      C: "3,000 ft",
      D: "32,800 ft",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Aberdeen (Dyce) Information Page (19-6) or figure VFR-2)According to the Helicopter Local Flying Regulations approaches to the Helistrip 23 aiming point should be on a heading of",
    choices: {
      A: "218oM",
      B: "230oM",
      C: "228oM",
      D: "218oT",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM Aberdeen (Dyce) Information Page (19-6) or figure VFR-2)What are the designated departure routes when using (i) Rwy 34 and (ii) Rwy 05?",
    choices: {
      A: "(i) H2 (ii) H4",
      B: "(i) H6 (ii) H2",
      C: "(i) H1 (ii) H3",
      D: "(i) H5 (ii) H1",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Aberdeen (Dyce) Information Page (19-6) or figure VFR-2)What is the designated departure route when using Runway 23 in bad weather and/or low visibility?",
    choices: {
      A: "H5",
      B: "H3",
      C: "H1",
      D: "H6",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Aberdeen (Dyce) Information Page (19-6) or figure VFR-2)What is the minimum flight visibility required when landing at Aberdeen (Dyce) Airport other than when using Route H6?",
    choices: {
      A: "2 km",
      B: "3 km",
      C: "4 km",
      D: "5 km",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Aberdeen (Dyce) Area chart (19-5) or figure VFR-3)What ATIS frequency(ies) is/are available when on the ground?",
    choices: {
      A: "121.85 only",
      B: "114.30 or 121.85",
      C: "121.70 only",
      D: "121.70 or 121.85",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Aberdeen (Dyce) area chart (19-5) or figure VFR-3)What is the ATIS frequency that may not be used when in flight?",
    choices: {
      A: "121.70",
      B: "114.30",
      C: "121.85",
      D: "118.10",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Aberdeen Information Page (19-3) or figure VFR-4)The East Apron and Eastern Twy have restricted access. The maximum permitted wingspan",
    choices: {
      A: "is 20m",
      B: "is the same as a Beech 200 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Chart preparation",
      C: "is 20 ft",
      D: "does not apply to helicopters",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Aberdeen Aerodrome chart (19-2) or figure VFR-5)How many runways are available for use by helicopters?",
    choices: {
      A: "Seven (7)",
      B: "Five (5)",
      C: "Six (6)",
      D: "Two (2)",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM (VFR), Aberdeen (Dyce) Area chart (10-1V) or figure VFR-1)What is the elevation of the highest obstacle within the boundary of Aberdeen Control Area?",
    choices: {
      A: "2025 ft",
      B: "1245 ft",
      C: "2105 ft",
      D: "1733 ft",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM (VFR) Aberdeen (Dyce) Area chart (10-1V) or figure VFR-1)Which of the following frequencies is listed as available for contact with Aberdeen ATSU?",
    choices: {
      A: "145.17",
      B: "126.25",
      C: "119.87",
      D: "114.30",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM (VFR), Aberdeen (Dyce) Area chart (10-1V) or figure VFR-1)What is the correct frequency to contact Scottish Information when overhead reporting point BANCHORY to the south west of Aberdeen Airport?",
    choices: {
      A: "126.25",
      B: "119.87",
      C: "134.10 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Chart preparation",
      D: "135.17",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM (VFR), Aberdeen (Dyce) Area chart (10-1V) or figure VFR-1)What is the elevation of the highest ground within the boundary of Aberdeen Control Area?",
    choices: {
      A: "2105 ft",
      B: "2025 ft",
      C: "1733 ft",
      D: "1245 ft",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual ED-6)What is the navaid at 48 30N 007 34E?",
    choices: {
      A: "VORTAC/NDB",
      B: "NDB",
      C: "TACAN",
      D: "VOR/DME",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart ED-6)You are at position N47o59 E010o15. Which flight information service should you contact?",
    choices: {
      A: "MEMMINGEN 117.20 MHz",
      B: "MEMMINGEN 135.60 MHz",
      C: "MUNCHEN 126.95 MHz",
      D: "MUNCHEN 131.22 MHz",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual chart ED-6)What is the main true track and distance from TRA (N47o42 E008o26) to KPT (N47o45 E010o21)?",
    choices: {
      A: "087o 143 km",
      B: "257o 78 nm",
      C: "087o 88 nm",
      D: "091o 76 nm FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Chart preparation",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Esbjerg Aerodrome chart (19-2) or figure VFR-15)What are the dimensions of runway 08/36 at Esbjerg?",
    choices: {
      A: "8530 ft x 45 ft",
      B: "8530 m x 45 m",
      C: "2600 m x 45 m",
      D: "2600 ft x 148 ft",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Esbjerg Aerodrome chart (19-2) or figure VFR-15)What is the position of the Aerodrome Reference Point at Esbjerg?",
    choices: {
      A: "55o31.6¿N 008o33.1¿W",
      B: "55o31.6¿N 008o33.1¿E",
      C: "55o32.2¿N 008o34.9¿E",
      D: "55o32.2¿N 008o34.9¿W",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Esbjerg Area chart (19-1) or figure VFR-14)What is the course and distance from Locator HP to the threshold of Runway 08?",
    choices: {
      A: "080o (T) / 4.2 km",
      B: "080o (T) / 4.2 nm",
      C: "080o (M) / 4.2 km",
      D: "080o (M) / 4.2 nm",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Esbjerg Area charet (19-1) or figure VFR-14)What is the track and distance shown on the chart from VOR/DME SKR (N55o13.8 E009o12.90 to overhead Esbjerg (N55o31.6 E008o33.2)?",
    choices: {
      A: "308o (T) / 29 NM",
      B: "308o (M) / 29 Km",
      C: "308o (M) / 29 NM",
      D: "308o (T) / 29 Km",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, The Netherlands Aerodrome Directory (7-3) or figure VFR-6)What is the local time (LT) in the Netherlands in (i) Winter and (ii) Summer?",
    choices: {
      A: "(i) LT 2 hours = UTC (ii) LT 1 hour = UTC",
      B: "(i) LT 1 hour = UTC (ii) LT 2 hours = UTC",
      C: "(i) LT UTC + 2 hours (ii) LT UTC + 1 hour",
      D: "(i) LT = UTC 1 hour (i) LT = UTC 2 hours",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Greece Aerodrome Director (7-3) or figure VFR-9)What is the local time (LT) in Greece in (i) Winter and (ii) Summer?",
    choices: {
      A: "(i) LT = UTC + 2 hours (ii) LT = UTC + 3 hours",
      B: "(i) LT = UTC ' 2 hours (ii) LT = UTC ' 3 hours",
      C: "(i) LT + 2 hours = UTC (ii) LT + 3 hours = UTC",
      D: "(i) LT ' 3 hours = UTC (ii) LT ' 2 hours = UTC",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual VFR+GPS chart ED-6 or figure ED6-12)Flying from SAULGAU airport (48o02N, 009o31E) to ALTENSTADT airport (47o50N 010o53E). Find magnetic course and the distance.",
    choices: {
      A: "Magnetic course 282o, distance 56 NM",
      B: "Magnetic course 102o, distance 82 NM",
      C: "Magnetic course 078o, distance 82 NM",
      D: "Magnetic course 102o, distance 56 NM",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question: "What is Total Elapsed Time on a VFR flight plan?",
    choices: {
      A: "From take-off to overhead destination",
      B: "From take-off to overhead destination + 15 minutes",
      C: "From take-off to landing",
      D: "From taxi to arrival on the gate",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "An aircraft flight planning chart states that the time to reach FL190 at a given gross mass is 22 minutes with a still air distance of 66 NM. The ground distance travelled when the average headwind component is 35 kt will be",
    choices: {
      A: "53 NM",
      B: "61 NM",
      C: "79 NM",
      D: "85 NM",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In a flight plan when the destination aerodrome is A and the alternate aerodrome is B, the final reserve fuel for a turbojet engine aeroplane corresponds to",
    choices: {
      A: "15 minutes holding 2000 feet above aerodrome A",
      B: "30 minutes holding 2000 feet above aerodrome B",
      C: "30 minutes holding 1500 feet above aerodrome B",
      D: "30 minutes holding 1500 feet above aerodrome A",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "You are to determine the maximum fuel load which can be carried in the following conditions: Dry operating mass: 2800 kg Trip fuel: 300 kg Payload: 400 kg Maximum take-off mass: 4200 kg Maximum landing mass: 3700 kg",
    choices: {
      A: "500 kg",
      B: "800 kg",
      C: "1000 kg",
      D: "700 kg",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "(Refer to CAP 697 figure 3-3) Given: Trip time 2 hr 37 min from departure to destination at 2500 RPM, 65% power. For the climb and descent add 13 mins of cruise fuel. Reserve = 30% of trip fuel. Taxi fuel is 5 US gal. What is the min Ramp Fuel? Answers",
    choices: {
      A: "88 gal",
      B: "93 gal",
      C: "120 gal FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "115 gal",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "A helicopter is on a 150 NM leg to an off-shore oil rig. Its TAS is 130 kt with a 20 kt tailwind, its endurance is 3h30min without reserve. Upon reaching destination, it is asked to proceed outbound to locate a ship in distress, on a track which gives a 15 kt tailwind. Maintaining zero reserve on return to the oil rig, the helicopter can fly outbound for distance of: Answers",
    choices: {
      A: "224.5 NM",
      B: "158.6 NM",
      C: "222.1 NM",
      D: "160.3 NM",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to Jeppesen Manual ED-6 or figure ED6-02). What is the frequency for Stuttgart ATIS?",
    choices: {
      A: "126.12 MHz",
      B: "128.95 MHz",
      C: "118.60 MHz",
      D: "115.45 MHz",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual VFR+GPS chart ED-6 or figure ED6-02)Give the name and frequency of the Flight Information Service for an aeroplane in position (47o59N, 010o14E)",
    choices: {
      A: "MEMMINGEN INFORMATION 122.1 MHz",
      B: "MUNCHEN INFORMATION 126.95 MHz",
      C: "MUNCHEN INFORMATION 120.65 MHz",
      D: "FRANKFURT INFORMATION 128.95 MHz",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual VFR+GPS chart ED-6 or figure ED6-11)Which navigation aid is located in position 48o30N 007o34E?",
    choices: {
      A: "NDB",
      B: "VOR FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "TACAN",
      D: "VOR-DME",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "Given the following TAF/METAR:Which best describes the weather, if any, at Lyon/Satolas at 1330 UTC LYONS/SATOLAS LFLL/LYS SA1330 121330Z 14007KT 9000 TSRA FEW020CB SCT033TCU BKN046 09/07 Q1003 NOSIG=FC1100r 121100Z 121221 VRB03KT 9999 FEW010 SCT020 BKN040 BECMG 1821 33006KT TEMPO 1221 VRB15G20KT 4000 SHRA SCT008 BKN015=FT1000 121000Z 121812 33004KT 9999 SCT025 BKN060 BECMG 2224 VRB02KT 8000 SCT010 SCT020 BECMG 0204 1500 BR BKN003 TEMPO 0407 0800 FG OVC002 BECMG 0810 33006KT 9999 SCT015 BKN030=",
    choices: {
      A: "nil",
      B: "Frequent rain showers",
      C: "Fog",
      D: "Light rain associated with thunderstorms",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Refer to weather information for Birmingham. What is the total time for which the weather is forecast?BIRMINGHAM EGBB/BHXSA0850 280850 18014KT 9999 SCT024 BKN030 BKN045 12/08 Q1011=FC0600 280600Z 280816 190015G27KT 9999 BKN025 TEMPO 0812 5000 DZ BKN012 BECMG 1214 19022G37=FT0400 280434Z 281212 19022G37 9999 BKN025 TEMPO 1902 5000 RA BKN010 BECMG 2201 25007 KTFT0400 280434Z 281212 19022G37 9999 BKN025 TEMPO 1902 5000 RA BKN010 BECMG 2201 25007 KT",
    choices: {
      A: "9 hours",
      B: "18 hours",
      C: "24 hours",
      D: "28 hours",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Given the following TAF/METAR:What maximum windspeed (kt) is forecast for BORDEAUX/MERIGNAC AT 1600 UTC ?Bordeaux/MerignacLFBD/BODSA1330 121330Z 21005KT 9000 FEW030TCU FEW 033CB SCT040 BKN100 09/08 Q1005 TEMPO 25015G25KT 3000 TSRA SCT005 BKN015CB=FC1100R 121100Z 121221 28010KT 9999 RA SCT020 FEW025CB SCT040 TEMPO 1218 25015G25KT 6000 SHRA SCT008 SCT020CB BKN033 PROB30 TEMPO 1218 28020G30KT 3000 TSRA SCT005 BKN015CB BECMG 1821 22004KT 8000 NSW FEW006 BKN030=FT1000 121000Z 121812 30010KT 9999 SCT020 FEW025CB BKN040 BECMG 1822 22004KT 8000 FEW006 BKN030 BECMG 0306 24005KT 6000 SCT007 SCT015 BKN090 BECMG 1012 RA=",
    choices: {
      A: "10",
      B: "5",
      C: "30",
      D: "25 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "A METAR reads:SA1430 35002KY 7000 SKC 21/03 Q1024=Which of the following information is contained in this METAR?",
    choices: {
      A: "temperature/dewpoint",
      B: "runway in use",
      C: "day/month",
      D: "period of validity",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Refer to the TAF below:What are the lowest cloud conditions forecast for 1900 UTC at HAMBURG (EDDH)?TAF EDDH ISSUED ATEDDH 0624 21010KT CAVOKBECMG 0810 9999 SCT025 SCT040PROB30 TEMPO 1218 7000 RADZ BKN012BECMG 1620 7000 BKN020TEMPO 1824 4000 RADZ BKN005",
    choices: {
      A: "5 to 7 at 1200 ft",
      B: "3 to 4 at 500 ft",
      C: "5 to 7 at 500 ft",
      D: "5 to 7 at 2000 ft",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Refer to weather information at Birmingham.What is the lowest visibility forecast at 280800Z?BIRMINGHAM EGBB/BHXSA0850 280850 18014KT 9999 SCT024 BKN030 BKN045 12/08 Q1011=FC0600 280600Z 280816 190015G27KT 9999 BKN025 TEMPO 0812 5000 ¿DZBKN012 BECMG 1214 19022G37=FT0400 280434Z 281212 19022G37 9999 BKN025 TEMPO 1902 5000 RABKN010 BECMG 2201 25007KT Answers",
    choices: {
      A: "50 km",
      B: "5000m",
      C: "10 km or more",
      D: "2500m",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Given the following TAF/METAR:What is the earliest time (UTC), if any, that thunderstorms are forecast for Tunis/Carthage?TUNIS/CARTHAGEDTTA/TUNSA1330 121330Z 24008KT 9999 FEW023 BKN200 24/08 Q1007=FC1200 121200Z 121322 28012KT 9999 FEW030 SCT200 BECMG 1518 30014KT SCT026 BKN200 TEMP9O 1722 32014G25KT 6000 =SHRA FEW023CB=FT1020 121020Z 121212 26012KT 9999 FEW030 SCT 200 BECMG 1619 30014KT 8000 SCT020 BKN100 TEMPO 1802 32014G25KT 6000 SHRA OR TSSHRA FEW023CB BECMG 0406 28019KT 6000 BECMG 0810 8000 SCT020 SCT026 TEMPO 5000 Given the following TAF/METAR:What is the earliest time (UTC), if any, that thunderstorms are forecast for Tunis/Carthage?TUNIS/CARTHAGEDTTA/TUNSA1330 121330Z 24008KT 9999 FEW023 BKN200 24/08 Q1007=FC1200 121200Z 121322 28012KT 9999 FEW030 SCT200 BECMG 1518 30014KT SCT026 BKN200 TEMP9O 1722 32014G25KT 6000 =SHRA FEW023CB=FT1020 121020Z 121212 26012KT 9999 FEW030 SCT 200 BECMG 1619 30014KT 8000 SCT020 BKN100 TEMPO 1802 32014G25KT 6000 SHRA OR TSSHRA FEW023CB BECMG 0406 28019KT 6000 BECMG 0810 8000 SCT020 SCT026 TEMPO 5000 SHRA FEW026CB=",
    choices: {
      A: "0800",
      B: "1300",
      C: "1800",
      D: "nil",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "A METAR reads:SA 1430 35002KT 7000 SKC 21/03 Q1024Which of the following information is contained in this report?",
    choices: {
      A: "Day month",
      B: "Runway in use",
      C: "Temperature, dewpoint",
      D: "Period of validity",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)Which best describes the maximum intensity of icing, if any, at FL 150 in the vicinity of BUCHAREST (45oN 026oE)?",
    choices: {
      A: "Severe",
      B: "Nil",
      C: "Moderate",
      D: "Light",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)Which describes the maximum intensity of icing, if any, at FL180 in the vicinity of Casablanca (N33 W008)?",
    choices: {
      A: "Severe",
      B: "Moderate",
      C: "Light",
      D: "Nil",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-2)What is the temperature deviation (oC) from ISA over 60oN 000oE?",
    choices: {
      A: "-9",
      B: "-55",
      C: "+2",
      D: "+9",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)What is the maximum wind speed over Italy?",
    choices: {
      A: "100 kt at FL380",
      B: "110 kts at FL380 but the maximum not shown on the chart",
      C: "110 kts at FL380",
      D: "130 kts at FL340",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-2)What mean temperature (C) is likely on a course 360 (T) from N40 to N50 at E020?",
    choices: {
      A: "-47",
      B: "-46",
      C: "-49",
      D: "-50",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-2)The approximate mean wind component (kt) along the true course 180 from 50N to 40N at 020E is",
    choices: {
      A: "55 kt tailwind",
      B: "40 kt tailwind",
      C: "70 kt tailwind",
      D: "55 kt headwind",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)At position 38oN 15oE what is the worst hazard which could be expected?",
    choices: {
      A: "Engine flame-out and windscreen damage FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "Turbulence",
      C: "Reduced visibility",
      D: "Nil",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)What is the wind associated with Munich (N50 E010)?",
    choices: {
      A: "Maximum wind of 160 kt from 360T",
      B: "Maximum wind of 120 kt from 260M",
      C: "Maximum wind of 100 kt from 360T",
      D: "Maximum wind of 140 kt from 290T",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)Which of the following flight levels, if any, is forecast to be clear of significant cloud, icing and CAT along the marked route from SHANNON (53N 10W) to BERLIN (53N 13E)?",
    choices: {
      A: "None",
      B: "FL290",
      C: "FL210",
      D: "FL250",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-2)The approximate mean wind component at Mach 0.78 along the true course 270o at N50 from 000o to 010W is?",
    choices: {
      A: "25 kt tailwind component",
      B: "55 kt headwind component",
      C: "35 kt tailwind component",
      D: "40 kt headwind component",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)In the vicinity of WARSAW (52N 020E) the tropopause is at approximate FL",
    choices: {
      A: "400",
      B: "370",
      C: "350 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "330",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)The surface system over London (51N 000E) is a/an",
    choices: {
      A: "cold front moving west",
      B: "warm front moving north",
      C: "stationary occluded front",
      D: "occluded front moving east",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)In the vicinity of Paris (N49 E003), the tropopause is at approximately",
    choices: {
      A: "FL340",
      B: "FL400",
      C: "FL350",
      D: "FL380",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)Over PRAGUE (50N 014E) the lowest FL listed which is unaffected by CAT is",
    choices: {
      A: "350",
      B: "300",
      C: "270",
      D: "400",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)The surface weather system over England (53oN 002oW) is",
    choices: {
      A: "a warm front moving south east",
      B: "a cold front moving east",
      C: "an occluded front moving east",
      D: "a depression moving north",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)Which best describes the significant cloud, if any, forecast for the area south west of BODO (67oN 014oE)?",
    choices: {
      A: "5 to 7 oktas CU and CB base below FL100, tops FL180",
      B: "5 to 7 oktas CU and CB base FL100, tops FL180",
      C: "3 to 7 oktas CU and CB base below FL100, tops FL180",
      D: "Nil",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)Which best describes the maximum intensity of CAT, if any, forecast for FL330 over BENGHAZI (32oN 020oE)?",
    choices: {
      A: "Light",
      B: "Moderate",
      C: "Severe",
      D: "Nil",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "(Refer to figure 10-1)The wind velocity over ITALY is",
    choices: {
      A: "a maximum of 110 kt at FL380",
      B: "130 kt at FL380 maximum velocity not shown on chart",
      C: "a maximum of 160 kt at FL380",
      D: "110 kt at FL380 maximum velocity not shown on chart",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-2)The wind direction and velocity (o/kt) at 50oN 040oE is",
    choices: {
      A: "200/70",
      B: "020/80",
      C: "020/70",
      D: "350/70",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-2)The wind direction and velocity (o/kt) at 60oN 015oW is",
    choices: {
      A: "290/155 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "320/155",
      C: "110/155",
      D: "290/185",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-2)What is the mean temperature deviation (oC) from the ISA over 50oN 10oW?",
    choices: {
      A: "+2",
      B: "+9",
      C: "+13",
      D: "-2",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-2)The wind direction and velocity (o/kt) at 40oN 040oE is",
    choices: {
      A: "150/75",
      B: "300/75",
      C: "330/75",
      D: "330/85",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-7)What minimum visibility (m) is forecast for 0600 UTC at LONDON LHR (EGLL)?",
    choices: {
      A: "2200",
      B: "5000",
      C: "10,000",
      D: "1500",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-7)Which affects the visibility for 1330 UTC at TUNIS (DTTA)?",
    choices: {
      A: "Haze",
      B: "Mist",
      C: "Smoke FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "Dust",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-7)What is the earliest time (UTC), if any, that thunderstorms are forecast for DUBAI (OMDB)?",
    choices: {
      A: "1000",
      B: "1200",
      C: "1400",
      D: "Nil forecast",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-2)What mean temperature (oC) is likely on a course of 360o(T) from 40oN to 50oN at 040oE?",
    choices: {
      A: "-49",
      B: "-50",
      C: "-47",
      D: "-46",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "(Refer to figure 10-2)The W/V (o/kt) at 50oN 015oW is",
    choices: {
      A: "100/75",
      B: "175/90",
      C: "310/85",
      D: "355/90",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-2)What mean temperature (oC) is likely on a true course of 270o from 025oE to 010oE at 45oN?",
    choices: {
      A: "-48",
      B: "-52",
      C: "-54",
      D: "-50",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "(Refer to figure 10-2)The W/V (o/kt) at 40oN 020oW is",
    choices: {
      A: "185/65",
      B: "005/65",
      C: "185/60",
      D: "005/60",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-25)What is the temperature deviation (oC) from ISA over 50oN 010oE?",
    choices: {
      A: "+10",
      B: "-10",
      C: "-55",
      D: "+2",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "(Refer to figure 10-5)The W/V (o/kt) at 60oN 15oW is",
    choices: {
      A: "290/40",
      B: "110/40",
      C: "280/20",
      D: "100/20",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-4)Which best describes the significant cloud forecast for the area over Warsaw (52oN 021oE)?",
    choices: {
      A: "5 to 7 oktas CU and AC base below FL100 tops FL120",
      B: "3 to 4 oktas CU and AC base below FL100 tops FL120",
      C: "5 to 7 oktas CU and AC base FL100 tops FL120",
      D: "3 to 4 oktas CU and AC base FL100 tops FL120",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-4)Which best describes the maximum intensity of icing, if any, at FL100 overhead Warsaw (52oN 021oE)?",
    choices: {
      A: "severe FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "moderate",
      C: "light",
      D: "nil",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)Which describes the intensity of icing, if any, at FL180 in the vicinity of the Canary Islands (29oN 015oW)?",
    choices: {
      A: "moderate or severe",
      B: "moderate",
      C: "light",
      D: "nil",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-4)The surface system over ZURICH (48oN 008oE) is",
    choices: {
      A: "Occluded front moving east",
      B: "Quasi-stationary front moving east",
      C: "Quasi-stationary front moving south",
      D: "Occluded front moving north east",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-4)In the vicinity of Paris (49oN 002oE) the tropopause is at about FL",
    choices: {
      A: "340",
      B: "350",
      C: "400",
      D: "450",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-4)Which best describes the significant cloud forecast over ZURICH (48oN 008oE)?",
    choices: {
      A: "broken AC/CU base below FL100 tops FL190, embedded isolated CB base below FL100 tops FL300",
      B: "well separated CB base FL100 tops to FL300",
      C: "isolated CB embedded in layer cloud, surface to FL300 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "5 to 7 oktas CU and AC base below FL100 tops to FL300",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-1)Which describes the maximum intensity of turbulence, if any, at FL210 in the vicinity of the Canary Islands (29oN 015oW)?",
    choices: {
      A: "nil",
      B: "light",
      C: "moderate",
      D: "severe",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-4)The maximum wind velocity (o/kt) over ATHENS (37oN 024oE) is",
    choices: {
      A: "300/90",
      B: "270/320",
      C: "250/110",
      D: "270/90",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-4)Over LONDON (51oN 000oE/W), the lowest FL listed which is unaffected by CAT is",
    choices: {
      A: "360",
      B: "230",
      C: "280",
      D: "310",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-6)The forecast period covered by the PARIS/CHARLES-DE-GAULLE TAFs totals (hours)",
    choices: {
      A: "27",
      B: "9",
      C: "18",
      D: "20",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-6)The lowest cloud conditions (oktas/ft) at BORDEAUX/MERIGNAC at 1330 UTC were",
    choices: {
      A: "3 to 4 at 2000",
      B: "3 to 4 at 800",
      C: "1 to 2 at 3000",
      D: "1 to 4 at 3000",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-6)The surface wind velocity (o/kt) at PARIS/CHARLES-DE-GAULLE at 1330 UTC was",
    choices: {
      A: "270/04",
      B: "300/05",
      C: "270/08",
      D: "180/12",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-6)Which is the heaviest type of precipitation, if any, forecast for BORDEAUX/MERIGNAC at 1000 UTC?",
    choices: {
      A: "nil",
      B: "light rain",
      C: "rain showers",
      D: "heavy rain associated with thunderstorms",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-6)What minimum visibility is forecast for PARIS/CHARLES-DE-GAULLE at 2100 UTC?",
    choices: {
      A: "2000 m",
      B: "6000 m",
      C: "10 km",
      D: "8000 m",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-7)Which best describes the weather, if any, forecast for JOHANNESBURG/JAN SMUTS at 0400 UTC?",
    choices: {
      A: "CAVOK FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "mist and/or fog",
      C: "patches of fog",
      D: "rain associated with thunderstorms",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 033_10-7)What affects the visibility forecast for TUNIS (DTTN)?",
    choices: {
      A: "Haze",
      B: "Mist",
      C: "Smoke",
      D: "Dust",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-24)The maximum wind velocity (o/kt) immediately north of TUNIS (36oN 010oE) is",
    choices: {
      A: "250.85",
      B: "180/105",
      C: "190/95",
      D: "280/110",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-24)Which describes the maximum intensity of turbulence, if any, forecast for FL260 over TOULOUSE (44oN 001oE)?",
    choices: {
      A: "light",
      B: "nil",
      C: "severe",
      D: "moderate",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-24)Which best describes the significant cloud forecast over TOULOUSE (44oN 001oE)?",
    choices: {
      A: "broken AC/CU base below FL100 tops FL150, embedded isolated CB base below FL100 tops FL270",
      B: "well separated CB base FL100 tops to FL 270",
      C: "isolated CB embedded in layer cloud, surface to FL270 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "5 to 7 oktas CU and AC base below FL100 tops to FL270",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "(Refer to figure 10-25)The W/V (o/kt) at 40oN 020oW is",
    choices: {
      A: "334/40",
      B: "310/40",
      C: "135/40",
      D: "155/40",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "(Refer to figure 10-25)The W/V (o/kt) at 50oN 015oW is",
    choices: {
      A: "310/85",
      B: "290.75",
      C: "310/75",
      D: "100/75",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "(Refer to figure 10-25)The W/V (o/kt) at 60oN 015oW is",
    choices: {
      A: "115/60",
      B: "300/70",
      C: "320/60",
      D: "300/60",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-24)In the vicinity of SHANNON (52oN 009oW) the tropopause is at about FL",
    choices: {
      A: "270",
      B: "350",
      C: "300",
      D: "360",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-24)The surface system over VIENNA (48oN 016oE) is a",
    choices: {
      A: "cold front moving west",
      B: "warm front moving north",
      C: "stationary occluded front",
      D: "cold front moving east",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-24)Which best describes the maximum intensity of icing, if any, at FL160 in the vicinity of BERLIN (53oN 013oE)?",
    choices: {
      A: "moderate",
      B: "severe",
      C: "light",
      D: "nil",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-24)Which best describes the significant cloud forecast for the area east of Tunis (36oN 010oE)?",
    choices: {
      A: "5 to 7 oktas CU and AC base below FL100 tops FL180",
      B: "3 to 4 oktas CU and AC base below FL100 tops FL180",
      C: "5 to 7 oktas CU and AC base FL100 tops FL180",
      D: "3 to 4 oktas CU and AC base FL100 tops FL160",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-24)Which describes the intensity of icing, if any, at FL150 in the vicinity of TOULOUSE (44oN 01oE)?",
    choices: {
      A: "moderate or severe",
      B: "moderate",
      C: "light",
      D: "nil",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-3)The lowest height of the tropopause on the whole chart is",
    choices: {
      A: "FL240 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "FL250",
      C: "FL220",
      D: "FL200",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-3)On a flight from Cairo to Madrid at FL350 when Mt Etna is not active, what sort of in- flight weather hazard might you encounter?",
    choices: {
      A: "None",
      B: "Severe icing and turbulence within any CB",
      C: "Light CAT",
      D: "Moderate CAT",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-3)The strongest wind and its level associated with any jet stream on the chart is",
    choices: {
      A: "160 kt at FL320",
      B: "100 kt at FL340",
      C: "150 kt at FL310",
      D: "130 kt at FL300",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: 'In a METAR report the abbreviation "NOSIG" means',
    choices: {
      A: "No significant change",
      B: "No significant cloud",
      C: "No significant weather",
      D: "No significant problems",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-23)The approximate mean wind velocity expected en-route at FL300 from Oslo(position O) to London (position L) is",
    choices: {
      A: "056/45",
      B: "236/45",
      C: "236/51 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "056/51",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-23)The approximate mean temperature expected en-route at FL260 from Oslo (position O) to London (position L) is",
    choices: {
      A: "-59oC",
      B: "-51oC",
      C: "-56.5oC",
      D: "-43oC",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "(Refer to figure 10-23)The W/V over position S in Ireland is",
    choices: {
      A: "330/20",
      B: "330/50",
      C: "330/60",
      D: "150/20",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-3)Over PALMA (39oN 003oE) the lowest FL listed which is unaffected by CAT is",
    choices: {
      A: "265",
      B: "380",
      C: "260",
      D: "270",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-05)The approximate mean wind component along the true course 180o from 50oN to 40oN at 005oW is",
    choices: {
      A: "345/75",
      B: "325/65",
      C: "145/75",
      D: "165/60",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-05)What is the temperature deviation (oC) from ISA over 50oN 010oE?",
    choices: {
      A: "-58",
      B: "-6",
      C: "+2",
      D: "+10",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Given the following TAF/METAR:What are the lowest cloud conditions (oktas/feet) forecast for JOHANNESBURG/JAN SMUTS at 0300 UTC JOHANNESBURG/JAN SMUTSFAJS/JNBFT0900 120900Z 121212 36010KT 9999 FEW030CB FEW035 PROB40 TEMPO 1318 VRB15KT 3000 TSRA SCT030CB BKN080 FM2000 03005KT CAVOK BECMG 0204 SCT008 SCT100 PROB30 0305 3000 BCFG BKN004 FM0800 34012KT 9999 SCT025 T25/12Z T15/03Z T27/12Z= Answers",
    choices: {
      A: "5 to 7 at 800",
      B: "3 to 4 at 800",
      C: "5 to 7 at 400",
      D: "3 to 4 at 400",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "On a given path, it is possible to choose between four flight levels (FL) each associated with a mandatory flight Mach Number (M). The flight conditions, static air temperature (SAT) and headwind component (HWC) are given below:FL370 l M = 0.80 l Ts = -60oC l HWC = -15 ktFL330 l M = 0.78 l Ts = -60oC l HWC = -5 ktFL290 l M = 0.80 l Ts = -55oC l HWC = -15 ktFL270 l M = 0.76 l Ts = -43oC l HWC = 0The flight level allowing the highest ground speed is",
    choices: {
      A: "FL 270",
      B: "FL 290",
      C: "FL 330",
      D: "FL 370",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "According to the chart the minimum obstruction clearance altitude (MOCA) is 8500 ft. The meteorological data gives an outside air temperature of -20oC at FL85. The QNH, given by a meteorological station at an elevation of 4000 ft, is 1003 hPa. What is the minmum pressure altitude which should be flown according to the given MOCA? Answers",
    choices: {
      A: "8500 ft",
      B: "8800 ft",
      C: "12800 ft",
      D: "8200 ft FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "An airway is marked 3500T 2100 a. This indicates that",
    choices: {
      A: "the minimum en-route altitude (MEA) is 3500 ft",
      B: "the minimum obstruction clearance altitude (MOCA) is 3500 ft",
      C: "the airway base is 3500 ft MSL",
      D: "the airway is a low level link route 2100 ft 3500 ft MSL",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An aircraft, following a 215o true track at variation 3oW, must fly over a 10 600 ft obstacle with a minimum obstacle clearance of 1500 ft. Knowing the QNH received from an airport close by, which is almost at sea- level, is 1035 and the temperature is ISA -15oC, the minimum flight level will be",
    choices: {
      A: "140",
      B: "120",
      C: "130",
      D: "150",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Using the following information, what is the minimum flight level considering the temperature? True track: 215o Mountain elevation: 11,600 ft Local airfield gives QNH as 1035 mb Required terrain clearance: 1500 ft Temperature: ISA - 15C",
    choices: {
      A: "FL150",
      B: "FL140",
      C: "FL120",
      D: "FL110",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An IFR flight is planned outside airways on a course of 235o magnetic. The minimum safe altitude is 7800 ft. Knowing the QNH is 995 hPa, the minimum flight level you must fly is",
    choices: {
      A: "80",
      B: "90",
      C: "85",
      D: "100",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An appropriate flight level for IFR flight in accordance with semi-circular height rules on a magnetic course of 200o is",
    choices: {
      A: "FL320",
      B: "FL310",
      C: "FL290",
      D: "FL300",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An appropriate flight level for IFR flight in accordance with semi-circular height rules on a course of 180o magnetic is",
    choices: {
      A: "FL105",
      B: "FL90",
      C: "FL95",
      D: "FL100",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Unless otherwise stated on charts for standard instrument departures the routes shown are given with",
    choices: {
      A: "magnetic headings",
      B: "true course",
      C: "magnetic course",
      D: "true headings",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "An airway is marked 5000 2900a.The notation 5000 is the",
    choices: {
      A: "base of the airway (AGL) FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "maximum authorised altitude (MAA)",
      C: "minimum holding altitude (MHA)",
      D: "minimum en-route altitude (MEA)",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "On an IFR navigation chart, in a 1o quadrant of longitude and latitude, appears the following information: 80 This means that within this quadrant",
    choices: {
      A: "the minimum safe altitude is 8000 ft",
      B: "the minimum flight level is FL80",
      C: "the altitude of the highest obstacle is 8000 ft",
      D: "the floor of the airway is at 8000 ft",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "On an instrument approach chart, a minimum sector altitude (MSA) is defined in relation to a radio navigation facility. Without any particular specification on distance, this altitude is valid to",
    choices: {
      A: "20 NM",
      B: "25 NM",
      C: "15 NM",
      D: "10 NM",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "An airway is marked FL80 1500 a.This indicates that",
    choices: {
      A: "1500 ft MSL is the minimum radio reception altitude (MRA)",
      B: "the airway base is 1500 ft MSL",
      C: "the airways extends from 1500 ft MSL to FL80",
      D: "the minimum en-route altitude (MEA) is FL80",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An appropriate flight level for IFR flight in accordance with semi-circular height rules on a course of 360o (M) is",
    choices: {
      A: "FL 200",
      B: "FL 210 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "FL 220",
      D: "FL 240",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)4 or figure HI-29)The radio navigation aid at ZURICH (47o36N 008o49E) is",
    choices: {
      A: "a NDB , frequency 115.0 KHz",
      B: "a VOR, frequency 115.0 MHz",
      C: "a VOR/DME, frequency 115.0 MHz",
      D: "a TACAN on channel 11",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)4 or figure HI-01)The radio aid at STAD (N5145 E00415) is",
    choices: {
      A: "a NDB, frequency 386 KHz",
      B: "a VOR frequency 386 MHz",
      C: "a VOR/DME on channel 386",
      D: "a TACAN on channel 386",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(LO)1 or figure LO-01)From SHANNON (N5243.3 W00853.1) by W13 to KORAK. What is meant by 5000 by the route centreline?",
    choices: {
      A: "MORA 5000 FT",
      B: "MAA 5000 FT",
      C: "MOCA 5000 FT",
      D: "MEA 5000 FT",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(LO)1 or figure LO-01)What radio navigation aid is at SHANNON (52 43N 008 53W)?",
    choices: {
      A: "VOR SHA 113.3 MHz only",
      B: "VOR DME SHA 113.3 MHz",
      C: "NDB frequency 353 KHz",
      D: "TACAN frequency 113.3 KHz FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(LO)5 or figure LO-03)See DENKO (N52 49 E015 50). What does 440 DRE mean?",
    choices: {
      A: "440 KHz plus ident",
      B: "440 KHz plus ident only when BFO switched on",
      C: "440 KHz plus ident only when BFO switched off",
      D: "440 MHz plus ADF only when BFO off",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(LO)1 or figure LO-02)The radio navigation aid at TOPCLIFFE (54o12N 001o22W) is a",
    choices: {
      A: "TACAN only, channel 84 (frequency 113.7 MHz)",
      B: "TACAN, channel 84, and a VOR frequency 113.7 MHz only",
      C: "TACAN, channel 84, and an NDB frequency 92 KHz only",
      D: "VORTAC, frequency 113.7 MHz, and an NDB frequency 92 KHz",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(HI)4 or figure HI-02)The magnetic course and distance from SALZBURG SBG 113.8 (N48 00 E012 54) to STAUB (N48 44E 012 38) on airway UB5 is",
    choices: {
      A: "346/43 nm",
      B: "166/64 nm",
      C: "346/64 nm",
      D: "346/45 nm",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(HI)4 or figures HI-03 _a & _b)Of the following, the preferred airways routing from FRANKFURT FFM 114.2 (50 03N 008 38E) to KOKSY (51 06N 002 39E) above FL245, on a Wednesday is",
    choices: {
      A: "UR10 NTM UB6 BUB ATS",
      B: "UG108 SP1 UG1",
      C: "UB69 DINKI UB6 BUB ATS",
      D: "UG1",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(HI)5 or figure HI-05)Given Leg MOULINS (N46 42 E003 38.0) / DIJON (N47 16.3 E005 05.9)Find route designator and distance",
    choices: {
      A: "UG12, 69 nm",
      B: "UG 21, 70 nm",
      C: "D, 44 nm",
      D: "Direct route, 69 nm",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(HI)S or figure HI-06). What radio navaids are shown at CHIOGGIA (45o04N 012o16E)?",
    choices: {
      A: "VOR/DME freq 114.1 NDB freq 408",
      B: "VOR freq 114.1, TACAN freq 408",
      C: "VOR freq 114.1, TACAN channel 408",
      D: "VOR/DME 114.1, DME freq 408",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(HI)5 or figure HI-07)Of the following, the preferred airways routing from AMBOISE AMB 113.7 (47o 26¿N 001o 04¿E) to AGEN AGN (43o 53oN 000o52¿E) above FL200 is",
    choices: {
      A: "UB19 PO1 UB195",
      B: "UH40 FOUCO UH20 PERIG UA34",
      C: "UA34",
      D: "UB19 CGC UA25",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)4 or figure HI-08)The magnetic course and distance from ST PREX SPR 113.9 (N4628 E00627) to FRIBOURG FRI 115.1 (N4647 E00714) on airway UG60.",
    choices: {
      A: "048/46 nm",
      B: "061/37 nm",
      C: "061/28 nm",
      D: "041/78 nm",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)5 or figure LO-06)The airway intersection at RONNEBY (N5618 E01516) is marked by",
    choices: {
      A: "a fan marker callsign LP FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "a TACAN callsign RON",
      C: "a NDB callsign N",
      D: "a NDB callsign LF",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual STAR charts PARIS (Charles-de-Gaulle 20-2) or figure AP-04)The route distance from CHEVRES (CIV) to BOURSONNE (BSN) is",
    choices: {
      A: "73 nm",
      B: "83 nm",
      C: "88 nm",
      D: "96 nm",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart NAP or figure HI-23)The initial magnetic course from A (64oN 006oE) to C (62oN 020oW) is",
    choices: {
      A: "275o",
      B: "267o",
      C: "271o",
      D: "262o",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E (LO) 5 or figure LO-04)The magnetic course/distance from EELDE EEL 112.4 (N5310 E00640) to WELGO (N5418 E00725) on airway A7 are",
    choices: {
      A: "024o/73 nm",
      B: "023o/73 nm",
      C: "024o/87 nm",
      D: "023o/47 nm",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)5 or figure HI-04)An appropriate FL for flight along airway UG5 from MENDE-NASBINALS MEN 115.3 (N4436 E00310) to GAILLAC GAI 115.8 (N4357 E00150) is",
    choices: {
      A: "FL280",
      B: "FL290",
      C: "FL300 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "FL310",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(HI)4 or figure HI-15)The magnetic course/distance from DINKESBUHL DKB 117.8 (49 09N 010 14E) to ERLANGEN ERL 114.9 (49 39N 011 09E) on airway UR11 are",
    choices: {
      A: "052/97 nm",
      B: "050/47 nm",
      C: "133/85 nm",
      D: "230/97 nm",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)4 or figure HI-15)An appropriate flight level for flight on airway UG1 from ERLANGEN ERL 114.9 (4939N 01109E) to FRANKFURT FFM 114.2 (5003N 00838E) is",
    choices: {
      A: "FL300",
      B: "FL290",
      C: "FL310",
      D: "FL320",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(HI)4 or figure HI-16)What is the best route from CLACTON CLN (N51 50.9 E001 09.0) to MIDHURST MID (N51 03.2 W000 37.4)?",
    choices: {
      A: "UR12",
      B: "TRIPO UR1 LAM UR1",
      C: "UR123",
      D: "UB29 LAM UR1",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)1 or figure LO-07)The magnetic course/distance from WALLASEY WAL 114.1 (N53o23 W003o28) to LIFFY (N53o29 W005o30) on airway B1 are",
    choices: {
      A: "279o/114 NM",
      B: "279o/85 NM",
      C: "311o/114 NM",
      D: "311o/85 NM",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart 5AT(HI) or figure HI-17)On airway PTS P from VIGRA (62o34N 006o02E), the initial great circle grid course is",
    choices: {
      A: "353o",
      B: "344o",
      C: "347o",
      D: "350o",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 or figure HI-11)Planning a IFR flight from Paris Charles de Gaulle (N49 00.9 E002 36.9) to London Heathrow (N51 29.2 W000 27.9). Find the average true course from aris to London.",
    choices: {
      A: "330o",
      B: "142o",
      C: "322o",
      D: "343o",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 or figure HI-09)An aeroplane has to fly from Abbeville (50o08.1N 001o51.3E) to Biggin (51o19.8N 00o00.2E)What is the first FL above FL295 that can be flown on an IFR flight plan?",
    choices: {
      A: "FL330",
      B: "FL310",
      C: "FL320",
      D: "FL300",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)5 or figure HI-21)The magnetic course and distance from LIMOGES LMG 114.5 (N45.49 E001.02) to CLERMONT FERRAND CMF 117.5 (N45.47 E003.11) on airway UG22 are",
    choices: {
      A: "046/70 nm",
      B: "067/122 nm",
      C: "113/142 nm",
      D: "094/90 nm",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual 5AT(HI) or figures HI-18_a & HI-18_b)Flying from 80N 170E to 75N 11E. Initial track is 177 grid. What is the initial true track?",
    choices: {
      A: "177",
      B: "357",
      C: "347",
      D: "167",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 or figure HI-14)An aeroplane has to fly from Salzburg (48o00.2N 012o53.6E) to Klagenfurt (46o37.5N 014o33.8E). Which statement is correct?",
    choices: {
      A: "The minimum en-route altitude (MEA) is 13400 ft",
      B: "The minimum grid safe altitude on this route is 13400 ft above MSL",
      C: "The minimum sector altitude (MSA) is 13400 ft",
      D: "The minimum obstacle clearance altitude (MOCA) on this route is 10800 ft above MSL",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 or figure HI-09)An aeroplane has to fly from Abbeville (50o08.1N 001o51.3E) to Biggin (51o19.8N 000o00.2E).What is the distance of this leg?",
    choices: {
      A: "62 NM",
      B: "38 NM",
      C: "64 NM",
      D: "100 NM",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(LO)2 or figure LO-11)The minimum en-route altitude (MEA) that can be maintained continuously on airway G4 from JERSEY JSY 112.2 (49o14¿N 002o03¿W) to LIZAD (49o35¿N 004o20¿W) is",
    choices: {
      A: "FL 140",
      B: "1000 ft MSL",
      C: "FL60",
      D: "2800 ft MSL",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(LO)5 or figure LO-09)The minimum en-route altitude that can be maintained continuously on airway B65/H65 from DOXON (55o27¿N 018o 10¿E) to RONNE ROE 112.0 (55o 04¿N 014o 46¿E) is",
    choices: {
      A: "FL100",
      B: "1000 ft FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "FL60",
      D: "2500 ft",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual STAR 10-2 and instrument approach chart 11-4 ILS/DME Rwy 27R for London Heathrow or figures AP-08 & AP-09)Planning an IFR flight from Paris to London (Heathrow)Name the identifier and frequency of the initial approach fix (IAF) of the BIGZA arrival route",
    choices: {
      A: "EPM; 316 KHz",
      B: "BIG; 115.1 KHz",
      C: "BIG; 115.1 MHz",
      D: "OCK; 115.3 MHz",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 or figure HI-11)Planning a IFR flight from Paris Charles-de-Gaulle (N49 00.9 E002 36.9) to London Heathrow (N51 29.2 W000 27.9). Determine the pre-planning distance by calculating the direct distance plus 10%. The pre-planning distance is",
    choices: {
      A: "188 NM",
      B: "207 NM",
      C: "308 NM",
      D: "218 NM",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual MADRID BARAJAS 10-2B STAR or figure AP-13)For runway 33 arrivals from the east and south, the Initial Approach Fix (IAF) inbound from airway UR10 is",
    choices: {
      A: "VTB",
      B: "CJN",
      C: "CENTA",
      D: "MOTIL",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(HI)5 or figure HI-22)The minimum en-route altitude available on airway UR160 from NICE NIZ 112.4 (43 46N 007 15E) to BASTIA BTA 116.2 (42 32N 009 29E) is",
    choices: {
      A: "FL250",
      B: "FL260",
      C: "FL210 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "FL200",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual SID chart for AMSTERDAM ARNEM (10-3B) or figure AP-14)The route distance from DER 27 to ARNEM is",
    choices: {
      A: "67 NM",
      B: "35 NM",
      C: "59 NM",
      D: "52 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(For this question use Route Manual chart E(HI)4 or figure HI-14)An aeroplane has to fly from Salzburg (48o00.2N 012o53.6E) to Klagenfurt (46.37.5N 014o33.8E). Which statement is correct?",
    choices: {
      A: "The airway UB5 is closed for southbound traffic above FL200",
      B: "The airway UB5 cannot be used, there is one way traffic to the north",
      C: "The airway UB5 can be used for flights to/from Klagenfurt and Salzburg",
      D: "The airway UB5 is closed in this direction except during the weekends",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(LO)1 or figure LO-08)The minimum en-route altitude that can be maintained continuously on airway G1 from STUMBLE 113.1 (5200N 00502W) to BRECON 117.45 (5143N 00316W) is",
    choices: {
      A: "FL80",
      B: "FL110",
      C: "4100 ft AMSL",
      D: "2900 ft AMSL",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart 5 AT(HI) or figure HI-20)What is the initial grid track from Stornoway (N5812.4 W00611.0) to Keflavik (N6400 W02240)?",
    choices: {
      A: "320",
      B: "140",
      C: "313",
      D: "133",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 or figure HI-14)An aeroplane has to fly from Salzburg (48o00.2N 012o53.6E) to Klagenfurt (46o37.5N 014o33.8E). At Salzburg there is stated on the chart D 113.8 SBG. That means",
    choices: {
      A: "VOR/DME with identification SBG frequency 113.8 MHz can be used",
      B: "Only the DME with identification SBG can be used for which frequency 113.8 MHz should betuned, VOR is not available",
      C: "VOR/DME SBG will be deleted in the future and cannot be used for navigation",
      D: "ILS/DME 113.8 MHz of Salzburg airport can be used for navigation",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual Munich STAR charts for MUNICH 10-2A,B or figures AP-17, AP-18 & AP-19)With an easterly surface wind, approaching from the west, to Munich via the TANGO VOR. Which is the best STAR and its associated IAF (Initial Approach Fix).",
    choices: {
      A: "Kempten 2T/BETOS",
      B: "NDG 1T/ROKIL",
      C: "RODING 1R/MOOSBURG",
      D: "AALEN 1T/ROKIL",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(LO)5 or figure LO-10)An appropriate flight level for flight on airway G9 from SUBI SUI 116.7 (52o23N 014o35E) to CZEMPIN CZE 114.5 (52o08N 016o44E) is",
    choices: {
      A: "FL50",
      B: "FL60",
      C: "FL70",
      D: "FL80",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(HI)4 or figure HI-13)The minimum en-route altitude that can be maintained continuously on airway UA34 from WALLASEY WAL 114.1 (53o 23¿N 003o 08¿W) to MIDHURST MID 114.0 (51o 03¿N 000o 37¿W) is",
    choices: {
      A: "FL245",
      B: "FL290",
      C: "5300 ft",
      D: "16800 ft",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to SID chart Paris Charles-de-Gaulle 20-3 or figure AP-03)Planning an IFR-flight from Paris Charles- de-Gaulle to London, SID is ABB 8A.Assume:Variation 3oWTAS 430 ktsW/V 280/40Distance to top of climb 50 (Refer to SID chart Paris Charles-de-Gaulle 20-3 or figure AP-03)Planning an IFR-flight from Paris Charles- de-Gaulle to London, SID is ABB 8A.Assume:Variation 3oWTAS 430 ktsW/V 280/40Distance to top of climb 50 NMDetermine the magnetic course, ground speed and wind correction angle from top of climb to ABB 116.6.",
    choices: {
      A: "MC 169o, GS 450 kt, WCA +4o",
      B: "MC 349o, GS 414 kt, WCA +5o",
      C: "MC 169o, GS 414 kt, WCA +5o",
      D: "MC 349o, GS 414 kt, WCA -5o",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 CAA-Edition, STAR 10-2 and Instrument approach chart 11-4 ILS DME Rwy 27R for London Heathrow or figures HI-09; AP-08 & AP-09)Planning an IFR-flight from Paris to London (Heathrow). Assume:STAR is BIG 2AVariation 5oWEn-route TAS 430 ktsW/V 280/40Descent distance 76 NMDetermine the magnetic course, ground speed and wind correction angle from ABB 116.6 (N50 08.1 E001 51.3) to top of descent.",
    choices: {
      A: "MC 319o, GS 396 kt, WCA -3o",
      B: "MC 141o, GS 396 kt, WCA -3o",
      C: "MC 321o, GS 396 kt, WCA -3o",
      D: "MC 141o, GS 396 kt, WCA +3o",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 CAA-Edition or figure HI-30)An appropriate flight level for flight on airway UR1 from ORTAC (50o 00N 002o00W) to MIDHURST MID 114.0 (51.03N 000o37W) is",
    choices: {
      A: "FL230",
      B: "FL250",
      C: "FL260",
      D: "FL240",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)5 CAA-Edition or figure HI-36)An appropriate flight level for flight on airway UR24 from NANTES NTS 117.2 (47o09N 001o37W) to CAEN CAN (49o10N 000o27W) is",
    choices: {
      A: "FL270",
      B: "FL310",
      C: "FL290",
      D: "FL300",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(LO)2 or figure LO-13)An appropriate flight level for flight on airway B3 from CHATILLON CTL 117.6 (49o08N 003o35E) to CAMBRAI CMB 112.6 (50o14N 003o09E) is",
    choices: {
      A: "FL50",
      B: "FL170",
      C: "FL80",
      D: "FL60",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(LO)6 or figure LO-16)An appropriate flight level for flight on airway W37 from CHEB OKG 115.7 (50o04N 012o24E) to RODING RDG 114.7 (49o02N 012o32E) is",
    choices: {
      A: "FL80",
      B: "F:40",
      C: "FL50",
      D: "FL70",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(LO)6 or figure LO-17)An appropriate flight level for flight on airway R10 from MONTMEDY MMD 109.4 (49o24N 003o08E) to CHATILLON CTL 117.6 (49o08N 003o35E) is",
    choices: {
      A: "FL40",
      B: "FL60",
      C: "FL70",
      D: "FL50",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual Instrument approach charts for ZURICH (10-2, 10-2A, 10-2B) or figures AP-21, AP-22 & AP-23)Aeroplane arriving via route BLM 2Z only, should proceed via which route to EKRON Int?",
    choices: {
      A: "TRA R247 outbound to EKRON int",
      B: "WIL R018 outbound to EKRON int",
      C: "HOC R067 via GOLKE to EKRON int",
      D: "BLM R111 to GOLKE int then TRA R-247 inbound to EKRON int",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual STAR chart for LONDON HEATHROW (10-2D) or figure AP-25)The minimum holding altitude (MHA) and maximum holding speed (IAS) at MHA at OCKHAM OCK 115.3 are",
    choices: {
      A: "7000 ft and 250 kt FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "9000 ft and 250 kt",
      C: "7000 ft and 220 kt",
      D: "9000 ft and 220 kt",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)5 CAA-Edition or figure HI-37)Of the following, the preferred airways routing from MARTIGUES MTG 117.3 (43o23N 005o05E) to ST PREX SPR 113.9 (46o28N 006o27E) above FL245 is",
    choices: {
      A: "UA6 LSA UG52",
      B: "UB282 DGN UB46",
      C: "UB284 VILAR UB28",
      D: "UB28",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 CAA-Edition or figure HI-31)Of the following, the preferred airways routing from CLACTON CLN 114.55 (51o51N 001o09E) to DINARD DIN 114.3 (48o35N 002o05W) above FL245 is",
    choices: {
      A: "UR12 MID UR8 SAM UB11 BARLU UW115",
      B: "UB29 LAM UR1 MID UA34 LILAN UR9",
      C: "UB29 LAM UR1 ORTAC UR14",
      D: "UR12 MID UA47 DPE UA475 SOKMU UH111",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 CAA-Edition or figure HI-32)The magnetic course/distance from DINKELSBUHL DKB 117.8 (49o09N 010o14E) to ERLANGEN ERL 114.9 (49o39N 011o09E) on airway UR11 is",
    choices: {
      A: "050o/47 NM",
      B: "230o/97 NM",
      C: "133o/85 NM",
      D: "052o/97 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(LO)6 or figure LO-14)The magnetic course/distance from GROSTENQUIN GTQ 111.25 (49o00N 006o43E) to LINNA (49o41N 006o15E) on airway R7 is",
    choices: {
      A: "337o/31 NM",
      B: "337o/58 NM",
      C: "337o/46 NM FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "157o/58 NM",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(LO)5 or figure LO-15)The magnetic course/distance from ELBE LBE 115.1 (53o39N 009o36E) to LUNUD (54o50N 009o19E) on airway H12 is",
    choices: {
      A: "352o/72 NM",
      B: "352o/96 NM",
      C: "339o/80 NM",
      D: "339o/125 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(LO)2 or figure LO-13)The magnetic course/distance from CAMBRAI CMB 112.6 (50o14N 003o 09E) to TALUN (49o33N 003o25E) on airway B3 is",
    choices: {
      A: "349o/42 NM",
      B: "169o/42 NM",
      C: "349o/26 NM",
      D: "169o/68 NM",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 CAA-Edition or figure HI-34)The magnetic course/distance from TRENT TNT 115.7 (53o03N 001o40W) to WALLASEY WAL 114.1 (53o23N 003o08W) on airway UR3 is",
    choices: {
      A: "297o/70 NM",
      B: "117o/71 NM",
      C: "297o/57 NM",
      D: "117o/57 NM",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 CAA-Edition or figure HI-32)The magnetic course/distance from TANGO TGO 112.5 (48o37N 009o16E) to DINKELSBUHL DKB 117.8 (49o09N 010o14E) on airway UR11 is",
    choices: {
      A: "052o/50 NM",
      B: "007o/60 NM",
      C: "105o/105 NM",
      D: "132o/43 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)5 CAA-Edition or figure HI-35)The magnetic course/distance from ELBA ELB 114.7 (42o44N 010o24E) to SPEZI (43o49N 009o34E) on airway UA35 is",
    choices: {
      A: "332o/76 NM",
      B: "152o/42 NM",
      C: "322o/60 NM",
      D: "332o/118 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(LO)5 or figure LO-05)The VOR and TACAN on airway G9 at OSNABRUCK (52o12N 008o17E) are",
    choices: {
      A: "NOT frequency paired, and have the same identifier",
      B: "frequency paired, and have the same identifier",
      C: "NOT frequency paired, and have different identifiers",
      D: "frequency paired, and have different identifiers",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 CAA-Edition or figure HI-33)Aeroplanes intending to use airway UR14 should cross GIBSO intersection (50o45N 002o30W) at or above",
    choices: {
      A: "FL140",
      B: "FL160",
      C: "FL200",
      D: "FL250",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual SID chart for ZURICH (10-3) or figure AP-20)Which is the correct ALBIX departure via AARAU for runway 16?",
    choices: {
      A: "ALBIX 7S",
      B: "ALBIX 7A",
      C: "ALBIX 6H",
      D: "ALBIX 6E",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart AMSTERDAM JAA MINIMUMS (10-9X) or figure AP-26)The Radio Altimeter minimum altitude for a CAT 2 ILS DME approach to Rwy 01L is",
    choices: {
      A: "100 ft FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "88 ft",
      C: "300 ft",
      D: "188 ft",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart PARIS CHARLES-DE-GAULLE ILS Rwy 27 (21-2) or figure AP-24)The crossing altitude and descent instruction for a propeller aircraft at COULOMMIERS (CLM) are",
    choices: {
      A: "Cross at FL80 descend to FL70",
      B: "Cross at FL60 and maintain",
      C: "Cross at FL60 descend to 4000 ft",
      D: "Cross at FL70 descend to 4000 ft",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 10-1)The maximum wind velocity (o/kt) shown in the vicinity of MUNICH (48oN 012oE) is",
    choices: {
      A: "290/110",
      B: "300/140",
      C: "300/100",
      D: "300/160",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "The Final Reserve Fuel for aircraft with reciprocating engines should be",
    choices: {
      A: "fuel to fly for 30 minutes",
      B: "fuel to fly for 60 minutes",
      C: "fuel to fly for 45 minutes",
      D: "5 minutes fuel at the holding speed at 1500 ft above the aerodrome in standard conditions",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual E(LO)5 or figure LO-03The NDB at DENKO (52o49¿N 015o50¿E) can be identified on",
    choices: {
      A: "Channel 440, BFO on",
      B: "Channel 440, BFO off",
      C: "Frequency 440 KHZ, BFO off FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "Frequency 440 KHz, BFO on",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual Munich STAR charts for MUNICH 10-2A,B or figures AP-17, AP-18 & AP-19)The correct arrival route and Initial Approach Fix (IAF) for an arrival from the west via TANGO for runway 08 L/R is",
    choices: {
      A: "NDG 1T, IAF ROKIL",
      B: "DKB 1T, IAF ROKIL",
      C: "AALEN 1T, IAF ROKIL",
      D: "AALEN 1T, IAF MBG",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart NAP)On a direct great circle course from REYKJAVIK (64o10¿N 020o00¿W) to AMSTERDAM (52o32¿N 004o50¿E) theaverage true course, anddistance, are",
    choices: {
      A: "(a) 118o (b) 1095 NM",
      B: "(a) 31o (b) 1824 NM",
      C: "(a) 131o (b) 1095 NM",
      D: "(a) 140o (b) 1824 NM",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(LO)1)An appropriate flight level for flight on airway A2 from TALLA 113.8 TLA (55o30¿N 003o21¿W) to DEAN CROSS 115.2 DCS (54o43¿N 003o20¿W) is",
    choices: {
      A: "FL100",
      B: "FL80",
      C: "FL90",
      D: "FL50",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(LO)1)The distance on airway B4 from POLE HILL 112.1 POL (53o45¿N 002o06¿W) to SHAPP (54o30¿N 002o38¿W) is",
    choices: {
      A: "30 NM",
      B: "31 NM",
      C: "51 NM",
      D: "49 NM",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(LO)1)The magnetic course from DEAN CROSS 115.2 DCS (54o43¿N 003o20¿W to NEWCASTLE 114.25 NEW (55o02¿N 001o41¿W) on airway W911D is",
    choices: {
      A: "077o",
      B: "083o",
      C: "257o",
      D: "263o",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(LO)1)The magnetic course/distance from TALLA 113.8 TLA (55o30¿N 003o21¿W) to DEAN CROSS 115.2 DCS (54o43¿N 003o20¿W) on airway A2 is",
    choices: {
      A: "185o/18 NM",
      B: "185o/47 NM",
      C: "005o/47 NM",
      D: "005o/18 NM",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(LO)1)The minimum en-route altitude (MEA) that can be maintained continuously on advisory route W9110 from NEWCASTLE 114.25 NEW (55o02¿N 001o24¿W) to DEAN CROSS 115.2 DCS (54o43¿N 003o20¿W) is",
    choices: {
      A: "4520 ft",
      B: "FL150",
      C: "4700 ft",
      D: "FL50",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(LO)1)The minimum en-route altitude (MEA) that can be maintained continuously on airway B226 from TALLA 113.8 TLA (55o30N 003o21¿W) to reporting point ANGUS (56o42¿N 003o03¿W) is",
    choices: {
      A: "FL70",
      B: "FL80",
      C: "5000 ft",
      D: "5500 ft",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(LO)1)The minimum en-route altitude (MEA) that can be maintained continuously on airway L602 from TALLA 113.8 TLA (55o30N 003o21¿W) to NEWCASTLE 114.25 new (55o02¿N 001o24¿W) is",
    choices: {
      A: "3100 ft",
      B: "FL100",
      C: "3900 ft",
      D: "FL200",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(LO)1)The radio navigation aid at LEEDS BRADFORD (53o52¿N 001o39¿W) is",
    choices: {
      A: "an NDB, frequency 402.5 KHz, NOT continuous operation",
      B: "a TACAN, channel 402.5",
      C: "a fan marker, frequency 402.5 KHz",
      D: "an NDB, frequency 402.5 KHz, continuous operation",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(LO)1The radio navigation aid at ST. ABBS (55o55¿N 002o12¿W) is",
    choices: {
      A: "a VOR only, frequency 112.5 MHz",
      B: "an NDB, frequency 112.5 MHz",
      C: "a TACAN, channel 112.5",
      D: "a VORDME, frequency 112.5 MHz",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(LO)1)What is the Minimum En-route Altitude (MEA) on airway W911D from DEAN CROSS 115.2 DCS (54o43¿N 003o20¿W to NEWCASTLE 114.25 NEW (55o02¿N 001o41¿W)?",
    choices: {
      A: "FL50",
      B: "FL150",
      C: "4700 ft",
      D: "4200 ft",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(LO)1)The magnetic course/distance from DEAN CROSS 115.2 DCS (54o43¿N 003o20¿W to POLE HILL 112.1 POL (53o45¿N 002o06¿W) on airway A2 is",
    choices: {
      A: "329o/53 NM",
      B: "143o/53 NM",
      C: "155o/73 NM",
      D: "149o/73 NM",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(LO)1)What is the Maximum Authorised Altitude (MMA) on airway W911D from DEAN CROSS 115.2 DCS (54o43¿N 003o20¿W to NEWCASTLE 114.25 NEW (55o02¿N 001o41¿W)?",
    choices: {
      A: "4200 ft",
      B: "FL50",
      C: "4700 ft",
      D: "FL 150",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1The initial magnetic course from INVERNESS 109.2 INS (57o32¿N 004o03¿W) direct to TIREE 117.7 TIR (59o30¿N 006o53¿W) is",
    choices: {
      A: "230o",
      B: "237o",
      C: "218o",
      D: "244o",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)The initial magnetic course from TIREE 117.7 TIR (59o30¿N 006o53¿W) direct to INVERNESS 109.2 INS (57o32¿N 004o03¿W) is",
    choices: {
      A: "236o",
      B: "056o",
      C: "048o",
      D: "064o",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)The initial magnetic course from TIREE 117.7 TIR (59o30¿N 006o53¿W) direct to STORNOWAY 115.1 STN (58o12¿N 006o11¿W) is",
    choices: {
      A: "003o",
      B: "192o FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "011o",
      D: "019o",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)The initial true course from INVERNESS 109.2 INS (57o32¿N 004o03¿W) direct to TIREE 117.7 TIR (59o30¿N 006o53¿W) is",
    choices: {
      A: "244o",
      B: "237o",
      C: "218o",
      D: "230o",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)The initial true course from TIREE 117.7 TIR (59o30¿N 006o53¿W) direct to INVERNESS 109.2 INS (57o32¿N 004o03¿W) is",
    choices: {
      A: "062o",
      B: "054o",
      C: "048o",
      D: "236o",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)The initial true course from TIREE 117.7 TIR (59o30¿N 006o53¿W) direct to STORNOWAY 115.1 STN (58o12¿N 006o11¿W) is",
    choices: {
      A: "192o",
      B: "011o",
      C: "019o",
      D: "003o",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)The direct distance from TIREE 117.7 TIR (59o30¿N 006o53¿W) to INVERNESS 109.2 INS (57o32¿N 004o03¿W) is",
    choices: {
      A: "204 NM",
      B: "112 NM",
      C: "192 NM",
      D: "360 km FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Esbjerg Aerodrome chart (19-2) or figure AP-32)What are the dimensions of runway 08/36 at Esbjerg?",
    choices: {
      A: "8530 ft x 45 ft",
      B: "8530 m x 45 m",
      C: "2600 m x 45 m",
      D: "2600 ft x 148 ft",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Esbjerg Aerodrome chart (19-2) or figure AP-32)What is the position of the Aerodrome Reference Point at Esbjerg?",
    choices: {
      A: "55o31.6¿N 008o33.1¿W",
      B: "55o31.6¿N 008o33.1¿E",
      C: "55o32.2¿N 008o34.9¿E",
      D: "55o32.2¿N 008o34.9¿W",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Esbjerg Area chart (19-1) or figure AP-33)What is the course and distance from Locator HP to the threshold of Runway 08?",
    choices: {
      A: "080o (T)/4.2 km",
      B: "080o (T)/4.2 nm",
      C: "080o (M)/4.2 km",
      D: "080o (M)/4.2 nm",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual TRM, Esbjerg Area chart (19-1) or chrt E(LO)5).What is the track and distance shown on the chart from VOR/DME SKR (N55o13.8 E009o12.90 to overhead Esbjerg (N55o31.6 E008o33.2)?",
    choices: {
      A: "308o (T) /29 NM",
      B: "308o (M)/29 Km",
      C: "308o (M)/29 NM",
      D: "308o (T)/29 Km",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)An aircraft has to fly from TALLA (55o30¿N 003o21¿W) to FINDO (56o22¿N 003o28¿W). Excluding RVSM, what is the first flight level above FL400 that can be flown on this leg?",
    choices: {
      A: "FL410",
      B: "FL400",
      C: "FL430",
      D: "FL420",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)An aircraft has to fly from TIREE (56o29¿N 006o53¿W) direct to ABERDEEN (57o19¿N 002o16¿W). What is the minimum grid safe altitude for this route?",
    choices: {
      A: "5700 ft",
      B: "4400 ft",
      C: "3600 ft",
      D: "5600 ft",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)An aircraft is flying Northbound on the direct route from DEAN CROSS that passes through position 57o00¿N 003o10¿W. Excluding RVSM, what is the first flight level above FL400 that can be flown on this route?",
    choices: {
      A: "FL420",
      B: "FL440",
      C: "FL430",
      D: "FL450",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)An aircraft is flying towards GOW (55o52¿N 004o27W) on airway UN615 prior to an arrival in the London FIR. According to the information on the chart, what is the most appropriate radio frequency to obtain the latest meteorological information for the London area?",
    choices: {
      A: "115.4",
      B: "129.22",
      C: "126.60",
      D: "133.67",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)What is the average magnetic course from ABERDEEN (57o19¿N 002o16¿W) to TIREE (56o30¿N 006o53¿W)?",
    choices: {
      A: "267o",
      B: "253o",
      C: "247o",
      D: "260o",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)What navigation aid(s) is/are available to civil aircraft at the military airfield of Kinloss (57o40¿N 003o32¿W)?",
    choices: {
      A: "VOR and DME on frequency 109.8N TACAN range and bearing on Channel 35",
      B: "The bearing element only of TACAN on VOR frequency 109.8 MHz",
      C: "The range element only of TACAN on DME frequency 109.8 MHz",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(For this question, use Annex 033-006 or Route Manual chart E(HI)1)An aircraft has to fly from Glasgow (55o52¿N 004o27¿W) to Benbecula (57o29¿N 007o22¿W), cruising at 320 kt TAS. Assuming a headwind of 40 kt and cruise fuel consumption of 2300 kg/h, what is the fuel consumption for this sector?",
    choices: {
      A: "978 kg",
      B: "1117 kg",
      C: "889 kg",
      D: "2300 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)An aircraft has to fly from GOW (55o52¿N 004o27¿W) to INS (57o33¿N 004o03¿W) routing via FINDO (56o22¿N 003o28¿W). For Flight Planning purposes, what is the track distance?",
    choices: {
      A: "117 NM",
      B: "44 NM",
      C: "73 NM",
      D: "102 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)An aircraft has to fly from beacon BWN (57o29¿N 007o22¿W) to beacon ADN(57o19¿N 002o16¿W). What is the average True course for this route?",
    choices: {
      A: "109o FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "101o",
      C: "281o",
      D: "093o",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)An aircraft has to fly from ALMA (55o25¿N 013o34¿E) to BACKA (57o33¿N 011o59¿E) on airways UB45 UH40 and UA9. What is the total track distance for this flight?",
    choices: {
      A: "119 NM",
      B: "143 NM",
      C: "105 NM",
      D: "146 NM",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)An aircraft has to fly from the beacon TNO (55o46¿N 011o26¿E) on a direct route to the beacon HAR (57o50¿N 012o42¿E). What is the magnetic track and distance for this flight?",
    choices: {
      A: "007o/131 NM",
      B: "029o/69 NM",
      C: "013o/117 NM",
      D: "018o/129 NM",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)An aircraft has to fly from Aalborg (57o06¿N 010o00¿E) to Bottna (57o45¿N 013o48¿E) on airway UR46. What is the track distance for this flight?",
    choices: {
      A: "260 NM",
      B: "70 NM",
      C: "130 NM",
      D: "60 NM",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)An aircraft has to fly on airways from ODIN (55o35¿N 010o39¿E) to BOTTNA 57o45¿N 013o48¿E). Which of the following is an acceptable route for this light?",
    choices: {
      A: "ODN UR156 SKA UH42 BTD",
      B: "ODN UR12 PER UG5 SHG UH42 BTD FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "ODN UR156 LAVD17 CINDY UR46 BTD",
      D: "ODN UR12/UN872 HIL UV30 BTD",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)An aircraft has to fly on airways from SKARA (58o23¿N 013o15¿E) to SVEDA 56o10¿N 012o34¿E). Which of the following is an acceptable route for this light?",
    choices: {
      A: "SKA UR156 LAV UB45 SVD",
      B: "SKA UB44 BAK UA9 PAPER UH40 SVD",
      C: "SKA UH42 BTD UV30 HIL UR1 SVD",
      D: "SKA DCT SVD",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)An aircraft is flying from BACKA (57o33¿N 011o59¿E) to BOTTNA (57o45¿N 13o48¿E) on airway UR46. Which of the following would be a useful cross-reference to check the airway intersection CINDY?",
    choices: {
      A: "BAK078/BTD258",
      B: "HAR161/LAV092",
      C: "LAV D17",
      D: "BTD D60",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2What is the meaning of the chart information for the beacon(s) at position 55o59¿N 014o06¿E?",
    choices: {
      A: "NDB, ident OE and VOR, ident VEY",
      B: "NDB only, ident OE",
      C: "VOR only, ident VEY",
      D: "Doppler VOR, ident SUP and NDB, ident OE",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)An aircraft hs to fly from ALMA (55o25¿N 013o34¿E) to PETER (56o50¿N 013o35¿E). Excluding RVSM, what is the lowest Flight Level above FL400 that can be flown on an IFR flight on this leg?",
    choices: {
      A: "FL430",
      B: "FL410",
      C: "FL420 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "FL440",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)An aircraft has to fly from ODIN (55o35¿N 030o39¿E) to LANDVETTER (57o39¿N 012o17¿E). What is the magnetic course on this route?",
    choices: {
      A: "204o",
      B: "024o",
      C: "052o",
      D: "156o",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)An aircraft has to fly from SHILLING (57o33¿N 014o00¿E) to ALMA (55o25¿N 013o34¿E). What is the minimum grid safe altitude for this route?",
    choices: {
      A: "2700 ft",
      B: "3200 ft",
      C: "2500 ft",
      D: "2900 ft",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)An aircraft has to fly on airways from ALMA (55o25¿N 013o34¿E) to SHILLING (57o33¿N 014o00¿E). What is the distance between these two points?",
    choices: {
      A: "86 NM",
      B: "131 NM",
      C: "45 NM",
      D: "60 NM",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)An aircraft has to fly on airways from SVEDA (56o10¿N 012o34¿E) to SKARA (58o23¿N 013o15¿E). Which of the following is the correct route?",
    choices: {
      A: "SVD UB45 LAV UR156 SKA",
      B: "SVD UH40 PAPER UA9 BAK UB44 SKA",
      C: "UR1 HIL UV30 BTD UH42 SKA",
      D: "SVD UH40 PAPER UA9 BAK UR156 SKA FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)What is the meaning of the chart information for the navaid(s) LANDVETTER (57o39¿N 012o17¿E)?",
    choices: {
      A: "VORDME with identification LAV available on frequency 114.6 MHz",
      B: "DME only with identification LAV available on frequency 114.6 MHz",
      C: "Doppler VOR only with identification LAV available on frequency 114.6 MHz",
      D: "VORDME and NDB with identification LAV available on frequency 114.6 MHz",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)The radio navigation aid(s) at (57o32¿N 004o03¿W) is/are",
    choices: {
      A: "VORDME, frequency 109.2 KHz",
      B: "VOR, frequency 109.2 MHz, for INS update only",
      C: "VOR, frequency 109.2 MHz, no DME available",
      D: "VORDME, frequency 109.2 MHz",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)The identifier of the radio navigation aid at 56o06¿N 012o15¿E) is",
    choices: {
      A: "WX",
      B: "NOA",
      C: "SVD04",
      D: "NORA",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)The identifier of the radio navigation aid at (56o07¿N 012o58¿E) is",
    choices: {
      A: "SVD03",
      B: "SVD",
      C: "AOR",
      D: "ASTOR",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chrt E(HI)2)The radio navigation aid at (57o45¿N 013o48¿E) is a",
    choices: {
      A: "VOR, frequency 355 MHz",
      B: "NDB, frequency 355 MHz",
      C: "VOR, frequency 355 KHz",
      D: "NDB, frequency 355 KHz",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)The radio navigation aid(s) at (55o26¿N 011o38¿E) is/are",
    choices: {
      A: "NDB, frequency 112.8 KHz",
      B: "VORDME, frequency 128.15 MHz",
      C: "VORDME, frequency 128.75 MHz",
      D: "VORDME, frequency 112.8 MHz",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)The radio navigation aid(s) at (56o09¿N 013o14¿E) is/are",
    choices: {
      A: "VOR-DME, frequency 116.2 MHz",
      B: "VOR-DME, frequency 116.9 MHz",
      C: "VOR, frequency 116.2 MHz",
      D: "VOR, frequency 116.9MHz",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2)The radio navigation aid(s) at (56o17N 010o47¿E) is/are",
    choices: {
      A: "VORDME, frequency 374 KHz",
      B: "NDB, frequency 374 KHz, for Temporary Use (TU)",
      C: "VOR, frequency 374 MHz",
      D: "NDB, frequency 374 KHz",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)2The radio navigation aid(s) at (55o59¿N 014o06¿E) is/are",
    choices: {
      A: "VOR-DME, frequency 116.9 MHz FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "NDB, frequency 116.9 KHz",
      C: "VOR, frequency 363 KHz",
      D: "NDB, frequency 363 KHz",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual, London Heathrow, pages 10-2, 11-4 or figures AP-08, AP-09)Using STAR Biggin Two Alfa for ILS DME Rwy 27R. What is the Initial Approach Fix?",
    choices: {
      A: "Epsom, 316",
      B: "Biggin, 115.1",
      C: "IRR, 110.3",
      D: "Ockham, 115.3",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual chart 5AT(HI)Route PTS P from VIGRA (N62o33 E006o02) to ADOBI (N68o30 E003o00). What is the grid track?",
    choices: {
      A: "353o",
      B: "344o",
      C: "173o",
      D: "349o",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)4What is the mean true course from Paris Charles-de-Gaulle to London Heathrow?",
    choices: {
      A: "321 T",
      B: "312 T",
      C: "322 M",
      D: "142 T",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual MADRID, BARAJAS page 11-1 or figure AP-15)ILS DME Rwy 33. What is the minimum altitude for glide slope interception?",
    choices: {
      A: "3500 ft",
      B: "4000 ft",
      C: "2067 ft FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "1567 ft",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual Paris Charles-de-Gaulle SID chart 20-3 or figure AP-03)What is the distance to Abbeville on SID ABB 8A?",
    choices: {
      A: "72 nm",
      B: "74 nm",
      C: "72.5 nm",
      D: "74.5 nm",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual AMSTERDAM SCHIPOL 11-6 or figure AP-07)ILS DME RWY 22. Complete the blanks for the missed approach:Turn on track climbing to",
    choices: {
      A: "left, 005, 2000¿ (2012¿)",
      B: "left, 266, 2000¿ (2102¿",
      C: "right, 240, 2000¿ (2011¿)",
      D: "left, 160, 2000¿ (2014¿)",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(H)3)Are the VOR and TACAN navaids at OSNABRUCH (N52 12 E008 17) co- located?",
    choices: {
      A: "Yes",
      B: "VOR/DME only",
      C: "VOR/NDB only",
      D: "No",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)4)For a flight from Paris Charles-de-Gaulle to London Heathrow, what is the average true course?",
    choices: {
      A: "320",
      B: "300",
      C: "120",
      D: "140",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)5)OSNABRUCH VOR and TACAN (52 12N 008 17E). What can be said about the VOR and TACAN?",
    choices: {
      A: "They are frequency paired",
      B: "They are not frequency paired",
      C: "They are frequency paired and have the same ident",
      D: "They are not frequency pai4red and have different idents",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart 5 AT (HI)The initial true course from A (65oN 006oE) to C (62oN 020oW) is",
    choices: {
      A: "272o",
      B: "266o",
      C: "256o",
      D: "246o",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)5)This chart is a projection with a scale of",
    choices: {
      A: "Lambert Conformal Conic, 1 cm = 14.60 km",
      B: "Transverse Mercator, 1 inch = 15 NM",
      C: "Mercator, 1 inch = 20 NM",
      D: "Lambert Conformal Conic, 1 cm = 10.95 km",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)6)Position NESLA at (N49o48.6 E002o44.4) is a",
    choices: {
      A: "Compulsory reporting point on both G40 and A5",
      B: "Non-compulsory reporting point on both G40 and A5",
      C: "Compulsory reporting point G40 only",
      D: "Non-compulsory reporting point on G40 only",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)5)On what frequency could you expect to receive plain language in- flight weather information for Amsterdam?",
    choices: {
      A: "123.70 MHz FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "126.20 MHz",
      C: "113.95 MHz",
      D: "124.30 MHz",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)6While flying IFR on A5 between PERON (N49o54.8 E002o50.4) and CAMBRAI (N50o13.7 E003o09.1) the highest suitable ICAO cruising level would be?",
    choices: {
      A: "FL120",
      B: "FL150",
      C: "FL180",
      D: "FL190",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)6You plan to fly at FL180 from DRESDEN (N51o00.9 E013o35.9) to BAROM (N50o02.5 E010o43.9) when ED(R)-208 is active, your expected routing is",
    choices: {
      A: "DRN Z715 BAROM",
      B: "DRN Z715 DCT BAROM",
      C: "As directed by ATC",
      D: "DRN A19 BAROM",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)5)Flying westbound overhead DOXON (N55o26.9 E018o10.) you fly from into",
    choices: {
      A: "Warsaw FIR (ICAO code EPWW), Riga FIR (ICAO code EVRR)",
      B: "Latvia, Poland",
      C: "Riga FIR (ICAO code EVRR), Malmo FIR (ICAO code ESMM)",
      D: "Riga FIR (ICAO code EVRR), Warsaw FIR (ICAO code EPWW)",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)5)To positively identify the DENKO (N52o49.0 E015o50.1) NDB you must ensure the following radio/navigation equipment is on",
    choices: {
      A: "The ADF with the Beat Frequency Oscillator (BFO) off",
      B: "The VOR/DME",
      C: "Radio tuned to 134.22 MHz FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "The ADF with the Beat Frequency Oscillator (BFO) on",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)6)Overhead STRASBOUORG (N48 30.4 E007 34.4) the Grid MORA is?",
    choices: {
      A: "FL57",
      B: "5500¿",
      C: "5700¿",
      D: "5700m",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)6)Overhead PRAGUE (N50 05.8 E014 15.8) you should expect to communicate with Prague Control/Radar on",
    choices: {
      A: "112.60 MHz",
      B: "127.90 MHz",
      C: "120.47 MHz",
      D: "134.00 MHz",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)5)You are flying along R12 on track heading 030o (M) towards HELGOLAND (N54 11.1 E007 54.6) and you have 30 NM to run, your RMI indicates a QDM of to HELGOLAND",
    choices: {
      A: "030o",
      B: "045o",
      C: "225o",
      D: "054o",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)4)Your aircraft registered in the UK is outbound from London towards New York via UG1 and Shanwick CTA/FIR, prior to crossing W002 what should you have obtained",
    choices: {
      A: "Airways clearance from London on 133.60 MHz",
      B: "Oceanic entry clearance on 133.80 MHz",
      C: "Oceanic entry clearance on 123.95 MHz",
      D: "Oceanic entry clearance on 127.65 MHz",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)4)You are cleared to route LANDS END (N50o08.1W 005o38.2) direct to HONILY (N52o21.4 W001o39.7) you estimate LANDS END at 09:57.TAS is 500 ktW/V is 270o (M)/50 ktWhat is your mean magnetic track and estimate for HONILY",
    choices: {
      A: "055o, 1019",
      B: "048o, 1019",
      C: "053o, 1005",
      D: "048o, 1021",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual LONDON AREA chart)You are required to hold at BOVINGDON (N51 43.6 W000 33.0) however, the VOR is unserviceable what procedure should now follow?",
    choices: {
      A: "Enter the BOVVA alternate hold which is on the 141o radial at 37 DME BIGGIN",
      B: "Enter the BOVVA alternate hold which STARTS AT 32 DME BIGGIN on 141o QDM",
      C: "Enter the BOVVA alternate hold which starts at 37 DME BIGGIN on 131o QDM",
      D: "Ask ATC for radar vectors instead",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)4What navigation aids are available at CLACTON (N51o50.9 E001o09.0)?",
    choices: {
      A: "VOR/DME and NDB always",
      B: "NDB only",
      C: "VOR/DME and NDB only when the VOR/DME is unserviceable",
      D: "VOR/DME when the NDB is unserviceable",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(LO)6)Regarding GUTERSLOH (N51o55 E008o18) it is a airport within class airspace, with an airfield elevation of AMSL",
    choices: {
      A: "Military/E/236 ft",
      B: "Civil/E/236 ft",
      C: "Military/A/236 ft",
      D: "Military/E/236 ft",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)4)Regarding restricted airspace EG(D)-056 at (N50o05 W000o50) it is a",
    choices: {
      A: "Permanently active danger area from sea level up to FL550",
      B: "Danger area from sea level up to 55,000 ft activated by NOTAM",
      C: "Restricted area from sea level up to 55,000 ft activated by NOTAM",
      D: "Permanently active danger area from sea level up to 55,000 ft",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)4)How could you confirm your position at SKESO (N49o49.5 W003o02.0) if BHD is unserviceable?",
    choices: {
      A: "339o QDR at 122 DME DIN",
      B: "331o QDR at 29 DME GUR",
      C: "339o QDM at 122 DME DIN",
      D: "331o QDM at 29 DME GUR",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)4)The initial magnetic track and total distance from ROLAMPONT (N47o54.4 E005o15.0 to MONUR (N49o51.6 E002o47.3) along UB4 are",
    choices: {
      A: "322o and 99 nm",
      B: "328o and 53 nm",
      C: "321o and 69 nm",
      D: "322o and 152 nm",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual chart E(HI)5)Flying eastbound between BOLOGNA (N44o32.2 E011o17.5) and ANCONA (N43o35.2 E013o28.3) what is the minimum ICAO IFR cruising level?",
    choices: {
      A: "FL250",
      B: "FL310",
      C: "FL260",
      D: "FL330",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual MADRID BARAJAS 10-3H or figure AP-34)You are cleared on a NAVAS THREE DELTA departure after passing ARGAS what is the maximum IAS in the turn to NVS and at what level should you be by NVS",
    choices: {
      A: "230 kt, 4000 ft FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "250 kt, 4000 ft",
      C: "230 kt, FL80 or above",
      D: "250 kt, FL80 or above",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual chart E(LO)5)The solid green symbol 10 NM south west of EELDE (N53 09.8 E006 40.0) is",
    choices: {
      A: "A VOR/DME with a Morse ident of EEL",
      B: "An NDB with a Morse ident of VZ",
      C: "A fan marker with a Morse ident of VZ",
      D: "A fan marker with a Morse ident of DN",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual MUNICH 10-2B or figure AP-19)Standard arrival AALEN ONE TANGO with runway 25R in use, therefore your route and track miles to the IAF are expected to be",
    choices: {
      A: "AALEN - WLD - ROKIL - MBG, 90 nm",
      B: "AALEN - WLD - ROKIL, 51 nm",
      C: "AALEN - WLD - ROKIL, 124 nm",
      D: "WLD - ROKIL, 10 nm",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual ZURICH 11-2 or figure AP-11)The MSA is based on the and is to the south east of the reference point",
    choices: {
      A: "Aerodrome reference point, 8600 ft",
      B: "KOLTEN VOR, 8600 ft",
      C: "Aerodrome reference point, 5300 ft",
      D: "KLOTEN VOR, 4400 ft",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual AMSTERDAM SCHIPOL 11-3A or figure AP-36)The touchdown elevation for runway 27 is",
    choices: {
      A: "12 ft above mean sea level",
      B: "11 ft above mean sea level FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "11 ft below mean sea level",
      D: "12 ft below mean sea level",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual LONDON 11-4 or figure AP-09)The frequency, identification and localiser final approach QDM for runway 27R are",
    choices: {
      A: "110.3 MHz, IRR, 274o",
      B: "109.5 MHz, ILL, 274o",
      C: "110.3 MHz, IRR, 094o",
      D: "113.6 MHz, LON, 094o",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual charts E(LO)5 and 6)It is August and you are flying overhead Latvia at 02.00 Latvia standard time.What is the correct UTC time?",
    choices: {
      A: "0500 hrs",
      B: "1400 hrs",
      C: "2300 hrs",
      D: "2400 hrs",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual MADRID BARAJAS 11-1 or figure AP-15)The final approach fix is from the runway 33 displaced threshold",
    choices: {
      A: "D1.1",
      B: "D10.7",
      C: "D7.1",
      D: "D4.7",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual AMSTERDAM SCHIPOL 13-5 or figure AP-37)When carrying out the procedure turn in a category A aeroplane what outbound QDR should you fly",
    choices: {
      A: "122o",
      B: "140o",
      C: "266o",
      D: "091o FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual MUNICH 11-4 or figure AP-01)If the glide scope was out while carrying out an ILS approach to runway 26R when 4.0 DME your recommended altitude is",
    choices: {
      A: "1001 ft",
      B: "2660 ft",
      C: "2450 ft",
      D: "1211 ft",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual chart E(HI)4)You are flying overhead TANGO (N48o37.2 E009o15.6) at 09.47 maintaining TAS of 480 kt experiencing a 50 kt headwind component while routing UG313 KPT UG60 BRENO UA12 BZO. Your estimate for the LOVV/LIMM FIR boundary is?",
    choices: {
      A: "0958 hrs",
      B: "0956 hrs",
      C: "1005 hrs",
      D: "1015 hrs",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual chart E(LO)5)The airspace ED(R)-74 centered on N52o25 E011o30 is usually active",
    choices: {
      A: "From ground to 39000 ft AMSL, Monday 0700 to Friday 1800 UTC",
      B: "From MSL to FL39, Monday to Friday 0700 ¿ 1900 LT",
      C: "From ground to 3900 ft AMSL, Monday 0700 to Friday 1800 LT",
      D: "Activated only by NOTAM",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 10-3)Flying north bound just out of Moscow at FL120. What sort of in-flight weather hazard might be encountered?",
    choices: {
      A: "None",
      B: "Moderate icing and turbulence",
      C: "Moderate icing and severe turbulence",
      D: "Severe icing and moderate turbulence",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual ¿ chart (LO)5)Regarding airway G5 between HAMBURG (N53 41.1 E010 12.3) and GEDSER (N54 37.1 E011 56.0) it is true to say",
    choices: {
      A: "The total distance is 82 nm, FL 180 is a suitable IFR level",
      B: "The total distance is 82 nm, FL 170 is a suitable IFR level",
      C: "The total distance is 60 nm, FL 180 is a suitable IFR level",
      D: "The total distance is 60 nm, FL 170 is a suitable IFR level",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual chart E(HI)5)Who should you make your position report to on passing LYON (N45 43.5 E005 05.4) if you are maintaining FL350 northwest bound along UA2",
    choices: {
      A: "Marseille control on 132.25 MHz",
      B: "Marseille control on 133.42 MHz",
      C: "Marseille control on 134.10 MHz",
      D: "Marseille control on 125.85 MHz",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual chart E(LO)6)The symbol at BOULOGNE (N50 37.5 E001 54.5) has the meaning",
    choices: {
      A: "VOR/DME ON 113.80 MHz and a compulsory point",
      B: "VOR on 113.80 MHz and a compulsory reporting point",
      C: "VOR on 13.80 MHz and on request reporting point",
      D: "A compulsory reporting point with no associated navigation aid",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual chart E(HI)4)To the east of Koksy (51o06N 002o39E)",
    choices: {
      A: "Airway UJ 34 is available not below FL300",
      B: "A plain language inflight weather service is available on 127.8 MHz",
      C: "Maastricht Control/Radar is the Control Service for use within the portrayed boundaries belowFL245",
      D: "Brussels Control is the Control Service for use within the portrayed boundaries at FL245 andabove",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual chart E(LO)1)The altimeter setting to be used is",
    choices: {
      A: "QNE",
      B: "QNH until above transition level thereafter QNE",
      C: "QNH until above transition altitude thereafter QNE",
      D: "QNE until below transition altitude thereafter QNH",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual chart E(HI)4)Airway UL3 at GIBSO intersection (50o45N 002o30W)",
    choices: {
      A: "Is available east bound only",
      B: "Is available at 1000 LT on a public holiday",
      C: "Is available west bound to Gibso routing thereafter via UR14 below FL245",
      D: "Is a Diversionary Route only",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual MADRID BARAJAS (10-2B) or figure AP-13)The IAF for runway 33 arrivals from Airway A869 is",
    choices: {
      A: "CJN",
      B: "ADUXO",
      C: "A frequency paired VOR and DME",
      D: "Both A and C are correct",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual Munich SID (10-3D) or figure AP-10)Pilots departing Munich via a KPT 5S departure",
    choices: {
      A: "When airborne should contact Munich Departure on 127.95",
      B: "Should climb to FL70",
      C: "May climb to FL110",
      D: "Should remain below transition altitude 5000 feet until otherwise instructed by ATC",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual Paris Charles-de-Gaulle STAR chart (20-2) or figure AP-04)Turboprop aircraft arriving via Chievres should expect",
    choices: {
      A: "A CIV 1P arrival crossing the IAF at FL110 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "A CIV 1P arrival crossing the IAF at FL60",
      C: "A CIV 1W arrival crossing the IAF at FL110",
      D: "A CIV 1W arrival crossing the IAF at FL80",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual chart E(HI)4)An appropriate flight level for flight on airway UR106 from Rambouillet (N48o39.2 E001o59.7) is",
    choices: {
      A: "FL310",
      B: "FL290",
      C: "FL300",
      D: "FL320",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual MUNICH ILS Rwy 26R (11-4) or figure AP-01)The height of the aircraft at the Final Approach Fix (FAF) for the ILS runway 26R is",
    choices: {
      A: "1649 feet",
      B: "1850 feet",
      C: "3551 feet",
      D: "5000 feet",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual MUNICH ILS Rwy 26R (11-4) or figure AP-01) DMN is a",
    choices: {
      A: "NDB facility",
      B: "ILS facility with paired DME reading zero nm at runway threshold",
      C: "VOR facility with paired DME reading zero nm at runway threshold",
      D: "DME facility reading 1 nm at runway threshold",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual AMSTERDAM SCHIPOL ILS/DME Rwy 22 (11-6) or figure AP-07)The intermediate fix is shown at",
    choices: {
      A: "D6.0 SPL VOR",
      B: "D6.2 SCH ILS",
      C: "D9.9 SPL VOR FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "11.7 SPL VOR",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual LONDON HEATHROW ILS DME Rwy 09R (11-1A) or figure AP-39)The height indicated by the radio altimeter at DA for a CAT II equipped aircraft is",
    choices: {
      A: "100 ft",
      B: "175 ft",
      C: "150 ft",
      D: "225 ft",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual Munich NDB DME RW 26L (16-3) or figure AP-02)The frequency and identifier of the NDB for the published approach are",
    choices: {
      A: "400 MSW",
      B: "338 MNW",
      C: "108.6 DMS",
      D: "112.3 MUN",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual Munich NDB DME RW 26L (16-3) or figure AP-02)The missed approach procedure should be executed at or before",
    choices: {
      A: "0.5 nm from runway 26L threshold",
      B: "1.5 nm from runway 26L threshold",
      C: "D1.5 DMS",
      D: "Both A and C are correct",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual MUNICH ILS Rwy 08R (11-2) or figure AP-35)The lowest published authorised RVR for an ILS approach, glide slope out, all other aids serviceable, aeroplane category A, is",
    choices: {
      A: "1500 m",
      B: "600 m",
      C: "800 m",
      D: "720 m",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual MUNICH ILS Rwy 08R (11-2) or figure AP-35)The highest Minimum Safe Altitude (MSA) providing 1000 feet clearance from obstructions within a radius of 25 nm centred on the MNW locator is , while the highest portrayed terrain high point or man-made structure in the chart plan view is . Answers",
    choices: {
      A: "3200 feet, 2631 feet",
      B: "3200 feet, 3700 feet",
      C: "3700 feet, 2631 feet",
      D: "3700 feet, 3200 feet",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Manual ¿ chart NAP)Given an initial true heading at Shannon of 270o and a compass deviation of +3o the corresponding compass heading would be",
    choices: {
      A: "265o",
      B: "273o",
      C: "275o",
      D: "281o",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "A public transport aeroplane with reciprocating engines is flying from PARIS to LYON. The final reserve corresponds to",
    choices: {
      A: "45 minutes at holding speed",
      B: "2 hours at cruise consumption",
      C: "1 hour at holding speed",
      D: "30 minutes at holding speed",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "A turbine engined aircraft burns fuel at 200 gals per hour (gph) with a Fuel Density of 0.8. What is the fuel flow if Fuel Density is 0.75?",
    choices: {
      A: "213 gph",
      B: "208 gph",
      C: "200 gph",
      D: "188 gph",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Given: True course (TC) 017o W/V 340o/30 kt Given: True course (TC) 017o W/V 340o/30 kt True air speed (TAS) 420 kt Find: Wind correction angle (WCA) and ground speed (GS)",
    choices: {
      A: "WCA -2o, GS 426 kt",
      B: "WCA +2o, GS 396 kt",
      C: "WCA -2o, GS 396 kt",
      D: "WCA +2o, GS 416 kt",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Flight planning chart for an aeroplane states that the time to reach the cruising level at a given gross mass is 36 minutes and the distance travelled is 157 NM (zero-wind). What will be the distance travelled with an average tailwind component of 60 kt?",
    choices: {
      A: "193 NM",
      B: "128 NM",
      C: "157 NM",
      D: "228 NM",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An aeroplane flies at an airspeed of 380 kt. It flies from A to B and back to A. Distance AB = 480 NM. When going from A to B, it experiences a headwind component = 60 kt. The wind remains constant. The duration of the flight will be",
    choices: {
      A: "3h 00 min",
      B: "2h 35 min",
      C: "2h 10 min",
      D: "2h 32 min",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "A multi engined AC on IFR flight.Given the following data, and assuming fuel consumption is unchanged, which of the following is correct? Given:Trip fuel 65 US Gal Contingency 5% trip Alternate fuel including final reserve 17 US Gal Useable fuel at departure 93 US Gal At a point halfway to destination, fuel consumed is 40 US Gal.",
    choices: {
      A: "At departure Reserve Fuel was 28 US Gal",
      B: "At destination required reserves remain intact FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "Remaining fuel is insufficient to reach destination with reserves intact",
      D: "Remaining fuel is insufficient to reach destination",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "The fuel burn of an aircraft turbine is 220 l/h with a fuel density of 0.80. If the density is 0.75 the fuel burn will be",
    choices: {
      A: "235 l/h",
      B: "206 l/h",
      C: "220 l/h",
      D: "176 l/h",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An aircraft in cruising flight at FL095, GS 155 kt. The pilot intends to descend at 500 ft/min to arrive overhead the MAN VOR at 2000 FT (QNH 1030 hPa). The TAS remains constant in the descent, wind is negligible, temperature standard. At which distance from MAN should the pilot commence the descent?",
    choices: {
      A: "41 NM",
      B: "48 NM",
      C: "38 NM",
      D: "45 NM",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An executive pilot is to carry out a flight to a French aerodrome, spend the night there and return the next day. Where will he find the information concerning parking and landing fees?",
    choices: {
      A: "in the FAL section of the French Aeronautical Information Publication (AIP)",
      B: "in the AGA chapter of the French Aeronautical Information Publication (AIP)",
      C: "in the GEN chapter of the French Aeronautical Information Publication (AIP)",
      D: "by telephoning the aerodrome's local chamber of commerce, this type of information not beingpublished",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Where would you find information regarding Customs and Health facilities?",
    choices: {
      A: "ATCC broadcasts",
      B: "NOTAMs",
      C: "NAV/RAD supplements",
      D: "AIP's",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Where would you find information regarding Search and Rescue procedures?",
    choices: {
      A: "ATCC broadcasts",
      B: "NOTAM",
      C: "SIGMET",
      D: "AIP",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "A sector distance is 450 NM long. The TAS is 460 kt. The wind component is 50 kt tailwind. What is the still air distance?",
    choices: {
      A: "414 Nautical Air Miles (NAM)",
      B: "499 Nautical Air Miles (NAM)",
      C: "406 Nautical Air Miles (NAM)",
      D: "511 Nautical Air Miles (NAM)",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "The still air distance in the clib is 189 Nautical Air Miles (NAM) and time 30 minutes. What ground distance would be covered in a 30 kt head wind?",
    choices: {
      A: "188 NM",
      B: "203 NM",
      C: "174 NM",
      D: "193 NM",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "The fuel burn off is 200 kg/hr with a relative fuel density of 0.8. If the relative fuel density is 0.75, the fuel burn will be",
    choices: {
      A: "267 kg/hr FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "213 kg/hr",
      C: "200 kg/hr",
      D: "188 kg/hr",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "From which of the following would you expect to find information regarding known short unserviceability of VOR, TACAN and NDB?",
    choices: {
      A: "NOTAM",
      B: "AIP (Air Information Publication)",
      C: "SIGMET",
      D: "ATCC broadcasts",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to CAP 697 figure 2-1) Aerodrome elevation 2500 ft, OAT +10oC Initial weight: 3500 lbs Climb to FL140, OAT -5oC What is the climb time, fuel, and NAM?",
    choices: {
      A: "22 min, 6.5g, 46 nam",
      B: "24 min, 7.5g, 50 nam",
      C: "2 min, 1.9g, 4 nam",
      D: "26 min, 8.5g, 54 nam",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "From which of the following would you expect to find the dates and times when temporary danger areas are active?",
    choices: {
      A: "Only AIP (Air Information Publication)",
      B: "NOTAM and AIP (Air Information Publicatin)",
      C: "SIGMET",
      D: "RAD/NAV charts",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "From which of the following would you expect to find details of the Search and Rescue organisation and procedures (SAR)?",
    choices: {
      A: "ATCC broadcasts",
      B: "AIP (Air Information Publication)",
      C: "NOTAM",
      D: "SIGMET",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "From which of the following would you expect to find facilitation information (FAL) regarding customs and health formalities?",
    choices: {
      A: "NOTAM",
      B: "NAV/RAD charts",
      C: "ATCC",
      D: "AIP (Air Information Publication)",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "You are flying a constant compass heading of 252o. Variation is 22oE, deviation is 3oW and your INS is showing a drift of 9o to the right. True track is?",
    choices: {
      A: "242o",
      B: "262o",
      C: "280o",
      D: "224o",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to figure 10-27)True Air Speed: 170 kts Wind in the area: 270o/40 kts According to the attached the navigation log, an aircraft performs a turn overhead BULEN to re-route to ARD vioa TGJ. The given wind conditions remaining constant. The fuel consumption during the turn is 20 litres. The total fuel consumption at position overhead ARD will be",
    choices: {
      A: "1545 litres",
      B: "1182 litres",
      C: "1326 litres",
      D: "1600 litres",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "(Refer to Route Manual chart NAP or figure HI-24)On a direct great circle course from Shannon (52o43N 008o53W) to Gander (48o54N 054o32W) theaverage true course, anddistance are",
    choices: {
      A: "(a) 281o (b) 1877 NM",
      B: "(a) 262o (b) 1720 NM",
      C: "(a) 281o (b) 2730 NM",
      D: "(a) 244o (B) 1520 NM",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart 5 AT(HI) or figure HI-25)The initial great circle true course from Keflavik (64o00N 022o36W) to Vigra (62o33N 006o02E) measures 084o. On a polar en-route chart where the grid is aligned with the 000o meridian the initial grid course will be",
    choices: {
      A: "080o",
      B: "096o",
      C: "066o",
      D: "106o",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart 5 (AT(HI) or figures HI-18_a & HI-18_b)The initial great circle course from position A (80oN 170oE) to position B (75oN 011oE) is 177o (G). The final grid course at position B will be",
    choices: {
      A: "353o (G)",
      B: "177o (G)",
      C: "194o (G)",
      D: "172o (G)",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart NAP or figure HI-23)The average magnetic course from C (62oN 020oW) to B (58oN 004oE) is",
    choices: {
      A: "099o",
      B: "118o",
      C: "119o",
      D: "109o",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "Refer to Route Manual chart NAP or figure HI-23)The average true course from C (62oN 020oW) to B (58oN 004oE) is",
    choices: {
      A: "199o",
      B: "099o",
      C: "120o",
      D: "109o",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart NAP or figure HI-23)The initial magnetic course from C (62oN 020oW) to B (58oN 004oE) is",
    choices: {
      A: "098o",
      B: "113o",
      C: "116o",
      D: "080o",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart NAP or figure HI-23)The initial true course from C (62oN 020oW) to B (58oN 004oE) is",
    choices: {
      A: "116o",
      B: "080o",
      C: "278o",
      D: "098o",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart NAP or figure HI-23)The distance (NM) from C (62oN 020oW) to B (58oN 004oE) is",
    choices: {
      A: "775",
      B: "760",
      C: "725",
      D: "700",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart NAP or figure HI-23)The distance (NM) from A (64oN 006oE) to C (62oN 020oW) is",
    choices: {
      A: "1440",
      B: "720 FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "690",
      D: "1590",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Reer to Route Manual chart NAP or figure HI-23)The average magnetic course from A (64oN 006oE) to C (62oN 020oW) is",
    choices: {
      A: "259o",
      B: "247o",
      C: "279o",
      D: "271o",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart NAP or figure HI-23)The average true course from A (64oN 006oE) to C (62oN 020oW) is",
    choices: {
      A: "259o",
      B: "247o",
      C: "271o",
      D: "079o",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart NAP or figure HI-23)The initial true course from A (64oN 003oE) to C (62oN 020oW) is",
    choices: {
      A: "271o",
      B: "275o",
      C: "267o",
      D: "246o",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Student Route Manual chart E(HI)1)An aircraft has to fly from the airport at Aberdeen (57o19¿N 002o16¿W) to the airport at Benbecula (58o29¿N 007o22¿W)Given:Time to climb: 11 minTime to descend: 9 minTAS: 170 ktsW/V: 230/50What is the flight time during the cruise?",
    choices: {
      A: "16 min",
      B: "47 min",
      C: "28 min FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "54 min",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "An aircraft is flying at MACH 0.84 at FL 330. The static air temperature is -48oC and the headwind component 52 kt. At 1338 UTC the controller requests the pilot to cross the meridian of 030W at 1500 UTC. Given the distance to go is 570 NM, the reduced MACH No. should be",
    choices: {
      A: "0.72",
      B: "0.78",
      C: "0.76",
      D: "0.80",
    },
    correct: "D",
    ref: "I.R.",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.4) Planning an IFR-flight from Paris to London for the twin jet aeroplane. Given:Estimated Landing Mass: 49700 kg FL 280 W/V 280o/40 kt Average True Course: 320o Procedure for descent: .74 M/250 KIAS Determine the time from the top of descent to London (elevation 80 ft)",
    choices: {
      A: "10 min",
      B: "17 min",
      C: "8 min",
      D: "19 min",
    },
    correct: "D",
    ref: "I.R.",
  },
  {
    question:
      "What is Decision Point Procedure?It is a procedure to reduce the amount of fuel carried on a flight by",
    choices: {
      A: "reducing contingency fuel from 10% to 5% of trip fuel",
      B: "reducing contingency fuel to only that required from Decision Point to Destination",
      C: "reducing trip fuel to only that required from Decision Aerodrome to Destination",
      D: "reducing trip distance",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.5.1C) Given: Brake release mass: 62000 kg (Refer to figure 4.5.1C) Given: Brake release mass: 62000 kg Temperature: ISA + 15oC The fuel required for a climb from Sea Level to FL330 is",
    choices: {
      A: "1800 kg",
      B: "1650 kg",
      C: "1750 kg",
      D: "1700 kg",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.4) HOLDING PLANNING The fuel required for 30 minutes holding, in a racetrack pattern, at PA 1500 ft, at mean gross mass of 45000 kg is: Answers",
    choices: {
      A: "1010 kg",
      B: "1090 kg",
      C: "1310 kg",
      D: "2180 kg",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 4.5.2 & 4.5.3.4) Given: Distance B - C: 350 NM Cruise 300 KIAS at DL 210 Temperatue: - 40oC Tailwind component: 70 kt Gross mass at B: 53200 kg The fuel required from B - C is?",
    choices: {
      A: "1810 kg",
      B: "1940 kg",
      C: "2800 kg",
      D: "2670 kg",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.4) HOLDING PLANNING The fuel required for 45 minutes holding, in a racetrack pattern, at PA 5000 ft, mean gross mass 47000 kg is",
    choices: {
      A: "1635 kg",
      B: "1090 kg",
      C: "1690 kg",
      D: "1125 kg",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.3.5) Given the following: Headwind component 50 kt Temperature ISA + 10oC Brake release mass 65000 kg Trip fuel available 18000 kg What is the maximum possible trip distance?",
    choices: {
      A: "3480 NM",
      B: "3100 NM",
      C: "2740 NM",
      D: "2540 NM",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.3.1C) For a flight of 2800 ground nautical miles the following applies: Headwind component: 15 kt Temperature: ISA + 15oC Cruise altitude: 35000 ft Landing mass: 50000 kg The (a) trip fuel and (b) trip time respectively are",
    choices: {
      A: "(a) 20000 kg (b) 7 hr 00 min",
      B: "(a) 16200 kg (B) 6 hr 20 min",
      C: "(a) 17000 kg (B) 6 hr 10 min",
      D: "(a) 17600 kg (B) 6 hr 50 min FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "The Trip Fuel for a jet aeroplane to fly from the departure aerodrome to the destination aerodrome is 5350 kg. Fuel consumptionin holding mode is 6000 kg/h. The quantity of fuel which is needed to carry out one go-around and land on the alternate airfield is 4380 kg. The destination aerodrome has a single runway. What is the minimum quantity of fuel which should be o board at take-off? Answers",
    choices: {
      A: "13000 kg",
      B: "13230 kg",
      C: "14730 kg",
      D: "11730 kg",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.3.5) For a flight of 2800 ground nautical miles the following applies: Headwind component: 20 kt Temperature: ISA + 15oC Brake release mass: 64700 kg The (a) trip fuel, and (b) trip time respectively are",
    choices: {
      A: "(a) 16200 kg (b) 6hr 20 min",
      B: "(a) 15800 kg (b) 6hr 15 min",
      C: "(a) 17000 kg (b) 6hr 45 min",
      D: "(a) 18400 kg (b) 7hr 00 min",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "A turbo-jet AC is en-route to an isolated destination. On top of taxi, trip and contingency fuel, what fuel is required?",
    choices: {
      A: "Greater of 45 mins + 15% of trip or 2 hours",
      B: "30 mins holding at 450m AMSL",
      C: "30 mins holding at 450m AAL FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "2 hours at normal cruise consumption",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.3.5) The following apply: Temperature ISA +15oC Brake release mass 62000 kg Trip time 5hr 20 min What is the trip fuel?",
    choices: {
      A: "13800 kg",
      B: "13000 kg",
      C: "13200 kg",
      D: "13500 kg",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "Which is true regarding a balanced field?",
    choices: {
      A: "Provides largest gap between net and gross margins",
      B: "Provides minimum field length required in the case of an engine failure",
      C: "Take off distance will always be more than stopping distance",
      D: "Distances will remain equal, even if engine failure speed is changed",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.3.1C) For a flight of 2400 ground nautical miles the following apply: Tail wind component: 25 kt Temperature: ISA = -10oC Cruise altitude: 31000 ft Landing mass: 52000 kg The (a) trip fuel and (b) trip time respectively are",
    choices: {
      A: "(a) 14200 kg (b) 5 hr 30 min",
      B: "(a) 16200 kg (b) 5 hr 45 min FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "(a) 13600 kg (b) 6 hr 30 min",
      D: "(a) 12000 kg (b) 5 hr 15 min",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.3.5) The following apply: Tailwind component 10 kt Temperature ISA +10oC Brake release mass 63000 kg Trip fuel available 20000 kg What is the maximum possible trip distance?",
    choices: {
      A: "3500 NM",
      B: "3640 NM",
      C: "3740 NM",
      D: "3250 NM",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "Given: Dry operating mass (DOM) = 33510 kg Load = 7600 kg Trip fuel (TF) = 2040 kg Final reserve fuel = 983 kg Alternate fuel = 1100 kg Contingency fuel = 5% of trip fuel Which of the listed estimated masses is correct?",
    choices: {
      A: "Estimated take-off mass = 45233 kg",
      B: "Estimated landing mass at destination = 43295 kg FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "Estimated landing mass at destination = 43193 kg",
      D: "Estimated take-off mass = 43295 kg",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "What is the purpose of Decision Point Procedure?",
    choices: {
      A: "Carry minimum fuel to increase Traffic Load",
      B: "Increase safety of the flight",
      C: "Reduce landing mass to avoid stressing the aircraft",
      D: "To assist in decision making at refuelling",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Turbo-jet AC: Taxi fuel = 600 kg Fuel flow cruise: 10,000 kg/hr Fuel flow hold: 8000 kg/hr Alternate fuel: 10,200 KG Flight time: 6 hours Visibility at destination: 2000m What is the minimum ramp fuel?",
    choices: {
      A: "80,500 kg",
      B: "79,200 kg",
      C: "77,800 kg",
      D: "76,100 kg",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "Given: Maximum allowable take-off mass: 64,400 kg Maximum landing mass: 56,200 kg Given: Maximum allowable take-off mass: 64,400 kg Maximum landing mass: 56,200 kg Maximum zero fuel mass: 53,000 kg Dry operating mass: 35,500 kg Estimated load: 14,500 kg Estimated trip fuel: 4,900 kg Minimum take off fuel: 7,400 kg Find the maximum allowable take-off fuel",
    choices: {
      A: "8,600 kg",
      B: "11,400 kg",
      C: "14,400 kg",
      D: "11,100 kg",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Following in-flight depressurisation, a turbine powered aeroplane is forced to divert to an en-route alternate airfield. If actual flight conditions are as forecast, the minimum quantity of fuel remaining on arrival at the airfield will be",
    choices: {
      A: "at least equivalent to 45 minutes flying time",
      B: "at least equivalent to the quantity required to fly to another aerodrome in the event thatweather conditions so require",
      C: "laid down by the operator, with the quantity being specified in the Operating manual",
      D: "at least equivalent to 30 minutes flying time",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.3.1C) For a flight of 2400 ground nautical miles the following apply: Temperature: ISA -10oC Cruise altitude: 29000 ft Landing mass: 45000 kg Trip fuel available: 16000 kg What is the maximum headwind component which may be accepted?",
    choices: {
      A: "zero",
      B: "15 ktC -70 kt FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "35 kt",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.3.6) Given: Distance to Alternate: 450 NM Landing mass at Alternate: 45000 kg Tailwind component: 50 kt The Alternate fuel required is",
    choices: {
      A: "2900 kg",
      B: "2750 kg",
      C: "3050 kg",
      D: "2500 kg",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Given: Maximum allowable take off mass: 64400 kg Maximum landing mass: 56200 kg Maximum zero fuel mass: 53000 kg Dry operating mass: 35500 kg Estimated load: 14500 kg Estimated trip fuel: 4900 kg Minimum take-off fuel: 7400 kg Find: maximum additional load",
    choices: {
      A: "7000 kg",
      B: "4000 kg",
      C: "3000 kg",
      D: "5600 kg FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "An aeroplane has the following masses: Estimated LM = 50000 kg Trip fuel= 4300 kg Contingency fuel = 215 kg Alternat fuel (final reserve included) = 2100 kg Taxi = 500 kg Block fuel = 7115 kg Before departure the captain orders to make the block fuel 9000 kg. The trip fuel in the operational flight plan should read",
    choices: {
      A: "4300 kg",
      B: "6185 kg",
      C: "9000 kg",
      D: "6400 kg",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.2.1) Find the OPTIMUM ALTITUDE for the twin jet aeroplane. Given: Cruise mas = 54000 kg Long range cruise or .74 MACH",
    choices: {
      A: "33800 ft",
      B: "34500 ft",
      C: "35300 ft",
      D: "maximum operating altitude",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.2.1) Find the OPTIMUM ALTITUDE for the twin jet aeroplane. Given: Cruise mass = 50000 kg 0.78 MACH",
    choices: {
      A: "36200 ft",
      B: "35500 ft",
      C: "36700 ft",
      D: "maximum operating altitude",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.2.1 & paragraph 2.1 of MRJT1) Find the FUEL MILEAGE PENALTY for the twin jet aeroplane with regard to the given FLIGHT LEVEL. Given: Lond range cruise Cruise mass = 53000 kg FL 310",
    choices: {
      A: "4%",
      B: "1%",
      C: "10%",
      D: "0%",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.1) For a flight of 2400 ground nautical miles the following apply: Temperature: ISA -1 deg C Cruise altitude: 29000 ft Landing mass: 45000 kg Trip fuel available: 16000 kg What is the maximum headwind component which may be accepted?",
    choices: {
      A: "35 kt",
      B: "15 kt",
      C: "0 kt",
      D: "70 kt",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.7.2) ETOPS - AC cannot travel more than 120 minutes from a suitable (should read ADEQUATE) airfield. Assume LRC and diversion weight of 40,000 kg, what is the still air diversion distance? Answers",
    choices: {
      A: "735",
      B: "794",
      C: "810",
      D: "875",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Mark the correct statement: If a decision point procedure is applied for flight planning?",
    choices: {
      A: "the trip fuel to the destination aerodrome is to be calculated via the suitable en-routealternate",
      B: "the trip fuel to the destination aerodrome is to be calculated via the decision point",
      C: "a destination alternate is not required",
      D: "the fuel calculation is based on a contingency fuel from departure aerodrome to the decisionpoint",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 687 figure 4.3.1) Tail wind component: 45 kt Temperature: ISA -10oC Cruise altitude: 29000 ft Landing mass: 55000 kg For a flight of 2800 ft ground nautical miles, the (i) trip fuel and (ii) trip time respectively are",
    choices: {
      A: "(i) 16000 kg (ii) 6 hr 25 min",
      B: "(i) 18000 kg (ii) 5 hr 50 min",
      C: "(i) 20000 kg (ii) 6 hr 40 min",
      D: "(i) 17100 kg (ii) 6 hr 07 min",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.6) Distance to alternate: 400 nm Landing mass at alternate: 50000 kg Headwind component: 25 kt The alternate fuel required is",
    choices: {
      A: "2550 kg",
      B: "2800 kg",
      C: "2900 kg",
      D: "2650 kg",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "The quantity of fuel which is calculated to be necessary for a jet aeroplane to fly IFR from departure aerodrome to the destination aerodrome is 5352 kg. Fuel consumption in holding mode is 6000 kg/h. Alternate fuel is 4380 kg. Contingency should be 5% of trip fuel.What is the minimum required quantity of fuel which should be on board at take-off? Answers",
    choices: {
      A: "13370 kg",
      B: "14500 kg",
      C: "13000 kg",
      D: "13220 kg",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "The required time for final reserve fuel for turbojet aeroplane is",
    choices: {
      A: "45 min",
      B: "30 min",
      C: "60 min",
      D: "Variable with wind velocity",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.3.1) Aircraft mass at top of climb 61500 kg Distance 385 nm FL350 OAT - 54oC Tailwind of 40 kt Using Long Range Cruise, how much fuel is required?",
    choices: {
      A: "2150 kg",
      B: "2250 kg",
      C: "2350 kg",
      D: "2050 kg",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.7.3) Given: Diversion distance: 650NM Diversion pressure altitude: 16000 ft Mass at point of diversion: 57000 kg Headwind component: 20 kt Temperature: ISA + 15oC The diversion (a) fuel required and (b) time, are approximately",
    choices: {
      A: "(a) 4400 kg (b) 1h 35 min",
      B: "(a) 3900 kg (b) 1h 45 min",
      C: "(a) 6200 kg (b) 2h 10 min",
      D: "(a) 4800 kg (b) 2h 03 min",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.3.6) In order to find ALTERNATE FUEL and TIME TO ALTERNATE, the AEROPLANE OPERATING MANUAL shall be entered with",
    choices: {
      A: "distance in nautical miles (NM), wind component, landing mass at alternate",
      B: "distance in nautical air miles (NAM), wind component, landing mass at alternate",
      C: "distance in nautical miles (NM), wind component, zero fuel mass",
      D: "distance in nautical miles (NM), wind component, dry operating mass plus holding fuel",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "The purpose of the decision point procedure is?",
    choices: {
      A: "To increase the safety of the flight",
      B: "To reduce the landing weight and thus reduce the structural stress on the aircraft",
      C: "To reduce the minimum required fuel and therefore be able to increase the traffic load",
      D: "To increase the amount of extra fuel",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "When using decision point procedure, you reduce the",
    choices: {
      A: "holding fuel by 30%",
      B: "contingency fuel by adding contingency only from the burn-off between the decision airport anddestination",
      C: "reserve fuel from 10% down to 5%",
      D: "contingency fuel by adding contingency only from the burn-off between decision point anddestination",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Planning a flight from Paris (Charles-de-Gaulle) to London (Heathrow) for a twin- jet aeroplane. Pre-planning: Maximum Take-off Mass: 62800 kg Maximum Zero Fuel Mass: 51250 kg Maximum Landing Mass: 54900 kg Maximum Taxi Mass: 63050 kg Assume the following pre-planning results: Trip fuel: 1800 kg Alternate fuel: 1400 kg Planning a flight from Paris (Charles-de-Gaulle) to London (Heathrow) for a twin- jet aeroplane. Pre-planning: Maximum Take-off Mass: 62800 kg Maximum Zero Fuel Mass: 51250 kg Maximum Landing Mass: 54900 kg Maximum Taxi Mass: 63050 kg Assume the following pre-planning results: Trip fuel: 1800 kg Alternate fuel: 1400 kg Holding fuel (final reserve) 1225 kg Dry Operating Mass: 34000 kg Traffic Load: 13000 kg Catering: 750 kg Baggage: 3500 kg Find the Take-off Mass (TOM)",
    choices: {
      A: "55765 kg",
      B: "51515 kg",
      C: "51425 kg",
      D: "52265 kg",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.2.1) Given: Cruise mass: 54000 kg Long Range Cruise or 0.74 Mach Find the OPTIMUM ALTITUDE for the twin-jet aeroplane.",
    choices: {
      A: "35300 ft",
      B: "34500 ft",
      C: "maximum operating altitude",
      D: "33800 ft",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.4) Given: Dry operating mass: 35500 kg Estimated load: 12000 kg Contingency approach and landing fuel: 2500 kg Elevation at departure aerodrome: 500 ft Elevation at alternate aerodrome: 30 ft Find: final reserve fuel for a jet aeroplane (holding) and give the elevation which is relevant.",
    choices: {
      A: "2360 kg; destination elevation",
      B: "2360 kg; alternate elevation",
      C: "1180 kg; destination elevation",
      D: "1180 kg; alternate elevation",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.2.2) Given: Brake release mass: 45000 kg Temperature: ISA +20oC Trip distance: 50 Nautical Air Miles (NAM) Find the SHORT DISTANCE CRUISE ALTITUDE for the twin-jet aeroplane.",
    choices: {
      A: "11000 ft",
      B: "12500 ft",
      C: "10000 ft",
      D: "7500 ft",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.7.3) Given: Diversion distance: 720 NM Tail wind component: 25 kt Mass at point of diversion: 55000 kg Temperature: ISA Diversion fuel available: 4250 kg What is the minimum pressure altitude at which the above conditions may be met?",
    choices: {
      A: "26000 ft",
      B: "20000 ft",
      C: "16000 ft",
      D: "14500 ft",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.3.2)Find the FUEL FLOW for the twin jet aeroplane with regard to the following data. Given: MACH .74 cruise Flight level 310 Gross mass 50000 kg ISA conditions",
    choices: {
      A: "1497 kg/h",
      B: "1150 kg/h",
      C: "2994 kg/h",
      D: "2300 kg/h",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      ". The following fuel consumption figures are given for a jet aeroplane: Standard taxi fuel: 600 kg Average cruise consumption: 10000 kg/h Holding fuel consumption at 1500 ft above alternate airfield elevation: 8000 kg/h Flight time from departure to destination: 6 hours Fuel for diversion to alternate: 10200 kg The minimum ramp fuel load is",
    choices: {
      A: "77800 kg",
      B: "74800 kg",
      C: "79800 kg",
      D: "77200 kg",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.3.6) Given: Estimated dry operation mass: 35500 kg Estimated load: 14500 kg Final reserve fuel: 1200 kg Distance to alternate: 95 NM Average true track: 219o Headwind component: 10 kt Find: fuel and time to alternate",
    choices: {
      A: "1100 kg; 44 min",
      B: "1100 kg; 25 min",
      C: "800 kg; 24 min",
      D: "800 kg; 40 min",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.3A) Given: Cruise M0.78 FL280 50,000 kg 200 nm Wind component 30 kt Head (Refer to CAP 697 figure 4.3.3A) Given: Cruise M0.78 FL280 50,000 kg 200 nm Wind component 30 kt Head Find the fuel required.",
    choices: {
      A: "1470 kg",
      B: "1740 kg",
      C: "1620 kg",
      D: "1970 kg",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figures 4.5.1) Given: Brake release mass: 58000 kg Temperature: ISA +15oC The fuel required to climb from an airfield at elevation 4000 ft to FL300 is",
    choices: {
      A: "1350 kg",
      B: "1400 kg",
      C: "1450 kg",
      D: "1250 kg",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "The final reserve fuel for aeroplanes with turbine engines is",
    choices: {
      A: "fuel to fly for 45 minutes at holding speed at 1000 ft (300m) above aerodrome elevation instandard conditions",
      B: "fuel to fly for 45 minutes at holding speed at 1500 ft (450m) above aerodrome elevation instandard conditions",
      C: "fuel to fly for 30 minutes at holding speed at 1500 ft (450m) above aerodrome elevation in FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "fuel to fly for 60 minutes at holding speed at 1500 ft (450m) above aerodrome elevation instandard conditions",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "Which of the following statements is relevant for forming route portions in integrated range flight planning?",
    choices: {
      A: "The distance from take-off up to the top of climb has to be known",
      B: "No segment shall be more than 30 minutes of flight time",
      C: "Each reporting point requires a new segment",
      D: "A small change of temperature (2oC) can divide a segment",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "A jet aeroplane is to fly from A to B. The minimum final reserve fuel must allow for",
    choices: {
      A: "20 minutes hold over alternate airfield",
      B: "30 minutes hold at 1500 ft above destination aerodrome elevation, when no alternate is required",
      C: "30 minutes hold at 1500 ft above mean sea level",
      D: "15 minutes hold at 1500 ft above destination aerodrome elevation",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.4)The final reserve fuel taken from the HOLDING PLANNING table for the twin-jet aeroplane is based on the following parameters",
    choices: {
      A: "pressure altitude, aeroplane mass and flaps up with minimum drag airspeed",
      B: "pressure altitude, aeroplane mass and flaps down with maximum range speed",
      C: "pressure altitude, aeroplane mass and flaps up with maximum range speed",
      D: "pressure altitude, aeroplane mass and flaps down with minimum drag airspeed",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.1C)Within the limits of the data given, a mean temperature increase of 30oC will affect the trip time by approximately",
    choices: {
      A: "-5%",
      B: "+5%",
      C: "+8%",
      D: "-7% FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.4)A descent is planned at 0.74M/250 KIAS from 25,000 ft to 5,000 ft.How much fuel will be consumed during this descent?",
    choices: {
      A: "278 kg",
      B: "290 kg",
      C: "150 kg",
      D: "140 kg",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "An operator (turbojet engine) shall ensure that calculation of usable fuel for a flight for which no destination alternate is required includes, taxi fuel, trip fuel, contingency fuel and fuel to fly for",
    choices: {
      A: "45 minutes plus 15% of the flight time to be spent at cruising level or two hours whichever isless",
      B: "2 hours at normal cruise consumption",
      C: "30 minutes at holding speed at 450m above aerodrome elevation in standard conditions",
      D: "30 minutes at holding sped at 450m above MSL in standard conditions",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 10-29) The planned flight is over a distance of 440 NM. Based on the wind charts at altitude the following components are found: FL50: -30 kt FL100: -50 kt FL180: -70 kt The Operations Manual in appendix details the aircraft performances. Which of the following flight levels (FL) gives the best range performance?",
    choices: {
      A: "FL 050",
      B: "Either FL 050 or FL 100",
      C: "FL 180",
      D: "FL 100",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.3.1C) For a flight of 2000 gound nautical miles, cruising at 30000 ft, within the limits of the data given, a headwind component of 25 kt will affect the trip time by approximately",
    choices: {
      A: "+5.3%",
      B: "+7.6%",
      C: "-3.6%",
      D: "+2.3%",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.3.3C) Given: Ground distance to destination aerodrome: 1600 NM Headwind component: 50 kt FL 330 Cruise 0.78 Mach ISA +20oC Estimated landing weight: 55000 kg Find: simplified flight planning to determine estimated trip fuel and trip time.",
    choices: {
      A: "12400 kg, 04h 12 min",
      B: "11400 kg; 04h 12 min",
      C: "12400 kg; 03h 55 min",
      D: "11400 kg; 03h 55 min",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.4)Given: Mean gross mass = 47000 kg The fuel required for 45 minutes holding in a racetrack pattern at 5000 ft is",
    choices: {
      A: "1690 kg",
      B: "1090 kg",
      C: "1635 kg",
      D: "1125 kg",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.1C) For a flight of 1900 ground nautical miles the following conditions apply: (Refer to CAP 697 figure 4.3.1C) For a flight of 1900 ground nautical miles the following conditions apply: ¿ Headwind component: 10 kt ¿ Temperature: ISA -5oC ¿ Trip fuel available: 15000 kg ¿ Landing mass: 50000 kg What is the minimum cruise level (pressure altitude) which may be planned?",
    choices: {
      A: "17000 ft",
      B: "10000 ft",
      C: "14000 ft",
      D: "22000 ft",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.3C) Using the following information, find fuel required and trip time with simplified flight planning for twin-jet aeroplane: Ground distance to destination: 1600 NM Headwind component: 50 kt FL330 Cruise 0.78 Mach ISA Deviation +2oC Landing mass: 55000 kg",
    choices: {
      A: "12250 kg, 04 hr 00 min",
      B: "11400 kg, 04 hr 12 min",
      C: "11600 kg, 04 hr 15 min",
      D: "12000 kg, 03 hr 51 min",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 4.3.1B) Given: Estimated zero fuel mass: 50000 kg Estimated landing mass at alternate: 52000 kg Final reserve fuel: 2000 kg Alternate fuel: 1000 kg (Refer to figures 4.3.1B) Given: Estimated zero fuel mass: 50000 kg Estimated landing mass at alternate: 52000 kg Final reserve fuel: 2000 kg Alternate fuel: 1000 kg Flight to destination, distance 720 NM: TC 030o, W/V 340/30 Cruise: long range FL330, OAT -30oC Find: estimated trip fuel and time.",
    choices: {
      A: "4800 kg; 01:45",
      B: "4400 kg; 02:05",
      C: "4750 kg; 02:00",
      D: "4600 kg: 02:05",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.7.3) Given: Distance to alternate: 950 NM Headwind component: 20 kt Mass at point of diversion: 50000 kg Diversion fuel available: 5800 kg The minimum pressure altitude at which the above conditions may be met is",
    choices: {
      A: "22000 ft",
      B: "20000 ft",
      C: "26000 ft",
      D: "18000 ft",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.2A) Planning a flight from Paris (CDG) to London (Heathrow) for a twin-jet aeroplane. (Refer to CAP 697 figure 4.3.2A) Planning a flight from Paris (CDG) to London (Heathrow) for a twin-jet aeroplane. Power setting: M0.74 FL280 Landing Mass: 50000 kg Distance to use: 200 nm W/V from Paris to London: 280/40 Mean track: 340oT Find the estimated trip fuel.",
    choices: {
      A: "1550 kg",
      B: "1740 kg",
      C: "1900 kg",
      D: "1450 kg",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "A jet aeroplane has a cruising fuel consumption of 4060 kg/h, and 3690 kg/h during holding. If the destination is an isolated airfield, the aeroplane must carry, in addition to contingency reserves, additional fuel of",
    choices: {
      A: "7380 kg",
      B: "8120 kg",
      C: "1845 kg",
      D: "3500 kg",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.2.1 and table 4.2.1) Given: Cruise weight: 53000 kg LRC/M0.74 Cruise at FL310 What is the fuel penalty?",
    choices: {
      A: "0% FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "1%",
      C: "4%",
      D: "10%",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refr to CAP 697 figure 4.5.1) Planning an IFR-flight from Paris (Charles-de-Gaulle) to London (Heathrow) for the twin jet aeroplane. Given: Estimated Take-off Mass (TOM): 52000 kg Airport elevation: 387 ft FL280 W/V 280o/40 kt ISA Deviation: -10oC Average True Course: 340o Find: Time to the top of climb (TOC)",
    choices: {
      A: "12 min",
      B: "3 min",
      C: "11 min",
      D: "15 min",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.6) Given for the twin jet aeroplane: Dry operating mass: 35500 kg Traffic load: 14500 kg Final reserve fuel: 1200 kg Distance to alternate: 95 NM Tailwind component: 10 kt (Refer to CAP 697 figure 4.3.6) Given for the twin jet aeroplane: Dry operating mass: 35500 kg Traffic load: 14500 kg Final reserve fuel: 1200 kg Distance to alternate: 95 NM Tailwind component: 10 kt Find: Fuel required and trip time to alternate with simplified flight planning (ALTERNATE PLANNING)",
    choices: {
      A: "800 kg, 0.4 hr",
      B: "1000 kg, 40 min",
      C: "800 kg, 24 min",
      D: "1000 kg, 24 min",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.1C) Find: Time, Fuel, Still Air Distance and TAS for an en-route climb 280/.74 to FL350. Given: Brake release mass: 64000 kg ISA +10oC Airport elevation 3000 ft",
    choices: {
      A: "25 min, 1875 kg, 148 Nautical Air Miles (NAM), 391 kt",
      B: "26 min, 2050 kg, 157 Nautical Air Miles (NAM), 399 kt",
      C: "20 min, 1750 kg, 117 Nautical Air Miles (NAM), 288 kt",
      D: "26 min, 1975 kg, 157 Nautical Air Miles (NAM), 399 kt",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "When calculating the fuel required to carry out a given flight, one must take into account: 1. wind 2. foreseeable airborne delays 3. other weather forecasts 4. any foreseeable conditions which may delay landing The combination which provides the correct statement is",
    choices: {
      A: "1 -2 - 3",
      B: "1 -3",
      C: "2 - 4",
      D: "1 - 2 - 3 - 4",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Given: Dry operating mass (DOM): 33500 kg Load: 7600 kg Maximum allowable take-off mass: 66200 kg Standard taxi fuel: 200 kg Tank capacity: 16100 kg The maximum possible take-off fuel is",
    choices: {
      A: "15900 kg",
      B: "17100 kg",
      C: "16300 kg",
      D: "17300 kg",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.3C) Given for the twin-jet aeroplane: Ground distance to destination aerodrome: 1600 NM Headwind component: 50 kt FL 330 Cruise .78 Mach ISA Deviation: +20oC Landing mass: 55000 kg (Refer to CAP 697 figure 4.3.3C) Given for the twin-jet aeroplane: Ground distance to destination aerodrome: 1600 NM Headwind component: 50 kt FL 330 Cruise .78 Mach ISA Deviation: +20oC Landing mass: 55000 kg Find: Fuel required and trip time with simplified flight planning.",
    choices: {
      A: "11400 kg, 04 h 12 min",
      B: "12400 kg, 04 h 00 min",
      C: "11600 kg, 04 h 15 min",
      D: "12000 kg, 03 h 51 min",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.5.3.1) Given: Flight time from top of climb to the en-route point in FL280: 48 min Cruise procedure is long range cruise (LRC) Temp: ISA -5oC Take-off mass: 56000 kg Climb fuel: 1100 kg Find: distance in nautical air miles (NAM) for this leg and fuel consumption",
    choices: {
      A: "345 NAM; 2000 kg",
      B: "350 NAM; 2000 kg",
      C: "345 NAM; 2100 kg",
      D: "437 NAM; 2100 kg",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.3.2) Planning an IFR-flight from Paris to London for the twin-jet aeroplane. Given: (Refer to CAP 697 figure 4.5.3.2) Planning an IFR-flight from Paris to London for the twin-jet aeroplane. Given: Gros mass: 50000 kg FL280 ISA Deviation: -10oC Cruise procedure: Mach 0.74 Determine the TAS",
    choices: {
      A: "417 kt",
      B: "440 kt",
      C: "427 kt",
      D: "430 kt",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.4) Planning a flight from Paris Charles-de-Gaulle to London Heathrow for a twin-jet aeroplane. Pre-planning: Dry Operating Mass (DOM): 34000 kg Traffic load: 13000 kg The holding is planned at 1500 ft above alternate elevation (256 ft) The holding is planned for 30 minutes with no reductions Determine the Estimated Landing Mass at alternate Manchester",
    choices: {
      A: "48675 kg",
      B: "49250 kg",
      C: "42250 kg",
      D: "48125 kg",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.5.1) Given: Brake release mass: 57500 kg Temperature: ISA -10oC Headwind component: 16 kt (Refer to figure 4.5.1) Given: Brake release mass: 57500 kg Temperature: ISA -10oC Headwind component: 16 kt Initial FL 280 Find: still air distance (NAM) and ground distance (NM) for the climb.",
    choices: {
      A: "59 NAM; 62 NM",
      B: "62 NAM; 59 NM",
      C: "67 NAM; 71 NM",
      D: "71 NAM; 67 NM",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.2.2) Find the SHORT DISTANCE CRUISE ALTITUDE for the twin-jet aeroplane. Given: Brake release mass: 40000 kg Temperature: ISA +20oC Trip distance: 150 Nautical Air Miles (NAM)",
    choices: {
      A: "30000 ft",
      B: "25000 ft",
      C: "21000 ft",
      D: "27500 ft",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.4) Given for the twin jet aeroplane: Estimated mass on arrival at the alternate: 50000 kg Estimated mass on arrival at the destination: 52525 kg Alternate elevation: MSL Destination elevation: 1500 ft Find: Final reserve fuel and corresponding time.",
    choices: {
      A: "2360 kg, 01h 00 min",
      B: "2360 kg, 30 min",
      C: "1180 kg, 30 min",
      D: "1180 kg, 45 min",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.3.6)In order to get alternate fuel and time, the twin-jet aeroplane operations manual graph shall be entered with",
    choices: {
      A: "Distance (NM), wind component, zero fuel mass",
      B: "Still air distance, wind component, zero fuel mass",
      C: "Flight time, wind component, landing mass at alternate",
      D: "Distance (NM), wind component, landing mass at alternate",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.5.1) Given: Mass at brake release: 57500 kg Temperature : ISA -10oC Average headwind component: 16 kt Initial cruise: FL 280 Find the climb fuel.",
    choices: {
      A: "1138 kg",
      B: "1238 kg",
      C: "1387 kg",
      D: "1040 kg FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4.5.1) Given: Estimated take-off mass: 57500 kg Initial cruise: FL 280 Average temperature during climb: ISA -10oC Average headwind component: 18 kt Find the climb time for en-route climb 280/.74",
    choices: {
      A: "15 min",
      B: "11 min",
      C: "13 min",
      D: "14 min",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "For flight planning purposes the landing mass at alternate is taken as",
    choices: {
      A: "Landing Mass at destination plus Alternate Fuel",
      B: "Zero Fuel Mass plus Final Reserve Fuel",
      C: "Zero Fuel Mass plus Final Reserve Fuel and Alternate Fuel",
      D: "Zero Fuel Mass plus Final Reserve Fuel and Contingency Fuel",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.4) Given for the twin jet aeroplane: Estimated mass on arrival at the alternate: 50000 kg Elevation at destination aerodrome: 3500 ft (Refer to CAP 697 figure 4.4) Given for the twin jet aeroplane: Estimated mass on arrival at the alternate: 50000 kg Elevation at destination aerodrome: 3500 ft Elevation at alternate aerodrome: 30 ft Find: Final reserve fuel",
    choices: {
      A: "1150 kg",
      B: "2360 kg",
      C: "1180 kg",
      D: "2300 kg",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.3.1) The aeroplane gross mass at top of climb: 61500 kg The distance to be flown: 385 NM at FL 350 OAT: -54oC Wind component: 40 kt tailwind Using long range cruise procedure what fuel is required?",
    choices: {
      A: "2350 kg",
      B: "2250 kg",
      C: "2150 kg",
      D: "2050 kg",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "Given: Maximum allowable take-off mass: 64600 kg Maximum landing mass: 56200 kg Maximum zero fuel mass: 53000 kg Dry operating mass: 35500 kg Traffic load: 14500 kg Trip fuel: 4900 kg Take-off fuel: 7400 kg Find: Maximum additional load.",
    choices: {
      A: "5600 kg",
      B: "4000 kg",
      C: "7000 kg",
      D: "3000 kg",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "Given: FL 370 M = 0.74 OAT= .47oC The TAS is",
    choices: {
      A: "424 kt",
      B: "434 kt",
      C: "417 kt",
      D: "428 kt",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "Given Mach number 0.82 and OAT -50oC TAS is",
    choices: {
      A: "466 kt",
      B: "470 kt",
      C: "476 kt",
      D: "496 kt",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "Given TAS 500 kt and OAT -40oC Mach number is",
    choices: {
      A: "0.80",
      B: "0.82",
      C: "0.84",
      D: "0.88",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 697 figures 4.5.2 & 4.5.3.1)Given:Distance C-D: 680 NMLong Range Cruise at FL340Temperature Deviation from ISA: 0oCHeadwind component: 60 ktGross mass at C: 44700 kgThe fuel required from C D is",
    choices: {
      A: "3400 kg",
      B: "3700 kg",
      C: "3100 kg",
      D: "4000 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figures 4.5.2 & 4.5.3.3)Given:Distance B C: 1200 NMCruise Mach 0.78 at FL300Temperature Deviation from ISA: -14oCTailwind component: 40 ktGross mass at B: 50200 kgThe fuel required from B-C is",
    choices: {
      A: "5850 kg",
      B: "6150 kg",
      C: "7300 kg",
      D: "7050 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figures 4.5.2 & 4.5.3.4)Given:Distance C-D: 540 NMCruise 300 KIAS at FL 210Temperature Deviation from ISA: +20oCHeadwind component: 50 ktGross mass at C: 60,000 kgThe fuel required from C to D is",
    choices: {
      A: "3680 kg",
      B: "4200 kg",
      C: "3350 kg",
      D: "4620 kg",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figures 4.5.2 & 4.5.3.1)Long range cruise at FL340Distance C-D: 3200 nmTemperature: deviation from ISA +12oCTailwind component: 50 ktGross mass at C: 55000 kgThe fuel required C-D is",
    choices: {
      A: "17500 kg",
      B: "14200 kg",
      C: "17800 kg",
      D: "14500 kg",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figue 4.5.3.1)Given:LRCFL330Temp -63oCMass 54100 kgTime 29 minsFind the fuel consumed.",
    choices: {
      A: "1207 kg",
      B: "1197 kg",
      C: "1100 kg",
      D: "1000 kg",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figures 4.5.2 and 4.5.3.4)Given:Distance C-D: 540 nmCruise: 300 KIAS at FL210Temperature: ISA +2oCHeadwind component: 50 ktGross mass at C: 60000 kgThe fuel required from C to D is",
    choices: {
      A: "4200 kg",
      B: "4620 kg",
      C: "3680 kg",
      D: "3350 kg",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figures 4.5.2 & 4.5.3.2) For a flight from B to C: FL310 0.74 M ISA - 12oC 957 ngm 40 kt tailwind Weight 50,100 kg How much fuel is required to fly to C?",
    choices: {
      A: "4,600 kg",
      B: "4,500 kg FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "5,000 kg",
      D: "4,100 kg",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "Refer to CAP 697 figure 4.3.5) Given: Headwind: 50 kt Temperature: ISA +1oC Brake release mass: 65000 kg Trip fuel: 18000 kg What is the maximum possible trip distance?",
    choices: {
      A: "3480 ngm",
      B: "2540 ngm",
      C: "3100 ngm",
      D: "2740 ngm",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.1) Given: Track 340oT W/V 280/40 kt Aerodrome elevation: 387 ft ISA -10oC Brake release mass: 52500 kg Cruise at FL280 What are the climb fuel and time?",
    choices: {
      A: "15 min, 1100 kg",
      B: "12 min, 1100 kg",
      C: "10 min, 1000 kg",
      D: "11 min, 1000 kg",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures 4.2.2 & 4.5.3.2) Given: Estimated take-off mass: 57000 kg Ground distance: 150 NM Temperature: ISA -10oC Cruise at .74 Mach Find: Cruise altitude and expected true airspeed",
    choices: {
      A: "25000 ft, 435 kt",
      B: "24000 ft, 445 kt",
      C: "33500 ft, 430 kt",
      D: "33900 ft, 420 kt",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.3.1)Long Range Cruise at FL350OAT: -45oCGross mass at the beginning of the leg: 40000 kgGross mass at the end of the leg: 39000 kgFind: True airspeed (TAS) and cruise distance (NAM) for a twin jet aeroplane.",
    choices: {
      A: "TAS 433 KT, 227 NAM",
      B: "TAS 423 KT, 227 NAM",
      C: "TAS 431 KT, 1163 NAM",
      D: "TAS 423 KT, 936 NAM FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "Which of the following is correct? Given: DOM: 33510 kg Traffic load: 7600 kg Trip fuel: 2040 kg Final reserve: 983 kg Alternative fuel: 1100 kg Contingency: 5% of trip fuel",
    choices: {
      A: "est landing mass at destination 43,193 kg",
      B: "est landing mass at destination 43,295 kg",
      C: "est take-off mass 43,295 kg",
      D: "est take-off mass 45,233",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.3.2) Find the SPECIFIC RANGE for the twin jet aeroplane flying below the optimum altitude (range loss = 6%) and using the following data: Mach .74 cruise Flight level 310 Gross mass: 50000 kg ISA conditions",
    choices: {
      A: "2807 NAM/1000 kg",
      B: "187 NAM/1000 kg",
      C: "2994 NAM/1000 kg",
      D: "176 NAM/1000 kg",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.1 & paragraph 5.1) Planning an IFR-flight from Paris to London for a twin-jet aeroplane. Given: Estimated Take-off Mass (TOM): 52000 kg Airport elevation: 387 ft (Refer to CAP 697 figure 4.5.1 & paragraph 5.1) Planning an IFR-flight from Paris to London for a twin-jet aeroplane. Given: Estimated Take-off Mass (TOM): 52000 kg Airport elevation: 387 ft FL 280 W/V 280o/40 kt ISA Deviation: -10oC Average True course: 340o Find: Ground distance to the top of climb (TOC)",
    choices: {
      A: "53 NM",
      B: "56 NM",
      C: "50 NM",
      D: "47 NM",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 or figure HI-12 and CAP 697 figure 4.3.6)Planning a flight from Paris Charles-de-Gaulle (N49 00.9 E002 36.9) to London Heathrow (N51 29.2 W000 27.9) for a twin-jet aeroplane. The alternate airport is Manchester N53 21.4 W002 15.7). Pre-planning:The wind from London to ManchesterL 250o/30 ktThe distance from London to Manchester: 160 NMAssume the Estimated Landing Mass at alternate is 50000 kgFind the alternate fuel and time",
    choices: {
      A: "1200 kg and 26 minutes",
      B: "1300 kg and 28 minutes",
      C: "1600 kg and 36 minutes",
      D: "1450 kg and 32 minutes",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures 4.3.1.B & 4.5.3.1) Given for the twin jet aeroplane: Zero fuel mass: 50000 kg Landing mass at alternate: 52000 kg Final reserve fuel: 2000 kg Alternate fuel: 1000 kg Flight to destination: Distance 720 NM, TC 030o, W/V 340o/30 kt Cruise: LRC, FL 330, OAT -30oC (Refer to figures 4.3.1.B & 4.5.3.1) Given for the twin jet aeroplane: Zero fuel mass: 50000 kg Landing mass at alternate: 52000 kg Final reserve fuel: 2000 kg Alternate fuel: 1000 kg Flight to destination: Distance 720 NM, TC 030o, W/V 340o/30 kt Cruise: LRC, FL 330, OAT -30oC Find: Estimated trip fuel and time with simplified flight planning.",
    choices: {
      A: "4750 kg, 02:00",
      B: "4400 kg, 02:05",
      C: "4800 kg, 01:51",
      D: "4600 kg, 02:05",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure .5.1)Planning an IFR flight from Paris to London for the twin-jet aeroplane.Given:Estimated Take-off Mass (TOM): 52000 kgAirport elevation: 387 ftFL 280W/V 280o/40 ktISA Deviation: -10oCAverage True Course: 340oFind: Fuel to the top of climb (TOC).",
    choices: {
      A: "1100 kg",
      B: "1000 lbs",
      C: "1000 kg",
      D: "1500 lbs",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 4.5.3.1)Given:FL 330Long range cruiseOAT: -63oCGross mass: 50500 kgFind: true airspeed (TAS)",
    choices: {
      A: "420 kt",
      B: "433 kt",
      C: "431 kt",
      D: "418 kt",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 or figure HI-11 and CAP 697 figure 4.3.2A)Planning a flight from Paris Charles-de-Gaulle (N49 00.9 E002 36.9) to Heathrow (N51 29.2 W000 27.9) for a twin-jet aeroplane. Pre- planning:Powersetting: Mach=0.74Planned flight level: FL 280Landing Mass in the fuel graph: 50000 kgTrip (Refer to Route Manual chart E(HI)4 or figure HI-11 and CAP 697 figure 4.3.2A)Planning a flight from Paris Charles-de-Gaulle (N49 00.9 E002 36.9) to Heathrow (N51 29.2 W000 27.9) for a twin-jet aeroplane. Pre- planning:Powersetting: Mach=0.74Planned flight level: FL 280Landing Mass in the fuel graph: 50000 kgTrip distance used for calculation: 200 NMWind from Paris to London: 280o/40 ktFind the estimated trip fuel. Answers",
    choices: {
      A: "1450 kg",
      B: "1550 kg",
      C: "1900 kg",
      D: "1740 kg",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.4)Planning an IFR-flight from Paris to London for the twin jet aeroplaneGiven:Estimated Landing Mass: 49700n kgFL 280W/V 280o/40 ktAverage True Course: 320oProcedure for descent: .74M/250 KIASDetermine the distance from the top of descent to London (elevation 80 ft)",
    choices: {
      A: "87 NM",
      B: "97 NM",
      C: "65 NM",
      D: "76 NM",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.4)Planning an IFR-flight from Paris to London for the twin jet aeroplane.Given:Estimated Landing Mass: 49700 kgFL 280W/V 280o/40 ktAverage True Course: 320oProcedure for descent: .74M/250 KIASDetermine the fuel consumption from the top of descent to London (elevation 80 ft)",
    choices: {
      A: "210 kg",
      B: "320 kg",
      C: "273 kg",
      D: "263 kg",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 4.3.5)Given a trip time of about 9 hours, within the limits of the data given, a temperature decrease of 30oC will affect the trip time by approximately",
    choices: {
      A: "-10%",
      B: "+7%",
      C: "+3%",
      D: "-4%",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 4.3.5)For a flight of 3500 ground nautical miles, the following apply:Tail wind component: 50 ktTemperature: ISA +10oCBrake release mass: 65000 kgThe (a) trip fuel and (b) trip time respectively are",
    choices: {
      A: "(a) 21800 kg (b) 9 hr 25 min",
      B: "(a) 19000 kg (b) 7 hr 45 min",
      C: "(a) 18100 kg (b) 7 hr 20 min",
      D: "(a) 15800 kg (b) 6 hr 00 min",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 4.3.5)For a flight of 2400 ground nautical miles, the following apply:Tailwind: 25 ktTemperature: ISA -10oCBrake release mass: 66000 kgThe (a) trip fuel and (b) trip time respectively are",
    choices: {
      A: "(a) 14600 kg (b) 5 hr 45 min",
      B: "(a) 15000 kg (b) 6 hr 00 min",
      C: "(a) 14000 kg (b) 5 hr 35 min",
      D: "(a) 15800 kg (b) 6 hr 20 min",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 4.7.3)Given:Diversion fuel available: 8500 kgDiversion cruise altitude: 10000 ftMass at point of diversion: 62500 kgHeadwind component: 50 ktTemperature: ISA -5oCThe (a) maximum diversion distance, and (b) elapsed time alternate, are approximately",
    choices: {
      A: "(a) 760 NM (b) 4 hr 30 min",
      B: "(a) 1130 NM (b) 3 h 30 min",
      C: "(a) 860 NM (b) 3 h 20 min",
      D: "(a) 1000 NM (b) 3 h 40 min",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Flight Planning Manual figure 4.7.2)For the purpose of planning an extended range flight it is required that with a start of diversion mass of 55000 kg a diversion of 600 nautical miles should be achieved in 90 minutes. Using the above table, the only listed cruise technique to meet that requirement is: Answers",
    choices: {
      A: "LRC",
      B: "M/KIAS .74/330",
      C: "M/KIAS .74/290",
      D: "M/KIAS .70/280",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "Refer to Flight Planning Manual figure 4.7.2)Using the above table, in ISA conditions and at a speed of M.70/280 KIAS, in an elapsed time of 90 minutes an aircraft with mass at point of diversion 48000 kg could Refer to Flight Planning Manual figure 4.7.2)Using the above table, in ISA conditions and at a speed of M.70/280 KIAS, in an elapsed time of 90 minutes an aircraft with mass at point of diversion 48000 kg could divert a distance of",
    choices: {
      A: "584 NM",
      B: "563 NM",
      C: "603 NM",
      D: "608 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Flight Planning Manual figure 4.7.2)An aircraft on an extended range operation is required never to be more than 120 minutes from an alternate, based on 1 engine inoperative LRC conditions in ISA. Using the above table and a given mass of 40000 kg at the most critical point, the maximum air distance to the relevant alternate is: Answers",
    choices: {
      A: "735 NM",
      B: "794 NM",
      C: "810 NM",
      D: "875 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figures 4.8.1 + 4.8.2)An aircraft is planned to fly a LRC at FL350, ISA -10oC at an average gross cruise weight of 55000 kg and a Landing Weight (Without Tankered Fuel) of 47500 kg; the wind component is -30 kts and the trip distance 1600 NGM.Calculate the Break Even Fuel Price Destination Airport if the Fuel Price at Departure Airport is 75 cents/US Gallon. Answers",
    choices: {
      A: "90 cents",
      B: "80 cents",
      C: "95 cents",
      D: "85 cents",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figures 4.8.1 + 4.8.2)An aircraft is tasked to fly a .74 Mach cruise at FL310, ISA +15oC with a Landing Weight (Without Tankered Fuel) of 40000 kg. The sector distance is 1050 NGM, wind component +35 kt.Calculate the Break Even Fuel Price at Destination if the Fuel price at Departure is 85 cents/US Gallon. Answers",
    choices: {
      A: "85 cents",
      B: "92 cents",
      C: "98 cents",
      D: "80 cents FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures 033_204A, 033_204B, 033_204C)The flight crew of a turbojet aeroplane prepares a flight using the following data:Flight leg ground distance: 4000 NMFlight Level 370: LONG RANGE flight regimeEffective wind at this level: 50 kt headTemperature: ISACentre of Gravity (CG): 37%Pack Flow: LOW (LO)Anti Ice: OFFReference Landing Mass: 140000 kgTaxi Fuel: 500 kgFinal Reserve Fuel: 2400 kgThe fuel quantity which must be loaded on board the aircraft is",
    choices: {
      A: "41590 kg",
      B: "51860 kg",
      C: "52060 kg",
      D: "46340 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-01 and LRJT-02-A)A turbojet aeroplane is prepared for a 1300 NM flight at FL350, with a true airspeed of 460 kt and a headwind of 160 kt. The take-off runway limitation is 174000 kg, the planned departure mass is 160000 kg. The departure fuel price is equal to 0.92 times the arrival fuel price (fuel price ratio = 0.92). In order for the airline to optimise its savings, the additional fuel quantity that must be loaded onboard is",
    choices: {
      A: "0 kg",
      B: "14000 kg",
      C: "30000 kg",
      D: "12000 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-01 and LRJT-02-A)Assuming a departure/destination fuel price ratio of 0.91, the commander decides to optimise fuel tinkering by using the following data:Cruise flight level: FL 350Air distance to be covered: 2500 NMPlanned take off mass: 200000 kg (with the minimum prescribed fuel quantity of 38000 kg that includes a trip fuel of 29000 kg)Maximum landing mass: 180000 kgMaximum take off mass: 205000 kgMaximum tank capacity: 40000 kgThe additional fuel quantity will be",
    choices: {
      A: "0 kg",
      B: "3000 kg",
      C: "2000 kg",
      D: "5000 kg",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-18 and LRJT-19)In standard atmosphere, assuming a mass of 197000 kg, in order to fly at FL 370 and to be at the optimum altitude, your Mach number should be",
    choices: {
      A: "0.82",
      B: "0.84",
      C: "0.80",
      D: "the same as for LRC (Long Range Cruise)",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-03, 04 and 08)Knowing that:Mass at brake release: 210000 kgSelected cruise speed: 0.82 MachFlight leg distance: 3000 NMCruise level: optimumAir conditioning: standardAnti-icing: OFFTemperature: ISACG: 37Assuming zero wind, the planned landing mass at destination will be",
    choices: {
      A: "172300 kg",
      B: "170400 kg",
      C: "171300 kg",
      D: "176100 kg",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-03. 04 and 07)Knowing that:Mass at brake release: 190000 kgSelected cruise speed: 0.82 MachFlight leg distance: 1500 NMCruise level: optimumAir conditioning: standardAnti-icing: OFFTemperature: ISACG: 37%Assuming zero wind, the planned landing mass at destination will be",
    choices: {
      A: "169200 kg",
      B: "170200 kg",
      C: "174800 kg",
      D: "171200 kg",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-03, 04 and 07)Knowing that:Mass at brake release: 190000 kgSelected cruise speed: 0.82 MachFlight leg distance: 1500 NMCruise level: optimumAir conditioning: standardAnti-icing: OFFTemperature: ISACG: 37%Assuming zero wind, the planned flight time from take-off to landing needed to complete this flight will be: Answers",
    choices: {
      A: "209 minutes",
      B: "191 minutes",
      C: "198 minutes",
      D: "203 minutes",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-03, 04 and 08)Knowing that:Mass at brake release: 210000 kgSelected cruise speed: 0.82 MachAir distance: 3000 NMCruise level:optimumAir conditioning: standardAnti-icing: OFFTemperature: ISACG: 37%Assuming zero wind, the planned flight time from take-off to landing needed to complete this flight will be: Answers",
    choices: {
      A: "394 minutes",
      B: "389 minutes",
      C: "400 minutes",
      D: "381 minutes",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure LRJT-05)For a long distance flight at FL370, Long Range regime, divided into four flight legs with the following specifications:Segment AB Ground distance: 2000 NM, headwind component: 50 ktSegment BC Ground distance: 1000 NM, headwind component: 30 ktSegment CD Ground distance: 500 NM, tailwind component: 70 ktSegment DE Ground distance: 1000 NM, headwind component: 20 ktThe total air distance is approximately",
    choices: {
      A: "4580 NM",
      B: "4820 NM",
      C: "4800 NM",
      D: "4940 NM",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure LRJT-18)For a turbojet aeroplane flying with a mass of 190000 kg, at Mach 0.82m and knowing that the temperature at flight level FL370 is 35oC, the optimum flight altitude calculated using the annex is",
    choices: {
      A: "37400 ft",
      B: "37800 ft",
      C: "34800 ft",
      D: "38600 ft",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-15-A)The flight crew of a turbojet aeroplane prepares a flight using the following data:Take-off mass: 168500 kgFlight leg ground distance: 2000 NMFlight level FL 370: Long Range flight regimeTailwind component at this level: 30 ktTotal anti-ice set on ONFixed taxi fuel: 500 kg; final reserve: 2000 kgIgnore alternate fuelThe effects of climb and descent are not corrected for consumptionThe prescribed quantity of trip fuel for the flight leg is",
    choices: {
      A: "23300 kg",
      B: "20500 kg",
      C: "23000 kg FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "22500 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure LRJT-17-B)The flight crew of a turbojet aeroplane prepares a flight using the following data:Take-off mass: 210500 kgFlight leg ground distance: 2500 NMFlight level FL330: Long Range flight regimeTailwind component at this level: 70 ktTotal anti-ice set on ON Fixed taxi fuel: 500 kgFinal reserve: 2400 kgIgnore alternate fuelThe effects of climb and descent are not corrected for consumption.The quantity of fuel that must be loaded at the parking area is",
    choices: {
      A: "31840 kg",
      B: "31340 kg",
      C: "30200 kg",
      D: "39750 kg",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure LRJT-12)A turbojet aeroplane flies using the following data:Flight level: FL 330Flight regime: Long Range (LR)Mass: 156500 kgTailwind component at this level: 40 ktWith a remaining flight time of 1h 10 min the ground distance that can be covered by the aeroplane at cruising speed is",
    choices: {
      A: "471 NM",
      B: "518 NM",
      C: "539 NM",
      D: "493 NM",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-01 and LRJT-02-B)The flight crew of a turbojet aeroplane prepares a flight using the following data:Flight leg air distance: 2700 NMFlight level FL 310, true airspeed: 470 ktTailwind component at this level: 35 ktInitially planned take off mass (without extra fuel on board): 195000 kgFuel price: 0.20 Euro/l at departure; 0.26 Euro/l at destinationTo maximise savings, the commander chooses to carry extra fuel in addition to that which is necessary. The optimum quantity of fuel which should be carried in addition to the prescribed quantity is",
    choices: {
      A: "10000 kg",
      B: "The fuel transport operation is not recommended in this case",
      C: "5000 kg",
      D: "8000 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-01 and LRJT-02-B)The flight crew of a turbojet aeroplane prepares a flight using the following data:Flight leg air distance: 2700 NMFlight level FL 310, true airspeed: 470 ktTailwind component at this level: 35 ktInitially planned take-off mass (without extra fuel on board): 180000 kgFuel price: 0.28 Euro/l at departure; 0.26 Euro/l at destinationTo maximise savings, the commander chooses to carry extra fuel in addition to that which is necessary. The optimum quantity of fuel which should be carried in addition to the prescribed quantity is",
    choices: {
      A: "4000 kg",
      B: "6000 kg",
      C: "10000 kg",
      D: "The fuel transport operation is not recommended in this case",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-09, 10 and 12)Given:Take off mass: 150000 kgPlanned cruise at FL 350Long range MACHStandard Atmosphere (ISA)CG: 37%You have to cover an air distance of 2000 NM. Your flight time will be",
    choices: {
      A: "359 minutes",
      B: "304 minutes",
      C: "288 minutes",
      D: "298 minutes",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure LRJT-05)For a long distance flight at FL 390, Long Range regime, divided into four flight legs with the following characteristics:Segment AB Ground distance: 2000 NM, headwind component: 50 ktSegment BC Ground distance: 1000 NM, headwind component: 30 ktSegment CD Ground distance: 500 NM, tailwind component 100 ktSegment DE Ground distance: 1000 NM, headwind component: 70 ktThe air distance of the entire flight is approximately",
    choices: {
      A: "5040 NM",
      B: "4900 NM",
      C: "5120 NM",
      D: "4630 NM",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-03, 04, 07 and 08)Planning a MACH 0.82 cruise at FL 390, the estimated landing mass is 160000 kg. The ground distance is 2800 NM and the mean wind is equal to zero. ISA conditions. Fuel consumption will be",
    choices: {
      A: "30371 kg",
      B: "32657 kg",
      C: "30117 kg FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "27577 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures 033_LRJT-03, -04, -07, 08)Planning a MACH 0.82 cruise at FL 390, the estimated landing mass is 160000 kg; the ground distance 2800 NM and the mean tailwind is 100 kt; ISA conditions. Fuel consumption will be",
    choices: {
      A: "26950 kg",
      B: "22860 kg",
      C: "24900 kg",
      D: "30117 kg",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure LRJT-14)A turbojet aeroplane, weighing 200000 kg, initiates its cruise at the optimum level at M 0.84 (ISA CG=37%, Total Anti Ice ON). A headwind of 30 kt is experienced and, after a distance of 500 NM, severe icing is encountered and this requires an immediate descent. The aeroplane mass at start of descent is: Answers",
    choices: {
      A: "193800 kg",
      B: "192500 kg",
      C: "193000 kg",
      D: "193400 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-09, 10 and 12)Given:Take-off mass: 150000 kgPlanned cruise at FL350Long range MACHStandard Atmosphere (ISA)CG: 37%Covering an air distance of 2000 NM, your trip fuel from take-off to landing will be",
    choices: {
      A: "20260 kg",
      B: "22360 kg",
      C: "19660 kg",
      D: "21760 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure LRJT-11)A turbojet aeroplane is flying using the following data:Flight level FL250, Long Range (LR) cruise, mass of 150000 kgTemperature: ISAHeadwind component: 100 ktRemaining flight time: 1h 40 min\\The ground distance that can be covered during the cruise flight is",
    choices: {
      A: "445 NM FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "612 NM",
      C: "841 NM",
      D: "2031 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure LRJT-13)A turbojet aeroplane is flying using the following data:Optimum flight level, Mach 0.80, mass of 190000 kgTemperature: ISATailwind component: 100 ktThe fuel mileage and the fuel consumption per hour are",
    choices: {
      A: "105 NM/1000 kg; 6515 kg/h",
      B: "86 NM/1000 kg; 6515 kg/h",
      C: "71 NM/1000 kg; 5330 kg/h",
      D: "105 NM/1000 kg; 5330 kg/h",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-03 and 07)Assuming the following data:Ground distance to be covered: 2600 NMCruise flight level: FL 370Cruising speed: Mach 0.82 (true airspeed: 470 kt)Wind: zero wind during flightPlanned destination landing mass: 140000 kgTemperature: ISA +15oCCG: 37%Total anti-ice: ONAir conditioning: normalFuel consumption for such a flight is: Answers",
    choices: {
      A: "29400 kg",
      B: "27400 kg",
      C: "31500 kg",
      D: "29100 kg",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-03 and 07)Assuming the following data:Ground distance to be covered: 2500 NMCruise flight level: FL 350Cruising speed: Mach 0.82 (true airspeed: 470 kt)Tailwind component: 40 ktPlanned destination landing mass: 150000 kgTemperature: ISACG: 37%Total anti-ice: OFFAir conditioning: normalFuel consumption for such a flight is: Answers",
    choices: {
      A: "27800 kg",
      B: "27000 kg",
      C: "28300 kg",
      D: "29200 kg",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-03 and 07)Assuming the following data:Ground distance to be covered: 1500 NMCruise flight level: FL 310Cruising speed: Mach 0.82 (true airspeed: 470 kt)Headwind component: 40 ktPlanned destination landing mass: 140000 kgTemperature: ISA +15oCCG: 37%Total anti-ice: ONPack flow: HIFuel (Refer to figures LRJT-03 and 07)Assuming the following data:Ground distance to be covered: 1500 NMCruise flight level: FL 310Cruising speed: Mach 0.82 (true airspeed: 470 kt)Headwind component: 40 ktPlanned destination landing mass: 140000 kgTemperature: ISA +15oCCG: 37%Total anti-ice: ONPack flow: HIFuel consumption for such a flight is: Answers",
    choices: {
      A: "23500 kg",
      B: "21500 kg",
      C: "21700 kg",
      D: "19900 kg",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-01 and LRJT-02-A)Assuming a departure/destination fuel price ratio of 0.92, the commander decides to optimise fuel tinkering by using the following data:Cruise flight level: FL 350Air distance to be covered: 1830 NMPlanned take-off mass: 190000 kg (with a minimum prescribed fuel quantity of 30000 kg that includes a trip fuel of 22000 kg)Maximum landing mass: 180000 kgMaximum take-off mass: 205000 kgMaximum tank capacity: 40000 kgRef: AIR: atplAns: A23736. (Refer to figures LRJT-03 and 07)Assuming the following data:Ground distance to be covered: 2000 NMCruise flight level: FL 330Cruising speed: Mach 0.82 (true airspeed: 470 kt)Headwind component: 30 ktPlanned destination landing mass: 160000 kgTemperature: ISACG: 37%Total anti-ice: ONPack flow: HITime needed to carry out such a flight is",
    choices: {
      A: "4h 26 min",
      B: "5h 02 min",
      C: "4h 10 min",
      D: "4h 43 min",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-01 and LRJT-02-B)The flight crew of a turbojet aeroplane prepares a flight using the following data:Flight leg distance: 3500 NMFlight level FL 310, true airspeed: 450 ktHeadwind component at this level: 5 ktInitially planned take-off mass (without extra fuel on board): 180000 kgFuel price: 0.35 $/l at departure; 0.315 $/l at destinationTo miximise savings, the commander chooses to carry extra fuel in addition to that which is necessary. Using the appended annex, the optimum quantity of fuel which should be carried in addition to the prescribed quantity is",
    choices: {
      A: "8000 kg",
      B: "The fuel transport operation is not recommended in this case",
      C: "22000 kg",
      D: "15000 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-01 and LRJT-02-B)The flight crew of a turbojet aeroplane prepares a flight using the following data:Flight leg distance: 4000 NMFlight level FL 310, true airspeed: 450 ktHeadwind component at this level: 50 ktInitially planned take-off mass (without extra fuel on board): 170000 kgFuel price: 0.27 Euro/l at departure; 0.30 Euro/l at destinationTo maximise savings, the commander chooses to carry extra (Refer to figures LRJT-01 and LRJT-02-B)The flight crew of a turbojet aeroplane prepares a flight using the following data:Flight leg distance: 4000 NMFlight level FL 310, true airspeed: 450 ktHeadwind component at this level: 50 ktInitially planned take-off mass (without extra fuel on board): 170000 kgFuel price: 0.27 Euro/l at departure; 0.30 Euro/l at destinationTo maximise savings, the commander chooses to carry extra fuel in addition to that which is necessary. Using the appended annex, the optimum quantity of fuel which should be carried in addition to the prescribed quantity is",
    choices: {
      A: "the fuel transport operation is not recommended in this case",
      B: "18000 kg",
      C: "32000 kg",
      D: "8000 kg",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-01 and LRJT-02-B)The flight crew of a turbojet aeroplane prepares a flight using the following data:Flight leg distance: 3500 NMFlight level FL 310, true airspeed: 450 ktHeadwind component at this level: -55 ktInitially planned take-off mass (without extra fuel on board): 180000 kgFuel price:: 0.30 Euro/l at departure; 0.27 Euro/l at destinationTo maximise savings, the commander decides to carry extra fuel in addition to that which is necessary. Using the appended annex, the optimum quantity of fuel which should be carried in addition to the prescribed quantity is",
    choices: {
      A: "22000 kg",
      B: "15000 kg",
      C: "8000 kg",
      D: "The fuel transport operation is not recommended in this case",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-15-B)The flight crew of a turbojet aeroplane prepares a flight using the following data:Flight level FL 370 at Long Range (LR) cruise regimeMass at brake release: 212800 kgFlight leg ground distance: 2500 NMTemperatures: ISACG: 37%Headwind component: 30 kt Total anti-ice set on ON for the entire flightNo requested climb and descent correction of the fuel consumptionThe fuel consumption (from take-off to landing) is",
    choices: {
      A: "30440 kg",
      B: "34430 kg",
      C: "32480 kg",
      D: "28720 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-01 and LRJT-02-B)The flight crew of a turbojet aeroplane prepares a flight using the following data:Flight leg distance: 3500 NMFlight level FL 310, true airspeed: 450 ktHeadwind component at this level: 55 ktInitially planned take-off mass (without extra fuel on board): 180000 kgFuel price: 0.27 $/l at destinationThe commander may carry on board 8000 kg more fuel than that which is necessary. For this fuel transport operation to be cost effective, the maximum fuel price at departure must be",
    choices: {
      A: "0.38 $/l",
      B: "0.30 $/l",
      C: "0.24 $/l",
      D: "0.21 $/l",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-01 and LRJT-02-B)The flight crew of a turbojet aeroplane prepares a flight using the following data:Flight leg distance: 3500 NMFlight level FL 310, true airspeed: 450 ktHeadwind component at this level: 55 ktInitially planned take-off mass (without extra fuel on board): 180000 kgFuel price: 0.30 $/l at departureThe commander may carry a fuel quantity of 8000 kg in addition to that which is necessary. For this fuel transport operation to be cost effective, the maximum fuel price at arrival must be",
    choices: {
      A: "0.27 $/l",
      B: "0.26 $/l",
      C: "0.28 $/l",
      D: "0.33 $/l",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures LRJT-15B)The flight crew of a turbojet aeroplane prepares a flight using the following data:Flight level FL 370 at Long Range (LR) cruise regime(Prescribed) mass at brake release: 204500 kgFlight leg ground distance: 2000 NMTemperatures: ISAHeadwind component: 70 kt Total anti-ice set on ON for the entire flightno requested climb and descent correction of the fuel consumptionThe fuel required from take- off to landing is",
    choices: {
      A: "27770 kg",
      B: "20900 kg",
      C: "22160 kg",
      D: "29440 kg",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figures 4.5.2 & 4.5.3.1-340)Given:Long range cruise at FL340Distance C-D 3200 nmTemperature deviation from ISA +12oCTailwind component 50 ktGross mass at C 55000 kgThe fuel required C-D is",
    choices: {
      A: "17500 kg",
      B: "14200 kg FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "17800 kg",
      D: "14400 kg",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.3.1-350)Given:Long Range Cruise at FL350OAT -45oCGross mass at the beginning of the leg 40000 kgGross mass at the end of the leg 39000 kgFind: True airspeed (TAS) and cruise distance (NAM) for a twin jet aeroplane",
    choices: {
      A: "TAS 433 KT, 227 NAM",
      B: "TAS 423 KT, 227 NAM",
      C: "TAS 433 KT, 1163 NAM",
      D: "TAS 423 KT, 936 NAM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.1A)Given:Aerodrome at MSLCruise at FL 280ISA -10oCBrake release mass 57500 kgWhat is the climb fuel required?",
    choices: {
      A: "1100 kg",
      B: "1150 kg",
      C: "1138 kg",
      D: "2200 kg",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.4 and Jeppesen Student Manual LONDON Heathrow 10-2 STAR or figure AP- 08)Aircraft mass: 49700 kgFL 280Plan a descent to Heathrow elevation. What is the descent time?",
    choices: {
      A: "8 mins",
      B: "10 mins",
      C: "17 mins",
      D: "19 mins",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.3.1-330)Given:Long range cruise:Temperature -63oC at FL 330Initial gross mass en-route 54100 kgLeg flight time 29 minFind:Fuel consumption for this leg",
    choices: {
      A: "1100 kg",
      B: "1107 kg",
      C: "1093 kg FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "1000 kg",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.1C)Trip distance 1900 NMFuel on board 15000 kgLanding weight 50000 kgWhat is the minimum pressure altitude for this flight?",
    choices: {
      A: "17000 ft",
      B: "10000 ft",
      C: "FL370",
      D: "FL250",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.6)Alternate airfield is 300 NGM, 50 kt tailwind and a landing weight of 50000 kg, what is the fuel and time to the alternate?",
    choices: {
      A: "1950 kg, 48 mins",
      B: "1650 kg, 48 mins",
      C: "2100 kg, 57 mins",
      D: "1950 kg, 57 mins",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.4)What is the time, fuel required and nautical air miles to descend from FL350 to sea level in turbulent air given an estimated landing weight of 50000 kg?",
    choices: {
      A: "20 mins, 325 kg, 99 nam",
      B: "22 mins, 290 kg, 108 nam",
      C: "22 mins, 290 kg, 105 nam",
      D: "20 mins, 275 kg, 99 nam",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.6.1)After suffering undercarriage and pressurisation problems the aircraft is to be flown, undercarriage down, 400 NGM at FL100 for repairs. The estimated landing weight is 30000 kg, the temperature is ISA +20oC and a 50 kt headwind is expected. What is the fuel and time required for the trip?",
    choices: {
      A: "7500 kg, 2h",
      B: "6400 kg, 2h 5 min",
      C: "4600 kg, 1hr 40 min",
      D: "5800 kg, 2h FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.2.1)With a cruise weight of 50000 kg. Cruising at Mach 0.78, what is the optimum altitude?",
    choices: {
      A: "36200 ft",
      B: "35800 ft",
      C: "35400 ft",
      D: "36700 ft",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.1D)An aircraft climbs out from an aerodrome at MSL to FL250, under ISA +20oC conditions. If the brake release weight is 60000 kg, what is the fuel and ground distance covered with a 40 kt tailwind?",
    choices: {
      A: "1100 kg, 62 NGM",
      B: "1100 kg, 48 NGM",
      C: "1300 kg, 64 NGM",
      D: "1300 kg, 81 NGM",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.4)An aircraft weighing 56000 kg is required to carry on an en-route straight and level hold at FL350 for 50 minutes. How much fuel will be used in the hold?",
    choices: {
      A: "2017 kg",
      B: "1917 kg",
      C: "2133 kg",
      D: "2027 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.3.1-350)An aircraft cruising at FL350 in light and variable winds turn at waypoint ALPHA weighing 53500 kg and later turns waypoint BRAVO now weighing 50,200 kg. Assuming standard conditions what is the TAS, distance and specific fuel consumption between ALPHA and BRAVO?",
    choices: {
      A: "429 kt, 627 nm, 5.26 kg/nm",
      B: "426 kt, 631 nm, 5.22 kg/.nm",
      C: "429 kt, 627 nm, 6.25 kg/nm",
      D: "429 kt, 573 nm, 5.24 kg/nm FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.8.2)The surplus burnoff for tinkering fuel is 20%. If the price at the departure airfield is 100 cents/gallon, what is the break-even price at the destination airfield?",
    choices: {
      A: "125 cents/gallon",
      B: "100 cents/gallon",
      C: "80 cents/gallon",
      D: "103 cents/gallon",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.1B)Given a distance of 1000 NGM, 50 kt tailwind, ISA +0oC, cruise FL370 and landing weight of 35000 kg. What is the fuel and time for the trip?",
    choices: {
      A: "4950 kg, 2 hrs 15 mins",
      B: "5350 kg, 2 hrs 15 mins",
      C: "4300 kg, 2 hrs 40 mins",
      D: "4300 kg, 2 hrs 15 mins",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.6)Given:Estimated dry operating mass: 35500 kgEstimated load: 14500 kgFinal reserve fuel: 1200 kgDistance to alternate: 95 nmAverage true track: 219oHeadwind component: 10 ktFind:fuel to alternatetime to alternate",
    choices: {
      A: "(i) 1100 kg (ii) 44 min",
      B: "(i) 1100 kg (ii) 25 min",
      C: "(i) 800 kg (ii) 24 min",
      D: "(i) 800 kg 9ii) 40 min",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.4)A descent is planned at .74/250 KIAS from 35000 ft to 5000 ft. How much fuel will be consumed during this descent?",
    choices: {
      A: "290 kg",
      B: "150 kg",
      C: "278 kg",
      D: "140 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.4)Assume .74M/250 KIAS descent profile. How much time will elapse from top of descent (FL 350) to level off at 5000 feet?",
    choices: {
      A: "6 minutes",
      B: "16 minutes",
      C: "22 minutes",
      D: "23 minutes",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.3.1-330)Given:Long range cruise at FL 330OAT -63oCGross mass 50500 kgFind the True airspeed (TAS)",
    choices: {
      A: "433 kt",
      B: "418 kt",
      C: "431 kt",
      D: "420 kt",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.3.1-350)Given:Long range cruiseOAT -45oCFL350Headwind component: 40 ktStart mass: 60000 kgEnd mass: 55000 kgFind:the TAS at the end of the legthe distance (NGM)",
    choices: {
      A: "(i) 429 kt (ii) 864 ngm",
      B: "(i) 430 kt (ii) 864 ngm",
      C: "(i) 440 kt (ii) 864 ngm",
      D: "(i) 440 kt (ii) 785 ngm",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.6)Planning a flight from Paris (Charles-de-Gaulle) to London (Heathrow) for a twin jet aeroplane with alternate Manchester.Given:Headwind component from London to Manchester : 10 ktDistance from London to Manchester: 160 nmAssume the Estimated Landing Mass at the alternate is 50000 kgFind:the alternate fuelthe corresponding time Answers",
    choices: {
      A: "(i) 1200 kg (ii) 26 minutes",
      B: "(i) 1300 kg (ii) 28 minutes",
      C: "(i) 1600 kg (ii) 36 minutes",
      D: "(i) 1450 kg (ii) 33 minutes",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.1C)Given:Cruising altitude: 29000 ftTemperature: ISA -10oCTailwind component: 45 ktsLanding mass: 55000 kgDistance: 2800 nautical ground milesFind:Trip timeFuel burn",
    choices: {
      A: "(i) 6 hrs 25 mins (ii) 16000 kg",
      B: "(i) 6 hrs 40 mins (ii) 20000 kg",
      C: "(i) 5 hrs 50 mins (ii) 18000 kg",
      D: "(i) 6 hrs 7 mins (ii) 17100 kg",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figue 4.3.6)Given:Estimated Dry Operating Mass: 35500 kgEstimated load: 14500 kgFinal reserve fuel: 1200 kgDistance to alternate: 95 nmAverage true track: 219oHeadwind component: 10 ktFind: fuel andtime to alternate",
    choices: {
      A: "(i) 1100 kg (ii) 25 min",
      B: "(i) 1100 kg (ii) 44 min",
      C: "(i) 800 kg (ii) 24 min",
      D: "(i) 800 kg (ii) 40 min",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.1A)Given:Estimated Take Off Mass: 52000 kgAirport elevation: 387 ftCruise: FL 280Wind velocity: 280/40Temperature: ISA -10oCAverage course: 340o (T)Find the ground distance to Top of Climb (TOC)",
    choices: {
      A: "56 nm",
      B: "50 nm",
      C: "53 nm",
      D: "47 nm",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.1C)Given:Brake release mass: 64000 kgTemperature: ISA +10oCAirport elevation: 3000 ftFind: Time, Fuel, Still air distance and TAS for an en-route climb at Mach .74/280 kts to FL 350",
    choices: {
      A: "26 min, 1975 kg, 157 NAM, 399 kts",
      B: "26 min, 2050 kg, 157 NAM, 399 kts",
      C: "20 min, 1750 kg, 117 NAM, 288 kts",
      D: "25 min, 1875 kg, 148 NAM, 391 kts",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.3.2A)Given:Cruise profile: Mach 0.74Planned flight level: FL280Estimated Landing Mass: 50000 kgTrip distance: 200 nmWind component: 30 kts headwindFind the estimated trip fuel",
    choices: {
      A: "1740 kg",
      B: "1550 kg",
      C: "1900 kg",
      D: "1450 kg",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.3.1 280)Given:Long Range Cruise (LRC) procedureTime from Top of Climb to en- route pont at FL 280 is 48 minTemperature: ISA -5oCTake-off mass: 56000 kgClimb fuel: 1100 kgFind:distance in Nautical Air Miles (NAM) for this legfuel consumption",
    choices: {
      A: "(i) 345 NAM (ii) 1994 kg",
      B: "(i) 349 NAM (ii) 2000 kg",
      C: "(i) 345 NAM (ii) 2000 kg",
      D: "(i) 345 NAM (ii) 2006 kg",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 4.5.1A)Given:Mass at brake release: 57500 kgTemperature: ISA -10oCHeadwind component: 16 ktsInitial cruise: FL280Find: climb fuel",
    choices: {
      A: "1238 kg",
      B: "1138 kg",
      C: "1387 kg",
      D: "1040 kg",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "Which of the following statements is (are) correct with regard to computer flight plans? approach and landing at the destination alternate 1. The computer takes account of bad weather on the route and adds extra fuel 2. The computer calculates alternate fuel sufficient for a missed approach, climb, cruise, descent and Answers",
    choices: {
      A: "Statement 1 only",
      B: "Both statements",
      C: "Statement 2 only",
      D: "Neither statement",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "Reference computer flight plans.Are they able to account for bad weather in calculating fuel required?",
    choices: {
      A: "can automatically allow extra consumption for anti-icing use",
      B: "can automatically divert route around forecast thunderstorms",
      C: "no",
      D: "can automatically allow for poorly maintained engines",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "Which of the following statements is (are) correct with regard to the advantages of computer flight plans? 1. The computer can file the ATC flight plan 2. Wind data used by the computer is always more up-to-date than that available to the pilot",
    choices: {
      A: "Statement 1 only",
      B: "Statement 2 only",
      C: "Both statements",
      D: "Neither statement",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Which of the following statements is (are) correct with regard to the operation of flight planning comuters? 1. The computer can file the ATC flight plan 2. In the event of inflight re-routing the computer produces a new plan",
    choices: {
      A: "1 only",
      B: "2 only",
      C: "Neither",
      D: "Both",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "If CAS is 190 kts, Altitude 9000 ft, Temp. ISA 10oC, True Course (TC) 350o, W/V 320/40, distance from departure to destination is 350 NM, endurance 3 hours, and actual time of departure is 1105 UTC.The Point of Equal Time (PET) is reached at",
    choices: {
      A: "1214 UTC",
      B: "1221 UTC",
      C: "1233 UTC",
      D: "1203 UTC",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: 15000 kg total fuel Reserve 1500 kg Given: 15000 kg total fuel Reserve 1500 kg TAS 440 kt Wind component 45 head outbound Average fuel flow 2150 kg/hr What is the distance to the point of safe return?",
    choices: {
      A: "1520 nm",
      B: "1368 nm",
      C: "1702 nm",
      D: "1250 nm",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "If CAS is 190 kts, Altitude 9000 ft, Temp. ISA -10oC, True Course (TC) 350o, W/V 320/40, distance from departure to destination is 350 NM, endurance 3 hours and actual time of departure is 1105 UTC.The distance from departure to Point of Equal Time (PET) is",
    choices: {
      A: "183 NM",
      B: "147 NM",
      C: "203 NM",
      D: "167 NM",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: Distance A to B: 2050 NM Mean groundspeed on 440 kt Mean groundspeed back 540 kt The distance to the point of equal time (PET) between A and B is",
    choices: {
      A: "920 NM",
      B: "1025 NM",
      C: "1130 NM",
      D: "1153 NM",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Find the time to the Point of Safe Return (PSR) Given: Maximum useable fuel: 15000 kg Minimum reserve fuel: 3500 kg TAS out: 425 kt Find the time to the Point of Safe Return (PSR) Given: Maximum useable fuel: 15000 kg Minimum reserve fuel: 3500 kg TAS out: 425 kt Headwind component out: 30 kt TAS return: 430 kt Tailwind component return: 20 kt Average fuel flow: 2150 kg/h",
    choices: {
      A: "2h 59 min",
      B: "3h 43 min",
      C: "2h 51 min",
      D: "2h 43 min",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: Course A to B 088o (T) Distance 1250 NM Mean TAS 330 kt Mean W/V 340o/60 kt The time from A to the PET between A and B is",
    choices: {
      A: "1 hour 54 minutes",
      B: "1 hour 42 minutes",
      C: "1 hour 39 minutes",
      D: "2 hours 02 minutes",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: Fuel flow: 2150 kg/hr Total fuel in tanks: 15000 kg Fuel reserve required on arrival: 3500 kg TAS outbound: 420 kt, wind -30 kt TAS home bound: 430 kt, wind +20 kt Find the time to Point of Safe Return",
    choices: {
      A: "2 hr 06 min",
      B: "1 hr 26 min FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "3 hr 33 min",
      D: "2 hr 52 min",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: Distance A to B: 3060 NM Mean groundspeed OUT: 440 kt Mean groundspeed BACK: 540 kt Safe Endurance: 10 hours The time to the Point of Safe Return (PSR) is",
    choices: {
      A: "5 hours 20 minutes",
      B: "5 hours 45 minutes",
      C: "3 hours 55 minutes",
      D: "5 hours 30 minutes",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: Distance X to Y: 2700 NM Mach Number: 0.75 Temperature: -45oC Mean wind component ON: 10 kt Tailwind Mean wind component BACK: 35 kt tailwind The distance from X to the point of equal time (PET) between X and Y is",
    choices: {
      A: "1350 NM",
      B: "1386 NM",
      C: "1313 NM",
      D: "1425 NM",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given the following: D = flight distance Given the following: D = flight distance X = distance to Point of Equal Time GSo = groundspeed out GSr = groundspeed return The correct formula to find distance to Point of Equal Time is",
    choices: {
      A: "X = D x GSr/ (GSo + GSr)",
      B: "X = D x GSo/ (GSo + GSr)",
      C: "X = (D/2) x GSo/ (GSo + GSr)",
      D: "X = (D/2) + GSr/ (GSo + GSr)",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: Distance from departure to destination: 500 NM True track: 090o Wind: 090o/20 TAS: 150 kt What is the distance and time of the PET from the departure point?",
    choices: {
      A: "Distance: 382 NM Time: 176 min",
      B: "Distance: 250 NM Time: 88 min",
      C: "Distance: 217 NM Time: 100 min",
      D: "Distance: 283 NM Time 131 min",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: X = Distance A to point of equal time (PET) between A and B E = Endurance D = Distance A to B O = Groundspeed ON H = Groundspeed BACK The formula for calculating the distance X to point of equal time (PET) is",
    choices: {
      A: "X = (E x O x H) / (O + H)",
      B: "X = (D x O) / (O + H)",
      C: "X = (D x H) / (O + H)",
      D: "X = (D x O x H) / (O + H)",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      ". Find the distance to the POINT OF SAFE RETURN (PSR) given: Maximum useable fuel: 15000 kg Minimum reserve fuel: 3500 kg OUTBOUND: TAS 425 kt, headwind component 30 kt, fuel flow 2150 kg/h RETURN: TAS 430 kt, tailwind component 20 kt, fuel flow 2150 kg/h",
    choices: {
      A: "1463 NM",
      B: "1143 NM",
      C: "1125 NM",
      D: "1491 NM",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "A flight is planned from L to M, distance 850 nm. Using the following data, calculate the time and distance to PSR: Wind component out: 35 kt (TWC) TAS 450 kt Mean fuel flow out: 2500 kg/hr Mean fuel flow inbound: 1900 kg/hr Fuel available: 6000 kg",
    choices: {
      A: "1 hr 30 min, 660 nm",
      B: "1 hr 30 min, 616 nm",
      C: "1 hr 16 min, 606 nm",
      D: "1 hr 16 min, 616 nm",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Find the distance from waypoint 3 (WP 3) to the critical point. Given: distance from WP3 to WP4 = 750 NM TAS out = 430 kt TAS return = 425 KT Tailwind component out = 30 kt Headwind component return = 40 kt",
    choices: {
      A: "342 NM",
      B: "375 NM",
      C: "408 NM",
      D: "403 NM",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "If CAS is 190 kts, Altitude 9000 ft, Temp. ISA -10oC, True Course (TC) 350o, W/V 320/40, distance from departure to destination is 350 NM, endurance 3 hours, and actual time of departure is 1105 UTC. The Point of Equal Time (PET) is reached at",
    choices: {
      A: "1213 UTC",
      B: "1221 UTC",
      C: "1233 UTC",
      D: "1203 UTC",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 140 NM ¿ GS Out: 90 kt ¿ GS Home: 80 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "122 NM",
      B: "74 NM",
      C: "70 NM",
      D: "66 NM",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 150 NM ¿ True track: 020 ¿ W/V: 180/30 ¿ TAS: 130 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "65 NM",
      B: "75 NM",
      C: "91 NM",
      D: "59 NM",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 150 NM ¿ True track: 142 ¿ W/V: 200/15 ¿ TAS: 132 kt Given: ¿ Distance from departure to destination: 150 NM ¿ True track: 142 ¿ W/V: 200/15 ¿ TAS: 132 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "75 NM",
      B: "71 NM",
      C: "79 NM",
      D: "134 NM",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      ". Given: ¿ Distance from departure to destination: 165 NM ¿ True track: 055 ¿ W/V: 360/20 ¿ TAS: 105 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "132 NM",
      B: "73 NM",
      C: "83 NM",
      D: "92 NM",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 180 NM ¿ True track: 310 ¿ W/V: 010/20 ¿ TAS: 115 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "92 NM",
      B: "82 NM",
      C: "90 NM FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "98 NM",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 220 NM ¿ True track: 175 ¿ W/V: 220/10 ¿ TAS: 135 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "136 NM",
      B: "103 NM",
      C: "110 NM",
      D: "116 NM",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 250 NM ¿ GS Out: 130 kt ¿ GS Home: 100 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "192 NM",
      B: "141 NM",
      C: "125 NM",
      D: "109 NM",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 2500 NM Given: ¿ Distance from departure to destination: 2500 NM ¿ GS Out: 540 kt ¿ GS Home: 470 kt What is the time of the PET from the departure point?",
    choices: {
      A: "129 min",
      B: "171 min",
      C: "28 min",
      D: "149 min",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 256 NM ¿ GS Out: 160 kt ¿ GS Home: 110 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "128 NM",
      B: "152 NM",
      C: "104 NM",
      D: "176 NM",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 270 NM ¿ True track: 030 ¿ W/V: 120/35 ¿ TAS: 125 kt What is the distance and time of the PET from the departure point?",
    choices: {
      A: "Distance: 141 NMTime: 68 min",
      B: "Distance: 141 NMTime: 65 min",
      C: "Distance: 130 NMTime: 68 min",
      D: "Distance: 135 NMTime: 68 min",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 285 NM ¿ True track: 348 ¿ W/V: 280/25 ¿ TAS: 128 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "123 NM",
      B: "130 NM",
      C: "143 NM",
      D: "154 NM",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 315 NM ¿ True track: 343 ¿ W/V: 015/15 ¿ TAS: 100 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "167 NM",
      B: "139 NM",
      C: "176 NM",
      D: "148 NM",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      ". Given: ¿ Distance from departure to destination: 338 NM ¿ True track: 045 ¿ W/V: 225/35 ¿ TAS: 120 kt What is the distance and time of the PET from the departure point?",
    choices: {
      A: "Distance: 169 NMTime: 85 min",
      B: "Distance: 218 NMTime: 85 min",
      C: "Distance: 120 NMTime: 46 min FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "Distance: 185 NMTime: 72 min",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 340 NM ¿ GS Out: 150 kt ¿ GS Home: 120 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "272 NM",
      B: "189 NM",
      C: "170 NM",
      D: "151 NM",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 340 NM ¿ True track: 320 ¿ W/V: 160/40 ¿ TAS: 110 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "219 NM",
      B: "228 NM",
      C: "121 NM",
      D: "112 NM",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 350 NM Given: ¿ Distance from departure to destination: 350 NM ¿ True track: 320 ¿ W/V: 350/30 ¿ TAS: 130 kt What is the distance and time of the PET from the departure point?",
    choices: {
      A: "Distance: 210 NMTime: 122 min",
      B: "Distance: 139 NMTime: 54 min",
      C: "Distance: 123 NMTime: 74 min",
      D: "Distance: 139 NMTime: 81 min",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 435 NM ¿ GS Out: 110 kt ¿ GS Home: 130 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "236 NM",
      B: "199 NM",
      C: "218 NM",
      D: "368 NM",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 470 NM ¿ True track: 237 ¿ W/V: 300/25 ¿ TAS: 125 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "235 NM",
      B: "214 NM",
      C: "256 NM",
      D: "205 NM FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 500 NM ¿ GS Out: 95 kt ¿ GS Home: 125 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "284 NM",
      B: "216 NM",
      C: "250 NM",
      D: "380 NM",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 875 NM ¿ True track: 240 ¿ W/V: 060/50 ¿ TAS: 500 kt What is the distance and time of the PET from the departure point?",
    choices: {
      A: "Distance: 716 NMTime: 78 min",
      B: "Distance: 481 NMTime: 64 min",
      C: "Distance: 394 NMTime: 43 min",
      D: "Distance: 438 NMTime: 53 min",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 95 NM Given: ¿ Distance from departure to destination: 95 NM ¿ True track: 105 ¿ W/V: 060/15 ¿ TAS: 140 kt What is the distance of the PET from the departure point?",
    choices: {
      A: "44 NM",
      B: "47.5 NM",
      C: "82 NM",
      D: "51 NM",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 950 NM ¿ GS Out: 275 kt ¿ GS Home: 225 kt What is the time of the PET from the departure point?",
    choices: {
      A: "114 min",
      B: "139 min",
      C: "93 min",
      D: "39 min",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 1100 NM ¿ True track: 280 ¿ W/V: 100/80 ¿ TAS: 440 kt What is the distance time of the PET from the departure point?",
    choices: {
      A: "Distance: 550 NMTime: 75 min",
      B: "Distance: 650 NMTime: 108 min",
      C: "Distance: 650 NMTime: 75 min",
      D: "Distance: 450 NMTime: 52 min FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 1345 NM ¿ GS Out: 480 kt ¿ GS Home: 360 kt What is the time of the PET from the departure point?",
    choices: {
      A: "128 min",
      B: "72 min",
      C: "96 min",
      D: "50 min",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 1860 NM ¿ GS Out: 360 kt ¿ GS Home: 400 kt What is the time of the PET from the departure point?",
    choices: {
      A: "147 min",
      B: "132 min",
      C: "163 min",
      D: "22 min",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 1950 NM ¿ GS Out: 400 kt ¿ GS Home: 300 kt Given: ¿ Distance from departure to destination: 1950 NM ¿ GS Out: 400 kt ¿ GS Home: 300 kt What is the time of the PET from the departure point?",
    choices: {
      A: "223 min",
      B: "125 min",
      C: "167 min",
      D: "29 min",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 2200 NM ¿ True track: 150 ¿ W/V: 330/50 ¿ TAS: 460 kt What is the distance and time of the PET from the departure point?",
    choices: {
      A: "Distance: 980 NMTime: 115 min",
      B: "Distance: 1120 NMTime: 179 min",
      C: "Distance: 1100 NMTime: 179 min",
      D: "Distance: 980 NMTime: 144 min",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 2380 NM ¿ GS Out: 420 kt ¿ GS Home: 520 kt What is the time of the PET from the departure point?",
    choices: {
      A: "152 min FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "123 min",
      C: "188 min",
      D: "19 min",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 2800 NM ¿ True track: 140 ¿ W/V: 140/100 ¿ TAS: 500 kt What is the distance and time of the PET from the departure point?",
    choices: {
      A: "Distance: 1120 NMTime: 134 min",
      B: "Distance: 1120 NMTime: 114 min",
      C: "Distance: 1440 NMTime: 168 min",
      D: "Distance: 1680 NMTime: 252 min",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 330 NM ¿ Safe Endurance: 5 h ¿ True Track: 170 ¿ W/V: 140/25 ¿ TAS: 125 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "30 NM",
      B: "194 NM FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "150 NM",
      D: "303 NM",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 1000 NM ¿ Safe Endurnce: 4 h ¿ TAS: 500 kt ¿ Ground Speed Out: 550 kt ¿ Ground Speed Home: 450 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "990 NM",
      B: "450 NM",
      C: "495 NM",
      D: "10 NM",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 150 NM ¿ Safe Endurance: 2.4 h ¿ True Track: 250 ¿ W/V: 280/15 ¿ TAS: 120 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "83 NM",
      B: "142 NM",
      C: "71 NM FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "98 NM",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 150 NM ¿ Safe Endurance: 3.2h ¿ TAS: 90 kt ¿ Ground Speed Out: 100 kt ¿ Ground Speed Home: 80 kt What is the distance and time of the PSR from the departure point?",
    choices: {
      A: "Distance: 142 NMTime: 85 min",
      B: "Distance: 67 NMTime: 50 min",
      C: "Distance: 71 NMTime: 47 min",
      D: "Distance: 8 NMTime: 5 min",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 1500 NM ¿ Safe Endurance: 4.5 h ¿ TAS: 450 kt ¿ Ground Speed Out: 480 kt ¿ Ground Speed Home: 410 kt What is the time of the PSR from the departure point?",
    choices: {
      A: "66 min",
      B: "101 min",
      C: "124 min",
      D: "63 min FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 180 NM ¿ Safe Endurance: 2h ¿ TAS: 120 kt ¿ Ground Speed Out: 135 kt ¿ Ground Speed Home: 105 kt What is the distance and time of the PSR from the departure point?",
    choices: {
      A: "Distance: 62 NMTime: 28 min",
      B: "Distance: 79 NMTime: 45 min",
      C: "Distance: 59 NMTime: 30 min",
      D: "Distance: 118 NMTime: 53 min",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 180 NM ¿ Safe Endurance: 2.8h ¿ True Track: 065 ¿ W/V: 245/25 ¿ TAS: 100 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "66 NM",
      B: "68 NM",
      C: "131 NM",
      D: "49 NM",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 190 NM ¿ Safe Endurance: 2.4 h ¿ True Track: 120 ¿ W/V: 030/40 ¿ TAS: 130 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "148 NM",
      B: "95 NM",
      C: "73 NM",
      D: "44 NM",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 200 NM ¿ Safe Endurance: 3h ¿ TAS: 130 kt ¿ Ground Speed Out: 150 kt ¿ Ground Speed Home: 110 kt What is the distance PSR from the departure point?",
    choices: {
      A: "10 NM",
      B: "85 NM",
      C: "95 NM",
      D: "190 NM",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 2000 NM ¿ Safe Endurance: 5h ¿ TAS: 500 kt ¿ Ground Speed Out: 480 kt ¿ Ground Speed Home: 520 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "1248 NM",
      B: "1040 NM",
      C: "624 NM",
      D: "752 NM",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 210 NM ¿ Safe Endurance: 2.5 h ¿ True Track: 035 ¿ W/V: 250/20 ¿ TAS: 105 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "88 NM",
      B: "127 NM",
      C: "64 NM",
      D: "172 NM",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 210 NM ¿ Safe Endurance: 3.5 h ¿ True Track: 310 ¿ W/V: 270/30 ¿ TAS: 120 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "125 NM FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "200 NM",
      C: "100 NM",
      D: "10 NM",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 215 NM ¿ Safe Endurance: 3.3 h ¿ True Track: 005 ¿ W/V: 290/15 ¿ TAS: 125 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "112 NM",
      B: "205 NM",
      C: "103 NM",
      D: "9 NM",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance fro departure to destination: 240 NM ¿ Safe Endurance: 3.5 h ¿ TAS: 125 kt ¿ Ground Speed Out: 110 kt ¿ Ground Speed Home: 140 kt What is the distance and time of the PSR from the departure point?",
    choices: {
      A: "Distance: 216 NMTime: 118 min",
      B: "Distance: 134 NMTime: 58 min FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "Distance: 108 NMTime: 52 min",
      D: "Distance: 24 NMTime: 13 min",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 2450 NM ¿ Safe Endurance: 7.5h ¿ TAS: 410 kt ¿ Ground Speed Out: 360 kt ¿ Ground Speed Home: 460 kt What is the time of the PSR from the departure point?",
    choices: {
      A: "198 min",
      B: "252 min",
      C: "111 min",
      D: "156 min",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 260 NM ¿ Safe Endurance: 4.1h ¿ True Track: 150 ¿ W/V: 100/30 ¿ TAS: 110 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "154 NM",
      B: "213 NM",
      C: "107 NM FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "47 NM",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 300 NM ¿ Safe Endurance: 4h ¿ TAS: 110 kt ¿ Ground Speed Out: 120 kt ¿ Ground Speed Home: 100 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "109 NM",
      B: "136 NM",
      C: "218 NM",
      D: "82 NM",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 3000 NM ¿ Safe Endurance: 8h ¿ TAS: 520 kt ¿ Ground Speed Out: 600 kt ¿ Ground Speed Home: 440 kt What is the time of the PSR from the departure point?",
    choices: {
      A: "203 min",
      B: "173 min",
      C: "277 min",
      D: "117 min FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 320 NM ¿ Safe Endurance: 4.3h ¿ True Track: 120 ¿ W/V: 180/40 ¿ TAS: 130 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "185 NM",
      B: "263 NM",
      C: "131 NM",
      D: "59 NM",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 330 NM ¿ Safe Endurance: 5h ¿ True Track: 170 ¿ W/V: 140/25 ¿ TAS: 125 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "302 NM",
      B: "194 NM",
      C: "150 NM",
      D: "30 NM FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 360 NM ¿ Safe Endurance: 4.5 h ¿ True Track: 345 ¿ W/V: 260/30 ¿ TAS: 140 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "308 NM",
      B: "185 NM",
      C: "154 NM",
      D: "52 NM",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 3750 NM ¿ Safe Endurance: 9.5 h ¿ True Track: 360 ¿ W/V: 360/50 ¿ TAS: 480 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "1128 NM",
      B: "2070 NM",
      C: "2255 NM",
      D: "1495 NM FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 400 NM ¿ Safe Endurance: 2.5h ¿ TAS: 115 kt ¿ Ground Speed Out: 130 kt ¿ Ground Speed Home: 105 kt\\ What is the distance of the PSR from the departure point?",
    choices: {
      A: "73 NM",
      B: "179 NM",
      C: "145 NM",
      D: "255 NM",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 410 NM ¿ Safe Endurnce: 3.6h ¿ True Track: 055 ¿ W/V: 180/35 ¿ TAS: 120 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "169 NM",
      B: "203 NM",
      C: "102 NM",
      D: "207 NM",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 4630 NM ¿ Safe Endurance: 12.4 h ¿ True Track: 240 ¿ W/V: 060/80 ¿ TAS: 530 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "3211 NM",
      B: "1966 NM",
      C: "6106 NM",
      D: "1419 NM",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 480 NM ¿ Safe Endurnce: 5h ¿ True Track: 315 ¿ W/V: 100/20 ¿ TAS: 115 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "280 NM",
      B: "205 NM",
      C: "141 NM",
      D: "199 NM",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 500 NM ¿ Safe Endurance: 4h ¿ TAS: 140 kt ¿ Ground Speed Out: 150 kt ¿ Ground Speed Home: 130 kt What is the distance and time of the PSR from the departure point?",
    choices: {
      A: "Distance: 221 NMTime: 89 min",
      B: "Distance: 232 NMTime: 107 min",
      C: "Distance: 139 NMTime: 60 min",
      D: "Distance: 279 NMTime: 111 min",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 5000 NM ¿ Safe Endurance: 10h ¿ TAS: 450 kt ¿ Ground Speed Out: 500 kt ¿ Ground Speed Home: 400 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "2500 NM",
      B: "2222 NM",
      C: "1111 NM",
      D: "2778 NM",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 550 NM ¿ Safe Endurance: 3.6 h ¿ True Track: 200 ¿ W/V: 220/15 ¿ TAS: 130 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "231 NM FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "305 NM",
      C: "116 NM",
      D: "319 NM",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 6340 NM ¿ Safe Endurance: 15h ¿ True Track: 090 ¿ W/V: 270/100 ¿ TAS: 520 kt What is the distance of the PSR from the departure point?",
    choices: {
      A: "2560 NM",
      B: "3756 NM",
      C: "1878 NM",
      D: "2584 NM",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: ¿ Distance from departure to destination: 950 NM ¿ Safe Endurance: 3.5h ¿ TAS: 360 kt ¿ Ground Speed Out: 320 kt ¿ Ground Speed Home: 400 kt What is the distance and time of the PSR from the departure point?",
    choices: {
      A: "Distance: 528 NMTime: 79 min",
      B: "Distance: 622 NMTime: 117 min FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      C: "Distance: 311 NMTime: 52 min",
      D: "Distance: 328 NMTime: 62 min",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: Track 355T, wind velocity 340/30 kt, TAS 140 kt, total distance A to B 350 NM. What are the time and distance to the point of equal time between A and B?",
    choices: {
      A: "75 mins, 211 nm",
      B: "75 mins, 140 nm",
      C: "50 mins, 140 nm",
      D: "114 mins, 211 nm",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Flying from A to B, 270 nm, true track 030, wind velocity 120/35, TAS 125 kt. What are the distance and time to the Point of Equal Time?",
    choices: {
      A: "141 nm, 65 min",
      B: "141 nm, 68 min",
      C: "135 nm, 68 min",
      D: "150 nm, 65 min",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "An aircraft is to fly from B to C. The total fuel available is 50000 kg but the aircraft must land with at least 5000 kg. From B to C the TAS is 400 kt, wind component 30 kt headwind, fuel flow 7800 kg/hr. Should the aircraft have to return from the PSR its TAS shall be 380 kt, wind component 30 kt tailwind and fuel flow 7500 kg/hr. What is the distance and time to the point of safe return (PSR) from B? Answers",
    choices: {
      A: "1270 nm, 206 mins",
      B: "1250 nm, 174 mins",
      C: "1071 nm, 174 mins",
      D: "1143 nm, 185 mins",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Given: X = Distance A to Point of Safe Return (PSR) between A and B E = Endurance D = Distance A to B O = Groundspeed 'on' H = Groundspeed 'back' The formula for calculating the distance X to PSR is",
    choices: {
      A: "DH / O+H",
      B: "DO / O+H",
      C: "EOH / O+H",
      D: "DOH / O+H",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Track A to B = 088oT Distance: 1250 NM Mean TAS: 330 kt Mean wind: 340/60 kt Find the time from A to PET",
    choices: {
      A: "1 hr 44 min",
      B: "1 hr 39 min",
      C: "2 hrs 02 min",
      D: "1 hr 54 min",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 2-2-3)Given:FL 75OAT +10oCLean mixture at 2300 RPMFind the fuel flow in gallons per hour (GPH) and TAS.",
    choices: {
      A: "71.1 GPH TAS: 143 kt",
      B: "11.6 GPH TAS: 143 kt",
      C: "11.6 GPH TAS: 160 kt",
      D: "68.5 GPH TAS: 160 kt",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 2-1)Given:FL 75OAT: +5oCDuring climb: average headwind component 20 kt Take-off from MSL with the initial mass of 3650 lbs.Find the still air distance (NAM) and ground distance (NM) using the graph TIME, FUEL, DISTANCE TO CLIMB",
    choices: {
      A: "18 NAM, 15 NM",
      B: "16 NAM, 18 NM",
      C: "18 NAM, 13 NM",
      D: "14 NAM, 18 NM",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 2-1)Given:Take-off mass 3600 lbsDeparture aerodrome pressure altitude 2500 ft, OAT +10oCFirst cruising level: FL 140, OAT -5oCFind the time, fuel and still air distance to climb",
    choices: {
      A: "22 min, 6.7 GAL, 45 NAM",
      B: "24 min, 7.7 GAL, 47 NAM",
      C: "16.5 min, 4.9 GAL, 34.5 NAM",
      D: "23 min, 7.7 GAL, 50 NAM aa",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 3-6)A flight is to be made to an airport, pressure altitude 1000 ft, in a multi-engine piston aeroplane (MEP1). The forecast OAT for the airport is -1oC. The cruising level will be FL110, where OAT is -10oC. Calculate the still air descent distance for:145 KIASRate of descent 1000 ft/minGear and flaps up Answers",
    choices: {
      A: "25 NM",
      B: "29 NM",
      C: "36 NM",
      D: "20 NM",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 3-1)A flight is to be made from one airport (elevation 3000 ft) to another in a multi- engine piston aeroplane (MEP1). The cruising level will be FL 110. The temperature at FL 110 is ISA -10oC. The temperature at the departure aerodrome is -1oC. Calculate the fuel to climb with mixture rich.",
    choices: {
      A: "9 US gallon",
      B: "6 US gallon",
      C: "12 US gallon",
      D: "3 US gallon",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 2-1)Given:FL 75OAT: +5oCDuring climb: average headwind component 20 kt Take-off from MSL with the initial mass of 3650 lbsFind: Time and fuel to climb",
    choices: {
      A: "7 min, 2.6 USG",
      B: "10 min. 3.6 USG",
      C: "9 min. 3.3 USG",
      D: "9 min. 2.7 USG",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual MUNICH ILS Rwy 26R (11-4) or figure AP-01)The ILS frequency and identifier are",
    choices: {
      A: "108.7 IMNW",
      B: "108.7 IMSW",
      C: "108.3 IMNW",
      D: "108.3 IMSW",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual MUNICH NDB DME Rwy 26L approach (16-3) or figure AP-02)The frequency and identifier of the NDB for the published approaches are",
    choices: {
      A: "112.3 MUN",
      B: "DMS",
      C: "338 MNW",
      D: "400 MSW",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual, SID charts for Paris Charles-de-Gaulle (20-3) or figure AP-03)Determine the distance of the departure route ABB 8A",
    choices: {
      A: "72 nm",
      B: "74 nm",
      C: "72.5 nm",
      D: "74.5 nm",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual LONDON HEATHROW ILS DME Rwy 09L (11-2) or figure AP-05)The decision altitude for an ILS straight-in landing is",
    choices: {
      A: "480 ft FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      B: "280 ft",
      C: "200 ft",
      D: "400 ft",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual SID chart for AMSTERDAM SCHIPOL (10-3) or figure AP-06)Which statement is correct for ANDIK departures from runway 19L?",
    choices: {
      A: "Maximum IAS 250 kt turning left at SPL 3.1 DME",
      B: "Cross ANDIK below FL60",
      C: "Contact SCHIPOL DEPARTURE 119.05 passing 2000 ft and report altitude",
      D: "The distance to ANDIK is 25 nm",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual AMSTERDAM SCHIPOL ¿ ILS DME RWY 22 (11-6) or figure AP-07)The missed approach procedure is to climb to an altitude of (i) on a track of (ii)",
    choices: {
      A: "(i) 2000 ft; (ii) 160o",
      B: "(i) 200 ft; (ii) 223o",
      C: "(i) 3000 ft; (ii) 160o",
      D: "(i) 3000 ft; (ii) 223o",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual Munich SID (10-3D) or figure AP-10)Which is the correct departure via KEMPTEN from runway 26L?",
    choices: {
      A: "KEMPTEN THREE ECHO",
      B: "KEMPTEN FIVE SIERRA",
      C: "KEMPTEN THREE QUEBEC",
      D: "KEMPTEN THREE NOVEMBER",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart STAR LONDON Heathrow (10-2) or figure AP-08)Planning a IFR flight from Paris (Charles-de-Gaulle) to London (Heathrow). Find the elevation of the destination aerodrome.",
    choices: {
      A: "77 ft",
      B: "80 ft",
      C: "177 ft FLIGHT PLANNING PRACTICAL FLIGHT PLANNING - Simple fuel plans",
      D: "100 ft",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual ZURICH ILS Rwy 16 (11-2) or figure AP-11)The lowest published authorised RVR for an ILS approach, glide slope out, all other aids serviceable, aeroplane category A, is",
    choices: {
      A: "800m",
      B: "600m",
      C: "720m",
      D: "1500m",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual LONDON HEATHROW ILS DME Rwy 09R (11-1) or figure AP-12)The Minimum Descent Altitude (MDA) for an ILS approach, glide slope out, is",
    choices: {
      A: "405 ft",
      B: "480 ft",
      C: "275 ft",
      D: "200 ft",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual, any SID or approach chart for London Heathrow (or figure AP-12))Which of the following is the correct Minimum Safe Altitude (MSA) for the airport?",
    choices: {
      A: "East sector 2300 ft within 50 nm",
      B: "West sector 2300 ft within 25 nm",
      C: "East sector 2100 ft within 50 nm",
      D: "West sector 2100 ft within 25 nm",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 or figure HI-09)An aeroplane has to fly from Abbeville (50o08.1N 001o51.3E) to Biggin (51o19.8N 00o00.2E)At Biggin you can find: 141o. This is",
    choices: {
      A: "The average true course of the great circle from Biggin to Abbeville",
      B: "The magnetic great circle course from Biggin to Abbeville",
      C: "The radial, referenced to true north, of Biggin to fly inbound",
      D: "The magnetic course to fly inbound to Biggin",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual MADRID, BARAJAS page 11-1, ILS DME Rwy 33 or figure AP-15)The minimum glide slope interception altitude for a full ILS is",
    choices: {
      A: "3500 ft",
      B: "4000 ft",
      C: "2067 ft",
      D: "1567 ft",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart SID PARIS Charles-de-Gaulle (20-3) or figure AP-03)Planning a IFR flight from Paris (Charles-de-Gaulle) to London (Heathrow). Find the elevation of the departure aerodrome",
    choices: {
      A: "217 ft",
      B: "268 ft",
      C: "387 ft",
      D: "2 ft",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Jeppesen Manual Paris Charles-de-Gaulle (21-7) ILS rwy 10 or figure AP-16)What is the ILS course?",
    choices: {
      A: "088o",
      B: "100o",
      C: "118o",
      D: "268o",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual SID chart 20-3 for PARIS Charles-de-Gaulle or figure AP-03)Planning an IFR flight from Paris (Charles-de-Gaulle) to top of climb 50 NM. Determine the distance from the top of climb (TOC) to ABB 116.6.",
    choices: {
      A: "36.5 NM",
      B: "31 NM",
      C: "24.5 NM",
      D: "33 NM",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to Route Manual chart E(HI)4 CAA-Edition, Instrument approach chart ILS DME Rwy 27R or figures HI-09; AP-08 & AP-09)Planning an IFR-flight from Paris to London (Heathrow) via initial approach fix (IAF) Biggin VOR. The distance from top of descent (TOD) to Rwy 27R is 76 NM. Determine the distance from ABB 116.6 to TOD.",
    choices: {
      A: "60 NM",
      B: "100 NM",
      C: "55 NM",
      D: "49 NM",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to CAP 697 figure 3.4)For the MEP, if the OAT is -20oC at 19000 ft the TAS at 45% power is",
    choices: {
      A: "159 knots",
      B: "162 knots",
      C: "165 knots",
      D: "168 knots",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures 10-20, 21 and 22)What is the local time (LT) in Greece in (i) Winter and (ii) Summer?",
    choices: {
      A: "(i) LT = UTC + 2 Hours (ii) LT = UTC + 3 Hours",
      B: "(i) LT = UTC, 2 Hours (ii) LT = UTC, 3 Hours",
      C: "(i) LT + 2 Hours = UTC (ii) LT + 3 Hours = UTC",
      D: "(i) LT, 3 Hours = UTC (ii) LT, 2 Hours = UTC",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figures 10-20, 21 and 22)What is the local time (LT) in the Netherlands in (i) Winter and (ii) Summer?",
    choices: {
      A: "(i) LT, 2 Hours = UTC (ii) LT, 1 Hour = UTC",
      B: "(i) LT, 1 Hour = UTC (ii) LT, 2 Hours = UTC",
      C: "(i) LT = UTC + 2 Hours (ii) LT = UTC + 1 Hour",
      D: "(i) LT = UTC, 1 Hour (ii) LT = UTC, 2 Hours",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "INTEGRATED RANGE curves or tables are presented in the Aeroplane Operations Manuals. Their purpose is",
    choices: {
      A: "to determine the optimum speed considering the fuel cost as well as the time related cost ofthe aeroplane",
      B: "to determine the flight time for a certain leg under consideration of temperature deviations",
      C: "to determine the still air distance for a wind components varying with altitude",
      D: "to determine the fuel consumption for a certain still air distance considering the decreasingfuel flow with decreasing mass",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "An operator shall ensure that calculation of usable fuel for an IFR flight with a turbojet aeroplane for which no destination alternate is required includes, taxi fuel, trip fuel, contingency fuel and fuel to fly for",
    choices: {
      A: "45 minutes plus 10% of the flight time planned to be spent at cruising level or two hourswhichever is less",
      B: "2 hours at normal cruise consumption",
      C: "45 minutes at holding speed at 450 m above aerodrome elevation in standard conditions",
      D: "45 minutes at holding speed at 450m above MSL in standard conditions",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Given: ¿ Fuel density = 0.78 kg/l ¿ Dry Operating Mass = 33500 kg ¿ Traffic load = 10600 kg ¿ Maximum allowable take-off mass = 66200 kg ¿ Taxi fuel = 200 kg ¿ Tank capacity = 22500 litres The maximum possible take-off fuel is",
    choices: {
      A: "17350 kg",
      B: "22100 kg",
      C: "17550 kg",
      D: "21900 kg",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "To carry out a VFR flight to an off-shore platform, the minimum fuel quantity on board is",
    choices: {
      A: "that defined for VFR flights over land increased by 10%",
      B: "identical to that defined for VFR flights over land",
      C: "at least equal to that defined for IFR flights",
      D: "that defined for VFR flights over land increased by 5%",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "For a flight to an off-shore platform, an alternate aerodrome is compulsory, except if: estimated time of departure and one half hour after the estimated landing time 1. flight duration does not exceed two hours 2. during the period from two hours before to two hours after the estimated landing time, the forecast conditions of ceiling and visibility are not less than one and a half times the applicable minima 3. the platform is available and no other flight either from or to the platform is expected between the",
    choices: {
      A: "1, 2, 3",
      B: "1, 2",
      C: "1, 3",
      D: "2, 3",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
];

export default flightPlanning;
