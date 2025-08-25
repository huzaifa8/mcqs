const ifrCommunications = [
  {
    question: "Blind transmission shall be made",
    choices: {
      A: "On the designated frequency (frequency in use)",
      B: "To all available aeronautical stations",
      C: "On regional guard frequencies only",
      D: "During IFR flights only",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the word CHECK mean?",
    choices: {
      A: "I understand your message",
      B: "Confirm your last transmission",
      C: "Read back my last instruction",
      D: "Examine a system or procedure",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the word APPROVED mean?",
    choices: {
      A: "Permission for proposed action granted",
      B: "That is correct",
      C: "Authorized to proceed under the conditions specified",
      D: "I repeat for clarity or emphasis",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the term AIR-GROUND COMMUNICATION mean?",
    choices: {
      A: "One-way communication from stations or locations on the surface of the",
      B: "One-way communication from aircraft to stations or locations on the",
      C: "Two-way communication between aircraft and stations or locations on the",
      D: "Any communication from aircraft to ground station requiring handling byFixed Telecommunication Network (AFTN)",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the phrase BREAK BREAK mean?",
    choices: {
      A: "The exchange of transmissions is ended and no response is expected",
      B: "It indicates the separation between portions of a message transmitted tostation",
      C: "It indicates the separation between messages transmitted to different aircraft in a very busyenvironment",
      D: "My transmission is ended and I expect a response from you",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the term CLEARANCE LIMIT mean",
    choices: {
      A: "The time after which an air traffic control clearance will be automaticallyflight has not been commenced",
      B: "The time of expiry of an air traffic control clearance",
      C: "The time at which an aircraft is given an air traffic control clearance",
      D: "The point to which an aircraft is granted an air traffic control clearance",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does SELCAL mean?",
    choices: {
      A: "A system in which radiotelephony communication between two stations can take place in bothdirections simultaneously",
      B: "A system in which radiotelephony communication can be established between aircraft only",
      C: "A system which permits the selective calling of individual aircraft overchannels linking a ground station with the aircraft",
      D: "A system provided for direct exchange of information between air traffic services (ATS) units",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "When flying in accordance with IFR, which of the following best describes the term VISUAL APPROACH?",
    choices: {
      A: "An approach by an IFR flight when either part or all of an instrument approach procedure isnot completed and the approach is executed in visual reference to terrain",
      B: "An approach executed by an IFR flight unable to maintain VMC",
      C: "A visual manoeuvre executed by an IFR flight when the weather conditions at the aerodrome ofdestination are equal to or better than required VMC minima",
      D: "An extension of an instrument approach procedure to bring an aircraft into position forlanding on a runway which is not suitably located for straight- in-approach",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the word CONTACT mean?",
    choices: {
      A: "That is correct",
      B: "Radar contact established",
      C: "Listen out on (frequency)",
      D: "Establish radio contact with ¿.",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the word CORRECT mean?",
    choices: {
      A: "That is correct",
      B: "An error has been made in this transmission. The correct version is¿",
      C: "Permission for proposed action not granted",
      D: "Negative, the correct version is ¿.",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the term EXPECTED APPROACH TIME mean",
    choices: {
      A: "The time at which ATC expects that an arriving aircraft, following a delay, will leave theholding point to complete its approach for a landing",
      B: "The holding time over the radio facility from which the instrument approach procedure for alanding will be initiated",
      C: "The time at which an arriving aircraft expects to arrive over the appropriate designatednavigation aid serving the destination aerodrome",
      D: "The time at which an arriving aircraft, upon reaching the radio aid serving the destinationaerodrome, will commence the instrument approach procedure for a landing",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the word RECLEARED mean?",
    choices: {
      A: "Consider that transmission as not sent",
      B: "Permission for proposed action granted",
      C: "An error has been made in my last transmission",
      D: "A change has been made to your last clearance",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the word REPORT mean?",
    choices: {
      A: "Say again",
      B: "Repeat all of this message back to me exactly as received",
      C: "Pass me the following information",
      D: "Examine a system or procedure",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the phrase VERIFY mean?",
    choices: {
      A: "Read back VDF bearing",
      B: "Repeat your last transmission",
      C: "Check and confirm with originator",
      D: "Consider that transmission as not sent",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the word DISREGARD mean?",
    choices: {
      A: "Consider that transmission as not sent",
      B: "An error has been made in this transmission",
      C: "Annul the previously transmitted clearance",
      D: "Wait and I will call you",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the word ACKNOWLEDGE mean?",
    choices: {
      A: "Let me know that you have received and understood this message",
      B: "Pass me the following information",
      C: "Repeat all of this message back to me exactly as received",
      D: "Repeat all of your last transmission",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the term BROADCAST mean?",
    choices: {
      A: "A transmission where no reply is required from the receiving station IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Meanings and significance of associated terms",
      B: "A radiotelephony transmission from ground station to aircraft in flight",
      C: "A transmission of information relating to air navigation that is not addressed to a specificstation or stations",
      D: "A transmission containing meteorological and operational information to aircraft engaged inflights over remote and oceanic areas out of range of VHF ground stations.",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which word or phrase shall be used in order to repeat for clarity or emphasis?",
    choices: {
      A: "I say again",
      B: "Confirm",
      C: "Read back",
      D: "Verify",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "The SELCAL system",
    choices: {
      A: "allows two way VHF data transmission between ATC and aircraft",
      B: "allows two way data transmission between operator and aircraft",
      C: "allows the aircraft to be contacted on VHF and HF frequencies that are not being monitoredby the flight crew",
      D: "allows satellite communication",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which of the following are radar services? 1. Radar Control 2. Radar Advisory 3. Flight Information Service 4. Approach Control 5. An SRA 6. A PAR 7. A QGH 8. An ILS",
    choices: {
      A: "All are",
      B: "(ii) (iii) (iv) (v) (vi) (viii)",
      C: "(i) (ii) (iii) (iv) (v) (vi) IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Meanings and significance of associated terms",
      D: "(i) (ii) (iv) (v) (vi)",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "A Flight Level is",
    choices: {
      A: "a height above 3000 ft",
      B: "a surface of constant atmospheric pressure related to a datum of 1013.2 Hpa",
      C: "a surface of varying atmospheric pressure related to a datum of 1013.2 Hpa",
      D: "an altitude of constant height related to 1013.2 Hpa",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "The abbreviation HN means he facility described operates",
    choices: {
      A: "between sunrise and sunset",
      B: "24 hours a day",
      C: "by prior Notification",
      D: "between sunset and sunrise",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "A FINAL call is made when the aircraft turns on to final approach within from the landing threshold",
    choices: {
      A: "8 nm",
      B: "8 km",
      C: "between 4 nm and 8 nm",
      D: "¿ 4 nm",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "Which of the following calls is a GENERAL CALL?",
    choices: {
      A: "YX-DEF Stephenville CONTROL",
      B: "YX-EFG, YX-FGH over",
      C: "ALL STATIONS Stephenville CONTROL",
      D: "YX-ABC, YX-BCD, YX-CDE Stephenville CONTROL",
    },
    correct: "C",
    ref: "I.R.",
  },
  {
    question: "What does the abbreviation SAR mean?",
    choices: {
      A: "Surveillance airport radar",
      B: "Search and rescue",
      C: "Standard arrival route",
      D: "Secondary altimeter responder",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the abbreviation ATIS mean?",
    choices: {
      A: "Air traffic information service",
      B: "Airport terminal information service",
      C: "Aircraft terminal information service",
      D: "Automatic terminal information service",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the abbreviation RVR mean?",
    choices: {
      A: "Runway visibility report",
      B: "Runway visual range",
      C: "Radar vectors requested",
      D: "Recleared via route¿¿",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the abbreviation SSR mean?",
    choices: {
      A: "Standard snow report IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Meanings and significance of associated terms",
      B: "Search and surveillance radar",
      C: "Surface strength of runway",
      D: "Secondary surveillance radar",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the abbreviation IMC mean?",
    choices: {
      A: "In most cases",
      B: "Instrument meteorological conditions",
      C: "International meteorological channel",
      D: "In meteorological conditions",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the abbreviation H24 mean?",
    choices: {
      A: "Sunset to sunrise",
      B: "Sunrise to sunset",
      C: "Continuous day and night service",
      D: "No specific working hours",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the abbreviation INS mean?",
    choices: {
      A: "Instrument navigation system",
      B: "Inertial navigation system",
      C: "International NOTAM system",
      D: "International navigation service",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the term WAY POINT mean?",
    choices: {
      A: "A general term meaning the taxiway-and the runway-system of an international airport",
      B: "A defined position on an aerodrome used for the calibration of the inertial navigationsystem IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Meanings and significance of associated terms",
      C: "A signal indicating the direction of the runway-in-use",
      D: "A specified geographical position used to define an area navigation route or the flight path ofan aircraft employing area navigation",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the abbreviation AIS mean?",
    choices: {
      A: "Airport information system",
      B: "Aerodrome identification signal-area",
      C: "Aeronautical information service",
      D: "Aerodrome information service",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the abbreviation MLS mean?",
    choices: {
      A: "Microwave landing system",
      B: "Minimum safe level",
      C: "Radar aided navigation",
      D: "Radio navigation",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the abbreviation RNAV mean",
    choices: {
      A: "Area navigation",
      B: "Route navigation",
      C: "Radar aided navigation",
      D: "Radio navigation",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An air traffic radar service in which the controller will inform the pilot of the bearing, distance and, if known, the level of conflicting traffic, but in which no avoiding action is given is known as a",
    choices: {
      A: "RAS",
      B: "RIS",
      C: "FIS IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Q-code groups commonly used in RTF air-ground com",
      D: "RS",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What is SSR an abbreviation of?",
    choices: {
      A: "Stationary Surveillance Radar",
      B: "Sector Surveillance Radar",
      C: "Secondary Sector Radar",
      D: "Secondary Surveillance Radar",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "The abbreviation MLS is a shortened form of",
    choices: {
      A: "Military Light Signals",
      B: "Mandatory Landing System",
      C: "Military Landing System",
      D: "Microwave Landing System",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does H24 mean?",
    choices: {
      A: "Operates 24 hours",
      B: "Sunrise to sunset",
      C: "Available 24 hours a day by prior notice only",
      D: "Aircraft handling available 24 hours a day",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "QNH is the Q-code to indicate",
    choices: {
      A: "The atmospheric pressure at aerodrome elevation (or at runway threshold)",
      B: "The atmospheric pressure measured at the aerodrome reference point (ARP)",
      C: "The atmospheric pressure referred to the highest obstacle located on the surface of an aerodrome",
      D: "The altimeter sub-scale setting to obtain elevation when on the ground",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "QFE is the RTF Q-code to indicate",
    choices: {
      A: "The atmospheric pressure corrected to the aircraft cockpit height",
      B: "The altimeter sub-scale setting to obtain the flight level reference datum",
      C: "The atmospheric pressure at aerodrome elevation (or at runway threshold)",
      D: "The atmospheric pressure referred to the highest fixed obstacle located on the surface of anaerodrome",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "In relation to Direction Finding a QDM is",
    choices: {
      A: "A true bearing of the aircraft measured from the VDF station",
      B: "A magnetic bearing of the aircraft measured from the VDF station",
      C: "A true bearing of the aircraft measured to the VDF station",
      D: "A magnetic heading for a pilot to steer to reach the VDF station",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "The pressure at the aerodrome reduced to sea level with regard to international standard atmosphere conditions is",
    choices: {
      A: "QFE",
      B: "QFF",
      C: "QRM",
      D: "QNH",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which of the following statements relating to message categories is correct?",
    choices: {
      A: "The lowest priority message category is Meteorological",
      B: "Urgency has greatest priority over everything except Distress",
      C: "Flight Safety messages have a higher priority than Direction Finding messages",
      D: "Flight Safety messages have a higher priority than Medical Urgency messages",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "The ATC message G-XX, departing aircraft advise moderate turbulence present below FL50 is a",
    choices: {
      A: "Flight Regularity message",
      B: "Meteorological message",
      C: "Flight Safety message",
      D: "Urgency message",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the correct way of transmitting the number 118.1 to indicate a frequency?",
    choices: {
      A: "one one eight decimal one",
      B: "one eighteen one",
      C: "one one eight one",
      D: "one one eight point one",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "The time is 4:15 pm. What is the correct way of transmitting this time if there is any possibility of confusion about the hour?",
    choices: {
      A: "Four fifteen in the afternoon",
      B: "One six one five",
      C: "Four fifteen PM",
      D: "Sixteen fifteen",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "When indications of time are passed on the RT for position reports, ETAs and EATs RTF operators should employ",
    choices: {
      A: "GMT",
      B: "LMT",
      C: "UTC",
      D: "EST",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "Which elements of a position report cannot be omitted?",
    choices: {
      A: "Aircraft identification, position, time, level",
      B: "Aircraft identification, position, time IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Q-code groups commonly used in RTF air-ground com",
      C: "Aircraft identification, position, level",
      D: "Aircraft identification, position, next position",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "Before transmitting the pilot should¿",
    choices: {
      A: "Make sure that the emergency frequency is tuned in at the same time",
      B: "Listen out on the frequency to ensure no interference with another station alreadytransmitting will occur",
      C: "Make sure that the aircraft is levelled off",
      D: "Always write the message and read it during the transmission",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "A pilot may file a flight plan with an ATSU during flight. Which air traffic service should normally be used for this purpose?",
    choices: {
      A: "FIR",
      B: "RADAR",
      C: "APPROACH",
      D: "TOWER",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "On the first call to an Air Traffic Service Unit a pilot should pass",
    choices: {
      A: "call-sign, service requested",
      B: "call-sign, aircraft type, position, heading, ETA",
      C: "call-sign, point of departure and current position, heading, level, intention, type ofservice required",
      D: "call sign only",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the word CANCEL mean/",
    choices: {
      A: "Wait and I will catch you",
      B: "A change has been made to your last clearance IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Q-code groups commonly used in RTF air-ground com",
      C: "Annul the previously transmitted clearance",
      D: "Consider that transmission as not sent",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which of these phrases is used if you want to communicate that a message: CONSIDER THAT TRANSMISSION AS NOT SENT",
    choices: {
      A: "My last transmission is cancelled",
      B: "Cancel my last message",
      C: "Forget it",
      D: "Disregard",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which word or phrase shall be used if you want to say: REDUCE YOUR RATE OF SPEECH?",
    choices: {
      A: "Speak slower",
      B: "Words twice",
      C: "Repeat",
      D: "Say again",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "To indicate that he is no longer occupying the active runway a pilot shall report to the controller",
    choices: {
      A: "Runway vacated",
      B: "Runway cleared",
      C: "Runway free",
      D: "Clear of runway",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which phrase should a pilot use to inform ATC that he is initiating a missed approach procedure",
    choices: {
      A: "Going around",
      B: "Missed approach",
      C: "Pulling up",
      D: "Overshooting IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Q-code groups commonly used in RTF air-ground com",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which phrase shall be used if you want to say COMMUNICATION IS DIFFICULT. PLEASE SEND EVERY WORD OR GROUP OF WORD TWICE?",
    choices: {
      A: "Words twice",
      B: "Say again, say again",
      C: "Repeat twice",
      D: "Message second time",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "How shall a pilot inform the control tower that he has to abandon the take-off manoeuvre",
    choices: {
      A: "Stopping",
      B: "Abandoning take-off",
      C: "Aborting take-off",
      D: "Cancelling take-off",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What does the instruction: FASTAIAR 345 STANDBY 118.9 FOR TOWER mean",
    choices: {
      A: "Fastair 345 should standby on the current frequency",
      B: "Fastair 345 should change frequency to 118.9 on which aerodrome data are being broadcast",
      C: "Fastair 345 should contact TOWER on 118.9",
      D: "Fastair 345 should listen on frequency 118.9 on which TOWER will Initiate furthercommunications",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which phraseology shall a pilot use if he receives an instruction from ATC which he cannot carry out",
    choices: {
      A: "Unable to comply",
      B: "Negative instruction",
      C: "Impossible to make it",
      D: "Disregard",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which word or phrase shall be used to indicate that a change has been made to your last clearance and this new clearance supersedes your previous clearance or part thereof",
    choices: {
      A: "Recleared",
      B: "Cleared",
      C: "Approved",
      D: "Break break",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which word or phrase shall be used to indicate a separation between portions of a message?",
    choices: {
      A: "Break",
      B: "Stop",
      C: "I say again",
      D: "Over",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which word shall be used to indicate that an error has been made in a transmission or message?",
    choices: {
      A: "Correction",
      B: "Correct",
      C: "Negative",
      D: "Disregard",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does the word Monitor mean",
    choices: {
      A: "Examine a system or procedure",
      B: "Wait and I will call you",
      C: "Establish radio contact with¿.",
      D: "D - Listen out on (frequency)",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which word or phrase shall be used when giving authorization to proceed under specified conditions?",
    choices: {
      A: "Approved IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Q-code groups commonly used in RTF air-ground com",
      B: "Go ahead",
      C: "Cleared",
      D: "I say again : proceed",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "When an aeronautical station broadcasts information to more than one station, the call starts with",
    choices: {
      A: "Message to all aircraft on this frequency¿",
      B: "Please listen¿",
      C: "All stations¿",
      D: "General broadcast¿",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "The instruction REPORT means",
    choices: {
      A: "pass me the following information",
      B: "file an ATSU report on landing",
      C: "return to home base",
      D: "read back this clearance",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What would you say if you are having trouble with communications and wish to have everything repeated twice?",
    choices: {
      A: "I say again",
      B: "Words twice",
      C: "Please repeat",
      D: "Speak twice",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "For clarity or confirmation of a transmission you would use the phrase",
    choices: {
      A: "Words twice",
      B: "I say again",
      C: "I repeat IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Q-code groups commonly used in RTF air-ground com",
      D: "Encore",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Certain RT procedures require messages to be broadcast to all stations using a particular frequency. Such messages would be preceded with the phrase",
    choices: {
      A: "All aircraft on frequency",
      B: "All aircraft",
      C: "Now hear this",
      D: "All stations",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "The phrase UNDER RADAR CONTROL means",
    choices: {
      A: "ATC instructions may be obeyed at the pilot¿s discretion",
      B: "ATC instructions must be obeyed unless avoiding immediate danger",
      C: "ATC information is advisory",
      D: "ATC will provide information on other traffic but no avoiding action will be given",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: 'The correct way to say "yes" on the RT is',
    choices: {
      A: "AFFIRMATIVE",
      B: "AFFIRM",
      C: "YES",
      D: "ROGER",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Clearances relating to the runway in use shall be read back only if the aircraft is to",
    choices: {
      A: "Enter, land on, take off from, cross and backtrack",
      B: "Enter, cross and backtrack",
      C: "Land on and take off from",
      D: "Enter, land on, take off from and backtrack",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "In addition to aircraft identification, routine position reporting on HF or VHF must contain",
    choices: {
      A: "Position, time and height",
      B: "Position, time, next reporting point and ETA",
      C: "Time, level, next reporting point and ETA",
      D: "Position, time, level, next position and ETA",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the radiotelephony call sign suffix for the aeronautical station providing radar service (in general)?",
    choices: {
      A: "RADAR",
      B: "CONTROL",
      C: "RADAR-CONTROL",
      D: "RADAR-SERVICE",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the radiotelephony call sign suffix for the aeronautical station indicating clearance delivery?",
    choices: {
      A: "CLEARANCE DELIVERY",
      B: "CLEARANCE",
      C: "DELIVERY",
      D: "RADIO",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the radiotelephony call sign for the aeronautical station indicating approach control radar departures",
    choices: {
      A: "RADAR",
      B: "CONTROL",
      C: "DEPARTURE",
      D: "APPROACH",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the radiotelephony call sign for the aeronautical station indicating approach control radar arrivals",
    choices: {
      A: "ARRIVAL IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Q-code groups commonly used in RTF air-ground com",
      B: "¿APPROACH",
      C: "¿RADAR",
      D: "¿DIRECTOR",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the radiotelephony call sign for the aeronautical station proiding approach control (no radar service)?",
    choices: {
      A: "RADAR",
      B: "ARRIVAL",
      C: "APPROACH",
      D: "CONTROL",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the radiotelephony call sign for the aeronautical station indicating area control centre (no radar)",
    choices: {
      A: "APPROACH",
      B: "CENTRE",
      C: "CONTROL",
      D: "RADAR",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the correct call sign of Fastair 345 in the initial call to the aerodrome control tower and the approach control unit, if the aircraft has a maximum take- off weight of more than 136 tonnes",
    choices: {
      A: "Fastair 345",
      B: "Heavy Fastair 345",
      C: "Fastair heavy 345",
      D: "Fastair 345 widebody",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What, if any, is the abbreviated call sign of Fastair 2345?",
    choices: {
      A: "No abbreviated form",
      B: "Fastair 345",
      C: "Fastair 45 IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Q-code groups commonly used in RTF air-ground com",
      D: "2345",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "The correct phonetic abbreviation for G-ZULU is",
    choices: {
      A: "GOLF ZULU",
      B: "GOLF LIME UNIFORM",
      C: "GOLF UNIFORM LIMA UNIFORM",
      D: "LIMA UNIFORM",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "VIRGIN 1, an aircraft in the HEAVY weight category, should make first contact with an ATSU as follows",
    choices: {
      A: "HEAVY VIRGIN 1",
      B: "VIRGIN 1 HEAVY",
      C: "VIRGIN HEAVY 1",
      D: "HEAVY 1",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "When shall an aircraft in the heavy-wake-turbulence category include the word HEAVY immediately after its call sign eg. Fastair 345 heavy",
    choices: {
      A: "In the initial call to the aerodrome control tower and the approach control unit",
      B: "Never",
      C: "In all calls",
      D: "In all calls to the aerodrome tower and the approach control unit",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "When shall the phrase TAKE-OFF be used by a pilot",
    choices: {
      A: "Only when the aircraft has already moved onto the active runway",
      B: "Never, it is used only by the control tower",
      C: "To inform TOWER when ready for departure",
      D: "To acknowledge take-off clearance only",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the consequence of a microphone button stuck on transmit (switched on)?",
    choices: {
      A: "The frequency can not be used by others",
      B: "None",
      C: "Other stations will have to use the WORD TWICE technique",
      D: "Readability will improve for all stations",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What phrase shall be used when asking for the readability of a transmission?",
    choices: {
      A: "Read you loud and clear",
      B: "Read back",
      C: "Report readability",
      D: "How do you read?",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What is meant by the phrase ¿READABILITY 4¿?",
    choices: {
      A: "Readable now and then",
      B: "Readable",
      C: "Perfectly readable",
      D: "Readable but with difficulty",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What is meant by the phrase ¿READABILITY 2¿?",
    choices: {
      A: "Readable but with difficulty",
      B: "Readable",
      C: "Unreadable",
      D: "Readable now and then",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "On the readability scale what does READABILITY 1 mean?",
    choices: {
      A: "Readable but with difficulty IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Q-code groups commonly used in RTF air-ground com",
      B: "Unreadable",
      C: "Readable",
      D: "Perfectly readable",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "A transmission given readability scale of 3 is defined as",
    choices: {
      A: "Readable",
      B: "Readable now and then",
      C: "Perfectly readable",
      D: "Readable but with difficulty",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "Test transmissions should include the word(s)",
    choices: {
      A: "Test",
      B: "Radio check",
      C: "Test transmission",
      D: "Testing, testing",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "Must a general call be acknowledged?",
    choices: {
      A: "Yes, but only from the station first called",
      B: "No",
      C: "Yes, from all stations in the sequence they have been addressed",
      D: "Yes, from all stations in a random sequence",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the correct way for the pilot to acknowledge that ATIS Information Golf has been received",
    choices: {
      A: "Information Golf",
      B: "Weather Golf received",
      C: "We have the Information IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Q-code groups commonly used in RTF air-ground com",
      D: "We have the ATIS Golf",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Fastair 345 has been instructed to contact Stephenville ARRIVAL on frequency 118.0. What is the correct way to indicate it will follow this instruction",
    choices: {
      A: "Changing to ARRIVAL Fastair 345",
      B: "Changing over Fastair 345",
      C: "118.0 Fastair 345",
      D: "Stephenville ARRIVAL Fastair 345",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which word shall be used to ask a station whether you have correctly received a message, clearance, instruction, etc?",
    choices: {
      A: "Confirm",
      B: "Correct",
      C: "Acknowledge",
      D: "Verify",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "During radar vectoring, the controller asks the pilot of XY-ABC to turn on to heading 360o. The correct read back of this instruction is",
    choices: {
      A: "A read back is not necessary as XY-ABC has been identified",
      B: "Heading north, X-BC",
      C: "Heading three hundred sixty, X-BC",
      D: "Heading three six zero, X-BC",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What shall the pilots read back be for CLIMB TO FL 280",
    choices: {
      A: "Climbing to flight level two eighty",
      B: "Climbing to flight level two eight zero",
      C: "Climbing two eight zero",
      D: "Climbing to two eighty",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which of the following messages sent by ATC to an aircraft in flight must be read back? 1. descend to (altitude) 3,000 feet 2 . wind 240o, 15 knots, gusts 30 knots 3. turn right heading 210 4 . reduce speed to 160 knots 1. squawk 1723 2. braking action poor",
    choices: {
      A: "1, 2, 3, 5",
      B: "all",
      C: "1, 3, 4, 5",
      D: "1, 3, 4, 5, 6",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which elements of instructions or information shall always be read back?",
    choices: {
      A: "QNH, SSR code, approach aid serviceability",
      B: "QNH, weather information, runway-in-use",
      C: "ATC clearance, speed instructions, runway state information",
      D: "SSR code, QNH, take-off clearance, speed instructions",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "ATC clears Fastair 345 to descent from FL 100 to FL 80. What is the correct read back by the pilot?",
    choices: {
      A: "Descending to 80, Fastair 345",
      B: "Leaving flight level 100 descending to flight level 80, Fastair 345",
      C: "Down to flight level 80, Fastair 345",
      D: "Leaving 100 to 80, Fastair 345",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which of the following instructions and information are required to be read back? 1. Descend to altitude 2000 ft 2. Wind 060/20 gusting 30 knots 3. Heading instructions 4. Speed control instructions 5. Squawk 2310 6. Runway braking action",
    choices: {
      A: "(i) (ii) and (iii) IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Q-code groups commonly used in RTF air-ground com",
      B: "(i) (iii) (iv) and (v)",
      C: "(i) (iii) (iv) (v) and (vi)",
      D: "All of them",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What is the correct reply to the instruction Climb to FL 280¿?",
    choices: {
      A: "Recleared Level Two Eight Zero",
      B: "Climb Two Eight Zero",
      C: "Climb to Two Hundred and Eighty",
      D: "Climb to Flight Level Two Eight Zero",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the correct reply to an ATC instruction which you cant comply with?",
    choices: {
      A: "Negative comply",
      B: "Negative instruction",
      C: "Negative compliance",
      D: "Unable to comply",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "When receiving radar vectors an aircraft XY-ABC is told ¿turn right heading 360, the correct reply is?",
    choices: {
      A: "There is no need to respond as you have been identified as XY-ABC",
      B: "Heading north, X-BC",
      C: "Heading three hundred and sixty, X-BC",
      D: "Heading three six zero, X-BC",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "The correct phraseology to instruct an aircraft to cease the MODE C SSR reply because of incorrect indications is",
    choices: {
      A: "Climbing to two point five",
      B: "Up to two thousand five hundred",
      C: "Climbing to two thousand five hundred feet",
      D: "Climbing to two thousand five hundred",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "Which of the following statements is true?",
    choices: {
      A: "An IFR flight may be commenced if the SSR transponder is unserviceable",
      B: "If the SSR transponder becomes unserviceable during an IFR flight it must be continuedunder VFR",
      C: "If the SSR transponder becomes unserviceable during an IFR flight ATC must be informed assoon as possible",
      D: "If the SSR transponder becomes unserviceable during an IFR flight it must be continuedunder VMC",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What shall the pilots read back be for CLIMB TO 2.500 FEET?",
    choices: {
      A: "Climbing to two point five",
      B: "Up to two thousand five hundred",
      C: "Climbing to two thousand five hundred feet",
      D: "Climbing to two thousand five hundred",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "If you are requested to REPORT FLIGHT CONDITIONS, what does that mean",
    choices: {
      A: "Indicate weather conditions as wind, visibility, temperature",
      B: "Indicate whether you are flying in IMC or in VMC",
      C: "Indicate if visibility is sufficient for landing",
      D: "Indicate whether you are flying IFR or VFR",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      'All messages relating to an aircraft"s climb or descent to a HEIGHT or ALTITUDE should',
    choices: {
      A: 'employ the word "TO" followed immediately by the word HEIGHT or ALTITUDE',
      B: 'avoid using the word "TO" altogether',
      C: 'employ the word "TO" followed immediately by the QFE or QNH',
      D: "be preceded by the required altimeter subscale setting",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An aircraft encountering radio communication failure on an IFR flight in IMC has to commence descent over the designated navigation aid serving the destination aerodrome (no EAT received)",
    choices: {
      A: "After 3 minutes, if an expected approach time is not acknowledged",
      B: "5 minutes after the last expected approach time acknowledged",
      C: "Immediately after reaching in any case",
      D: "At, or as close to, the ETA resulting from the current flight plan",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "In case the transponder fails before the departure for an IFR flight, the pilot shall",
    choices: {
      A: "Inform FIS for relay to AIS",
      B: "Obtain prior permission by ATC to conduct the flight",
      C: "Insert under item 18 of the flight plan TRANSPONDER UNSERVICEABLE and inform ATC afterdeparture",
      D: "Cancel flight",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An aircraft encountering radio communication failure on an IFR flight in IMC has to hold over the designated navigation aid serving the destination aerodrome",
    choices: {
      A: "3 minutes, if an expected approach time is not acknowledged",
      B: "Under no circumstances",
      C: "5 minutes in any case",
      D: "Until the expected approach time last received and acknowledged",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "In case of a SSR transponder failure occurring after departure of an IFR flight, the pilot shall",
    choices: {
      A: "Land at the nearest suitable aerodrome for repair",
      B: "Inform the competent ATC unit immediately",
      C: "Squawk 7600",
      D: "Continue the flight in VMC",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "A departing aircraft experiencing radio communication failure on an IFR flight under radar vectors has to",
    choices: {
      A: "Squawk 7600 and maintain the heading last assigned by ATC for a period of 3 minutes andthen return to the flight path in accordance with the current flight plan",
      B: "Squawk 7600 and thereafter return to the route indicated in the current flight plan in themost direct manner",
      C: "Squawk 7600, maintain present heading for 1 minute and thereafter return to the routeindicated in the current flight plan on the shortest way",
      D: "Squawk 7600 and thereafter, regardless of any limitation instructed by ATC, return to theroute indicated in the current flight plan on the shortest way",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An aircraft encountering radio communication failure on an IFR flight in IMC has to land, if possible, within",
    choices: {
      A: "30 minutes after ETA or the last EAT, whichever is later",
      B: "30 minutes after noticing the radio failure",
      C: "30 minutes after waiting for the EAT",
      D: "15 minutes after vacating the transition layer",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Within the European Region, an aircraft experiencing radio communication failure on an IFR departure has to squawk 7600 and",
    choices: {
      A: "Climb immediately to the cruising level indicated in the flight plan",
      B: "Maintain the level last assigned by the ATC for a period of 3 minutes and then climb inaccordance with the flight plan",
      C: "Land at the departure aerodrome in any case",
      D: "Maintain the altitude last assigned by ATC for a period of 5 minutes and then continue inaccordance with the flight plan",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An aircraft on an IFR flight in VMC experiences radio communication failure. The aircraft is assumed to",
    choices: {
      A: "Land at the destination aerodrome",
      B: "Return to the aerodrome of departure",
      C: "Land at the alternate aerodrome",
      D: "Land at the nearest suitable aerodrome",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An aircraft experiencing radio communication failure on an IFR flight in IMC is assumed to",
    choices: {
      A: "A - Proceed in accordance with the current flight plan to the designated navigation aidserving the destination aerodrome",
      B: "Proceed to an area from where the flight can be continued according to the visual flightrules",
      C: "Divert to the most suitable aerodrome according to the route of flight",
      D: "Execute a VMC approach at the nearest suitable aerodrome",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "An aircraft encountering radio communication failure on an IFR flight in VMC is assumed to",
    choices: {
      A: "Continue to fly in VMC, land at the nearest suitable aerodrome, report its arrival",
      B: "Leave controlled airspace and continue the flight within uncontrolled airspace",
      C: "Squawk IDENT and proceed to the alternate aerodrome",
      D: "Continue the flight to destination aerodrome in any case",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "After suffering a radio receiver failure the pilots should make blind transmissions preceded by the phrase ¿Transmitting blind due to receiver failure¿ and subsequently",
    choices: {
      A: "hold for 5 minutes",
      B: "proceed to the pre-planned alternate",
      C: "enter the next en-route holding pattern encountered",
      D: "advise the time of the next intended transmission",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the action required to be taken on an IFR flight after a transponder failure?",
    choices: {
      A: "Inform ATC immediately and continue VFR",
      B: "Land immediately",
      C: "Inform ATC immediately",
      D: "Continue flight in VMC",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the correct action of a flight on an IFR flight plan in IMC conditions if it experiences total communication failure?",
    choices: {
      A: "Continue as filed to beacon over the destination airfield, squawk 7600",
      B: "Continue in VMC",
      C: "Continue as filed to beacon over the destination airfield, maintain assigned squawk",
      D: "Leave controlled airspace",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "On an IFR flight two way communications is lost as the aircraft is holding above the final destination. The expected approach time (EAT) was passed as 1420 UTC before communications was lost. The aircraft should squawk 7600 and make an approach to land at",
    choices: {
      A: "the EAT, plus or minus 10 minutes",
      B: "not before the EAT and no later than 10 minutes after EAT",
      C: "not before the EAT and no later than 20 minutes after EAT",
      D: "not before the EAT and no later than 30 minutes after EAT",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "If an aircraft has had a radio failure, the SSR should be set to",
    choices: {
      A: "7700",
      B: "2000",
      C: "7600",
      D: "7500",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "A message concerning a protected medical transport operated by aircraft assigned exclusively to medical transportation shall be preceded by the signal",
    choices: {
      A: "MEDICAL TRANSPORT",
      B: "PAN PAN MEDICAL",
      C: "PROTECTED TRANSPORT",
      D: "PAN PAN TRANSPORT",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What do the spoken words PAN PAN MEDICAL mean?",
    choices: {
      A: "The phrase/signal is inadmissible in radiotelephony",
      B: "The aircraft has a sick passenger on board and requests priority to land",
      C: "The aircraft has an urgent need of medical care upon landing at destination airport",
      D: "The message which follows concerns a protected medical transport operated by aircraftassigned exclusively to medical transportation",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the initial message for an aircraft in a protected medical transportation flight?",
    choices: {
      A: "PAN PAN MEDICAL",
      B: "MEDICAL TRANSPORT",
      C: "TRANSPORTATION MEDICAL",
      D: "MEDICAL PAN PAN",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "The distress communication and silence conditions shall be terminated by transmitting a message. Which words shall this message include?",
    choices: {
      A: "Disregard distress communication, OUT",
      B: "Emergency communication finished",
      C: "MAYDAY traffic ended",
      D: "Distress traffic ended",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "When an aircraft is no longer in distress, it shall transmit a message cancelling the distress condition. Which words shall this message include?",
    choices: {
      A: "MAYDAY, resuming normal operations IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Q-code groups commonly used in RTF air-ground com",
      B: "¿cancel distress",
      C: "¿MAYDAY cancelled",
      D: "distress condition terminated",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Radio silence can be imposed by an aeronautical station in case of",
    choices: {
      A: "Technical difficulties",
      B: "Urgency communication",
      C: "Overload of the frequency",
      D: "Distress traffic",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Which of the following messages shall a station in control of distress use to impose silence?",
    choices: {
      A: "Stop transmitting, EMERGENCY",
      B: "Stop transmitting, DISTRESS",
      C: "Stop transmitting, MAYDAY",
      D: "All stations in this frequency, MAYDAY traffic",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "A signal sent by radiotelephony consisting of the spoken word MAYDAY MAYDAY MAYDAY means",
    choices: {
      A: "The aircraft is forced to perform a fuel dumping procedure",
      B: "The aircraft has a very urgent message to transmit concerning the safety of a ship,aircraft or vehicle",
      C: "The aircraft has a message to transmit concerning adverse weather conditions along itsroute of flight",
      D: "Imminent danger threatens the aircraft and immediate assistance is required",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "When an aircraft station receives the call ALL STATIONS STEPHENVILLE RADAR, DISTRESS TRAFFIC ENDED it is requested",
    choices: {
      A: "Discontinue communication with Stephenville RADAR IFR COMMUNICATIONS INTERNATIONAL AGREEMENTS AND - Q-code groups commonly used in RTF air-ground com",
      B: "To impose silence to other stations in its vicinity",
      C: "Acknowledge receipt of this message",
      D: "To resume normal communication with Stephenville RADAR",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "The distress signal and the distress message to be sent by an aircraft in distress be on",
    choices: {
      A: "The FIS frequency designated for the airspace concerned",
      B: "The emergency frequency in any case",
      C: "The regional guard frequency",
      D: "The air-ground frequency in use at the time",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "When an aircraft station receives the call ALL STATIONS STEPHENVILLE RADAR, STOP TRANSMITTING MAYDAY it is requested",
    choices: {
      A: "To continue normal communication on the frequency in use",
      B: "Not to interfere with the distress communication",
      C: "To assist Stephenville RADAR in handling the distress traffic",
      D: "To leave the frequency in use",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "In a distress situation it may be necessary to impose silence either on all stations or on a particular station. This action of imposing silence may be performed",
    choices: {
      A: "only by the ground station controlling the frequency",
      B: "by either the aircraft in distress or the station in control of the distress incident",
      C: "by any station who considers it necessary to impose silence",
      D: "only by the distress and diversion cell at the Rescue Control Centre (RCC)",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "The urgency message to be sent by an aircraft reporting an urgency condition shall contain at least the following elements/details",
    choices: {
      A: "Name of the station addressed, present position, assistance required",
      B: "Aircraft call sign, destination airport, ETA at destination, route of flight",
      C: "Aircraft call sign, nature of the urgency condition, pilots intention, present position, level IFR COMMUNICATIONS RELEVANT WEATHER INFORMATION TERMS - Aerodrome weather",
      D: "Aircraft identification, aerodrome of departure, level and heading",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "Which of the following statements is correct?",
    choices: {
      A: "The urgency communications have priority over all the other communications",
      B: "The urgency communications have priority over all the other communications, except distress",
      C: "There is no difference regarding priority between distress communications and urgencycommunications",
      D: "ATC clearances have the same priority as urgency communications",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "On hearing an urgency message a pilot shall",
    choices: {
      A: "Impose radio silence on the frequency in use",
      B: "Acknowledge the message immediately",
      C: "Monitor the frequency to ensure assistance if required",
      D: "Change the frequency, because radio silence will be imposed on the frequency in use",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "A signal sent by radiotelephony consisting of the spoken words PAN PAN, PAN PAN, PAN PAN means",
    choices: {
      A: "An aircraft on final approach is starting the missed approach procedure",
      B: "Imminent danger threatens the aircraft and immediate assistance is required",
      C: "The aircraft is diverting from the route cleared because of a thunderstorm and asks forimmediate re-clearance",
      D: "The aircraft has a very urgent message to transmit concerning the safety of a ship,aircraft or other vehicle, but immediate assistance is not required",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "When transmitting runway visual range (RVR) for runway 16 ATC will use the following phrase?",
    choices: {
      A: "RVR runway 16 touchdown metres, mid-point metres, stop end metres",
      B: "The values of the transmissiometer are metres and metres",
      C: "RVR at the beginning of runway 16 is metres IFR COMMUNICATIONS RELEVANT WEATHER INFORMATION TERMS - Aerodrome weather",
      D: "RVR runway 16 metres diagonal metres diagonal metres",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does FRICTION COEFFICIENT 20 in a runway report mean?",
    choices: {
      A: "Braking action medium",
      B: "Braking action poor",
      C: "Braking action good",
      D: "Braking action unreliable",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "What does FRICTION COEFFICIENT 45 in a runway report mean?",
    choices: {
      A: "Braking action not measurable",
      B: "Braking action medium",
      C: "Braking action poor",
      D: "Braking action good",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "Under what runway conditions is the braking action reported to be UNRELIABLE?",
    choices: {
      A: "Runway covered with dry snow",
      B: "Runway covered with ice",
      C: "Runway covered with wet snow and slush",
      D: "Runway conditions normal",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "A braking coefficient of 0.45 indicates runway braking action",
    choices: {
      A: "poor",
      B: "medium",
      C: "good",
      D: "unmeasurable",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "In a METAR, cloud reported as ¿broken¿ means",
    choices: {
      A: "3 - 4 octas",
      B: "2- 3 octas",
      C: "5-7 octas",
      D: "4-6 octas",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "CAVOK may be used in place of visibility, weather and cloud, provided that visibility is or more; there is no cloud below or MSA whichever is the and no significant weather phenomena.",
    choices: {
      A: "10 km, 5000 ft AAL, lower",
      B: "10 nm, 5000 ft, AAL, higher",
      C: "10 nm, 5000 ft, AGL lower",
      D: "10 km, 5000 ft, AAL, higher",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "Weather information contained in the ATIS is updated every",
    choices: {
      A: "30 minutes",
      B: "20 minutes",
      C: "60 minutes",
      D: "50 minutes",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "Meteorological information broadcast in VOLMET is the same as",
    choices: {
      A: "TAFs",
      B: "SPECI TAF sometimes with METARS",
      C: "SIGMETs",
      D: "METARs with TRENDS and sometimes TAFs",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What are the consequences of an aircraft with a transmit button stuck on?",
    choices: {
      A: "It improves readability for everyone else IFR COMMUNICATIONS RELEVANT WEATHER INFORMATION TERMS - Weather broadcast",
      B: "It has no effect on other transmissions",
      C: "It prevents other aircraft transmissions being heard but does not affect the readability of ATCtransmissions",
      D: "No one else can use the frequency",
    },
    correct: "D",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "The RTF band allocated to aviation VHF communications is",
    choices: {
      A: "30MHz to 300MHz",
      B: "108 MHz to 117.95MHz",
      C: "118MHz to 136.95MHz",
      D: "108MHz to 111.95MHz",
    },
    correct: "C",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "HF Frequency bands used for aviation are between",
    choices: {
      A: "2850 to 22000 KHz",
      B: "2850 to 25000 MHz",
      C: "258 to 2500 MHz",
      D: "2580 to 22000 KHz",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question:
      "What is the expected range of VHF air to ground communications if an aircraft is flying 35,000 feet above the transmitter height?",
    choices: {
      A: "187 nm",
      B: "234 nm",
      C: "150 nm",
      D: "267 nm",
    },
    correct: "B",
    ref: "ATPL A, H AND I.R.",
  },
  {
    question: "The VHF aviation band channel spacing in upper airspace is",
    choices: {
      A: "8.33 KHz",
      B: "12.5 KHz IFR COMMUNICATIONS RELEVANT WEATHER INFORMATION TERMS - Weather broadcast",
      C: "25.0 KHz",
      D: "7.98 KHz",
    },
    correct: "A",
    ref: "ATPL A, H AND I.R.",
  },
];

export default ifrCommunications;
