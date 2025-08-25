const massAndBalance = [
  {
    question:
      "The stalling speed of an aeroplane will be highest when it is loaded with a",
    choices: {
      A: "high gross mass and aft centre of gravity",
      B: "low gross mass and forward centre of gravity",
      C: "low gross mass and aft centre of gravity",
      D: "high gross mass and forward centre of gravity",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For a conventional, nose tricycle gear aircraft configuration, the higher the take-off mass: 1. Manoeuvrability is reduced 2. Range will decrease 3. endurance will increase 4. Gliding range will reduce.",
    choices: {
      A: "All statements are correct",
      B: "Statement 3 only is correct",
      C: "Statements 1 and 4 are correct",
      D: "Statement 4 is correct",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When considering the effects of increased mass on an aeroplane, which of the following is true?",
    choices: {
      A: "Flight endurance will be increased",
      B: "Stalling speeds will be lower",
      C: "Gradient of climb for a given power setting will be higher",
      D: "Stalling speeds will be higher",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If an aeroplane is at a higher mass than anticipated, for a given airspeed the angle of attack will",
    choices: {
      A: "remain constant, drag will decrease and endurance will decrease",
      B: "be decreased, drag will decrease and endurance will increase",
      C: "be greater, drag will increase and endurance will decrease",
      D: "remain constant, drag will increase and endurance will increase",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Fuel loaded onto an aeroplane is 15,400 kg but is erroneously entered into the load and trim sheet as 14,500 kg. This error is not detected by the flight crew but they will notice that",
    choices: {
      A: "V1 will be reached sooner than expected MASS AND BALANCE INTRODUCTION TO MASS AND BALANCE - Mass Limitations",
      B: "speed at un-stick will be higher than expected",
      C: "V1 will be increased",
      D: "the aeroplane will rotate much earlier than expected",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In order to provide an adequate BUFFET BOUNDARY at the commencement of the cruise a speed of 1.3 Vs is used. At a mass of 120,000 kg this is a CAS of 180 knots. If the mass of the aeroplane is increased to 135,000 kg the value of 1.3Vs will be",
    choices: {
      A: "increased to 202 knots but since the same angle of attack is used, drag and range will remainthe same",
      B: "unaffected as Vs always occurs at the same angle of attack",
      C: "increased to 191 knots, drag will decrease and air distance per kg of fuel will increase",
      D: "increased to 191 knots drag will increase and air distance per kg of fuel will decrease",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "At maximum certificated take-off mass an aeroplane departs from an airfield which is not limiting for either take-off or landing masses. During initial climb the number one engine suffers a contained disintegration. An emergency is declared and the aeroplane returns to departure airfield for an immediate landing. The most likely result of this action will be: Answers",
    choices: {
      A: "a landing short resultant from the increased angle of approach due to the very high aeroplanemass",
      B: "a high threshold speed and possible undercarriage or other structural failure",
      C: "a high threshold speed and a shorter stop distance",
      D: "a landing further along the runway than normal",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During a violent avoidance manoeuvre, a light twin aircraft, was subjected to an instantaneous load factor of 4.2. The Flight manual specifies that the aircraft is certified in the normal category for a load factor of -1.9 to +3.8. Considering the certification requirements and taking into account that the manufacturer of the twin did not include, during its conception, a supplementary margin in the flight envelope, it might be possible to observe",
    choices: {
      A: "rupture of one or more structural components",
      B: "a permanent deformation of the structure",
      C: "an elastic deformation whilst the load was applied, but no permanent distortion",
      D: "no distortion, permanent or temporary of the structure",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If an extra load is loaded into an aircraft the stall speed is likely to",
    choices: {
      A: "Stay the same",
      B: "Decrease",
      C: "Increase",
      D: "Change depending on whether the load was placed FWD or AFT of the C of G",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Overloading has the following effects on performance",
    choices: {
      A: "Increased take off and landing distance, reduced rate of climb and increased fuel consumption",
      B: "Increased take off and landing distance, increased rate of climb and increased fuel consumption",
      C: "Reduced take off and landing distance, increased VNE and increased fuel consumption",
      D: "Reduced take off and landing distance, increased VNE and reduced rate of climb",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Over-loading would result in",
    choices: {
      A: "a decrease in stalling speed",
      B: "a decrease in fuel consumption",
      C: "an increase in range",
      D: "a reduction of aircraft performance",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "During take-off you notice that, for a given elevator input, the aeroplane rotates much more rapidly than expected. This is an indication that",
    choices: {
      A: "the aeroplane is overloaded",
      B: "the centre of gravity may be towards the aft limit",
      C: "the centre of gravity is too far forward",
      D: "the centre of pressure is aft of the centre of gravity",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane is loaded with its centre of gravity towards the rear limit. This will result in",
    choices: {
      A: "an increased risk of stalling due to a decrease in tail-plane moment MASS AND BALANCE INTRODUCTION TO MASS AND BALANCE - Mass Limitations",
      B: "a reduced fuel consumption as a result of reduced drag",
      C: "an increase in longitudinal stability",
      D: "a reduction in power required for a given speed",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the centre of gravity of an aeroplane moves forward during flight the",
    choices: {
      A: "become heavier making the aeroplane more difficult to manoeuvre in pitch",
      B: "become lighter making the aeroplane more difficult to manoeuvre in pitch",
      C: "become heavier making the aeroplane more easy to manoeuvre in pitch",
      D: "become lighter making the aeroplane more easy to manoeuvre in pitch",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The mass displacement caused by landing gear extension",
    choices: {
      A: "does not create a longitudinal moment",
      B: "creates a pitch-up longitudinal moment",
      C: "creates a longitudinal moment in the direction (pitch-up or pitch-down) determined by the type of landing gear",
      D: "creates a pitch-down longitudinal moment",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the centre of gravity is near the forward limit the aeroplane will",
    choices: {
      A: "benefit from reduced drag due to the decrease in angle of attack",
      B: "require elevator trim which will result in an increase in fuel consumption",
      C: "require less power for a given airspeed",
      D: "tend to over rotate during take-off",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following statements is correct?",
    choices: {
      A: "If the actual centre of gravity is close to the forward limit of the centre of gravity theaeroplane may be unstable, making it necessary to increase elevator forces MASS AND BALANCE INTRODUCTION TO MASS AND BALANCE - Mass Limitations",
      B: "If the actual centre of gravity is located behind the aft limit of centre of gravity it ispossible that the aeroplane will be unstable, making it necessary to increase elevator forces",
      C: "A tail heavy aeroplane is less stable and stalls at a lower speed than a nose heavy aeroplane",
      D: "The lowest stalling speed is obtained if the actual centre of gravity is located in the middle between the aft and forward limit of centre of gravity",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is most likely to affect the range of centre of gravity aeroplane?",
    choices: {
      A: "The need to minimise drag forces and so improve efficiency",
      B: "Location of the undercarriage",
      C: "The need to maintain a",
      D: "Elevator and tail-plane (horizontal stabiliser) effectiveness in all flight conditions",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When the centre of gravity is at the forward limit, an aeroplane will be",
    choices: {
      A: "extremely stable and will require excessive elevator control to change pitch",
      B: "extremely stable and require small elevator control to change pitch",
      C: "extremely unstable and",
      D: "extremely unstable and",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Assuming gross mass, altitude and airspeed remain unchanged, movement of the the forward to the aft limit will cause",
    choices: {
      A: "increased cruise range",
      B: "higher stall speed",
      C: "lower optimum cruising",
      D: "reduced maximum cruise",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane, which is scheduled to fly an oceanic sector, is due to depart from a high altitude airport in the tropics at 1400 local time. The airport has an exceptionally long runway. Which of the following is most likely to be the limiting factor(s) in determining the take-off mass?",
    choices: {
      A: "maximum certificated take-off mass MASS AND BALANCE INTRODUCTION TO MASS AND BALANCE - Mass Limitations",
      B: "maximum zero fuel mass",
      C: "altitude and temperature of the departure airfield",
      D: "en route obstacle clearance requirements",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With the centre of gravity on the forward limit which of the following is to be expected?",
    choices: {
      A: "A decrease of the stalling speed",
      B: "A decrease in the landing speed",
      C: "A decrease in range",
      D: "A tendency to yaw to the right on take-off",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In cruise flight, an aft centre of gravity location will",
    choices: {
      A: "decrease longitudinal static stability",
      B: "increase longitudinal static stability",
      C: "does not influence longitudinal static stability",
      D: "not change the static curve of stability into longitudinal",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A forward C of G would result in",
    choices: {
      C: "A reduced rate of climb",
      D: "A decrease in cruise range A decrease in both rate of climb and cruise range An increase in both rate of climb and cruise range",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What effect does the CG on the aft limit have on the fuel consumption of an aeroplane?",
    choices: {
      A: "Increases",
      B: "Decreases MASS AND BALANCE INTRODUCTION TO MASS AND BALANCE - Mass Limitations",
      C: "No effect",
      D: "Marginal increase",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which combination of weight and CG position will produce the highest stalling speed?",
    choices: {
      A: "Heavy weight and aft CG",
      B: "Heavy weight and forward CG",
      C: "Low weight and aft CG",
      D: "Low weight and forward CG",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If the CG is aft of the neutral point it results in",
    choices: {
      A: "increased stability with increased elevator trim",
      B: "Decreased stability with decreased elevator trim",
      C: "Neutral stability",
      D: "Longitudinal instability",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An aeroplane is said to be NEUTRALLY STABLE. This is likely to",
    choices: {
      A: "Be caused by the CG towards the forward limit",
      B: "Be caused by the CG at the aerodynamic centre of the aircraft",
      C: "Be totally unrelated to the position of the CG",
      D: "Cause the CG to move forward",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The effect of operating an aeroplane with a CG too far forward is to experience",
    choices: {
      A: "Inability or difficulty in trimming when flaps are retracted",
      B: "Lower stick forces per G loading",
      C: "Inability or difficulty in flaring on touch down, resulting in nosewheel landing first",
      D: "Lower stalling speed MASS AND BALANCE INTRODUCTION TO MASS AND BALANCE - Mass Limitations",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The handling and performance problems encountered with a CG too far aft include",
    choices: {
      A: "Improvement in nose wheel steering",
      B: "Higher stick forces per G loading with no risk of over-stressing the airframe in manoeuvres",
      C: "Difficulty or inability to recover from a spin",
      D: "No likelihood of a nose up overbalance (on a bicycle gear aircraft) on the ground resulting in tail damage",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For a given configuration, the stall speed of an aeroplane will be highest when loaded",
    choices: {
      A: "to a low total mass with the most forward CG",
      B: "to a low total mass with the most aft CG",
      C: "to the maximum allowable mass with the most aft CG",
      D: "to the maximum allowable mass with the most forward CG",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What effect has a centre of gravity close to the most forward limit?",
    choices: {
      A: "A reduction in the specific fuel consumption",
      B: "A decreased induced drag",
      C: "A better rate of climb capability",
      D: "A reduced rate of climb capability",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The effect of an aircraft being tail heavy would be a",
    choices: {
      A: "decrease in range",
      B: "tendency to pitch down during final stage of landing",
      C: "decreased stalling speed",
      D: "tendency to roll right during take-off",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "One effect on an aircraft that is nose-heavy is",
    choices: {
      A: "a tendency for the nose to pitch up",
      B: "an increase in range",
      C: "a decrease in stability",
      D: "an increase in drag, due to excessive elevator trim",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "With the centre of gravity outside the forward limit",
    choices: {
      A: "longitudinal stability would be reduced and stick forces in pitch increased",
      B: "longitudinal stability would be reduced and stick forces in pitch reduced",
      C: "longitudinal stability would be increased and stick force in pitch reduced",
      D: "longitudinal stability would be increased and stick forces in pitch increased",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Fuel consumption brings the CG forward in flight. The effect of this is to",
    choices: {
      A: "increase stability which means greater control forces in pitch",
      B: "decrease stability which means greater control forces in pitch",
      C: "increase stability which means lower control forces in pitch",
      D: "decrease stability which means lower control forces in pitch",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the effect of moving the centre of gravity from the forward limit to the aft limit?",
    choices: {
      A: "increases stability",
      B: "increases fuel consumption",
      C: "increased range",
      D: "increases stalling speed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If during flight a considerable amount of fuel was transferred from the fuselage forward fuel tank to the fuselage rear tank, what effect would this have on the aircraft?",
    choices: {
      A: "increase range and stall speed MASS AND BALANCE INTRODUCTION TO MASS AND BALANCE - Mass Limitations",
      B: "increase range and decrease stall speed",
      C: "increase stability and decrease trim drag",
      D: "increase stability and trim drag",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the fuel load of a large aircraft was given in litres, but was entered on the load sheet in kilograms, how would this affect the expected handling of the aircraft?",
    choices: {
      A: "the stick force required on rotation will be lighter",
      B: "the stick force required on rotation will be heavier",
      C: "the stick force required would be the same in both cases",
      D: "the stick force required would be the same in both cases but the rate of climb will be less",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following statements is correct?",
    choices: {
      A: "The station (STA) is always the location of the centre of gravity in relation to a referencedpoint, normally the leading edge of the wing at MAC",
      B: "A tail heavy aeroplane is less stable and stalls at a lower speed than a nose heavy aeroplane",
      C: "The centre of gravity is given in percent of MAC calculated from the leading edge of the wing, where MAC always = the wing chord halfway between the centre line of the fuselage and the wingtip",
      D: "if the actual centre of gravity is located behind the aft limit the aeroplane longitudinalstability increases",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "If the aeroplane is neutrally stable this would suggest that",
    choices: {
      A: "the CG is forward",
      B: "the CG is in mid range",
      C: "the CG is on the rear limit",
      D: "the CG is behind the rear limit",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "An aeroplane is said to be NEUTRALLY STABLE. This is likely to",
    choices: {
      A: "be caused by a centre of gravity which is towards the forward limit",
      B: "be caused by a centre of gravity which is towards the rearward limit",
      C: "be totally unrelated to the position of the centre of gravity",
      D: "cause the centre of gravity to move forwards",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "What determines the longitudinal stability of an aeroplane?",
    choices: {
      A: "The dihedral, angle of sweepback and the keel effect",
      B: "The effectiveness of the horizontal stabiliser; rudder and rudder trim tab",
      C: "The relationship of thrust and lift to weight and drag",
      D: "The location of the centre of gravity with respect to the neutral point",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "Select the correct statement for the CG safe range",
    choices: {
      A: "The safe range falls between the front and rear CG limits but does not include them",
      B: "The safe range falls between the front and rear CG limits but only includes the forward limit",
      C: "The safe range falls between the front and rear CG limits but only includes the aft limit",
      D: "The safe range falls between the front and rear CG limits and includes both limits",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "When must the centre of gravity be computed?",
    choices: {
      A: "After every 400 hrs inspection",
      B: "Prior to every flight MASS AND BALANCE INTRODUCTION TO MASS AND BALANCE - Mass Limitations",
      C: "At least every four years",
      D: "During every yearly inspection",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "In cruise, an extreme aft longitudinal centre of gravity",
    choices: {
      A: "moves away the cyclic stick from its forward stop and increases the stress in the rotor head",
      B: "brings the cyclic stick closer to its forward stop and decreases the stress in the rotor head",
      C: "moves away the cyclic stick from its forward stop and decreases the stresses in the head rotors",
      D: "brings the cyclic stick closer to its forward stop and increases the stress in the rotor head",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A helicopter in the hover that requires an excessive amount of aft and right cyclic may indicate the centre of gravity is too far",
    choices: {
      A: "Forward and laterally too far to the left",
      B: "Aft and laterally too far to the left",
      C: "Aft and laterally too far to the right",
      D: "Forward and laterally too far to the right",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A helicopter in the hover that requires an excessive amount of forward and right cyclic may indicate the centre of gravity is too far",
    choices: {
      A: "forward and laterally too far to the left",
      B: "forward and laterally too far to the right",
      C: "aft and laterally too far to the left",
      D: "aft and laterally too far to the right",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A helicopter with its fuel tanks located aft of the centre of gravity is more prone to",
    choices: {
      A: "exceed its aft centre of gravity limits when landing with little fuel",
      B: "exceed its forward centre of gravity limits when taking off with full fuel",
      C: "exceed its aft centre of gravity limits when taking off with its fuel tanks less than half full",
      D: "exceed its forward centre of gravity limits when landing with little fuel MASS AND BALANCE LOADING - Terminology",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Exceeding the forward centre of gravity limit will result in",
    choices: {
      A: "The helicopter being nose heavy and the pilot may run out of aft cyclic",
      B: "The helicopter being nose heavy and the pilot may run out of forward cyclic",
      C: "The helicopter being tail heavy and the pilot may run out of forward cyclic",
      D: "The helicopter being tail heavy and the pilot may run out of aft cyclic",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Who determines the allowable centre-of-gravity range for a helicopter?",
    choices: {
      A: "The licensed engineer carrying out weighing",
      B: "The manufacturer of the helicopter",
      C: "The national aviation authority",
      D: "The pilot in command",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The term USEFUL LOAD as applied to an aeroplane includes",
    choices: {
      A: "traffic load only",
      B: "traffic load plus usable fuel",
      C: "the revenue-earning portion of traffic load only",
      D: "the revenue-earning portion of traffic load plus usable fuel",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With reference to mass and balance calculations (on an aeroplane) a datum point is used. This datum point is",
    choices: {
      A: "a point near the centre of the aeroplane. It moves longitudinally as masses are added forwardand aft of its location",
      B: "the point through which the sum of the mass values (of the aeroplane and its contents) isassumed to act vertically",
      C: "a fixed point from which all balance arms are measured. It may be located anywhere on the aeroplane's longitudinal axis or on the extensions to that axis",
      D: "a point from which all balance arms are measured. The location of this point varies with the MASS AND BALANCE LOADING - Terminology",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Take-off mass is described as",
    choices: {
      A: "The take-off mass subject to departure airfield limitations",
      B: "The mass of an aeroplane including everything and everyone contained within it at the start of the take-off run",
      C: "DOM fuel but without traffic load",
      D: "The lowest of performance limited and structural limited T.O.M",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      ". the maximum zero-fuel mass: 1. is a regulatory limitation 2. is calculated for a maximum load factor of +3.5 g 3. is based on the maximum permissible bending moment at the wing root 4. is defined on the assumption that fuel is consumed from the outer wing tanks first 5. is defined on the assumption that fuel is consumed from the inner wing tanks first",
    choices: {
      A: "1, 2, 3",
      B: "2, 3, 5",
      C: "1, 3, 5",
      D: "2, 3, 4",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The term useful load as applied to a light aircraft includes",
    choices: {
      A: "the revenue-earning portion of load only",
      B: "the revenue-earning portion of load plus usable fuel",
      C: "Pilot(s), operating items, passengers, baggage, cargo and usable fuel",
      D: "traffic load and usable fuel only",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Define the useful load.",
    choices: {
      A: "Traffic load plus dry operating mass MASS AND BALANCE LOADING - Terminology",
      B: "Traffic load plus usable fuel mass",
      C: "Dry operating mass plus usable fuel load",
      D: "The part of the traffic load which generates revenue",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The useful load is",
    choices: {
      A: "TOM - fuel mass",
      B: "BEM plus fuel load",
      C: "TOM minus the DOM",
      D: "TOM minus the operating mass",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "In mass and balance terms, what is an index?",
    choices: {
      A: "A cut down version of a force",
      B: "A moment divided by a constant",
      C: "A moment divided by a mass",
      D: "A mass divided by a moment",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The distance from the datum to the CG is",
    choices: {
      A: "the index",
      B: "the moment",
      C: "the balance arm",
      D: "the station",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum mass to which an aeroplane may be loaded, prior to engine start, is",
    choices: {
      A: "maximum certificated taxi (ramp) mass",
      B: "maximum regulated taxi (ramp) mass",
      C: "maximum certificated take-off mass MASS AND BALANCE LOADING - Terminology",
      D: "maximum regulated take-off mass",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "What is the zero fuel mass?",
    choices: {
      A: "MTOM minus fuel to destination minus fuel to alternative airfield",
      B: "Maximum allowable mass of the aircraft with no usable fuel on board",
      C: "Operating mass minus the fuel load",
      D: "Actual loaded mass of the aircraft with no usable fuel on board",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "By adding to the basic empty mass the following fixed necessary equipment for a specific flight (catering, safety and rescue equipment, fly away kit, crew), we get",
    choices: {
      A: "zero fuel mass",
      B: "take-off mass",
      C: "Dry operating mass",
      D: "landing mass",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "For the purpose of completing the Mass and Balance documentation, theTraffic Load is considered to be equal to the Take-off Mass",
    choices: {
      A: "less the Operating Mass",
      B: "plus the Operating Mass",
      C: "plus the Trip Fuel Mass",
      D: "less the Trip Fuel Mass",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "With respect to aeroplane loading in the planning phase, which of the following statements is always correct? LM = Landing Mass TOM = Take-off Mass MTOM = Maximum Take-off Mass ZFM = Zero Fuel Mass MZFM = Maximum Zero Fuel Mass DOM = Dry Operating Mass",
    choices: {
      A: "LM = TOM - Trip Fuel",
      B: "MTOM = ZFM + maximum possible fuel mass",
      C: "MZFM = Traffic load + DOM",
      D: "Reserve Fuel = TOM - Trip Fuel MASS AND BALANCE LOADING - Terminology",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "In relation to an aeroplane the Dry Operating Mass is the total mass of the aeroplane ready for a specific type of operation but excluding",
    choices: {
      A: "potable water and lavatory chemicals",
      B: "usable fuel and crew",
      C: "usable fuel and traffic load",
      D: "usable fuel, potable water and lavatory chemicals",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum zero-fuel mass: The combination of correct statements is: 1. is a regulatory limitation 2. is calculated for a maximum load factor of +3.5g 3. is due to the maximum permissible bending moment at the wing root 4. imposes fuel dumping from the outer wings tank first 5. imposes fuel dumping from the inner wings tank first 6. can be increased by stiffening the wing",
    choices: {
      A: "2, 5, 6",
      B: "1, 3, 5",
      C: "4, 2, 6",
      D: "1, 2, 3",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "Dry Operating Mass is the mass of the aeroplane less",
    choices: {
      A: "usable fuel and traffic load",
      B: "usable fuel",
      C: "traffic load, potable water and lavatory chemicals",
      D: "usable fuel, potable water and lavatory chemicals",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The zero fuel mass of an aeroplane is always",
    choices: {
      A: "The take-off mass minus the fuselage fuel mass MASS AND BALANCE LOADING - Terminology",
      B: "The take-off mass minus the wing fuel mass",
      C: "The take-off mass minus the take-off fuel mass",
      D: "The maximum take-off mass minus the take-off fuel mass",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "The actual Zero Fuel Mass is equal to the",
    choices: {
      A: "Basic Empty Mass plus the fuel loaded",
      B: "Operating Mass plus all the traffic load",
      C: "Dry Operating mass plus the traffic load",
      D: "Actual Landing Mass plus trip fuel",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "Which of the following alternatives corresponds to zero fuel mass?",
    choices: {
      A: "Operating mass plus load of passengers and cargo",
      B: "The mass of an aeroplane with no usable fuel",
      C: "Operating mass plus passengers and cargo",
      D: "Take-off mass minus fuel to destination and alternate",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "For the purpose of completing the Mass and Balance documentation, the Dry Operating Mass is defined as",
    choices: {
      A: "The total mass of the aeroplane ready for a specific type of operation excluding all usable fueland traffic load",
      B: "The total mass of the aeroplane ready for a specific type of operation excluding all usable fuel",
      C: "The total mass of the aeroplane ready for a specific type of operation excluding all trafficload",
      D: "The total mass of the aeroplane ready for a specific type of operation excluding crew and crew baggage",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "At the flight preparation stage, the following parameters in particular are available for determining the mass of the aircraft:Dry operating massOperating massWhich statement is correct?",
    choices: {
      A: "The dry operating mass includes fixed equipment needed to carry out a specific flight MASS AND BALANCE LOADING - Terminology",
      B: "The operating mass is the mass of the aeroplane without take-off fuel",
      C: "The dry operating mass includes take-off fuel",
      D: "The operating mass includes the traffic load",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The Dry Operating Mass of an aeroplane includes",
    choices: {
      A: "Fuel and passengers baggage and cargo",
      B: "Unusable fuel and reserve fuel",
      C: "Crew and crew baggage, catering, removable passenger service equipment, potable water and lavatory chemicals",
      D: "Passengers baggage and cargo",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The total mass of the aeroplane including crew, crew baggage; plus catering and removable passenger equipment; plus potable water and lavatory chemicals but excluding usable fuel and traffic load, is referred to as",
    choices: {
      A: "Maximum Zero Fuel Mass",
      B: "Zero Fuel Mass",
      C: "Aeroplane Prepared for Service (APS) Mass",
      D: "Dry Operating Mass",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "Allowed traffic load is the difference between",
    choices: {
      A: "operating mass and basic means",
      B: "allowed take off mass and basic mass plus trip fuel",
      C: "allowed take off mass and basic mass",
      D: "allowed take off mass and operating mass",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The Maximum Zero Fuel Mass is a structural limiting mass. It is made up of the aeroplane Dry Operational Mass plus",
    choices: {
      A: "traffic load and unusable fuel MASS AND BALANCE LOADING - Terminology",
      B: "traffic load, unusable fuel and crew standard mass",
      C: "unusable and crew standard mass",
      D: "traffic load and crew standard mass",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The Zero Fuel Mass and the Dry Operating Mass",
    choices: {
      A: "differ by the sum of the mass of usable fuel plus traffic load mass",
      B: "are the same value",
      C: "differ by the value of the traffic load mass",
      D: "differ by the mass of usable fuel",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "For the purpose of completing the Mass and Balance documentation, the Operating Mass is considered to be Dry Operating Mass plus",
    choices: {
      A: "Ramp Fuel Mass less the fuel for APU and run-up",
      B: "Ramp Fuel Mass",
      C: "Trip Fuel Mass",
      D: "Take-off Fuel Mass",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "Traffic load is the",
    choices: {
      A: "Zero Fuel Mass minus Dry Operating Mass",
      B: "Dry Operating Mass minus the disposable load",
      C: "Dry Operating Mass minus the variable load",
      D: "Take-off Mass minus Zero Fuel Mass",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "While making mass and balance calculation for a particular aeroplane, the term Empty Mass applies to the sum of airframe, engine(s), fixed ballast plus",
    choices: {
      A: "all the consumable fuel and oil, but not including any radio or navigation equipment installedby manufacturer",
      B: "all the oil, fuel, and hydraulic fluid but not including crew and traffic load MASS AND BALANCE LOADING - Terminology",
      C: "unusable fuel and full operating fluids",
      D: "The maximum mass for some aeroplanes including the fuel load and the traffic load",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "The term Maximum Zero Fuel Mass consists of",
    choices: {
      A: "The maximum mass authorised for a certain aeroplane not including the fuel load and operationsitems",
      B: "The maximum mass authorised for a certain aeroplane not including traffic load and fuel load",
      C: "The maximum permissible mass of an aeroplane with no usable fuel",
      D: "The maximum mass for some aeroplanes including the fuel load and the traffic load",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "In mass and balance calculations the index is",
    choices: {
      A: "a location in the aeroplane identified by a number",
      B: "the moment divided by a constant",
      C: "an imaginary vertical plane or line from which all measurements are taken",
      D: "the range of moments the centre of gravity (cg) can have without making the aeroplane unsafe tofly",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "In calculations with respect to the position of the centre of gravity a reference is made to a datum. The datum is",
    choices: {
      A: "calculated from the data derived from the weighing procedure carried out on the aeroplane afterany major modification",
      B: "calculated from the loading manifest",
      C: "an arbitrary reference chosen by the pilot which can be located anywhere on the aeroplane",
      D: "a reference plane which is chosen by the aeroplane manufacturer. Its position is given in the aeroplane Flight or Loading Manual",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "In mass and balance calculations which of the following describes the datum?",
    choices: {
      A: "It is the most aft position of the centre of gravity MASS AND BALANCE LOADING - Terminology",
      B: "It is the most forward position of the centre of gravity",
      C: "It is the point on the aeroplane designated by the manufacturers from which all centre of gravity measurements and calculations are made",
      D: "It is the distance from the centre of gravity to the point through which the weight of thecomponent acts",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The datum is a reference from which all moment (balance) arms are measured. Its precise position is given in the control and loading manual and it is located",
    choices: {
      A: "at or near the focal point of the aeroplane axis system",
      B: "at or near the forward limit of the centre of gravity",
      C: "at a convenient point which may not physically be on the aeroplane",
      D: "at or near the natural balance point of the empty aeroplane",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "Which is true of the aeroplane empty mass?",
    choices: {
      A: "it is dry operating mass minus fuel load",
      B: "It is a component of dry operating mass",
      C: "It is dry operating mass minus traffic load",
      D: "it is the actual take-off mass, less traffic load",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The actual Take-Off Mass is equivalent to",
    choices: {
      A: "Actual Zero Fuel Mass plus the traffic load",
      B: "Dry Operating Mass plus take-off fuel and the traffic load",
      C: "Dry Operating Mass plus the take-off fuel",
      D: "Actual Landing Mass plus the take-off fuel",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The Traffic Load is defined as",
    choices: {
      A: "The total mass of flight crew, passengers, baggage, cargo and usable fuel MASS AND BALANCE LOADING - Terminology",
      B: "The total mass of crew and passengers excluding any baggage or cargo",
      C: "The total mass of passengers, baggage and cargo, including any non- revenue load",
      D: "The total mass of passengers, baggage, cargo and usable fuel",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "The Maximum Zero Fuel Weight of an aircraft is",
    choices: {
      A: "the maximum permissible take-off mass of the aircraft",
      B: "the maximum permissible mass of an aircraft with zero payload",
      C: "the maximum permissible landing mass",
      D: "the maximum permissible mass of an aircraft with no usable fuel",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "With regard to the maximum Zero-Fuel Weight (MZFW).",
    choices: {
      A: "It is the maximum weight that an aircraft can be loaded to without usable fuel",
      B: "It is lower that the Maximum Take-Off Weight by the weight of a payload",
      C: "Is more relevant to aircraft with fuselage fuel tanks",
      D: "Is important as exceeding the MZFW may mean that there is insufficient lift to get the aircraftairborne",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "When establishing the mass breakdown of an aeroplane, the empty mass is defined as the sum of the",
    choices: {
      A: "basic mass plus variable equipment mass",
      B: "basic mass, plus special equipment mass",
      C: "standard empty mass plus specific equipment mass plus trapped fluids plus unusable fuel mass",
      D: "empty mass dry plus variable equipment mass",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "What is the zero fuel mass?",
    choices: {
      A: "The maximum permissible mass of an aeroplane with no usable fuel mass",
      B: "The mass of the aircraft at the start of the taxi )at departure from the loading gate) MASS AND BALANCE LOADING - Terminology",
      C: "DOM plus traffic load but excluding fuel",
      D: "the mass of an aeroplane plus standard items such as: unusable fuel and liquids; lubricating oil in engine and other auxiliary units; fire extinguishers; pyrotechnics; emergency oxygen equipment; supplementary equipment",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "Balance Arm (BA) is",
    choices: {
      A: "The distance from the centre of pressure to the centre of a mass",
      B: "The point on which a lever is supported, balanced, or about which it turns",
      C: "The distance from the datum to the centre of gravity of a mass",
      D: "The distance from the centre of gravity to the centre of a mass",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The chemical fluids used to charge the aircraft toilets are counted as",
    choices: {
      A: "part of the basic empty mass",
      B: "part of the dry operating mass",
      C: "part of the payload",
      D: "part of the under load",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The difference between the Traffic Load and the Useful Load is",
    choices: {
      A: "Non-revenue load",
      B: "Total mass of passengers and baggage",
      C: "Freight or cargo load",
      D: "Usable fuel",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The aircraft datum is a (i) reference point that is defined on or relative to the aircraft about which the (ii) of any load locations are known",
    choices: {
      A: "(i) movable (ii) moments",
      B: "(i) variable (ii) moments MASS AND BALANCE LOADING - Terminology",
      C: "(i) fixed (ii) arms",
      D: "(i) forward (ii) arms",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The Arm is the (i) distance of a load as measured from the aircraft (ii)",
    choices: {
      A: "(i) vertical (ii) aft limit",
      B: "(i) horizontal (ii) datum",
      C: "(i) lateral (ii) datum",
      D: "(i) horizontal (ii) forward limit",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The chemical fluids used to charge the aircraft toilets are counted as?",
    choices: {
      A: "part of the basic empty mass",
      B: "part of the variable load",
      C: "part of the payload",
      D: "part of the under load",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The Operating Mass equals",
    choices: {
      A: "the take-off mass minus the traffic load",
      B: "the landing mass minus the traffic load",
      C: "the maximum zero fuel mass less the traffic load",
      D: "the take-off mass minus the basic empty mass and crew mass",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The mass of an item multiplied by its distance from the datum is it's",
    choices: {
      A: "Moment",
      B: "Centre of gravity",
      C: "Moment arm",
      D: "Force MASS AND BALANCE LOADING - Terminology",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The Maximum Structural Take-Off Mass is",
    choices: {
      A: "a limit which may not be exceeded for any take-off",
      B: "a take-off limiting mass which is affected by the aerodrome altitude and temperature",
      C: "a take-off limiting mass which is governed by the gradient of climb after reaching Vy",
      D: "limited by the take-off distance available. It is tabulated in the flight manual",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The Maximum Zero Fuel Mass is",
    choices: {
      A: "a structural limit listed in the Flight Manual as a fixed value",
      B: "governed by the CG limits",
      C: "tabulated in the Flight Manual against arguments of airfield elevation and temperature",
      D: "governed by the traffic load to be carried",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The moment for an item is",
    choices: {
      A: "The mass of the item multiplied by its distance from the datum",
      B: "The mass of the item divided by its distance from the datum",
      C: "The distance the item is from the datum divided by its mass",
      D: "The square of the distance the item is from the datum divided by its mass",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The reference about which centre of gravity moments are taken is the",
    choices: {
      A: "Chord line",
      B: "Centre of mass",
      C: "Centre of pressure",
      D: "Datum",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "The Traffic Load is defined as",
    choices: {
      A: "The total mass of passengers and their baggage plus any cargo",
      B: "The total mass of the helicopter prior to take-off",
      C: "The total mass of the helicopter prior to take-off minus usable fuel",
      D: "The total mass of flight crew, passengers and usable fuel",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "Which of the following corresponds to Zero Fuel Mass?",
    choices: {
      A: "Operating mass plus luggage of passengers and cargo",
      B: "Operating mass plus passengers and cargo",
      C: "The take-off mass of an aircraft minus all usable fuel",
      D: "Take-off mass minus fuel to destination and alternate",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "To calculate the allowable take-off mass, the factors to be taken into account include",
    choices: {
      A: "the sum of the Maximum Landing Mass and the trip fuel",
      B: "the sum of the Maximum Landing Mass and the fuel on board at take-off",
      C: "the sum of the Maximum Zero Fuel Mass and the trip fuel",
      D: "the Maximum Take-off Mass minus the trip fuel",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "Variable load includes",
    choices: {
      A: "mass of all persons and items of load, including fuel and other consumable fluids",
      B: "mass of all passengers, crew and their baggage, less fuel and consumable fluids",
      C: "mass of crew, their baggage, plus removable units of equipment",
      D: "mass of passengers, crew and their baggage, plus removable equipment and consumable fuel and fluids",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "The true Dry Operating Mass is the",
    choices: {
      A: "basic empty mass plus disposable load",
      B: "basic empty mass plus variable load",
      C: "zero fuel mass minus variable load",
      D: "all-up-mass minus fuel load",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The take-off fuel of an aircraft is",
    choices: {
      A: "the ZFM minus the traffic load",
      B: "DOM minus variable load",
      C: "TOM minus ZFM",
      D: "Traffic load plus take-off fuel",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The Basic Empty Mass of a helicopter is the mass of the helicopter without crew ¿",
    choices: {
      A: "without specific equipments for the mission, without payload, with fuel on board",
      B: "without specific equipment for the mission, without payload, with the unusable fuel and standardequipment",
      C: "without payload, with specific equipment for the mission, without the unusable fuel",
      D: "without specific equipment for the mission, without payload, without unusable fuel",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The Dry Operating Mass of a helicopter is the total mass of a helicopter",
    choices: {
      A: "including the crew, the fuel and the specific equipments for the mission but excluding payload",
      B: "including the crew, the usable fuel and the specific equipments for the mission and payload",
      C: "ready for a specific operation including the crew and traffic load, not including the usablefuel",
      D: "excluding the crew but including specific equipments for the mission and not including theusable fuel",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In centre of gravity calculations the moment arm is : A The vertical distance from the datum to the centre of gravity of the helicopter or of an items placed in the helicopter B The horizontal distance between the fully loaded helicopter's centre of gravity and the centre of gravity of an individual item in the helicopter C The vertical distance between the fully loaded helicopter's centre of gravity and the In centre of gravity calculations the moment arm is : A The vertical distance from the datum to the centre of gravity of the helicopter or of an items placed in the helicopter B The horizontal distance between the fully loaded helicopter's centre of gravity and the centre of gravity of an individual item in the helicopter C The vertical distance between the fully loaded helicopter's centre of gravity and the centre of gravity of an individual item in the helicopter D The horizontal distance from the datum to the centre of gravity of the helicopter, or to an item placed in the helicopterRef: HELI: atpl, cplAns: D18118. In mass and balance calculations the index is",
    choices: {
      A: "an imaginary vertical plane or line from which all measurements are taken",
      B: "the range of moments the centre of gravity (cg) can have without making the aeroplane unsafe tofly",
      C: "is a figure without unit of measurement which represents a moment",
      D: "a location is the aeroplane identified by a number",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The Dry Operating Mass of a helicopter",
    choices: {
      A: "includes fuel and passengers baggage and cargo",
      B: "includes passengers and cargo",
      C: "is the total mass of the helicopter ready for a specific type of operation",
      D: "includes unusable fuel and reserve fuel",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The Dry Operating Mass of a helicopter is the sum of the following",
    choices: {
      A: "Basic Empty Mass + crew + traffic load",
      B: "Basic Empty Mass + crew + operating items",
      C: "Basic Empty Mass + crew + usable fuel",
      D: "Basic Empty Mass + crew + traffic load + usable fuel",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The Dry Operating Mass of a helicopter is the sum of the following",
    choices: {
      A: "Basic Empty Mass + crew + traffic load + taxi fuel",
      B: "Basic Empty Mass + crew + taxi fuel",
      C: "Basic Empty Mass + crew + traffic load",
      D: "Basic Empty mass = crew + operating items MASS AND BALANCE LOADING - Terminology",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The maximum mass to which a helicopter may be loaded, prior to engine start, is",
    choices: {
      A: "maximum structural taxi mass",
      B: "maximum regulated taxi mass",
      C: "maximum structural take-off mass",
      D: "maximum regulated take-off mass",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "While making mass and balance calculations for a particular helicopter, the term Basic Empty Mass applies to the sum of airframe, engine(s), fixed ballast plus",
    choices: {
      A: "all the oil and fuel",
      B: "all the consumable fuel and oil, but not including any radio or navigation equipment installedby the manufacturer",
      C: "all the oil, fuel and hydraulic fluid but not including crew and traffic load",
      D: "unusable fuel and full operating fluids",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The Zero Fuel Mass is the mass of the helicopter",
    choices: {
      A: "Including traffic load but excluding both usable and unusable fuel",
      B: "Including traffic load and unusable fuel but excluding usable fuel",
      C: "Excluding both usable and unusable fuel and also excluding traffic load",
      D: "Excluding usable fuel and traffic load but including unusable fuel",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The Zero Fuel Mass is the mass of the helicopter",
    choices: {
      A: "Excluding usable and unusable fuel",
      B: "Including unusable and reserve fuel",
      C: "When weighed for issue or renewal of its weight schedule and excludes crew, traffic load, usableand unusable fuel",
      D: "Excluding usable fuel MASS AND BALANCE LOADING - Terminology",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The Zero Fuel Mass of a helicopter is always",
    choices: {
      A: "the take-off mass minus the take-off fuel mass",
      B: "the take-off mass minus the extra fuel mass",
      C: "the take-off mass minus the traffic load",
      D: "the maximum take-off mass minus the take-off fuel",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "When establishing the mass breakdown of a helicopter, the Basic Empty Mass is defined as the sum of the",
    choices: {
      A: "empty mass dry plus variable equipment mass",
      B: "basic mass plus variable equipment mass",
      C: "basic mass plus special equipment mass",
      D: "standard empty mass plus specific equipment mass plus operating fluids plus unusable fuel mass",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The maximum zero fuel mass is a mass limitation for the",
    choices: {
      A: "allowable load exerted upon the wing considering a margin for fuel tanking",
      B: "strength of the fuselage",
      C: "strength of the wing root",
      D: "total load of the fuel imposed upon the wing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft is about to depart on an oceanic sector from a high elevation airfield with an exceptionally long runway in the tropics at 1400 local time. The take offb mass is likely to be limited by",
    choices: {
      A: "MZFM",
      B: "Obstacle limited mass",
      C: "Maximum certified take-off mass",
      D: "Climb limited mass",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On an aeroplane without central fuel tank, the maximum Zero Fuel Mass is related to",
    choices: {
      A: "Maximum Structural Take-Off Mass",
      B: "The bending moment at the wing root",
      C: "Wing loaded trip fuel",
      D: "Variable equipment for the flight",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(For this Question use Figure 4.9 or 4.10). For the transport aeroplane the moment (balance) arm (B.A) for the forward hold centroid is",
    choices: {
      A: "257 inches",
      B: "367.9 inches",
      C: "314.5 inches",
      D: "421.5 inches",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_4.9). Using the data for the MRJT, what is the maximum compartment load for the area between BA 286 and 343",
    choices: {
      A: "762 lbs",
      B: "314.5 kg",
      C: "483 kg",
      D: "8.47 kg",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(For this question use Figure 4.9). From the loading manual for the transport aeroplane, the aft cargo compartment has a maximum total load of",
    choices: {
      A: "1568 kg",
      B: "9232 kg",
      C: "4187 kg",
      D: "3062 kg",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to Figure 4.9). Referring to the loading manual for the transport aeroplane, the maximum running load for the aft section of the forward lower deck cargo compartment is",
    choices: {
      A: "13.15 kg per inch MASS AND BALANCE LOADING - Terminology",
      B: "13.12 kg per inch",
      C: "14.65 kg per inch",
      D: "7.18 kg per inch",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "(For this question use Figure 4.9). From the Loading Manual for the transport aeroplane, the maximum load that can be carried in that section of the aft cargo compartment which has a balance arm centroid at",
    choices: {
      A: "421.5 inches is 2059 Lbs",
      B: "835.5 inches is 6752 kg",
      C: "421.5 inches is 4541 kg",
      D: "835.5 inches is 3062 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "Considering only structural limitation, on long distance flights (at the aeroplane maximum range), the traffic load is normally limited by",
    choices: {
      A: "The maximum zero fuel mass plus the take-off mass",
      B: "The maximum zero fuel mass",
      C: "The maximum take-off mass",
      D: "The maximum landing mass",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "Which of the following statements is correct?",
    choices: {
      A: "The Maximum Zero Fuel Mass ensures that the centre of gravity remains within limits after theuplift of fuel",
      B: "The Maximum Landing Mass of an aeroplane is restricted by structural limitations, performance limitations and the strength of the runway",
      C: "The Maximum Take-off Mass is equal to the maximum mass when leaving the ramp",
      D: "The Basic Empty Mass is equal to the mass of the aeroplane excluding traffic load and usablefuel but including the crew",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The maximum taxi (ramp) mass is governed by",
    choices: {
      A: "structural considerations MASS AND BALANCE LOADING - Terminology",
      B: "tyre speed and temperature limitations",
      C: "bearing strength of the taxiway pavement",
      D: "taxi distance to take-off point",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "If the maximum structural landing mass is exceeded",
    choices: {
      A: "the aircraft will be unable to get airborne",
      B: "the undercarriage could collapse on landing",
      C: "no damage will occur providing the aircraft is within the regulated landing mass",
      D: "no damage will occur providing the aircraft is within the performance limited landing mass",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "(For this question use Figure 4.9). Referring to the loading manual for the transport aeroplane, the maximum load intensity for the lower forward cargo compartment is",
    choices: {
      A: "150 kg per square foot",
      B: "3305 kg in forward compartment and 4187 kg in aft compartment",
      C: "68 kg per square foot",
      D: "7288 kg in forward compartment and 9232 kg in aft compartment",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "Considering only structural limitations, on very short legs with minimum take-off fuel, the traffic load is normally limited by",
    choices: {
      A: "Maximum landing mass",
      B: "Maximum zero fuel mass",
      C: "Maximum take-off mass",
      D: "Actual landing mass",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The maximum certificated take-off mass is",
    choices: {
      A: "a take-off limiting mass which is governed by the gradient of climb after reaching V2",
      B: "a take-off limiting mass which is affected by the aerodrome altitude and temperature",
      C: "a structural limit which may not be exceeded for any take-off MASS AND BALANCE LOADING - Terminology",
      D: "limited by the runway take off distance available. It is tabulated in the Flight Manual",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to figure 031_9.6). Referring to the Pilot's Flight Manual for the transport helicopter TETH-1, the maximum load for the aft-cargo bay in section C is",
    choices: {
      A: "400 daN/m2",
      B: "250 daN",
      C: "115 daN",
      D: "75 lbs/ft2",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9.6). Referring to the Pilot's Flight Manual for the transport helicopter TETH1, the maximum load for the aft cargo bay in section A is",
    choices: {
      A: "115 daN",
      B: "195 daN/m2",
      C: "55 daN",
      D: "120 lb",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9.6). From the Pilot's Flight Manual of the transport helicopter TETH1, the cabin floor has a maximum load carrying capacity (maximum floor load) of",
    choices: {
      A: "115 daN",
      B: "1500 daN",
      C: "195 daN/m2",
      D: "1500 daN/m2",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9.6). Referring to the Pilot's Flight Manual for the transport helicopter TETH1, the maximum load for the aft cargo bay in section B is",
    choices: {
      A: "550 lb",
      B: "55 daN",
      C: "75 daN/m2",
      D: "115 daN",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Considering only structural limitations, on long distance flights (at the helicopter's maximum range), the traffic load is normally limited by",
    choices: {
      A: "the Zero Fuel Mass",
      B: "the Maximum Take-off Mass",
      C: "the Zero Fuel Mass plus the Take-off Mass",
      D: "the Maximum Landing Mass",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What are the criteria for correct loading of a helicopter?",
    choices: {
      A: "Adherence to the maximum mass limitations",
      B: "Correct distribution of the useful load and adherence to the maximum mass limitations",
      C: "Maximum allowable baggage mass in the aft cargo compartment",
      D: "Correct distribution of the useful load",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      ". Based on actual conditions, an aeroplane has the following performance take-off mass limitations: Flaps : 0o/10o/15o Run way : 4100/4400/4600 (Masses are in kg) Climb : 4700/4500/4200 (Masses are in kg) Structural limits: Take off/landing/zero fuel: 4300 kg The maximum take-off mass is",
    choices: {
      A: "4700 kg",
      B: "4100 kg",
      C: "4200 kg",
      D: "4300 kg",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane is performance limited to a landing mass of 54230 kg. The Dry Operating Mass is 35000 kg and the zero fuel mass is 52080 kg. If the take-off mass is 64280 kg the useful load is",
    choices: {
      A: "12200 kg",
      B: "17080 kg AND BALANCE - Terminology",
      C: "29280 kg",
      D: "10080 kg",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A flight benefits from a strong tail wind which was not forecast. On arrival at destination a straight in approach and immediate landing clearance is given. The landing mass will be higher than planned and",
    choices: {
      A: "the approach path will be sleeper",
      B: "the landing distance will be unaffected",
      C: "the landing distance required will be longer",
      D: "the approach path will be steeper and threshold speed higher",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(For this question use Figure 4.14) Aeroplane Dry Operating mass 85000 kg Performance limited take-off mass 127000 kg Performance limited landing mass 98500 kg Maximum zero fuel mass 89800 kg",
    choices: {
      A: "12700 kg",
      B: "7100 kg",
      C: "6300 kg",
      D: "4800 kg",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On an aeroplane with 20 or more seats engaged on an inter-continental flight, the standard mass which may be used for passenger baggage is",
    choices: {
      A: "14 kg per passenger",
      B: "13 kg per passenger",
      C: "15 kg per passenger",
      D: "11 kg per passenger MASS AND BALANCE LOADING - Terminology",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(For this question use Figures 4.5 and 4.6)For the medium range transport aeroplane, from the loading manual, determine the maximum total volume of fuel which can be loaded into the main wing tanks. (Fuel density value 0.78)",
    choices: {
      A: "11349 litres",
      B: "8850 litres",
      C: "11646 litres",
      D: "5674 litres",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(For this question use Figure 4.4)The medium range jet transport aeroplane is to operate a flight carrying the maximum possible fuel load. Using the following data as appropriate, determine the mass of fuel on board at start of take off.Departure airfield performance limited take-off mass:60400 kgLanding airfield: not performance limitedDry Operating Mass:34930 kgFuel required for flight:Taxi fuel: 715 kgTrip fuel: 8600 kgContingency and final reserve fuel: 1700 kgAlternate fuel: 1500 kgAdditional reserve: 400 kgTraffic load for flight: 11000 kg",
    choices: {
      A: "16080 kg",
      B: "15815 kg",
      C: "13650 kg",
      D: "14470 kg",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(For this question use Figure 4.14)The medium range twin jet transport is scheduled to operate from a departure airfield where conditions limit the take-off mass to 65050 kg. The destination airfield has a performance limited landing mass of 54500 kg. The Dry Operating mass is 34900 kg. Loading data is as follows:Taxi fuel: 350 kgTrip fuel: 9250 kgContingency and final reserve fuel1100 kgAlternate fuel:1000 kgTraffic load: 18600 kgCheck the load and ensure that the flight may be operated without exceeding any of the aeroplane limits. Choose, from those given below, the most appropriate answer.",
    choices: {
      A: "The flight may be safely operated with the stated traffic and fuel load",
      B: "The flight is zero fuel mass limited and the traffic load must be reduced to 14170 kg",
      C: "The flight is landing mass limited and the traffic load must be reduced to 17500 kg",
      D: "The flight may be safely operated with an additional 200 kg of traffic load",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to CAP 696 Figure 4.8)Maximum allowed take-off mass limit: 37200 kgDry operating mass: 21600 kgTake off fuel: 8500 kgPassengers on board: male 33, female 32, children 5Baggages: 880 kgThe company uses the standard passenger mass systems allowed by regulations. The flight is not a holiday charter. In (Refer to CAP 696 Figure 4.8)Maximum allowed take-off mass limit: 37200 kgDry operating mass: 21600 kgTake off fuel: 8500 kgPassengers on board: male 33, female 32, children 5Baggages: 880 kgThe company uses the standard passenger mass systems allowed by regulations. The flight is not a holiday charter. In these conditions, the maximum cargo that may be loaded is: Answers",
    choices: {
      A: "901 kg",
      B: "585 kg",
      C: "1098 kg",
      D: "1105 kg",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(For this question use Figure 4.14)A revenue flight is planned for the transport aeroplane. Take-off mass is not airfield limited. The following data applies:Dry Operating Mass 34930 kg Performance limited landing mass 55000 kgFuel on board at rampTaxi fuel 350 kgTrip fuel 9730 kg Contingency and final reserve fuel 1200 kg Alternate fuel 1600 kg Passengers on board 130 Standard mass for each passenger 84 kgBaggage per passenger 14 kgTraffic load Maximum possibleUse the loading manual provided and the above data. Determine the maximum cargo load that may be carried without exceeding the limiting aeroplane landing mass.",
    choices: {
      A: "4530 kg",
      B: "5400 kg",
      C: "6350 kg",
      D: "3185 kg",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Standard masses may",
    choices: {
      A: "is carrying 30 or more passengers",
      B: "has 6 or more seats",
      C: "has 30 or more seats",
      D: "has 20 or more seats",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane develops a serious technical problem shortly after take-off and has to return to its departure airfield. In order to land safely the aircraft must dump fuel. How much fuel must be dumped?",
    choices: {
      A: "Sufficient to reduce the mass to the zero fuel mass",
      B: "The pilot calculates the amount of fuel to jettison to reduce the mass to a safe level at, orbelow the Regulated Landing Mass",
      C: "The fuel system automatically stops the jettison at the Regulated Landing Mass",
      D: "As much as the pilot feels is just insufficient to land safely MASS AND BALANCE LOADING - Terminology",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Mass for individual passengers (to be carried on an aeroplane) may be determined from a verbal statement by or on behalf of the passengers if the number of",
    choices: {
      A: "passengers carried is less than 6",
      B: "passenger seats available is less than 10",
      C: "passengers carried is less than 20",
      D: "passenger seats available is less than 6",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to CAP 696 figure 4-14)The following data relates to a planned flight of an aeroplane:Dry Operational mass:60520 kgPerformance limited take-off mass:72250 kgPerformance limited landing mass:72230 kgMaximum Zero Fuel mass:67530 kgFuel on board at take-offTrip fuel:12500 kgContingency and final reserve fuel 2300 kgAlternate fuel: 1700 kgUsing this data, as appropriate, calculate the maximum traffic load that can be carried.",
    choices: {
      A: "7730 kg",
      B: "11730 kg",
      C: "15730 kg",
      D: "7010 kg",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_L401)From the data contained in the attached appendix, the maximum allowable take-off mass and traffic load is respectively",
    choices: {
      A: "66770 kg and 17320 kg",
      B: "60425 kg and 10975 kg",
      C: "61600 kg and 12150 kg",
      D: "68038 kg and 18588 kg",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_L401)An aeroplane is carrying a traffic load of 10320 kg. Complete the necessary sections of the attached appendix and determine which of the answers given below represents the maximum increase in the traffic load",
    choices: {
      A: "7000 kg",
      B: "8268 kg",
      C: "650 kg AND BALANCE - Terminology",
      D: "1830 kg",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure L226)Using the data given in the Load & Trim sheet, determine from the following the correct value for the limiting take off mass for this flight.",
    choices: {
      A: "52900 kg with an underload of 4200 kg",
      B: "57100 kg with an underload of 3770 kg",
      C: "58500 kg with an overload of 3770 kg",
      D: "62000 kg with an underload of 3770 kg",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure L230)Using the data given in the Load & Trim sheet, determine from the following the correct value for the limiting take off mass for this flight.",
    choices: {
      A: "52000 kg with an underload of 1830 kg",
      B: "66770 kg with an overload of 1830 kg",
      C: "61600 kg with an underload of 1830 kg",
      D: "68038 kg with an overload of 1830 kg",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "From the following select the standard baggage mass for a domestic flight on a 300 passenger seat aircraft",
    choices: {
      A: "15 kg",
      B: "13 kg",
      C: "11 kg",
      D: "6 kg",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Calculate the maximum possible last minute change for a planned flight, using the following information: MSTOM: 72500 kg Fuel block: 18460 kg DOM: 44000 kg Taxi fuel: 460 kg PLTOM: 73000 kg Traffic load: 6800 kg",
    choices: {
      A: "240 kg",
      B: "700 kg",
      C: "3700 kg",
      D: "2300 kg",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_3-1)The performance limited Maximum Take-Off Mass of the specimen aircraft is 4800 lb and the performance limited Maximum Landing Mass 4400 lb. The Basic Empty Mass is 3210 lb and the flight is to be conducted with two pilots whose masses are 180 lb and 210 lb respectively. The fuel load on take-off is 106 USG and the trip fuel is 86 USG. The maximum Allowed Traffic Load is: Answers",
    choices: {
      A: "680 lb",
      B: "514 lb",
      C: "870 lb",
      D: "565 lb",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When determining the mass of fuel/oil and the value of the SG is not known, the value to use is",
    choices: {
      A: "determined by the operator",
      B: "set out in JAR OPS 1 Section 1",
      C: "determined by the aviation authority",
      D: "determined by the pilot",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "Standard masses for baggage can only be used when the aircraft has",
    choices: {
      A: "9 seats or more",
      B: "20 seats or more MASS AND BALANCE LOADING - Terminology",
      C: "30 seats or more",
      D: "less than 30 seats",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "A revenue flight is to be made by a jet transport. The following are the aeroplane structural limits",
    choices: {
      A: "19500 kg",
      B: "19100 kg",
      C: "19200 kg",
      D: "17840 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given: Maximum structural take-off mass = 146900 kg Maximum structural landing mass = 93800 kg Maximum zero fuel mass = 86400 kg Trip fuel = 27500 kg Block fuel = 35500 kg Engine starting and taxi fuel = 1000 kg Given: Maximum structural take-off mass = 146900 kg Maximum structural landing mass = 93800 kg Maximum zero fuel mass = 86400 kg Trip fuel = 27500 kg Block fuel = 35500 kg Engine starting and taxi fuel = 1000 kg The maximum take-off mass is equal to",
    choices: {
      A: "120300 kg",
      B: "121300 kg",
      C: "113900 kg MASS AND BALANCE LOADING - Terminology",
      D: "120900 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given: Dry operating mass = 38000 kg Maximum structural take-off mass = 72000 kg Maximum landing mass = 65000 kg Maximum zero fuel mass = 61000 kg Fuel burn = 8000 kg Take-off Fuel = 10300 kg The maximum allowed take-off mass and payload are respectively",
    choices: {
      A: "73000 kg and 27000 kg",
      B: "71300 kg and 25300 kg",
      C: "73000 kg and 24700 kg",
      D: "71300 kg and 23000 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The empty mass of an aeroplane, as given in the weighing schedule, is 61300 kg. The operational items (including crew) is given as a mass of 2300 kg. If the take-off mass is 132000 kg (including a usable fuel quantity of 43800 kg) the useful load is",
    choices: {
      A: "26900 kg",
      B: "70700 kg",
      C: "29600 kg",
      D: "68400 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given an aeroplane with: Maximum Structural Landing Mass: 125000 kg Given an aeroplane with: Maximum Structural Landing Mass: 125000 kg Maximum Zero Fuel Mass: 108500 kg Maximum Structural Take-off Mass: 155000 kg Dry Operating Mass: 82000 kg Scheduled trip fuel is 17000 kg and the reserve fuel is 5000 kg Assuming performance limitations are not restricting, the maximum permitted take-off mass and maximum traffic load are respectively",
    choices: {
      A: "125500 kg and 21500 kg",
      B: "130500 kg and 31500 kg",
      C: "130500 kg and 26500 kg",
      D: "125500 kg and 26500 kg",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "On an aeroplane with a seating capacity of more than 30, it is decided to use standard mass values for computing the total mass of passengers. If the flight is not a holiday charter, the mass value which may be used for an adult is",
    choices: {
      A: "88 kg (male) 74 kg (female)",
      B: "76 kg",
      C: "84 kg (male) 76 kg (female)",
      D: "84 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aircraft basic empty mass is 3000 kg. The maximum take off landing, and zero-fuel mass are identical, at 5200 kg. Ramp fuel is 650 kg, the taxi fuel is 50 kg. The payload available is",
    choices: {
      A: "2150 kg",
      B: "1550 kg",
      C: "2200 kg",
      D: "1600 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aeroplane takes off as normal on a scheduled flight however, shortly after take-off the aeroplane is diverted to another airfield Max Structural TOM 14000 kg Performance Limited TOM 12690 kg Max Structural LM (MSLM) 9600 kg Max Structural TOM 14000 kg Performance Limited TOM 12690 kg Max Structural LM (MSLM) 9600 kg Trip Fuel to original destination 6000 kg Contingency fuel 200 kg Alternate fuel 200 kg Final reserve fuel 750 kg Expected landing mass at original destination 4600 kg Actual flight duration 2 hour Fuel consumption 1500 kg per hour Performance Limited LM At diversion airfield (PLLM) 9000 kg",
    choices: {
      A: "The aeroplane can land safely as it is below its MSLM",
      B: "The aeroplane can land safely because it is below its PLLM",
      C: "The aeroplane cannot land safely because it is above the MSLM",
      D: "The aeroplane cannot land safely because it is above its PLLM",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The basic empty mass of an aircraft is 30000 kg. The masses of the following items are",
    choices: {
      A: "30300 kg",
      B: "30665 kg",
      C: "38300 kg",
      D: "30785 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "A revenue flight is to be made by a jet transport. The following are the aeroplane structural limits",
    choices: {
      A: "25800 kg",
      B: "18170 kg",
      C: "13950 kg",
      D: "17840 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The operator of an aircraft equipped with 50 seats uses standard masses for passengers and baggage. During the preparation of a scheduled flight a group of passengers present themselves at the check-in desk, it is apparent that even the lightest of these exceeds the value of the declared standard mass.",
    choices: {
      A: "the operator may use the standard masses for the balance but must correct these for the loadcalculation",
      B: "the operator should use the individual masses of the passengers or alter the standard masses",
      C: "the operator is obliged to use the actual masses of each passenger",
      D: "the operator may use the standard masses for the load and balance calculation withoutcorrection",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aeroplane is to depart from an airfield where the performance limited take-off mass is 89200 kg. Certificated maximum masses are as follows: Ramp (taxi) mass: 89930 kg Maximum Take-off mass: 89430 kg Maximum Landing mass: 71520 kg Actual Zero fuel mass: 62050 kg",
    choices: {
      A: "21500 kg",
      B: "21080 kg",
      C: "21220 kg",
      D: "20870 kg",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "Standard Mass as used in the computation of passenger load establish the mass of a child as",
    choices: {
      A: "35 kg for children over 2 years occupying a seat and 10 kg for infants (less than 2 years) notoccupying a seat",
      B: "35 kg only if they are over 2 years old and occupy a seat",
      C: "35 kg irrespective of age provided they occupy a seat",
      D: "35 kg for children over 2 years occupying a seat and 10 kg for infants (less than 2 years)occupying a seat",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "A twin-engine aeroplane is certified for a Max Structural TOM and a Max LM of 58000 kg and 55000 kg respectively. Given the information below, what is the limiting take-off mass for the aeroplane? Performance Limiting TOM 61000 kg Performance Limiting LM 54000 kg Operating mass 55000 kg Trip fuel 3000 kg Contingency fuel 5% of trip fuel Alternate fuel 500 kg A twin-engine aeroplane is certified for a Max Structural TOM and a Max LM of 58000 kg and 55000 kg respectively. Given the information below, what is the limiting take-off mass for the aeroplane? Performance Limiting TOM 61000 kg Performance Limiting LM 54000 kg Operating mass 55000 kg Trip fuel 3000 kg Contingency fuel 5% of trip fuel Alternate fuel 500 kg Final reserve 500 kg Flight duration 3 hours Fuel consumption 500 kg per hour per engine",
    choices: {
      A: "58000 kg",
      B: "61000 kg",
      C: "57000 kg",
      D: "56545 kg",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The Dry Operating Mass of an aircraft is 2000 kg. The maximum take-off mass landing and zero fuel mass are identical at 3500 kg. The block fuel mass is 550 kg, and the taxi fuel mass is 50 kg. The available mass of payload is",
    choices: {
      A: "1500 kg",
      B: "950 kg",
      C: "1000 kg",
      D: "1450 kg",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "(For this question use Figure 4.9)The centroid of the forward hold is",
    choices: {
      A: "halfway between stations 228 and station 500",
      B: "314.5 inches forward of the aft cargo bay centroid",
      C: "367.9 inches from the datum",
      D: "367.9 inches from the nose of the aeroplane",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aeroplane is to depart from an airfield at a take-off mass of 302550 kg. Fuel on board at take-off (including contingency and alternate of 19450 kg) is 121450 kg. The Dry Operating Mass is 161450 kg. The useful load will be",
    choices: {
      A: "39105 kg",
      B: "121450 kg",
      C: "19650 kg",
      D: "141100 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given that: Maximum structural take-off mass: 146000 kg Maximum structural landing mass: 93900 kg Actual zero fuel mass: 86300 kg Trip fuel: 27000 kg Taxi fuel: 1000 kg Contingency fuel: 1350 kg Alternate fuel: 2650 kg Final reserve fuel: 3000 kg Determine the actual take-off mass",
    choices: {
      A: "120900 kg",
      B: "146000 kg",
      C: "120300 kg",
      D: "121300 kg",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Reference to CAP 696 Figure 4.9)What is the balance arm, the maximum compartment load and the running load for the most aft compartment of the forward cargo hold?",
    choices: {
      A: "421.5 cm; 3305 kg; 13.12 kg per inch",
      B: "1046.5 inches; 711 kg; 7.18 kg per inch",
      C: "421.5 inches; 2059 kg; 13.12 kg per inch",
      D: "1046.5m; 711 kg; 7.18 kg per inch",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aeroplane weighing schedule indicates that the empty mass is 57320 kg. The nominal Dry Operating Mass is 60120 kg and the Maximum Zero Fuel Mass is given as 72100 kg. Which of the following is a correct statement in relation to this aeroplane?",
    choices: {
      A: "operational items have a mass of 2800 kg and the maximum traffic load for this aeroplane is14780 kg",
      B: "operational items have a mass of 2800 kg and the maximum traffic load for this aeroplane is 11980 kg",
      C: "operational items have a mass of 2800 kg and the maximum useful load is 11980 kg",
      D: "operational items have a mass of 2800 kg and the maximum useful load is 14780 kg",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The take-off mass of an aeroplane is 141000 kg. Total fuel on board is 63000 kg including 14000 kg reserve fuel and 1000 kg of unusable fuel. The traffic load is 12800 kg. The zero fuel mass is",
    choices: {
      A: "79000 kg",
      B: "78000 kg",
      C: "93000 kg",
      D: "65200 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given are: Maximum structural take-off mass: 72000 kg Maximum structural landing mass: 56000 kg Maximum zero fuel mass: 48000 kg Taxi fuel: 800 kg Trip fuel: 18000 kg Contingency fuel: 900 kg Alternate fuel: 700 kg Final reserve fuel: 2000 kg Determine the actual take-off mass",
    choices: {
      A: "74000 kg",
      B: "69600 kg",
      C: "72000 kg",
      D: "70400 kg",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "A revenue flight is to be made by a jet transport. The following are the aeroplane structural limits: Maximum Ramp Mass: 69500 kg Maximum Take Off Mass: 69300 kg Maximum Landing Mass: 58900 kg Maximum Ramp Mass: 69500 kg Maximum Take Off Mass: 69300 kg Maximum Landing Mass: 58900 kg Maximum Zero Fuel Mass: 52740 kg Take off and Landing mass are not performance limited Dry Operating Mass: 34930 kg Trip Fuel: 11500 kg Taxi Fuel: 250 kg Contingency & final reserve fuel: 1450 kg Alternate Fuel: 1350 kg",
    choices: {
      A: "21070 kg",
      B: "21170 kg",
      C: "17810 kg",
      D: "20420 kg",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The crew of a transport aeroplane prepares a flight using the following data: Block fuel: 40000 kg Trip fuel: 29000 kg Taxi fuel: 800 kg Maximum take-off mass: 170000 kg Maximum landing mass: 148500 kg Maximum zero fuel mass: 112500 kg Dry operating mass: 80400 kg",
    choices: {
      A: "40400 kg",
      B: "32900 kg",
      C: "18900 kg",
      D: "32100 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The following data applies to an aeroplane which is about to take off: Certified maximum take-off mass: 141500 kg Certified maximum take-off mass: 141500 kg Performance limited take-off mass: 137300 kg Dry Operating Mass: 58400 kg Crew and crew hand baggage mass: 640 kg Crew baggage in hold: 110 kg Fuel on board: 60700 kg",
    choices: {
      A: "78900 kg",
      B: "78150 kg",
      C: "18200",
      D: "17450",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The following data applies to a planned flight: Dry Operating Mass: 34900 kg Performance limited Take-off Mass: 66300 kg Performance limited Landing Mass: 55200 kg Maximum Zero Fuel Mass: 53070 kg",
    choices: {
      A: "13230",
      B: "12700",
      C: "15200",
      D: "10730",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given: Dry Operating Mass: 29800 kg Maximum Take-off Mass: 52400 kg Maximum Zero-Fuel Mass: 43100 kg Maximum Landing Mass: 46700 kg Trip Fuel: 4000 kg Fuel quantity at brakes release: 8000 kg",
    choices: {
      A: "9300 kg",
      B: "13300 kg",
      C: "12900 kg",
      D: "14600 kg",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "The standard mass for a child is",
    choices: {
      A: "38 kg for all flights",
      B: "35 kg for holiday charters and 38 kg for all other flights",
      C: "35 kg for all flights",
      D: "30 kg for holiday charters and 35 kg for all other flights",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The empty mass of an aeroplane is given as 44800 kg. Operational items (including crew standard mass of 1060 kg) are 2300 kg. If the maximum zero fuel mass is given as 65500 kg, the maximum traffic load which could be carried is",
    choices: {
      A: "20700 kg",
      B: "18400 kg",
      C: "23000 kg",
      D: "19460 kg",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The take-off mass of an aeroplane is 117000 kg, comprising a traffic load of 18000 kg and fuel of 46000 kg. What is the dry operating mass?",
    choices: {
      A: "53000 kg",
      B: "64000 kg MASS AND BALANCE LOADING - Terminology",
      C: "71000 kg",
      D: "99000 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "A flight has been made from London to Valencia carrying minimum fuel and maximum traffic load. On the return flight the fuel tanks in the aeroplane are to be filled to capacity with a total fuel load of 20100 litres at a fuel density of 0.79 kg/l. The following are the aeroplane structural limits: Maximum Ramp Mass: 68900 kg Maximum Take Off Mass: 69300 kg Maximum Landing Mass: 58900 kg Maximum Zero Fuel Mass: 52740 kg The performance limited Take off mass at Valencia is 67330 kg The landing mass at London is not performance limited. Dry Operating Mass: 34930 kg Trip Fuel (Valencia to London) 5990 kg Taxi Fuel: 250 kg The maximum traffic load that can be carried from Valencia will be",
    choices: {
      A: "14331 kg",
      B: "13240 kg",
      C: "16770 kg",
      D: "9830 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The Take-off Mass of an aeroplane is 66700 kg which includes a traffic load of 14200 kg and a usable fuel load of 10500 kg. If the standard mass for the crew is 545 kg the Dry Operating Mass is",
    choices: {
      A: "42000 kg",
      B: "56200 kg",
      C: "41455 kg",
      D: "42545 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "Determine the Landing Mass for the following single engine aeroplane. Given: Standard Empty Mass: 1764 lbs Standard Empty Mass: 1764 lbs Optional Equipment: 35 lbs Pilot + Front seat passenger: 300 lbs Cargo Mass: 350 lbs Ramp Fuel = Black Fuel: 60 Gal Trip Fuel: 35 Gal Fuel density: 6 lbs/Gal",
    choices: {
      A: "2659 lbs",
      B: "2799 lbs",
      C: "2589 lbs",
      D: "2449 lbs",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "Determine the Zero Fuel Mass for the following single engine aeroplane. Given",
    choices: {
      A: "2589 lbs",
      B: "2449 lbs",
      C: "2659 lbs",
      D: "2414 lbs",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to CAP 696 Figure 3.4)With respect to multi-engine piston powered aeroplane, determine the ramp mass (lbs) in the following conditions:Basic empty mass:3210 lbsBasic arm: 88.5 inchesOne pilot: 160 lbsFront seat passenger: 200 lbsCentre seat passengers 290 lbsOne passenger rear seat: 110 lbsBaggage in (Refer to CAP 696 Figure 3.4)With respect to multi-engine piston powered aeroplane, determine the ramp mass (lbs) in the following conditions:Basic empty mass:3210 lbsBasic arm: 88.5 inchesOne pilot: 160 lbsFront seat passenger: 200 lbsCentre seat passengers 290 lbsOne passenger rear seat: 110 lbsBaggage in zone 1: 100 lbsBaggage in zone 4: 50 lbsBlock fuel: 100 US GalTrip fuel: 55 US GalFuel for start up and taxi (included in block fuel): 3 US GalFuel density: 6 lbs/US Gal",
    choices: {
      A: "4720",
      B: "4120",
      C: "4390 MASS AND BALANCE LOADING - Terminology",
      D: "4372",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "In determining the Dry Operating Mass of an aeroplane it is common practice to use standard mass values for crew. These values are",
    choices: {
      A: "flight crew 85 kg, cabin crew 75 kg each. These do not include a hand baggage allowance",
      B: "flight crew 85 kg, cabin crew 75 kg each. These are inclusive of a hand baggage allowance",
      C: "flight crew (male) 88 kg (female) 75 kg, cabin crew 75 kg each. These include an allowance for hand baggage",
      D: "flight crew (male) 88 kg (female) 75 kg, cabin crew 75 kg each. These do not include anallowance for hand baggage",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "To calculate a usable take-off mass, the factors to be taken into account include",
    choices: {
      A: "Maximum landing mass augmented by fuel on board at take-off",
      B: "Maximum landing mass augmented by the fuel burn",
      C: "Maximum zero fuel mass augmented by the fuel burn",
      D: "Maximum take-off mass decreased by the fuel burn",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The following data is extracted from an aeroplane loading manifest: Performance limited take-off mass: 93500 kg Expected landing mass at destination: 81700 kg Maximum certificated landing mass: 86300 kg Fuel on board: 16500 kg The following data is extracted from an aeroplane loading manifest: Performance limited take-off mass: 93500 kg Expected landing mass at destination: 81700 kg Maximum certificated landing mass: 86300 kg Fuel on board: 16500 kg During the flight a diversion is made to an en-route alternate which is not performance limited for landing. Fuel remaining at landing is 10300 kg. The landing mass",
    choices: {
      A: "is 87300 kg which is acceptable in this case because this is a diversion and not a normalscheduled landing",
      B: "is 83200 kg which is in excess of the regulated landing mass and could result in over-runningthe runway MASS AND BALANCE LOADING - Terminology",
      C: "must be reduced to 81700 kg in order to avoid a high speed approach",
      D: "is 87300 kg and excess structural stress could result",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given the following: Maximum structural take-off mass: 48000 kg Maximum structural landing mass: 44000 kg Maximum zero fuel mass: 36000 kg Taxi fuel: 600 kg Contingency fuel: 900 kg Alternate fuel: 800 kg Final reserve fuel: 1100 kg Trip fuel: 9000 kg Determine the actual take-off mass",
    choices: {
      A: "48000 kg",
      B: "47800 kg",
      C: "48400 kg",
      D: "53000 kg",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      ". Given an aeroplane with: Maximum Structural Landing Mass: 68000 kg Maximum Zero Fuel Mass: 70200 kg Maximum Structural Take-off Mass: 78200 kg Dry Operating Mass: 4 Scheduled trip fuel is 7000 kg and the reserve fuel is 2800 kg Assuming performance limitations are not restricting, the maximum permitted take-off mass and maximum traffic load are respectively",
    choices: {
      A: "77200 kg and 22200 kg",
      B: "75000 kg and 20000 kg",
      C: "77200 kg and 19400 kg",
      D: "75000 kg and 17200 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The take-off mass of an airplane is 8600 kg which includes a traffic load of 1890 kg and a usable fuel load of 1230 g. If the standard mass for the crew is 190 kg the dry operating mass is?",
    choices: {
      A: "5290 kg",
      B: "5480 kg",
      C: "8410 kg",
      D: "6710 kg",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "Determine the Take-off Mass for the following single engine aeroplane/ Given: Standard Empty Mass: 1764 lbs Optional Equipment: 35 lbs Pilot + Front seat passenger: 300 lbs Cargo Mass: 350 lbs Ramp Fuel = Block Fuel: 60 Gals Trip Fuel: 35 Gals Fuel density: 6 lbs/Gal",
    choices: {
      A: "2764 lbs",
      B: "2809 lbs",
      C: "2859 lbs MASS AND BALANCE LOADING - Terminology",
      D: "2799 lbs",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The responsibility for determination of the mass of OPERATING MASSES and CREW MEMBERS included within the Dry Operating Mass lies with",
    choices: {
      A: "the commander",
      B: "the authority of the state of registration",
      C: "the person compiling the weighing schedule",
      D: "the operator",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "How would you convert kilograms (Kg) to pounds (lb)?",
    choices: {
      A: "kg x 0.45359237 lb",
      B: "B - kg x 2.20462262 lb",
      C: "C - kg/2.20462262 lb",
      D: "D - None of the above",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "How would you convert US Gallons to Litres (L)?",
    choices: {
      A: "US gall x 1.205",
      B: "US gall x 4.546",
      C: "US gall x 0.264",
      D: "US gall x 3.785",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "To convert 1 US gallon of AVGAS (100 LL) to lbs",
    choices: {
      A: "1 USG = 3.8 lbs",
      B: "1 USG = 6.8 lbs",
      C: "1 USG = 4 lbs",
      D: "1 USG = 6 lbs",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "A box has a mass of 122 lbs, what is the mass in kg?",
    choices: {
      A: "33.55 kg",
      B: "55.33 kg",
      C: "55.45 kg",
      D: "57.54 kg",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "2588 USG of fuel has been loaded into an aircraft, what is the volume in litres?",
    choices: {
      A: "979.66 L",
      B: "9979.66 L",
      C: "9796.65 L",
      D: "9785.58 L",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "For the purposes of mass and balance a child is a person aged",
    choices: {
      A: "Of 2 years but not having reached 15 years old",
      B: "Of 3 years but not having reached their twelfth birthday",
      C: "Of 2 years but not having reached their twelfth birthday",
      D: "Of 3 years but not having reached their fifteenth birthday",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "When standard mass values are being used, infants occupying separate passenger seats must be considered as",
    choices: {
      A: "adults MASS AND BALANCE LOADING - Terminology",
      B: "children",
      C: "infants after being weighed",
      D: "the same if below 2 years of age",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "a person of 13 years of age is defined as",
    choices: {
      A: "A child",
      B: "An adult",
      C: "An adult if male only",
      D: "An adult if female only",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "Choose the correct statement as related to infants travel in aircraft",
    choices: {
      A: "An infant is a person between the ages of 0 years to 2 years",
      B: "An infant is a person between the ages of 0 years to 3 years",
      C: "An infant seated on an adults lap increases the pax mass by 35 kg",
      D: "An infant must always be seated in its own seat and accounted for as 35 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aircraft has an average fuel consumption of 7500 kg per hour at 480 kts. Calculate its maximum range and endurance for a bulk fuel load of 80000 litres at SG 0.8, the start, run up + taxi allowance is 1200 kg and a minimum reserve fuel of 10000 kg.",
    choices: {
      A: "Range 3379.2 nm & Endurance 7.04 hr",
      B: "Range 3360 nm & Endurance 7.0 hr",
      C: "Range 3379.2 nm & Endurance 7.0 hr",
      D: "Range 3360 nm & Endurance 7.04 hr",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The mass of 729 US Gallons of fuel at SG 0.78 is",
    choices: {
      A: "2153 kg",
      B: "2579 kg MASS AND BALANCE LOADING - Terminology",
      C: "3095 kg",
      D: "568 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The weight of 1292 litres of fuel (SG 0.812) is",
    choices: {
      A: "2313 lbs",
      B: "2846 lbs",
      C: "3805 lbs",
      D: "3508 lbs",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "If 567 kgs of fuel at SG 0.812 are on board an aircraft, the amount of fuel in US gallons is",
    choices: {
      A: "161 USG",
      B: "168 USG",
      C: "184 USG",
      D: "201 USG",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "The mass of 16858 kg in lbs is?",
    choices: {
      A: "7822 lbs",
      B: "7645 lbs",
      C: "36330 lbs",
      D: "37166 lbs",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "125 USG of Avgas in litres is?",
    choices: {
      A: "37 L",
      B: "358 L",
      C: "460 L",
      D: "473 L MASS AND BALANCE LOADING - Terminology",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "5600 USG is equivalent to how many imperial gallons?",
    choices: {
      A: "6338 imp",
      B: "4366 imp",
      C: "4663 imp",
      D: "4848 imp",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "125988 kgs is how many pounds?",
    choices: {
      A: "277756 lbs",
      B: "271525 lbs",
      C: "314970 lbs",
      D: "58458 lbs",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given: Basic Empty Mass: 5300 kg Dry Operating Mass: 5500 kg Zero Fuel Mass: 5980 kg Take-off Mass: 7980 kg What is the Useful Load",
    choices: {
      A: "2680 kg",
      B: "2480 kg",
      C: "2000 kg",
      D: "480 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given: What is the Zero Fuel Mass? 1. The take-off mass of an aircraft is 8470 kg 2. Total fuel on board is 1600 kg including 450 kg reserve fuel and 29 kg of unusable fuel 3. The traffic load is 770 kg",
    choices: {
      A: "6420",
      B: "6129",
      C: "6899",
      D: "6870",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given: Dry Operating Mass: 5210 kg Zero Fuel Mass: 6230 kg Trip Fuel: 990 kg Take-off Fuel: 1590 kg The Traffic Load is",
    choices: {
      A: "1020 kg",
      B: "3390 kg",
      C: "2370",
      D: "2980",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given: Dry Operating Mass: 5320 kg Zero Fuel Mass: 6790 kg Trip Fuel: 770 kg Take-Off Fuel: 1310 kg The Traffic Load is",
    choices: {
      A: "1470 kg",
      B: "3080 kg",
      C: "1610",
      D: "2940 MASS AND BALANCE LOADING - Terminology",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      ". Given: Dry Operating Mass: 4920 kg Zero Fuel Mass: 5740 kg Trip Fuel: 670 kg Take-Off Fuel: 1050 kg The Traffic Load is",
    choices: {
      A: "2160 kg",
      B: "1340 kg",
      C: "2480 kg",
      D: "820 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given: Zero Fuel Mass: 4770 kg Trip Fuel: 1040 kg Block Fuel: 1960 kg Taxi Fuel: 20 kg The actual Take-Off Mass is equal to",
    choices: {
      A: "5890 kg",
      B: "4970 kg",
      C: "6710 kg",
      D: "6730 kg",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      ". Given: Zero Fuel Mass: 4920 kg Trip Fuel: 880 kg . Given: Zero Fuel Mass: 4920 kg Trip Fuel: 880 kg Block Fuel: 1330 kg Taxi Fuel: 25 kg The actual Take-Off Mass is equal to",
    choices: {
      A: "6250 kg",
      B: "6810 kg",
      C: "6360 kg",
      D: "6225 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given: Zero Fuel Mass: 6660 kg Trip Fuel: 990 kg Block Fuel: 1540 kg Taxi Fuel: 25 kg The actual Take-Off Mass is equal to",
    choices: {
      A: "8175 kg",
      B: "8200 kg",
      C: "7210 kg",
      D: "8110 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The the",
    choices: {
      A: "2960 kg",
      B: "1800 kg",
      C: "1160 kg",
      D: "3210 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The Basic Empty Mass is 4960 kg, the Dry Operating Mass is 5220 kg and the Zero Fuel Mass is 6040 kg. If the take-off mass is 7630 kg the useful load is",
    choices: {
      A: "2670 kg",
      B: "2410 kg",
      C: "1590 kg",
      D: "820 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum quantity of fuel that can be loaded into a helicopter's tanks is given as 1120 litres. If the fuel density (specific gravity) is given as 0.79 the mass of fuel which may be loaded is",
    choices: {
      A: "1418 kg",
      B: "858 kg",
      C: "1011 kg",
      D: "885 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum quantity of fuel that can be loaded into a helicopter's tanks is given as 565 litres. If the fuel density (specific gravity) is given as 0.79 the mass of fuel which may be loaded is",
    choices: {
      A: "715 kg",
      B: "446 kg",
      C: "464 kg",
      D: "528 kg",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum quantity of fuel that can be loaded into a helicopter's tanks is given as 600 US Gallons. If the fuel density (specific gravity) is given as 0.79 the mass of fuel which may be loaded is",
    choices: {
      A: "1794 kg",
      B: "2875 kg",
      C: "2155 kg",
      D: "3453 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum quantity of fuel that can be loaded into a helicopter's tanks is given as 800 US Gallons. If the fuel density (specific gravity) is given as 0.79 the mass of fuel which may be loaded is",
    choices: {
      A: "2392 kg MASS AND BALANCE LOADING - Terminology",
      B: "3833 kg",
      C: "2873 kg",
      D: "4604 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum quantity of fuel that can be loaded into an aircraft's tanks is given as 2200 litres. If the fuel density (specific gravity) is given as 0.79 the mass of fuel which may be loaded is",
    choices: {
      A: "2785 kg",
      B: "2098 kg",
      C: "1798 kg",
      D: "1738 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum quantity of fuel that can be loaded into an aircraft's tanks is given as 400 US Gallons. If the fuel density (specific gravity) is given as 0.79 the mass of fuel which may be loaded is",
    choices: {
      A: "1916 kg",
      B: "1196 kg",
      C: "1437 kg",
      D: "2302 kg",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The take-off mass of an aircraft is 117000 kg, comprising a traffic load of 18000 kg and fuel of 46000 kg. What is the Dry Operating Mass?",
    choices: {
      A: "53000 kg",
      B: "64000 kg",
      C: "71000 kg",
      D: "99000 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The take-off mass of an aeroplane is 141000 kg. Total fuel on board is 63000 kg including 14000 kg reserve fuel and 1000 kg of unusable fuel. The traffic load is 12800 kg. The Zero Fuel Mass is",
    choices: {
      A: "65200 kg",
      B: "79000 kg",
      C: "78000 kg MASS AND BALANCE LOADING - Terminology",
      D: "93000 kg",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The Take-Off Mass of an aeroplane is 66700 kg which includes a traffic load of 14200 kg and a usable fuel load of 10500 kg. If the standard mass for the crew is 545 kg the Dry Operating Mass is",
    choices: {
      A: "56200 kg",
      B: "41455 kg",
      C: "42545 kg",
      D: "42000 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "What mass has to be entered in the loading chart for aviation fuel if 170 I may be refuelled? (Fuel density = 0.78 kg/l)",
    choices: {
      A: "133 kg",
      B: "133 daN",
      C: "170 kg",
      D: "218 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aircraft is loaded with 27960 litres of JET A which has a specific gravity of 0.81. If the Zero Fuel Mass is 165000 lbs the Operating Mass will be",
    choices: {
      A: "214825 lb",
      B: "226512 lb",
      C: "240941 lb",
      D: "187648 lb",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "Using the following, calculate the traffic mass: PLTOM: 68000 kg Taxi mass: 67640 kg DOM: 38600 kg Landing mass: 60500 kg Operating mass: 50000 kg Trip fuel: 7000 kg PLLM: 64800 kg PLTOM: 68000 kg Taxi mass: 67640 kg DOM: 38600 kg Landing mass: 60500 kg Operating mass: 50000 kg Trip fuel: 7000 kg PLLM: 64800 kg MZFM: 59000 kg",
    choices: {
      A: "19260 kg",
      B: "17500 kg",
      C: "17460 kg",
      D: "28500 kg",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "A MRJT is about to make a scheduled European flight, using the following information calculate the most limiting TOM for the aircraft",
    choices: {
      A: "65000 kg",
      B: "69400 kg",
      C: "66700 kg",
      D: "64100 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "Standard masses for flight deck and cabin crews are?",
    choices: {
      A: "90 kg and 85 kg",
      B: "85 kg and 75 kg",
      C: "84 kg for both",
      D: "90 kg for both MASS AND BALANCE LOADING - Terminology",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given the following information: Basic Empty Mass: 30400 kg Dry Operating Mass: 32500 kg Zero Fuel Mass: 40800 kg Traffic load: 8300 kg Fuel: 12200 kg",
    choices: {
      A: "50900 kg",
      B: "53000 kg",
      C: "44700 kg",
      D: "61300 kg",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The Take-Off Mass of an aircraft is 3620 kg, the Landing Mass is 3280 kg and the Basic Empty Mass is 1875 kg. The fuel load on take-off is 380 kg and the traffic load is 1150 kg. The Dry Operating Mass is",
    choices: {
      A: "3025 kg",
      B: "1660 kg",
      C: "2130 kg",
      D: "2090 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aircraft has a Dry Operating Mass of 37400 kg. The Performance Limited Take-Off Mass is 67400 kg and the Performance Limited Landing Mass 52800 kg. The Certificate of Airworthiness Maximum Structural Take-Off Mass is 66000 kg, the Maximum Structural Landing Mass is 54000 kg and the Maximum Zero Fuel Mass is 52000 kg. The fuel load before taxi is 16000 kg. Allowing 500 kg for start, taxi and take-off and 12400 kg for trip fuel the maximum allowed traffic load is",
    choices: {
      A: "12300 kg",
      B: "13500 kg",
      C: "14600 kg",
      D: "13100 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aircraft fuel tank can hold a maximum volume equivalent to 2300 kg of fuel at 0.80 SG. The tank is loaded with fuel at 0.78 SG, the volume of fuel that can be loaded is",
    choices: {
      A: "1840 litres",
      B: "2243 litres",
      C: "2359 litres",
      D: "2875 litres",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "A helicopter is performance limited to a landing mass of 6=7550 kg. The Basic Empty Mass is 5200 kg, the Dry Operating Mass is 5500 kg and the Zero Fuel Mass is 5980 kg. If the take-off mass is 7980 kg the useful load is",
    choices: {
      A: "2780 kg",
      B: "2480 kg",
      C: "2000 kg",
      D: "480 kg",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A helicopter is to depart at a Take-Off Mass of 8040 kg. Take-off fuel (including Reserve Fuel of 680 kg) is 1750 kg. The Basic Empty Mass is 5050 kg. Considering a total mass of crew and operating items of 510 kg, the permissible Traffic Load will be",
    choices: {
      A: "730 kg",
      B: "1300 kg",
      C: "2310 kg",
      D: "1010 kg",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A helicopter is to depart at a Take-Off Mass of 8220 kg. Take off Fuel (including Reserve Fuel of 710 kg) is 1750 kg. The Basic Empty Mass is 4920 kg. Considering a total mass of crew and operating items of 420 kg, the permissible Traffic Load will be",
    choices: {
      A: "2590 kg",
      B: "1040 kg",
      C: "1130 kg",
      D: "1550 kg",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A helicopter is to depart at a Take-Off Mass of 8600 kg. Take off Fuel (including Reserve Fuel of 920 kg) is 1840 kg. The Basic Empty Mass is 4940 kg. Considering a total mass of crew and operating items of 440 kg, the permissible Traffic Load will be",
    choices: {
      A: "1820 kg",
      B: "1380 kg",
      C: "2740 kg",
      D: "920 kg",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The basic empty mass of a helicopter is 4910 kg. The operational items (including crew) is given as a mass of 320 kg. If the take-off mass is 7980 kg (including a usable fuel quantity of 1080 kg) the useful load is",
    choices: {
      A: "2750 kg",
      B: "3070 kg",
      C: "1670 kg",
      D: "1400 kg",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The basic empty mass of a helicopter is 5200 kg. The operational items (including crew) is given as a mass of 270 kg. If the take-off mass is 7840 kg (including a usable fuel quantity of 1220 kg) the useful load is",
    choices: {
      A: "2370 kg",
      B: "1150 kg",
      C: "1490 kg",
      D: "2640 kg",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The basic empty mass of a helicopter, as given in the weighing schedule, is 4610 kg. The operational items (including crew) is given as a mass of 530 kg. If the take-off mass is 6960 kg (including a usable fuel quantity of 800 kg) the useful load is",
    choices: {
      A: "1820 kg",
      B: "1020 kg",
      C: "1330 kg",
      D: "2350 kg",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The Take-Off Mass of a helicopter is 6700 kg. Total fuel on board is 800 kg including 200 kg reserve fuel and 19 kg of unusable fuel. The traffic load is 900 kg. The Zero Fuel Mass is",
    choices: {
      A: "5919 kg",
      B: "5900 kg",
      C: "5681 kg",
      D: "5000 kg",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The take-off mass of a helicopter is 7840 kg which includes a traffic load of 870 kg and a usable fuel load of 960 kg. If the standard mass for the crew is 350 kg the Dry Operating Mass is",
    choices: {
      A: "6010 kg",
      B: "5660 kg",
      C: "6970 kg",
      D: "7490 kg",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The Take-Off Mass of a helicopter is 8150 kg, comprising a Traffic Load of 990 kg and Take-Off Fuel of 2400 kg. The Trip Fuel is 1630 kg. What is the Dry Operating Mass?",
    choices: {
      A: "6390 kg",
      B: "7160 kg",
      C: "4760 kg",
      D: "3130 kg",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The Take-Off Mass of a helicopter is 8210 kg which includes a traffic load of 1720 kg and a usable fuel load of 1610 kg. If the standard mass for the crew is 300 kg the Dry Operating Mass is",
    choices: {
      A: "4580 kg",
      B: "6490 kg",
      C: "7910 kg",
      D: "4880 kg",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The Take-Off Mass of a helicopter is 8340 kg, comprising a Traffic Load of 1870 kg and Take-off Fuel of 1690 kg. The Trip Fuel is 980 kg. What is the Dry Operating Mass?",
    choices: {
      A: "3800 kg MASS AND BALANCE LOADING - Terminology",
      B: "4780 kg",
      C: "5760 kg",
      D: "6460 kg",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The Take-Off Mass of a helicopter is 8400 kg, comprising a traffic load of 1590 kg and take off fuel of 1840 kg. The trip fuel is 1000 kg. What is the Dry Operating Mass?",
    choices: {
      A: "4970 kg",
      B: "3970 kg",
      C: "5970 kg",
      D: "6810 kg",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The take-off mass of a helicopter is 8420 kg which includes a traffic load of 1640 kg and a usable fuel load of 1150 kg. If the standard mass for the crew is 270 kg the Dry Operating Mass is",
    choices: {
      A: "5900 kg",
      B: "7050 kg",
      C: "7270 kg",
      D: "5630 kg",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The take-off mass of a helicopter is 8600 kg which includes a traffic load of 1890 kg and a usable fuel load of 1230 kg. If the standard mass for the crew is 190 kg the Dry Operating Mass is",
    choices: {
      A: "8410 kg",
      B: "5480 kg",
      C: "5290 kg",
      D: "6710 kg",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The take-off mass of a helicopter is 9000 kg. Total fuel on board is 1900 kg including 300 kg reserve fuel and 20 kg of unusable fuel. The traffic load is 1000 kg. The zero fuel mass is",
    choices: {
      A: "6780 kg",
      B: "6100 kg",
      C: "7120 kg MASS AND BALANCE LOADING - Terminology",
      D: "7100 kg",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The centre of gravity location of the aeroplane is normally computed along the",
    choices: {
      A: "vertical axis",
      B: "lateral axis",
      C: "longitudinal axis",
      D: "horizontal axis",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The centre of gravity of an aeroplane is at 25% of the Mean Aerodynamic Chord. This means that the centre of gravity of the aeroplane is situated at 25% of the length of",
    choices: {
      A: "the mean aerodynamic chord in relation to the datum",
      B: "the mean aerodynamic chord in relation to the trailing edge",
      C: "the mean aerodynamic chord in relation to the leading edge",
      D: "the aeroplane in relation to the leading edge",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The datum for determining the CG has to be along the longitudinal axis",
    choices: {
      A: "between the nose and the tail",
      B: "between the leading and trailing edge of the MAC",
      C: "but does not have to be between the nose and the tail",
      D: "at the fire wall",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to CAP 696 figure 3-1)For the light twin engine piston propeller aeroplane the datum is located",
    choices: {
      A: "At the leading edge of the MAC",
      B: '78.4" FWD of the wing leading edge at the inboard edge of the inboard fuel tank',
      C: "On the nose of the aeroplane",
      D: "78.4 cm FWD of the wing leading edge at the inboard edge of the inboard fuel tank",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The centre of gravity is the",
    choices: {
      A: "neutral point along the longitudinal axis, in relation to a datum line",
      B: "centre of thrust along the longitudinal axis, in relation to a datum line",
      C: "focus along the longitudinal axis, in relation to a datum line",
      D: "point where all the aircraft mass is considered to be concentrated",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "The centre of gravity of a body is that point",
    choices: {
      A: "which is always used as datum when computing moments",
      B: "where the sum of the moments from the external forces acting on the body is equal to zero",
      C: "where the sum of the external forces is equal to zero",
      D: "through which the sum of the forces of all masses of the body is considered to act",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "Moment (balance) arms are measured from a specific point to the body station at which the mass is located. That point is known as",
    choices: {
      A: "the centre of gravity of the aeroplane",
      B: "the focal point",
      C: "the axis",
      D: "the datum",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "A location in the aeroplane which is identified by a number designating its distance from the datum is known as",
    choices: {
      A: "Station",
      B: "Moment",
      C: "MAC",
      D: "Index",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The CG position is",
    choices: {
      A: "set by the pilot MASS AND BALANCE LOADING - Terminology",
      B: "set by the manufacturer",
      C: "able to exist within a range",
      D: "fixed",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The distance from the datum to the Centre of Gravity of a mass is known as",
    choices: {
      A: "the index",
      B: "the lever",
      C: "the moment",
      D: "the moment arm or balance arm",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "The centre of gravity of an aircraft",
    choices: {
      A: "is in a fixed position and is unaffected by aircraft loading",
      B: "must be maintained in a fixed position by careful distribution of the load",
      C: "can be allowed to move between defined limits",
      D: "may only be moved if permitted by the regulating authority and endorsed in the aircraft'scertificate of airworthiness",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to CAP 696 figure 2-1)For the single engine piston/propeller aeroplane the FWD C of G limits are",
    choices: {
      A: '74.00"',
      B: '74.00" 80.4"',
      C: '80.4"',
      D: '37.7"',
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The centre of gravity is that (i) on an aircraft through which the total (ii) is considered to act vertically (iii).",
    choices: {
      A: "(i) datum (ii) mass (iii) upwards",
      B: "(i) datum (ii) moment (iii) downwards MASS AND BALANCE LOADING - Terminology",
      C: "(i) point (ii) moment (iii) upwards",
      D: "(i) point (ii) mass (iii) downwards",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "In centre of gravity calculations the datum is",
    choices: {
      A: "The fixed reference about which moments are taken to calculate the position of the centre ofpressure",
      B: "The fixed reference about which moments are taken to calculate the position of the centre ofgravity",
      C: "The point through which the centre of gravity acts",
      D: "The horizontal reference used to calculate the helicopter's empty centre of gravity",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The true definition of the datum point is",
    choices: {
      A: "the centre of gravity related to the nose of the aircraft",
      B: "a reference point for calculating the centre of pressure",
      C: "a point in the fuselage which all the axes pass through",
      D: "a reference point from where all measurements are taken for centre of gravity calculation",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The single point, through which the resultant of all the individual mass components making up the loaded helicopter can be said to act, is the",
    choices: {
      A: "Operating Mass",
      B: "Centre of helicopter",
      C: "Centre of pressure",
      D: "Centre of Gravity",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which of the following is unlikely to have any effect on the position of the centre of gravity on an aeroplane in flight?",
    choices: {
      A: "Lowering the landing gear",
      B: "Changing the tailplane (horizontal stabiliser) incidence angle AND BALANCE - Terminology",
      C: "Movement of cabin attendants going about their normal duties",
      D: "Normal consumption of fuel for a swept wing aeroplane",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What centre of gravity movement may be expected on gear retraction?",
    choices: {
      A: "CG moves forward",
      B: "CG moves rearward",
      C: "no significant change to CG position",
      D: "CG moves far rearward",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When an aeroplane is stationary on the ground, its total weight will act vertically",
    choices: {
      A: "through its centre of gravity",
      B: "through its centre of pressure",
      C: "through the main wheels of its undercarriage assembly",
      D: "through a point defined as the datum point",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The centre of gravity of an aeroplane is that point through which the total mass said to act. The weight acts in a direction",
    choices: {
      A: "always parallel to the aeroplane's vertical axis",
      B: "parallel to the gravity vector",
      C: "at right angles to the flight path",
      D: "governed by the distribution of the mass within the aeroplane",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The weight of an aeroplane, which is in level non-accelerated flight, is said to The weight of an aeroplane, which is in level non-accelerated flight, is said to act",
    choices: {
      A: "always along the vertical axis of the aeroplane",
      B: "vertically through the centre of pressure",
      C: "vertically through the datum point",
      D: "vertically through the centre of gravity MASS AND BALANCE LOADING - Terminology",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "If nose wheel moves aft during gear retraction, how will this movement affect the location of the centre of gravity (cg) on the aeroplane?",
    choices: {
      A: "It will not affect the cg location",
      B: "It will cause the cg to move aft",
      C: "It will cause the cg to move forward",
      D: "The cg location will change, but the direction cannot be told the information given",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given: C of G is located at STN 15 Aeroplane mass is 3650 lbs What is the effect on the C of G if you move baggage (total mass 64 lb) from STN 14 to STN 20?",
    choices: {
      A: "It moves FWD by 0.13 units",
      B: "It moves AFT by 0.1 unit",
      C: "It moves AFT by 0.3 units",
      D: "It moves AFT by 0.31 units",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "A loaded aircraft weighs 4200 lb with a C of G of 9 inches AFT of the datum. An extra 200 lbs is loaded into the aircraft 40 inches FWD of the datum. The new C of G position is",
    choices: {
      A: "6.8 inches FWD",
      B: "3.0 inches AFT",
      C: "6.8 inches AFT",
      D: "3.0 inches FWD",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The undercarriage of an aeroplane moves rearward when it is being retracted. Does this affect the CG?",
    choices: {
      A: "No, the position of the CG would remain the same",
      B: "Yes, but the CG movement could not be calculated MASS AND BALANCE LOADING - Terminology",
      C: "Yes, the CG would move aft",
      D: "Yes, the CG would move forward",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "For a large aircraft where the main and nose landing gears retract forward, the effect on the CG on lowering the gear is",
    choices: {
      A: "to move aft",
      B: "to move forward",
      C: "to remain static",
      D: "to move forward then aft",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to figure 031_8-5)For the following see-saw to be in balance",
    choices: {
      A: "Fb = A x Fa/B",
      B: "Fb = A + Fa/B",
      C: "Fb = A x B/Fa",
      D: "Fb = B x Fa/A",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to figure 031_8-6)For the following see-saw to be in balance",
    choices: {
      A: "Fc + 3Fa",
      B: "Fc = Fa/3A",
      C: "Fc = Fa/3",
      D: "Fc = 3/Fa",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "(refer to figure 031_8-7)For the following boom to be in balance",
    choices: {
      A: "B + Fa x A/Fb",
      B: "B + Fb x A/Fa",
      C: "B + -(Fa x A/Fb)",
      D: "B + Fb + A/Fa MASS AND BALANCE LOADING - Terminology",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aeroplane has its centre of gravity located 7 metres from the datum line and it has a mass of 49000 N. The moment about the datum is",
    choices: {
      A: "343000 Nm",
      B: "1.43 Nm",
      C: "7000 Nm",
      D: "34300 Nm",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "Which one of the following is correct?",
    choices: {
      A: "Arm = Force/Moment",
      B: "Arm = Moment/Force",
      C: "Moment = Force/Arm",
      D: "Arm = Force x Moment",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to CAP 696 figure 3-2)Block fuel = 100 gal Trip fuel = 55 gal Fuel density = 6 lbs/gal Determine block fuel moment",
    choices: {
      A: "9360",
      B: "56160",
      C: "30888",
      D: "430546",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "If all the moments are positive when calculating mass (weight) and balance, the position of the datum would be at the",
    choices: {
      A: "trailing edge of the wing",
      B: "main wheels centreline",
      C: "nose, or forward of the aircraft",
      D: "centre line of the nose or tail wheel depending on the aircraft type",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The position of the centre of gravity can always be determined by",
    choices: {
      A: "subtracting the total mass from the total moment",
      B: "subtracting the total moment from the total mass",
      C: "dividing the total mass by the total moment",
      D: "dividing the total moment by the total mass",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to CAP 696 figure 3-2)From data sheet attached select the volume of the fuel allowance for start, run up and taxi as per the worked example",
    choices: {
      A: "3.8 US gallons",
      B: "3.8 Imp gallons",
      C: "3.8 litres",
      D: "3.8 US pints",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "A load placed aft of the datum",
    choices: {
      A: "Has a positive arm and therefore generates a positive moment but negative mass",
      B: "Has a negative arm and therefore generates a negative moment but a positive mass",
      C: "Has a negative arm and therefore generates a negative moment and mass",
      D: "Has a positive arm and therefore generates a positive moment",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "A load placed forward of the datum",
    choices: {
      A: "Has a negative arm and therefore generates a negative moment",
      B: "Has a negative arm and therefore generates a negative mass and moment",
      C: "Has a positive arm and therefore generates a positive mass and moment",
      D: "Has a positive arm and therefore generates a positive moment",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "In calculating the position of the centre of gravity the correct formula is",
    choices: {
      A: "moment = mass ÷ arm MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      B: "moment = arm ÷ mass",
      C: "mass = arm ÷ moment",
      D: "mass = moment ÷ arm",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "Max floor loading = 750 kg per m2. A package of 600 kg is to be loaded. What is the minimum pallet size?",
    choices: {
      A: "30 cm x 200 cm",
      B: "40 cm x 300 cm",
      C: "40 cm x 200 cm",
      D: "30 cm x 300 cm",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to CAP 696 figure 2-1)From the manual for the single engine piston/propeller aeroplane, the maximum floor loading is",
    choices: {
      A: "50 lbs per sq foot",
      B: "100 lbs per sq foot",
      C: "50 lbs per sq foot and 100 lbs per sq foot",
      D: "50 lbs per sq foot between front and rear spars (includes baggage zone A) and 100 lbs per sq foot elsewhere (baggage zones B & C)",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to CAP 696 Figure 4-4)With reference to the attached chart, the distance of the leading edge of the MAC from the datum is",
    choices: {
      A: "Undefined",
      B: "525.6 m",
      C: "625.6 in",
      D: "525.6 in",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to CAP 696 Figures 4-7 & 4-8)From the data sheet for a medium range twinjet determine the moment effect of 20 passengers without hand baggage located in zon E",
    choices: {
      A: "108780 kg force inches",
      B: "1181040 kg force inches MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      C: "1305360 force inches",
      D: "1212120 kg force inches",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Longitudinal CG location is normally expressed",
    choices: {
      A: "as a percentage of the MAC from its leading edge",
      B: "as a percentage of the MAC from its trailing edge",
      C: "with respect to the neutral point",
      D: "with respect to the centre of pressure",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Where is the percentage MAC measured from?",
    choices: {
      A: "The datum",
      B: "The wing leading edge",
      C: "The wing trailing edge",
      D: "The nose of the aircraft",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_4-11)With reference to the MRJT, what are the limits for the CG as a percentage of the aircraft's MAC at TOM of 57500 kg?",
    choices: {
      A: "88.5% to 94.5%",
      B: "9% to 25%",
      C: "8% to 26.6%",
      D: "12% to 20%",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_4-11)What are the limits for the CG as a percentage of the aircraft's MAC at its maximum taxi mass?",
    choices: {
      A: "88.5% to 94.5%",
      B: "9.5% to 26%",
      C: "7.5% to 27%",
      D: "12% to 20% MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(For this question use CAP 696 Figure 4.11)At the maximum landing mass the range of safe CG positions, as determined from the appropriate graph in the loading manual, is",
    choices: {
      A: "Forward limit 8.0% MAC aft limit 26.8% MAC",
      B: "Forward limit 8.0% MAC aft limit 27.2% MAC",
      C: "Forward limit 8.6% MAC aft limit 27.0% MAC",
      D: "Forward limit 7.4% MAC aft limit 27.0% MAC",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "(For this question use CAP 696 Figure 4.11)An aeroplane has a landing mass of 53000 kg. The range of safe CG positions, as determined from the appropriate graph in the loading manual, is",
    choices: {
      A: "Forward limit 8.2% MAC aft limit 27.0% MAC",
      B: "Forward limit 7.8% MAC aft limit 27.0% MAC",
      C: "Forward limit 7.3% MAC aft limit 26.8% MAC",
      D: "Forward limit 8.7% MAC aft limit 26.8% MAC",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "(For this question use CAP 696 Figure 4.11)The aeroplane has a mass of 61000 kg in the cruise. The range of safe CG positions, as determined from the appropriate graph in the loading manual, is",
    choices: {
      A: "forward limit 7.7% aft limit 25.2% MAC",
      B: "forward limit 8.0% aft limit 27.2% MAC",
      C: "forward limit 7.6% aft limit 26.9% MAC",
      D: "forward limit 8.3% aft limit 26.3% MAC",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "(For this question use CAP 696 Figure 4.11)The aeroplane has a Take-Off Mass of 58000 kg. At this mass the range of safe CG positions, as determined from the appropriate graph in the loading manual, is",
    choices: {
      A: "Forward limit 9.5% MAC aft limit 26.1% MAC",
      B: "Forward limit 8.2% MAC aft limit 26.2% MAC",
      C: "Forward limit 8.0% MAC aft limit 26.5% MAC",
      D: "Forward limit 8.5% MAC aft limit 26.1% MAC",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question: "The datum of an aeroplane is situated",
    choices: {
      A: "not always between the nose and the tail",
      B: "always between the nose and the tail",
      C: "between the leading edge and the trailing edge of the MAC",
      D: "between the leading edge and the trailing edge of the wing",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "The datum used for balance calculations is",
    choices: {
      A: "chosen on the longitudinal axis of the aeroplane, and necessarily situated between the nose andthe tail of the aircraft",
      B: "chosen on the longitudinal axis of the aeroplane, but not necessarily between the nose and the tail of the aircraft",
      C: "chosen on the longitudinal axis of the aircraft and necessarily situated between the leadingedge and trailing edge of the wing",
      D: "chosen on the longitudinal axis of the aircraft, and always at the fire-wall level",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to CAP 696 Figure 2-5)From the attached data sheet, what is the fwd CG limit for an aircraft with a mass of 3500 lb?",
    choices: {
      A: "+78.0 inches",
      B: "+79.0 inches",
      C: "+79.5 inches",
      D: "+80.0 inches",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The BEM of an aircraft is the basic/empty weight of an aircraft without crew and items of removable equipment, it is",
    choices: {
      A: "Found in the aircraft manual and includes unusable fuel and liquids in closed systems",
      B: "Found in the weighing schedule at the last date of weighing",
      C: "Found in the loading manual and includes unusable fuel",
      D: "Found in the Operations Manual and includes engine oil",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to figure 031_9-5)At the Maximum Landing Mass the range of safe CG positions, as determined from the appropriate graph in the manual, is",
    choices: {
      A: "Forward limit 4.52m, aft limit 4.85m",
      B: "Forward limit 4.40m, aft limit 4.90m",
      C: "Forward limit 4.47m, aft limit 4.86m",
      D: "Forward limit 4.50m, aft limit 4.85m",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9-5)The helicopter has a mass of 8000 kg in the cruise. The range of safe CG positions, as determined from the appropriate graph in the manual, is",
    choices: {
      A: "Forward limit 4.52 m, aft limit 4.85 m",
      B: "Forward limit 4.52 m, aft limit 4.90 m",
      C: "Forward limit 4.47 m, aft limit 4.87 m",
      D: "Forward limit 4.44 m, aft limit 4.85 m",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9-5)The helicopter has a landing mass of 7500 kg. The range of safe CG positions as determined from the appropriate graph in the manual is",
    choices: {
      A: "Forward limit 4.40m, aft limit 4.90m",
      B: "Forward limit 4.50m, aft limit 4.86m",
      C: "Forward limit 4.40m, aft limit 4.85m",
      D: "Forward limit 4.44m, aft limit 4.88m",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9-5)The helicopter has a Take-Off Mass of 7000 kg. At this mass the range of safe CG positions, as determined from the appropriate graph in the manual, is",
    choices: {
      A: "Forward limit 4.40m, aft limit 4.90m",
      B: "Forward limit 4.52m, aft limit 4.85m",
      C: "Forward limit 4.40m, aft limit 4.67m",
      D: "Forward limit 4.52m, aft limit 4.67m",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9-8)Where has the longitudinal reference (datum line) been defined on the single engine piston helicopter SEPH1?",
    choices: {
      A: "100 inches forward of main rotor centreline MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      B: "At the centreline of the helicopter through the main rotor",
      C: "The longitudinal reference has not been defined",
      D: "At the centre of gravity",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9-10)Where is the longitudinal centre-of-gravity at basic empty mass (Delivered Weight) of the single engine piston helicopter SEPH1 located?",
    choices: {
      A: "at the main rotor centre line",
      B: "at 113.147 inches",
      C: "at 100.9 inches",
      D: "at 95.1 inches",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9-9)Where has the longitudinal reference (datum plane) been defined on the twin engine transport helicopter TETH1?",
    choices: {
      A: "At the most forward point of the rotor",
      B: "The longitudinal reference has not been defined",
      C: "At the rotor mast",
      D: "4.67m forward of the main rotor centre",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The longitudinal centre of gravity datum (helicopter)",
    choices: {
      A: "Must be located aft of the main rotor mast",
      B: "Must be located in line with the main rotor mast",
      C: "Can be located anywhere",
      D: "Must be located forward of the main rotor mast",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The longitudinal centre of gravity datum (helicopter)",
    choices: {
      A: "Must be located between the forward and aft centre of gravity limits",
      B: "Can be located anywhere",
      C: "Must be located forward of or in line with the nose of the helicopter MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      D: "Must be located in line with the main rotor mast",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The longitudinal reference (datum line) for determining the moment arm is defined",
    choices: {
      A: "by the manufacturer of the helicopter",
      B: "by the operator of the helicopter",
      C: "by the National Aviation Authority",
      D: "by the pilot in command of the helicopter",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The longitudinal reference (datum line) for determining the moment arm is generally located",
    choices: {
      A: "at the centre of gravity",
      B: "below the rotor centre",
      C: "aft of the helicopter",
      D: "forward of the helicopter",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If individual masses are used, the mass of an aeroplane must be determined prior to initial entry into service and thereafter",
    choices: {
      A: "at intervals of 4 years if no modifications have taken place",
      B: "at regular annual intervals",
      C: "only if major modifications have taken place",
      D: "at intervals of 9 years",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane must be re-weighed at certain intervals. Where an operator uses fleet masses and provided that changes have been correctly documented, this interval is",
    choices: {
      A: "4 years for each aeroplane",
      B: "9 years for each aeroplane",
      C: "whenever a major modification is carried out",
      D: "whenever the Certificate of Airworthiness is renewed",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_8-2)Where is the centre of gravity of the aeroplane in the diagram?",
    choices: {
      A: "26.57 cm aft of datum",
      B: "32.29 cm aft of datum",
      C: "26.57 cm forward of datum",
      D: "32.29 cm forward of datum",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An operator has a fleet of 43 aircraft, how many aircraft must be weighed at the same time to maintain the fleet value?",
    choices: {
      A: "6",
      B: "7",
      C: "8",
      D: "9Aircrafts",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft that is not within a fleet mass evaluation programme must be weighed",
    choices: {
      A: "Every year",
      B: "Every other year",
      C: "Every third year",
      D: "Every fourth year",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The interval between 2 fleet mass evaluations must not exceed",
    choices: {
      A: "48 months",
      B: "36 months",
      C: "24 months",
      D: "12 months",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane with a two wheeled nose gear and four main wheels rests on the ground with a single nose wheel load of 725 kg and a single main wheel load of 6000 kg. The distance between the nose wheels and the main wheels is 10 meters. How far is the centre of gravity in front of the main wheels?",
    choices: {
      A: "25 cm",
      B: "40 cm",
      C: "57 cm",
      D: "63 cm",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_8-10)What is the centre of gravity position of the aeroplane in the diagram, given:Left main:1620 kgRight main:1632 kgNose: 640 kg",
    choices: {
      A: "24.7¿ FWD of the Datum",
      B: "33.1¿ FWD of the Datum",
      C: "24.6¿ AFT of the Datum",
      D: "13.1¿ AFT of the Datum",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_8-11)Calculate the centre of gravity for the aeroplane in the diagram given:Nose wheel weight:7800 kgLeft wheel weight: 11800 kgRight wheel weight: 11400 kg",
    choices: {
      A: "0.31 m aft of datum",
      B: "2.8m aft of datum",
      C: "8.2m aft of datum",
      D: "3.2m aft of datum",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane is weighed prior to entry into service. Who is responsible for deriving the Dry Operational Mass from the weighed mass by the addition of the operational items?",
    choices: {
      A: "The Operator",
      B: "The appropriate Aviation Authority",
      C: "The aeroplane manufacturer or supplier",
      D: "The commander of the aeroplane",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "An aeroplane may be weighed",
    choices: {
      A: "in an area of the airfield set aside for maintenance MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      B: "in a quiet parking area clear of the normal manoeuvring area",
      C: "in an enclosed, non-air conditioned, hangar",
      D: "at a specified - weighing location - on the airfield",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "To measure the mass and CG-position of an aircraft, it should be weighed with a minimum of",
    choices: {
      A: "1 point of support",
      B: "2 points of support",
      C: "3 points of support",
      D: "4 points of support",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aeroplane with a two wheel nose gear and four main wheels rests on the ground with a single nose wheel load of 500 kg and a single main wheel load of 6000 kg. The distance between the nose wheels and the main wheels is 10 metres. How far is the centre of gravity in front of the main wheels?",
    choices: {
      A: "40 cm",
      B: "25 cm",
      C: "4 meters",
      D: "41.6 cms",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "When preparing to carry out the weighing procedure on an aeroplane, which of the following is not required?",
    choices: {
      A: "drain all usable fuel",
      B: "drain all engine tank oil",
      C: "drain all chemical toilet fluid tanks",
      D: "removable passenger services equipment to be offloaded",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The weights measured at the landing gear of an aircraft are as follows: Nose wheel (55 inches aft of datum): 475 lbs Right main wheel (121 inches aft of datum): 1046 lbs Nose wheel (55 inches aft of datum): 475 lbs Right main wheel (121 inches aft of datum): 1046 lbs Left main wheel (121 inches aft of datum): 1040 lbs",
    choices: {
      A: "104.6 in",
      B: "106.4 in",
      C: "108.8 in",
      D: "1046 in",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "At the re-weighing of an aircraft, who is responsible for establishing the DOM?",
    choices: {
      A: "operator",
      B: "commander",
      C: "manufacturer",
      D: "the Authority",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The following results were obtained after weighing a helicopter: Front point: 220 kg Right rear point: 500 kg Left rear point: 480 kg",
    choices: {
      A: "3.36 m",
      B: "0.04 m",
      C: "3.44 m",
      D: "1.18 m",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The following results were obtained after weighing a helicopter: Mass at front point: 300 kg Mass at right rear point: 1100 kg Mass at left rear point: 950 kg It is given that the front point is located 0.30m left of the longitudinal axis and the rear points are symmetrically located 1.20m from this axis. The helicopter lateral CG-position relative to the longitudinal axis is",
    choices: {
      A: "11 cm left",
      B: "4 cm right",
      C: "4 cm left",
      D: "11 cm right",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "After weighing a helicopter the following values are noted: Forward point: 350 kg Aft right point: 995 kg Aft left point: 1205 kg What is the longitudinal CG-position in relation to the datum situated 4m in front of the rotor axis, knowing that the forward point is at 2.5m forward of the rotor axis and the aft points are 1m aft of the rotor axis?",
    choices: {
      A: "4.52 m",
      B: "4.09m",
      C: "4.21m",
      D: "4.15m",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "An aeroplane is weighed and the following recordings are made: Nose wheel assembly scale: 5330 kg Left main wheel assembly scale: 12370 kg Right main wheel assembly scale: 12480 kg If the OPERATIONAL ITEMS amount to a mass of 1780 kg with a crew mass of 545 kg, the empty mass, as entered in the weight schedule, is",
    choices: {
      A: "32505 kg MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      B: "30180 kg",
      C: "28400 kg",
      D: "31950 kg",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "When is a re-weighing of a helicopter required?",
    choices: {
      A: "At least every four years",
      B: "Prior to every flight",
      C: "During every yearly inspection",
      D: "After every 400-hrs inspection",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9-1)The aft centre-of-gravity limit is located at 2.97m. The datum is located in front of the helicopter. Is it allowed to fly under otherwise identical conditions if a pilot is weighing 10 kg less as given?",
    choices: {
      A: "Yes, the new centre of gravity is located 1 cm forward of the aft limit, thus still within theallowable range",
      B: "No, the new centre of gravity is located 1 cm aft of the aft limit, thus outside the allowablerange",
      C: "Yes, the reduced mass can only have a positive effect",
      D: "Yes, the new centre of gravity is now located more forward within the allowable range",
    },
    correct: "A",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 031_9-1)The aft centre-of-gravity limit is located at 2.945 m. The datum is located in front of the helicopter. Is it allowed to fly under otherwise identical conditions if a pilot is weighing 10 kg more as given?",
    choices: {
      A: "Yes, the increased mass can only have a positive effect",
      B: "Yes, the new centre of gravity is now located more backward within the allowable range",
      C: "Yes, the new centre of gravity is located 1 cm forward of the aft limit, thus within theallowable range MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      D: "No, the new centre of gravity is located 1 cm aft of the aft limit, thus outside the allowablerange h",
    },
    correct: "D",
    ref: "ATPL AND H",
  },
  {
    question:
      "(For this Question use Figures 4.1 and 4.2) For the medium range twin jet the datum point is located",
    choices: {
      A: "on the nose of the aeroplane",
      B: "540 cm forward on the front spar",
      C: "540 inches forward of the front spar",
      D: "at the leading edge of the Mean Aerodynamic Chord (MAC)",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 3-1)The reference point for the MEP 1 aircraft is",
    choices: {
      A: "108.8 inches aft of the datum",
      B: "85.5 inches aft of the datum",
      C: "78.4 inches aft of the datum",
      D: "25.3 inches aft of the datum",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 4-6)From the data sheet for a medium range twin jet determine the amount of unusable fuel in the aircraft",
    choices: {
      A: "17.1 US gallons at 50 kg",
      B: "17.1 US gallons at 52 kg",
      C: "17.0 US gallons at 50 kg",
      D: "17.0 US gallons at 52 kg",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 4-3) From the data sheet for a medium range twin jet determine the moment effect of raising the flaps from 40o to 15o",
    choices: {
      A: "-2000 kg force inches",
      B: "+2000 kg force inches MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      C: "-1000 kg force inches",
      D: "+1000 kg force inches",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figures 4-1 & 4-2)From the medium range twin jet data sheet give the distance of body station 727F from the front spar",
    choices: {
      A: "+540 inches",
      B: "+313 inches",
      C: "+287 inches",
      D: "+187 inches",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_4-13)Using the data for the MRJT, what would be the fuel index figure for a take-off fuel of 12455 kg?",
    choices: {
      A: "-8.1",
      B: "-7.5",
      C: "-7.8",
      D: "-8.7",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The maximum aircraft mass excluding all usable fuel is",
    choices: {
      A: "fixed and listed in the Aircraft Operating Manual",
      B: "variable and is set by the payload for the trip",
      C: "fixed by the physical size of the fuselage and cargo holds",
      D: "variable and depends on the actual fuel load for the trip",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "For a particular aeroplane, the structural maximum mass without any fuel on board, other than unusable quantities, is",
    choices: {
      A: "a variable value which is governed by the payload carried",
      B: "a fixed value which is stated in the Aeroplane Operating Manual",
      C: "a variable value which may limit the payload carried",
      D: "a fixed value which will limit the amount of fuel carried MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum certificated taxi (or ramp) mass is that mass to which an aeroplane may be loaded prior to engine start, it is",
    choices: {
      A: "a fixed value which is listed in the Flight Manual",
      B: "a value which varies with airfield temperature and altitude. Corrections are listed in the Flight Manual",
      C: "a value which varies only with airfield altitude. Standard corrections are listed in the FlightManual",
      D: "a value which is only affected by the outside air temperature. Corrections are calculated fromdata given in the Flight Manual",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The Maximum Zero Fuel Mass is the mass of the aeroplane with no usable fuel on board. It is a limitation which is",
    choices: {
      A: "listed in the Flight Manual as a fixed value. It is a structural limit",
      B: "governed by the requirements of the centre of gravity limits and the structural limits of the aeroplane",
      C: "tabulated in the Flight Manual against arguments of airfield elevation and temperature",
      D: "governed by the traffic load to be carried. It also provides protection from excessive wingbending",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "In relation to an aeroplane, the term BASIC EMPTY MASS includes the mass of the aeroplane structure complete with its power plants, systems, furnishings and other items of equipment considered to be an integral part of the particular aeroplane configuration. Its value is",
    choices: {
      A: "inclusive of an allowance for crew, crew baggage and other operating items. It is entered inthe loading manifest",
      B: "found in the latest version of the weighing schedule as corrected to allow for modifications",
      C: "found in the flight manual and is inclusive of unusable fuel plus fluids contained in closed systems",
      D: "printed in the loading manual and includes unusable fuel",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question: "The aircraft basic mass and G position is found in",
    choices: {
      A: "The weighing schedule in the Aircraft Flight Manual and the aeroplane must be re-weighed ifequipment change causes a change in mass or balance MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      B: "The loading manifest and is DOM traffic load",
      C: "In the loading manifest and is ZFM useful load",
      D: "The weighing schedule in the Aircraft Flight Manual and is adjusted to take account of any mass changes",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "The empty mass of an aeroplane is recorded in",
    choices: {
      A: "the loading manifest. It differs from Dry Operating Mass by the value of the useful load",
      B: "the loading manifest. It differs from the zero fuel mass by the value of the traffic load",
      C: "the weighing schedule and is amended to take account of changes due to modifications of theaeroplane",
      D: "the weighing schedule. If changes occur, due to modifications, the aeroplane must be re-weighedalways",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to figure 031_9-7)For the transport helicopter TETH1, from the Pilot's Flight Manual, determine the maximum total mass of fuel which can be loaded into the Standard tank version",
    choices: {
      A: "1869 kg",
      B: "2367 kg",
      C: "2996 kg",
      D: "8240 kg",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9-7)For the transport helicopter TETH1, from the Pilot's Flight Manual, determine the maximum total volume of fuel which can be loaded into the Standard tank version",
    choices: {
      A: "8240 1",
      B: "2121 1",
      C: "2367 1",
      D: "1868 1",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The Basic Empty Mass of a helicopter is recorded in",
    choices: {
      A: "the weighing schedule and is amended to take account of changes due to modifications of the MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      B: "the weighing schedule, if changes occur, due to modifications, the helicopter must be re-weighedalways",
      C: "the loading manifest.",
      D: "the loading manifest.",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The forward centre-of-gravity limit of a helicopter is located at 2.54m. The maximum allowable mass has been reached. The loading computation has shown a forward centre-of-gravity position at 2.53m. (The datum is located forward of the helicopter). What must be done before the flight?",
    choices: {
      A: "Shift something of load items to a more rear position and compute again",
      B: "Load something aft of the centre-of-gravity so that the helicopter regains the allowable centre-of-gravity range",
      C: "Take off",
      D: "Unload something aft of the centre of gravity and compute again",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The term Basic Empty Mass includes the mass of the helicopter structure complete with its power plants, systems, furnishings and other items of equipment considered to be an integral part of the particular helicopter configuration. Its value is",
    choices: {
      A: "found in the latest version of the weighing schedule as corrected to allow for modifications",
      B: "inclusive of an allowance for crew, crew baggage and other operating items, it is entered in theloading manifest",
      C: "found in the flight manual and is inclusive of usable fuel plus fluids contained in closedsystems",
      D: "printed in the loading manual and includes usable fuel",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "What is the CG as a percentage MAC of the fully loaded aircraft below? BEM 12000 kg Arm 3 m CG 25% MAC MAC 2 m",
    choices: {
      A: "16%",
      B: "19%",
      C: "21%",
      D: "24%",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The loaded centre of gravity (cg) of an aeroplane is 713 mm aft of datum. The mean aerodynamic chord lies between station 524 mm aft and 1706 mm aft. The cg expressed as % MAC (mean aerodynamic chord) is",
    choices: {
      A: "16%",
      B: "41%",
      C: "60%",
      D: "10%",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Calculate the centre of gravity in % MAC (mean aerodynamic chord) with following data: Distance datum - centre of gravity: 12.53m Distance datum - leading edge: 9.63m Length of MAC: 8m",
    choices: {
      A: "23.1% MAC",
      B: "63.4% MAC",
      C: "47.0% MAC BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT - Distance datum - centre of gravity: 12.53m Distance datum - leading edge: 9.63m Length of MAC: 8m",
      D: "36.3% MAC",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "(Refer if the",
    choices: {
      A: "17.03%",
      B: "18.14%",
      C: "16.25%",
      D: "20.36%",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The mass and balance information gives: Basic mass: 1200 kg Basic balance arm: 3.00 m The mass and balance information gives: Basic mass: 1200 kg Basic balance arm: 3.00 m Under these conditions the Basic centre of gravity is at 25% of the mean aerodynamic chord (MAC). The length of MAC is 2m. In the mass and balance section of the flight manual the following information is given: Position Arm front seats: 2.5m Position Arm rear seats: 3.5m Position Arm rear hold: 4.5m Position Arm fuel tanks: 3.0m The pilot and one passenger embark; each weighs 80 kg. Fuel tanks contain 140 litres of petrol with a density of 0.714. The rear seats are not occupied. Taxi fuel is negligible. The position of the centre of gravity at take-off (as % MAC) is",
    choices: {
      A: "29%",
      B: "22%",
      C: "34%",
      D: "17% MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane has a mean aerodynamic chord (MAC) of 134.5 inches. The leading edge of this chord is at a distance of 625.6 inches aft of the datum. Given the location of the centre of gravity of the aeroplane in terms of percentage MAC if the mass of the aeroplane is acting vertically through a balance arm located 650 inches aft of the datum. Answers",
    choices: {
      A: "85.5%",
      B: "75.6%",
      C: "18.14%",
      D: "10.5%",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The determination of the centre of gravity in relation to the mean aerodynamic chord",
    choices: {
      A: "consists of defining the centre of gravity longitudinally in relation to the length of the meanaerodynamic chord and the trailing edge",
      B: "consists of defining the centre of gravity longitudinally in relation to the length of the mean aerodynamic chord and the leading edge",
      C: "consists of defining the centre of gravity longitudinally in relation to the position of theaerodynamic convergence point",
      D: "consists of defining the centre of gravity longitudinally in relation to the position of theaerodynamic centre of pressure MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Determine the position of the CG as a percentage of the MAC given that the balance arm of the CTG is 724 inches and the MAC extends from a balance arm of 517 inch to 1706 inch.",
    choices: {
      A: "14.2%",
      B: "15.3%",
      C: "16.3%",
      D: "17.4%",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 7-1)The loading for a flight is shown in the attached load sheet, with the following data applying to the aeroplane:Maximum take-off mass:150,000 kgMaximum landing mass:140,000 kgCentre of gravity (CG):Limit forward:10.5m aft of datumAft:13.0m aft of datumEstimated trip fuel: 55,000 kg",
    choices: {
      A: "Take-off CG is out of limits at 12.34m aft of datum",
      B: "Landing CG is out of limits at 11.97m aft of datum",
      C: "Landing CG is out of limits at 10.17m aft of datum",
      D: "Take-off CG is out of limits at 10.17m aft of datum",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to Figure 8-13)Without the crew, the mass and longitudinal CG position of the aircraft are 6000 kg and 4.70m.The mass of the pilot is90 kgThe mass of the co-pilot is 100 kgThe mass of the flight engineer is80 kgWith the crew the mass and longitudinal CG position of the aircraft are",
    choices: {
      A: "6270 kg and 4.796m",
      B: "6270 kg and 5.012m",
      C: "6270 kg and 4.61m",
      D: "6270 kg and 4.594m",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A turbojet aeroplane is parked with the following data: Corrected Dry Operating Mass: 110100 kg Basic corrected index: 118.6 Take-off mass: 200000 kg Centre of gravity location: 32% MAC (Mean Aerodynamic Chord) A turbojet aeroplane is parked with the following data: Corrected Dry Operating Mass: 110100 kg Basic corrected index: 118.6 Take-off mass: 200000 kg Centre of gravity location: 32% MAC (Mean Aerodynamic Chord) Distance from reference point to leading edge: 14m Length of MAC = 4.6m Initial cargo distribution: Cargo 1 = 4000 kg (2.73m from reference point) Cargo 2 = 2000 kg (8.55m from reference point) Cargo 3 = 2000 kg (16.49m from reference point) Cargo 4 = empty (21.13m from reference point) For performance reasons, the captain decides to re-distribute part of the cargo loading between cargo compartments, in order to take off with a new CG location of 34%. He asks for a transfer of",
    choices: {
      A: "1000 kg from cargo 1 to cargo 4",
      B: "500 kg from cargo 1 to cargo 3",
      C: "1000 kg from cargo 3 to cargo 1",
      D: "1500 kg from cargo 3 to cargo 1",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to Figure 8-13) Without the crew, the weight and the CG position of the aircraft are 7000 kg and 4.70m With this crew on board, the CG position of the aircraft will be: 1. the mass of the pilot is 90 kg 2. the mass of the co-pilot is 75 kg 3. the mass of the flight engineer is 90 kg",
    choices: {
      C: "4,455 m",
      D: "4,615 m 0,217 m 4,783 m MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The loaded centre of gravity of an aircraft is 23.65 feet aft of Datum. If the length of the MAC is 8 feet, and the distance of the leading edge of the MAC is 20 feet aft of the Datum, the position of the centre of gravity as a % MAC is",
    choices: {
      A: "8%",
      B: "23.65%",
      C: "20%",
      D: "45.62%",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft has a Standard Mean Chord length of 82 inches, and the leading edge of the chord is 103 inches aft of the Datum. If the centre of gravity position is 14.7% SMC, what is the centre of gravity distance from the datum?",
    choices: {
      A: "15.66¿",
      B: "118.14¿",
      C: "65.6¿",
      D: "115.05¿",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given the following information, calculate the loaded centre of gravity (cg): STATION MASS (kg) / ARM (cm) / MOMENT (kgcm) Basic Empty Condition 12045 30 +361350 Crew 145 -160 -23200 Freight 1 5455 +200 +1091000 STATION MASS (kg) / ARM (cm) / MOMENT (kgcm) Basic Empty Condition 12045 30 +361350 Crew 145 -160 -23200 Freight 1 5455 +200 +1091000 Freight 2 410 -40 -16400 Fuel 6045 -8 -48360 Oil 124 +40 +4960",
    choices: {
      A: "56.35 cm aft datum",
      B: "56.53 cm aft datum",
      C: "60.16 cm aft datum",
      D: "53.35 cm aft datum",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given are the following information at take-off STATION MASS (kg) / ARM (cm) / MOMENT (kgcm) Basic Empty Condition 12045 +30 Crew 145 Freight 1 5455 Freight 2 410 Fuel 6045 Oil 124 STATION MASS (kg) / ARM (cm) / MOMENT (kgcm)",
    choices: {
      A: "61.26 cm aft of datum",
      B: "61.28 cm aft of datum",
      C: "61.27 cm aft of datum",
      D: "61.29 cm aft of datum",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "(For this Question use CAP 696 - Figure 3.4) With respect to a multi-engine piston powered aeroplane, determine the CG location at take off in the following conditions: With respect to a multi-engine piston powered aeroplane, determine the CG location at take off in the following conditions",
    choices: {
      A: "91.92 inches aft of datum",
      B: "91.69 inches aft of datum",
      C: "93.60 inches aft of datum",
      D: "91.84 inches aft of datum",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "Calculate the position of the centre of gravity for take-off andlanding from the following information: Calculate the position of the centre of gravity for take-off andlanding from the following information: Maximum Take-off Mass: 3400 kg Maximum Landing Mass: 3000 kg Burn off: 300 kg fuel 5 kg oil Centre of gravity range: 2.5 to 3.5 m aft Station / Mass (kg) / Arm (m) / Moment Basic mass 2000 2.25 aft + 4500 Fuel 500 3.5 aft + 1750 Oil 20 9 fwd - 180 Crew 150 3.75 fwd 562.5 Passengers 340 4 aft + 1360 Baggage 260 10 aft + 2600",
    choices: {
      A: "take-off 2.6m aft; landing 2.55m aft",
      B: "take-off 2.85m aft; landing 2.9m aft",
      C: "take-off 2.9m aft; landing 2.85m aft",
      D: "take-off 3.1m aft; landing 3.05m aft",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to Figure 8-14)Without the man on the winch, the mass and the lateral G position of the helicopter are 6000 kg and 0.055 m to the right. The mass of the wet man on the winch is 180 kg. With the man on the winch, the mass and lateral CG-position of the helicopter are",
    choices: {
      A: "beyond the limit",
      B: "6,180 kg and 0.059 m to the right",
      C: "6,180 kg and 0.075 m to the right",
      D: "6,180 kg and 0.041 m to the right",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9-3)Without the man on the winch, the mass and the lateral CG position of the aircraft are 6000 kg and 0.04 m to the right.The mass of the man on the winch is 100 kg.With the man on the winch, the lateral CG position of the aircraft will be",
    choices: {
      A: "0.062m to the right",
      B: "0.016m to the left",
      C: "beyond the limits",
      D: "0.0633m to the right",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "At a mass of 1800 kg, a helicopter equipped with a winch has a lateral CG-position of 5 cm to the left. The G of the load suspended from the winch is at a distance of 60 cm to the right. With a winch load of 200 kg the lateral CG position of the helicopter will be",
    choices: {
      A: "10.5 cm to the right",
      B: "10.5 cm to the left",
      C: "1.5 cm to the right",
      D: "1.5 cm to the left",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9-1) A helicopter basic mass is 1100 kg and the longitudinal G position is at 3.10m. Determine the longitudinal Cg position in the following conditions: 1. pilot and front passenger: 150 g 2. rear passengers: 150 g 3. fuel: 500 g",
    choices: {
      A: "2.97m",
      B: "2.82m",
      C: "2.91m",
      D: "2.85m",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(Refer to figure 031_9-11)Calculate the position of the centre of gravity for the following loaded helicopter",
    choices: {
      A: "1.14",
      B: "1.80",
      C: "2.42",
      D: "4.24",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "(For this Question use Figure 4.12)Using the load and trim sheet, which of the following is the correct value for the index at a Dry Operating Mass (DOM) of 35000 kg with a CG at 14% MAC?",
    choices: {
      A: "35.5",
      B: "40.0",
      C: "41.5",
      D: "33.0 MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure L235)Using the load and trim sheet attached, calculate the CG at zero fuel mass.",
    choices: {
      A: "16.8% MAC",
      B: "18.4% MAC",
      C: "13.4% MAC",
      D: "19.7% MAC",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 031_L400)Using the data given in the Load & Trim sheet, determine which of the following gives the correct values for the Zero Fuel Mass and position of the centre of gravity (% MAC) at that mass.",
    choices: {
      A: "51300 kg and 2.48%",
      B: "46130 kg and 24.8%",
      C: "46130 kg and 17.8%",
      D: "41310 kg and 17.8%",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 031_L500 and 031_L502)Contrary to the forecast given in the LOAD and TRIM sheet, cargo compartment 1 is empty. The take-off centre of gravity in MAC % (Mean Aerodynamic Chord) will be located at",
    choices: {
      A: "a",
      B: "b",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 031_L500 and 031_L502)Just prior to departure, you accept 10 passengers additional on board who will be seated in compartment OC and you have 750 kg unloaded from cargo compartment 5.The take- off centre of gravity in MAC % (Mean Aerodynamic Chord) will be located at",
    choices: {
      A: "27.8%",
      B: "30.5%",
      C: "28.5%",
      D: "23.1%",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure L_303)The weight and balance sheet is available and contrary to the forecast, cargo compartment 1 is emptyThe zero fuel weight centre of gravity in MAC % (Mean Aerodynamic Chord) is located at",
    choices: {
      A: "26.8%",
      B: "23.5%",
      C: "33.9%",
      D: "31%",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 031_L400)Using the data given in the Load & Trim sheet, determine from the following the correct values for the take off mass and the position of the centre of gravity at that mass if the fuel index correction to be applied is given as 0.9.",
    choices: {
      A: "20.1%",
      B: "20.3%",
      C: "22.6%",
      D: "17.5%",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 031_L404)Using the data given at the appendix to this question, if the fuel index corrections (from ZFM index) are as follows:9500 kg 0.96500 kg 6.13500 kg 4.73000 kg 4.3Which of the following represent the correct values for landing mass of the aeroplane and the position of the centre of gravity for this condition? Answers",
    choices: {
      A: "52900 kg and 19%",
      B: "32900 kg and 21.6%",
      C: "49130 kg and 21.8%",
      D: "49130 kg and 19%",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 031_L403)Using the data given at the appendix, determine which of the following correctly gives the values of the Zero Fuel Mass (ZFM) of the aeroplane and the load index at ZFM",
    choices: {
      A: "35100 kg and 20.5",
      B: "48600 kg and 57.0",
      C: "51300 kg and 57.0",
      D: "46300 kg and 20.5",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 031_L403)From the data given at the appendix and assuming a fuel index shift of 5.7 from the ZFM loaded index, determine which of the following is the correct value (percentage MAC) for the position of the centre of gravity at Take Off Mass",
    choices: {
      A: "18%",
      B: "19%",
      C: "15%",
      D: "14%",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 031_L402)For the purpose of calculating traffic loads, an operators loading manual gives the following standard mass values for passengers 9these values include an allowance for hand baggage)Male:88 kgFemale:70 kgChild:35 kgInfant: 6 kgThe standard mass value to be used for hold baggage is 14 kg per piece.The loading manifest shows the following details¿Passengers loaded:Males:40Females:65Children: 8Infants: 5Baggage in hold number 4: 120 piecesUsing the standard mass values given and the data in the appendix, select from the following the correct value for the mass of freight (all loaded in hold No. 1) which constitutes the remainder of the traffic load",
    choices: {
      A: "210 kg",
      B: "280 kg",
      C: "no cargo can be loaded in hold number 1 MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      D: "260 kg",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 4-13 and 4-14)For an aircraft with a DOI of 50, a DOM of 34100 kg and a bulk fuel load of 11900 kg, choose the correct statement for its mass and CG as a % MAC.",
    choices: {
      A: "46000 kg at 14.75% MAC",
      B: "46000 kg at 15.3% MAC",
      C: "46000 kg at 16.5% MAC",
      D: "46000 kg at 17.75% MAC",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 4-14)From the Load & Trim sheet attached for an aircraft with a BEM of 34100 kg and CG at 15% MAC, select the correct statement after 2000 kg of cargo is loaded into the rear hold.",
    choices: {
      A: "The aircraft gross mass is 34100 kg and the CG is behind the rear limitB - The aircraft grossmass is 36100 kg and the CG is behind the rear limit",
      B: "The aircraft gross mass is 36100 kg and the CG is before the front limit",
      C: "The aircraft gross mass is 36100 kg and the CG is within limits",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 031_L500, 031_L503 and 031_L504) Knowing that: Dry operating mass: 110000 kg Basic index: 119.1 Number of passengers: 185 Distributed as shown in the annex (75 g per Pax) Cargo load + luggage: 14000 kg Distributed as shown in the annex Fuel: 42000 kg Stages (1) to (7) and (11) having already been calculated, the centre of gravity in % MAC (Mean Aerodynamic Chord) for zero fuel mass is located at",
    choices: {
      A: "29.3%",
      B: "28.3% MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      C: "30.5%",
      D: "32.3%",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 031_L500, 031_L503 and 031_L505) Knowing that: Dry operating mass: 110000 kg Basic index 119.1 Number of passengers: 335 Distributed as shown in the annex (75 kg per Pax) Cargo load + luggage: 9500 kg distributed as shown in the annex Fuel: 40000 kg Stages (1) to (7) and (11) having already been calculated, the centre of gravity in % MAC (Mean Aerodynamic Chord) for zero fuel mass is located at",
    choices: {
      A: "30.5%",
      B: "27.4%",
      C: "29.3%",
      D: "28.0%",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 031_L500, 031_L503 and 031_L505) Knowing that: Dry operating mass: 110000 kg Basic index: 119.1 Number of passengers: 335 Distributed as shown in the annex (75 kg per Pax) Cargo load + luggage: 9500 kg Distributed as shown in the annex (Refer to figures 031_L500, 031_L503 and 031_L505) Knowing that: Dry operating mass: 110000 kg Basic index: 119.1 Number of passengers: 335 Distributed as shown in the annex (75 kg per Pax) Cargo load + luggage: 9500 kg Distributed as shown in the annex Fuel: 40000 kg States (1) to (7) and (11) having already been calculated, the centre of gravity in % MAC (Mean Aerodynamic Chord) at take-off is located at",
    choices: {
      A: "30.5%",
      B: "28.0%",
      C: "29.3%",
      D: "27.4%",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 031_L500, 031_L503 and 031_L504)Knowing that:Dry operating mass:110000 kgBasic index: 119.1Number of passengers: 185Distributed as shown in the annex (75 kg per Pax)Cargo load + luggage: 14000 kgDistributed as shown in the annexFuel: 42000 kgStages (1) to (7) and (11) having already been calculated, the centre of gravity in % MAC (Mean Aerodynamic Chord) at take-off is located at: Answers",
    choices: {
      A: "30.5%",
      B: "32.5%",
      C: "28.0%",
      D: "31.5%",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 031_L200)Attached diagram shows part of a load and trim sheet for the specimen aircraft completed to show the Take-Off Mass and centre of gravity position with a fuel load of 16,080 kg. During the flight 12,800 kg of fuel is consumed. The centre of gravity position on landing will be",
    choices: {
      A: "23.8% MAC",
      B: "24.6% MAC",
      C: "22.1% MAC",
      D: "23.2% MAC",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 031_4-14)What would be the DOM index for a DOM of 45,000 kg and a CG at 15% MAC?",
    choices: {
      A: "41",
      B: "44",
      C: "38",
      D: "45",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 031_9-1)The empty mass of your helicopter is 1100 kg with a CG-position at 3.05m. The load is as follows:- Total mass of pilot and co-pilot:150 kg- Total mass of passengers at rear:200 kgIn order not to exceed the limitations the minimum remaining fuel on board should be",
    choices: {
      A: "450 kg",
      B: "350 kg",
      C: "250 kg",
      D: "125 kg",
    },
    correct: "D",
    ref: "ATPL H",
  },
  {
    question:
      "The maximum load specified in the loading chart is exceeded by 10 percent. What action must be taken?",
    choices: {
      A: "None, since a 10 percent greater load is still within the specified safety margin",
      B: "Increase rotor speed by 10 percent",
      C: "Reduce useful load",
      D: "Take off carefully",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to figures 031_L500 and 031_L502)The planned take-off mass of an aeroplane is 190000 kg, with its centre of gravity located at 29% MAC (Mean Aerodynamic Chord).Shortly prior to engine start, the local staff informs the flight crew that an additional load of 4000 kg must be loaded in cargo 4. After loading this cargo, the new centre of gravity location will be: Answers",
    choices: {
      A: "255",
      B: "27%",
      C: "31%",
      D: "33%",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to CAP 696 figures 3-1 and 3-2) (Refer to CAP 696 figures 3-1 and 3-2) C of G limits from datum = 82.0 - 94.6 inches Arm from datum to baggage zone 1 = 22.5 inches Arm from datum to baggage zone 4 = 178.7 inches Loaded C of G = 96.6 inches Total weight of loaded aircraft = 3400 lb Freight equally distributed between baggage zones 1 and 4 The weight of freight to be moved between baggage zones to bring the aircraft into balance is",
    choices: {
      A: "44 lbs from zone 4 to zone 1",
      B: "83 lbs from zone 1 to zone 4",
      C: "44 lbs from zone 1 to zone 4",
      D: "83 lbs from zone 4 to zone 1",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 031_L500 and 031_L502) A turbojet aeroplane is parked with the following data: Corrected dry operating mass: 110,100 kg Basic corrected index: 118.6 Initial cargo distribution: Cargo 1: 4000 kg Cargo 2: 2000 kg Cargo 3: 2000 kg Other cargo compartments are empty Take-off mass: 200,000 kg Centre of gravity (CG) location: 32% For performance reasons, the captain decides to re-distribute part of the cargo loading between cargo compartments, in order to take off with a new CG, location of 34%. He asks for a transfer of",
    choices: {
      A: "1000 kg from cargo 1 to cargo 4",
      B: "500 kg from cargo 1 to cargo 3",
      C: "1000 kg from cargo 3 to cargo 1",
      D: "500 kg from cargo 3 to cargo 1 MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to Figures 8-14)The weight and balance sheet is available and contrary to the forecast, cargo compartment 1 is empty.The zero fuel weight centre of gravity in MAC% (Mean Aerodynamic Chord) is located at",
    choices: {
      A: "31.5%",
      B: "26%",
      C: "35.5%",
      D: "32%",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 031_L500 and 031_L502)The planned take-off mass of an aeroplane is 190000 kg, with its centre of gravity located at 29% MAC (Mean Aerodynamic Chord). Shortly prior to engine start, the local staff informs the flight crew that an additional load of 4000 kg must be loaded in cargo 4. After loading this cargo, the new centre of gravity location will be: Answers",
    choices: {
      A: "25%",
      B: "27%",
      C: "31%",
      D: "33%",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 031_L500 and 031_L501) A turbojet aeroplane has a planned take-off mass of 190000 kg. The cargo load is distributed as follows: Cargo 1: 3000 kg Cargo 4: 7000 kg Once the cargo loading is completed, the crew is informed that the centre of gravity at takeoff is located at 38% MAC (Mean Aerodynamic Chord) which is beyond the limits. The captain decides then to re-distribute part of the cargo load between cargo 1 and cargo 4 in order to obtain a new centre of gravity location at 31% MAC. Following the transfer operation, the new load distribution is",
    choices: {
      A: "cargo 1: 5000 kg: cargo 4: 4000 kg",
      B: "cargo 1: 4000 kg: cargo 4: 5000 kg",
      C: "cargo 1: 6000 kg: cargo 4: 4000 kg",
      D: "cargo 1: 4000 kg: cargo 4: 6000 kg",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 031_L500 and 031_L502)The planned take-off mass of a turbojet aeroplane is 180,000 kg with its centre of gravity located at 26% MAC (Mean Aerodynamic Chord). Shortly prior to engine start, the local staff informs the flight crew that 4000 kg must be unloaded from cargo 4. After the handling operation, the new centre of gravity location in % MAC will be: Answers",
    choices: {
      A: "23.0%",
      B: "21.8%",
      C: "20.0%",
      D: "30.2%",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 031_L500 and 031_L502)The planned take-off mass of a turbojet aeroplane is 190,000 kg, with its centre of gravity located at 29% MAC (Mean Aerodynamic Chord). Shortly prior to engine start, the local staff informs the flight crew that 4000 kg must be unloaded from cargo 4. After the handling operation, the new centre of gravity location in % MAC will be: Answers",
    choices: {
      A: "31%",
      B: "25%",
      C: "33%",
      D: "27%",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figures 031_L500 and 031_L502) A turbojet aeroplane is parked with the following data: Corrected Dry Operating Mass: 110,100 kg Basic corrected index: 118.6 Take-off mass: 200,000 kg Centre of gravity location: 32% MAC",
    choices: {
      A: "3000 kg in cargo 1: 1000 kg in cargo 4",
      B: "1000 kg in cargo 1: 3000 kg in cargo 4",
      C: "2500 kg in cargo 1; 500 kg in cargo 4",
      D: "2000 kg in cargo 1; 2000 kg in cargo 4",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "An additional baggage container is loaded into the aft cargo compartment but is not entered into the load and trim sheet. The aeroplane will be heavier than expected and calculated take-off safety speeds",
    choices: {
      A: "are unaffected but V1 will be increased",
      B: "will not be achieved",
      C: "will be greater than required",
      D: "will give reduced safety margins",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Length of the mean aerodynamic chord: 1m Moment arm of the forward cargo: -0,50m Moment arm of the aft cargo: +2,50m The aircraft mass is 2200 kg and its centre of gravity is at 25% MAC Length of the mean aerodynamic chord: 1m Moment arm of the forward cargo: -0,50m Moment arm of the aft cargo: +2,50m The aircraft mass is 2200 kg and its centre of gravity is at 25% MAC To move the centre of gravity to 40%, which mass has to be transferred from the forward to the aft cargo hold?",
    choices: {
      A: "110 kg",
      B: "180 kg",
      C: "165 kg",
      D: "104 kg",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_8-3)A jet aeroplane, with the geometrical characteristics shown in the appendix, has a take-off weight (W) of 460000 N and a centre of gravity (point G on annex) located at 15.40m from the zero reference point.At the last moment the station manager has 12000 N of freight added in the forward compartment at 10m from the zero reference point. The final location of the centre of gravity, calculated in percentage of mean aerodynamic chord AB (from point A), is equal to",
    choices: {
      A: "30.5%",
      B: "35.5%",
      C: "27.5%",
      D: "16.9%",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_8-4)An aeroplane, whose specific data is shown in the annex, has a planned take-off mass of 200000 kg, with its centre of gravity (CG) is located at 15.38m rearward of the reference point, representing a CG location at 30% MAC (Mean Aerodynamic Chord). For performance purposes, the captain decides to reset the value of the centre of gravity location to 35% MAC. The front and rear cargo compartments are located at a distance of 15m and 25m from the reference point respectively, the cargo load mass which needs to be transferred from the front to the rear cargo compartment is",
    choices: {
      A: "5600 kg",
      B: "3600 kg",
      C: "It is not possible to establish the required centre of gravity location",
      D: "4600 kg",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_8-4) An aeroplane has a planned take-off mass of 200000 kg, with its centre of gravity (CG) located at 15.38m rearward of the reference point, representing a CG location at 30% MAC (Mean (Refer to figure 031_8-4) An aeroplane has a planned take-off mass of 200000 kg, with its centre of gravity (CG) located at 15.38m rearward of the reference point, representing a CG location at 30% MAC (Mean Aerodynamic Chord). The current cargo load distribution is: FRONT cargo: 6500 kg REAR cargo: 4000 kg For performance purposes, the captain decides to reset the value of the centre of gravity location to 33% MAC. The front and rear cargo compartments are located at a distance of 15m and 25m from the reference point respectively. After the transfer operation, the new cargo load distribution is",
    choices: {
      A: "front cargo: 9260 kg: rear cargo: 1240 kg",
      B: "front cargo: 3740 kg: rear cargo: 6760 kg",
      C: "front cargo: 6760 kg: rear cargo: 3750 kg",
      D: "front cargo: 4540 kg: rear cargo: 5950 kg",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The planned take-off mass of a turbojet aeroplane is 190000 kg, with its centre of gravity located at 29% MAC (Mean Aerodynamic Chord). Shortly prior to engine start, the local staff informs the flight crew that 4000 kg must be unloaded from cargo 4 (23.89 m aft of the reference point). Given: Distance from reference point to leading edge: 14m Length ofo MAC = 4.6m After the handling operation, the new centre of gravity location in % MAC will be",
    choices: {
      A: "31%",
      B: "25%",
      C: "33%",
      D: "27%",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      ". The planned take-off mass of a turbojet aeroplane is 180000 kg with its centre of gravity located at 26% MAC (Mean Aerodynamic Chord). Shortly prior to engine start, the local staff informs the flight crew that 4000 kg must be unloaded from cargo 4 (23.69 m aft of reference point). Given: Distance from reference point to leading edge: 14m . The planned take-off mass of a turbojet aeroplane is 180000 kg with its centre of gravity located at 26% MAC (Mean Aerodynamic Chord). Shortly prior to engine start, the local staff informs the flight crew that 4000 kg must be unloaded from cargo 4 (23.69 m aft of reference point). Given: Distance from reference point to leading edge: 14m Length of MAC = 4.6m After the handling operation, the new centre of gravity location in % MAC will be",
    choices: {
      A: "23.0%",
      B: "21.8%",
      C: "20.0%",
      D: "30.2%",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A turbojet aeroplane has a planned take-off mass of 190000 kg. Following cargo l loading, the crew is informed that the centre of gravity at take-off is located at 38% MAC (Mean Aerodynamic Chord) which is beyond limits. The captain decides then to re-distribute part of the cargo load between cargo 1 (3.5m from reference point) and cargo 4 (20.39m from reference pont) in order to obtain a new centre of gravity location at 31% MAC. Given: Distance from reference point to leading edge: 14m Length of MAC = 4.6m He asks for a transfer of",
    choices: {
      A: "a",
      B: "b",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 031_8-4)An aeroplane, whose specific data is shown in the annex, has a planned take-off mass of 200,000 kg, with its centre of gravity (CG) located at 15.38m rearward of the reference point, representing a CG, location at 30% MAC (Mean Aerodynamic Chord). The current cargo load distribution is:Front cargo:6500 kgRear cargo:4000 kgFor performance purposes, the captain decides to reset the value of the centre of gravity location to 33% MAC. The front and rear cargo compartments are located at a distance of 15m and 25m from the reference point respectively. After the transfer operation, the new cargo load distribution is",
    choices: {
      A: "front cargo: 9260 kg: rear cargo: 1240 kg MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      B: "front cargo: 3740 kg: rear cargo: 6760 kg",
      C: "front cargo: 6760 kg: rear cargo: 3740 kg",
      D: "front cargo: 4550 kg: rear cargo: 5950 kg",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The CG of an aircraft is at 25% MAC and MAC is 1m. The aircraft has 2 holds, hold 1 is 7m aft of the datum and hold 2 is 22m aft of the datum. If the aircraft mass is 38000 kg, what load must be transferred from hold 1 to hold 2 to move the CG to 40% MAC?",
    choices: {
      A: "1520 kg",
      B: "259 kg",
      C: "480 kg",
      D: "380 kg",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figures 031_4-4 and 031_4-9)The Taxi mass of the aircraft is 62,500 kg and the centre of gravity is calculated at 20% MAC. A load weighing 1000 kg is moved from the forward section of the aft cargo compartment to the aft section of the forward cargo compartment. The new centre of gravity position is",
    choices: {
      C: "10% MAC",
      D: "12% MAC 15% MAC 25% MAC",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given: Total mass: 7500 kg Centre of gravity (cg) location station 80.5 Aft cg limit station: 79.5 How much cargo must be shifted from the aft cargo compartment at station 150 to the forward cargo compartment at station 30 in order to move the cg location to the aft limit?",
    choices: {
      A: "65.8 kg MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      B: "62.5 kg",
      C: "68.9 kg",
      D: "73.5 kg",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "A mass of 500 kg is loaded at a station which is located 10 metres behind the present Centre of Gravity and 16 metres behind the datum. The moment for that mass used in the loading manifest is (Assume: g=10 m/s^2)",
    choices: {
      A: "30000 nm",
      B: "50000 nm",
      C: "80000 nm",
      D: "13000 nm",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given: Aeroplane mass = 36000 kg Centre of gravity (cg) is located at station 17m What is the effect on cg location if you move 20 passengers (total mass = 1600 kg) from station 16 to station 23?",
    choices: {
      A: "It moves aft by 3.22 m",
      B: "It moves forward by 0.157 m",
      C: "It moves aft by 0.31 m",
      D: "It moves aft by 0.157 m",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "Assume: Aeroplane gross mass: 4750 kg Centre of gravity at station: 115.8 What will be the new position of the centre of gravity if 100 kg is moved from the station 30 to station 120?",
    choices: {
      A: "Station 118.25",
      B: "Station 118.33",
      C: "Station 120.22",
      D: "Station 117.69",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given: Total mass: 2900 kg Centre of gravity (cg) location station 115.0 Aft cg limit station: 116.0 The maximum mass that can be added at station 130.0 is",
    choices: {
      A: "140 kg",
      B: "317 kg",
      C: "207 kg",
      D: "14 kg",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The mass of an aeroplane is 1950 kg. If 450 kg is added to a cargo hold 1.75 metres from the loaded centre of gravity (cg). The loaded cg will move",
    choices: {
      A: "40 cm",
      B: "33 cm",
      C: "30 cm",
      D: "34 cm",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The total mass of an aeroplane is 9000 kg. The centre of gravity (cg) position is at 2.0m from the datum line. The aft limit for cg is at 2.1m from the datum line.What mass of cargo must be shifted from the front cargo hold (at 0.8m from the datum) to the aft hold (at 3.8m), to move the cg to the aft limit?",
    choices: {
      A: "30.0 kg MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      B: "900 kg",
      C: "300 kg",
      D: "196 kg",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given that the total mass of an aeroplane is 112000 kg with a centre of gravity position at 22.62m aft of the datum. The centre of gravity limits are between 18m and 22m. How much mass must be removed from the rear hold (30m aft of the datum) to move the centre of gravity to the middle of the limits",
    choices: {
      A: "43120 kt",
      B: "16529 kg",
      C: "8680 kg",
      D: "29344 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "If 390 lbs of cargo are moved from compartment B (aft) to compartment A (forward), what is the station number of the new centre of gravity (CG)? Given: Gross mass: 116500 lbs Present CG station: 435.0 Compartment A station: 285.5 Compartment B station: 792.5",
    choices: {
      A: "463.7",
      B: "506.3",
      C: "436.7",
      D: "433.3",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to figure 031_8-1)The total mass of an aeroplane is 145000 kg and the centre of gravity limits are between 4.7m and 6.9m aft of the datum. The loaded centre of gravity position is 4.4m aft. How much mass must be transferred from the front to the rear hold in order to bring the out of limit centre of gravity position to the foremost limit? Answers",
    choices: {
      A: "3500 kg",
      B: "35000 kg",
      C: "62500 kg MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      D: "7500 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The CG of an aircraft is 980 inches aft of datum at an all up mass of 170500 lbs. If 800 lbs of baggage is moved from FS 1130 to FS 430 the new C of G will be",
    choices: {
      A: "975.99 in",
      B: "",
      C: "979.75 in",
      D: "977.62 in",
    },
    correct: "",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aircraft's mass is 22,000 kg and the centre of gravity is 1.5m aft of datum. What would be the new centre of gravity if 1500 kg were transferred from the rear hold 15m aft of datum to the forward hold 12m forward of datum?",
    choices: {
      A: "0.34m fwd of datum",
      B: "0.14m fwd of datum",
      C: "1.84m aft of datum",
      D: "1.84m fwd of datum",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "Given the following information, how much mass (to the nearest lb) has to be transferred from the front hold, the centroid of which is 20 ft forward of the atum, to the rear hold 40 ft aft of the datum to bring the centre of gravity ithin limits? Aircraft mass: 2500 lbs Total moment: 8000 lb. ft Centre of gravity range from 0.5 ft to 2.0 ft fwd of datum",
    choices: {
      A: "50 lbs",
      B: "112 lbs",
      C: "1120 lbs",
      D: "500 lbs",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aircraft has a taxi mass of 30,000 kg and its centre of gravity is 21.69m aft of datum. What would be the new centre of gravity if 1,000 kg were moved 30m forward from hold 2 to hold 1?",
    choices: {
      A: "20.69m",
      B: "22.69m",
      C: "19.78m",
      D: "21.78m",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The loaded mass of an aircraft is 33,000 lbs, and the centre of gravity is 3 feet aft of the Datum. How many lbs of freight can be added to the freight hold 1 foot forward of datum to bring the centre of gravity towards the forward limit of 2 feet aft of Datum for take-off if the maximum take-off mass is 40,000 lbs",
    choices: {
      A: "11,000 lbs",
      B: "33,000 lbs",
      C: "4,000 lbs",
      D: "7,000 lbs",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "If the loaded mass is 28,220 kg how much load should be transferred 9.16m forward from No. 2 hold to the No. 1 hold in order to move the centre of gravity of an aircraft from the out of limits value of 13 metres aft to the forward limits value of 11.6 metres aft?",
    choices: {
      A: "590 kg",
      B: "1790 kg",
      C: "2980 kg",
      D: "4160 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aircraft is loaded to a mass of 25000 lbs. A passenger weighing 150 lb moves back 10 seat rows, a distance of 330 inches. The centre of gravity will move",
    choices: {
      A: '0.5" rearward',
      B: '2.00" rearward',
      C: '5.00" rearward',
      D: '2.00" forward',
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "Assuming that an aircraft CG has to remain within limits, what is the maximum weight which could be added to a cargo hold located at station 125, if the CG is at station 85 and the aft limit is positioned at station 100. The aircraft loaded weight is 5000 lbs.",
    choices: {
      A: "3000 lbs",
      B: "1687.5 lbs",
      C: "1800.7 lbs",
      D: "1945 lbs",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aircraft has a CG located at 200 cm aft of datum and an AUM of 50,000 kg. If 90 kg of electrical equipment installed at a position 600 cm aft of datum and 90 kg of electrical equipment installed 600 cm forward to datum, what will be the new G location?",
    choices: {
      A: "220 cm aft of datum",
      B: "remain at 200 cm aft of datum",
      C: "199 cm aft of datum",
      D: "move to the datum",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "An aeroplane has 2 cargo holds, cargo hold 1 is located 5m forward of the datum, hold 2 is located 7m aft of the datum. The take-off mass of the aircraft is 60000 kg and the CG is located at 2m aft of datum. Just prior to take off, cargo weighing 1250 kg is removed from cargo hold 1, what will be the new G for take-off?",
    choices: {
      A: "1.92m aft of the datum",
      B: "2.17m aft of the datum",
      C: "2.08m aft of the datum",
      D: "1.84m aft of the datum",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum load per running metre of an aeroplane is 350 kg/m. The width of the floor area is 2 metres. The floor strength limitation is 300 kg per square metre. Which one of the following crates (length x width The maximum load per running metre of an aeroplane is 350 kg/m. The width of the floor area is 2 metres. The floor strength limitation is 300 kg per square metre. Which one of the following crates (length x width x height) can be loaded directly on the floor?",
    choices: {
      A: "A load of 700 kg in a crate with dimensions:1.8m x 1.4m x 0.8m",
      B: "A load of 500 kg in a crate with dimensions:1.5m x 1m x 1m",
      C: "A load of 400 kg in a crate with dimensions:1.4m x 0.8m x 0.8m",
      D: "A load of 400 kg in a crate with dimensions:1.2m x 1.2m 1.2m",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum intensity floor loading for an aeroplane is given in the Flight Manual as 650 kg per square metre. What is the maximum mass of a package which can be safely supported on a pallet with dimensions of 80 cm by 80 cm?",
    choices: {
      A: "4160.0 kg",
      B: "1015.6 kg",
      C: "41.6 kg",
      D: "101.6 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The floor of the main cargo hold is limited to 4000 N/m2. It is planned to load a cubic container each side of which measures 0.5m. Its maximum gross mass must not exceed: (assume g=10m/s2)",
    choices: {
      A: "5000 kg",
      B: "1000 kg",
      C: "500 kg",
      D: "100 kg",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to CAP 696 Figure 4.9)A pallet having a freight platform which measures 200 cm x 250 cm has a total mass of 300 kg. The pallet is carried on two ground supports each measuring 20 cm x 200 cm.Using the loading manual for the transport aeroplane, calculate how much mass may be added to, or must be off loaded from the pallet in order for the load intensity to match the maximum permitted distribution load intensity for lower deck forward cargo compartment.",
    choices: {
      A: "28.5 kg must be off-loaded",
      B: "285.5 kg may be added",
      C: "28.5 kg may be added",
      D: "158.3 kg must be off-loaded",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The floor limit of an aircraft cargo hold is 5000 N/m2. It is planed to load-up a cubic container measuring 0.4m of side. Its maximum gross mass must not exceed: (assume g=10m/s2)",
    choices: {
      A: "80 kg",
      B: "800 kg",
      C: "32 kg",
      D: "320 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum floor loading for a cargo compartment in an aeroplane is given as 750 kg per square metre. A package with a mass of 600 kg is to be located. Assuming the pallet base is entirely in contact with the floor, which of the following is the minimum size pallet that can be used?",
    choices: {
      A: "40 cm by 200 cm",
      B: "30 cm by 300 cm",
      C: "30 cm by 200 cm",
      D: "40 cm by 300 cm",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "(Refer to CAP 696 or figure 031_4-9)A box having dimensions of 1 metre by 1.2 metres by 0.8 metres, weighing 600 kgs is loaded and secured onto a 4 ft square pallet weighing 30 kg. Using the information on CAP 696 Figure 4.9 where could the pallet be positioned?",
    choices: {
      A: "In the aft position of the aft cargo compartment",
      B: "In the aft position of the forward cargo compartment",
      C: "In the mid position of the aft cargo compartment",
      D: "In the forward position of the forward cargo compartment",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "If a compartment takes a maximum load of 500 kg, with a running load of 350 kg/m and a distribution load of 300 kg/m2 max. Which of the following 500 kg boxes can be carried? 1. 100 cm x 110 cm x 145 cm 2. 125 cm x 135 cm x 142 cm 3. 120 cm x 140 cm x 143 cm 4. 125 cm x 135 cm x 144 cm",
    choices: {
      A: "any one of the boxes if loaded with due care as to its positioning",
      B: "any of boxes 2, 3 and 4 in any configuration",
      C: "box 2 with its longest length perpendicular to the floor cross beam or box 3 in anyconfiguration MASS AND BALANCE MASS AND BALANCE DETAILS OF AIRCRAFT",
      D: "either of boxes 3 and 4 with their longest length parallel to the aircraft longitudinal axis",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum floor loading on a baggage compartment floor is 120 lb per square foot. If the surface area in contact with the floor is 4 ft x 2 ft x 6 inches and the mass of the total load is 1220 lb, the actual floor loading on this aircraft is",
    choices: {
      A: "120 lb per square foot",
      B: "122 lb per square foot",
      C: "10 lb per square foot",
      D: "11 lb per square foot",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The maximum floor loading on a baggage compartment floor is 120 lb per square foot. If the surface area in contact with the floor is 4 ft x 3 ft and the mass of the total load is 1320 lb, the actual floor loading on this aircraft is",
    choices: {
      A: "120 lb per square foot",
      B: "110 lb per square foot",
      C: "10 lb per square foot",
      D: "11 lb per square foot",
    },
    correct: "B",
    ref: "CPL A AND H",
  },
  {
    question:
      "The baggage compartment of a particular helicopter is 1.1m wide by 1.4m long and has a maximum floor loading of 300 kg per square metre. What is the maximum mass capacity of the baggage compartment (limited by maximum floor load only)",
    choices: {
      A: "462 kg",
      B: "195 kg",
      C: "750 kg",
      D: "120 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question:
      "The baggage compartment of a particular helicopter is 1.2m wide by 1.4m long and has a maximum floor loading of 500 kg per square metre. What is the maximum capacity of the baggage compartment limited by maximum floor load only",
    choices: {
      A: "298 kg",
      B: "1300 kg",
      C: "840 kg",
      D: "192 kg",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The baggage compartment of a particular helicopter is 1.2m wide by 2.4m long and has a maximum floor loading of 520 kg per square metre. What is the maximum mass capacity of the baggage compartment (limited by maximum floor load only)",
    choices: {
      A: "181 kg",
      B: "1872 kg",
      C: "1497 kg",
      D: "144 kg",
    },
    correct: "C",
    ref: "CPL A AND H",
  },
  {
    question:
      "The baggage compartment of a particular helicopter is 2.2m wide by 1.4m long and has a maximum floor loading of 480 kg per square metre. What is the maximum capacity of the baggage compartment limited by maximum floor load only",
    choices: {
      A: "1478 kg",
      B: "156 kg",
      C: "1728 kg",
      D: "133 kg",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
  {
    question: "Loads must be adequately secured in order to",
    choices: {
      A: "allow steep turns",
      B: "avoid any centre of gravity (cg) movement during flight",
      C: "prevent excessive g-loading during the landing flare",
      D: "avoid unplanned centre of gravity (cg) movement and aircraft damage",
    },
    correct: "D",
    ref: "CPL A AND H",
  },
  {
    question: "If a load moved in flight",
    choices: {
      A: "A change of the momentof the load would cause the aircraft C of g to change",
      B: "A change of the moment of the load would be unlikely to cause the aircraft C of G to change",
      C: "The aircraft would become nose heavy",
      D: "The aircraft would become tail heavy",
    },
    correct: "A",
    ref: "CPL A AND H",
  },
];

export default massAndBalance;
