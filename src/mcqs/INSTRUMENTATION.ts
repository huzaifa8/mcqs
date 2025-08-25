const instrumentation = [
  {
    question: "At a constant calibrated airspeed (CAS), the Mach number",
    choices: {
      A: "increases when the altitude increases",
      B: "decreases when the altitude increases",
      C: "remains unchanged when the outside temperature increases",
      D: "remains unchanged when the outside temperature decreases",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "The reading of a Mach indicator is independent of",
    choices: {
      A: "the static pressure",
      B: "the outside temperature",
      C: "the total pressure",
      D: "the differential pressure measurement",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "The velocity of sound at the sea level in a standard atmosphere is",
    choices: {
      A: "644 kt",
      B: "1059 kt",
      C: "661 kt",
      D: "332 kt",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "When climbing at a constant Mach number below the tropopause, in ISA conditions, the Calibrated Airspeed (CAS) will",
    choices: {
      A: "remain constant",
      B: "increase at a linear rate",
      C: "decrease",
      D: "increase at an exponential rate",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "During a straight and uniform climb, the pilot maintains a constant calibrated airspeed (CAS)",
    choices: {
      A: "the Mach number is constant and the true airspeed (TAS) decreases INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "The Mach number increases and the true airspeed (TAS) is constant",
      C: "The Mach number is constant and the true airspeed (TAS) is constant",
      D: "The Mach number increases and the true airspeed (TAS) increases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "If the outside temperature at 35000 feet is -40oC, the local speed of sound is",
    choices: {
      A: "307 kt",
      B: "247 kt",
      C: "396 kt",
      D: "686 kt",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "Machmeter readings are subject to",
    choices: {
      A: "temperature error",
      B: "density error",
      C: "position pressure error",
      D: "setting error",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "The Mach number is the",
    choices: {
      A: "equivalent airspeed (EAS) divided by the local speed of sound",
      B: "corrected airspeed (CAS) divided by the local speed of sound",
      C: "indicated airspeed (IAS) divided by the local speed of sound",
      D: "true airspeed (TAS) divided by the local speed of sound",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Given: Ts = the static temperature (SAT Tt = the total temperature (TAT) Kr = the recovery co-efficient M = the Mach number The total temperature can be expressed approximately by the formula",
    choices: {
      A: "Tt = Ts (1-0.2M^2)",
      B: "Tt = Ts (1+0.2M^2)",
      C: "Tt = Ts (1+0.2 Kr.M^2)",
      D: "Tt = Ts (1+0.2 Kr.M^2)",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "The Mach number is",
    choices: {
      A: "the ratio of the aircraft conventional airspeed to the sonic velocity at the altitude considered",
      B: "a direct function of temperature it varies in proportion to the square root of the absolutetemperature",
      C: "the ratio of the indicated airspeed to the sonic velocity at the altitude considered",
      D: "the ratio of the aircraft true airspeed to the sonic velocity at the altitude considered",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "At a constant Mach number, the calibrated air speed (CAS)",
    choices: {
      A: "remains unchanged when the outside temperature increases",
      B: "increases when the altitude increases",
      C: "decreases when the altitude increases",
      D: "remains unchanged when the outside temperature decreases",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "The static pressure error of the static vent on which the altimeter is connected varies substantially with the",
    choices: {
      A: "deformation of the aneroid capsule",
      B: "Mach number of the aircraft",
      C: "aircraft altitude",
      D: "static temperature INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "Indication of Mach number is obtained from",
    choices: {
      A: "Indicated speed (IAS) compared with true air speed (TAS) from the air data computer",
      B: "An ordinary airspeed indicator scaled for Mach numbers instead of knots",
      C: "A kind of echo sound comparing velocity of sound with indicated speed",
      D: "Indicated speed and altitude using a speed indicator equipped with an altimeter type aneroid",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "The principle of the Mach indicator is based on the computation of the ratio",
    choices: {
      A: "(Pt + Ps) / Ps",
      B: "(Pt - Ps) / Ps",
      C: "Pt / Ps",
      D: "(Pt- Ps) / Pt",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "Considering the maximum operational Mach number (MMC) and the maximum operational speed (VMO), the captain of a pressurised aircraft begins his descent from a high flight level. In order to meet his scheduled time of arrival, he decides to use the maximum ground speed at any time of the descent. He will be limited",
    choices: {
      A: "initially by the VMO, then by the MMO below a certain flight level",
      B: "by the MMO",
      C: "by the VMO in still air",
      D: "initially by the MMO, then by the VMO below a certain flight level",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "An aircraft is descending from FL 390 to ground level at maimum speed. The limits in speed will be",
    choices: {
      A: "the VMO only",
      B: "initially the VMO, then the MMO below a certain flight level",
      C: "the MMO only",
      D: "initially the MMO, then the VMO below a certain flight level",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "An airplane is cruising at FL 190. The auto-throttle maintains a constant CAS. If the total temperature decreases, the Mach number",
    choices: {
      A: "remains constant",
      B: "increases",
      C: "decreases",
      D: "decreases if OAT is lower than standard temperature, increases in the opposite case",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "An airplane is cruising at FL220. The auto-throttle maintains a constant CAS. If the total temperature increases, the Mach number",
    choices: {
      A: "remains constant",
      B: "increases",
      C: "decreases",
      D: "decreases if OAT is lower than standard temperature, increases in the opposite case",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Assuming the flight level and Mach number remain constant, when the OAT decreases",
    choices: {
      A: "IAS and TAS decrease",
      B: "IAS increases and TAS decreases",
      C: "IAS decreases and TAS increases",
      D: "IAS and TAS increase",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Assuming the flight level and Mach number remain constant, when the OAT increases",
    choices: {
      A: "IAS and TAS decrease",
      B: "IAS and TAS increase",
      C: "IAS increases and TAS decreases",
      D: "IAS decreases and TAS increases",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "At flight level and Mach number constant, if total temperature decreases, the CAS",
    choices: {
      A: "decreases if OAT is lower than standard temperature, increases in the opposite case INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "increases",
      C: "decreases",
      D: "remains constant",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "At flight level and Mach number constant, if total temperature increases, the CAS",
    choices: {
      A: "decreases if OAT is lower than standard temperature, increases in the opposite case",
      B: "increases",
      C: "decreases",
      D: "remains constant",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Below the tropopause in standard conditions, when climbing at a constant Mach number",
    choices: {
      A: "TAS decreases",
      B: "TAS increases",
      C: "TAS remains constant",
      D: "the difference between surrounding conditions and ISA must be known to deduce the TAS variation",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Below the tropopause in standard conditions, when descending at a constant CAS",
    choices: {
      A: "Mach number and the velocity of sound decrease",
      B: "Mach number increases and the velocity of sound decreases",
      C: "Mach number and the velocity of sound increase",
      D: "Mach number decreases and the velocity of sound increases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Below the tropopause in standard conditions, when descending at a constant mach number",
    choices: {
      A: "TAS remains constant",
      B: "TAS decreases",
      C: "TAS increases INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      D: "the difference between surrounding conditions and ISA must be known to deduce the TAS variation",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "During a climb at a constant calibrated airspeed (CAS) below the tropopause in ISA conditions",
    choices: {
      A: "the Mach number decreases and the speed of sound increases",
      B: "the Mach number increases and the speed of sound decreases",
      C: "the Mach number and the speed of sound increases",
      D: "the Mach number and the speed of sound decreases",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "During a climb at a constant calibrated airspeed (CAS) below the tropopause in standard conditions",
    choices: {
      A: "TAS increases and Mach number decreases",
      B: "TAS and Mach number decrease",
      C: "TAS and Mach number increase",
      D: "TAS decreases and Mach number increases",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "During a climb at a constant IAS below the tropopause in ISA conditions",
    choices: {
      A: "the Mach number increases and the true airspeed decreases",
      B: "the Mach number and the true airspeed decrease",
      C: "the Mach number and the true airspeed increase",
      D: "the Mach number decreases and the true airspeed increases",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "During a climb at a constant Mach number below the tropopause in ISA conditions",
    choices: {
      A: "CAS and TAS decrease",
      B: "CAS increases and TAS decreases",
      C: "CAS decreases and TAS increases",
      D: "CAS and TAS increase",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "During a climb at a constant Mach number below the tropopause in ISA conditions",
    choices: {
      A: "IAS and TAS decrease",
      B: "IAS increases and TAS decreases",
      C: "IAS decreases and TAS increases",
      D: "IAS and TAS increase",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "During a climb, the total pressure probe of the airspeed indicator becomes blocked: if the pilot maintains a constant indicated airspeed, the true airspeed",
    choices: {
      A: "increases until reaching VMO",
      B: "decreases until reaching the stall speed",
      C: "decreases by 1% per 600 ft",
      D: "increases by 1% per 600 ft",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "During a descent at a constant calibrated airspeed (CAS) below the tropopause in ISA conditions",
    choices: {
      A: "Mach number and TAS decrease",
      B: "Mach number and TAS increase",
      C: "Mach number decreases and TAS increases",
      D: "Mach number increases and TAS decreases",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "During a descent at a constant IAS below the tropopause in ISA conditions",
    choices: {
      A: "Mach number increases and TAS decreases",
      B: "Mach number and TAS increase",
      C: "Mach number and TAS decrease",
      D: "Mach number decreases and TAS increases",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "During a descent at a constant Mach number below the tropopause in ISA conditions",
    choices: {
      A: "CAS and TAS increase INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "CAS increases and TAS decreases",
      C: "CAS and TAS decrease",
      D: "CAS decreases and TAS increases",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "During a descent at a constant Mach number below the tropopause in ISA conditions",
    choices: {
      A: "IAS and TAS increase",
      B: "IAS and TAS decrease",
      C: "IAS increases and TAS decreases",
      D: "IAS decreases and TAS increases",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Given: Mach Number M = 0.70 Measured impact temperature = -48oC The recovery factor (Kr) of the temperature probe + 0.85 The OAT is",
    choices: {
      A: "-65oC",
      B: "-45oC",
      C: "-64oC",
      D: "-51oC",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "If OAT decreases when at a constant Mach number",
    choices: {
      A: "TAS decreases only if the flight level remains constant",
      B: "TAS increases",
      C: "TAS decreases",
      D: "TAS remains constant only if the flight level remains constant",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "If OAT decreases when at a constant TAS",
    choices: {
      A: "the difference between surrounding conditions and ISA must be known to deduce the Mach numbervariation",
      B: "Mach number decreases",
      C: "Mach number remains constant",
      D: "Mach number increases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "If total temperature decreases whilst maintaining a constant CAS and flight level",
    choices: {
      A: "TAS increases",
      B: "Mach number increases",
      C: "TAS remains constant",
      D: "Mach number remains constant",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "If OAT increases when at a constant Mach number",
    choices: {
      A: "TAS decreases",
      B: "TAS increases",
      C: "TAS decreases only if the flight level remains constant",
      D: "TAS remains constant only if the flight level remains constant",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "If OAT increases when at a constant TAS",
    choices: {
      A: "the difference between surrounding conditions and ISA must be known to deduce the Mach numbervariation",
      B: "Mach number increases",
      C: "Mach number remains constant",
      D: "Mach number decreases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "If total temperature increases whilst maintaining a constant CAS and flight level",
    choices: {
      A: "TAS decreases",
      B: "Mach number decreases",
      C: "TAS remains constant",
      D: "Mach number remains constant",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "The indicated Mach number is independent from",
    choices: {
      A: "total pressure",
      B: "dynamic pressure",
      C: "static pressure",
      D: "temperature",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "The Mach number is proportional to the ratio:(Note: a indicates the local speed of sound)",
    choices: {
      A: "EAS/a",
      B: "CAS/a",
      C: "TAS/a",
      D: "IAS/a",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "The maximum TAS is obtained at",
    choices: {
      A: "the maximum flight level",
      B: "the flight level at which simultaneously CAS = VMO and M = MMO",
      C: "all the flight level(s) where CAS = VMO",
      D: "all the flight level(s) where M = MMO",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "The position error of the static vent on which the altimeter is connected varies substantially with the",
    choices: {
      A: "deformation of the aneroid capsule",
      B: "Mach number of the aircraft INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      C: "flight time at high altitude",
      D: "static temperature",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "When climbing at a constant CAS in a standard atmosphere",
    choices: {
      A: "TAS decreases",
      B: "TAS increases",
      C: "TAS remains constant",
      D: "TAS first decreases, then remains constant above the tropopause",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "When climbing at a constant CAS in a standard atmosphere: The combination regrouping all the correct statements is: 1. TAS decreases 2. TAS increases 3. Mach number increases 4. Mach number decreases",
    choices: {
      A: "1, 4",
      B: "2, 4",
      C: "1, 3",
      D: "2, 3",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "When climbing at a constant CAS throughout an isothermal layer, the Mach number",
    choices: {
      A: "decreases if OAT is lower than the standard temperature",
      B: "decreases",
      C: "remains constant",
      D: "increases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "When climbing at a constant Mach number through an isothermal layer, the CAS",
    choices: {
      A: "decreases if OAT is lower than the standard temperature, increases if higher INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "increases",
      C: "remains constant",
      D: "decreases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "When climbing at a constant Mach number",
    choices: {
      A: "CAS decreases",
      B: "CAS increases",
      C: "CAS remains constant",
      D: "difference between surrounding conditions and ISA must be known to deduce the CAS variation",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "When descending at a constant CAS in a standard atmosphere: The combination regrouping all the correct statements is: 1. TAS increases 2. TAS decreases 3. Mach number increases 4. Mach number decreases",
    choices: {
      A: "2, 4",
      B: "2, 3",
      C: "1, 3",
      D: "1, 4",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "When descending at a constant CAS through out an isothermal layer, the Mach number",
    choices: {
      A: "increases if OAT is lower than the standard temperature, decreases if higher",
      B: "increases",
      C: "remains constant",
      D: "decreases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "When descending at a constant CAS",
    choices: {
      A: "Mach number decreases",
      B: "Mach number increases",
      C: "Mach number remains constant",
      D: "the difference between surrounding conditions and ISA must be known to deduce the Mach numbervariation",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "When descending at a constant Mach number",
    choices: {
      A: "the difference between surrounding conditions and ISA must be known to deduce the CAS variation",
      B: "CAS decreases",
      C: "CAS remains constant",
      D: "CAS increases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "The machmeter consists of",
    choices: {
      A: "an airspeed indicator with mach scale",
      B: "an airspeed indicator with an altimeter capsule",
      C: "an altimeter corrected for density",
      D: "a VSI and altimeter combind",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "What formula gives the total temperature (TT) from the static temperature (TS)",
    choices: {
      A: "TT = TS (1 + 0.2 M^2)",
      B: "TT = TS (1 + 0.2 Kr M^2)",
      C: "TT = TS / (1 + 0.2 Kr M^2)",
      D: "TT = TS (1 - 0.2 M^2)",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "Descending from FL390 at maximum ground speed, what will the pilot be limited by",
    choices: {
      A: "VMO initially then MMO at a specified altitude",
      B: "MMO initially then VMO at a specified altitude",
      C: "VNE initially then MMO at a specified altitude",
      D: "VNO initially then VNE at a specified altitude",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "Mach number is defined as the ratio of",
    choices: {
      A: "IAS to Local Speed of Sound",
      B: "TAS to Local Speed of Sound",
      C: "CAS to Local Speed of Sound",
      D: "EAS to Local Speed of Sound",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "If while level at FL 270, at a constant CAS, temperature falls, what happens to the Mach Number?",
    choices: {
      A: "decreases",
      B: "increases",
      C: "remains constant",
      D: "increases depending on whether temperature > ISA or < ISA",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "The indications of a machmeter are independent of",
    choices: {
      A: "Temperature (OAT)",
      B: "Static pressure",
      C: "Differential static and dynamic pressure",
      D: "Dynamic pressure",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "What is the speed of sound at sea level ISA?",
    choices: {
      A: "644 kts",
      B: "661 kts INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      C: "1059 kts",
      D: "583 kts",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "What is the speed of sound at 25,000 ft and -28oC?",
    choices: {
      A: "624 kts",
      B: "618 kts",
      C: "601 kts",
      D: "610 kts",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "What is the speed of sound at 30,000 ft and -40oC?",
    choices: {
      A: "562 kts",
      B: "618 kts",
      C: "601 kts",
      D: "610 kts",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "If a constant CAS is maintained in a climb, what happens to the mach number?",
    choices: {
      A: "Remains constant",
      B: "Increases",
      C: "Decreases",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "Total Air Temp is always than Static Air Temp and the difference varies with",
    choices: {
      A: "warmer / altitude",
      B: "colder / altitude",
      C: "warmer / CAS",
      D: "colder / CAS",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "Mach number is defined as",
    choices: {
      A: "the ratio of pitot pressure to dynamic pressure",
      B: "the ratio of static pressure to dynamic pressure",
      C: "the ratio of dynamic pressure to static pressure",
      D: "the ratio of static pressure to pitot pressure",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "You are flying at a constant FL 290 and constant Mach number. The total temperature increases by 5oC. The CAS will",
    choices: {
      A: "remain approximately constant",
      B: "increase by 10 kts",
      C: "decrease by 10 kts",
      D: "increase or decrease depending on whether you are above or below ISA",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "If an aircraft climbs, at constant mach No. in ISA conditions what happens to the TAS and the CAS?",
    choices: {
      A: "TAS increases and CAS increases",
      B: "TAS remains constant and CAS decreases",
      C: "TAS decreases and CAS increases",
      D: "TAS decreases and CAS decreases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "If an aircraft is descending at constant mach number, and the total air temperature remains constant, what happens to the CAS?",
    choices: {
      A: "remains constant",
      B: "decreases",
      C: "increases",
      D: "increases if the temperature is below standard, and decreases if the temperature is abovestandard",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "A machmeter measures the ratio of",
    choices: {
      A: "pitot pressure to static pressure",
      B: "(pitot pressure minus static pressure) to static pressure",
      C: "pitot pressure times static pressure",
      D: "pitot pressure to (static pressure times pitot pressure)",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "During a descent at constant CAS and total temperature, the mach no",
    choices: {
      A: "increases",
      B: "remains constant",
      C: "increases if SAT is greater than standard temperature and decreases if it is lower",
      D: "decreases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Mach number is determined from:(PT = total pressure, PS = static pressure)",
    choices: {
      A: "(PT + PS) x PT",
      B: "(PT - PS) x PT",
      C: "(PT x PS) x PT",
      D: "(PT - PS) / PS",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "During a descent at a constant mach number, there is an increase of total temperature by 5o. What effect does this have on CAS?",
    choices: {
      A: "Remains almost constant",
      B: "Increases if SAT is more than standard and decreases if SAT is less than standard",
      C: "Increases by 10 kts",
      D: "Decreases by 10 kts",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "If CAS is kept constant, what happens to the Mach No?",
    choices: {
      A: "as the altitude increases the mach No will increase",
      B: "as the altitude increases the mach no will decrease INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      C: "as the temperature increases the mach No will increase",
      D: "as the temperature decreases the mach No will decrease",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "When descending from FL 290 to FL 150 at maximum speed, the limitations which apply are",
    choices: {
      A: "VMO",
      B: "VMO then MMO",
      C: "MMO then VMO",
      D: "MMO",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "A VMO/MMO alarm system on an airline aircraft is fitted with an aneroid capsule which is",
    choices: {
      A: "subjected to static pressure and an anemometer subjected to dynamic pressure",
      B: "subjected to dynamic pressure and an anemometer subjected to static pressure",
      C: "subjected to static pressure and an anemometer subjected to static pressure",
      D: "subjected to dynamic pressure and an anemometer subjected to dynamic pressure",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "An aeroplane is in a steady climb. The auto throttle maintains a constant Mach number. If the total temperature remains constant, the calibrated airspeed",
    choices: {
      A: "decreases if the static temperature is lower than the standard temperature, increases if higher",
      B: "remains constant",
      C: "decreases",
      D: "increases",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "The Machmeter is subject to",
    choices: {
      A: "Position/Instrument error",
      B: "Density error",
      C: "Density and Temperature error",
      D: "Temperature error INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "At a constant CAS what happens to the Mach No. if the temperature increases?",
    choices: {
      A: "It increases",
      B: "It decreases",
      C: "It increases relative to ISA",
      D: "It stays the same",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "At 35000 feet the OAT is -40oC. What is the Local Speed of Sound?",
    choices: {
      A: "594 kts",
      B: "601 kts",
      C: "574 kts",
      D: "562 kts",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "The speed at which sound is transported through the air is dependant on",
    choices: {
      A: "Density",
      B: "Pressure",
      C: "Density and Temperature",
      D: "Temperature",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "The advantages provided by an air data computer to indicate the altitude are: The combination of correct statements is: 1. Position/pressure error correction 2. Hysteresis error correction 3. Remote data transmission capability 4. Capability of operating as a conventional altimeter in the event of a failure",
    choices: {
      A: "1, 2, 3, 4 INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "1, 3, 4",
      C: "2, 3, 4",
      D: "1, 2, 3",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The advantages of an ADC over a traditional pitot - static system are: 1. position and compressibility correction 2. reduced lag 3. ability to supply many instruments 4. ability to act as an altimeter following failure",
    choices: {
      A: "1, 2 & 3",
      B: "1, 2 & 4",
      C: "2, 3 & 4",
      D: "1, 3 & 4",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "In an Air Data Computer (ADC), aeroplane altitude is calculated from",
    choices: {
      A: "Measurement of elapsed time for a radio signal transmitted to the ground surface and back",
      B: "The difference between absolute and dynamic pressure at the fuselage",
      C: "Measurement of outside air temperature (OAT)",
      D: "Measurement of absolute barometric pressure from a static source on the fuselage",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "An Air Data Computer (ADC)",
    choices: {
      A: "Measures position error in the static system and transmits this information to ATC to providecorrect altitude reporting",
      B: "Transforms air data measurements into electric impulses driving servo motors in instruments INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      C: "Is an auxiliary system that provides altitude information in the event that the static source isblocked",
      D: "Converts air data measurements given by ATC from the ground in order to provide correct altitudeand speed information",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "An air data computer The combination regrouping all the correct statements is: 1. supplies the ground speed and the drift (angle) 2. determines the total temperature and the true altitude 3. receives the static pressure and the total pressure 4. supplies the true airspeed to the inertial unit 5. determines the aircraft altitude",
    choices: {
      A: "3, 4 and 5",
      B: "1 and 2",
      C: "2 and 5",
      D: "2, 3 and 4",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "As a result of the failure of the central air data computer (CADC), the inertial navigation system (INS) will no longer provide information about",
    choices: {
      A: "the wind direction and speed",
      B: "the ground speed",
      C: "the time (TIME) at the next waypoint (WPT)",
      D: "the drift",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The input data of an ADC are: The combination regrouping all the correct statements is: 1. OAT 2. TAT 3. Static pressure 4. Total pressure",
    choices: {
      A: "1, 2, 3, 4",
      B: "2, 3, 4",
      C: "1, 3, 4",
      D: "1, 2, 4",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "The vertical reference of a data generation unit is",
    choices: {
      A: "horizontal axis with 1 degree of freedom",
      B: "vertical axis with 1 degree of freedom",
      C: "horizontal axis with 2 degrees of freedom",
      D: "vertical axis with 2 degrees of freedom",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "An Air Data Computer (ADC) obtains altitude from",
    choices: {
      A: "outside air temperature",
      B: "barometric data from static source",
      C: "time elapsed for signal to travel to and return from the earth",
      D: "difference between absolute and dynamic pressure",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "What are the inputs to the ADC? 1. OAT 2. Dynamic pressure 3. TAT 4. Static pressure 5. Electric power 6. Pitot pressure 7. AOA",
    choices: {
      A: "1, 2, 5 & 6",
      B: "all 7",
      C: "3, 4 & 6",
      D: "3, 4, 5, 6 & 7",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "If you maintain the same CAS and Altitude FL 270, and the temperature increases, what happens to the Mach No?",
    choices: {
      A: "increases at an exponential rate",
      B: "decreases at an exponential rate",
      C: "remains the same",
      D: "increases",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "The error in altimeter readings caused by the variation of the static pressure near the source is known as",
    choices: {
      A: "instrument error",
      B: "hysteresis effect",
      C: "position pressure error",
      D: "barometric error",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "VFE is the maximum speed",
    choices: {
      A: "with the flaps extended for each approved flap position",
      B: "with the flaps extended in landing position",
      C: "at which the flaps can be operated in turbulence",
      D: "with the flaps extended in take-off position INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The airspeed indicator of a twin-engine aircraft comprises different sectors and colour marks. The blue line corresponds to the",
    choices: {
      A: "minimum control speed, or VMC",
      B: "maximum speed in operations, or VMO",
      C: "optimum climbing speed with one engine inoperative, or Vy",
      D: "speed not to be exceeded, or VNE",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "VLE is the maximum",
    choices: {
      A: "speed at which the landing gear can be operated with full safety",
      B: "flight speed with landing gear down",
      C: "speed with flaps extended in a given position",
      D: "speed authorised in flight",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The primary factor which makes the servo-assisted altimeter more accurate than the simple pressure altimeter is the use of",
    choices: {
      A: "combination of counters/pointers",
      B: "more effective temperature compensating leaf springs",
      C: "an induction pick-off device",
      D: "a sub-scale logarithmic function",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "The QNH is by definition the value of the",
    choices: {
      A: "altimeter setting so that the needles of the altimeter indicate the altitude of the location for which it is given",
      B: "atmospheric pressure at the sea level of the location for which it is given",
      C: "altimeter setting so that the needles indicate zero when the aircraft is on ground at thelocation for which it is provided",
      D: "atmospheric pressure at the level of the ground over-flown by the aircraft INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "VNO is the maximum speed",
    choices: {
      A: "which must never be exceeded",
      B: "not to be exceeded except in still air and with caution",
      C: "at which the flight controls can be fully deflected",
      D: "with flaps extended in landing position",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "A pitot tube covered by ice which blocks the ram air inlet will affect the following instrument(s)",
    choices: {
      A: "altimeter only",
      B: "airspeed indicator only",
      C: "vertical speed indicator only",
      D: "airspeed indicator, altimeter and vertical speed indicator",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "A pitot blockage of both the ram air input and the drain hole with the static port open causes the airspeed indicator to",
    choices: {
      A: "react like an altimeter",
      B: "read a little high",
      C: "read a little low",
      D: "freeze at zero",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "At sea level, on a typical servo altimeter, the tolerance in feet from indicated is",
    choices: {
      A: "+/- 60 feet",
      B: "+/- 75 feet",
      C: "+/- 30 feet",
      D: "+/- 70 feet",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "If the static source of an altimeter becomes blocked during a descent the instrument will",
    choices: {
      A: "continue to display the reading at which the blockage occurred",
      B: "gradually indicate zero",
      C: "under-read",
      D: "indicate a height equivalent to the setting on the millibar subscale",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "The density altitude is",
    choices: {
      A: "the pressure altitude corrected for the density of air at this point",
      B: "the temperature altitude corrected for the difference between the real temperature and thestandard temperature",
      C: "the pressure altitude corrected for the relative density prevailing at this point",
      D: "the altitude of the standard atmosphere on which the density is equal to the actual density of the atmosphere",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In a standard atmosphere and at the sea level, the calibrated airspeed (CAS) is",
    choices: {
      A: "higher than the true airspeed (TAS)",
      B: "independent of the true airspeed (TAS)",
      C: "equal to the true airspeed (TAS)",
      D: "lower than the true airspeed (TAS)",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "VLO is the maximum",
    choices: {
      A: "flight speed with landing gear down",
      B: "speed at which the landing gear can be operated with full safety",
      C: "speed with flaps extended in a given position",
      D: "cruising speed not to be exceeded except in still air with caution",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The limits of the green scale of an airspeed indicator are",
    choices: {
      A: "VS1 for the lower limit and VNE for the upper limit",
      B: "VS0 for the lower limit and VNO for the upper limit",
      C: "VS1 for the lower limit and VNO for the upper limit",
      D: "VS1 for the lower limit and VLO for the upper limit",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "If an aircraft is equipped with one altimeter which is compensated for position error and another altimeter which is not, and all other factors being equal",
    choices: {
      A: "there will be no difference between them if air the data computer is functioning normally",
      B: "at high speed, the non-compensated altimeter will indicate a higher altitude",
      C: "At high speed, the non-compensated altimeter will indicate a lower altitude",
      D: "ATC will get an erroneous altitude report SSR",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The limits of the yellow scale of an airspeed indicator are",
    choices: {
      A: "VFE for the lower limit and VNE for the upper limit",
      B: "VLO for the lower limit and VNE for the upper limit",
      C: "VLE for the lower limit and VNE for the upper limit",
      D: "VNO for the lower limit and VNE for the upper limit",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "The purpose of the vibrating device of an altimeter is to",
    choices: {
      A: "reduce the hysteresis effect",
      B: "inform the crew of a failure of the instrument",
      C: "allow damping of the measurement in the unit",
      D: "reduce the effect of friction in the linkages",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The calibrated airspeed (CAS) is obtained by applying to the indicated airspeed (IAS)",
    choices: {
      A: "and instrument and density correction INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "an antenna and compressibility correction",
      C: "an instrument and position/pressure error correction",
      D: "a compressibility and density correction",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "The pressure altitude is the altitude corresponding",
    choices: {
      A: "in ambient atmosphere, to the pressure Ps prevailing at this point",
      B: "in ambient atmosphere, to the reference pressure Ps",
      C: "in standard atmosphere, to the reference pressure Ps",
      D: "in standard atmosphere, to the pressure Ps prevailing at this point",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "When descending through an isothermal layer at a constant Calibrated Airspeed (CAS), the True Airspeed (TAS) will",
    choices: {
      A: "increase at a linear rate",
      B: "decrease",
      C: "increase at an exponential rate",
      D: "remain constant",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "In case of accidental closing of an aircraft's left static pressure port (rain, birds) the altimeter",
    choices: {
      A: "keeps on providing reliable reading in all situations",
      B: "over-reads the altitude in case of a side-slip to the right and displays the correct informationduring symmetric flight",
      C: "over-reads the altitude in case of a side-slip to the left and displays the correct information during symmetric flight",
      D: "under-reads the altitude",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The airspeed indicator of an aircraft is provided with a moving red and white hatched pointer. This pointer indicates the",
    choices: {
      A: "maximum speed in VMO operation, versus temperature INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "maximum speed in VMO operation, versus altitude",
      C: "speed indicated on the auto-throttle control box, versus temperature",
      D: "speed indicated on the auto-throttle control box versus altitude",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "With a pitot probe blocked due to ice build up, the aircraft airspeed indicator will indicate in descent a",
    choices: {
      A: "decreasing speed",
      B: "constant speed",
      C: "increasing speed",
      D: "fluctuating speed",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The operating principle of the vertical speed indicator (VSI) is based on the measurement of the rate of change of",
    choices: {
      A: "Kinetic pressure",
      B: "Dynamic pressure",
      C: "Total pressure",
      D: "Static pressure",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The response time of a vertical speed detector may be increased by adding a",
    choices: {
      A: "return spring",
      B: "bimetallic strip",
      C: "correction based on an accelerometer sensor",
      D: "second calibrated port",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "The vertical speed indicator VSI is fed by",
    choices: {
      A: "differential pressure",
      B: "total pressure",
      C: "dynamic pressure INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      D: "static pressure",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The airspeed indicator circuit consists of pressure sensors. The pitot tube directly supplies",
    choices: {
      A: "the total pressure",
      B: "the total pressure and the static pressure",
      C: "the static pressure",
      D: "the dynamic pressure",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The pressure measured at the forward facing orifice of a pitot tube is the",
    choices: {
      A: "static pressure",
      B: "total pressure",
      C: "total pressure plus static pressure",
      D: "dynamic pressure",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The hysteresis error of an altimeter varies substantially with the",
    choices: {
      A: "mach number of the aircraft",
      B: "time passed at a given altitude",
      C: "aircraft altitude",
      D: "static temperature",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The velocity maximum operating (VMO) is a speed expressed in",
    choices: {
      A: "computed airspeed (COAS)",
      B: "equivalent airspeed (EAS)",
      C: "true airspeed (TAS)",
      D: "calibrated airspeed (CAS)",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "If the static source to an airspeed indicator (ASI) becomes blocked during a descent the instrument will",
    choices: {
      A: "under-read",
      B: "read zero",
      C: "continue to indicate the speed applicable to that at the time of the blockage",
      D: "over-read",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "All the anemometers are calibrated according to",
    choices: {
      A: "Bernoulli's limited formula which takes into account the air compressibility",
      B: "St-Venant's formula which takes into account the air compressibility",
      C: "St-Venant's formula which considers the air as an uncompressible fluid",
      D: "Bernoulli's limited formula which considers the air as an uncompressible fluid",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "If the static source to an altimeter becomes blocked during a climb, the instrument will",
    choices: {
      A: "under-read by an amount equivalent to the reading at the time that the instrument became blocked",
      B: "continue to indicate the reading at which the blockage occurred",
      C: "which must never be exceeded",
      D: "with flaps extended in landing position",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "VNE is the maximum speed",
    choices: {
      A: "at which the flight controls can be fully deflected",
      B: "not to be exceeded except in still air and with caution",
      C: "which must never be exceeded",
      D: "with flaps extended in landing position",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "On board an aircraft the altitude is measured from the",
    choices: {
      A: "density altitude INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "pressure altitude",
      C: "temperature altitude",
      D: "standard altitude",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Sound propagate through the air at a speed which only depends on",
    choices: {
      A: "temperature and the pressure",
      B: "temperature",
      C: "pressure",
      D: "density",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "With a constant weight, irrespective of the airfield altitude, an aircraft always takes off at the same",
    choices: {
      A: "ground speed",
      B: "calibrated airspeed",
      C: "true airspeed",
      D: "equivalent airspeed",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "When flying from a sector of warm air into one of colder air, the altimeter will",
    choices: {
      A: "be just as correct as before",
      B: "under-read",
      C: "over-read",
      D: "show the actual height above ground",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-44)The atmospheric pressure at FL 70 in a STANDARD + 10 atmosphere is",
    choices: {
      A: "942.85 hPa",
      B: "781.85 hPa",
      C: "1013.25 hPa INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      D: "644.41 hPa",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The altitude indicated on board an aircraft flying in an atmosphere where all the atmosphere layers below the aircraft are cold is",
    choices: {
      A: "equal to the standard altitude",
      B: "the same as the real altitude",
      C: "lower than the real altitude",
      D: "higher than the real altitude",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "A leak in the pitot total pressure line of a non-pressurised aircraft to an airspeed indicator would cause it to",
    choices: {
      A: "over-read",
      B: "under-read",
      C: "indication will drop to zero",
      D: "freeze on the value it indicated at the time of failure",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Today's airspeed indicators (calibrated to the Saint-Venant formula), indicate, in the absence of static (and instrumental) error",
    choices: {
      A: "The conventional airspeed (CAS) in all case",
      B: "The airspeed, whatever the altitude",
      C: "The equivalent airspeed, in all case",
      D: "The true airspeed",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "The limits of the white scale of an airspeed indicator are",
    choices: {
      A: "VSO for the lower limit and VFE for the upper limit",
      B: "VS1 for the lower limit and VLE for the upper limit",
      C: "VSO for the lower limit and VLE for the upper limit",
      D: "VS1 for the lower limit and VFE for the upper limit",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The altitude indicated on board an aircraft flying in an atmosphere where all atmosphere layer below the aircraft are warm is",
    choices: {
      A: "higher than the real altitude",
      B: "lower than the real altitude",
      C: "equal to the standard altitude",
      D: "the same as the real altitude",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The altimeter consists of one or several aneroid capsules located in a sealed casing. The pressures in the aneroid capsule (i) and casing (ii) are respectively",
    choices: {
      A: "(i) static pressure (ii) total pressure",
      B: "(i) static pressure at time t (ii) static pressure at time t-t",
      C: "(i) total pressure (ii) static pressure",
      D: "(i) vacuum (or a very low pressure) (ii) static pressure",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "After an aircraft has passed through a volcanic cloud which has blocked the total pressure probe inlet of the airspeed indicator, the pilot begins a stabilised descent and finds that the indicated airspeed",
    choices: {
      A: "decreases steadily",
      B: "increases steadily",
      C: "decreases abruptly towards zero",
      D: "increases abruptly towards VNE",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In a non-pressurised aircraft, if one or several static pressure ports are damaged, there is an ultimate emergency means for restoring a practically correct static pressure intake",
    choices: {
      A: "calculating the ambient static pressure, allowing for the altitude and QNH and adjusting theinstruments",
      B: "descending as much as possible in order to fly at a pressure as close to 1013.25 hPa as possible",
      C: "slightly opening a window to restore the ambient pressure in the cabin",
      D: "breaking the rate-of-climb indicator glass window",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "During a climb after take-off from a contaminated runway, if the total pressure probe of the airspeed indicator is blocked, the pilot finds that indicated airspeed",
    choices: {
      A: "decreases, abruptly towards zero",
      B: "increases steadily",
      C: "increases abruptly towards VNE",
      D: "decreases steadily",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The vertical speed indicator of an aircraft flying at a true airspeed of 100 kt, in a descent with a slope of 3 degrees indicates",
    choices: {
      A: "- 300 feet/min",
      B: "- 150 feet/min",
      C: "- 250 feet/min",
      D: "- 500 feet/min",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "The altimeter is fed by",
    choices: {
      A: "differential pressure",
      B: "static pressure",
      C: "dynamic pressure",
      D: "total pressure",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "Calibrated air speed is",
    choices: {
      A: "IAS plus the pressure error",
      B: "IAS plus density error correction",
      C: "IAS plus compressibility correction",
      D: "IAS plus instrument error correction",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "An aircraft is flying at an indicated altitude of 16,000 ft. The outside air temperature is -30oC. What is the true altitude of the aircraft?",
    choices: {
      A: "16,200 ft",
      B: "15,200 ft INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      C: "18,600 ft",
      D: "13,500 ft",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An aircraft is flying straight and level, over a warm air mass. The altimeter reading will be",
    choices: {
      A: "correct",
      B: "greater than the real height",
      C: "less than the real height",
      D: "oscillating around the correct height",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "A leak in the pitot total pressure line of a non-pressurised aircraft to an airspeed indicator would cause it to",
    choices: {
      A: "under-read",
      B: "over-read",
      C: "over-read in a climb and under-read in a descent",
      D: "under-read in a climb and over-read in a descent",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "A blocked pitot head with a clear static source causes the airspeed indicator to",
    choices: {
      A: "read like a vertical speed indicator",
      B: "react like an altimeter",
      C: "operate normally",
      D: "freeze at zero",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "A dynamic pressure measurement circuit is constituted of the following pressure probes",
    choices: {
      A: "total pressure and static pressure",
      B: "static pressure only",
      C: "total pressure only",
      D: "total pressure and standard pressure INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "A vertical speed indicator measures the difference between",
    choices: {
      A: "the dynamic pressure and the static pressure",
      B: "the total pressure and the static pressure",
      C: "the total instantaneous pressure and the total pressure at a previous moment",
      D: "the instantaneous static pressure and the static pressure at a previous moment",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "An aircraft is equipped with one altimeter that is compensated for position error and another one altimeter that is not. Assuming all other factors are equal, during a straight symmetrical flight",
    choices: {
      A: "the greater the speed, the greater the error between the two altimeters",
      B: "the greater the speed, the lower the error between the two altimeters",
      C: "the lower the speed, the greater the error between the two altimeters",
      D: "the error between the two altimeters does not depend on the speed",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "An airspeed indicator displays",
    choices: {
      A: "IAS",
      B: "EAS",
      C: "CAS",
      D: "TAS",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "An airspeed indicator includes a capsule; inside this capsule is",
    choices: {
      A: "a very low residual pressure and outside is static pressure",
      B: "static pressure and outside is dynamic pressure",
      C: "a very low residual pressure and outside is static pressure",
      D: "static pressure and outside a very low residual pressure",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "An altimeter contains one or more aneroid capsules. Inside these capsules is",
    choices: {
      A: "dynamic pressure and outside is static pressure",
      B: "static pressure and outside is dynamic pressure",
      C: "a very low residual pressure and outside is static pressure",
      D: "static pressure and outside a very low residual pressure",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "An aneroid capsule: The combination regrouping all the correct statements is: 1. measures differential pressure 2. measures absolute pressure 3. is used for low pressure measurement 4. is used for very high pressure measurement",
    choices: {
      A: "1, 3",
      B: "2, 3",
      C: "2, 4",
      D: "1, 4",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Assuming that the CAS remains constant, if the total pressure probe is blocked, the IAS",
    choices: {
      A: "remains constant during level flight, decreases during a climb and increases during a descent",
      B: "remains constant during level flight, increases during a climb and decreases during a descent",
      C: "increases during level flight, remains constant during a climb and a descent",
      D: "remains constant during all the phases of the flight",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Calibrated Air Speed (CAS) is obtained from Indicated Air Speed (IAS) by correcting for the following errors: The combination regrouping all the correct statements is: 1. position 2. compressibility 3. instrument 4. density",
    choices: {
      A: "2, 3, 4",
      B: "3, 4",
      C: "1, 3, 4",
      D: "1, 3",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "Calibrated Air Speed (CAS) is obtained from Indicated Air Speed (IAS) by correcting for the",
    choices: {
      A: "instrument error",
      B: "position and instrument errors",
      C: "density error",
      D: "position and density errors",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "Calibrated Air Speed (CAS) is",
    choices: {
      A: "Indicated Air Speed (IAS) corrected for compressibility error",
      B: "Indicated Air Speed (IAS) corrected for position and instrument errors",
      C: "Equivalent Air Speed (EAS) corrected for density error",
      D: "Equivalent Air Speed (EAS) corrected for compressibility and density errors",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "CAS can be obtained from the following data",
    choices: {
      A: "TAS and pressure altitude",
      B: "EAS and density altitude INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      C: "EAS and pressure altitude",
      D: "TAS and density altitude",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "Concerning the airspeed indicator, IAS is",
    choices: {
      A: "the indicated reading on the instrument",
      B: "the indicated reading on an instrument presumed to be perfect",
      C: "the indicated airspeed corrected for instrument and position errors",
      D: "the indicated airspeed corrected for instrument error only",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "Considering an airspeed indicator, a second stripped needle, if installed, indicates",
    choices: {
      A: "never-exceed speed (VNE) or maximum operating speed (VMO), depending on which is the higher",
      B: "never-exceed speed (VNE)",
      C: "never-exceed speed (VNE) or maximum operating speed (VMO), depending on which is the lowest",
      D: "maximum operating speed (VMO)",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "Considering the relationship between CAS and EAS",
    choices: {
      A: "EAS may be lower or greater than CAS, depending on density altitude",
      B: "EAS is always greater than or equal to CAS",
      C: "EAS may be lower or greater than CAS, depending on pressure altitude",
      D: "EAS is always lower than or equal to CAS",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "Due to its conception, the altimeter measures a",
    choices: {
      A: "temperature altitude",
      B: "density altitude",
      C: "pressure altitude",
      D: "true altitude INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "During descent, the total pressure probe of the airspeed indicator becomes blocked. In this case: The combination regrouping all the correct statements is: 1. IAS becomes greater than CAS 2. IAS becomes lower than CAS 3. Maintaining IAS constant, VMO may be exceeded 4. Maintaining IAS constant, aircraft may stall",
    choices: {
      A: "2, 4",
      B: "2, 3",
      C: "1, 3",
      D: "1, 4",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      ". Equivalent Air Speed (EAS) is obtained from Calibrated Air Speed (CAS) by correcting for the following errors: The combination regrouping all the correct statements is: 1. position 2. compressibility 3. instrument 4. density",
    choices: {
      A: "2, 4",
      B: "4",
      C: "2",
      D: "1, 2, 3, 4",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Equivalent Air Speed (EAS) is obtained from Calibrated Air Speed (CAS) by correcting for",
    choices: {
      A: "compressibility error",
      B: "position error INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      C: "instrument error",
      D: "density error",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      ". Equivalent Air Speed (EAS) is obtained from Indicated Air Speed (IAS) by correcting for the following errors: The combination regrouping all the correct statements is: 1. instrument 2. position 3. density 4. compressibility",
    choices: {
      A: "1, 2, 3",
      B: "1, 2, 4",
      C: "1, 2",
      D: "1, 2, 3, 4",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "Equivalent Air Speed (EAS) is",
    choices: {
      A: "True Air Speed (TAS) corrected for compressibility error",
      B: "Indicated Air Speed (IAS) corrected for compressibility error",
      C: "Calibrated Air Speed (CAS) corrected for density error",
      D: "Indicated Air Speed (IAS) corrected for position, instrument and compressibility errors",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "Equivalent Air Speed (EAS) is",
    choices: {
      A: "Calibrated Air Speed (CAS) corrected for compressibility error",
      B: "Calibrated Air Speed (CAS) corrected for density error",
      C: "True Air Speed (TAS) corrected for compressibility error",
      D: "True Air Speed (TAS) corrected for compressibility and density errors",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "For TAS calculations, the ADC uses the following parameters: The combination regrouping all the correct statements is: 1. SAT 2. TAT 3. Static pressure 4. Total pressure",
    choices: {
      A: "1, 2, 3, 4",
      B: "2, 3, 4",
      C: "3, 4",
      D: "1, 3, 4",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Given: Pt = total pressure Ps = static pressure Pd = dynamic pressure",
    choices: {
      A: "Pd = Pt + Ps",
      B: "Pt = Pd + Ps",
      C: "Ps = Pt + Pd",
      D: "Pd = Pt/Ps",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Given: Pt = total pressure Ps = static pressure Pso = static pressure at sea level Calibrated airspeed (CAS) is a function of",
    choices: {
      A: "Pt/Ps",
      B: "Ps - Pso",
      C: "Pt - Ps",
      D: "(Pt - Pso) / Ps",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Given: Pt = total pressure Ps = static pressure Pso = static pressure at sea level Dynamic pressure is",
    choices: {
      A: "(Pt - Ps) / Ps",
      B: "Pt - Pso",
      C: "(Pt -Pso) / Pso",
      D: "Pt - Ps",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      ". Given: Pt = total pressure Ps = static pressure Dynamic pressure is",
    choices: {
      A: "Pt / Ps",
      B: "(Pt - Ps) / Pt",
      C: "(Pt- Ps) / Ps",
      D: "Pt- Ps",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "Given: Pt = total pressure Ps = static pressure Pd = dynamic pressure The airspeed indicator is fed by",
    choices: {
      A: "Ps- Pt",
      B: "Pd",
      C: "Pt - Pd",
      D: "Pd - Ps",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "If the total pressure intake on the pitot tube is rapidly clogged up by ice during flight, what effect will it have on the airspeed indication during a climb?",
    choices: {
      A: "The total pressure is trapped while the static pressure decreases, implying an increasing indicated airspeed",
      B: "The total pressure is trapped while the static pressure decreases, implying a decreasingindicated airspeed",
      C: "As the total pressure in the pitot static system is trapped, the airspeed indicator willindicate a constant airspeed",
      D: "The total pressure is trapped while the static pressure increases, implying a decreasingindicated airspeed",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "If an aircraft maintaining a constant CAS and flight level is flying from a cold air mass into warmer air",
    choices: {
      A: "Mach number increases",
      B: "TAS decreases",
      C: "TAS increases",
      D: "Mach number decreases",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "If an aircraft maintaining a constant CAS and flight level is flying from a warm air mass into colder air",
    choices: {
      A: "Mach number increases",
      B: "TAS increases",
      C: "TAS decreases",
      D: "Mach number decreases",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "If the pitot tube becomes blocked during a descent, the airspeed indicator",
    choices: {
      A: "over-reads",
      B: "under-reads",
      C: "under-reads or over-reads depending on the air density",
      D: "indicates a constant speed",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "If the pitot tube ices up during a flight, the affected equipment(s) is (are): The combination regrouping all the correct statements is: 1. the altimeter 2. the variometer 3. the airspeed indicator",
    choices: {
      A: "1, 2",
      B: "1, 2, 3",
      C: "1, 3",
      D: "3",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "If the static intakes are completely clogged up by ice during a climb, the VSI shows",
    choices: {
      A: "a descent if the outside static pressure is less than the pressure in the VSI- gauge",
      B: "zero",
      C: "a constant rate of climb, even if the aircraft is levelling out",
      D: "an increasing rate of climb if the ambient static pressure decreases",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "If the static source of an altimeter becomes blocked during a climb the instrument will",
    choices: {
      A: "indicate a height equivalent to the setting on the millibar sub-scale",
      B: "gradually indicate zero",
      C: "under-read",
      D: "continue to display the reading at which the blockage occurred",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "If, during a descent: the most likely explanation is that: 1. the pneumatic altimeter reading is constant 2. the VSI shows zero 3. the IAS is increasing",
    choices: {
      A: "the static intakes are completely clogged up by ice INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "the total pressure intake is completely clogged up by ice",
      C: "there is a leakage in the static pressure line",
      D: "the antenna of the radio altimeter is completely clogged up by ice",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In a standard atmosphere and at the sea level, the equivalent airspeed (EAS) is",
    choices: {
      A: "lower than the true airspeed (TAS)",
      B: "independent of the true airspeed (TAS)",
      C: "higher than the true airspeed (TAS)",
      D: "equal to the true airspeed (TAS)",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "In standard atmosphere, when descending at constant CAS",
    choices: {
      A: "TAS remains constant",
      B: "TAS decreases",
      C: "TAS increases",
      D: "TAS first increases and then remains constant below the tropopause",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "In the absence of position and instrument errors, CAS is equal to",
    choices: {
      A: "IAS",
      B: "EAS",
      C: "TAS",
      D: "IAS and EAS",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In the absence of position and instrument errors, IAS is equal to",
    choices: {
      A: "CAS and EAS",
      B: "EAS",
      C: "TAS",
      D: "CAS",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "In the absence of position and instrument errors",
    choices: {
      A: "AIS = EAS",
      B: "IAS = EAS",
      C: "CAS = EAS",
      D: "CAS = TAS",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "In the absence of position and instrumental errors, IAS is equal to",
    choices: {
      A: "TAS",
      B: "EAS",
      C: "CAS",
      D: "KAS",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "In the directional gyro the detection system of the local vertical feeds",
    choices: {
      A: "a torque motor on the sensitive axis",
      B: "a nozzle integral with the outer gimbal ring",
      C: "a levelling erection torque motor",
      D: "two torque motors arranged horizontally",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Maintaining CAS and flight level constant, a fall in ambient temperature results in",
    choices: {
      A: "lower TAS because air density increases INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "lower TAS because air density decreases",
      C: "higher TAS because air density increases",
      D: "higher TAS because air density decreases",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "Parallax error is",
    choices: {
      A: "a reading error",
      B: "due to pressure effect",
      C: "due to the effect of aircraft accelerations",
      D: "due to temperature effect",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "TAS can be obtained from the following data",
    choices: {
      A: "CAS and pressure altitude",
      B: "EAS and pressure altitude",
      C: "CAS and density altitude",
      D: "EAS and density altitude",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "The altimeter indicates true altitude",
    choices: {
      A: "when the temperature on the ground is +15oC with a lapse rate of 2oC per 1000 feet, and correctQNH is set",
      B: "in ISA conditions only",
      C: "when the temperature on the ground is +15oC with a lapse rate of 2oC per 1000 feet, and correctQFE is set",
      D: "when pressure at mean sea level is 10135.25 hPa, with a ground temperature of +15oC and adensity equal to 1,225 kg/m3",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The altimeter is supplied with",
    choices: {
      A: "static pressure INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "dynamic pressure",
      C: "total pressure",
      D: "differential pressure",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The altimeter of your aircraft indicates 10,000 ft with a subscale-setting of 1013.25 mb. OAT is +5oC. The pressure altitude of the aircraft is",
    choices: {
      A: "697 hPa",
      B: "10400 ft",
      C: "9600 ft",
      D: "10000 ft",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The altimeter of your aircraft indicates 11000 ft with a subscale-setting of 1013.25 mb QNH is 1023 hPa. OAT is +3oC. The pressure altitude of the aircraft is",
    choices: {
      A: "10250 ft",
      B: "11740 ft",
      C: "11000 ft",
      D: "670 hPa",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The altimeter of your aircraft indicates 12000 ft with a subscale-setting of 1013.25 mb. QNH is 999 hPa. The pressure altitude of the aircraft is",
    choices: {
      A: "644 hPa",
      B: "11580 ft",
      C: "12420 ft",
      D: "12000 ft",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The altimeter of your aircraft indicates 15000 ft with a subscale-setting of 1013.25 mb. OAT is -21oC. The pressure altitude of the aircraft is",
    choices: {
      A: "15000 ft",
      B: "14640 ft",
      C: "15360 ft INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      D: "572 hPa",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The altimeter of your aircraft indicates 16000 ft with a subscale-setting of 1013.25 mb. QNH is 993 hPa. OAT is -3oC. The pressure altitude of the aircraft is",
    choices: {
      A: "16000 ft",
      B: "14200 ft",
      C: "17700 ft",
      D: "548 hPa",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The altimeter of your aircraft indicates 17000 ft with a subscale-setting of 1013.25 mb. QNH is 1031 hPa. The pressure altitude of the aircraft is",
    choices: {
      A: "17540 ft",
      B: "17000 ft",
      C: "16460 ft",
      D: "527 hPa",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The compressibility correction to CAS to give EAS: The combination regrouping all the correct statements is: 1. may be positive 2. is always negative 3. depends on Mach number only 4. depends on pressure altitude only",
    choices: {
      A: "2, 3",
      B: "2, 4",
      C: "1, 3",
      D: "1, 4",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The parameter that determines the relationship between EAS and TAS is",
    choices: {
      A: "Mach number",
      B: "pressure altitude",
      C: "OAT",
      D: "density altitude",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The pressure capsule of an airspeed indicator is sensitive to the difference",
    choices: {
      A: "(Total Pressure Dynamic Pressure), called Static Pressure",
      B: "(Dynamic Pressure Static Pressure), called Total Pressure",
      C: "(Total Pressure Static Pressure), called Dynamic Pressure",
      D: "(Dynamic Pressure Total Pressure), called Static Pressure",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "The QNH is by definition the value of the",
    choices: {
      A: "atmospheric pressure at the sea level of the location for which it is given",
      B: "altimeter setting so that the altimeter, on the apron of the aerodrome for which it is given, reads the elevation",
      C: "altimeter setting so that the altimeter, on the apron of the aerodrome for which it is given,reads zero",
      D: "atmospheric pressure at the level of the ground over-flown by the aircraft",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The total pressure probe (pitot tube) comprises a mast which moves its port to a distance from the aircraft skin in order",
    choices: {
      A: "to locate it outside the boundary layer",
      B: "not to disturb the aerodynamic flow around the aircraft",
      C: "it is protected from icing",
      D: "it is easily accessible during maintenance checks",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "True Air Speed (TAS) is equal to Equivalent Air Speed (EAS) only if",
    choices: {
      A: "P = 1013.25 hPa, OAT = 15oC and TAS < 200 kt",
      B: "P = 1013.25 hPa and OAT = 273oK",
      C: "P = 1013.25 hPa, OAT = 15oC and TAS >200 kt",
      D: "P = 1013.25 hPa and OAT = 15oC",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "True Air Speed (TAS) is obtained from Calibrated Air Speed (CAS) by correcting for the following errors: 1.instrument 2.compressibility 3.position 4.density The combination regrouping all the correct statements is",
    choices: {
      A: "2, 4",
      B: "2",
      C: "4",
      D: "1, 2, 3, 4",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "True Air Speed (TAS) is obtained from Equivalent Air Speed (EAS) by correcting for",
    choices: {
      A: "instrument error",
      B: "compressibility error",
      C: "density error",
      D: "position and instrument errors",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "True Air Speed (TAS) is obtained from Indicated Air Speed (IAS) by correcting for the following errors: The combination regrouping all the correct statements is: 1. instrument 2. position 3. compressibility 4. density",
    choices: {
      A: "3, 4 INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "1, 2, 3, 4",
      C: "1, 2",
      D: "1, 3, 4",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "True Air Speed (TAS) is",
    choices: {
      A: "Equivalent Air Speed (EAS) corrected for compressibility error",
      B: "Equivalent Air Speed (EAS) corrected for density error",
      C: "Calibrated Air Speed (CAS) corrected for density error",
      D: "Calibrated Air Speed (CAS) corrected for compressibility error",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "True Air Speed (TAS) is",
    choices: {
      A: "Calibrated Air Speed (CAS) corrected for density error only",
      B: "Ca",
      C: "Equivalent Air Speed (EAS) corrected for compressibility error only",
      D: "Equivalent Air Speed (EAS) corrected for compressibility and density errors",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "True Air Speed (TAS) is",
    choices: {
      A: "Calibrated Air Speed (CAS) corrected for instrument, compressibility and density errors",
      B: "Indicated Air Speed (IAS) corrected for compressibility and density errors only",
      C: "Calibrated Air Speed (CAS) corrected for instrument, position, compressibility and density errors",
      D: "Indicated Air Speed (IAS) corrected for instrument, position, compressibility and density errors",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "When climbing at a constant CAS",
    choices: {
      A: "Mach number decreases",
      B: "Mach number increases",
      C: "Mach number remains constant",
      D: "the difference between surrounding conditions and ISA must be known to deduce the Mach numbervariation",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "When climbing at a constant CAS",
    choices: {
      A: "EAS decreases",
      B: "EAS increases",
      C: "EAS remains constant",
      D: "EAS does not depend on altitude",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "When descending at a constant CAS",
    choices: {
      A: "EAS increases",
      B: "EAS decreases",
      C: "EAS remains constant",
      D: "EAS does not depend on altitude",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "When flying in cold air (colder than standard atmosphere), indicated altitude is",
    choices: {
      A: "lower than the true altitude",
      B: "the same as the true altitude",
      C: "higher than the true altitude",
      D: "equal to the standard altitude",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "When flying in cold air (colder than standard atmosphere), the altimeter will",
    choices: {
      A: "show the actual height above the sea level",
      B: "underestimate",
      C: "overestimate",
      D: "show the actual height above ground",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "When flying in warm air (warmer than standard atmosphere), indicated altitude is",
    choices: {
      A: "higher than the true altitude",
      B: "the same as the true altitude",
      C: "lower than the true altitude",
      D: "equal to the standard altitude",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Which of the following instruments are connected to the pitot-static system? The combination regrouping all the correct statements is: 1. altimeter 2. air operated directional gyro 3. vertical speed indicator 4. airspeed indicator",
    choices: {
      A: "1, 3",
      B: "1, 3, 4",
      C: "1, 2, 3, 4",
      D: "1, 2, 4",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "With constant weight and configuration, an aircraft always takes off at the same",
    choices: {
      A: "indicated airspeed",
      B: "ground speed",
      C: "true airspeed",
      D: "equivalent airspeed",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "With EAS and density altitude, we can deduce",
    choices: {
      A: "CAS and TAS",
      B: "CAS",
      C: "TAS",
      D: "IAS",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "With EAS and pressure altitude, we can deduce",
    choices: {
      A: "TAS",
      B: "CAS",
      C: "CAS and TAS",
      D: "IAS",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "A vibrator may be fitted to an altimeter to overcome",
    choices: {
      A: "friction",
      B: "hysteresis",
      C: "lag",
      D: "pressure error",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "CAS is IAS corrected for",
    choices: {
      A: "position and instrument error",
      B: "instrument, pressure and density error",
      C: "relative density only",
      D: "compressibility",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "QNH is",
    choices: {
      A: "the airfield barometric pressure INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "the setting that will give zero indication on the airfield",
      C: "the equivalent sea level pressure at the airfield",
      D: "the setting that will indicate airfield height",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "What is VMO calculated from",
    choices: {
      A: "CAS",
      B: "TAS",
      C: "COAS",
      D: "EAS",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "At constant weight, regardless of altitude, an aircraft always lifts off at a constant",
    choices: {
      A: "EAS",
      B: "TAS",
      C: "ground speed",
      D: "CAS",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "VFE is the maximum speed at which",
    choices: {
      A: "the flaps can be operated",
      B: "the flaps may be extended in the take-off configuration",
      C: "the flaps may be extended in the landing configuration",
      D: "the flaps may be extended in a specified configuration",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "The white arc on the ASI indicates",
    choices: {
      A: "VS1 at the lower end and VLE at the upper end",
      B: "VS0 at the lower end and VLE at the upper end",
      C: "VS0 at the lower end and VFE at the upper end INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      D: "VS1 at the lower end and VFE at the upper end",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "An ASI circuit consists of pressure sensors. The Pitot Probe measures",
    choices: {
      A: "total pressure & static pressure",
      B: "dynamic pressure",
      C: "static pressure",
      D: "total pressure",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "If a pitot source is blocked in an ASI, and the drain hole is blocked, but the static source is open, what will happen?",
    choices: {
      A: "ASI reading goes to zero",
      B: "ASI under reads",
      C: "ASI over reads",
      D: "ASI behaves like an altimeter",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "VNO is the maximum speed which",
    choices: {
      A: "the pitot can fully deflect the controls",
      B: "should only be exceeded in still air and with caution",
      C: "should never be exceeded",
      D: "must not be exceeded for flap/gear extension",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "If the static vent becomes blocked on an unpressurised aircraft, what could you do?",
    choices: {
      A: "open the window",
      B: "break the VSI glass",
      C: "compute altitude mathematically",
      D: "select standby pitot source",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "What is density altitude",
    choices: {
      A: "altitude in the standard atmosphere at which the prevailing density is equal to the density in the standard atmosphere",
      B: "pressure altitude corrected for prevailing temp",
      C: "temperature altitude",
      D: "pressure corrected",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "Aircraft is travelling at 100 kts ground speed on a 3o glide slope. What is the rate of descent?",
    choices: {
      A: "500 ft/min",
      B: "300 ft/min",
      C: "250 ft/min",
      D: "600 ft/min",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "If the pitot tube is leaking (and the pitot drain is blocked) in a non-pressurised A/C, the ASI will",
    choices: {
      A: "under-read",
      B: "over-read",
      C: "over-read in the climb, under-read in the descent",
      D: "under-read in the climb, over-read in the descent",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "At sea level ISA, TAS",
    choices: {
      A: "equals CAS",
      B: "is greater than CAS",
      C: "is less than CAS",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "What will the altimeter read if the layers beneath the aircraft are all colder than standard?",
    choices: {
      A: "Read lower than the real altitude INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "Read higher than the real altitude",
      C: "Read the correct altitude",
      D: "Readings will fluctuate",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "If a pitot tube and drains are blocked at altitude by icing, during a descent the ASI will",
    choices: {
      A: "read constant airspeed",
      B: "under read",
      C: "over read",
      D: "show zero",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "What are the upper and lower limits of the yellow arc on an ASI?",
    choices: {
      A: "Lower limit VLO and upper limit VNE",
      B: "Lower limit VLE and upper limit VNE",
      C: "Lower limit VNO and upper limit VNE",
      D: "Lower limit VLO and upper limit VLE",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "What does the blue line on an ASI of a twin propeller engined aircraft indicate?",
    choices: {
      A: "VYSE",
      B: "VNO",
      C: "VFE",
      D: "VMCA",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "What is SAT?",
    choices: {
      A: "Relative temperature measured in K",
      B: "Differential temperature measured in K",
      C: "Relative temperature measured in oC INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      D: "Ambient temperature measured in oC",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "What happens when the static pressure supply, to an altimeter, becomes blocked during a descent?",
    choices: {
      A: "reduces to zero",
      B: "over reads",
      C: "under reads",
      D: "indicates altitude at which blockage occurred",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "What happens when the static pressure supply, to an altimeter, becomes blocked during a descent?",
    choices: {
      A: "reduces to zero",
      B: "over reads",
      C: "under reads",
      D: "indicates altitude at which blockage occurred",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "VLO is defined as",
    choices: {
      A: "the maximum speed at which to fly with the landing gear retracted",
      B: "the maximum speed at which the landing gear may be retracted o extended",
      C: "the maximum speed at which to fly with the landing gear extended",
      D: "the minimum speed at which to fly with the landing gear extended",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "VNE is defined as",
    choices: {
      A: "the speed which must not be exceeded in still air, or without caution",
      B: "the speed above which the landing gear may not be extended",
      C: "the speed which must never be exceeded",
      D: "the maximum speed for normal flap extension to be selected",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "The green arc on the ASI is used to identify which speed range?",
    choices: {
      A: "VSO to VNO",
      B: "VS1 to VFE",
      C: "VS1 to VNO",
      D: "VS1 to VLO",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "Pressure altitude may be defined as",
    choices: {
      A: "the lowest forecast regional pressure",
      B: "pressure measured in the standard atmosphere",
      C: "altitude indicated with QFE set on the altimeter",
      D: "altitude indicated with QNH set on the altimeter",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "What is the effect on an altimeter reading if variations in static pressure occur near to the pressure source?",
    choices: {
      A: "a change in hysteresis error",
      B: "a change in the instrument error",
      C: "a change in the position error",
      D: "a change in the compressibility error",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The single most significant item which makes a servo altimeter more accurate is",
    choices: {
      A: "electromagnetic pick-off",
      B: "logarithmic scale",
      C: "temperature compensated spring",
      D: "multiple pointers",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "VNO is defined as",
    choices: {
      A: "maximum structural cruising speed INSTRUMENTATION FLIGHT INSTRUMENTS - Air Data Instruments",
      B: "never exceed speed",
      C: "manoeuvring speed",
      D: "maximum operating speed",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "An aircraft is flying at constant indicated altitude over a cold airmass. The altimeter reading will be",
    choices: {
      A: "greater than the real altitude",
      B: "standard altitude",
      C: "same as the real altitude",
      D: "less than the real altitude",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "What is indicated on the ASI when the static vent blocks during a descent?",
    choices: {
      A: "under reads",
      B: "reads correctly",
      C: "over reads",
      D: "reads zero",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "What is the principle of operation of a VSI?",
    choices: {
      A: "differential pressure across a capsule",
      B: "total pressure in a capsule",
      C: "static pressure in a capsule",
      D: "dynamic pressure in a capsule",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In an altimeter, what pressure is fed to the capsule and the case?",
    choices: {
      A: "Static / Dynamic",
      B: "Static / Static",
      C: "Static / Vacuum INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      D: "Vacuum / Static",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "What does the green arc on an ASI indicate?",
    choices: {
      A: "Vs1 - Vne",
      B: "Vs1 - Vlo",
      C: "Vs1 - Vno",
      D: "Vso - Vno",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "From where does the air data computer (ADC) obtain aircraft altitude?",
    choices: {
      A: "OAT probe",
      B: "dynamic absolute ambient pressure",
      C: "absolute barometric sensor on aircraft fuselage",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "What is the Schuler period?",
    choices: {
      A: "21 minutes",
      B: "84 minutes",
      C: "1 oscillation in azimuth",
      D: "63 minutes",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "What is the Schuler period?",
    choices: {
      A: "48 minutes",
      B: "84 seconds",
      C: "48 seconds",
      D: "84 minutes",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "While inertial platform system is operating on board an aircraft, it is necessary to use a device with the following characteristics, in order to keep the vertical line with a pendulous system",
    choices: {
      A: "with damping and a period of about 84 minutes",
      B: "with damping and a period of about 84 seconds",
      C: "without damping and a period of about 84 minutes",
      D: "without damping and a period of about 84 seconds",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Heading information given by a gyro platform, is given by a gyro at",
    choices: {
      A: "3 degrees-of-freedom in the vertical axis",
      B: "3 degrees-of-freedom in the horizontal axis",
      C: "2 degrees-of-freedom in the vertical axis",
      D: "2 degrees-of-freedom in the horizontal axis",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "In order to align a strap-down inertial unit, it is required to insert the local geographical co-ordinates. This is necessary to",
    choices: {
      A: "Position the computing trihedron with reference to earth",
      B: "Check operation of laser gyros",
      C: "Determine magnetic or true heading",
      D: "Re-erect laser gyros",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The vertical reference unit of a three-axis data generator is equipped with a gyro with",
    choices: {
      A: "1 degree of freedom and horizontal spin axis",
      B: "1 degree of freedom and vertical spin axis",
      C: "2 degrees of freedom and horizontal spin axis",
      D: "2 degrees of freedom and vertical spin axis",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "In an inertial navigation system (INS), should the platform be displaced from the horizontal, it would oscillate with a period, called Schuler period, of about",
    choices: {
      A: "8.4 minutes INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      B: "64 seconds",
      C: "84 seconds",
      D: "84 minutes",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "In order to align an inertial reference system (IRS), it is required to insert the local geographical co- ordinates. This enables the IRS to",
    choices: {
      A: "compare the latitude it finds with that entered by the operator",
      B: "compare the longitude it finds with that entered by the operator",
      C: "find the north",
      D: "Initialise the FMS flight plan",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The alignment sequence of an inertial reference system (IRS) consists of: The combination regrouping all the correct statements is: 1. search for the local vertical 2. search for the true north 3. comparison between the longitude find and the one entered by the operator 4. comparison between the latitude find and the one entered by the operator",
    choices: {
      A: "1, 2, 4",
      B: "1, 2, 3",
      C: "1, 3",
      D: "2, 3",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The elements which take part in the local vertical alignment of an inertial strap-down unit are",
    choices: {
      A: "the accelerometers",
      B: "the accelerometers and gyroscopes",
      C: "the flow inductors",
      D: "the gyroscopes",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      'The mode selector of an inertial unit comprises the OFF - STBY - ALIGN NAV - ATT positions: The combination regrouping all the correct statements is: 1. on "STBY" the unit aligns on the local geographic trihedron 2. the "ATT" position is used in automatic landing (mode LAND) 3. on "NAV" the co-ordinates of the present position are entered 4. on "ALIGN" the unit aligns on the local geographic trihedron 5. on "ALIGN" current position is updated upon the aircraft alignment on the runway',
    choices: {
      A: "2, 5",
      B: "4",
      C: "1, 3, 5",
      D: "1, 2, 4",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The Inertial Strap-down Unit of an IRS is programmed with co-ordinates during alignment in order to",
    choices: {
      A: "establish the trihedron with reference to the earth",
      B: "establish true or magnetic heading",
      C: "check the function of the laser gyros",
      D: "compensate for aircraft movement",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "To obtain heading information from a Gyro Stabilised platform, the gyros should have",
    choices: {
      A: "1 degree of freedom and a horizontal axis",
      B: "1 degree of freedom and a vertical axis",
      C: "2 degrees of freedom and a horizontal axis",
      D: "2 degrees of freedom and a vertical axis",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "What are the components of a Ring Laser Gyro?",
    choices: {
      A: "mirrors and 2 cavities",
      B: "2 anodes and 2 cathodes INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      C: "2 beams of laser light",
      D: "horizontal gyro axis and 1 degree of freedom",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Following 180o stabilised turn with a constant attitude and bank, the artificial horizon indicates",
    choices: {
      A: "too high pitch-up and too low banking",
      B: "too high pitch-up and correct banking",
      C: "attitude and banking correct",
      D: "too high pitch up and too high banking",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 022-40)The diagram which shows a 40o left bank and 15o nose down attitude is number",
    choices: {
      A: "3",
      B: "2",
      C: "1",
      D: "4",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "In the building principle of a gyroscope, the best efficiency is obtained through the concentration of the mass",
    choices: {
      A: "on the periphery and with a high rotation speed",
      B: "close to the axis and with a high rotation speed",
      C: "on the periphery and with a low rotation speed",
      D: "close to the axis and with a low rotation speed",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "Concerning the directional gyro indicator, the latitude at which the apparent wander is equal to 0 is",
    choices: {
      A: "the equator",
      B: "latitude 30o",
      C: "latitude 45o",
      D: "the North pole INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The heading information originating from the gyro-magnetic compass flux valve is sent to the",
    choices: {
      A: "error detector",
      B: "erector system",
      C: "heading indicator",
      D: "amplifier",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "A gravity erector system is used to correct the errors on",
    choices: {
      A: "an artificial horizon",
      B: "a directional gyro",
      C: "a turn indicator",
      D: "a gyro-magnetic compass",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "A turn indicator is an instrument which indicates rate of turn. Rate of turn depends upon: 1.bank angle 2.aeroplane speed 3.aeroplane weight The combination regrouping the correct statements is",
    choices: {
      A: "2 and 3",
      B: "1, 2 and 3",
      C: "1 and 2",
      D: "1 and 3",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "A failed RMI rose is locked on 090o and the ADF pointer indicates 225o. The relative bearing to the station is",
    choices: {
      A: "135o",
      B: "Impossible to read, due to failure RMI",
      C: "315o INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      D: "225o",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "An aircraft is flying at a 120 kt true airspeed (VV), in order to achieve a rate 1 turn, the pilot will have to bank the aircraft at an angle of",
    choices: {
      A: "30o",
      B: "12o",
      C: "36o",
      D: "18o",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "On the ground, during a right turn, the turn indicator indicates",
    choices: {
      A: "needle to the right, ball to left",
      B: "needle to the right, ball to right",
      C: "needle in the middle, ball to right",
      D: "needle in the middle, ball to left",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "An airborne instrument, equipped with a gyro with 2 degrees of freedom and a horizontal spin axis is:(Note: the degree(s) of freedom of a gyro does not take into account its rotor spin axis)",
    choices: {
      A: "an artificial horizon",
      B: "a directional gyro",
      C: "a turn indicator",
      D: "a fluxgate compass",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "A laser gyro consists of",
    choices: {
      A: "a gyro with 2 degrees of freedom",
      B: "2 electrodes (anodes + cathodes)",
      C: "a laser generating two light waves",
      D: "two moving cavities provided with mirrors",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "The flux valve in a RIMC",
    choices: {
      A: "is supplied with AC current",
      B: "is fed with DC current",
      C: "is made of hard-iron magnetic steel",
      D: "has its own self exciter unit",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "When an aircraft has turned 270 degrees with a constant altitude and bank, the pilot observes the following on a classic artificial horizon",
    choices: {
      A: "too much nose up and bank to low",
      B: "too much nose up and bank correct",
      C: "turn too much nose up and bank to high",
      D: "altitude and bank are correct",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "If the needle and the ball of a Turn & Slip indicator both show right, what does it indicate",
    choices: {
      A: "turn to left & too much bank",
      B: "too much nose up and bank correct",
      C: "too much nose up and bank to high",
      D: "turn to right and too little bank",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The gyro-magnetic compass torque motor",
    choices: {
      A: "causes the directional gyro unit to precess",
      B: "causes the heading indicator to precess",
      C: "feeds the error detector system",
      D: "is fed by the flux valve",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The input signal of the amplifier of the gyro-magnetic compass resetting device originates from the",
    choices: {
      A: "directional gyro erection device INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      B: "flux valve",
      C: "directional gyro unit",
      D: "error detector",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "A DGI has",
    choices: {
      A: "one degree of freedom & a horizontal spin axis",
      B: "two degrees of freedom & a vertical spin axis",
      C: "two degrees of freedom & a horizontal spin axis",
      D: "one degree of freedom & a vertical spin axis",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "The torque motor of a gyro stabilised magnetic compass",
    choices: {
      A: "preceses the directional gyro",
      B: "takes its input from the flux valve",
      C: "moves the heading pointer",
      D: "moves the Selsyn stator",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The directional gyro axis no longer spins about the local vertical when it is located",
    choices: {
      A: "on the North pole",
      B: "in the latitude 30o",
      C: "in the latitude 45o",
      D: "on the equator",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In a right turn while taxiing, the correct indications on a Turn & Slip Indicator are",
    choices: {
      A: "Needle left, ball right",
      B: "Needle left, ball left",
      C: "Needle right, ball right INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      D: "Needle right, ball left",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "During an acceleration phase at constant altitude, the resetting principle of the artificial horizon results in the horizon bar indicating a",
    choices: {
      A: "constant attitude",
      B: "nose-down attitude",
      C: "nose-up attitude",
      D: "nose-down followed by a nose-up attitude",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "On the ground, during a left turn, the turn indicator indicates",
    choices: {
      A: "needle in the middle, ball to the left",
      B: "needle to the left, ball to the left",
      C: "needle in the middle, ball to the right",
      D: "needle to the left, ball to the right",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "The rigidity of a gyro is improved by",
    choices: {
      A: "increasing RPM and concentrating the mass on the periphery of the rotor",
      B: "increasing RPM and concentrating the mass at the hub of the rotor",
      C: "decreasing RPM and concentrating the mass on the periphery of the rotor",
      D: "decreasing RPM and concentrating the mass at the hub of the rotor",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "The maximum drift error sensed by an uncompensated DGI will be",
    choices: {
      A: "15o per hour",
      B: "30o per hour",
      C: "45o per hour",
      D: "60o per hour",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "A Stand-by-horizon or emergency attitude indicator",
    choices: {
      A: "Is automatically connected to the primary vertical gyro if the alternator fails",
      B: "Contains its own separate gyro",
      C: "Is fully independent of external energy resources in an emergency situation",
      D: "Only works of there is a complete electrical failure",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "A gyro-magnetic compass or heading reference unit is an assembly which always consists of: The combination of correct statements is: 1. a directional gyro 2. a vertical axis gyro 3. an earth's magnetic field detector 4. an azimuth control 5. a synchronising control",
    choices: {
      A: "2, 5",
      B: "2, 3, 5",
      C: "1, 4",
      D: "1, 3, 5",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "When, in flight, the needle and ball of a needle-and-ball indicator are on the left, the aircraft is",
    choices: {
      A: "turning left with not enough bank",
      B: "turning left with too much bank",
      C: "turning right with too much bank",
      D: "turning right with not enough bank",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The rate-of-turn is the",
    choices: {
      A: "yaw rate in a turn",
      B: "change-of-heading rate of the aircraft",
      C: "aircraft speed in a turn INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      D: "pitch rate in a turn",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "A standby artificial horizon must have the following properties: 1. a remote gyro 2. its own power supply 3. only to be used in emergency 4. its own gyro 5. one for each certified pilot",
    choices: {
      A: "all the above",
      B: "1, 3, 5",
      C: "2, 3, 4",
      D: "2, 4",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "On a turn and slip indicator, needle to the left and ball to the right indicates",
    choices: {
      A: "turn to the right, not enough bank",
      B: "turn to the left, too much bank",
      C: "turn to the left, not enough bank",
      D: "turn to the right, too much bank",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The heading read on the dial of a directional gyro is subject to errors, one of which is due to the movement of the aircraft. This error¿.",
    choices: {
      A: "is at its greatest value when the aircraft follows a meridional track",
      B: "is, in spite of this, insignificant and may be neglected",
      C: "is dependent on the ground speed of the aircraft, its true track and the average latitude of the flight",
      D: "shows itself by an apparent rotation of the horizontal axis of the gyroscope which seems to turnat 15o per hour to the right in the northern hemisphere",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The indications on a directional gyroscope or gyrocompass are subject to errors, due to: Choose the combination with true statements only: 1. rotation of Earth 2. aeroplane motion on Earth 3. lateral and transversal aeroplane bank angles 4. north change 5. mechanical defects",
    choices: {
      A: "1, 2, 3, 5",
      B: "3, 4, 5",
      C: "1, 2, 4, 5",
      D: "2, 3, 5",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In a DGI what error is caused by the gyro movement relative to the earth?",
    choices: {
      A: "earth rate",
      B: "transport wander",
      C: "real wander",
      D: "latitude error",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The gimbal error of the directional gyro is due to the effect of",
    choices: {
      A: "the aircraft's track over the earth",
      B: "an apparent weight and an apparent vertical",
      C: "too slow precession on the horizontal gimbal ring",
      D: "a bank or pitch attitude of the aircraft",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In a turn at a constant angle of bank, the turn indicator reading is",
    choices: {
      A: "independent to the aircraft true airspeed",
      B: "proportional to the aircraft true airspeed",
      C: "inversely proportional to the aircraft true airspeed INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      D: "proportional to the aircraft weight",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The characteristics of the directional gyro (DG) used in a gyro stabilised compass system are",
    choices: {
      A: "two degrees of freedom, whose horizontal axis corresponding to the reference direction is maintained in the horizontal plane by an automatic erecting system",
      B: "two degrees of freedom, whose axis aligned with the vertical to the location is maintained inthis direction by an erecting system",
      C: "one degree of freedom, whose horizontal axis is maintained in the horizontal plane by anautomatic erecting system",
      D: "one degree of freedom, whose vertical axis, aligned with the real vertical to the location ismaintained in this direction by an automatic erecting system",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "In a left turn while taxiing, the correct indications are",
    choices: {
      A: "Needle left, ball right",
      B: "Needle left, ball left",
      C: "needle right, ball right",
      D: "Needle right, ball left",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "Compared with a conventional gyro, a laser gyro",
    choices: {
      A: "has a longer life cycle",
      B: "consumes a lot of power",
      C: "is influenced by temperature",
      D: "has a fairly long starting cycle",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The heading reference unit of a three-axis data generator is equipped with a gyro with",
    choices: {
      A: "2 degrees of freedom and vertical spin axis",
      B: "2 degrees of freedom and horizontal spin axis INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      C: "1 degree of freedom and horizontal spin axis",
      D: "1 degree of freedom and vertical spin axis",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "A turn indicator is built around a gyroscope with:(Note: the degree(s) of freedom of a gyro does not take into account its rotor spin axis)",
    choices: {
      A: "1 degree of freedom",
      B: "0 degree of freedom",
      C: "2 degrees of freedom",
      D: "3 degrees of freedom",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "For an aircraft flying a true track of 360o between the 005oS and 005oN parallels, the precession error of the directional gyro due to apparent drift is equal to",
    choices: {
      A: "0o/hour",
      B: "+5o/hour",
      C: "-5o/hour",
      D: "depends only on the aircraft's ground speed",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "The pendulum type detector system of the directional gyro feeds",
    choices: {
      A: "a torque motor on the sensitive axis",
      B: "a nozzle integral with the outer gimbal ring",
      C: "a levelling erection torque motor",
      D: "2 torque motors arranged horizontally",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "In a Gyro magnetic compass the flux gate transmits information to the",
    choices: {
      A: "heading indicator",
      B: "amplifier",
      C: "error detector",
      D: "erecting system INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The properties of a Turn Indicator are: 1. One degree of freedom 2. Two degrees of freedom 3. Two springs connected to the aircraft frame 4. Spin axis in the longitudinal plane 5. Spin axis parallel to the yaw axis 6. Spin axis in the lateral plane",
    choices: {
      A: "1, 6",
      B: "2, 5",
      C: "1, 4",
      D: "2, 6",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      'A flux valve senses the changes in orientation of the horizontal component of the earth\'s magnetic field. Which of the following combinations contains all of the correct statements? 1. the flux valve is made of a pair of soft iron bars 2. the primary coils are fed A.C voltage (usually 487.5 Hz) 3. the information can be used by a "flux gate" compass or a directional gyro 4. the flux gate valve casing is dependent on the aircraft three inertial axis 5. the accuracy on the value of the magnetic field indication is less than 0.5%',
    choices: {
      A: "1, 4 5",
      B: "1, 3, 4, 5",
      C: "3, 5",
      D: "2, 3, 5",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "Among the flight control instruments, the artificial horizon plays an essential part. It uses a gyroscope with:(Note: in this question, the degrees of freedom of a gyro are determined by the number of gimbal rings it comprises)",
    choices: {
      A: "one degree of freedom, whose vertical axis oriented in the direction of the real vertical to thelocation is maintained in this direction by an automatic erecting system",
      B: "two degrees of freedom whose horizontal axis corresponding to a reference direction ismaintained in a horizontal plane by an automatic erecting system INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      C: "one degree of freedom, whose horizontal axis is maintained in a horizontal plane by an automaticerecting system",
      D: "two degrees of freedom, whose axis is oriented and continuously maintained to local vertical byan automatic erecting system",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "A gravity erector system corrects errors on a",
    choices: {
      A: "DGI",
      B: "artificial horizon",
      C: "turn indicator",
      D: "RIMC",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "When an aircraft has turned 360 degrees with a constant attitude and bank, the pilot observes the following on a classic artificial horizon",
    choices: {
      A: "too much nose-up and bank too high",
      B: "too much nose-up and bank too low",
      C: "too much nose-up and bank correct",
      D: "attitude and bank correct",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "An airborne instrument, equipped with a gyro with 1 degree of freedom and a horizontal spin axis is a:Note: the degree(s) of freedom of a gyro does not take into account its rotor spin axis",
    choices: {
      A: "gyromagnetic compass",
      B: "turn indicator",
      C: "fluxgate compass",
      D: "directional gyro",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "A 2 axis gyro measuring vertical changes will have",
    choices: {
      A: "one degree of freedom vertical axis",
      B: "two degrees of freedom vertical axis INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      C: "one degree of freedom horizontal axis",
      D: "two degrees of freedom horizontal axis",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "A directional gyro is: The combination which regroups all of the correct statements is: 1. a gyroscope free around two axis 2. a gyroscope free around one axis 3. capable of self-orientation around an earth-tied direction 4. incapable of self-orientation around an earth-tied direction",
    choices: {
      A: "1 - 4",
      B: "2 - 4",
      C: "2 - 3",
      D: "1 - 3",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "When, in flight, the needle and ball of a needle-and-ball indicator are on the right, the aircraft is",
    choices: {
      A: "turning left with too much bank",
      B: "turning right with not enough bank",
      C: "turning right with too much bank",
      D: "turning left with not enough bank",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The indication of the directional gyro as an on-board instrument are valid only for a short period of time. The causes of this inaccuracy are: The combination of correct statements is: 1. The earth's rotation 2. The longitudinal acceleration 3. The aircraft's motion over the surface of the earth 4. The mechanical defects of the gyro 5. The gyro's weight 6. The gimbal mount of the gyro rings",
    choices: {
      A: "2, 5, 6",
      B: "1, 3, 4",
      C: "1, 2, 3, 4, 5, 6",
      D: "1, 3, 4, 6",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In a left turn, the ball of the turn co-ordinator is out to the right what corrective action is required?",
    choices: {
      A: "more right rudder",
      B: "more right bank",
      C: "more left bank",
      D: "more left rudder",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "When an aircraft has turned 90 degrees with a constant attitude and bank, the pilot observes the following on a classic artificial horizon",
    choices: {
      A: "too much nose-up and bank correct",
      B: "attitude and bank correct",
      C: "too much nose-up and bank too low",
      D: "too much nose-up and bank too high",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Where is the earth rate wander and the transport wander of a gyro equal to zero?",
    choices: {
      A: "North Pole",
      B: "Equator",
      C: "45oN INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      D: "45oS",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "What is the maximum drift of a gyro, due to earth rate?",
    choices: {
      A: "90o per hour",
      B: "180o per hour",
      C: "15o per hour",
      D: "5o per hour",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "In a turn at constant angle of bank, the rate of turn is",
    choices: {
      A: "independent of weight and proportional to TAS",
      B: "dependent on weight and inversely proportional to TAS",
      C: "independent of weight and inversely proportional to TAS",
      D: "dependant on weight and proportional to TAS",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The turn rate indicator uses a gyroscope: The combination regrouping all the correct statements is: 1. with one degree of freedom 2. with two degrees of freedom 3. the frame of which is supported by two return springs 4. the spinning wheel axis of which is parallel to the pitch axis 5. the spinning wheel axis of which is parallel to the yawing axis 6. the spinning wheel axis of which is horizontal",
    choices: {
      A: "1 and 6",
      B: "1 and 3",
      C: "2 and 3",
      D: "2, 3 and 6",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "A slaved directional gyro derives its directional signal from",
    choices: {
      A: "a direct reading magnetic compass",
      B: "the flux valve",
      C: "the flight director",
      D: "the air-data-computer",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "At a low bank angle, the measurement of rate-of-turn actually consists in measuring the",
    choices: {
      A: "pitch rate of the aircraft",
      B: "roll rate of the aircraft",
      C: "angular velocity of the aircraft",
      D: "yaw rate of the aircraft",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In a Turn Indicator, the measurement of rate of turn consists for",
    choices: {
      A: "low bank angle, in measuring the roll rate",
      B: "low bank angle, in measuring the yaw rate",
      C: "high bank angle, in measuring the yaw rate",
      D: "high bank angle, in measuring the roll rate",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The basic properties of a gyroscope are: The combination of correct statements is: 1. The gyros weight 2. The rigidity in space 3. The inertia 4. The high RPM 5. The precession",
    choices: {
      A: "3, 4",
      B: "2, 5",
      C: "2, 3, 5",
      D: "1, 3, 5",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Under normal operating conditions, when an aircraft is in a banked turn, the rate-of-turn indicator is a valuable gyroscopic flight control instrument. When it is associated with an attitude indicator it indicates: The combination of correct statements is: 1. the angular velocity of the aircraft about the yaw axis 2. the bank of the aircraft 3. the direction of the aircraft turn 4. the angular velocity of the aircraft about the real vertical",
    choices: {
      A: "3, 4",
      B: "2, 4",
      C: "1, 3",
      D: "1, 2",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The directional gyro axis spins about the local vertical by 15o/hour",
    choices: {
      A: "in the latitude 30o",
      B: "in the latitude 45o",
      C: "on the equator",
      D: "on the North pole",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "The maximum directional gyro error due to the earth rotation is",
    choices: {
      A: "180o/hour",
      B: "5o/hour",
      C: "15o/hour",
      D: "90o/hour",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-08)The diagram representing a left turn with insufficient rudder is",
    choices: {
      A: "2",
      B: "3 INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      C: "4",
      D: "1",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "A directional gyro consists of a:(Note the degree(s) of freedom of a gyro does not take into account its rotor spin axis)",
    choices: {
      A: "1 degree-of-freedom horizontal axis gyro",
      B: "2 degrees-of-freedom vertical axis gyro",
      C: "2 degrees-of-freedom horizontal axis gyro",
      D: "1 degree-of-freedom vertical axis gyro",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "A directional gyro is corrected for an apparent drift due to the earth¿s rotation at latitude 30oS. During a flight at latitude 60oN, a drift rate of 15.5o/h to the right is observed. The apparent wander due to change of aircraft position is",
    choices: {
      A: "2.5o/h to the left",
      B: "2.5o/h to the right",
      C: "5o/h to the right",
      D: "5o/h to the left",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "A free gyro has its rotor axis horizontal and is aligned with the geographic meridian. If this stationary free gyro is situated at latitude 60oN, the apparent drift rate according to the earthbound observer is",
    choices: {
      A: "13o/h to the left",
      B: "13o/h to the right",
      C: "7.5o/h to the right",
      D: "7.5o/h to the left",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "A rate gyro is used in a: The combination regrouping all the correct statements is: 1. directional gyro indicator 2. turn co-ordinator 3.artificial horizon",
    choices: {
      A: "2 INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      B: "1, 2, 3",
      C: "1",
      D: "1, 2",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "After the initial 90 degrees of a turn at constant pitch and bank, a classic artificial horizon indicates",
    choices: {
      A: "too much nose-up and too much bank",
      B: "pitch and bank correct",
      C: "too much nose-up and bank correct",
      D: "too much nose-up and too little bank",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "Compared with a conventional gyro, a laser gyro",
    choices: {
      A: "is much more cumbersome",
      B: "is influenced by temperature",
      C: "consumes much more power",
      D: "consumes a lot of power",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "Due to the rotation of the earth, the apparent drift of a horizontal free gyroscope at a latitude of 30oN is",
    choices: {
      A: "15o per hour to the left",
      B: "7.5o per hour to the right",
      C: "2o per hour to the right",
      D: "11o per hour to the left",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Due to the rotation of the earth, the apparent drift of a horizontal free gyroscope at a latitude of 30oS is",
    choices: {
      A: "7.5o per hour to the left",
      B: "15o per hour to the right",
      C: "2o per hour to the left",
      D: "11o per hour to the right",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "Due to the rotation of the earth, the apparent drift of a horizontal free gyroscope at a latitude of 45oN is",
    choices: {
      A: "2o per hour to the right",
      B: "15o per hour to the left",
      C: "11o per hour to the right",
      D: "7.5o per hour to the left",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "During a deceleration phase at constant attitude, the control system of an air driven artificial horizon results in the horizon bar indicating a",
    choices: {
      A: "nose up attitude",
      B: "nose down attitude",
      C: "constant attitude",
      D: "nose up followed by a nose down attitude",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "For an aircraft flying a true track of 360o between the 5oS and 5oN parallels, the precession error of the directional gyro due to apparent drift is equal to",
    choices: {
      A: "+5o/hour",
      B: "approximately 0o/hour",
      C: "-5o/hour",
      D: "15o/hour",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "In a directional gyro, gimballing errors are due to",
    choices: {
      A: "the aircraft's movement over the earth",
      B: "an apparent weight and an apparent vertical INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      C: "the vertical component of the earth's magnetic field",
      D: "a banked attitude",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In a turn at a constant angle of bank, the turn indicator reading is",
    choices: {
      A: "inversely proportional to the aircraft true airspeed",
      B: "proportional to the aircraft true airspeed",
      C: "independent to the aircraft true airspeed",
      D: "proportional to the aircraft weight",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "One of the errors inherent in a ring laser gyroscope occurs at low input rotation rates tending towards zero when a phenomenon known as lock-in is experienced. What is the name of the technique, effected by means of a piezo-electric motor, that is used",
    choices: {
      A: "dither",
      B: "cavity rotation",
      C: "zero drop",
      D: "beam lock",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "The apparent wander of a directional gyro is 15o/h",
    choices: {
      A: "At the north pole",
      B: "At the latitude 30o",
      C: "At the latitude 45o",
      D: "At the equator",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The artificial horizon uses a gyroscope with:(Note: the degree(s) of freedom of a gyro does not take into account its rotor spin axis)",
    choices: {
      A: "two degrees of freedom, and its rotor spin axis is continuously maintained to local vertical by an automatic erecting system",
      B: "two degrees of freedom, and its rotor spin axis is continuously maintained in the horizontalplane by an automatic erecting system INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      C: "one degree of freedom, and its rotor spin axis is continuously maintained in the horizontalplane by an automatic erecting system",
      D: "one degree of freedom, and its rotor spin axis is continuously maintained to local vertical byan automatic erecting system",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-41)The attached diagram shows three gyro assemblies: A, B and C. Among these gyros:one is a roll gyro (noted 1)one is a pitch gyro (noted 2)one is a yaw gyro (noted 3)The correct matching of gyros and assemblies is",
    choices: {
      A: "1C, 2B, 3A",
      B: "1B, 2C, 3A",
      C: "1B, 2A, 3C",
      D: "1A, 2B, 3C",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The gyroscope of a turn indicator has:(Note: the degree(s) of freedom of a gyro does not take into account its rotor spin axis)",
    choices: {
      A: "2 degrees of freedom",
      B: "0 degree of freedom",
      C: "1 degree of freedom",
      D: "3 degrees of freedom",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The gyroscope used in an attitude indicator has a spin axis which is",
    choices: {
      A: "horizontal, perpendicular to the yaw axis",
      B: "horizontal, perpendicular to the longitudinal axis",
      C: "horizontal, parallel to the longitudinal axis",
      D: "vertical",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The indication of the directional gyro is valid only for a limited period of time. The causes of this inaccuracy are: 1.rotation of the earth 2.longitudinal accelerations 3.aircraft's moving over the surface of the earth 4.vertical component The indication of the directional gyro is valid only for a limited period of time. The causes of this inaccuracy are: 1.rotation of the earth 2.longitudinal accelerations 3.aircraft's moving over the surface of the earth 4.vertical component The combination regrouping all the correct statements is",
    choices: {
      A: "1, 3, 4",
      B: "1, 3",
      C: "1, 2, 3",
      D: "1, 2, 4",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The indications on a directional gyroscope are subject to errors. The most significant are: 4.north change 5.mechanical defect The combination regrouping all the correct statements is: 1. apparent wander due to earth rotation 2. apparent wander due to change of aircraft position 3.gimballing errors",
    choices: {
      A: "1, 2, 3, 5",
      B: "3, 4, 5",
      C: "1, 2, 4, 5",
      D: "2, 3, 5",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "The inertia of a gyroscope is greater when",
    choices: {
      A: "its rotation speed is lower and the mass of the spinning wheel is located further from the axisof rotation",
      B: "its rotation speed is higher and the mass of the spinning wheel is closer to the axis ofrotation",
      C: "its rotation speed is higher and the mass of the spinning wheel is located further from the axis of rotation",
      D: "its rotation speed is lower and the mass of the spinning wheel is closer to the axis of rotation",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "The principle of a laser gyro is based on",
    choices: {
      A: "a gyroscope associated with a laser compensating for apparent wander due to the rotation of theearth",
      B: "frequency difference between two laser beams rotating in opposite direction",
      C: "a gyroscope associated with a laser compensating for gimballing errors",
      D: "two rotating cavities provided with mirrors",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The properties of a gyroscope are: 4.Schuler oscillations The combination regrouping all the correct statements is: 1. rigidity in space 2. rigidity on earth 3.precession",
    choices: {
      A: "1, 4",
      B: "2, 3",
      C: "1, 3",
      D: "2, 4",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "The rate of turn given by the rate of turn indicator is valid",
    choices: {
      A: "for all airspeeds",
      B: "for the airspeed range defined during the calibration of the instrument",
      C: "with flaps retracted only",
      D: "for the cruising speed",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The rate of turn indicator uses a gyroscope: The combination regrouping all the correct statements is: 1. the spinning wheel axis of which is parallel to the yawing axis 2. the spinning wheel axis of which is parallel to the pitch axis 3. the spinning wheel axis of which is parallel to the roll axis 4. with one degree of freedom 5. with two degrees of freedom",
    choices: {
      A: "2, 4",
      B: "3, 4",
      C: "1, 5",
      D: "3, 5",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "The spin axis of the turn indicator gyro is aligned along the",
    choices: {
      A: "longitudinal axis of the aircraft",
      B: "lateral axis of the aircraft",
      C: "vertical axis of the aircraft",
      D: "longitudinal axis of flight",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Without any external action, the axis of a free gyroscope is fixed with reference to",
    choices: {
      A: "the apparent vertical",
      B: "the earth",
      C: "the aircraft",
      D: "space",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(For this question use annex 022-37)The diagram representing a left turn with insufficient rudder is",
    choices: {
      A: "1",
      B: "2",
      C: "3",
      D: "4 INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(For this question use annex 022-37)The diagram representing a left turn with excessive rudder is",
    choices: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The properties of a gyro are: 1. mass 2. rigidity 3. inertia 4. precession 5. rotational speed",
    choices: {
      A: "1, 2 & 3",
      B: "2 & 4",
      C: "2 & 3",
      D: "1 & 3",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The errors of a DGI are: 1. earth rate 2. transport wander 3. banking when pitched up 4. annual movement of poles 5. mechanical problems",
    choices: {
      A: "2, 3 & 5",
      B: "3, 4 & 5",
      C: "1, 2, 3 & 5",
      D: "all 5",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The Turn Indicator is a useful gyroscopic instrument. When used in association with an attitude indicator will show: 1. angular velocity about the yaw axis 2. direction of turn 3. angular velocity about true vertical axis 4. speed of turn",
    choices: {
      A: "1 & 3",
      B: "2 & 3",
      C: "3 & 4",
      D: "1 & 2",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "When turning through 90o at constant attitude and bank, a classic Artificial Horizon indicates",
    choices: {
      A: "nose up and correct angle of bank",
      B: "attitude and bank angle are correct",
      C: "nose up and bank angle too low",
      D: "nose up and bank angle too high",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The factors which will affect a Turn Indicator are: 1. angle of bank 2. aircraft speed 3. aircraft weight",
    choices: {
      A: "all 3",
      B: "1 & 2",
      C: "1 & 3",
      D: "2 & 3",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Aircraft is travelling at 120 kts, what angle of bank would be required for a rate one turn?",
    choices: {
      A: "30o",
      B: "12o",
      C: "18o INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      D: "35o",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Using a classic Artificial Horizon, the A/C performs a right turn through 270 degrees at a constant angle of bank and rate of turn. The indication is",
    choices: {
      A: "Nose up, too much bank",
      B: "Nose up, not enough bank",
      C: "Nose up, wings level",
      D: "Bank and pitch correct",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "An artificial horizon has",
    choices: {
      A: "1 degree of freedom and a horizontal axis",
      B: "2 degrees of freedom and a horizontal axis",
      C: "1 degree of freedom and a vertical axis",
      D: "2 degrees of freedom and a vertical axis",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "What is the purpose of the latitude nut in a DGI?",
    choices: {
      A: "to correct for latitude error",
      B: "to correct for transport wander",
      C: "to correct for earth rate",
      D: "to correct for coriolis error",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "At a low bank angle, the measurement of rate-of-turn actually consists in measuring the",
    choices: {
      A: "roll rate",
      B: "rate of yaw",
      C: "angular velocity about the vertical axis",
      D: "rate of pitch",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An aircraft is flying a true track of 369o from 5o south to 5o north. What is the change in apparent wander rate?",
    choices: {
      A: "0o per hour",
      B: "+5o per hour",
      C: "-5o per hour",
      D: "Depends upon groundspeed",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In a gyro magnetic compass, where does the torque motor get its information from?",
    choices: {
      A: "the flux gate",
      B: "error detector",
      C: "the rotor gimbal",
      D: "amplifier",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "What are the advantages of a laser gyro compared to a conventional gyro?",
    choices: {
      A: "has a longer cycle life",
      B: "takes longer to set up/spin up",
      C: "uses more power",
      D: "takes longer to align",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "Which of the following gyro instruments has one degree of freedom?",
    choices: {
      A: "artificial horizon",
      B: "turn indicator",
      C: "directional gyro",
      D: "slaved gyro compass",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The error in a Directional Gyro due to the earth¿s rotation, at a mean latitude of 45oN will cause the spin axis to move by",
    choices: {
      A: "10.6o clockwise INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      B: "10.6o anti-clockwise",
      C: "7.6o clockwise",
      D: "7.6o anti-clockwise",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "Where on the earth's surface is the earth rate drift of a DGI equal to 15.04o per hour?",
    choices: {
      A: "15o",
      B: "30o",
      C: "0o",
      D: "90o",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The pendulous type correction detector fitted to the DGI provides",
    choices: {
      A: "torque on the sensitive axis",
      B: "two torque motors on the horizontal axis",
      C: "pendulous internal nozzle on the outer gimbal",
      D: "one torque motor",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "A direction gyro is corrected for accurate directional information using",
    choices: {
      A: "air data computer",
      B: "direct reading magnetic compass",
      C: "flight director",
      D: "flux valve",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An aircraft is flying a true track of 360o from 5o south to 5o north. What is the average apparent wander rate?",
    choices: {
      A: "0o per hour",
      B: "+5o per hour",
      C: "-5o per hour INSTRUMENTATION FLIGHT INSTRUMENTS - Gyroscopic Instruments",
      D: "depends upon groundspeed",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "A directional gyro is valid only for a short period of time. The causes of this inaccuracy are: The combination regrouping all the correct statements is: 1. earth rotation 2. longitudinal accelerations 3. A/C motion over the earth 4. mechanical defects 5. gyro mass",
    choices: {
      A: "1, 3 & 5",
      B: "1, 3 & 4",
      C: "1, 2 & 3",
      D: "all of the above",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "How can you increase the rigidity of a gyroscope?",
    choices: {
      A: "Concentrate the mass near the spin axis at a high RPM",
      B: "Concentrate the mass at the periphery at a high RPM",
      C: "Concentrate the mass near the spin axis at a low RPM",
      D: "Concentrate the mass at the periphery at a low RPM",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "What is the period of a Schuler Loop oscillation?",
    choices: {
      A: "48 seconds",
      B: "48 mins",
      C: "84 mins",
      D: "84 seconds",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "Aircraft turns through 360o at constant bank and pitch angle. The Artificial Horizon shows",
    choices: {
      A: "The correct indication",
      B: "Pitch up too little bank",
      C: "Pitch up too much bank",
      D: "Pitch up correct bank",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "On the ground in a left turn a turn-indicator will show",
    choices: {
      A: "Needle straight/Ball left",
      B: "Needle straight/Ball right",
      C: "Needle left/Ball left",
      D: "Needle left/Ball right",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-41)The diagram shows three gyro assemblies: A, B and C. Among these gyros:one is a roll gyro (noted 1)one is a pitch gyro (noted 2)one is a yaw gyro (noted 3)The correct matching of gyros and assemblies is",
    choices: {
      A: "1C, 2B, 3A",
      B: "1B, 2A, 3C",
      C: "1A, 2B, 3C",
      D: "1B, 2C, 3A",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "During deceleration following a landing in a southerly direction, a magnetic compass made for the northern hemisphere indicates",
    choices: {
      A: "an apparent turn to the west",
      B: "no apparent turn only on northern latitudes",
      C: "no apparent turn",
      D: "an apparent turn to the east",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "A pilot wishes to turn left on to a southerly heading with 20o bank at a latitude of 20o North. Using a direct reading compass, in order to achieve this he must stop the turn on an approximate heading of",
    choices: {
      A: "190o",
      B: "200o",
      C: "170o",
      D: "160o",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In the northern hemisphere during deceleration following a landing in an Easterly direction, the magnetic compass will indicate",
    choices: {
      A: "an apparent turn to the South",
      B: "an apparent turn to the North",
      C: "a constant heading",
      D: "a heading fluctuating about 090o",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In the Northern hemisphere, during deceleration following a landing in a Westerly direction, the magnetic compass will indicate",
    choices: {
      A: "a heading fluctuating about 270o",
      B: "an apparent turn to the North",
      C: "no apparent turn",
      D: "an apparent turn to the South",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "During deceleration following a landing in a Southerly direction, the magnetic compass will indicate",
    choices: {
      A: "no apparent turn",
      B: "an apparent turn to the East",
      C: "an apparent turn to the west",
      D: "a heading fluctuating about 180o",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "Among the errors of a magnetic compass, are errors",
    choices: {
      A: "of parallax, due to oscillations of the compass rose",
      B: "due to cross-wind gusts particularly on westerly or easterly headings INSTRUMENTATION FLIGHT INSTRUMENTS - Magnetic Compass",
      C: "due to Schuler type oscillations",
      D: "in North seeking, due to bank angle and magnetic heading",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "A pilot wishes to turn right on to a northerly heading with 20o bank at a latitude of 40o North. Using a direct reading compass, in order to achieve this he must stop the turn on to an approximate heading of",
    choices: {
      A: "030o",
      B: "350o",
      C: "330o",
      D: "010o",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "If an aircraft, fitted with a DRMC, takes off on a westerly heading, in the northern hemisphere, the DRMC will indicate",
    choices: {
      A: "a turn to the north",
      B: "oscillates about west",
      C: "no turn",
      D: "a turn to south",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      'When turning on to a northerly heading the rose of a magnetic compass tends to "undershoot" when turning onto a southerly heading it tends to "overshoot". The correct statements are: 1. these compass indications are less reliable in the northern hemisphere than in the southern hemisphere 2. these compass oscillations following a lateral gust are not identical if the aircraft is heading north or south 3. this behaviour is due to the mechanical construction of the compass 4. this behaviour is a symptom of a badly swung compass',
    choices: {
      A: "2, 3 and 4",
      B: "1, 2 and 4",
      C: "2 and 3",
      D: "1 and 3",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "During deceleration following a landing in a northerly direction, a magnetic compass made for the southern hemisphere indicates",
    choices: {
      A: "no apparent turn",
      B: "an apparent turn to the East",
      C: "an apparent turn to the West",
      D: "a heading fluctuating about 360o",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In a steep turn, the northerly turning error on a magnetic compass on the northern hemisphere is",
    choices: {
      A: "none on a 270o heading in a left turn",
      B: "equal to 180o on a 090o heading in a right turn",
      C: "none on a 090o heading in a right turn",
      D: "equal to 180o on a 270o heading in a right turn",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "A compass swing is used to",
    choices: {
      A: "align compass north with magnetic north",
      B: "align compass north with true north",
      C: "align magnetic north with true north",
      D: "get true north and lubber line aligned",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "An aircraft is taking off on a runway heading 045o, in still air, with a compass having 0o deviation. The runway is on an agonic line. What will the compass read if you are in the northern hemisphere?",
    choices: {
      A: "compass moves to less than 045o",
      B: "compass moves to more than 045o",
      C: "compass stays on 045o if wings are kept level",
      D: "compass remains on 045o",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In the southern hemisphere during deceleration following a landing in an Easterly direction, the magnetic compass will indicate",
    choices: {
      A: "a heading fluctuating about 090o INSTRUMENTATION FLIGHT INSTRUMENTS - Magnetic Compass",
      B: "an apparent turn to the South",
      C: "no apparent turn",
      D: "an apparent turn to the North",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "A pilot wishes to turn left on to a northerly heading with a 10o bank at a latitude of 50o North. Using a direct reading compass, in order to achieve this he must stop the turn on an approximate heading of",
    choices: {
      A: "355o",
      B: "030o",
      C: "330o",
      D: "015o",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The magnetic heading can be derived from the true heading by means of a",
    choices: {
      A: "map showing the isoclinic lines",
      B: "map showing the isogonal lines",
      C: "deviation correction curve",
      D: "compass swinging curve",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The purpose of a compass swing is to attempt to coincide the indications of",
    choices: {
      A: "compass north and true north",
      B: "compass north and magnetic north",
      C: "true north and magnetic north",
      D: "compass swinging curve",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The purpose of compass swinging is to determine the deviation of a magnetic compass",
    choices: {
      A: "on a given heading",
      B: "on any heading",
      C: "at any latitude INSTRUMENTATION FLIGHT INSTRUMENTS - Magnetic Compass",
      D: "at a given latitude",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The quadrantal deviation of a magnetic compass is corrected by using",
    choices: {
      A: "magnetized needles",
      B: "hard iron pieces",
      C: "pairs of permanent magnets",
      D: "soft iron pieces",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The quadrantal deviation of the magnetic compass is due to the action of",
    choices: {
      A: "the hard iron ices and the soft iron pieces influenced by the hard iron pieces",
      B: "the soft iron pieces influenced by the geomagnetic field",
      C: "the hard iron pieces influenced by the geomagnetic field",
      D: "the hard iron pieces influenced by the mild iron pieces",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The compass heading can be derived from the magnetic heading by reference to a",
    choices: {
      A: "map showing the isogonic lines",
      B: "map showing the isoclinic lines",
      C: "deviation correction curve",
      D: "compass swinging curve",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "Magnetic compass swinging is carried out to reduce as much as possible",
    choices: {
      A: "variation",
      B: "deviation",
      C: "regulation",
      D: "acceleration",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An aircraft is fitted with a direct reading magnetic compass. Upon landing in a northerly direction the compass will indicate",
    choices: {
      A: "no change",
      B: "an oscillation to its North alignment",
      C: "a turn towards East",
      D: "a turn towards West",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "A pilot wishes to turn right on to a southerly heading with 20o bank at a latitude of 20o North. Using a direct reading compass, in order to achieve this he must stop the turn on an approximate heading of",
    choices: {
      A: "170o",
      B: "150o",
      C: "200o",
      D: "180o",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The fields affecting a magnetic compass originate from: The combination of correct statements is 1. magnetic masses 2. ferrous metal masses 3. non-ferrous metal masses 4. electrical currents",
    choices: {
      A: "1, 2, 3",
      B: "1, 2, 4",
      C: "1, 2, 3, 4",
      D: "1, 3, 4",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Which of the following will effect a direct reading compass? 1. ferrous metals 2. non-ferrous metals 3. electrical equipment",
    choices: {
      A: "1 only",
      B: "1, 3 INSTRUMENTATION FLIGHT INSTRUMENTS - Magnetic Compass",
      C: "1, 2",
      D: "all 3",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "In the Southern hemisphere, during deceleration following a landing in a Westerly direction, the magnetic compass will indicate",
    choices: {
      A: "no apparent turn",
      B: "a heading fluctuating about 270o",
      C: "an apparent turn to the North",
      D: "an apparent turn to the South",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "An aircraft takes off on a runway with an alignment of 45o. The isogonic line on the area chart indicates 0o. The compass deviation is 0o. On a take-off with zero wind the northerly turning error",
    choices: {
      A: "will be null",
      B: "is such that the compass will indicate a value noticeably below 045o",
      C: "is such that the compass will indicate a value noticeably above 045o",
      D: "will be null if the wings are kept level",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      'A flux valve detects the horizontal of the earth\'s magnetic field Which of the following combinations contains all of the correct statements? 1. the flux valve is made of a pair of soft iron bars 2. the information can be used by a "flux gate" compass or a directional gyro 3. the flux gate valve signal comes from the error detector 4. the accuracy on the value of the magnetic field indication is less than 0.5%',
    choices: {
      A: "2, 4",
      B: "1, 2, 4",
      C: "1, 4",
      D: "1, 2",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "A gyromagnetic compass is a system which always consists of: The combination regrouping all the correct statements is: 1. a horizontal axis gyro 2. a vertical axis gyro 3. an earth's magnetic field detector 4. an erection mechanism to maintain the gyro axis horizontal 5. a torque motor to maintain the gyro's rotor axis within its horizontal",
    choices: {
      A: "2, 3, 5",
      B: "1, 4",
      C: "1, 3, 4, 5",
      D: "2, 3",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "About a magnetic compass",
    choices: {
      A: "errors of parallax are due to the oscillation of the compass rose",
      B: "acceleration errors are due to the angle of dip",
      C: "acceleration errors are due to Schuler oscillations",
      D: "turning error is due to the vertical component of the earth¿s magnetic field",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "An aircraft takes-off on a runway with an alignment of 045o, the compass is made for the northern hemisphere. During rolling take-off, the compass indicates",
    choices: {
      A: "045o",
      B: "a value below 045o",
      C: "a value above 045o in the southern hemisphere",
      D: "a value above 045o in the northern hemisphere",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Concerning the direct reading magnetic compass, the turning error",
    choices: {
      A: "does not depend on the magnetic latitude",
      B: "decreases with the magnetic latitude",
      C: "increases with the magnetic latitude INSTRUMENTATION FLIGHT INSTRUMENTS - Magnetic Compass",
      D: "decreases with the magnetic longitude",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "Magnetic compass errors are",
    choices: {
      A: "parallax errors due to compass rose oscillations",
      B: "due to the lateral gusts which occur when the aircraft is heading eastward or westward",
      C: "due to Schuler oscillations",
      D: "due to north change, depending on the bank angle and magnetic heading",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The compass heading can be derived from the magnetic heading by reference to a",
    choices: {
      A: "magnetic variation correction card",
      B: "map showing the isoclinic lines",
      C: "compass deviation card",
      D: "map showing the isogonic lines",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The direct indicating compass is no more reliable when approaching: The combination regrouping all the correct statements is: 1. the magnetic poles 2. the magnetic equator with a east or west heading 3. the magnetic equator with a north or south heading",
    choices: {
      A: "1, 2",
      B: "1, 2, 3",
      C: "1",
      D: "1, 3",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "The turning errors of a direct reading magnetic compass are",
    choices: {
      A: "maximum at the magnetic equator INSTRUMENTATION FLIGHT INSTRUMENTS - Magnetic Compass",
      B: "maximum at the magnetic poles",
      C: "minimum at a latitude of 45o",
      D: "minimum at the magnetic poles",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The main cause of error in a DRMC is",
    choices: {
      A: "parallax in the rose",
      B: "turning",
      C: "magnetic deviation",
      D: "latitude",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "A factor giving an error on a direct indicating compass would be",
    choices: {
      A: "crosswinds particularly on east/west headings",
      B: "parallax due to oscillations of the compass rose",
      C: "acceleration on east/west headings",
      D: "turning through east/west headings",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "True heading can be converted into magnetic heading using a compass and",
    choices: {
      A: "a map with isogonal lines",
      B: "a map with isoclinal lines",
      C: "a deviation card",
      D: "a deviation curve",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "An aircraft fitted with a DRMC is landing in a southerly direction, in the Southern Hemisphere. What indications will be seen on the DRMC?",
    choices: {
      A: "turn to east",
      B: "no apparent turn",
      C: "turn to west INSTRUMENTATION FLIGHT INSTRUMENTS - Magnetic Compass",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An aircraft turns from south-west to south-east when situated at 45oN what heading should you roll out on if using a DRMC?",
    choices: {
      A: "130o",
      B: "115o",
      C: "140o",
      D: "155o",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "What is the value of the angle of magnetic dip at the south pole?",
    choices: {
      A: "0o",
      B: "45o",
      C: "90o",
      D: "60o",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "An aircraft is accelerating to take-off in northern hemisphere on a runway with a QDM of 045o. Which way does the DRMC move?",
    choices: {
      A: "less than 45o",
      B: "more than 45o",
      C: "correct if wings are level",
      D: "correct",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In a northern hemisphere, when turning right onto north, through 90o, what heading on your DIC should you roll out on?",
    choices: {
      A: "020o",
      B: "360o",
      C: "340o",
      D: "320o",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "In a Remote Indicating Compass, what component feeds the Amplifier?",
    choices: {
      A: "gyro precession signal",
      B: "flux valve",
      C: "annunciator",
      D: "error detector",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "An aircraft turns right, through 90o, onto North, at 48N, using a direct indicating compass. The aircraft is turning at rate 2. What heading should the aircraft roll out on?",
    choices: {
      A: "010o",
      B: "030o",
      C: "330o",
      D: "350o",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "You commence a rate 2 turn from south-east to south-west, in the Northern Hemisphere. On what heading do you stop the turn?",
    choices: {
      A: "215o",
      B: "255o",
      C: "225o",
      D: "205o",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An aircraft lands on a southerly direction in the northern hemisphere. The DI will",
    choices: {
      A: "Oscillate about 180 degrees",
      B: "Does not change",
      C: "Increases",
      D: "Decreases",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An aircraft turns from SW to SE in the northern hemisphere. Using a direct reading compass, when should the pilot stop the turn?",
    choices: {
      A: "140o INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "115o",
      C: "130o",
      D: "155o",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The aircraft radio equipment which emits on a frequency of 4400 MHz is the",
    choices: {
      A: "primary radar",
      B: "high altitude radio altimeter",
      C: "weather radar",
      D: "radio altimeter",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "The data supplied by a radio altimeter",
    choices: {
      A: "concerns only the decision height",
      B: "indicates the distance between the ground and the aircraft",
      C: "is used only by the radio altimeter indicator",
      D: "is used by the automatic pilot in the altitude hold mode",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "In low altitude radio altimeters, the height measurement (above the ground) is based upon",
    choices: {
      A: "a triangular amplitude modulation wave, for which modulation phase shift between transmitted andreceived waves after ground reflection is measured",
      B: "a pulse transmission, for which time between transmission and reception is measured on acircular scanning screen",
      C: "a wave transmission, for which the frequency shift by DOPPLER effect after ground reflection ismeasured",
      D: "a frequency modulation wave, for which the frequency variation between the transmitted wave and the received wave after ground reflection is measured",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "A radio altimeter can be defined as a",
    choices: {
      A: "self contained on board aid used to measure the true height of the aircraft",
      B: "ground radio aid used to measure the true altitude of the aircraft",
      C: "ground radio aid used to measure the true height of the aircraft",
      D: "self contained on board aid used to measure the true altitude of the aircraft",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "Modern low altitude radio altimeters emit waves in the following frequency band",
    choices: {
      A: "HF (High Frequency)",
      B: "VLF (Very Low Frequency)",
      C: "SHF (Super High Frequency)",
      D: "UHF (Ultra High Frequency)",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The operation of the radio altimeter of a modern aircraft is based on",
    choices: {
      A: "amplitude modulation of the carrier wave",
      B: "frequency modulation of the carrier wave",
      C: "pulse modulation of the carrier wave",
      D: "a combination of frequency modulation and pulse modulation",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "During the approach, a crew reads on the radio altimeter the value of 650 ft. This is an indication of the true",
    choices: {
      A: "height of the aircraft with regard to the ground at any time",
      B: "height of the lowest wheels with regard to the ground at any time",
      C: "height of the aircraft with regard to the runway",
      D: "altitude of the aircraft",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "A radio altimeter is",
    choices: {
      A: "ground based and measures true altitude",
      B: "ground based and measures true height INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "aircraft based and measures true altitude",
      D: "aircraft based and measures true height",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In low altitude radio altimeters, the reading is zero when main landing gear wheels are on the ground. For this, it is necessary to",
    choices: {
      A: "change the display scale in short final, in order to have a precise readout",
      B: "place the antennas on the bottom of the aeroplane",
      C: "account for signal processing time in the unit and apply a correction factor to the reading",
      D: "compensate residual altitude due to antennas height above the ground and coaxial cables length",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "For most radio altimeters, when a system error occurs during approach the¿",
    choices: {
      A: "DH lamp flashes red and the audio signal sounds",
      B: "Height indication is removed",
      C: "DH lamp flashes red",
      D: "Audio warning signal sounds",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The low-altitude radio altimeters used in precision approaches: The combination of the correct statements is: 1. operate in the 1540-1660 MHz range 2. are of the pulsed type 3. are of the frequency modulation type 4. have an operating range of 0 to 5000 ft 5. have a precision of +/- 2 feet between 0 and 500 ft",
    choices: {
      A: "1, 3, 4, 5",
      B: "3, 5",
      C: "1, 2, 4, 5",
      D: "1, 3, 5",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The operating frequency range of a low altitude radio altimeter is",
    choices: {
      A: "420 MHz to 440 MHz",
      B: "460 MHz to 480 MHz",
      C: "4200 MHz to 4400 MHz",
      D: "4.6 GHz to 4.8 GHz",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "A radio signal has a frequency of 3 GHz. Its wave length is",
    choices: {
      A: "100 cm",
      B: "1.0 cm",
      C: "10 cm",
      D: "1.0 m",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The operating frequency range of a low altitude radio altimeter is",
    choices: {
      A: "2700 MHz to 2900 MHz",
      B: "5 GHz",
      C: "4200 MHz to 4400 MHz",
      D: "5400 MHz or 9400 MHz",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "A radio altimeter uses",
    choices: {
      A: "four antennas: two for the transmission and two for the reception",
      B: "two antennas: one for the transmission and another for the reception",
      C: "two antennas: both of them for simultaneous transmission and reception",
      D: "a single antenna for simultaneous transmission and reception",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The Low Altitude Radio Altimeter uses the following wavelengths",
    choices: {
      A: "myriametric INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "centimetric",
      C: "decimetric",
      D: "metric",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The radio altimeter is required to indicate zero height AGL as the main wheels touch down on the runway. For this reason, it is necessary to",
    choices: {
      A: "have a specific radio altimeter dedicated to automatic landing",
      B: "adjust the gross height according to the aircraft instantaneous pitch",
      C: "change the display scale in short final, in order to have a precise readout",
      D: "compensate for residual height and cable length",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The radio altimeter: The combination regrouping all the correct statements is: 1. operates in the 1600-1660 KHz range 2. operates in the 4200-4400 MHz range 3. measures a frequency difference 4. measures an amplitude difference",
    choices: {
      A: "1 and 4",
      B: "2 and 4",
      C: "1 and 3",
      D: "2 and 3",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "The range of a low altitude radio altimeter is",
    choices: {
      A: "500 ft",
      B: "2500 ft",
      C: "greater than 10000 ft",
      D: "10000 ft",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "If the radio altimeter fails",
    choices: {
      A: "height information disappears",
      B: "aural warning is given",
      C: "radio alt flag, red lamp, and aural warning are given",
      D: "radio alt flag and red lamp activate",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "What does a radio altimeter, for an aircraft in the landing configuration, measure?",
    choices: {
      A: "height of aircraft wheels above the ground",
      B: "height of the aircraft above the ground",
      C: "altitude of the aircraft",
      D: "altitude of the aircraft wheels",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "What principle does the radio altimeter work on?",
    choices: {
      A: "pulse modulation",
      B: "amplitude modulation",
      C: "pulse modulation and carrier wave",
      D: "frequency modulation and carrier wave",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "What aircraft system uses a frequency of 4400 MHz?",
    choices: {
      A: "SSR",
      B: "radio altimeter",
      C: "weather radar",
      D: "ATC radar",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "A low altitude Radio Altimeter, used in precision approaches, has the following characteristics: 1. 1540 MHz to 1660 MHz range 2. pulse transmissions 3. frequency modulation 4. height range between 0 and 5000 ft 5. an accuracy of +/- 2 ft between 0 and 500 ft",
    choices: {
      A: "1, 4, 5",
      B: "3, 4",
      C: "3, 5",
      D: "2, 3, 5",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "What is the normal operating range of a low altitude Radio Altimeter?",
    choices: {
      A: "0 to 5000 ft",
      B: "0 to 2500 ft",
      C: "0 to 10000 ft",
      D: "0 to 7500 ft",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "What is a radio altimeter used for?",
    choices: {
      A: "to determine aircraft height above mean sea level",
      B: "to determine aircraft height above ground level",
      C: "to determine pressure altitude",
      D: "to determine aircraft altitude",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "A typical radio altimeter wave length and frequency band is",
    choices: {
      A: "0.1895 m UHF",
      B: "6.9 cm SHF",
      C: "3.41 m UHF",
      D: "7.1 m EHF INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The Primary Flight Display (PFD) displays information dedicated to",
    choices: {
      A: "weather situation",
      B: "piloting",
      C: "engines and alarms",
      D: "systems",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Regarding Electronic Flight Instrument System (EFIS): The combination regrouping all the correct statements is: 1. the Navigation Display (ND) displays Flight Director Bars 2. the altimeter setting is displayed on the PFD (Primary Flight Display) 3. the PFD is the main flying instrument 4. the FMA (Flight Mode Annunciator) is part of the ND",
    choices: {
      A: "1, 2",
      B: "3, 4",
      C: "1, 4",
      D: "2, 3",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-13)The next waypoint to be overflown is and the estimated is",
    choices: {
      A: "TIC, time of departure, 01:44",
      B: "TIC, time of arrival, 15:08",
      C: "VLM, time of departure, 01:44",
      D: "VLM, time of arrival, 15:08",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-05)Which mode is selected on the following Navigation Display (EHSI)?",
    choices: {
      A: "Expanded VOR mode INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "Full VOR mode",
      C: "Plan mode",
      D: "Expanded ADF mode",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-12)The green symbol of a circle with T/D appears on the EHSI display. It represents",
    choices: {
      A: "the actual top-of-descent",
      B: "the FMC calculated top-of-climb",
      C: "an en-route waypoint",
      D: "the FMC calculated top-of-descent",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-04)Which mode is selected on the following Navigation Display (EHSI)?",
    choices: {
      A: "Expanded VOR mode",
      B: "Expanded ILS mode",
      C: "Full VOR mode",
      D: "Map mode",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The Decision height (DH) warning light comes on when an aircraft",
    choices: {
      A: "passes over the outer marker",
      B: "descends below a pre-set radio altitude",
      C: "descends below a pre-set barometric altitude",
      D: "passes over the ILS inner marker",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The Head Up Display (HUD) is a device allowing the pilot, while still looking outside, to have",
    choices: {
      A: "a monitoring only during CAT III precision approaches",
      B: "a flying and flight path control aid",
      C: "a synthetic view of the instrument procedure INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      D: "a monitoring of engine data",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "In order to know in which mode the auto-throttles are engaged, the crew will check the",
    choices: {
      A: "ND (Navigation Display)",
      B: "TCC (Thrust Control Computer)",
      C: "throttle position",
      D: "PFD (Primary Flight Display)",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-06)The diagram which shows a 40o right bank and 15o nose down attitude is",
    choices: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-03)An aircraft is under guidance mode following a VOR radial. From the ADI and HSI information represented in the attached diagram, it is possible to deduce that the aircraft is",
    choices: {
      A: "located to the left side of the selected radial",
      B: "located to the right side of the selected radial",
      C: "experiencing a left side wind",
      D: "experiencing a right side wind",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-03)From the ADI and HSI information represented in the attached diagram, it is possible to deduce that the aircraft is",
    choices: {
      A: "following a radial 240o from OKL VOR",
      B: "following a radial 229o from OKL VOR",
      C: "flying towards OKL VOR",
      D: "flying below its selected command speed, which is 220 kts",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-13)The T/C is a and it will be reached at approximately",
    choices: {
      A: "FMC calculated top of climb: 5 NM from present position",
      B: "actual top of climb: 15:08 ZULU",
      C: "FMC waypo0int: 15:08 ZULU",
      D: "TCAS traffic: 10 NM from present position",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-12)The white arrow in the lower-left corner indicates",
    choices: {
      A: "after passing BODAL, waypoint in 8 minutes the next heading will be 305o",
      B: "current wind of 305o/8 kts is being experienced",
      C: "active waypoint (BODAL) is located on radial 305o and 8 NM from a VOR tuned in the active NAV receiver",
      D: "active waypoint (T/D) is located on radial 305o and 8 NM from a VOR tuned in the active NAVreceiver",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "(Refer to figure 022-15)What is the current active waypoint?",
    choices: {
      A: "ILB",
      B: "VIW",
      C: "TIC",
      D: "TRA",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-19)What is the meaning of the white circle with (INTC) next to it?",
    choices: {
      A: "denotes an active waypoint on your flight plan",
      B: "indicates a location where you will intercept radial 150o to FRE VOR and track it inbound",
      C: "TCAS indication you are being intercepted by a military aircraft",
      D: "indicates a location of an intersection airway a mandatory reporting point",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-20)On what heading is the aircraft currently flying?",
    choices: {
      A: "109o",
      B: "115o",
      C: "120o",
      D: "125o",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-20)What value is selected by the heading selector (heading bug)?",
    choices: {
      A: "109o",
      B: "115o",
      C: "120o",
      D: "125o",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-20)On what track is the aircraft currently flying?",
    choices: {
      A: "109o",
      B: "115o",
      C: "120o",
      D: "125o",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-21)Which mode is selected on the following Navigation Display (EHSI)?",
    choices: {
      A: "Map mode",
      B: "Centre map mode",
      C: "Plan mode",
      D: "Centre plan mode",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-23)Which mode is selected on the following Navigation Display (EHSI)?",
    choices: {
      A: "Full VOR mode INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "Expanded VOR mode",
      C: "Full NAV mode",
      D: "Expanded NAV mode",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-24)Which mode is selected on the following Navigation Display (EHSI)?",
    choices: {
      A: "Full ADF mode",
      B: "Expanded VOR mode",
      C: "Full NAV mode",
      D: "Expanded NAV mode",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-22)Which mode is selected on the following Navigation Display (EHSI)?",
    choices: {
      A: "Map mode",
      B: "Centre map mode",
      C: "Plan mode",
      D: "Full NAV mode",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-21)Refer to the attached Navigation Display (EHSI). What is the current active waypoint?",
    choices: {
      A: "AMLON",
      B: "ANC10",
      C: "ILB",
      D: "TRA",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "What colour is used to display command information on the EHSI?",
    choices: {
      A: "White",
      B: "Green",
      C: "Cyan INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      D: "Magenta",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "On which of the following modes can weather information be displayed?",
    choices: {
      A: "Map Expanded ILS Expanded VOR",
      B: "Map FULL ILS Full VOR",
      C: "Map Plan Expanded VOR",
      D: "Plan Expanded ILS Expanded VOR",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-20)With reference to the EHSI display, the instantaneous track of the aircraft is",
    choices: {
      A: "109o",
      B: "115o",
      C: "120o",
      D: "125o",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "An IRS is aligned in order to",
    choices: {
      A: "calculate the computed trihedron with respect to the earth",
      B: "establish true and magnetic north",
      C: "establish position relative to true north and magnetic north",
      D: "establish magnetic north",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "A rate integrating gyro is used in which of the following: 1. inertial attitude unit 2. autopilot system 3. stabiliser servo mechanism system 4. inertial navigation unit 5. rate of turn indicator",
    choices: {
      A: "1, 2, 3, 4, 5 INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "1, 4",
      C: "2, 3, 5",
      D: "2, 3, 4",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "All the last generation aircraft use flight control systems. The Flight Management System (FMS) is the most advanced system; it can be defined as a",
    choices: {
      A: "global 3-D Flight Management System",
      B: "management system optimised in the vertical plane",
      C: "management system optimised in the horizontal plane",
      D: "global 2-D Flight Management System",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "What are the inputs to the FMS? 1. Radio Aids 2. Engine Parameters 3. Air Data 4. Route Data 5. Terminal Data 6. Operating Data",
    choices: {
      A: "1, 2, 4, 5",
      B: "2, 3, 4, 5",
      C: "1, 2, 3, 6",
      D: "All of the above",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "A FMS with only a multiple DME sensor operating shall have a position error, 95% probability, in a non precision approach equal to less than",
    choices: {
      A: "0.3 NM",
      B: "0.06 NM INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "1 NM",
      D: "0.5 NM",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Components of the FMS (Flight Management System) are: The combination regrouping all the correct statements is: 1. CDU (Control and Display Unit) 2. Database 3. FMC (Flight Management Computer) 4. Electronic check-lists 5. GPWS (Ground Proximity Warning System) mode controller",
    choices: {
      A: "1, 2, 4, 5",
      B: "1, 2, 3",
      C: "1, 3",
      D: "1, 3, 4",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Concerning the FMS (Flight Management System), entering a cost index of zero results in",
    choices: {
      A: "maximum cruising airspeed",
      B: "maximum range airspeed",
      C: "minimum range airspeed",
      D: "minimum airspeed",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Concerning the FMS (Flight Management System), entering a cost index of zero",
    choices: {
      A: "results in maximum trip fuel",
      B: "results in minimum trip fuel",
      C: "does not influence fuel consumption",
      D: "modifies only cruising airspeed",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Concerning the FMS (Flight Management System), entering a high cost index results in",
    choices: {
      A: "high airspeed and high fuel trip",
      B: "maximum range airspeed",
      C: "minimum trip fuel",
      D: "minimum airspeed",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Concerning the FMS (Flight Management System), the cost index is determined by dividing",
    choices: {
      A: "aircraft cruise speed by fuel cost",
      B: "fuel cost by aircraft operating cost",
      C: "aircraft operating cost by fuel cost",
      D: "fuel cost by aircraft cruise speed",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Concerning the FMS (Flight Mangement System), the parameters used to work out the vertical flight profile are: The combination regrouping all the correct statements 1. gross weight 2. cost index 3. fuel quantity 4. oxygen quantity available for flight crew 5. minimum safe en route altitude",
    choices: {
      A: "1, 3, 5",
      B: "1, 2, 3, 5",
      C: "1, 2, 3",
      D: "3, 4, 5",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "For a FMS designed with the lateral navigation (LNAV) capability coupled to the autopilot, the FMS lateral command output is",
    choices: {
      A: "a calibrated airspeed (CAS) and a cross track distance (XTK)",
      B: "a longitudinal acceleration and a roll rate INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "a lateral acceleration",
      D: "a roll angle or a heading target",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "For a FMS designed with the vertical navigation (VNAV) capability coupled to the autopilot, the FMS vertical command output can be: The combination regrouping all the correct statements is: 1. the angle of attack 2. the pitch angle 3. the vertical acceleration 4. the speed target",
    choices: {
      A: "1, 4",
      B: "3",
      C: "2, 4",
      D: "1",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "For most FMS the Fuel prediction function, which computes the remaining fuel along the flight plan, takes into account the following situations: The combination regrouping all the correct statements is: 1. the additional drag resulting in a flight carried out with the landing gear extended 2. the additional drag resulting in a flight carried out with one engine inoperative 3. the programmed wind direction and speed for the entire remainder of the flight 4. the current wind direction and speed",
    choices: {
      A: "1, 4, 3",
      B: "4",
      C: "3",
      D: "1, 3",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "For most FMS the Fuel prediction function, which computes the remaining fuel along the flight plan, takes into account the following situations: The combination regrouping all the correct statements is: 1. the additional drag resulting in a flight carried out with the landing gear extended 2. the current wind direction and speed 3. the additional drag resulting in a flight carried out with one engine inoperative 4. the programmed wind direction and speed for the entire remainder of the flight",
    choices: {
      A: "1, 3",
      B: "2",
      C: "2, 4",
      D: "3",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "For most FMS the Fuel prediction function, which computes the remaining fuel along the flight plan, takes into account the following situations: The combination regrouping all the correct statements is: 1. the additional drag resulting in a flight carried out with the landing gear extended 2. the current wind direction and speed 3. the additional drag resulting in a flight carried out with one engine inoperative 4. the programmed wind direction and speed for the entire remainder of the flight",
    choices: {
      A: "1, 4",
      B: "1, 3",
      C: "2",
      D: "1",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Some of the FMS have a navigation mode called Dead Reckoning mode (DR), computing airspeed, heading, wind data ground speed and time. This mode is",
    choices: {
      A: "an operating mode used to intercept radials To or From a flight plan waypoint",
      B: "a back up navigation mode to compute a FMS position when the other navigation sensors are nolonger operating",
      C: "a navigation mode used to monitor the FMS position",
      D: "the normal navigation mode for FMS which do not use Inertial Navigation Systems (INS) to computethe aircraft position",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The duration of a FMS navigation database loaded before expiring is",
    choices: {
      A: "15 days",
      B: "28 days",
      C: "2 months",
      D: "3 months",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "The FMS cross track (XTK) is",
    choices: {
      A: "the angular distance error, to the left or right from the desired track (DTK) to the aircrafttrack (TK)",
      B: "the abeam distance error, to the left or right from the desired flight plan leg to the aircraftposition",
      C: "the distance error between the FMS computed position and the IRS computed position",
      D: "the distance error between the FMS computed position and the GPS computed position",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS Flight Plan, Navigation, Progress or Leg page generally displays the ollowing parameters relative to the flight plan legs or waypoints: The combination which regroups all of the correct statements is: 1. FMS position 2. Time prediction 3. Track 4. Distance",
    choices: {
      A: "1, 3, 4",
      B: "1, 2, 3",
      C: "2, 3, 4",
      D: "1, 2, 4",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS Flight Plan, Navigation, Progress or Leg page generally displays the ollowing parameters relative to the flight plan legs or waypoints: The combination regrouping all the correct statements is: 1. remaining fuel prediction 2. aircraft position 3. distance 4. time prediction",
    choices: {
      A: "1, 3, 4",
      B: "1, 2, 3",
      C: "2, 3, 4",
      D: "2, 4",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS Flight Plan, Navigation, Progress or Leg page generally displays the following parameters relative to the flight plan legs or waypoints: The combination regrouping all the correct statements is: 1. time prediction 2. distance 3. magnetic variation 4. altitude constraint or prediction",
    choices: {
      A: "1, 2, 3",
      B: "1, 2, 4",
      C: "1, 3, 4",
      D: "2, 3, 4",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS Flight Plan, Navigation, Progress or Leg page generally displays the following parameters relative to the flight plan legs or waypoints: The combination regrouping all the correct statements is: 1. track 2. magnetic variation 3. waypoint elevation 4. time prediction",
    choices: {
      A: "1, 4",
      B: "1, 3",
      C: "3, 4",
      D: "1, 2, 4",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS Flight Plan, Navigation, Progress or Leg page generally displays the following parameters relative to the flight plan legs or waypoints: The combination regrouping all the correct statements is: 1. distance 2. time prediction 3. waypoint elevation 4. track",
    choices: {
      A: "1, 2, 3",
      B: "2, 3, 4",
      C: "1, 3, 4",
      D: "1, 2, 4",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS is approved to provide guidance for the following approaches",
    choices: {
      A: "non-precision and precision approaches",
      B: "non-precision approaches and ILS CAT 1 precision approaches only",
      C: "non-precision approaches",
      D: "precision approaches limited to CAT II",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS is approved to provide guidance for the following approaches: The combination which regroups all of the correct statements is: 1. RNAV 2. ILS 3. MLS 4. VOR, NDB",
    choices: {
      A: "1, 2, 4",
      B: "2, 3",
      C: "1, 4",
      D: "1, 3, 4",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS is approved to provide guidance for the following approaches: The combination which regroups all of the correct statements is: 1. RNAV 2. PAR 3. VOR/DME, VOR 4. MLS",
    choices: {
      A: "1, 3, 4",
      B: "2, 4",
      C: "1, 3",
      D: "1, 2",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "The FMS is approved for Localiser approaches",
    choices: {
      A: "if the DMEs only are used as navigation sensors",
      B: "if the GPS only is used as navigation sensor",
      C: "if the GPS and DMEs only are used as combined navigation sensors",
      D: "if the Localiser signals are used by the FMS",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "The FMS lateral offset function consists in",
    choices: {
      A: "creating a new waypoint using a reference flight plan waypoint and a distance from this waypointalong the flight plan legs",
      B: "displaying the lateral cross track deviation (XTK) of the aircraft according to the activeflight plan leg",
      C: "flying along the flight plan legs with a constant right or left offset manually entered on theFMS CDU",
      D: "flying a FMS selected lateral pattern used for search and rescue operations",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS navigation database includes the following data: The combination which regroups all of the correct statements is: 1. airports 2. obstacles 3. navaids 4. airways 5. terrain cells",
    choices: {
      A: "1, 2, 3",
      B: "1, 3, 4",
      C: "2, 5",
      D: "1, 3, 4, 5",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS navigation database includes the following data: The combination which regroups all of the correct statements is: 1. airports 2. take off speeds 3. navaids 4. terrain cells 5. runways",
    choices: {
      A: "1, 3, 5",
      B: "1, 2, 3",
      C: "3, 4, 5",
      D: "1, 2, 5",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS navigation database includes the following data: The combination which regroups all of the correct statements is: 1. obstacles 2. navaids 3. SID, STAR and approaches procedures 4. Waypoints 5. Airways",
    choices: {
      A: "1, 2, 3, 4, 5",
      B: "2, 3, 4, 5",
      C: "1, 2, 4",
      D: "1, 3, 5",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS navigation database includes the following data: The combination which regroups all of the correct statements is: 1. obstacles 2. waypoints 3. SID, STAR 4. terrain cells 5. magnetic variation",
    choices: {
      A: "1, 3, 5",
      B: "1, 2, 3",
      C: "2, 3, 5",
      D: "1, 2, 4",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS navigation database processing should include the following check(s)",
    choices: {
      A: "at the end of the FMS formatting phase of all of the data collected and assembled",
      B: "at the reception of each supplier's data and after the assembly of those data collected",
      C: "at each phase of the process, from the reception of each supplier¿s data to the distribution andloading of the formatted database",
      D: "at the loading phase into the FMS, the check is performed by the FMS",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "The FMS Overfly function consists in",
    choices: {
      A: "manually selecting a flight plan to fly over each of the waypoints at the transitions along theroute",
      B: "manually selecting a flight plan waypoint to fly over when sequencing it instead of flying by atthe transition",
      C: "selecting the secondary flight plan making it active to fly over the legs",
      D: "manually selecting a flight plan waypoint to hold over for a selected time",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      ". The FMS provides the following functions: The combination which regroups all of the correct statements is: 1. aircraft position computation 2. traffic alerts 3. lateral flight plan management 4. fuel management",
    choices: {
      A: "4",
      B: "1, 2, 3",
      C: "1, 3, 4",
      D: "1, 3",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS provides the following functions: The combination which regroups all of the correct statements is: 1. fuel management 2. lateral flight plan management 3. de icing management 4. aircraft position computation",
    choices: {
      A: "1, 2, 3",
      B: "1, 2, 4",
      C: "2, 3",
      D: "3, 4",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS provides the following functions: The combination which regroups all of the correct statements is: 1. lateral and vertical flight plan management 2. de icing management 3. aircraft position computation 4. terrain awareness and warning",
    choices: {
      A: "4",
      B: "1, 2, 3",
      C: "1, 3, 4",
      D: "1, 3",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS provides the following functions: The combination which regroups all of the correct statements is: 1. radio tuning 2. fuel management 3. lateral flight plan management 4. traffic alerts",
    choices: {
      A: "3, 4",
      B: "1, 2, 3",
      C: "2, 3, 4",
      D: "1, 2, 4",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      ". The FMS provides the following functions: The combination which regroups all of the correct statements is: 1. vertical flight plan management 2. fuel management 3. lateral flight plan management 4. terrain awareness and warning",
    choices: {
      A: "1, 2, 4",
      B: "1, 2, 3",
      C: "2, 3, 4",
      D: "1, 3, 4",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "The FMS Required Time of Arrival (RTA) function can provide",
    choices: {
      A: "a time prediction at the active to waypoint complying with the wind computation",
      B: "a time slot computed for the arrival time at destination, using the current aircraft speed andspeed constraints along the flight plan",
      C: "a speed target to satisfy a time constraint entered at a flight plan waypoint",
      D: "a time prediction at the flight plan waypoints based on the current speed and speed constraintsalong the flight plan",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The FMS vertical navigation management is generally performed based on",
    choices: {
      A: "a mix of baro and GPS altitudes",
      B: "The GPS altitude computed by the GPS receiver INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "the baro altitude input from the air data system",
      D: "the geometric altitude input from the Terrain Awareness and Warning System (TAWS)",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The Fuel management performed by most FMS along the flight plan is considered as",
    choices: {
      A: "a function which helps the crew to estimate the remaining Fuel quantity along the flight planbut should not be considered as an accurate and reliable mean",
      B: "an accurate function which can be considered as the prime mean to determine the remaining Fuelquantity along the flight plan",
      C: "an accurate and very reliable function providing that the Fuel on board quantity has beenproperly initialised by the crew before start up",
      D: "the prime mean to manage the Fuel consumption along the flight",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The most common sensors interfacing a FMS to compute the aircraft position along the flight plan are: The combination which regroups all of the correct statements is: 1. DME 2. GPS 3. LOCALISER 4. NDB",
    choices: {
      A: "2, 3",
      B: "1, 2, 3",
      C: "1, 2",
      D: "1, 3, 4",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The most common sensors interfacing a FMS to compute the aircraft position along the flight plan are: The combination which regroups all of the correct statements is: 1. GPS 2. NDB 3. DME 4. LOCALISER",
    choices: {
      A: "1, 2, 3",
      B: "1, 3 INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "2, 3",
      D: "1, 4",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The most common sensors interfacing a FMS to compute the aircraft position along the flight plan are: The combination which regroups all of the correct statements is: 1. IRS 2. DME 3. NDB 4. GPS",
    choices: {
      A: "1, 2, 3, 4",
      B: "1, 2, 4",
      C: "2, 3, 4",
      D: "1, 3",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The most common sensors interfacing a FMS to compute the aircraft position along the flight plan are: The combination which regroups all of the correct statements is: 1. MLS 2. GPS 3. VOR 4. IRS",
    choices: {
      A: "1, 2",
      B: "2, 3, 4",
      C: "1, 2, 4",
      D: "1, 4",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "The purpose of the FMS temperature compensation function is",
    choices: {
      A: "to provide compensated altitudes for temperature different from ISA along the vertical approachprofile",
      B: "to provide compensated temperatures at the waypoints along the vertical approach profile INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "to provide the destination airport air temperature",
      D: "to provide the destination airport or runway elevation",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The role of the FMS (Flight Management System) is to aid the flight crew with: The combination regrouping all the correct statements is: 1. immediate actions in case of emergency procedure 2. navigation 3. in-flight performance optimisation 4. electronic check-lists",
    choices: {
      A: "3, 4",
      B: "2, 3, 4",
      C: "2, 3",
      D: "1, 2",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The role of the FMS (Flight Management System) is to: The combination regrouping all the correct statements is: 1. aid the crew with navigation 2. shut down the engine in case of a malfunction 3. automatically avoid conflicting traffic when autopilot engaged 4. reduce crew workload 5. aid fuel efficiency",
    choices: {
      A: "2, 3, 4, 5",
      B: "1, 4, 5",
      C: "1, 2, 3",
      D: "1, 3, 4",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "When two waypoints are entered on the FMS flight plan page, a track between the two fixes is computed and can be displayed on the Navigation map display (ND). This leg created is",
    choices: {
      A: "two great circle arcs joined by a straight segment",
      B: "a rhumb-line",
      C: "a great circle arc",
      D: "two rhumb-lines joined by a straight segment INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "In an aircraft equipped with a twin inertial system, the FMC displayed position",
    choices: {
      A: "would be the same as the primary inertial system position",
      B: "would coincide with the mean inertial position",
      C: "would be half-way between the mean inertial position and the radio fix position",
      D: "would be between the mean inertial position and radio fix position",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "An FMC auto-tunes DMEs for fixing purposes and would normally decode and display the Morse Identifier. What happens when a decode cannot be achieved?",
    choices: {
      A: "Alternative DMEs are selected by the system for fixing purposes",
      B: "A warning is displayed on the CDU",
      C: "Suitable identifier codes are retrieved from FMC memory and displayed in amber",
      D: "The frequency would be displayed instead of the identifier",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Assuming an FMC is operating in LNAV and VNAV and a waypoint is reached beyond which no further waypoints are defined",
    choices: {
      A: "the aircraft would return to the previous waypoint",
      B: "A warning is displayed on the CDU",
      C: "Suitable identifier codes are retrieved from FMC memory and displayed in amber",
      D: "the EHSI would blank momentarily to alert the crew",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "The cost index option on the CDU is",
    choices: {
      A: "a fixed numerical value input into the database by the ground crew every 28 days",
      B: "a fixed numerical value specific to an aircraft type to ensure fuel economy",
      C: "a fixed numerical value that informs the FMC that maximum economy cruise is required",
      D: "a variable numerical value input into the FMC which then calculates either max economy orshorter sector times",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "The flight director indicates the",
    choices: {
      A: "path permitting reaching a selected radial over a minimum distance",
      B: "path permitting reaching a selected radial in minimum time",
      C: "optimum path at the moment it is entered to reach a selected radial",
      D: "optimum instantaneous path to reach selected radial",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-01)After having programmed your flight director, you see that the indications of your ADI (Attitude Director Indicator) are as represented in the diagram of the figure. On this instrument, the command bars indicate that you must bank your airplane to the left and",
    choices: {
      A: "decrease the flight attitude until the command bars recentre on the symbolic airplane",
      B: "increase the flight attitude until the command bars recentre on the symbolic airplane",
      C: "decrease the flight attitude until the command bars recentre on the horizon",
      D: "increase the flight attitude until the command bars recentre on the horizon",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "On a modern aircraft, the flight director modes are displayed on the",
    choices: {
      A: "upper strip of the ND (Navigation Display)",
      B: "upper strip of the PFD (Primary Flight Display)",
      C: "upper strip of the ECAM (Electronic Centralised A/C Management)",
      D: "control panel of the flight director only",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The position of a Flight Director command bars",
    choices: {
      A: "repeats the ADI and HSI information",
      B: "indicates the manoeuvres to execute, to achieve or maintain a flight situation",
      C: "enables the measurement of deviation from a given position",
      D: "only displays information relating to radio-electric deviation",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "For capturing and keeping a pre-selected magnetic heading, the flight director computer takes into account: The combination regrouping all the correct statements is: 1. track deviation 2. rate of track closure 3. rate of change of track closure 4. wind velocity given by the inertial reference unit",
    choices: {
      A: "1, 3, 4",
      B: "1, 2, 4",
      C: "2, 3, 4",
      D: "1, 2, 3",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "Mode Localiser ARM active on Flight Director means",
    choices: {
      A: "Localiser ALARM making localiser approach not authorised",
      B: "System is armed for localiser approach and coupling will occur upon capturing centre line",
      C: "Coupling has occurred and system provides control data to capture the centre line",
      D: "Localiser is armed and coupling will occur when flag warning disappears",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "Where are the flight director modes displayed?",
    choices: {
      A: "PFD",
      B: "ND",
      C: "EICAM",
      D: "FD control panel",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "Flight Director Information supplied by an FD computer is presented in the form of command bars on the following instrument",
    choices: {
      A: "BDHI Bearing Distance Heading Indicator",
      B: "ADI Attitude Display Indicator",
      C: "RMI Radio Magnetic Indicator",
      D: "HSI Horizontal Situation Indicator",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The essential components of a flight director are: The combination of correct statements is: 1. a computer 2. an automatic pilot 3. an auto throttle 4. command bars",
    choices: {
      A: "1, 2",
      B: "1, 4",
      C: "2, 4",
      D: "2, 3",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The aim of the flight director is to provide information to the pilot",
    choices: {
      A: "allowing him to return to a desired path according to a 45o intercept angle",
      B: "about this position with regard to a radio electric axis",
      C: "allowing him to return to a desired path in an optimal way",
      D: "allowing him to return to a desired path according to a 30o intercept angle",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "On which instrument are the flight director bars normally present?",
    choices: {
      A: "primary EICAS",
      B: "ADI",
      C: "ND",
      D: "EHSI",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The command bars of a flight director are generally represented on an",
    choices: {
      A: "RMI",
      B: "ADI",
      C: "ILS",
      D: "HSI",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An aircraft flies steadily on a heading 270o. The flight director is engaged in the heading select mode (HDG SEL), heading 270o selected. If a new heading 360o is selected, the vertical trend bar",
    choices: {
      A: "deviates to the right and will be centred as soon as you roll the aircraft to the bank angle calculated by the flight director",
      B: "deviates to the right and remains in that position until the aircraft has reached heading 360o",
      C: "disappears, the new heading selection has deactivated the HDG mode",
      D: "deviates to its right stop as long as the aeroplane is more than 10o off the new selectedheading",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The heading hold mode is selected on the flight director (FD) with a course to steer of 180o. Your aircraft holds a heading of 160o. The vertical bar of the FD",
    choices: {
      A: "is centred if the aircraft is on optimum path to join heading 180o",
      B: "is centred if the aircraft has a starboard drift of 20o",
      C: "is centred if the aircraft has a port drift of 20o",
      D: "cannot be centred",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The auto-pilot is in heading select mode, and the aircraft is flying on a heading of 270 deg. If you change heading to 360 deg. the flight director",
    choices: {
      A: "roll command bar goes full deflection right and then does not move until the aircraft heading iswithin 30 degrees of the selected heading",
      B: "roll command bar moves to right and centres when AFDS angle of bank to intercept has been achieved",
      C: "heading command bar will disappear and the heading hold will disengage",
      D: "roll command bar moves to the right and then progressively returns to the centre as thedeviation from the selected heading reduces",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-07)After having programmed your flight director, you see that the flight director indications are as represented in the diagram. This indicates that you must",
    choices: {
      A: "increase the flight attitude and bank your airplane to the left",
      B: "increase the flight attitude and bank your airplane to the right",
      C: "decreases the flight attitude and bank your airplane to the left",
      D: "decrease the flight attitude and bank your airplane to the right",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-02)After having programmed your flight director, you see that the indications of your ADI (Attitude Director Indicator) are as represented in diagram. On this instrument, the command bars indicate that you must bank your airplane to the left and",
    choices: {
      A: "increase the flight attitude until the command bars recentre on the symbolic airplane",
      B: "decrease the flight attitude until the command bar recentre on the symbolic airplane",
      C: "increase the flight attitude until the command bars recentre on the symbolic horizon",
      D: "decrease the flight attitude until the command bars recentre on the symbolic horizon",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-39)Four scenarios of VOR axis interception are represented in the appended annex. The one corresponding to the optimal interception path calculated by a flight director is number",
    choices: {
      A: "3",
      B: "2",
      C: "1",
      D: "4",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-38)After having programmed your flight director, you see that the indications of your ADI (Attitude Director Indicator) are as represented in diagram Number 1 of the appended annex. On this instrument, the command bars indicate that you must",
    choices: {
      A: "increase the flight attitude and bank your airplane to the left until the command bars recentre on the symbolic aeroplane",
      B: "increase the flight attitude and bank your aeroplane in the right until the command barsrecentre on the symbolic aeroplane",
      C: "decrease the flight attitude and bank your airplane to the left until the command bars recentreon the symbolic aeroplane",
      D: "decrease the flight attitude and bank your airplane to the right until the command bars recentreon the symbolic aeroplane",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "Command bars of the flight director may be present on the: The combination containing all of the correct statements is: 1. HSI 2. EICAS 3. CDU 4. ADI",
    choices: {
      A: "4 only INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "1 and 4 only",
      C: "1 and 3 only",
      D: "1 only",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: 'Considering a flight director of the "command bars" type',
    choices: {
      A: "the horizontal bar may be associated with the roll channel",
      B: "the vertical bar is associated with the pitch channel",
      C: "the horizontal bar is associated with the roll channel",
      D: "the vertical bar is associated with the roll channel",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: 'Considering a flight director of the "command bars" type',
    choices: {
      A: "the horizontal bar is associated with the pitch channel",
      B: "the horizontal bar is associated with the roll channel",
      C: "the vertical bar is associated with the pitch channel",
      D: "the vertical bar may be associated with the pitch channel",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      'Considering a flight director of the "command bars" type: The combination regrouping all the correct statements is: 1. the vertical bar is always associated with the roll channel 2. the vertical bar may be associated with the pitch channel 3. the horizontal bar may be associated with the roll channel 4. the horizontal bar is associated with the pitch channel',
    choices: {
      A: "1, 2, 3, 4",
      B: "1, 2, 4",
      C: "1, 3, 4 INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      D: "1, 4",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "During a final approach, if the flight director system is engaged in the G/S mode (holding of ILS Glide Slope), the position of the horizontal command bar indicates",
    choices: {
      A: "the pitch attitude of the aircraft",
      B: "the position of the aircraft relative to the ILS Glide Slope",
      C: "the instantaneous deviation between the aircraft position and the IOLS Glide Slope",
      D: "the correction on the pitch to be applied to join and follow the ILS Glide Slope",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "During a final approach, the flight director system is engaged in the G/S mode (holding of ILS Glide Slope). The position of the horizontal command bar indicates: The combination regrouping all the correct statements is: 1. the position of the aircraft relative to the ILS Glide Slope 2. the correction on the pitch to be applied to join and follow the ILS Glide Slope 3. the instantaneous deviation between the aircraft position and the ILS Glide Slope",
    choices: {
      A: "1",
      B: "2",
      C: "1, 2",
      D: "1, 3",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "During a final approach, the flight director system is engaged in the LOC mode (holding of Localiser axis). The position of the vertical command bar indicates",
    choices: {
      A: "the roll attitude of the aircraft",
      B: "the position of the aircraft relative to the Localiser axis",
      C: "the instantaneous deviation between the aircraft position and the Localiser axis",
      D: "the correction on the bank to be applied to join and follow the Localiser axis",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "During a final approach, the flight director system is engaged in the LOC mode (localiser axis holding). The position of the vertical command bar indicates: During a final approach, the flight director system is engaged in the LOC mode (localiser axis holding). The position of the vertical command bar indicates: The combination regrouping all the correct statements is: 1. the position of the aircraft relative to the localiser axis 2. the roll attitude of the aircraft 3. the correction on the bank to be applied to join and follow the Localiser axis",
    choices: {
      A: "1, 3",
      B: "1",
      C: "1, 2",
      D: "3",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "Flying manually during a final approach, the flight director system is engaged in the G/S mode (holding of ILS Glide Slope). If the aircraft is above the ILS Glide Slope, the horizontal command bar",
    choices: {
      A: "cannot be centred",
      B: "may be centred if the pilot is correcting to come back on to the ILS Glide Slope",
      C: "is automatically centred since the G/S mode is engaged",
      D: "will be centred only when establish on the ILS Glide Slope",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Flying manually during a final approach, the flight director system is engaged in the G/S mode (holding of ILS Glide Slope). If the aircraft is below the ILS Glide Slope, the horizontal command bar",
    choices: {
      A: "deviates downward, whatever the attitude of the aircraft is",
      B: "is automatically centred since the G/S mode is engaged",
      C: "deviates upward, whatever the attitude of the aircraft is",
      D: "may be centred if the pilot is correcting to come back on the ILS Glide Slope",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "Flying manually during a final approach, the flight director system is engaged in the LOC mode (holding of localiser axis). If the aircraft is left of the Localiser axis, the vertical command bar",
    choices: {
      A: "is automatically centred since the LOC mode is engaged",
      B: "may be centred if the pilot is correcting to come back on the Localiser axis",
      C: "deviates to the left, whatever the attitude of the aircraft is",
      D: "deviates to the right, whatever the attitude of the aircraft is",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Flying manually during a final approach, the flight director system is engaged in the LOC mode (holding of localiser axis). If the aircraft is right of the Localiser axis, the vertical command bar",
    choices: {
      A: "cannot be centred",
      B: "may be centred if the pilot is correcting to come back on the Localiser axis",
      C: "is automatically centred since the LOC mode is engaged",
      D: "will be centred only when establish on the Localiser axis",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The command bars of a flight director",
    choices: {
      A: "are displayed only if the autopilot is engaged",
      B: "may be displayed when flying manually",
      C: "are always displayed when the autopilot is engaged",
      D: "are always displayed during take-off",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The command bars of a flight director",
    choices: {
      A: "may be displayed when flying manually or with the autopilot engaged",
      B: "are displayed only when flying manually",
      C: "are displayed only when the autopilot is engaged",
      D: "are always displayed during take-off",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The flight director is engaged in the heading select mode (HDG SEL), heading 180o selected. When heading is 160o the vertical bar of the FD",
    choices: {
      A: "cannot be centred",
      B: "is centred if the aircraft has a 20o left drift",
      C: "is centred if the aircraft has a 20o right drift",
      D: "is centred if the bank angle of the aircraft is equal to the bank angle computed by the flight director calculator",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "The flight director provides information for the pilot",
    choices: {
      A: "to remain within the flight envelope",
      B: "to join a desired path with the optimum attitude",
      C: "to join a desired track with a 45o intercept angle",
      D: "to join a desired track with a constant bank angle of 25o",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The horizontal command bar of a flight director",
    choices: {
      A: "gives information about the direction and the amplitude of the corrections to be applied on the pitch of the aircraft",
      B: "repeats the position information given by the ILS in the horizontal plane",
      C: "repeats the position information given by the ILS in the vertical plane",
      D: "gives information only about the direction of the corrections to be applied on the pitch of theaircraft",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The horizontal command bar of a flight director: The combination regrouping all the correct statements is: 1. repeats the position information given by the ILS in the horizontal plane 2. repeats the position information given by the ILS in the vertical plane 3. gives information about the direction and the amplitude of the corrections to be applied on the pitch of the aircraft 4. gives information only about the direction of the connections to be applied on the pitch of the aircraft",
    choices: {
      A: "2, 3",
      B: "2",
      C: "3",
      D: "1, 4",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "The output data of the flight director computer are",
    choices: {
      A: "two channels, pitch and yaw",
      B: "two channels, pitch and roll",
      C: "three channels, pitch, roll",
      D: "three channels, pitch, roll and side slipping",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The parameters taken into account by the flight director computer in the altitude hold mode (ALT HOLD) are: The combination regrouping all the correct statements is: 1. altitude deviation 2. engine rpm 3. ground speed 4. pitch attitude",
    choices: {
      A: "1",
      B: "1, 2",
      C: "1, 4",
      D: "1, 3",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "The position of a Flight Director command bars",
    choices: {
      A: "only displays information relating to radio-electric deviation",
      B: "repeats the ADI and HSI information",
      C: "enables the measurement of deviation from a given position",
      D: "indicates the manoeuvres to execute, to achieve or maintain a flight situation",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The purpose(s) of the flight director system is (are) to: The combination regrouping all the correct statements is: 1. give the position of the aircraft according to radio electric axis 2. give the position of the aircraft according to waypoints 3. to aid the pilot when flying manually",
    choices: {
      A: "1, 3",
      B: "1, 2, 3",
      C: "3",
      D: "2, 3",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "The vertical command bar of a flight director",
    choices: {
      A: "repeats the position information given by the EHSI",
      B: "gives information about the direction and the amplitude of the corrections to be applied on the bank of the aircraft INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "repeats the position information given by the VOR",
      D: "gives information only about the direction of the corrections to be applied on the bank of theaircraft",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "The vertical command bar of a flight director",
    choices: {
      A: "repeats the position information given by the ILS in the vertical plane",
      B: "repeats the position information given by the ILS in the horizontal plane",
      C: "gives information about the direction and the amplitude of the corrections to be applied on the bank of the aircraft",
      D: "gives information only about the direction of the corrections to be applied on the bank of theaircraft",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The vertical command bar of a flight director: The combination regrouping all the correct statements is: 1. repeats the position information given by the EHSI 2. repeats the position information given by the VOR 3. gives information about the direction and the amplitude of the corrections to be applied",
    choices: {
      A: "2, 3",
      B: "1, 2, 3",
      C: "1, 3",
      D: "3",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The vertical command bar of a flight director: The combination regrouping all the correct statements is: 1. repeats the position information given by the ILS in the horizontal plane 2. repeats the position information given by the ILS in the vertical plane 3. gives information about the direction and the amplitude of the corrections to be applied",
    choices: {
      A: "1",
      B: "3",
      C: "2, 3",
      D: "1, 3",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "To allow the coupling of a dual channel flight director",
    choices: {
      A: "only one autopilot channel must be selected ON",
      B: "both autopilot channels must be selected ON",
      C: "both VHF Comms channels must be serviceable",
      D: "both VHF NAV channels must be serviceable",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-38)After having programmed your flight director, you see that the indications of your ADI (Attitude Director Indicator) are as represented in diagram number 1. On this instrument, the command bars indicate that you must bank your airplane to the left and",
    choices: {
      A: "increase the flight attitude until the command bars recentre on the symbolic horizon",
      B: "increase the flight attitude until the command bars recentre on the symbolic airplane",
      C: "decrease the flight attitude until the command bars recentre on the symbolic airplane",
      D: "decrease the flight attitude until the command bars recentre on the symbolic horizon",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-06)The FD command bars on the ADI (Illustration number 2) indicate that",
    choices: {
      A: "the pilot should raise the aircraft nose and roll to the right",
      B: "the pilot should lower the aircraft nose and roll to the left",
      C: "the pilot should raise the aircraft nose and roll to the left",
      D: "the pilot should lower the aircraft nose and roll to the right",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-01)The ADI presentation shows that the aircraft is (VSI reading zero)",
    choices: {
      A: "pitched up",
      B: "pitched down",
      C: "in straight and level flight",
      D: "pitched down and rolled to the left",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "Flight Director operation",
    choices: {
      A: "is available in both manual and automatic flight",
      B: "is available in automatic flight only",
      C: "is available in manual flight only",
      D: "requires at least two functioning autopilot channels",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "Flight Director operation is selected by",
    choices: {
      A: "engaging an autopilot channel",
      B: "moving both the Captain's and the First Officer's Flight Director switch to ON",
      C: "moving either the Captain's or the First Officer's Flight Director switch to ON",
      D: "disengaging all auto pilot channels",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "If you have selected a heading of 180o and are flying aircraft on heading of 160o to intercept the correct course, the ADI vertical FD bar will be centred",
    choices: {
      A: "only if aircraft is subject to 20o port drift",
      B: "only if aircraft is subject to 20o starboard drift",
      C: "cannot be centralised",
      D: "will only be central when flying correct attitude to intercept desired heading",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "When turning into a desired radial, FD bars indicate",
    choices: {
      A: "45o angle of bank",
      B: "30o angle of bank",
      C: "15o angle of bank",
      D: "correct attitude to intercept radial",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The Flight Director horizontal and vertical bars are up and left of aircraft symbol on the ADI, these indications are directing the pilot to",
    choices: {
      A: "Increase pitch angle, turn left",
      B: "Decrease pitch angle, turn left INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "Increase pitch angle, turn right",
      D: "Decrease pitch angle, turn right",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "An autopilot system",
    choices: {
      A: "must provide at least aircraft guidance functions",
      B: "must provide at least aircraft stabilisation functions",
      C: "may provide automatic take off functions",
      D: "must provide automatic take off functions",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An automatic pilot is a system which can ensure the functions of",
    choices: {
      A: "piloting only",
      B: "piloting and guidance of an aircraft in both the horizontal and vertical planes",
      C: "navigation",
      D: "piloting from take-off to landing without any action from human pilot",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "In a closed loop system a device in which a small input operates a large output in a strictly proportional manner is called",
    choices: {
      A: "amplifier",
      B: "auto-pilot",
      C: "servomotor",
      D: "servomechanism",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "During a CAT 2 approach, what is providing the height information to the auto-pilot?",
    choices: {
      A: "Capsule stack",
      B: "Radio altimeter",
      C: "Captain's barometric altimeter",
      D: "Central Air Data Computer INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "In an auto-pilot system, A/C flight path modes include which of the following: 1. Pitch attitude holding 2. Horizontal wing holding 3. VOR axis holding 4. Inertial heading holding 5. ASI & Mach hold. 6. Yaw damper",
    choices: {
      A: "1, 2, 4",
      B: "1, 2, 5",
      C: "2, 4, 6",
      D: "3, 4, 5",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "During an automatic landing, from a height of about 50 ft the",
    choices: {
      A: "LOC and glide slope modes are disconnected and the airplane carries on its descent until landing",
      B: "auto pilot maintains an angle of attack depending on the radio altimeter height",
      C: "glide slope mode is disconnected and the airplane continues its descent until landing",
      D: "auto pilot maintains a vertical speed depending on the radio altimeter height",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "On an auto pilot coupled approach, GO AROUND mode is engaged",
    choices: {
      A: "if the aircraft reaches the decision height selected on the radio altimeter at a higher speedthan the one selected",
      B: "by the pilot selecting G.A. mode on the thrust computer control panel",
      C: "automatically in case of an auto pilot or flight director alarm",
      D: "by the pilot pushing a button located on the throttles",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The control law of a transport airplane auto pilot control channel may be defined as the relationship between the",
    choices: {
      A: "crew inputs to the computer and the detector responses (returned to the airplane) INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "computer input deviation data and the output control deflection signals",
      C: "computer input deviation data and the signals received by the servo- actuators",
      D: "input and output signals at the amplifier level respectively control deviation data and controldeflection signals",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The command functions of an autopilot include, among others, the holding of: The combination which regroups all of the correct statements is: 1. vertical speed 2. altitude 3. attitude 4. bank 5. heading",
    choices: {
      A: "1, 2, 5",
      B: "1, 2, 3, 5",
      C: "3, 5",
      D: "2, 3, 4",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "An automatic landing system necessitating that the landing be continued manually in the case of a system failure during an automatic approach is called FAIL",
    choices: {
      A: "OPERATIONAL",
      B: "REDUNDANT",
      C: "SAFE",
      D: "PASSIVE",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In automatic landing mode, when the two auto pilots are used, the system is considered",
    choices: {
      A: "fail operational or without failure effect with function always ensured",
      B: "fail soft or with minimized failure effect",
      C: "fail passive or without failure effect but with disconnection",
      D: "fail hard or with failure effect and disconnection",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "When an automatic landing I interrupted by a go-around: The combination regrouping all the correct statements is: 1. the auto throttle reacts immediately upon the pilot action on the TO/GA (Take-off/Go-around) switch in order to recover the maximum thrust 2. the auto pilot monitors the climb and the rotation of the airplane 3. the auto pilot retracts the landing gear and reduces the flap deflection in order to reduce the drag 4. the pilot performs the climb and the rotation of the airplane 5. the pilot retracts the landing gear and reduces the flap deflection in order to reduce the drag",
    choices: {
      A: "1, 2 and 5",
      B: "1, 4 and 5",
      C: "1, 3 and 4",
      D: "1, 2 and 3",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In an auto flight system, modes for stabilising the A/C include which of the following: 1. Yaw damper 2. Pitch attitude holding 3. VOR axis holding 4. ASI & Mach hold. 5. Horizontal wing holding 6. Altitude holding",
    choices: {
      A: "1, 2, 4",
      B: "1, 2, 5",
      C: "1, 5, 6",
      D: "2, 4, 6",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Among the following functions of an auto pilot, those related to the airplane guidance are: The combination regrouping all the correct statements is: 1. pitch attitude holding 2. horizontal wing holding 3. indicated airspeed or Mach number holding 4. altitude holding 5. VOR axis holding 6. Yaw damping",
    choices: {
      A: "1, 2 and 6",
      B: "3, 4 and 5",
      C: "1, 2, 3 and 6",
      D: "1, 3, 4 and 5",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "Among the following functions of an auto pilot, those related to the airplane stabilisation are: The combination regrouping all the correct statements is: 1. pitch attitude holding 2. horizontal wing holding 3. displayed heading or inertial track holding 4. indicated airspeed or Mach number holding 5. yaw damping 6. VOR axis holding",
    choices: {
      A: "2, 4 and 5",
      B: "1, 2, 3 and 6",
      C: "3, 4, 5 and 6",
      D: "1 and 2",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "At 50 feet agl during an auto-land, what happens to the glide slope signal?",
    choices: {
      A: "is used until the nose landing gear touches the ground",
      B: "is disconnected",
      C: "is factored for range",
      D: "is used to flare the aircraft",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "When air aircraft, operating in the VOR coupled mode, approaches the CONE OF CONFUSION over a VOR station, the roll channel of the auto pilot",
    choices: {
      A: "temporarily switches over to the heading mode",
      B: "is damped by a trim input signal from the lateral trim system",
      C: "remains always coupled to the selected VOR radial",
      D: "is temporarily disconnected",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In an auto pilot slaved powered control circuit, the system which ensures synchronisation",
    choices: {
      A: "is inhibited when the automatic pilot is engaged",
      B: "intervenes only when the automatic pilot has been engaged",
      C: "prevents uncommanded surface deflection when the automatic pilot is disengaged",
      D: "can itself, when it fails, prevent the automatic pilot from being engaged",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The auto pilot is engaged with no modes selected. What is the auto pilot providing",
    choices: {
      A: "wing levelling",
      B: "altitude hold",
      C: "attitude hold with auto trim",
      D: "LNAV and VNAV",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "In a transport airplane, an auto pilot comprises, in addition to the mode display devices, the following fundamental elements: The combination regrouping all the correct statements is: 1. Airflow valve 2. Sensors 3. Comparators 4. Computers 5. Amplifiers 6. Servo-actuators",
    choices: {
      A: "2, 3, 4, 5",
      B: "2, 3, 4, 5, 6 INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "1, 3, 4, 6",
      D: "1, 2, 6",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "When operating with the auto pilot in ALT hold mode what happens if the Captain¿s barometric altimeter pressure setting is increased",
    choices: {
      A: "ALT hold disengages",
      B: "Nothing",
      C: "The aeroplane will climb",
      D: "The aeroplane will descend",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "When the altitude acquisition mode is engaged on a jet transport airplane equipped with auto pilot (AP) and auto throttle (ATS) systems the",
    choices: {
      A: "true airspeed (TAS) is maintained constant by the auto pilot by means of elevator",
      B: "indicated airspeed (IAS) is maintained constant by the auto pilot by means of elevator",
      C: "true airspeed (TAS) is maintained constant by the auto throttle system",
      D: "indicated airspeed (IAS) is maintained constant by the auto throttle system",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "A pilot engages the control wheel steering (CWS) of a conventional autopilot and carries out a manoeuvre in roll. When the control wheel is released, the auto pilot will",
    choices: {
      A: "restore the flight attitude and the rate of turn selected on the auto pilot control display unit",
      B: "roll wings level and maintain the heading obtained at that moment",
      C: "maintain the track and the flight attitude obtained at that moment",
      D: "maintain the flight attitude obtained at that moment",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      'An autopilot is selected "ON" in mode "altitude hold", the pilot alters the barometric pressure set on the sub-scale of his altimeter the',
    choices: {
      A: "aircraft will remain at the same altitude, the auto pilot takes its pressure information from the static source",
      B: "aircraft will remain at the same altitude, the auto pilot takes its pressure information fromthe altimeter corrected to standard pressure 1013.25 hPa",
      C: "aircraft will climb or descend in the sense of the change, the auto pilot takes its pressureinformation from the altimeter",
      D: "mode altitude hold will disengage",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "What are the auto pilot minimum requirements in order to fly single pilot operations in IFR conditions or at night?",
    choices: {
      A: "Two axis auto pilot with altitude hold and heading hold",
      B: "Two axis auto pilot with altitude hold, heading hold, VOR tracking and Alt acquire",
      C: "Single axis auto pilot with Altitude hold only",
      D: "Single axis auto pilot with Heading select and VS",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "An automatic landing system which can keep on operating without deterioration of its performances following the failure of one of the auto pilots is called",
    choices: {
      A: "Fail REDUNDANT",
      B: "Fail PASSIVE",
      C: "Fail SAFE",
      D: "Fail OPERATIONAL",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "In automatic landing mode, in case of failure of one of the two auto pilots, the system is considered",
    choices: {
      A: "fail passive or without failure effect but with disconnection",
      B: "fail survival or without failure effect with function always ensured",
      C: "fail hard or without failure effect and disconnection",
      D: "fail soft with minimised failure effect",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "Auto land flare is initiated at",
    choices: {
      A: "1500 ft",
      B: "330 ft",
      C: "50 ft",
      D: "5 ft",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "In heading select the auto pilot delivers roll commands to the controls to bank the aircraft: 1. proportional to TAS, but not beyond a specified maximum 2. set bank of 27 degrees 3. set bank of 15 degrees 4. proportional to the deviation from the selected heading",
    choices: {
      A: "1, 2",
      B: "2, 3",
      C: "3, 4",
      D: "4, 1",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "The control law in a fly-by-wire system is a relationship between",
    choices: {
      A: "how the pilot's control demands are translated into control surface movements",
      B: "input and output at the amplifier level respectively control the deviation data",
      C: "computer input deviation data and flap position modification",
      D: "the versine signal between the ailerons and elevators",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The auto pilot basic modes include, among other things, the following functions: The combination regrouping all the correct statements is: 1. pitch attitude hold 2. pressure altitude hold 3. horizontal wing hold 4. heading hold",
    choices: {
      A: "1, 2, 3, 4 INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "1, 3",
      C: "1, 2, 3",
      D: "1, 4",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "What are the most basic functions of auto stabilisation? 1. maintain pitch attitude 2. maintain wings level 3. altitude hold 4. heading hold 5. speed hold",
    choices: {
      A: "1 & 5",
      B: "1 & 2",
      C: "1, 2 & 3",
      D: "1, 2, 3 & 4",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The interception of a localiser beam by the auto pilot takes place",
    choices: {
      A: "according to an interception versus radio deviation law",
      B: "at a constant magnetic course",
      C: "at a constant heading",
      D: "according to an interception versus range and angular",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "In a selected axis capture mode, the autopilot gives a bank attitude input",
    choices: {
      A: "of a fixed value equal to 20o",
      B: "of a fixed value equal to 27o INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "proportional to the deviation between the selected heading and the current heading but not exceeding a given value",
      D: "proportional to the aircraft true airspeed but not exceeding a given value",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "A pilot has to carry out a single pilot IFR flight on a light twin aircraft for cargo transport. The purpose of the automatic pilot should be at least to hold",
    choices: {
      A: "heading and altitude",
      B: "heading",
      C: "altitude",
      D: "heading and altitude, and to have a radio axis tracing function",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "What is the purpose of the synchronisation in an auto pilot. 1. prevents snatch on disengagement 2. prevents snatch on engagement 3. cancels rudder control inputs 4. may not allow the auto pilot to engage if unserviceable",
    choices: {
      A: "1, 2",
      B: "1, 3",
      C: "2, 4",
      D: "3, 4",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "If only a single A/P is used to climb, cruise and approach; following a failure of an inner loop component",
    choices: {
      A: "it is fail passive with redundancy",
      B: "it is fail operational and will not be disconnected",
      C: "it is fail soft and will not disconnect",
      D: "",
    },
    correct: "",
    ref: "All",
  },
  {
    question:
      "Landing shall be considered as having been carried out automatically when the auto pilot and the auto throttle of an aircraft are disengaged by flight crew",
    choices: {
      A: "during the flare",
      B: "during ground roll",
      C: "at the decision height",
      D: "at the outer marker",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "During a Category II automatic approach, the height information is supplied by the",
    choices: {
      A: "altimeter",
      B: "GPS (Global Positioning System)",
      C: "encoding altimeter",
      D: "radio altimeter",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "The Altitude Alert System",
    choices: {
      A: "Engages auto pilot Auto Trim at selected altitude",
      B: "Illuminates a light when selected altitude is attained",
      C: "is annunciated by light and/or sound when airplane is approaching selected altitude",
      D: "Disengages auto pilot Auto Trim at selected altitude",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "The synchronisation of the auto pilot control channel system: The combination regrouping all the correct statements is: 1. enables the prevention of jerks during disengagement 2. enables the cancellation of rudder control signals 3. enables the prevention of jerks during engagement 4. functions in the heading, navigation, approach modes",
    choices: {
      A: "2, 3",
      B: "2, 4",
      C: "1, 4",
      D: "3, 4",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "When is an auto land procedure complete?",
    choices: {
      A: "At the inner marker",
      B: "At the beginning of the ground roll",
      C: "At decision height",
      D: "At the flare",
    },
    correct: "B",
    ref: "All",
  },
  {
    question: "What is the wavelength of an ILS signal?",
    choices: {
      A: "Centimetric",
      B: "Hectometric",
      C: "Metric",
      D: "Decimetric",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "The functions of an autopilot (basic modes) consist of",
    choices: {
      A: "monitoring the movement of the airplane centre of gravity",
      B: "stabilising and monitoring the movement around the airplane centre of gravity",
      C: "guiding the airplane path",
      D: "stabilising and monitoring the movement around the airplane aerodynamic centre",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The computers of the electrical flight controls system comply with programs defined by attitude control laws such as: The combination regrouping all the correct statements is: 1. on the longitudinal axis, the law may combine the load factor and the changes in the pitch rate as control data sources 2. the trimming is automatic and ensures neutral stability 3. the protections apply to pitch and bank attitudes depending on the speed 4. these laws do not apply to the whole flight envelope",
    choices: {
      A: "1, 2, 3, 4",
      B: "2, 3 INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "1, 2, 3",
      D: "1, 3, 4",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "An auto pilot capable of altitude hold and heading hold is a minimum requirement for",
    choices: {
      A: "Single pilot operation in VMC and IMC",
      B: "Single pilot operation under IFR and at night",
      C: "Aircraft over 5700 kg",
      D: "Dual pilot operation (in IFR)",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "An auto pilot capable of holding at least altitude and heading mode is compulsory",
    choices: {
      A: "on airplanes over 5.7 t",
      B: "on multi pilot airplanes",
      C: "for VFR and IFR flights with only one pilot",
      D: "for IFR or night flights with only one pilot",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "When using the auto pilot, the function of the pitch channel automatic trim is to: The combination regrouping all the correct statements is: 1. cancel the hinge moment of the elevator 2. ease as much as possible the load of the servo-actuator 3. restore to the pilot a correctly trimmed airplane during the auto pilot disengagement",
    choices: {
      A: "1 and 2 INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "3",
      C: "1 and 3",
      D: "1, 2 and 3",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "What does the auto pilot pitch/rotate around?",
    choices: {
      A: "Centre of gravity",
      B: "Manoeuvre point",
      C: "Centre of pressure",
      D: "Neutral point",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The correction of the control surface deflection made by the automatic pilot calculator in order to stabilise the longitudinal attitude will be all the more significant as the: The combination regrouping all the correct statements is: 1. difference between the reference attitude and the instantaneous attitude is high 2. rate of change of the difference between the reference attitude and the instantaneous attitude is high 3. temperature is low 4. pressure altitude is high",
    choices: {
      A: "1, 2",
      B: "1, 2, 3, 4",
      C: "1, 2, 3",
      D: "2, 3, 4",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "When being engaged, and without selecting a particular mode, an automatic pilot enables",
    choices: {
      A: "aeroplane stabilisation with attitude hold or maintaining vertical speed and possibly automatic trim",
      B: "a constant speed on track, wings horizontal INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "all aeroplane piloting and guidance functions except maintaining radio- navigation course lines",
      D: "aeroplane piloting and guidance functions",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "The correction of the control surface deflection made by the auto pilot calculator in order to keep a given altitude will be all the more significant when the: The combination regrouping the correct statements is: 1. difference between the attitude necessary to keep the given or reference altitude and the instantaneous attitude is high 2. variation speed of the difference between the attitude necessary to maintain the altitude and the instantaneous attitude is high 3. difference between the altitude of reference and the instantaneous altitude is high 4. variation speed of the difference between the reference altitude and the instantaneous altitude is high",
    choices: {
      A: "1, 2, 3 and 4",
      B: "1, 2 and 3",
      C: "2 and 3",
      D: "2, 3 and 4",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "In the automatic trim control system of an autopilot, automatic trimming is normally effected about the",
    choices: {
      A: "roll and yaw axes only",
      B: "pitch axis only",
      C: "pitch, roll and yaw axes",
      D: "pitch and roll axes only",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "The engagement of an auto pilot is not possible when: The combination regrouping all the correct statements is: 1. there is a fault in the electrical power supply 2. the controlled turn knob is not set to centre off 3. there is a synchronisation fault in the pitch channel 4. there is a fault in the attitude reference unit",
    choices: {
      A: "1, 3 and 4",
      B: "1 and 3 INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "1, 2, 3, 4",
      D: "1 and 4",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "From a flight mechanics point of view, the guidance functions of a transport airplane auto pilot consist in",
    choices: {
      A: "monitoring the movements of the centre of gravity in the three dimensions of space (path)",
      B: "stabilising and monitoring the movements around the aerodynamic centre",
      C: "stabilising and monitoring the movements around the centre of gravity",
      D: "monitoring the movements of the aerodynamic centre in the three dimensions of space (path)",
    },
    correct: "A",
    ref: "All",
  },
  {
    question:
      "(Refer to figure 022-42)The block diagram of an auto pilot is shown in the annex. For each control channel (pitch, roll and yaw) the piloting law is the relationship between the deflection of the control surface commanded by the computer (BETA c) and the",
    choices: {
      A: "real deflection of the control surface (BETA control surface feedback)",
      B: "offset EPSILON at the computer input",
      C: "pilot command E",
      D: "aircraft response S",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "A closed loop control system in which a small power input controls a much larger power output in a strictly proportionate manner is known as",
    choices: {
      A: "an autopilot",
      B: "a feedback control circuit",
      C: "a servo-mechanism",
      D: "an amplifier",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "On a modern transport category aeroplane, the engagement of the automatic pilot is checked on the display of",
    choices: {
      A: "the ND (Navigation Display) of the pilot in command",
      B: "the ND (Navigation Display)",
      C: "the ECAM (Electronic Centralised Aircraft Monitoring) left screen",
      D: "the PFD (Primary Flight Display)",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "The airspeed hold mode can be engaged and maintained during",
    choices: {
      A: "turns only",
      B: "climbs and descents only",
      C: "climbs, descents, and power changes only",
      D: "climbs, descents, turns and power changes",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "The AFDS will automatically disengage from the LNAV mode if",
    choices: {
      A: "LVL CHG mode is selected",
      B: "the pre-programmed route is altered",
      C: "a new desired altitude is selected",
      D: "HDG SEL is selected",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "A two axis autopilot system normally provides control about the aircraft¿s",
    choices: {
      A: "pitch and roll axes",
      B: "pitch and yaw axes",
      C: "roll and yaw axes",
      D: "longitudinal and normal axes",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "An inner loop control system is one in which",
    choices: {
      A: "auto stabilisation is provided about a single axis INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "all three axes of movement in flight are sensed and the appropriate actuator is selected",
      C: "only roll control can be achieved",
      D: "a torque limiter controls the aircraft in pitch",
    },
    correct: "A",
    ref: "All",
  },
  {
    question: "If the Radio Altimeter fails during an auto land approach",
    choices: {
      A: "the DH flashes",
      B: "An audio alert sounds",
      C: "The DH flashes and an audio alert sounds",
      D: "The RA stops showing the height",
    },
    correct: "D",
    ref: "All",
  },
  {
    question: "What is the most basic function of an auto pilot?",
    choices: {
      A: "altitude hold",
      B: "heading hold",
      C: "wing leveller",
      D: "altitude and heading hold",
    },
    correct: "C",
    ref: "All",
  },
  {
    question: "TO/GA is engaged",
    choices: {
      A: "automatically at GS capture",
      B: "automatically when an autopilot fails",
      C: "by the pilot pressing a button on or near the throttles",
      D: "by the pilot selecting flare",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      ". The auto synchronisation system does which of the following? 1. prevents snatching on engagement 2. prevents snatching on disengagement 3. cancels rudder input 4. works in climb, cruise and descent",
    choices: {
      A: "1, 2",
      B: "2, 3",
      C: "1, 4",
      D: "3, 4",
    },
    correct: "C",
    ref: "All",
  },
  {
    question:
      "If a pilot was to carry out a roll manoeuvre, on release of the control column with the auto pilot in CWS mode, what does the auto pilot do?",
    choices: {
      A: "Roll wing level and maintain heading only",
      B: "Maintain attitude only",
      C: "Maintain track and attitude only",
      D: "Roll wing level and maintain MCP selected roll",
    },
    correct: "B",
    ref: "All",
  },
  {
    question:
      "On crossing the cone of confusion of a VOR when in VOR mode of the auto pilot what will happen to the roll channel?",
    choices: {
      A: "Always coupled to the selected VOR radial",
      B: "Temporarily disconnected",
      C: "Damped by a trim input from the lateral trim system",
      D: "Temporarily switches to heading mode",
    },
    correct: "D",
    ref: "All",
  },
  {
    question:
      "When only one auto pilot is used for climbing, cruising and approach, the system is considered",
    choices: {
      A: "fail passive or without failure effect but with disconnection",
      B: "fail soft or with minimised failure effect",
      C: "fail survival or without failure effect with function always ensured",
      D: "fail safe with failure effect without disconnection",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If a Go-Around is initiated from an auto land reproach: 1. the auto throttle selects GA power as soon as the TOGA switch is pressed If a Go-Around is initiated from an auto land reproach: 1. the auto throttle selects GA power as soon as the TOGA switch is pressed 2. the auto pilot carries out the climb 3. the auto pilot retracts flap and landing gear to reduce drag 4. the pilot carries out the procedure 5. the pilot cleans up (retracts flaps and raises gear)",
    choices: {
      A: "1, 2 & 4",
      B: "B - 1, 2 & 5",
      C: "C - 1, 4 & 5",
      D: "D - 1, 2 & 3",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A landing will be considered to be performed in the SEMI-AUTOMATIC mode when: The combination regrouping all the correct statements is: 1. the auto pilot maintains the airplane on the ILS beam until the decision height is reached then is disengaged automatically 2. the auto throttle maintains a constant speed until the decision height is reached then is disengaged automatically 3. the auto pilot maintains the airplane on the ILS beam until the flare 4. the auto throttle decreases the thrust when the height is approximately 30 ft 5. the flare and the ground roll are performed automatically",
    choices: {
      A: "1 and 4",
      B: "3, 4 and 5",
      C: "1 and 2",
      D: "2, 3 and 5",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "During a fully automatic landing, the auto pilot",
    choices: {
      A: "and the auto throttle control the approach at least until the flare",
      B: "and the auto throttle control the approach at least until the roll out",
      C: "and the auto throttle control the approach at least until decision height",
      D: "controls the approach (at least) until the flare, the pilot controls the power",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A semi-automatic landing system disconnects itself automatically",
    choices: {
      A: "at the decision height",
      B: "at approximately 100 ft",
      C: "on ground",
      D: "when going around",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Regarding auto pilot and auto throttle: 1. A/P holds IAS/MACH when climbing in LVL CHG and A/T controls thrust 2. A/P holds altitude in cruise with ALT HOLD, A/T controls IAS/Mach No. 3. A/P holds pitch in descent in V/S mode, A/T controls thrust 4. A/P holds altitude in climb and A/T holds Mach No.",
    choices: {
      A: "1 & 2",
      B: "3 & 4",
      C: "1, 2 & 3",
      D: "2, 3 & 4",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A landing will be considered to be performed in the AUTOMATIC mode when: The combination regrouping all the correct statements is: 1. the auto pilot maintains the airplane on the ILS beam until the decision height is reached then is disengaged automatically 2. the auto throttle maintains a constant speed until the decision height is reached then is disengaged automatically 3. the auto pilot maintains the airplane on the ILS beam until the flare 4. the auto throttle decreases the thrust when the height is approximately 30 ft 5. the flare and the ground roll are performed automatically",
    choices: {
      A: "1 and 4",
      B: "1 and 2",
      C: "2, 3 and 5",
      D: "3, 4 and 5",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An auto land system which can continue to automatically land the aircraft after a single failure is called",
    choices: {
      A: "Fail passive",
      B: "Fail Soft",
      C: "Fail Safe",
      D: "Fail active",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An auto pilot system whereby if one A/P fails cannot carry out an auto land is called fail ¿",
    choices: {
      A: "passive",
      B: "safe",
      C: "operational",
      D: "redundant",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An automatic landing is carried out when the automatic pilot",
    choices: {
      A: "and the auto throttle ensure a correct final approach, at least up to flare out while the humanpilot controls the power",
      B: "ensures a correct final approach, at least up to ground roll while the human pilot controls thepower",
      C: "and the auto throttle ensure a correct final approach at least up to flare out",
      D: "and the auto throttle ensure a correct final approach at least up to ground roll",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The auto pilot disconnects (or the auto land is completed) at",
    choices: {
      A: "100 ft",
      B: "decision height",
      C: "flare",
      D: "roll out",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What happens at 50 ft whilst carrying out an auto landing?",
    choices: {
      A: "Glide slope and localiser disconnect and aircraft continues to land",
      B: "Radio altimeter controls the rate of descent",
      C: "Radio altimeter controls the angle of attack",
      D: "Glide slope disconnects and aircraft continues descent",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A landing is performed automatically when the auto pilot and auto throttle ensure good performance from the final approach",
    choices: {
      A: "until the flare",
      B: "during the landing roll and sometimes until the aircraft comes to a complete stop",
      C: "until reaching decision height",
      D: "until reaching 100 ft height at which point the auto pilot is automatically disconnected",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A landing is considered to be Automatic when: 1. Auto pilot flies the ILS to Decision Height, and then disengages 2. Auto throttle maintains speed until Decision Height and then disengages 3. Auto throttle disengages thrust at 50 ft 4. Auto pilot flies the approach and landing 5. Auto pilot flares the aeroplane to touch down",
    choices: {
      A: "2, 3 & 5",
      B: "1 & 2",
      C: "4 & 5",
      D: "1 & 4",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Among the following functions of an auto pilot, those related to the aeroplane stabilisation are: The combination regrouping all the correct statements is: 1. pitch attitude holding 2. indicated airspeed or Mach number holding 3. horizontal wing holding 4. displayed heading or inertial track holding 5. VOR axis tracking",
    choices: {
      B: "1, 3, 4",
      C: "1, 2, 4",
      D: "1, 3, 4, 5",
    },
    correct: "",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An automatic ILS approach can be flown only",
    choices: {
      A: "within a range of levels of turbulence and no limit for crosswinds",
      B: "within a range of crosswinds and no limit for turbulence",
      C: "within a range of crosswinds and levels of turbulence",
      D: "without limits for crosswind or turbulence",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During a category III automatic approach, the position signals in the vertical plane under 200 ft are based on",
    choices: {
      A: "a radio altimeter",
      B: "an altimeter set to the QFE",
      C: "an altimeter set to the QNH",
      D: "an altimeter set to 1013 hPa",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During an automatic landing, between 50 ft AGL and touch down, the auto pilot maintains",
    choices: {
      A: "a constant flight path angle with reference to the ground",
      B: "a vertical speed depending on the GPS height",
      C: "a constant vertical speed",
      D: "a vertical speed depending on the radio altimeter height",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If, in the event of a failure, the approach, flare and landing can be completed by the remaining part of the automatic system, such an automatic landing system is considered as",
    choices: {
      A: "fail operational",
      B: "fail passive",
      C: "fail soft",
      D: "fail hard",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If, in the event of a failure, there is no significant out-of-trim condition or deviation of flight path or attitude but the landing is not completed automatically, such an automatic landing system is considered as",
    choices: {
      A: "fail operational",
      B: "fail passive",
      C: "fail safe",
      D: "fail redundant",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The initiation of an automatic go-around can be",
    choices: {
      A: "at Vy +/- 5 kt only",
      B: "with no limit of approach airspeeds",
      C: "at 70 kt +/- 5 kt only",
      D: "in a range of approach airspeeds",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The sequence of the automatic landing comprises several phases (from final approach to touch down) actuated by",
    choices: {
      A: "the distance left before the touch down zone",
      B: "the altimeter set to the QNH",
      C: "the radio altimeter",
      D: "the DME (Distance Measuring Equipment) of the ILS (Instrument Landing System)",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When flying level in the cruise the holds height and the holds the speed",
    choices: {
      A: "Autopilot, Autopilot INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "Auto-throttle, Auto-throttle",
      C: "Auto-throttle, Autopilot",
      D: "Autopilot, Auto-throttle",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "At what height during a semi-automatic landing is the auto pilot disengaged?",
    choices: {
      A: "100 ft",
      B: "45 ft",
      C: "Decision height",
      D: "14 ft",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "During a semi-automatic landing",
    choices: {
      A: "the A/P is disengaged at DH having followed the ILS",
      B: "the A/T flies airspeed down to approximately 30 ft and automatically disengages",
      C: "the A/P flies the approach and flare and roll-out",
      D: "the A/T flies approach speed and disengages automatically at DH",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When must a 2 axis auto pilot be fitted in the aircraft?",
    choices: {
      A: "VFR or IFR single pilot",
      B: "Multi-pilot aircraft",
      C: "IFR or Night Single Pilot",
      D: "Aircraft over 5.7 tonnes",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If a Go-Around is initiated from an auto pilot coupled approach: 1. the auto throttle selects GA power as soon as the TOGA switch is pressed 2. the auto pilot carries out the climb 3. the auto pilot retracts flap and landing gear to reduce drag 4. the pilot carries out the procedure 5. the pilot cleans up (retracts flaps and raises gear)",
    choices: {
      A: "1, 2 & 4",
      B: "1, 2 & 5",
      C: "1, 4 & 5",
      D: "1, 2 & 3",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "During the Altitude Acquisition mode",
    choices: {
      A: "The A/P maintains IAS using elevator control",
      B: "The A/T maintains TAS using power",
      C: "The A/T maintains IAS using power",
      D: "The A/P maintains TAS using elevator control",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The yaw damper indicator supplies the pilot with information regarding the",
    choices: {
      A: "yaw damper action only on the ground",
      B: "rudder displacement by the rudder pedals",
      C: "yaw damper action on the rudder",
      D: "rudder position",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The yaw damper, which suppresses Dutch roll",
    choices: {
      A: "controls the rudder, with Mach Number as the input signal",
      B: "controls the ailerons, with Mach Number as the input signal",
      C: "controls the rudder, with the angular rate about the vertical axis as the input signal",
      D: "controls the ailerons, with the angular rate about the vertical axis as the input signal",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The yaw damper affects",
    choices: {
      A: "ailerons only",
      B: "all control surfaces in a co-ordinated way",
      C: "ailerons and rudder",
      D: "rudder only",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The yaw damper system controls",
    choices: {
      A: "the ailerons, with Mach number as the input signal",
      B: "the rudder, with the angular rate about the yaw axis as the input signal",
      C: "the rudder, with Mach number as the input signal",
      D: "the ailerons, with the angular rate about the yaw axis as the input signal",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The Yaw Damper system: The combination regrouping all the correct statements are: 1. counters any wrong pilot action on the rudder pedals 2. counters dutch roll 3. is active only when autopilot is engaged",
    choices: {
      A: "1, 2",
      B: "1, 2, 3",
      C: "2",
      D: "2, 3",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a yaw damper",
    choices: {
      A: "ailerons are moved in proportion to Mach No.",
      B: "ailerons are moved in proportion to rate of angular velocity",
      C: "rudder is moved in proportion to Mach No.",
      D: "rudder is moved in proportion to rate of angular velocity",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The automatic pitch trim: The combination regrouping all the correct statements is: 1. ensures the aeroplane is properly trimmed when the auto pilot is engaged 2. permits the elevator to always be in neutral position with respect to horizontal stabiliser 3. ensures the aeroplane is properly trimmed when the auto pilot is disengaged",
    choices: {
      A: "2, 3",
      B: "1, 3",
      C: "1, 2, 3",
      D: "1, 2",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Which one of the following statements is true with regard to the operation of a Mach trim system",
    choices: {
      A: "It only operates above a pre-determined Mach number",
      B: "It operates to counteract the larger than normal forward movements of the wing centre ofpressure at high subsonic airspeeds",
      C: "it only operates when the autopilot is engaged",
      D: "it operates over the full aircraft speed range",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "The automatic trim is a component of the auto pilot pitch channel. Its function is to",
    choices: {
      A: "transfer a stabilised aeroplane to the pilot during auto pilot disengagement",
      B: "reset the altitude, after engaging (the auto pilot)",
      C: "set the attitude to an instantaneous value before engaging the auto pilot",
      D: "automatically disengage the auto pilot in the case of an excessive pitch up",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "The purpose of Auto Trim function in auto pilot is to",
    choices: {
      A: "control elevator trim tab in order to relieve elevator load",
      B: "help Auto Pilot compensate for crosswind influence",
      C: "tell the pilot when elevator trimming is required",
      D: "trim throttles to obtain smooth engine power variation",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "The purpose of an airplane automatic trim system is to trim out the hinge moment of the",
    choices: {
      A: "elevator and rudder",
      B: "elevator, rudder and ailerons",
      C: "elevator",
      D: "rudder",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "When the auto pilot is engaged; the role of the automatic trim is to",
    choices: {
      A: "relieve the pressure on the control column and return the aircraft in-trim at A.P. disconnect",
      B: "relieve the A.P. servo motor and return the aircraft in-trim at A.P. disconnect",
      C: "react to altitude changes in Altitude Hold mode",
      D: "synchronise the longitudinal loop",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "Mach Trim is a device to compensate for",
    choices: {
      A: "weight reduction resulting from fuel consumption during the cruise",
      B: "the effects of fuel transfer between the main tanks and the tank located in the horizontal tail",
      C: "the effects of temperature variation during a climb or descent at constant Mach",
      D: "backing of the aerodynamic centre at high Mach numbers by moving the elevator to nose up",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "The purpose of the automatic trim is to: The combination regrouping all the correct statements is: 1. reduce to zero the hinge moment of the entire control surface in order to relieve the load on the servo- actuator 2. ensure the aeroplane is properly trimmed when the auto pilot is disengaged 3. maintain the same stability/manoeuvrability trade off within the whole flight envelope",
    choices: {
      A: "1 and 2",
      B: "1, 2, 3",
      C: "1 and 3",
      D: "2 and 3",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "The Mach trim system allows to",
    choices: {
      A: "search for the ideal C.G location by transferring the fuel into the horizontal stabiliser",
      B: "trim the pitch-up tendency at a high Mach number",
      C: "increase the longitudinal static stability of the aircraft by changing the horizontal stabiliseraccording to the Mach number",
      D: "interlock the operation of the stick shaker at the oncoming of the high speed stall",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "Auto-trim is fitted to an auto pilot",
    choices: {
      A: "To provide control about lateral axis",
      B: "To prevent snatching on disengaging A/P",
      C: "To prevent snatching on engaging A/P",
      D: "To correct for Mach tuck",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "The function of auto trim is",
    choices: {
      A: "to synchronise the longitudinal loop",
      B: "to relieve forces on the auto pilot servo motor prior to hand over",
      C: "to react to altitude changes in ALT HOLD mode",
      D: "to relieve forces on the control column before hand over",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "The Mach Trim system",
    choices: {
      A: "compensates for the rearward movement of the CP due to shockwave formation",
      B: "compensates for the forward movement of the CP due to shockwave formation",
      C: "controls the aircraft in roll",
      D: "is operational at low subsonic speeds",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: 'What does the Mach trim system use to prevent "Mach Tuck"?',
    choices: {
      A: "elevator",
      B: "elevator/rudder",
      C: "rudder",
      D: "elevator/aileron/rudder",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "The two main sources of information used to calculate turbo jet thrust are the",
    choices: {
      A: "fan rotation speed (or N1) or the total pressure at the high pressure compressor outlet",
      B: "high pressure turbine rotation speed or the EPF (Engine Pressure Ratio)",
      C: "fan rotation speed (or N1) or the EPR (Engine Pressure Ratio)",
      D: "fan rotation speed (or N1) or the total pressure at the low pressure turbine outlet",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "An aircraft is equipped with an auto pilot and an auto throttle. When the altitude hold mode (ALT HOLD) is active",
    choices: {
      A: "the indicated airspeed (IAS) is maintained constant by the auto pilot by means of elevator",
      B: "the true airspeed (TAS) is maintained constant by the auto pilot by means of elevator",
      C: "the true airspeed (TAS) is maintained constant by the auto throttle system",
      D: "the indicated airspeed (IAS) is maintained constant by the auto throttle system",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "What are the functions of FADEC? 1. engine limitation protection 2. automatic engine starting sequence 3. manual engine starting sequence 4. power management",
    choices: {
      A: "1, 2",
      B: "4 only",
      C: "1, 4",
      D: "1, 2, 3, 4",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aeroplane is in a steady climb. The auto throttle maintains a constant Mach number. If the total temperature remains constant, the calibrated airspeed",
    choices: {
      A: "increases",
      B: "decreases",
      C: "decreases if the static temperature is lower than the standard temperature, increases if higher",
      D: "remains constant",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "The purpose of Auto Throttle is",
    choices: {
      A: "to deactivate manual throttles and transfer engine control to Auto Pilot",
      B: "to synchronise engines to avoid yawing",
      C: "to maintain constant engine power or airplane speed",
      D: "automatic shut down of one engine at too high temperature",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "Auto throttle engaged mode can be checked by the pilot, using",
    choices: {
      A: "primary flight display",
      B: "thrust control computer",
      C: "position of throttles",
      D: "navigation display",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "The auto throttle is set to climb at a constant mach number. If the temperature does not change, what happens to the CAS?",
    choices: {
      A: "Increases",
      B: "Decreases",
      C: "Increases, but only if the outside air temperature decreases",
      D: "Stays the same",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "An aeroplane is in steady climb. The auto throttle maintains a constant calibrated airspeed. If the total temperature remains constant, the Mach number",
    choices: {
      A: "increases INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "decreases",
      C: "remains constant",
      D: "decreases if the static temperature is lower than the standard temperature",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "The automatic power control system (auto throttle) of a transport airplane has the following mode(s): The combination regrouping all the correct statements is: 1. capture an holding of speeds 2. capture and holding of Mach number 3. capture and holding of flight angle or attack 4. capture and holding of N1 or EPR (Engine Power Ratio) 5. capture and holding of flight paths",
    choices: {
      A: "1, 2, 3, 5",
      B: "1, 2, 4",
      C: "2, 4",
      D: "1, 4, 5",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "Auto throttle can hold which of the following: 1. IAS 2. Mach No 3. Altitude 4. N1/EPR 5. VOR capture 6. Vertical profile",
    choices: {
      A: "1, 2, 3",
      B: "1, 2, 4",
      C: "1, 2, 6",
      D: "1, 3, 5",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "Auto throttle can hold 1. speed 2. flight path 3. altitude 4. Mach 5. EPR/N1 6. Attitude",
    choices: {
      A: "1, 2, 6",
      B: "1, 4, 5",
      C: "1, 2, 3, 4",
      D: "3, 4, 5",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "An airplane is in steady descent. The auto throttle maintains a constant Mach number. If the total temperature remains constant, the calibrated airspeed",
    choices: {
      A: "increases",
      B: "decreases",
      C: "remains constant",
      D: "decreases if the static temperature is lower than the standard temperature, increases if above",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "An aeroplane is in steady cruise at flight level 270. The auto throttle maintains a constant calibrated airspeed, if the total temperature increases, the Mach number",
    choices: {
      A: "decreases",
      B: "increases",
      C: "remains constant",
      D: "decreases if the outside temperature is higher than the standard temperature, increases if lower",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "An airplane is in steady cruise at flight level 290. The auto throttle maintains a constant Mach number. If the total temperature increases, the calibrated airspeed",
    choices: {
      A: "increases",
      B: "remains constant",
      C: "decreases",
      D: "increases if the static temperature is higher than the standard temperature, decreases if lower",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "The auto throttle system is: The combination regrouping all the correct statements is: 1. able to catch and maintain the N1 RPM 2. able to catch and maintain the N2 RPM 3. able to catch and maintain an airplane indicated airspeed (IAS) 4. always engaged automatically at the same time as the autopilot",
    choices: {
      A: "1 and 3",
      B: "2 and 3",
      C: "1, 3 and 4",
      D: "1 and 4",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "At the missed approach point the TOGA switch on the throttles is depressed. Which of the following statements are correct for an auto land approach? 1. Pilot selects maximum power 2. Auto throttle selects GA power 3. Aircraft automatically cleans up 4. Auto pilot flies the GA manoeuvre 5. Pilot flies the GA manoeuvre",
    choices: {
      A: "2, 5",
      B: "1, 5",
      C: "1, 4",
      D: "2, 4",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "An aeroplane is in steady cruise at flight level 270. The auto throttle maintains a constant calibrated airspeed. If the total temperature decreases, the Mach number",
    choices: {
      A: "increases if the outside temperature is higher than the standard temperature, decreases iflower",
      B: "increases",
      C: "decreases",
      D: "remains constant",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "The calibrated airspeed (CAS) or Mach holding mode is carried out by: The combination regrouping all the correct statements is: 1. the autopilot pitch channel in the climb mode at a constant calibrated airspeed (CAS) or Mach number 2. the auto throttles in the climb mode at a constant calibrated airspeed (CAS) or Mach Number 3. the autopilot pitch channel in the altitude or glide path holding mode 4. the auto throttles in the altitude or glide path holding mode",
    choices: {
      A: "1 and 3",
      B: "2 and 4",
      C: "1 and 4",
      D: "2 and 3",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "Where can the pilot look to see the auto throttle engaged mode?",
    choices: {
      A: "PFD",
      B: "overhead panel",
      C: "throttle control panel",
      D: "EICAS",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "An aeroplane is in steady descent. The auto throttle maintains a constant calibrated airspeed. If the total temperature remains constant, the Mach number.",
    choices: {
      A: "increases",
      B: "decreases",
      C: "remains constant",
      D: "increases if the static temperature is lower than the standard temperature, decreases if higher",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "An airplane is in steady cruise at flight level 290. The auto throttle maintains a constant Mach number. If the total temperature decreases, the calibrated airspeed",
    choices: {
      A: "decreases if the outside temperature is lower than the standard temperature, increases ifhigher",
      B: "increases",
      C: "decreases",
      D: "remains constant",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "In order to know in which mode the auto throttles are engaged, the crew will check the",
    choices: {
      A: "SFD (secondary flight display)",
      B: "PFD (primary flight display)",
      C: "TMD (thrust mode display)",
      D: "MCP (mode control panel)",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "During the ground run take-off phase, the auto-throttles allow to",
    choices: {
      A: "hold IAS",
      B: "hold N1",
      C: "maintain V2 under 1,500 ft",
      D: "hold and maintain the Mach number",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "The auto throttles enables to hold: The combination regrouping all the correct statements is: 1. a true airspeed 2. a Mach number 3. an indicated airspeed 4. a N1 thrust",
    choices: {
      A: "1, 2, 3",
      B: "1, 2, 3, 4",
      C: "2, 3, 4",
      D: "1, 2, 4",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "Where can the pilot look to see the thrust limit mode?",
    choices: {
      A: "PFD",
      B: "Overhead panel",
      C: "Throttle control panel",
      D: "Primary EICAS",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Alarms are standardised and follow a code of colours. Those requiring action but not immediately, are signalled by the colour",
    choices: {
      A: "red",
      B: "amber",
      C: "green",
      D: "flashing red",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "Concerning the flight warning system (FWS), advisory messages may be",
    choices: {
      A: "any colour except amber",
      B: "red",
      C: "any colour except green",
      D: "any colour except red, and preferably not amber",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "Concerning the flight warning system (FWS), caution messages",
    choices: {
      A: "are the highest priority alert messages",
      B: "are the next highest priority alert messages after warning messages",
      C: "are inhibited by advisory messages",
      D: "indicate that immediate recognition and corrective or compensatory action by the crew isrequired",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "Concerning the flight warning system (FWS), if aural signals are provided, the signal for",
    choices: {
      A: "an advisory should always take priority over that for a caution",
      B: "a caution should always take priority over that for a warning",
      C: "a warning should always take priority over that for a caution",
      D: "an advisory should always take priority over that for a warning",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "Concerning the flight warning system (FWS), warning messages",
    choices: {
      A: "are next highest priority alert messages after warning messages",
      B: "are highest priority alert messages",
      C: "are inhibited by caution messages",
      D: "indicate the subsequent crew action may be required",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "If crew awareness is required and subsequent crew action may be required, the flight warning system (FWS) generates",
    choices: {
      A: "an advisory message",
      B: "a warning message",
      C: "a caution message",
      D: "a call message",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "If immediate crew awareness is required and subsequent crew action will be required, the flight warning system (FWS) generates",
    choices: {
      A: "an urgency message",
      B: "a warning message",
      C: "an advisory message",
      D: "a caution message",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "If immediate recognition and corrective or compensatory action by the crew is required, the flight warning system (FWS) generates",
    choices: {
      A: "a caution message",
      B: "a warning message",
      C: "an advisory message",
      D: "a distress message",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "If warning, caution, or advisory lights are installed in the cockpit, they must, unless otherwise approved by the Authority, be amber for",
    choices: {
      A: "warning lights",
      B: "caution lights INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "advisory lights",
      D: "other urgency messages",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "If warning, caution, or advisory lights are installed in the cockpit, they must, unless otherwise approved by the Authority, be green, for",
    choices: {
      A: "safe operation lights",
      B: "warning lights",
      C: "caution lights",
      D: "advisory lights",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "If warning, caution, or advisory lights are installed in the cockpit, they must, unless otherwise approved by the Authority, be red for",
    choices: {
      A: "advisory lights",
      B: "caution lights",
      C: "warning lights",
      D: "other distress messages",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "Lights indicating a hazard which may require immediate corrective action must be",
    choices: {
      A: "red",
      B: "amber",
      C: "yellow",
      D: "magenta",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "Lights indicating the possible need for future corrective action must be",
    choices: {
      A: "red",
      B: "amber",
      C: "red and white striped",
      D: "magenta INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The flight warning system (FWS) generates a caution message if",
    choices: {
      A: "crew awareness is required and corrective or compensatory action by the crew is immediatelyrequired",
      B: "immediate recognition and corrective or compensatory action by the crew is required",
      C: "crew awareness is required and subsequent crew action may be required",
      D: "immediate crew awareness is required and subsequent crew action will be required",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "The flight warning system (FWS) generates a caution message if",
    choices: {
      A: "immediate crew awareness is required and subsequent crew action will be required",
      B: "immediate recognition and corrective or compensatory action by the crew is required",
      C: "crew awareness is required and subsequent crew action may be required",
      D: "immediate crew awareness is required and corrective or compensatory action by the crew may berequired",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The flight warning system (FWS) generates an advisory message if",
    choices: {
      A: "immediate crew awareness is required and subsequent crew action will be required",
      B: "immediate recognition and corrective or compensatory action by the crew is required",
      C: "crew awareness is required and subsequent crew action may be required",
      D: "crew awareness is required and corrective or compensatory action by the crew is required",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The flight warning system (FWS): The combination regrouping all the correct statements is: 1. draws the attention of the crew to the existence of an abnormal condition 2. gives indications to the crew to identify an abnormal condition 3. transmits automatically to ATC urgency messages 4. can not generate a false warning 5. prioritises warnings over alerts",
    choices: {
      A: "2, 4, 5 INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "1, 2, 4",
      C: "1, 4",
      D: "1, 2, 5",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The flight warning system (FWS): The combination regrouping all the correct statements is: 1. increases the situation awareness of the crew 2. transmits automatically to ATC distress messages 3. gives suitable indications to the crew of the action necessary to avoid impending danger 4. prioritises warnings over alerts 5. prioritises alerts over warnings",
    choices: {
      A: "1, 3, 4",
      B: "1, 3, 5",
      C: "2, 3, 4, 5",
      D: "1, 4, 5",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "A transport airplane has to be equipped with an altitude warning device. This system will warn the crew about: The combination regrouping the correct statements is: 1. getting close to the pre-selected altitude, during both climb and descent 2. getting close to the pre-selected altitude, during climb only 3. the loss of altitude during take-off or missed approach 4. a wrong landing configuration 5. a variation higher or lower than a pre-selected altitude",
    choices: {
      A: "2",
      B: "3, 4",
      C: "1, 5",
      D: "1, 3, 4",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "An altitude alerting system must be capable of alerting the pilot about: 1. Approaching selected altitude 2. Excessive deviation from selected altitude 3. Excessive vertical speed 4. Excessive terrain closure 5. Abnormal gear/flap combination",
    choices: {
      A: "1, 2",
      B: "1, 2, 3, 4",
      C: "1, 2, 3, 4, 5",
      D: "1, 2, 3",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      'An "altitude warning system" must at least warn the crew: The combination regrouping all the correct statements is: 1. when approaching the pre-selected altitude 2. when the airplane is approaching the ground too fast 3. in case of a given deviation above or below the pre-selected altitude (at least by an aural warning) 4. in case of excessive vertical speed 5. when approaching the ground with the gear retracted',
    choices: {
      A: "2, 4, 5",
      B: "1, 2, 3, 4, 5",
      C: "1, 3",
      D: "1, 3, 4",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The purpose of the altitude alert system is to generate a visual and aural warning to the pilot when the",
    choices: {
      A: "airplane altitude differs from a selected altitude",
      B: "airplane altitude is equal to the decision altitude",
      C: "proximity to the ground becomes dangerous",
      D: "altimeter setting differs from the standard setting above the transition altitude",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "The altitude alerting system",
    choices: {
      A: "alerts the flight crew upon approaching a pre-selected altitude",
      B: "generates a signal once the aircraft is steady at the pre-selected altitude INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "alerts the flight crew in case of ground proximity",
      D: "alerts the flight crew in case of an auto pilot disengagement",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The functions of the altitude alerting system is to alert the flight crew: The combination regrouping all the correct statements is: 1. upon approaching a pre-selected altitude 2. upon approaching a pre-selected altitude, during climb only 3. of a loss of altitude during take-off or missed approach 4. of an excessive vertical speed 5. of an excessive deviation from selected altitude",
    choices: {
      A: "3, 4",
      B: "2, 5",
      C: "1, 5",
      D: "1, 3, 4",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "A ground proximity warning system (GPWS), when mandatorily installed on board an aircraft, must in all cases generate",
    choices: {
      A: "a sound and visual alarm",
      B: "a sound alarm or a visual alarm",
      C: "at least one sound alarm to which a visual alarm can be added",
      D: "a visual alarm to which a sound alarm can be",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The inputs to the GPS (Ground Proximity Warning System), are: The combination of correct statement is: 1. Air Data Computer (Mach number and Vertical Speed) 2. Radio Altimeter 3. NAV/ILS (Glide Slope) 4. NAV/VOR 5. Flap (position) 6. Angle of Attack 7. Landing Gear (position)",
    choices: {
      A: "1, 2, 3, 5, 7",
      B: "2, 3, 4, 5, 7 INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "1, 2, 5, 6, 7",
      D: "1, 3, 5, 6, 7",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "If the GPWS (Ground Proximity Warning System) activates, and alerts the pilot with an aural warning DON'T SINK (two times), it is because",
    choices: {
      A: "during take-off or missed approach manoeuvre, the aircraft has started to lose altitude",
      B: "the aircraft experiences an unexpected proximity to the terrain, with landing gear retracted",
      C: "at too low altitude, the aircraft has an excessive rate of descent",
      D: "the aircraft experiences an unexpected proximity to terrain, without landing flap selected",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The Ground Proximity Warning System 9GPWS) is a system working according to a height span ranging from",
    choices: {
      A: "the ground to 1000 ft",
      B: "50 ft to 2500 ft",
      C: "30 ft to 5000 ft",
      D: "the ground to 500 ft",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The GPWS (Ground Proximity Warning System) is active for a height range from",
    choices: {
      A: "0 ft to 2500 ft measured by the radio altimeter",
      B: "50 ft to 2500 ft measured by the radio altimeter",
      C: "0 ft to 5000 ft measured by the radio altimeter",
      D: "50 ft to 5000 ft measured by the radio altimeter",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      ". The GPWS calculator receives the following signals: The combination regrouping all the correct statements is: 1. vertical speed 2. radio altimeter height 3. pressure altitude 4. glide path deviation 5. gear and flaps position 6. angle of attack",
    choices: {
      A: "2, 3, 4, 6",
      B: "1, 3, 4, 5, 6",
      C: "1, 2, 5, 6",
      D: "1, 2, 4, 5",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Which of the following are valid GPWS modes? 1. Excessive sink rate 2. Altitude loss after T/O or go-around 3. Excessive Glideslope deviation 4. High climb rate 5. Flaps in incorrect position 6. High altitude descent 7. Stall warning",
    choices: {
      A: "All 7",
      B: "1, 2, 3, 5",
      C: "1, 2, 3",
      D: "1, 3, 5, 7",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The Ground Proximity Warning System (GPWS) generates the following sound signal or signals when the aircraft is sinking after a take-off or a go-around",
    choices: {
      A: "DON'T SINK always followed by WHOOP WHOOP PULL UP",
      B: "WHOOP WHOOP PULL UP repetitive only",
      C: "DON'T SINK repetitive only",
      D: "DON'T SINK followed by WHOOP WHOOP PULL UP if the sink rate overshoots a second level",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The requirement to carry a GPWS (Ground proximity Warning System) concerns aeroplanes which are, depending on their age, weight and passenger capacity: The combination regrouping all the correct statements is: 1. turbo prop powered 2. piston powered 3. jet powered",
    choices: {
      A: "3",
      B: "1",
      C: "1, 2, 3",
      D: "1, 3",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The GPWS calculator is able to operate in the following modes: The combination regrouping all the correct statements is: 1. excessive descent rate 2. excessive rate of terrain closure 3. excessive angle of attack 4. too high descent attitude 5. loss of altitude after take-off 6. abnormal gear/flaps configuration 7. excessive glide path deviation",
    choices: {
      A: "1, 2, 5, 6, 7",
      B: "1, 2, 4, 6, 7",
      C: "3, 4, 5, 6",
      D: "2, 3, 5, 7",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The GPWS (Ground Proximity Warning System) releases a warning in the following cases: The combination regrouping all the correct statements is: 1. excessive rate of descent 2. excessive ground proximity rate 3. loss of altitude after take-off or go-around 4. abnormal gear/flaps configuration 5. excessive deviation under the glide path 6. abnormal air brakes configuration",
    choices: {
      A: "1, 2, 3, 4, 5, 6",
      B: "2, 4, 5, 6",
      C: "1, 2, 3, 4, 5 INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      D: "3, 4, 5, 6",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "If an aircraft is flying (with flaps and landing gear retracted) in proximity to terrain and its GPWS (Ground Proximity Warning System) get activated, because it is detecting that the aeroplane has an excessive rate of descent, the system provides the following aural warning signals",
    choices: {
      A: "DON'T SINK, DON'T SINK",
      B: "SINK RATE, SINK RATE.... followed by....WHOOP WHOOP PULL UP ..(twice)",
      C: "TERRAIN, TERRAIN ... followed by...WHOOP WHOOP PULL UP... (twice)",
      D: "TOO LOW, TERRAIN... (twice) followed by... TOO LOW GEAR ... (twice)",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "A Ground Proximity Warning System (GPWS) generates automatically a distinct warning to the flight crew with aural and/or light warning signals in the case of: The combination regrouping all the correct statements is: 1. an excessive rate of descent with respect to terrain 2. a dangerous proximity to the ground 3. a loss of altitude following take-off or go-around 4. an abnormal flight attitude 5. an abnormal landing configuration 6. an abnormal deviation below ILS glide slope",
    choices: {
      A: "1, 2 and 4",
      B: "1, 2, 3, 4 and 5",
      C: "1, 2, 3, 5 and 6",
      D: "3, 4, 5 and 6",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The operation of the GPWS (Ground Proximity Warning System) is governed by laws taking the aircraft height into account as well as: The combination of correct statements is: 1. the descent rate 2. the climb rate 3. the aircraft configuration 4. the selected engine rpm",
    choices: {
      A: "1, 3",
      B: "1, 2, 3",
      C: "1, 3, 4",
      D: "1, 2, 4",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The GPWS CPU (Central Processing Unit) is able to detect: The combination regrouping all the correct statements is: 1. excessive descent rate 2. excessive rate of terrain closure 3. excessive angle of attack 4. too high descent attitude 5. loss of altitude after take-off 6. abnormal gear/flaps configuration 7. excessive bank angle",
    choices: {
      A: "2, 3, 5, 7",
      B: "1, 2, 4, 6, 7",
      C: "3, 4, 5, 6",
      D: "1, 2, 5, 6, 7",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The GPWS warns the crew in case of: The combination regrouping all the correct statements is: 1. an altitude at a lower level than the one shown in the flight plan entered in the FMS 2. a dangerous ground proximity 3. a loss of altitude during take-off or missed approach 4. a wrong landing configuration 5. excessive glide path deviation",
    choices: {
      A: "2, 3, 4, 5",
      B: "2",
      C: "1, 3, 4",
      D: "2, 5 INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The inputs to the GPWS (Ground Proximity Warning System) are: The combination regrouping all the correct statements is: 1. Air Data Computer - (Mach Number and Vertical Speed) 2. Radio Altimeter 3. NAV/ILS (Glide Slope) 4. NAV/VOR 5. Flap (position) 6. Weight of the aircraft 7. Landing Gear (position)",
    choices: {
      A: "2, 5, 6",
      B: "1, 2, 3, 5, 7",
      C: "2, 4, 5, 6",
      D: "1, 4, 7",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "When required, the ground proximity warning system (GPWS) must automatically provide distinctive warning to the flight crew of: The combination regrouping all the correct statements is: 1. impeding stall 2. excessive sink rate 3. altitude loss after take-off or go-around 4. incorrect landing configuration 5. excessive rate of terrain closure 6. excessive bank angle",
    choices: {
      A: "1, 4, 5, 6",
      B: "2, 3, 4, 5, 6",
      C: "1, 2, 4, 5",
      D: "3, 5, 6",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "TCAS 2 (Traffic Collision Avoidance System) uses for its operation",
    choices: {
      A: "both the replies from the transponders of other aircraft and the ground based radar echoes",
      B: "the echoes of collision avoidance radar system especially installed on board",
      C: "the echoes from the ground air traffic control radar system",
      D: "the replies from the transponders of other aircraft",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "On the display of a TCAS 2 (Traffic alert and Collision Avoidance System), the traffic being the cause of a resolution advisory (RA) is represented by",
    choices: {
      A: "a white or cyan empty lozenge",
      B: "a red full square",
      C: "an amber solid circle",
      D: "a white or cyan solid lozenge",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "In the event of a conflict, the TCAS (Traffic Collision Avoidance System) will give information such as",
    choices: {
      A: "climb/descent",
      B: "turn left/turn right",
      C: "too low terrain",
      D: "glide slope",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 022-17)On the following display, the is indicated by a red square",
    choices: {
      A: "RA intruder",
      B: "TA intruder",
      C: "proximate traffic",
      D: "other traffic",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "What is the correct response to a TCAS II RA?",
    choices: {
      A: "Immediately follow the climb or descent commands INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "Request permission to manoeuvre from ATC",
      C: "Follow ATC instructions as these override TCAS RA¿s",
      D: "Turn 90o and immediately follow the climb or descent commands",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 022-16)Regarding the RA on the following EADI, the intruder is",
    choices: {
      A: "there is no RA at this time",
      B: "below your aircraft and descending at 1100 feet per minute or more",
      C: "1100 ft above your aircraft and climbing at 500 feet per minute or more",
      D: "300 feet above your aircraft and descending at 500 ft/min or more",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The TCAS II data display devices can be in the form of: The combination regrouping all the correct statements is: 1. a specific dedicated screen 2. a screen combined with the weather radar 3. a variometer represented on a liquid crystal screen which allows the display of Traffic Advisory (TA) and Resolution Advisory (RA) 4. an EFIS (Electronic Flight Instrument System) screen",
    choices: {
      A: "1, 2 and 3",
      B: "1, 2, 3 and 4",
      C: "3 and 4",
      D: "1 and 3",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "A TCAS II (Traffic Collision Avoidance System) provides",
    choices: {
      A: "the intruder relative position and possibly an indication of a collision avoidance manoeuvrewithin both the vertical and horizontal planes",
      B: "a simply intruding airplane proximity warning",
      C: "the intruder relative position and possibly an indication of a collision avoidance manoeuvrewithin the vertical plane only",
      D: "the intruder relative position and possibly an indication of a collision avoidance manoeuvrewithin the horizontal plane only",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "A close traffic advisory is displayed on the display device of the TCAS 2 (Traffic Collision Avoidance System) by",
    choices: {
      A: "a blue or white empty lozenge",
      B: "an orange full circle",
      C: "a blue or white full lozenge",
      D: "a red full square",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 022-14)The relative altitude of the TA intruder is and the TA intruder is",
    choices: {
      A: "1100 ft above your airplane, climbing at a vertical speed of at least 1000 ft/min",
      B: "500 ft below your airplane, descending at a vertical speed of at least 500 ft/min",
      C: "1100 ft above your airplane, climbing at a vertical speed of at least 500 ft/min",
      D: "above your airplane, climbing at a vertical speed of 1100 ft/min",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "A resolution advisory is represented on the display system of the TCAS 2 by a",
    choices: {
      A: "blue or white full lozenge",
      B: "blue or white empty lozenge",
      C: "red full circle",
      D: "red full square",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The TCAS 2 (Traffic Collision Avoidance System) provides: The combination regrouping all the correct statements is: 1. traffic information (TA: Traffic Advisory) 2. horizontal resolution (RA: Resolution Advisory) 3. vertical resolution (RA: Resolution Advisory) 4. ground proximity warning",
    choices: {
      A: "1, 2, 3, 4",
      B: "1, 2",
      C: "1, 2, 3",
      D: "1, 3",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 022-16)On the following display, the is indicated by a white empty diamond.",
    choices: {
      A: "RA intruder",
      B: "other intruder",
      C: "TA intruder",
      D: "proximate intruder",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "When the intruding aircraft is equipped with a transponder without altitude reporting capability, the TCAS (Traffic Collision Avoidance System) issues a",
    choices: {
      A: "traffic advisory and vertical resolution advisory",
      B: "traffic advisory only",
      C: "traffic advisory and horizontal resolution advisory",
      D: "traffic advisory, vertical and horizontal resolution advisory",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The TCAS 1 (Traffic Collision Avoidance System) provides: The combination regrouping all the correct statements is: 1. traffic information 2. horizontal resolution (RA: Resolution Advisory) 3. Vertical resolution (RA: Resolution Advisory) 4. Ground proximity warning",
    choices: {
      A: "1",
      B: "1, 2",
      C: "1, 2, 3",
      D: "1, 2, 3, 4",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "An intruding traffic advisory is represented on the display system of the TCAS 2 (Traffic Collision Avoidance System) by displaying",
    choices: {
      A: "a red full square",
      B: "a blue or white empty lozenge",
      C: "a blue or white full lozenge",
      D: "a yellow full circle",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 022-18)On the following display, the is indicated by a white filled diamond",
    choices: {
      A: "RA intruder",
      B: "TA intruder",
      C: "other intruder",
      D: "proximate intruder",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The TCAS (Traffic Collision Avoidance System) computer receives information: The combination regrouping all the correct statements is: 1. about the pressure altitude through the mode S transponder 2. from the radio-altimeter 3. specific to the airplane configuration 4. from the inertial units",
    choices: {
      A: "1, 2, 3, 4",
      B: "1, 2, 3",
      C: "1, 2, 4",
      D: "1, 2",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "When the intruding aircraft is equipped with a serviceable mode C transponder, the TCAS II (Traffic Collision Avoidance System) generates a",
    choices: {
      A: "traffic advisory and horizontal resolution advisory",
      B: "traffic advisory and vertical resolution advisory",
      C: "traffic advisory only",
      D: "traffic advisory, vertical and horizontal resolution advisory",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 022-14)On the following display, the is indicated by a yellow circle",
    choices: {
      A: "RA intruder",
      B: "TA intruder",
      C: "proximate intruder",
      D: "other intruder",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The TCAS (Traffic Collision Avoidance System) is a proximity alarm system which detects a traffic when the conflicting traffic is equipped with a",
    choices: {
      A: "SELCAL system",
      B: "serviceable weather radar",
      C: "serviceable SSR transponder",
      D: "DME system",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The TCAS (Traffic Collision Avoidance System) gives avoidance resolutions",
    choices: {
      A: "only in the horizontal plane",
      B: "in horizontal and vertical planes",
      C: "only in the vertical plane",
      D: "based on speed control",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "Concerning the TCAS (Traffic Collision Avoidance System)",
    choices: {
      A: "In one of the system modes, the warning: TOO LOW TERRAIN is generated",
      B: "In one of the system modes, the warning: PULL UP is generated",
      C: "No protection is available against aircraft not equipped with a serviceable SSR transponder",
      D: "Resolution Advisory (RA) must not be followed without obtaining a clearance from ATC",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "On a TCAS 2 (Traffic Collision Avoidance System) the preventive resolution advisory (RA) is a resolution advisory",
    choices: {
      A: "asking the pilot to modify the heading of his aircraft",
      B: "asking the pilot to modify the speed of his aircraft",
      C: "asking the pilot to modify effectively the vertical speed of his aircraft",
      D: "that advises the pilot to avoid certain deviations from the current vertical rate but does notrequire any change to be made to that rate",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The principle of the TCAS (Traffic Collision Avoidance Systems) is based on the use of",
    choices: {
      A: "FMS (Flight Management System)",
      B: "transponders fitted in the aircraft",
      C: "air traffic control radar systems",
      D: "airborne weather radar system",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "On a TCAS 2 (Traffic Collision Avoidance System), a corrective resolution advisory (RA) is a resolution advisory",
    choices: {
      A: "which does not require any action from the pilot but on the contrary asks him not to modify hiscurrent vertical speed rate",
      B: "asking the pilot to modify the heading of his aircraft",
      C: "asking the pilot to modify the speed of his aircraft",
      D: "asking the pilot to modify effectively the vertical speed of his aircraft",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The use of TCAS (Traffic Collision Avoidance System) for avoiding an aircraft in flight is now general. TCAS uses for its operation",
    choices: {
      A: "both the replies from the transponders of other aircraft and the ground based radar echoes",
      B: "the replies from the transponders of other aircraft",
      C: "the echoes from the ground air traffic control radar system",
      D: "the echoes of collision avoidance radar system especially installed on board",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "A TCAS II generates a resolution advisory (RA) when",
    choices: {
      A: "the intruder becomes other traffic",
      B: "B - a potential collision threat exists",
      C: 'C - the intruder becomes "proximate traffic"',
      D: "D - a serious collision threat exists",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "A TCAS II generates a traffic advisory (TA) when",
    choices: {
      A: "the intruder becomes other traffic INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      B: "a potential collision threat exists",
      C: "the intruder becomes a proximate traffic",
      D: "a serious collision threat exists",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Concerning the TCAS II: The combination regrouping all the correct statements is: 1. Neither advisory nor traffic display is provided for aircraft that do not have an operating transponder 2. TCAS 2 operation is independent of ground based air traffic control 3. TCAS 2 operates on the secondary radar principle",
    choices: {
      A: "1, 2",
      B: "1, 2, 3",
      C: "1, 3",
      D: "2, 3",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "In the event of a conflict, the TCAS 2 (Traffic Collision alert and Avoidance System) presents warnings to the crew such as",
    choices: {
      A: "Too low terrain",
      B: "Turn left or Turn right",
      C: "Climb or Descent",
      D: "Glide Slope",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "On a TCAS 2 (Traffic Collision Avoidance System), a preventative resolution advisory",
    choices: {
      A: "asks the pilot to modify effectively the vertical speed of his aircraft",
      B: "advises the pilot to keep the vertical speed within given limits",
      C: "asks the pilot to modify the heading of his aircraft",
      D: "asks the pilot to modify the speed of his aircraft",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "On the display of a TCAS 2 (Traffic alert and Collision Avoidance System), a traffic advisory (TA) is represented by",
    choices: {
      A: "an amber solid circle",
      B: "a white or cyan empty lozenge",
      C: "a white or cyan solid lozenge",
      D: "an amber solid circle",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "On the display of a TCAS II (Traffic alert and Collision Avoidance System), a proximate traffic is represented by",
    choices: {
      A: "a red full square",
      B: "a white or cyan empty lozenge",
      C: "a white or cyan solid lozenge",
      D: "an amber solid circle",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      ". The main function(s) of a TCAS is to: The combination regrouping all the correct statements is: 1. alert the crew to ground proximity 2. alert the crew to possible conflicting traffic 3. provide terrain alerting and display 4. automatically resolve conflict when auto pilot engaged",
    choices: {
      A: "2",
      B: "2, 4",
      C: "1, 3",
      D: "1, 2, 3, 4",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The TCAS (Traffic Collision Avoidance System) computer receives information: The combination regrouping all the correct statements is: 1. about the aeroplane true airspeed 2. about the aeroplane configuration 3. about the pressure altitude through the mode C transponder 4. from the radio altimeter",
    choices: {
      A: "1, 2, 3",
      B: "2, 3, 4",
      C: "1, 2, 4",
      D: "1, 3, 4 INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "The TCAS II has inputs from the radio altimeter in order to",
    choices: {
      A: "determine the relative height of the intruder",
      B: "stop the TCAS operation below 2500 AGL",
      C: "gradually inhibit the resolution advisories (RAs) when getting closer to the ground",
      D: "to alert the crew from a dangerous proximity of the ground",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "The upper antenna of the TCAS II is",
    choices: {
      A: "omni directional because it is merged with the transponder antenna",
      B: "directional because it is merged with the transponder antenna",
      C: "omni directional to improve the surveillance of intruders",
      D: "directional to improve the surveillance of intruders",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "When the TCAS 2 (Traffic alert and Collision Avoidance System) generates a Resolution Advisory (RA), the associated intruder appears on TCAS display as a",
    choices: {
      A: "solid amber circle",
      B: "solid red square",
      C: "solid red circle",
      D: "solid amber square",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Your aircraft and an intruding aircraft both are TCAS (Traffic alert and Collision Avoidance System) equipped. Your TCAS determines the bearing of the intruding aircraft by",
    choices: {
      A: "comparing the GPS positions of the two aircraft",
      B: "using the bearing function of the on-board weather radar",
      C: "using a specific directional antenna INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      D: "measuring the time lapse between the transmission of an interrogation signal and the receptionof a reply signal",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Your aircraft and an intruding aircraft both are TCAS 2 (Traffic alert and Collision Avoidance System) equipped. Your TCAS determines the range of the intruding aircraft by",
    choices: {
      A: "measuring the time lapse between the transmission of an interrogation signal and the receptionof a reply signal from the ground station",
      B: "measuring the time lapse between the transmission of an interrogation signal and the receptionof a reply signal from the transponder of the intruder",
      C: "using the range function of the on-board weather radar",
      D: "comparing the GPS positions of the two aircraft",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Your aircraft and an intruding aircraft both are TCAS II equipped. If the transponder of the intruder is switched off or unserviceable",
    choices: {
      A: "the intruding aircraft is invisible to your TCAS equipment",
      B: "the intruding aircraft remains visible to your TCAS equipment, but only TAs (traffic advisories)can be generated",
      C: "the intruding aircraft remains visible to your TCAS equipment, but only RAs (resolutionadvisories) can be generated",
      D: "the information available to your TCAS equipment is two dimensional only",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Your aircraft and an intruding traffic are both TCAS II equipped. Your TCAS can generate",
    choices: {
      A: "traffic advisories co-ordinated with the ATC instructions",
      B: "co-ordinated traffic advisories",
      C: "resolution advisories co-ordinated with the ATC instructions",
      D: "co-ordinated and complementary resolution advisories",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Your aircraft and an intruding traffic are both TCAS II equipped. Your TCAS",
    choices: {
      A: "can generate co-ordinated resolution advisories",
      B: "can generate co-ordinated resolution advisories by interrogating the radar ground station INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "can generate co-ordinated resolution advisories by activating the on-board radar system",
      D: "cannot generate co-ordinated resolution advisories",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Your aircraft and an intruding traffic are both TCAS II equipped. The information available to your TCAS equipment is",
    choices: {
      A: "two dimensional only: avoidance manoeuvres between both aircraft cannot be co-ordinated",
      B: "three dimensional: avoidance manoeuvres between both aircraft cannot be co-ordinated",
      C: "two dimensional: your TCAS can generate both TAs (Traffic Advisories) and RAs (ResolutionAdvisories)",
      D: "three dimensional: your TCAS can generate both TAs (Traffic Advisories) and RAs (ResolutionAdvisories)",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Your aircraft and an intruding traffic both are TCAS II equipped. Your TCAS determines the relative height of the intruding aircraft by",
    choices: {
      A: "comparing the altitudes of the two aircraft",
      B: "using the range function of the on board weather radar",
      C: "by interrogating the ATC ground station",
      D: "comparing the GPS heights of the two aircraft",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Your aircraft is TCAS II equipped. To be able to generate a resolution advisory (RA), the intruder must be at least equipped with",
    choices: {
      A: "a transponder mode S",
      B: "a TCAS II",
      C: "a transponder mode A",
      D: "a transponder mode C",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Your aircraft is TCAS II equipped. To be able to generate a traffic advisory (TA), the intruder must be at least equipped with",
    choices: {
      A: "a transponder mode S",
      B: "a TCAS II INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "a transponder mode C",
      D: "a transponder mode A",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Your aircraft is TCAS II equipped; an intruding traffic only has a mode A transponder.The information available to your TCAS equipment is",
    choices: {
      A: "two dimensional only: your TCAS cannot generate RAs (Resolution Advisories)",
      B: "two dimensional only: your TCAS cannot generate TAs (Traffic Advisories)",
      C: "three dimensional: your TCAS can generate both TAs (Traffic Advisories) and RAs (ResolutionAdvisories)",
      D: "three dimensional; your TCAS cannot generate TAs (Traffic Advisories)",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Your aircraft is TCAS II equipped; an intruding traffic only has a mode C transponder. The information available to your TCAS equipment is",
    choices: {
      A: "three dimensional; your TCAS cannot generate RAs (Resolution Advisories)",
      B: "three dimensional; your TCAS can generate both TAs (Traffic Advisories) and RAs (ResolutionAdvisories)",
      C: "two dimensional only; your TCAS cannot generate TAs (Traffic Advisories)",
      D: "two dimensional only; your TCAS cannot generate RAs (Resolution Advisories)",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "TCAS interprets intruders with no Mode C information as",
    choices: {
      A: "TA only",
      B: "RA in the horizontal axis",
      C: "RA in the vertical axis",
      D: "RA in the horizontal and vertical axis",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "On a TCAS II a RA traffic is shown as",
    choices: {
      A: "Hollow white or cyan diamond",
      B: "Solid red square INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "Solid white or cyan diamond",
      D: "Red solid circle",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "Which is a valid TCAS command?",
    choices: {
      A: "VERTICAL SPEED, VERTICAL SPEED",
      B: "LEFT, LEFT",
      C: "RIGHT, RIGHT",
      D: "DESCEND, DESCEND",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question: "A VMO-MMO warning device consists of an alarm connected to",
    choices: {
      A: "a barometric aneroid capsule and an airspeed sensor subjected to dynamic pressure",
      B: "a barometric aneroid capsule and an airspeed sensor subjected to static pressure",
      C: "a barometric aneroid capsule subjected to static pressure and an airspeed sensor subjected to adynamic pressure",
      D: "a barometric aneroid capsule subjected to dynamic pressure and an airspeed sensor subjected to astatic pressure",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "The input(s) of a VMO/MMO warning system is (are)",
    choices: {
      A: "static pressure only",
      B: "static pressure and",
      C: "static pressure and aircraft configuration",
      D: "static pressure and SAT",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "When the flight warning system (FWS) identifies an overspeed condition (airspeed exceeding VMO/MMO), it generates",
    choices: {
      A: "a call message",
      B: "a caution message INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "an advisory message",
      D: "a warning message",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The calculator combined with the stick shaker system of a modern transport airplane receives information about the: The combination regrouping all the correct statements is: 1. angle of attack 2. engine R.P.M. 3. configuration 4. pitch and bank attitude 5. side slip",
    choices: {
      A: "1, 2, 3 and 4",
      B: "1, 2, 3, 4 and 5",
      C: "1 and 5",
      D: "1 and 3",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      ". The main input data to the Stall Warning Annunciator System are: The combination regrouping all the correct statements is: 1. Mach Meter Indication 2. Angle of Attack 3. Indicate Airspeed (IAS) 4. Aircraft configuration (Flaps/Slats)",
    choices: {
      A: "1, 2, 3 and 4",
      B: "1, 2, 3, 4 and 5",
      C: "1 and 5",
      D: "1 and 3",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A stall warning system is based on a measure of",
    choices: {
      A: "attitude",
      B: "airspeed",
      C: "aerodynamic incidence",
      D: "groundspeed INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of attack transmitters placed laterally on the forward part of the fuselage supply an electrical signal indicating: The combination regrouping all the correct statements is: 1. the angular position of a wind vane 2. a differential pressure in a probe, depending on the variation of the angle of attack 3. a differential pressure in a probe, depending on the variation of the speed",
    choices: {
      A: "2, 3",
      B: "1, 2, 3",
      C: "1, 2",
      D: "1, 3",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The stick shaker calculator receives the following informations: The combination regrouping all the correct statements is: 1. mass of the airplane 2. angle of attack 3. wing flap deflection 4. position of the landing gear 5. total air temperature 6. pressure altitude",
    choices: {
      A: "2, 3, 5",
      B: "2, 3",
      C: "1, 2, 3, 4",
      D: "1, 2, 3, 4, 5, 6",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The oncoming stall of a large transport airplane appears in the form of",
    choices: {
      A: "control stick vibrations simulating natural buffeting",
      B: "an orange light on the warning display",
      C: "a natural buffeting which occurs prior to the simulated buffeting",
      D: "a bell type warning",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In some configurations, modern aircraft do not respect the regulatory margins between stall and natural buffet. The warning system supplies the corresponding alarm. The required margin related to the stall speed is",
    choices: {
      A: "7%",
      B: "5%",
      C: "10%",
      D: "3%",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The stall warning system of a large transport airplane includes: The combination regrouping all the correct statements is: 1. an angle of attack sensor 2. a computer 3. a transmitter originating from the anemometer 4. an independent pitot probe 5. a transmitter of the flap/slat position indicating system",
    choices: {
      A: "1, 2, 4, 5",
      B: "1, 2, 5",
      C: "2, 3, 4",
      D: "1, 3, 4, 5",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of attack transmitter provides an electric signal varying with: The combination regrouping all the correct statements is: 1. the angular position of a wind vane 2. the deviation between the airplane flight attitude and the path calculated by the inertial unit 3. a probe differential pressure depending on the variation of the angle of attack",
    choices: {
      A: "1 only",
      B: "1 and 2",
      C: "1 and 3",
      D: "2 and 3",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The stall warning system receives information about the: The combination regrouping all the correct statements is: 1. airplane angle of attack 2. airplane speed 3. airplane bank angle 4. airplane configuration 5. load factor on the airplane",
    choices: {
      A: "1, 2, 3, 4, 5",
      B: "2, 3, 4, 5",
      C: "1, 3, 5",
      D: "1, 4",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A stall warning system is based on measuring the",
    choices: {
      A: "attitude",
      B: "TAS",
      C: "angle of attack",
      D: "groundspeed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      ". An angle of attack sensor may consist of: The combination regrouping all the correct statements is: 1. an inertial system computing the difference between flight path and flight attitude 2. a conical slotted probe which positions itself to determine the angle of attack 3. a vane detector which positions",
    choices: {
      A: "1, 3",
      B: "1, 2, 3",
      C: "1, 2",
      D: "2, 3",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In case of impending stall, the flight warning system (FWS) generates",
    choices: {
      A: "a warning message",
      B: "a caution message",
      C: "an advisory message INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      D: "an urgency message",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of attack transmitter placed laterally on the forward part of the fuselage supplies an electrical signal which can indicate the angular position of: The combination regrouping all the correct statements is: 1. a specific slaved pitot probe 2. a vane detector 3. a conical slotted probe",
    choices: {
      A: "1, 3",
      B: "1, 2, 3",
      C: "1, 2",
      D: "2, 3",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The flight data recorder must start data recording automatically",
    choices: {
      A: "before the airplane is able to move by under its own power",
      B: "when taking-off",
      C: "when the landing gear is retracted",
      D: "when lining up",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The flight data recorder must automatically stop data recording when the",
    choices: {
      A: "main gear shock strut compresses when touching the runway",
      B: "airplane cannot any longer move by its own power",
      C: "landing gear is extended and locked",
      D: "airplane clears the runway",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Except for airplanes under 5.7t airworthiness certificate of which is subsequent to 31 March 1998, a flight data recording system must be able to store the recorded data for a minimum of the last",
    choices: {
      A: "25 hours",
      B: "10 hours INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      C: "30 minutes",
      D: "60 minutes",
    },
    correct: "A",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "In accordance with (ICAO) Annex 6 part 1, the flight data recorder is to be located in the aircraft",
    choices: {
      A: "as near to the landing gear as practicable",
      B: "as far forward as practicable",
      C: "as far to the rear as practicable",
      D: "at the right or left wing tip",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "Flight recorder duration must be such that flight data, cockpit voice and sound warnings may respectively be recorded during at least",
    choices: {
      A: "20 hours for flight data, 15 minutes for cockpit voices and warning horns",
      B: "48 hours for flight data, 60 minutes for cockpit voices and warning horns",
      C: "25 hours for flight data, 30 minutes for cockpit voices and warning horns",
      D: "24 hours for flight data, 60 minutes for cockpit voices and warnings horns",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "A cockpit voice recorder (CVR) will record: The combination regrouping all the correct statements is: 1. the information exchanged by the cabin crew 2. the conversations between the crew members and voice communications transmitted from or received on the flight deck by radio 3. the announcements made via the public address even if it has not been selected 4. the conversations and alarms audible in the cockpit 5. the captain conversations only",
    choices: {
      A: "1, 5",
      B: "3, 4",
      C: "1, 2",
      D: "2, 4",
    },
    correct: "D",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The voice recorder records on four different channels the following information: The combination regrouping all the correct statements is: 1. aural warnings 2. radio communications 3. conversations between the crew members through the cockpit interphone 4. announcements to the passengers",
    choices: {
      A: "1, 3",
      B: "1, 2, 3, 4",
      C: "1, 4",
      D: "1, 2, 3",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The CVR (Cockpit Voice Recorder) includes: The combination regrouping all the correct statements is: 1. a microphone 2. a recorder in compliance with the shock and fire resistance standards 3. an independent battery 4. a flight data recorder",
    choices: {
      A: "1, 2, 3",
      B: "1, 3",
      C: "1, 2",
      D: "1, 2, 4",
    },
    correct: "C",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "The flight data recorders must preserve the conversation and aural warnings of the last",
    choices: {
      A: "48 hours of operation",
      B: "30 minutes of operation",
      C: "25 hours of operation",
      D: "flight",
    },
    correct: "B",
    ref: "ATPL A, CPL H AND ATPL H",
  },
  {
    question:
      "In a free turbine powered helicopter with an indicator showing both rotor and free turbine speeds, the higher red line on the indicator shows the maximum",
    choices: {
      A: "continuous rotor speed",
      B: "rotor speed",
      C: "rotor speed under power INSTRUMENTATION FLIGHT INSTRUMENTS - Radio Altimeter",
      D: "transitional rotor speed under power",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In a free turbine powered helicopter with an indicator showing both rotor and free turbine speeds, the lower red line on the indicator shows the minimum",
    choices: {
      A: "transitional rotor speed under power",
      B: "continuous rotor speed",
      C: "rotor speed under power",
      D: "rotor speed",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In a free turbine powered helicopter, an overspeed of the free turbine",
    choices: {
      A: "may cause catastrophic mechanical failure",
      B: "causes the red overspeed light to illuminate",
      C: "will have serious consequences for the integrity of the main rotor",
      D: "has no consequence, because the overspeeds under one second are authorised",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In a free turbine powered helicopter, in the event of a free turbine overspeed",
    choices: {
      A: "the fuel supply of the corresponding engine is cut off, causing engine shutdown",
      B: "the amber overspeed light illuminates",
      C: "the red overspeed light illuminates",
      D: "nothing happens as an overspeed of under one second duration is authorised",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In a free turbine powered helicopter, the overspeed detector is used to sense",
    choices: {
      A: "a badly adjusted fuel control unit",
      B: "a rotor speed overshoot due to inappropriate operation",
      C: "an engine start with main rotor blades removed",
      D: "shearing of the drive shaft between the free turbine and the main gear box",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In a single engine helicopter with a free turbine, an overspeed of the free turbine",
    choices: {
      A: "requires entry into auto rotation B activates the rotor overspeed audible warning",
      B: "activates the red overspeed warning",
      C: "requires the pilot to land as soon as possible",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The Bourdon tube is used to measure",
    choices: {
      A: "temperature",
      B: "fuel flow",
      C: "vibrations",
      D: "pressure",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "The engine pressure ratio (EPR) is computed by",
    choices: {
      A: "dividing turbine discharge pressure by compressor inlet pressure",
      B: "dividing compressor discharge pressure by turbine discharge pressure",
      C: "multiplying compressor discharge pressure by turbine inlet pressure",
      D: "multiplying compressor inlet pressure by turbine discharge pressure",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The pressure probe used to measure the pressure of a low pressure fuel pump is",
    choices: {
      A: "a Bourdon tube",
      B: "a bellows sensor",
      C: "an aneroid capsule",
      D: "a differential capsule",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The probe used to measure the air intake pressure of a gas turbine engined powerplant is",
    choices: {
      A: "an aneroid capsule",
      B: "a differential capsule INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Pressure Gauge",
      C: "a Bourdon tube",
      D: "a bellows sensor",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "Different pressure sensors are used according to the intensity of the pressure measured (low, medium or high). Classify the following sensors by order of increasing pressure for which they are suitable:bellows typeBourdon tube typeAneroid capsule type",
    choices: {
      A: "3, 1, 2",
      B: "1, 2, 3",
      C: "3, 2, 1",
      D: "2, 1, 3",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "A Bourdon Tube is used in",
    choices: {
      A: "vibration detectors",
      B: "pressure sensors",
      C: "smoke detectors",
      D: "turbine temperature probes",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "Among the following engine instruments, the one operating with an aneroid pressure diaphragm is the",
    choices: {
      A: "oil pressure gauge",
      B: "manifold pressure gauge",
      C: "fuel pressure gauge",
      D: "oil thermometer",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "If a manifold pressure gauge consistently registers atmospheric pressure, the cause is probably",
    choices: {
      A: "ice in induction system",
      B: "too high float level",
      C: "fuel of to low volatility INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Pressure Gauge",
      D: "leak in pressure gauge line",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "A manifold pressure gauge of a piston engine measures",
    choices: {
      A: "fuel pressure leaving the carburettor",
      B: "vacuum in the carburettor",
      C: "absolute pressure in intake system near the inlet valve",
      D: "absolute air pressure entering the carburettor",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The engine instrument utilising an aneroid pressure diaphragm is the",
    choices: {
      A: "fuel pressure gauge",
      B: "oil pressure gauge",
      C: "manifold pressure gauge",
      D: "oil temperature gauge",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "The Engine Pressure Ratio (EPR) is computed by",
    choices: {
      A: "multiplying compressor discharge pressure by turbine inlet pressure",
      B: "dividing compressor discharge pressure by turbine discharge pressure",
      C: "multiplying compressor inlet pressure by turbine discharge pressure",
      D: "dividing turbine discharge pressure by compressor inlet pressure",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "The EPR (Engine Pressure Ratio) is",
    choices: {
      A: "the ratio of the turbine outlet total pressure to the compressor inlet total pressure",
      B: "the ratio of the turbine outlet total pressure to the ambient total pressure",
      C: "the difference between the compressor inlet total pressure and the turbine outlet total pressure",
      D: "the ratio of the compressor outlet total pressure to the compressor inlet total pressure",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The sensor(s) feeding the EPR-indicator is (are)",
    choices: {
      A: "tachometer located on the shaft of the N1 compressor",
      B: "temperature probes, one located upstream from the compressor inlet, and another downstream fromthe turbine outlet",
      C: "tachometer located on the shaft of the N2 compressor",
      D: "pressure probes, one located upstream from the compressor inlet, and the other downstream from the turbine outlet",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "To be as accurate as possible, an anemometer must be calibrated according to the following formula",
    choices: {
      A: "Bernoulli, considering the air as an uncompressible fluid",
      B: "Bernoulli, taking into account the air compressibility",
      C: "Saint-Venant, considering the air as an uncompressible fluid",
      D: "Saint-Venant, taking into account the air compressibility",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "Total Air Temperature (TAT) is",
    choices: {
      A: "higher or equal to Static Air Temperature (SAT), depending on altitude and SAT",
      B: "lower than Static Air Temperature (SAT), depending on altitude and SAT",
      C: "higher or equal to Static Air Temperature (SAT), depending on mach number and SAT",
      D: "lower than Static Air Temperature (SAT), depending on mach number and SAT",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A temperature sensor has a recovery factor oif 0.95. The temperature measured is equal to",
    choices: {
      A: "95% of the static air temperature (SAT)",
      B: "ram air temperature (RAT) + 95% of the ram rise",
      C: "static air temperature (SAT) + 75% of the ram rise",
      D: "95% of the ram air temperature (RAT)",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft is flying at flight level FL 180 and Mach number 0.36. Its onboard thermometer reads TAT= 5oC. Considering that the probe recovery co-efficient is 0.84, the present weather conditions compared with the standard atmosphere are",
    choices: {
      A: "Standard + 10oC",
      B: "Standard + 20oC",
      C: "Standard",
      D: "Standard + 30oC",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The TAT probe measures TAT by",
    choices: {
      A: "TAT = SAT + kinetic heating",
      B: "TAT = SAT heating due to compressibility",
      C: "TAT = SAT kinetic heating",
      D: "TAT = SAT + heating due to compressibility",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A thermocouple can be made of",
    choices: {
      A: "a single wire coil",
      B: "two metal conductors of the same nature fixed together at two points",
      C: "a three wire coil",
      D: "two metal conductors of different nature fixed together at two points",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "The total air temperature (TAT) is always",
    choices: {
      A: "lower than Static Air Temperature (SAT) depending on the Calibrated Air Speed (CAS)",
      B: "higher than Static Air Temperature (SAT) depending on the Calibrated Air Speed (CAS)",
      C: "higher than Static Air Temperature (SAT) depending on the altitude",
      D: "lower than Static Air Temperature (SAT) depending on the altitude",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The temperature measured by the CHT (Cylinder Head Temperature) probe is the",
    choices: {
      A: "temperature of the exhaust gases",
      B: "average temperature within the whole set of cylinders",
      C: "temperature within the hottest cylinder, depending on its position in the engine block",
      D: "temperature of the carburettor to be monitored when the outside air temperature is between -5oC and 10oC",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "To permit turbine exit temperatures to be measured, gas turbines are equipped with thermometers which work on the following principle",
    choices: {
      A: "bi-metallic strip",
      B: "thermocouple",
      C: "liquid expansion",
      D: "gas pressure",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The static air temperature (SAT) is",
    choices: {
      A: "a relative temperature expressed in degrees Celsius",
      B: "a differential temperature expressed in degrees Kelvin",
      C: "an absolute temperature expressed in degrees Celsius",
      D: "a relative temperature expressed in degrees Kelvin",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "A millivoltmeter measuring the electromotive force between the hot junction and the cold junction of a thermocouple can be directly graduated in temperature values provided that the temperature of the",
    choices: {
      A: "hot junction is maintained constant",
      B: "cold junction is maintained constant",
      C: "cold junction is maintained at 15oC",
      D: "hot junction is maintaind at 15oC",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The main advantage of a ratiometer type temperature indicator is that it",
    choices: {
      A: "carries out an independent measurement of the supply voltage INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Temperature Gauge",
      B: "can operate without an electrical power supply",
      C: "is very accurate",
      D: "is very simple",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The measurement of the turbine temperature or of the EGT (Exhaust Gas Temperature) is carried out at the",
    choices: {
      A: "high pressure chamber intake",
      B: "combustion chamber outlet",
      C: "combustion chamber intake",
      D: "high pressure turbine outlet",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The red pointer which is normally on the red line on the EGT (Exhaust Gas Temperature) indicates",
    choices: {
      A: "shows the limit value not to be exceeded",
      B: "moves when the corresponding value is exceeded and remains positioned at the maximum value that has been reached",
      C: "allows the display of the parameter value to be adopted during take-off",
      D: "shows the vibration level of the engine under consideration",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given: M = the Mach number Ts = the static temperature Tt = the total temperature",
    choices: {
      A: "Ts = Tt x (1+0.2 x M^2)",
      B: "Ts = Tt / (1+0.2 x M^2)",
      C: "Ts = Tt x (0.2 x M^2)",
      D: "Ts = Tt / (0.2 M^2)",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The yellow sector of the temperature gauge corresponds to",
    choices: {
      A: "a frequent operating range",
      B: "a normal operating range",
      C: "an exceptional operating range",
      D: "a forbidden operating range",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "The airplane outside air temperature probe measures the",
    choices: {
      A: "total air temperature minus compressibility effects in order t obtain the static temperature",
      B: "static air temperature minus kinetic heating effects in order to obtain the total temperature",
      C: "total air temperature minus kinetic heating effects in order to obtain the static temperature",
      D: "static air temperature minus compressibility effects in order to obtain the total temperature",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "A thermocouple type thermometer consists of",
    choices: {
      A: "two metal conductors of the same type connected at two points",
      B: "two metal conductors of different type connected at one point",
      C: "a Wheatstone bridge conncted to a voltage indicator",
      D: "a single-wire metal winding",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The white sector of the arc of a temperature gauge corresponds to",
    choices: {
      A: "a forbidden operating range",
      B: "a normal operating range",
      C: "an exceptional operating range",
      D: "a special operating range",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The sensors used to measure the exhaust gas temperature on an airplane equipped with turbojets are",
    choices: {
      A: "based on metallic parts whose expansion/contraction is measured",
      B: "thermocouples INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Temperature Gauge",
      C: "based on metallic conductors whose resistance increases linearly with temperature",
      D: "capacitors whose capacity varies proportionally with temperature",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "In order to measure temperature the cylinder head temperature (CHT) gauge utilises a",
    choices: {
      A: "bourdon tube",
      B: "wheatstone bridge circuit",
      C: "ratiometer circuit",
      D: "thermocouple consisting of two dissimilar metals",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The electromotive force of a thermocouple is not modified if one or several intermediate metals are inserted in the circuit provided that",
    choices: {
      A: "these metals are not the same as those constituting the thermocouple",
      B: "contact points are maintained at equal temperature between these different metals",
      C: "these metals are maintained at a temperature higher than that of the cold source",
      D: "these metals are maintained at a temperature lower than that of the cold source",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      ". In transport category airplanes, the temperatures are generally measured with: The combination regrouping all the correct statements is: 1. resistance thermometers 2. thermocouple thermometers 3. reactance thermometers 4. capacitance thermometers 5. mercury thermometers",
    choices: {
      A: "1, 3, 4, 5",
      B: "1, 2, 5",
      C: "2, 3",
      D: "1, 2",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "A thermocouple type temperature sensing is composed of",
    choices: {
      A: "two identical metals joined together at both ends (called hot and cold junctions)",
      B: "two identical metals joined together at one end (called hot junction or measure junction)",
      C: "two dissimilar metals joined together at one end (called hot junction or measure junction)",
      D: "a single-wire metal winding",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "Electrical requirements for an alumel/chromel indicating system are",
    choices: {
      A: "3 phase AC for sensor plus 26 VAC for gauge lighting",
      B: "3 phase AC for sensor plus 28 VDC for gauging",
      C: "power for gauge lighting only",
      D: "28 VDC for sensor plus power",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The most common system used to monitor turbine gas exhaust temperatue is the",
    choices: {
      A: "hot and cold junction, alumel/chromel system",
      B: "flame switch",
      C: "fixed junction mercurial oxide/chromium system",
      D: "hot junction Tungsten/copper system",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "To permit turbine exit temperatures to be measured, gas turbines are equipped with thermometers which work on the following principle",
    choices: {
      A: "bi-metallic strip",
      B: "thermocouple",
      C: "liquid expansion",
      D: "gas pressure",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "A ratiometer",
    choices: {
      A: "Can measure independently supply voltage",
      B: "Is very accurate INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Temperature Gauge",
      C: "Does not require a power supply",
      D: "None of the above",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The advantages of an electriocal induction tachometer are: The combination regrouping all the correct statements is: 1. The display is not sensitive to line resistance 2. The measurement is independent of aircraft power supply 3. The measurement is independent of temperature variations 4. The option to use without restriction several indicators connected in parallel to a single transmitter",
    choices: {
      A: "1, 2 and 4",
      B: "2, 3 and 4",
      C: "1, 2, 3 and 4",
      D: "1, 3 and 4",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The signal supplied by a transmitter fitted with a 3-phase AC generator, connected to RPM indicator, is",
    choices: {
      A: "an AC voltage varying with the RPM; the indicator rectifies the signal via a diode bridge andisprovided with a voltmeter",
      B: "a DC voltage varying with the RPM; the indicator is a plain voltmeter with a rev/min. scale",
      C: "an AC voltage, the frequency of which varies with the RPM; the indicator converts the signalinto square pulses which are then counted",
      D: "a three-phase voltage, the frequency of which varies with the RPM; the indicator is provided with a motor which drives a magnetic tachometer",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The transmitter of RPM indicator may consist of: The combination of correct statements is: 1. a magnetic sensor supplying an induced AC voltage 2. a DC generator supplying a DC voltage 3. a single-phase AC generator supplying an AC voltage 4. a three-phase AC generator supplying a three phase voltage",
    choices: {
      A: "2, 3, 4",
      B: "1, 2, 3, 4",
      C: "1, 4",
      D: "1, 2, 3 INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Temperature Gauge",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The RPM indicator (or tachometer) of a piston engine can include a small red arc within the arc normally used (green arc). In the RPM range corresponding to this small red arc the",
    choices: {
      A: "rating is the minimum usable in cruise",
      B: "rating is the maximum possible in continuous mode",
      C: "propeller generates vibration, continuous rating is forbidden",
      D: "propeller efficiency is minimum at this rating",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The advantages of a D.C. generator tachometer are: The combination regrouping all the correct statements is: 1. easy transmission of the information 2. independence of the information relative to the airborne electrical power supply 3. freedom from any spurious current due to the commutator",
    choices: {
      A: "1, 3",
      B: "1, 2, 3",
      C: "2, 3",
      D: "1, 2",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The disadvantages of a single phase A.C. generator tachometer are: The combination regrouping all the correct statements is: 1. the presence of spurious signals due to a D.C. generator commutator 2. the importance of line resistance on the information value 3. the influence of temperature on the tachometer information",
    choices: {
      A: "1, 2",
      B: "1, 2, 3",
      C: "2",
      D: "1, 3",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "The disadvantage of an electronic RPM indicator is the",
    choices: {
      A: "necessity of providing a power supply source",
      B: "generation of spurious signals at the commutator",
      C: "influence of temperature on the indication",
      D: "high influence of line resistance on the indication",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The electronic tachometer sensor is composed of",
    choices: {
      A: "the rotor of a three phase A.C. generator",
      B: "a circular magnet with four poles",
      C: "the rotor of a single phase A.C. generator",
      D: "a notched wheel rotating in front of an electro-magnet",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "On an aeroplane equipped with a constant speed propeller, the RPM indicator enables",
    choices: {
      A: "selection of engine RPM",
      B: "control of power",
      C: "control of the propeller regulator and the display of properller RPM",
      D: "on a twin-engine aeroplane, automatic engine synchronisation",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "In a 3-phase synchronous motor type tachometer indicator: The combination regrouping all the correct statements is: 1. the transmitter is a direct current generator 2. the voltage is proportional to the transmitter drive speed 3. the frequency is proportional to the transmitter drive speed 4. the speed indicating element is a galvanometer 5. the speed indicating element is an asynchronous motor driving a magnetic tachometer",
    choices: {
      A: "1, 4",
      B: "1, 2",
      C: "2, 5",
      D: "3, 5",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "A synchroscope is used on aircraft to",
    choices: {
      A: "set several engines to the same speed",
      B: "reduce the vibration of each engine",
      C: "reduce the RPM of each engine",
      D: "achieve optimum control of on-board voltages",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The advantages of single phase A.C. generator tachometer are: The combination regrouping all the correct statements is: 1. the suppression of spurious signals due to a D.C. generator commutator 2. the importance of line resistance on the information value 3. the independence of the information in eltion to the airborne electrical power supply 4. the ease of transmission of the information",
    choices: {
      A: "2, 4",
      B: "1, 2, 3, 4",
      C: "2, 3, 4",
      D: "1, 3",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The signal supplied by a transmitter fitted with a magnetic sensor, connected to an RPM indicator is",
    choices: {
      A: "a three phase voltage frequency varies with the RPM; the indicator is provided with a motorwhich drives a magnetic tachometer",
      B: "a DC voltage varying with the RPM;the indicator I a simple voltmeter with a rev/min. scale",
      C: "an AC voltage varying with the RPM; the indicator rectifies the signal via a diode bridge and isprovided with a voltmeter",
      D: "an AC voltage, the frequency of which varies with the RPM; the indicator converts the signal into square pulses which are then counted",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The operting principle of the INDUCTION type of tachometer is to measure the",
    choices: {
      A: "electromotive force (EMF) produced by a dynamo or an alternator",
      B: "frequency of the electric impulse created by a notched wheel rotating in a magnetic field",
      C: "magnetic field produced by a dynamo or an alternator",
      D: "rotation speed of an asynchronous motor energised by an alternator INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Temperature Gauge",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "Gas turbine engine rotational speed (RPM) is usually sensed using either",
    choices: {
      A: "a 28 VDC tachomter generator or an AC phonic wheel",
      B: "a single phase AC tachometer generator or an AC phonic wheel system",
      C: "a 3 phase AC tachometer generator or an AC phonic wheel system",
      D: "a 28 VDC tachometer generator or a DC phonic wheel",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "Helicopter gas turbine compressor speed (N1 or Ng) is displayed in the cockpit as",
    choices: {
      A: "an analogue readout, or a percentage RPM, or as a function of maximum power, or as a computedvalue of percentage RPM",
      B: "a percentage RPM only",
      C: "an analogue readout only",
      D: "either an analogue or percentage RPM only",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In a free turbine powered helicopter, the term phonic wheel indicates a wheel",
    choices: {
      A: "which detects angular speed using sound",
      B: "which delivers an aural signal at a certain angular speed",
      C: "using a magnetic sensor to measure the angular speed",
      D: "which delivers a signal detectable by radio or telemetry",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The operating principle of Flowmeters, or unit flow meters, themost commonly used at the present time, is to measure across their system the",
    choices: {
      A: "volume and viscosity of the fuel",
      B: "pressure and temperature of the fuel",
      C: "volumetric mass and di-electric resistance of the fuel",
      D: "quantity of fuel movement",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "A paddle wheel placed in the fuel circuit of a gas turbine engine initially measures",
    choices: {
      A: "mass flow by a tally of the impulses",
      B: "volumetric flow by a tally of the impulses",
      C: "volumetric flow by measure of a voltage proportional to the rotational speed",
      D: "mass flow by measure of a voltage proportional to the rotational speed",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "When compared with the volumetric fuel flowmeter, the mass fuel flometer takes into account the fuel",
    choices: {
      A: "temperature",
      B: "density",
      C: "pressure",
      D: "dielectrical constant",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The indication of a fuel float gauge varies with: The combination of correct statements is:: 1. aircraft attitude 2. accelerations 3. atmospheric pressure 4. temperature",
    choices: {
      A: "1, 2, 3, 4",
      B: "1, 2, 4",
      C: "4",
      D: "1, 2",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "If the tanks of your airplane only contain water, the capacitor gauges indicate",
    choices: {
      A: "a mass equal to the mass of a same volume of fuel",
      B: "the exact mass of water contained in the tanks",
      C: "a mass equal to zero",
      D: "a mass of water different from zero, but inaccurate",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "The float type fuel gauges provide information on",
    choices: {
      A: "mass whose indication is independent of the temperature of the fuel",
      B: "volume whoseindication is independent of the temperature of the fuel",
      C: "mass whose indication varies with the temperature of the fuel",
      D: "volume whose indication varies with the temperature of the fuel",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "The capacity fuel gauges provide information",
    choices: {
      A: "on mass whose indication varies with the temperature of the fuel",
      B: "on mass whose indication is independent of the temperature of the fuel",
      C: "which is independent of the temperature of the fuel",
      D: "which varies with the temperature of the fuel",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      'In an average or heavy weight transport airplane, generally, the fuel quantity is measured by "capacitor" gauges because these give: The combination regrouping all the correct statements is: 1. indications partly independent of fuel temperature variations 2. indications almost independent of the airplane\'s attitude and accelerations 3. indications expressed in density',
    choices: {
      A: "2",
      B: "1, 2, 3",
      C: "1, 2",
      D: "1, 3",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      'The disadvantages of an "electric" fuel (float) gauge are: The combination regrouping all the correct statements is: 1. the design is complex 2. the indications are influenced by the airplane attitude variations 3. the indications are influenced by the accelerations 4. the indication are influenced by temperature variations 5. that an alternative current supply is necessary',
    choices: {
      A: "2, 3, 4, 5",
      B: "1, 2, 3, 4",
      C: "2, 3, 4",
      D: "1",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "The principle of capacitor gauges is based on",
    choices: {
      A: "the variation of capacity by volumetric measurement exercised on the sensor",
      B: "the current variation in a Wheastone bridge",
      C: "the variation in capacity of a condenser with the nature of the dielectric",
      D: "the variation of flow and torque exercised in a supply line",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The basic principle used for measuring a quantity of fuel in a transport airplane equipped with capacitor gauges is that the",
    choices: {
      A: "internal resistance of a capacity depends on the nature of the dielectric in which it isimmersed",
      B: "capacity of a capacitor depends on the nature of the dielectric in which it is immersed",
      C: "capacity of a capacitor depends on the distance between its plates",
      D: "electromotive force of a capacity depends on the nature of the dielectric in which it isimmersed",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The principl of capacity gauges is based on the",
    choices: {
      A: "capacitance variation by the volume measurement carried out on the sensor",
      B: "current variation in the Wheatstone bridge",
      C: "capacitance variation of a given capacitor with the type of dielectric INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Temperature Gauge",
      D: "flow rate and torque variation occurring in a supply line",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The quantity of fuel in the tanks is measured by capacitor type contents gauges. The working principle of these sensors is to measure the",
    choices: {
      A: "di-electric resistivity of the fuel",
      B: "height of the fuel",
      C: "volume of the fuel",
      D: "charge of condensers",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      'The advantages of an "electric" fuel (float) gauge are: 1. easy construction 2. independence of indications with regard to airplane attitude 3. independence of indications with regard to the accelerations 4. independence of indications with regard to temperature variations 5. independence of indications with regard to vibrations',
    choices: {
      A: "1, 2, 3, 4, 5",
      B: "2, 3, 4, 5",
      C: "1",
      D: "2, 3, 4",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      'The advantages of an "electric" fuel (float) gauge are: The combination regrouping all the correct statements is: 1. easy construction 2. independence of indications with regrd to airplane attitude 3. independence of indications with regard to the accelerations 4. independence of indications with regard to temperature variations 5. independence of indications with regard to vibrations',
    choices: {
      A: "1, 2, 4 and 5",
      B: "1, 3, 4 and 5",
      C: "4 and 5",
      D: "1",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The gauge indicating the quantity of fuel measured by a capacity gauging system can be graduated directly in weight units because the dielectric constant of fuel is",
    choices: {
      A: "the same as that of air and varies inversely with density",
      B: "twice that of air and varies inversely with density",
      C: "the same as that of air and varies directly with density",
      D: "twice that of air and varies directly with density",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The basic principle of a capacitance fuel gauge system is that the",
    choices: {
      A: "capacity of a capacitor depends only on the density of the liquid on which it is immersed",
      B: "internal resistance of a capacity depends on the nature of the dielectric in which it isimmersed",
      C: "capacity of a capacitor depends on the nature of the dielectric in which it is immersed",
      D: "electromotive force of a capacity depends on the nature of the dielectric in which it isimmersed",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The electric float gauge: The combination regrouping all the correct statements is: 1. gives a mass information 2. gives information independent of aircraft's manoeuvres and attitude changes 3. gives information all the more accurate as the tank is full 4. is typically a DC powered system",
    choices: {
      A: "1",
      B: "1, 2, 3, 4",
      C: "1, 3, 4",
      D: "4",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "A fuel mass capacitance system works on the principle of fuel density being",
    choices: {
      A: "The same as air and inversely proportional to density",
      B: "The same as air and proportional to density",
      C: "Twice as air and inversely proportional to density",
      D: "Twice as air and proportional to density INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Vibration Monitoring",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "Torque can be determined by measuring the",
    choices: {
      A: "oil pressure at the fixed crown of an epicycloidal reducer of the main engine gearbox",
      B: "the amount of light through a gear linked to a transmission shaft",
      C: "the frequency of a phonic wheel linked to a transmission shaft",
      D: "the frequency difference between two phonic wheels linked to a transmission shaft",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "Torque can be determined by measuring the",
    choices: {
      A: "phase difference between 2 impulse tachometers attached to a transmission shaft",
      B: "frequency of an impulse tachometer attached to a transmission shaft",
      C: "oil pressure at the fixed crown of an epicycloidal reducer of the main engine gearbox",
      D: "quantity of light passing through a rack-wheel attached to a transmission shaft",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "Torque can be determined by measuring the",
    choices: {
      A: "phase difference between 2 impulse tachometers attached to a transmission shaft",
      B: "oil pressure at the fixed crown of an epicycloidal reducer of the main engine gearbox",
      C: "frequency of an impulse tachometer attached to a transmission shaft",
      D: "quantity of light passing through a rack-wheel attached to a transmission shaft",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "A vibration indicator receives a signal from different sensors (accelerometers). It indicates the",
    choices: {
      A: "vibration amplitude at a given frequency",
      B: "acceleration measured by the sensors, expressed in g",
      C: "vibration frequency expressed in Hz",
      D: "vibration period expressed in seconds",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In an engine vibration monitoring system for a turbo jet any vibration produced by the engine is",
    choices: {
      A: "amplified and filtered before being fed to the cockpit indicator",
      B: "inversely proportional to engine speed",
      C: "fed directly to the cockpit indicator without amplification or filtering",
      D: "directly proportional to engine speed",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The principle of detection of a vibration monitoring system is based on the use of",
    choices: {
      A: "2 accelerometers",
      B: "2 high and low frequency amplifiers",
      C: "2 high and low frequency filters",
      D: "a frequency converter",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Vibration is indicated in the cockpit as",
    choices: {
      A: "A direct reading",
      B: "A frequency",
      C: "Proportional to the speed of the motor",
      D: "Inversely proportional to the speed of the motor",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The output from an engine vibration transducer is",
    choices: {
      A: "inversely proportional to engine speed",
      B: "always filtered to remoe unwanted frequencies",
      C: "directly proportional to engine speed",
      D: "fed directly to the indicator in the cockpit without amplification or filtering",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "A three-phase electrical tachometer consists of",
    choices: {
      A: "a three phase generator, a synchronous motor and a magnetic tachometer INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Vibration Monitoring",
      B: "three associated dynamos",
      C: "a speed probe and a phonic wheel",
      D: "three speed probes and a phonic wheel",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The operating principle of an electronic tachometer is to measure the",
    choices: {
      A: "electromotive force (EMF) produced by a dynamo or an alternator",
      B: "frequency of the electric impulse created by a notched wheel rotating in a magnetic field",
      C: "rotation speed of an asynchronous motor energised by an alternator",
      D: "magnetic field produced by a dynamo or an alternator",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "In a modern airplane equipped with an ECAM (Electronic centralised aircraft monitor), when a failure occurs in a circuit, the centralised flight management system: The combination regrouping all the correct statements is: 1. releases an aural warning 2. lights up the appropriate push buttons on the overhead panel 3. displays the relevant circuit on the system display 4. processes the failure automatically",
    choices: {
      A: "1, 3, 4",
      B: "1, 2, 3",
      C: "3, 4",
      D: "1, 2",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "A Full Authority Digital Engine Control (FADEC) has the following functions: The combination regrouping all the correct statements is: 1. flow regulation (fuel, decelerations and accelerations monitoring) 2. automatic starting sequence 3. transmissions of engine data to the pilot's instruments 4. thrust monitoring 5. engine limit protection",
    choices: {
      A: "2, 4, 5",
      B: "1, 2, 3, 4, 5 INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Vibration Monitoring",
      C: "1, 3, 5",
      D: "1, 3, 4, 5",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The CRTs of an EICAS system: 1. can be interchanged between upper and lower displays 2. can be compacted together into one CRT 3. are controlled by the EICAS controller situated on the overhead panel 4. do not normally show EGT on the primary display 5. normally show secondary engine indications on the upper display 6. are provided with individual brightness controls",
    choices: {
      A: "1, 3, 5",
      B: "3, 4, 5",
      C: "1, 2",
      D: "1, 2, 5",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "In the event of a failure of the ECAM system, the system will be: 1. give warnings 2. light the appropriate buttons 3. bring up the appropriate system page 4. carry out the appropriate actions",
    choices: {
      A: "1, 3",
      B: "1, 2, 3, 4",
      C: "1, 2, 3",
      D: "1, 2, 4",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "What indications are received of an ECAM failure?",
    choices: {
      A: "Light only INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Vibration Monitoring",
      B: "Light and sound signal",
      C: "Aural signal only",
      D: "none of the above",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "Which of the following are pages of the ECAM secondary display? 1. engine 2. fire 3. trim 4. hyd 5. wheel 6. cruise",
    choices: {
      A: "1, 4, 5",
      B: "2, 3",
      C: "1, 4, 5, 6",
      D: "1, 3, 4",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The purpoe of magnetic chip detectors is to",
    choices: {
      A: "increase lubricating oil adhesion to main surfaces",
      B: "warning of impending failure",
      C: "remove large items of debris from the system",
      D: "perform the function of a micron filter",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The automatic transition to hover can be engaged",
    choices: {
      A: "on a three or four axis autopilot",
      B: "on a four axis auto pilot only",
      C: "if both channels of the auto pilots are active",
      D: "after setting the altitude on the radio altimeter",
    },
    correct: "B",
    ref: "HELI ALL",
  },
  {
    question:
      "An inner loop automatic flight control system (AFCS) is a system which",
    choices: {
      A: "controls the aircraft about the lateral axis only (PITCH)",
      B: "contains one or more high speed actuators which move both the inputs to the swash plate and thepilots¿ cyclic controls",
      C: "contains one or more high speed actuators which move the control inputs to the swash plate butnot the pilots cyclic controls",
      D: "controls the aircraft about the longitudinal axis only (ROLL)",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "An outer loop Automatic Flight Control System (AFCS), is a system which",
    choices: {
      A: "controls the aircraft about the lateral axis only (PITCH)",
      B: "contains a parallel actuator which provides control through 100% of the control range and movesthe control inputs only",
      C: "contains a parallel actuator which provides control through 100% of the control range and movesboth the control inputs and the cockpit control stick",
      D: "controls the aircraft about the longitudinal axis only (ROLL)",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Automatic Flight Control System (AFCS) parallel actuator position is",
    choices: {
      A: "not displayed in the cockpit due to short duration of operation",
      B: "displayed in the cockpit as a function of input and output signals",
      C: "passed to the pilot via control stick position",
      D: "displayed to the pilot by movement on the ADI only",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Automatic Flight Control System (AFCS) series actuator is",
    choices: {
      A: "not displayed in the cockpit due to short duration of operation",
      B: "displayed in the cockpit as a function of input and output signals",
      C: "displayed to the pilot by movement on the ADI/EADI",
      D: "passed to the pilot via control stick position",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If, with the automatic flight control system (AFCS) engaged, the pilot presses the force trim release button to allow a manual input to the flight controls",
    choices: {
      A: "the spring units will become ineffective",
      B: "the pilot must overcome the force of the spring unit to make the input",
      C: "the series actuator will run to damp the pilot¿s input",
      D: "artificial feel is produced by the parallel actuators",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In a helicopter automatic flight control system (AFCS), artificial feel is usually achieved by the use of",
    choices: {
      A: "series and/or parallel actuators",
      B: "bungee cords or rubbers",
      C: "a pitot/static dashpot system",
      D: "spring boxes or spring units",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which of the following systems can be used for hover holds",
    choices: {
      A: "Vertical gyro only",
      B: "GPS",
      C: "Inertial navigation only",
      D: "Doppler",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which of the following systems can be used for hover holds",
    choices: {
      A: "integrated lateral airspeed",
      B: "integrated longitudinal airspeed",
      C: "integrated longitudinal and lateral acceleration",
      D: "integrated longitudinal and lateral airspeed",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "A stability augmentation system (SAS) in a helicopter",
    choices: {
      A: "assists in dynamic stability only INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Vibration Monitoring",
      B: "assists in static stability only",
      C: "assists in static and dynamic stability",
      D: "has full control of dynamic stability",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "A Stability Augmentation System (SAS)",
    choices: {
      A: "always requires an auto pilot system",
      B: "may be a stand alone system",
      C: "is only used for prototype helicopters",
      D: "is only used in heavy lift helicopters",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "A Stability Augmentation System (SAS)",
    choices: {
      A: "provides short term attitude hold",
      B: "provides long term attitude hold",
      C: "uses rate gyros or vertical reference system",
      D: "uses vertical reference system only",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "A Stability Augmentation System (SAS)",
    choices: {
      A: "functions include altitude and airspeed hold",
      B: "is an outer loop system",
      C: "uses vertical reference system to provide a long term attitude",
      D: "is an inner loop system only",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Should a defect arise in the stability augmentation system (SAS) during flight",
    choices: {
      A: "the control stick will move to a pre-set patum causing the pilot to revert to manual control",
      B: "the pilot is not informed unless the second channel fails also",
      C: "an audio alarm will attract the pilot's attention to check the AFCS control panel INSTRUMENTATION POWERPLANT AND SYSTEM MONITORING - Vibration Monitoring",
      D: "the pilot will be advised by an amber warning",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The Stability Augmentation System (SAS)",
    choices: {
      A: "increases coupling in lateral/directgional axes",
      B: "reduces coupling in all axes",
      C: "reduces coupling in longitudinal axes only",
      D: "reduces coupling in lateral/directional axes only",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The Stability Augmentation System (SAS)",
    choices: {
      A: "can affect the static stability in lateral/directional axes",
      B: "can affect the static stability in longitudinal axes",
      C: "can affect the static stability in any axes",
      D: "does not affect on the static stability",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The Stability Augmentation System (SAS)",
    choices: {
      A: "can affect the static stability",
      B: "has an effect on dynamic stability",
      C: "can affect the dynamic and the static stability",
      D: "cannot affect the dynamic and the static stability",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "An automatic stabilisation equipment uses",
    choices: {
      A: "rate gyros to provide a long term attitude hold",
      B: "vertical reference system information to provide a long term attitude hold",
      C: "vertical reference system information to provide a short term attitude hold",
      D: "auto pilot information",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Heading hold is normally",
    choices: {
      A: "regarded as a basic function of automatic stabilisation equipment",
      B: "regarded as a basic function of a stability augmentation system",
      C: "not regarded as a basic function",
      D: "a function of a stability augmentation system",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
];

export default instrumentation;
