const principlesOfFlight = [
  {
    question:
      "The angle between the aeroplane longitudinal axis and the chord line is the",
    choices: {
      A: "angle of incidence",
      B: "glide path angle",
      C: "angle of attack",
      D: "climb path angle",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Assuming ISA conditions, which statement with respect to the climb is correct?",
    choices: {
      A: "At constant TAS the Mach number decreases",
      B: "At constant Mach number the IAS increases",
      C: "At constant IAS the TAS decreases",
      D: "At constant IAS the Mach number increases",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Maintaining thickness/chord ratio but changing to a supercritical wing section will",
    choices: {
      A: "lead to more prominent shockwave formation",
      B: "make lateral stability more critical",
      C: "give the aircraft an increased range",
      D: "reduce the aft shift of CP in the transonic range",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The point about which the wing pitching moment is independent of angle of attack is called",
    choices: {
      A: "the pitching centre",
      B: "the centre of gravity",
      C: "the centre of pressure",
      D: "the aerodynamic centre",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The unit of measurement of pressure is",
    choices: {
      A: "psi PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      B: "kg/m3",
      C: "lb/gal",
      D: "kg/dm2",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The unit of density is",
    choices: {
      A: "Bar",
      B: "psi",
      C: "kg/cm2",
      D: "kg/m3",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of attack of a wing profile is defined as the angle between",
    choices: {
      A: "the undisturbed airflow and the chordline",
      B: "the local airflow and the mean camberline",
      C: "the local airflow and the chordline",
      D: "the undisturbed airflow and the mean camberline",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The term angle of attack is defined as",
    choices: {
      A: "the angle that determines the magnitude of the lift force",
      B: "the angle between the wing chord line and the relative wind",
      C: "the angle between the relative airflow and the horizontal axis",
      D: "the angle between the wing and tailplane incidence",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Wing loading is",
    choices: {
      A: "the ratio of lift to wing weight",
      B: "the ratio of wing area to wing weight",
      C: "the ratio of lift to aircraft weight PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      D: "the ratio of aircraft weight to wing area",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "At a constant IAS, induced drag is affected by",
    choices: {
      A: "aircraft weight",
      B: "changes in thrust",
      C: "angle between chord line and longitudinal axis",
      D: "wing location",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the effect on EAS as height is increased when you are holding a constant IAS?",
    choices: {
      A: "EAS remains the same",
      B: "EAS falls",
      C: "EAS rises",
      D: "The effect depends on the temperature",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "At a constant CAS when flying below sea level an aircraft will have",
    choices: {
      A: "a higher TAS than at sea level",
      B: "a lower TAS than at sea level at ISA conditions",
      C: "the same TAS as at sea level",
      D: "the same TAS, but an increased IAS",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of attack of a two dimensional wing section is the angle between",
    choices: {
      A: "the chord line of the aerofoil and the fuselage centreline",
      B: "the chord line of the aerofoil and the free stream direction",
      C: "the fuselage core line and the free stream direction",
      D: "the chord line and the camber line of the aerofoil",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The units of wing loading (i) W / S and (ii) dynamic pressure q are",
    choices: {
      A: "(i) N/m2; (ii) kg/m2",
      B: "(i) kg/m; (ii) N/m2",
      C: "(i) N/m; (ii) kg",
      D: "(i) N/m2; (ii) N/m2",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the MAC of a wing?",
    choices: {
      A: "Area of wing divided by the span",
      B: "The same as the mean chord of a rectangular wing of the same span",
      C: "The mean chord of the whole aeroplane",
      D: "The 25% chord of a swept wing",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The units of the density of the air (i) and the force (ii) are",
    choices: {
      A: "(i) kg/m3; (ii) N",
      B: "(i) kg/m3; (ii) kg",
      C: "(i) N/m3; (ii) N",
      D: "N/kg; (ii) kg",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following statements, about a venture in a sub-sonic airflow are correct? 1. The dynamic pressure in the undisturbed flow and in the throat are equal 2. The total pressure in the undisturbed flow and in the throat are equal",
    choices: {
      A: "1 is incorrect and 2 is correct",
      B: "1 and 2 are correct",
      C: "1 is correct and 2 is incorrect",
      D: "1 and 2 are incorrect",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A symmetrical aerofoil section at CL = 0 will produce?",
    choices: {
      A: "A negative (nose down) pitching moment",
      B: "A positive (nose up) pitching moment",
      C: "Zero pitching moment",
      D: "No aerodynamic force",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The CP on a swept wing aircraft will move forward due to",
    choices: {
      A: "boundary layer fences and spanwise flow",
      B: "tip stall of the wing",
      C: "flow separation at the root due to spanwise flow",
      D: "change in wing angle of incidence",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the SI unit that results from multiplying kg and m/s2?",
    choices: {
      A: "Joule",
      B: "Psi",
      C: "Newton",
      D: "Watt",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The airfoil chord line is",
    choices: {
      A: "a straight line from the wing leading edge to the trailing edge",
      B: "a line equidistant from the upper and lower wing surfaces",
      C: "a line tangential to the wing surface at the point of maximum curvature",
      D: "a line drawn at 15% chord from the root to the tip",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What happens to total drag when accelerating from CL MAX to maximum speed?",
    choices: {
      A: "Increases",
      B: "Increases then decreases PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      C: "Decreases",
      D: "Decreases then increases",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The term angle of attack in a two dimensional flow is defined as",
    choices: {
      A: "the angle for maximum lift/drag ratio",
      B: "the angle between the aeroplane climb path and the horizon",
      C: "the angle formed by the longitudinal axis of the aeroplane and the chord line of the wing",
      D: "the angle between the wing chord line and the direction of the relative wind/airflow",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is the correct description of the method for measuring the dihedral angle?",
    choices: {
      A: "The angle between the wing plane and the horizontal",
      B: "The angle between a line which passes through the 25% wing chord and the horizontal axis",
      C: "The angle between the 25% chord line and the horizontal axis",
      D: "The angle between 25% chord and the lateral axis",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What phenomena causes induced drag?",
    choices: {
      A: "Wing tip vortices",
      B: "Wing tanks",
      C: "The increased pressure at the leading edge",
      D: "The spanwise flow, inward below the wing and outward above",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In a stream tube, if density is halved, drag will be reduced by a factor of",
    choices: {
      A: "8",
      B: "4",
      C: "6",
      D: "2 PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The following unit of measurement kgm/s? is expressed in the SI-system as",
    choices: {
      A: "Pascal",
      B: "Newton",
      C: "Joule",
      D: "Watt",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The (subsonic) static pressure",
    choices: {
      A: "increases in a flow in a tube when the diameter decreases",
      B: "is the total pressure plus the dynamic pressure",
      C: "is the pressure in a point at which the velocity has become zero",
      D: "decreases in a flow in a tube when the diameter decreases",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is the speed that would activate the stick shaker",
    choices: {
      A: "1.5 VS",
      B: "1.05 VS",
      C: "1.2 VS",
      D: "Above VS",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the IAS is increased by a factor of 4, by what factor would the drag increase?",
    choices: {
      A: "4",
      B: "8",
      C: "12",
      D: "16",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which statement is correct about the CI and angle of attack?",
    choices: {
      A: "For a symmetric aerofoil, if angle of attack = 0, CI = 0",
      B: "For a symmetric aerofoil, if angle of attack = 0, CI is not equal to 0",
      C: "For an asymmetric aerofoil, if angle of attack = 0, CI = 0",
      D: "For an asymmetric aerofoil with positive camber, if angle of attack is greater than 0, CI = 0",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What are the correct SI units for density and force?",
    choices: {
      A: "KG/N, Nm3",
      B: "N/m3, Kg",
      C: "Kg/m3, Newtons",
      D: "KG/m3, Kg",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "when the undercarriage is lowered in flight",
    choices: {
      A: "form drag will increase and the aircrafts nose down pitching moment will be unchanged",
      B: "induced drag will increase and the aircrafts nose down pitching moment will increase",
      C: "form drag will increase and the aircrafts nose down pitching moment will increase",
      D: "induced drag will decrease and the aircrafts nose down pitching moment will increase",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "At a given CAS an aircraft flying below sea level will have",
    choices: {
      A: "the same TAS as at sea level",
      B: "a lower TAS than at sea level",
      C: "a higher TAS than at sea level",
      D: "the same TAS as at sea level but an increased IAS",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following expressions could represent the relationship between force, mass and acceleration",
    choices: {
      A: "a = m/F PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      B: "m = F x a",
      C: "F = m x a",
      D: "a = F x m",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A line connecting the leading and trailing edge midway between the upper and lower surface of an aerofoil. This definition is applicable for",
    choices: {
      A: "the mean aerodynamic chord line",
      B: "the chord line",
      C: "the camber line",
      D: "the upper camber line",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In recovery from a spin",
    choices: {
      A: "ailerons should be kept neutral",
      B: "airspeed increases",
      C: "ailerons used to stop the spin",
      D: "ruddeer and ailerons used against the direction of spin rotation",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What causes deep stall in a swept back wing?",
    choices: {
      A: "CP moves aft",
      B: "CP moves forward",
      C: "Root stall",
      D: "Spanwise flow from tip to root on wing upper surface",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the SI unit which results from multiplying kg and m/s squared?",
    choices: {
      A: "Newton",
      B: "Psi",
      C: "Joule PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      D: "Watt",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "How is the thickness of an aerofoil section measured?",
    choices: {
      A: "As the ratio of wing angle",
      B: "Related to camber",
      C: "As the percentage of chord",
      D: "In metres",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle between the chord line of the wing and the longitudinal axis of the airplane is known as the angle of",
    choices: {
      A: "attack",
      B: "relative wind",
      C: "incidence",
      D: "dihedral",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the CL and CD ratio at normal angles of attack?",
    choices: {
      A: "CL higher",
      B: "CD higher",
      C: "The same",
      D: "CL much higher",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In subsonic flight, which is correct for VMD?",
    choices: {
      A: "Parasite drag greater than induced drag",
      B: "CL and CD are minimum",
      C: "Best glide range achieved",
      D: "Best endurance speed for a piston engine",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The maximum angle of attack for the flaps down configuration, compared to flaps up is",
    choices: {
      A: "greater",
      B: "smaller",
      C: "unchanged",
      D: "smaller or greater, depending on CG position",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The aspect ratio of the wing",
    choices: {
      A: "is the ratio between the wing span and the root chord",
      B: "is the ratio between the wing span and the mean geometric chord",
      C: "is the ratio between the tip chord and the wing span",
      D: "is the ratio between chord and root chord",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Drag is in the direction of and lift is perpendicular to the",
    choices: {
      A: "chord line",
      B: "relative wind/airflow",
      C: "horizon",
      D: "longitudinal axis",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Bernoullis Theorem states",
    choices: {
      A: "dynamic pressure increase and static pressure increase",
      B: "dynamic pressure increase and static pressure decrease",
      C: "dynamic pressure is maximum at stagnation point",
      D: "zero pressure at zero dynamic pressure",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "On an airfoil the centre of pressure will be most forward",
    choices: {
      A: "at the optimum angle PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      B: "at the stalling angle",
      C: "just below the stalling angle",
      D: "just above the stalling angle",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The true airspeed (TAS) is",
    choices: {
      A: "higher than the speed of the undisturbed airstream about the aeroplane",
      B: "lower than the indicated airspeed (IAS) at ISA conditions and altitudes below sea level",
      C: "equal to the IAS, multiplied by the air density at sea level",
      D: "lower than the speed of the undisturbed airstream about the aeroplane",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What does parasite drag vary with?",
    choices: {
      A: "Square of the speed",
      B: "CLmax",
      C: "Speed",
      D: "Surface area",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What effect on stall speed do the following have?",
    choices: {
      A: "Increased anhedral increases stall speed",
      B: "Fitting a T tail will reduce stall speed",
      C: "Increasing sweepback decreases stall speed",
      D: "Decreasing sweep angle decreases stall speed",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Bernoullis equation can be written as (pt = total pressure, ps = static pressure, q = dynamic pressure)",
    choices: {
      A: "pt = ps - q",
      B: "pt - q = ps",
      C: "pt + ps = q PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      D: "pt = q - ps",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a symmetrical airfoil the mean camber line is?",
    choices: {
      A: "A line joining points of mean camber along the wing",
      B: "A line joining points of maximum camber along the wing",
      C: "A curve co-incident with the top surface of the airfoil",
      D: "A straight line co-incident with the chord line",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Lift is a function of",
    choices: {
      A: "velocity, density, wing shape and lift coefficient",
      B: "velocity, wing area, CL and density",
      C: "velocity, wing shape, wing area and CL",
      D: "velocity, density, gross wing area and CD",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Considering a positive cambered aerofoil, the pitch moment when Cl=0 is",
    choices: {
      A: "negative (pitch-down)",
      B: "equal to zero",
      C: "infinite",
      D: "positive (pitch-up)",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the continuity equation is applicable, what will happen to the air density (rho) if the cross sectional area of a tube changes? (low speed, subsonic and incompressible flow)",
    choices: {
      A: "The density depends on the change of the tube area",
      B: "rho 1 < rho 2",
      C: "rho 1 > rho 2",
      D: "rho 1 = rho 2",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Longitudinal dihedral is",
    choices: {
      A: "the difference between the wing and tail angle of sweepx",
      B: "the difference between the wing and tail angle of incidence",
      C: "when the wing has anhedral and the tail dihedral",
      D: "the difference between the wing and tail dihedral angles",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle between the airflow (relative wind) and the chord line of an aerofoil is",
    choices: {
      A: "climb path angle",
      B: "glide path angle",
      C: "angle of attack",
      D: "same as the angle between chord line and fuselage axis",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following statements are correct?",
    choices: {
      A: "Drag acts in the same direction as the relative airflow and lift perpendicular to it",
      B: "Lift acts at right angles to the top surface of the wing and drag acts at right angles to lift",
      C: "Drag acts parallel to the chord and opposite to the direction of motion of the aircraft andlift acts perpendicular to the chord",
      D: "Lift acts perpendicular to the horizontal and drag parallel in a rearwards direction",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Consider a certain stream line tube. The velocity of the stream in the tube is V. An increase of temperature of the stream at constant value of V will",
    choices: {
      A: "increase the mass flow when the tube is divergent in the direction of the flow",
      B: "increase the mass flow",
      C: "not affect the mass flow",
      D: "decrease the mass flow",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Static pressure acts",
    choices: {
      A: "parallel to airflow",
      B: "parallel to dynamic pressure",
      C: "in all directions",
      D: "downwards",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "As subsonic air flows through a convergent duct:static pressurevelocity",
    choices: {
      A: "(i) increases and (ii) decreases",
      B: "(i) increases and (ii) increases",
      C: "(i) decreases and (ii) decreases",
      D: "(i) decreases and (ii) increases",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Dihedral of the wing is",
    choices: {
      A: "the angle between the 0.25 chord line of the wing and the vertical axis",
      B: "the angle between the leading edge of the wing and the lateral axis",
      C: "the angle between the 0.25 chord line of the wing and the lateral axis",
      D: "the angle between the 0.25 chord line of the wing and the horizon",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which one of the following statements about Bernoullis theorem is correct?",
    choices: {
      A: "The dynamic pressure is maximum in the stagnation point",
      B: "The dynamic pressure decreases as static pressure decreases",
      C: "The total pressure is zero when the velocity of the stream is zero",
      D: "The dynamic pressure increases as static pressure decreases",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A wing has a span of 50 feet and an area of 200 square feet. Its mean chord would be",
    choices: {
      A: "4 feet",
      B: "10 feet PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      C: "7.5 feet",
      D: "2.5 feet",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "On a symmetrical aerofoil, the pitch moment for which Cl=0 is",
    choices: {
      A: "zero",
      B: "equal to the moment coefficient for stabilized angle of attack",
      C: "positive (pitch-up)",
      D: "negative (pitch-down)",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of attack (aerodynamic angle of incidence) of an aerofoil is the angle between the",
    choices: {
      A: "bottom surface and the chord line",
      B: "chord line and the relative undisturbed airflow",
      C: "bottom surface and the Horizontal",
      D: "bottom surface and the relative airflow",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which formula or equation describes the relationship between force (F), acceleration (a) and mass (m)?",
    choices: {
      A: "m = F.a",
      B: "a = F.m",
      C: "F - m/a",
      D: "F = m.a",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The static pressure is acting",
    choices: {
      A: "only perpendicular to the direction of the flow",
      B: "only in the direction of the total pressure",
      C: "in all directions",
      D: "only in direction of the flow PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The Cl-alpha curve of a positive cambered aerofoil intersects with the vertical axis of the Cl-alpha graph",
    choices: {
      A: "in the origin",
      B: "below the origin",
      C: "nowhere",
      D: "above the origin",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to Figure 081-18)An A310 aeroplane weighing 100 tons is turning at FL 350 at constant altitude with a bank of 50 degrees. Its flight Mach range between low-speed buffering and high-speed buffering goes from",
    choices: {
      A: "M = 0.72 to M higher than 0.84",
      B: "M = 0.65 to M higher than 0.84",
      C: "M = 0.74 to M = 0.84",
      D: "M = 0.69 to M higher than 0.84",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which one of the following statements about the lift-to-drag ratio in straight and level flight is correct?",
    choices: {
      A: "At the highest value of the lift/drag ratio the total drag is lowest",
      B: "The highest value of the lift/drag ratio is reached when the lift is zero",
      C: "The lift/drag ratio always increases as the lift decreases",
      D: "The highest value of the lift/drag ratio is reached when the lift is equal to, the aircraftweight",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The correct drag formula is",
    choices: {
      A: "D = CD ½ RHO V? S",
      B: "D = CD 2 RHO V? S",
      C: "D = CD ½ RHO V S",
      D: "D = CD ½ 1/RHO V? S PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A laminar boundary layer is a layer, in which",
    choices: {
      A: "the vortices, are weak",
      B: "the velocity is constant",
      C: "the temperature varies constantly",
      D: "no velocity components exist normal to the surface",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The total pressure is",
    choices: {
      A: "can be measured in a small hole in a surface, parallel to the local stream",
      B: "static pressure plus the dynamic pressure",
      C: "static pressure minus the dynamic pressure",
      D: "½ rho V2",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The lift and drag forces, acting on a wing cross section",
    choices: {
      A: "vary linearly with the angle of attack",
      B: "depend on the pressure distribution about the wing cross section",
      C: "are normal to each other at just one angle of attack",
      D: "are proportional to each other, independent of angle of attack",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The relative thickness of an aerofoil is expressed in",
    choices: {
      A: "degrees cross section tail angle",
      B: "% chord",
      C: "camber",
      D: "meters",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The Mean Aerodynamic Chord (MAC) for a given wing of any platform is",
    choices: {
      A: "the chord of a rectangular wing with same moment and lift",
      B: "the chord of a large rectangular wing",
      C: "the average chord of the actual aeroplane",
      D: "the wing area divided by the wing span",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "High Aspect Ratio, as compared with low Aspect Ratio, has the effect of",
    choices: {
      A: "increasing lift and drag",
      B: "increasing induced drag and decreasing critical angle of attack",
      C: "decreasing induced drag and critical angle of attack",
      D: "increasing lift and critical angle of attack",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the unit of measurement for power?",
    choices: {
      A: "N/m",
      B: "Nm/s",
      C: "kgm/s2",
      D: "Pa/m2",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Lift and drag on an aerofoil are vertical respectively parallel to the",
    choices: {
      A: "horizon",
      B: "relative wind/airflow",
      C: "chord line",
      D: "longitudinal axis",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following wing planforms gives the highest local profile lift coefficient at the wingroot?",
    choices: {
      A: "Rectangular PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      B: "Elliptical",
      C: "Tapered",
      D: "Positive angle of sweet",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For an aircraft in level flight, if the wing centre of pressure is aft of the centre of gravity and there is no thrust/drag couple, the tailplane load must be",
    choices: {
      A: "upward",
      B: "unknown-insufficient information has been provided",
      C: "downward",
      D: "zero",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Load factor is the actual lift supported by the wings at any given time",
    choices: {
      A: "divided by the surface area of the wing",
      B: "divided by the total weight of the aircraft",
      C: "subtracted from the aircraft's total weight",
      D: "divided by the aircraft's empty weight",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In straight and level flight the centre of pressure is behind the centre of gravity. With the resultant force from the elevators and tailplane action to maintain straight and level flight, the force would be action",
    choices: {
      A: "upward",
      B: "downward",
      C: "horizontally",
      D: "in a direction depending on the thrust/drag couple",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The service ceiling of an aircraft is",
    choices: {
      A: "the altitude where rate of climb is zero",
      B: "the highest altitude permitted for flight because of manoeuvre capability PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      C: "the altitude where a low specific rate of climb is achieved",
      D: "the altitude above which cruising speed cannot be maintained",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the weight of an aircraft is increased, the maximum lift/drag ratio will",
    choices: {
      A: "decrease",
      B: "increase",
      C: "not be affected",
      D: "increase although the aircraft will have to be flown more slowly",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "an aerofoil is cambered when",
    choices: {
      A: "the upper surface of the aerofoil is curved",
      B: "the chord line is curved",
      C: "the line, which connects the centres of all inscribed circles, is curved",
      D: "the maximum thickness is large compared with the length of the chord",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Bernoulli's equation can be written as:(pt = total pressure, ps = static pressure and q = dynamic pressure)",
    choices: {
      A: "pt = ps/q",
      B: "pt = ps - q",
      C: "pt = q - ps",
      D: "pt = ps + q",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Bernoulli's equation is:(note: rho is density; pstat is static pressure; pdyn is dynamic pressure; ptot is total pressure)",
    choices: {
      A: "ptot + 1rho * TAS2 = constant",
      B: "ptat + 1rho * IAS2 = constant",
      C: "pdyn + 1rho * IAS2 = constant",
      D: "pstat + 1rho * TAS2 = constant PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Consider the steady flow through a stream tube where the velocity of the stream is V. an increase in temperature of the flow at a constant value of V will",
    choices: {
      A: "increase the mass flow when the tube is divergent in the direction of the flow",
      B: "increase the mass flow",
      C: "not affect the mass flow",
      D: "decrease the mass flow",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the aspect ratio of a wing increases whilst all other relevant factors remain constant, the critical angle of attack will",
    choices: {
      A: "remain constant only for a wing consisting of symmetrical aerofoils",
      B: "increase",
      C: "remain constant",
      D: "decrease",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In a convergent tube with an incompressible sub-sonic airflow, the following pressure changes will occur:Ps = static pressurePdyn = dynamic pressurePtot = total pressure",
    choices: {
      A: "Ps decreases, Pdyn increases, static temperature increases",
      B: "Ps increases, Pdyn decreases, Ptot remains constant",
      C: "Ps decreases, Pdyn increases, Ptot remains constant",
      D: "Ps decreases, Ptot increases, static temperature decreases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of attack of a aerofoil section is defined as the angle between",
    choices: {
      A: "The undisturbed airflow and the mean camberline",
      B: "the local airflow and the mean camberline",
      C: "The local airflow and the chordline",
      D: "The undisturbed airflow and the chordline",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of attack of an aerofoil section is the angle between the",
    choices: {
      A: "bottom surface and the chord line",
      B: "bottom surface and the horizontal",
      C: "bottom surface and the relative airflow",
      D: "chord line and the relative undisturbed airflow",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The difference between IAS and TAS will",
    choices: {
      A: "increase with increasing air density",
      B: "increase with decreasing temperature",
      C: "decrease with decreasing altitude",
      D: "decrease with increasing speed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The Sl unit of measurement for pressure is",
    choices: {
      A: "lb/gal",
      B: "kg/m3",
      C: "N/m2",
      D: "bar/dm2",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The Sl units of air density (i) and force (ii) are",
    choices: {
      A: "(i) kg/m2, (ii) kg",
      B: "(i) kg/m3, (ii) N",
      C: "(i) N/m3, (ii) N",
      D: "(i) N/kg, (ii) kg",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The unit of measurement for density is",
    choices: {
      A: "kg/m3 PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      B: "psi",
      C: "kg/cm2",
      D: "bar",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which definition of propeller parameters is correct?",
    choices: {
      A: "Blade angle is the angle between the blade chord line and the propeller axis",
      B: "Geometric pitch is the theoretical distance a propeller blade element would travel in aforward direction during one revolution",
      C: "Angle of attack is the angle between the blade chord line and the propeller vertical plane",
      D: "Critical tip velocity is the propeller speed at which flow separation first occurs at some partof the blade",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Dynamic pressure is",
    choices: {
      A: "the total pressure at a point where the moving air stream is brought to rest",
      B: "the amount by which the pressure rises at a point where a moving air stream is brought to rest",
      C: "the pressure due to the weight of the atmosphere in still air",
      D: "the pressure change caused by heating when a moving air stream is brought to rest",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The input connections to an Air Speed Indicator are from",
    choices: {
      A: "a static source only",
      B: "a pitot source only",
      C: "both pitot and static sources",
      D: "pitot and static sources and outside air temperature sensor",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The mean camber line of an aerofoil section is",
    choices: {
      A: "a straight line from the leading edge to the trailing edge PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      B: "a line from the leading to the trailing edge equidistant from the upper and lower surfaces",
      C: "the profile of the upper surface of an aerofoil section",
      D: "an arc of circle from the leading edge to the trailing edge",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For a cambered aerofoil which of the following statements is correct",
    choices: {
      A: "it will give lift at small negative angles of attack",
      B: "at negative angles of attack it will produce negative lift only",
      C: "it will give lift at positive angles of attack only",
      D: "it will give negative lift at small positive angles of attack",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The dynamic pressure is equal to",
    choices: {
      A: "the density x speed squared",
      B: "half the density x speed",
      C: "half the density x speed squared",
      D: "half the speed x density squared",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "As air flows into the converging section of a venture",
    choices: {
      A: "static pressure decreases, velocity increases, mass flow decreases",
      B: "static pressure increases, velocity decreases, mass flow is constant",
      C: "static pressure decreases, velocity increases, mass flow is constant",
      D: "static pressure decreases, velocity decreases, mass flow decreases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "To obtain TAS, the EAS must be corrected for",
    choices: {
      A: "relative density only",
      B: "relative density and compressibility",
      C: "position error and compressibility PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      D: "position error and relative density",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The chord line of an aerofoil is",
    choices: {
      A: "a line from wing tip to wing tip",
      B: "a line from the leading edge to trailing edge equidistant from the upper and lower surfaces",
      C: "a straight line joining the centre of curvature of the leading and trailing edges",
      D: "a horizontal line tangential to the wing surface",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The thickness : chord ratio of an aerofoil is",
    choices: {
      A: "the ratio of wing thickness at the root to the thickness at the tip",
      B: "the ratio of the maximum thickness of an aerofoil section to its chord",
      C: "the ratio of the wing span to the mean chord",
      D: "the ratio of the thickness at the quarter chord point to the chord",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A symmetrical aerofoil at zero degree angle of attack will, in level flight produce",
    choices: {
      A: "most of its lift on the lower surface",
      B: "most of its lift on the upper surface",
      C: "the same amount of lift on the upper and lower surfaces",
      D: "zero lift",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Aspect ratio is",
    choices: {
      A: "the ratio of the mean chord to the maximum wing thickness",
      B: "the ratio of the wingspan to the square of the mean chord",
      C: "the ratio of the wingspan to the mean chord",
      D: "the ratio of the wingspan to the wing area",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "At higher elevation airports the pilot should know that indicated airspeed",
    choices: {
      A: "will be unchanged, but ground speed will be faster",
      B: "will be higher, but ground speed will be unchanged",
      C: "should be increased to compensate for the thinner air",
      D: "to maintain the required dynamic pressure the indicated airspeed should be increased",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For a tapered wing without twist, the effective angle of attack will be",
    choices: {
      A: "greatest at the tip",
      B: "greatest at the root",
      C: "equal across the span",
      D: "greatest at the centre span",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Effective angle of attack is the",
    choices: {
      A: "angle between the chord line and the mean direction of a non-uniform disturbed air stream",
      B: "angle between the relative airflow and the chord line",
      C: "angle between the chord line and the fuselage horizontal datum",
      D: "angle between the fuselage horizontal datum and the chord line of the horizontal stabiliser",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The magnitude of a force is",
    choices: {
      A: "its direction of application",
      B: "its largeness or size",
      C: "the units in which it is normally measured",
      D: "its vector",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the speed of an aircraft is 100 miles per hour, its speed in knots would be",
    choices: {
      A: "87 kts PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      B: "115 kts",
      C: "70 kts",
      D: "65 kts",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In ISA the air temperature is considered to be",
    choices: {
      A: "-56.5 degrees C at 26.090 ft",
      B: "-56.5 degrees F at 36.500 ft",
      C: "-56.5 degrees C at 36.090 ft",
      D: "56.5 degrees C at 36.090 ft",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In ISA pressure decreases",
    choices: {
      A: "at a constant rate as altitude increases",
      B: "at a rate of milibar per 30 ft at low altitudes",
      C: "at a rate of 0.5 lb/in per 100 ft above 10000 ft altitude",
      D: "at a rate of 30 milibars per ft",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If an aircraft is descending at 500 ft/min from 5000 ft altitude, the rate of pressure increase outside the aircraft is",
    choices: {
      A: "greater than the rate of pressure increase outside an aircraft descending at 500 ft/min from15000 ft to 10000 ft",
      B: "less than the rate of pressure increase outside an aircraft descending at 500 ft/min from 15000ft to 10000 ft",
      C: "equal to the rate of pressure increase outside an aircraft descending at 5000 ft/min at anyaltitude",
      D: "the rate of change will be the same",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Taper ratio is the ratio of",
    choices: {
      A: "the root thickness to the root chord PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      B: "the span to the root chord",
      C: "the root chord to the tip chord",
      D: "the span to the mean chord",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A wing has a span of 64m and an area of 525 square metres. The mean chord is",
    choices: {
      A: "7.8 m",
      B: "0.12 m",
      C: "8.2 m",
      D: "3.4 m",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A wing would be said to be swept back if",
    choices: {
      A: "the wing tips were lower than the wing roots",
      B: "the tip chord was less than the root chord",
      C: "the quarter chord line was inclined backwards from the lateral axis",
      D: "the tip incidence was less than the root incidence",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "At a given TAS, what effect will an increase in air density have on lift and drag?",
    choices: {
      A: "lift will increase but drag will decrease",
      B: "lift and drag will increase",
      C: "lift and drag will decrease",
      D: "lift will decrease and drag will increase",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A wing with a high thickness : chord ratio would be suitable for",
    choices: {
      A: "an aircraft with a high wing loading",
      B: "an aircraft intended to operate at high speed",
      C: "an aircraft intended to operate at low speed PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      D: "an aircraft designed to operate at extremely high altitudes",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A moment is",
    choices: {
      A: "the product of a force and the distance through which it acts. The distance in the moment ismerely a leverage and no movement is involved",
      B: "the product of a force and the distance through which it moves",
      C: "the product of the application of a force",
      D: "the vector quantity of a lever",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "At a constant TAS the dynamic pressure",
    choices: {
      A: "will be greater at sea level than at high altitude",
      B: "will be less at sea level than at high altitude",
      C: "will be the same at sea level as at high altitude",
      D: "will be greater at altitude than at sea level",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The position error of an ASI results from",
    choices: {
      A: "mechanical differences in individual instruments",
      B: "the difference in air density from sea level ISA ensity",
      C: "the effects of the airflow around the static vent and pitot head",
      D: "the fact that air becomes more compressible at high speeds",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The CAS is the ASI reading corrected for",
    choices: {
      A: "position and instrument error",
      B: "position, instrument and compressibility error",
      C: "compressibility and density error",
      D: "position, instrument, compressibility and density error PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If the atmospheric pressure is less than standard",
    choices: {
      A: "take-off distance would be reduced",
      B: "take-off distance would be increased",
      C: "take-off distance would not be affected",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A wing as a span of 30 m and an area of 300 square metres. The aspect ratio is",
    choices: {
      A: "3:1",
      B: "10:1",
      C: "30:1",
      D: "9:1",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A wing is said to be tapered if",
    choices: {
      A: "it is inclined upwards from root to tip",
      B: "the chord at the wing tip is less than the chord at the root",
      C: "the incidence at the tip is less than at the root",
      D: "the camber is increased at the wing tip",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The most correct list of factors that affect the lift produced by an aerofoil are",
    choices: {
      A: "angle of attack, air density, velocity, wing area",
      B: "angle of attack, air temperature, velocity, wing area",
      C: "angle of attack, velocity, wing area, aerofoil section, air density",
      D: "incidence, TAS, wing plan, leading edge radius and thrust",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A wing has a mean chord of 6 metres and a span of 30 metres. The aspect ratio is",
    choices: {
      A: "5 to 1",
      B: "30 to 1",
      C: "180 to 1",
      D: "6 to 1",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Lift of a wing is increased by",
    choices: {
      A: "an increase in the temperature of the atmosphere",
      B: "an increase in the pressure of the atmosphere",
      C: "an increase in the humidity of the atmosphere",
      D: "a decrease in the density of the atmosphere at a constant TAS",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A swept wing",
    choices: {
      A: "produces more lift at a given angle of attack than an equivalent straight wing",
      B: "reaches the critical angle of attack before an equivalent straight wing",
      C: "produces less lift at a given angle of attack than an equivalent straight",
      D: "produces zero lift at zero angle of attack",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "To convert knots into miles per hour",
    choices: {
      A: "multiply the knots by 0.87",
      B: "divide the knots by 0.87",
      C: "multiply the knots by 0.87 and divide by the relative density",
      D: "divide the knots by 8.7",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The aerodynamic centre is the point on the chord line where",
    choices: {
      A: "drag acts PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      B: "the sum of all aerodynamic forces act",
      C: "the geometric centre of the wing is located",
      D: "the pitching moment remains constant throughout changes in angle of attack within the normalrange",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The nose up or nose down orientation of an aircraft relative to the horizon is known as",
    choices: {
      A: "the angle of attack",
      B: "the angle of incidence",
      C: "the attitude of the aircraft",
      D: "the angle between the relative airflow and the chord line of the wing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Airflow, the product of the aircraft moving forwards, parallel to and in the opposite direction to the flight path, its pressure, temperature and relative velocity unaffected by the presence of the aircraft",
    choices: {
      A: "is known as static pressure",
      B: "is known as dynamic pressure",
      C: "is known as total pressure",
      D: "is known as relative airflow",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If TAS is kept constant, to maintain straight and level flight with reduced air density the angle of attack of an aircraft's wings must be",
    choices: {
      A: "increased",
      B: "decreased",
      C: "unaltered",
      D: "increased to the critical angle of attack",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The density of air may be measured in",
    choices: {
      A: "kg/square metre",
      B: "milibars PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      C: "kg/cubic metre",
      D: "Newton's per cubic metre",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The effect of increasing aspect ratio is to",
    choices: {
      A: "increase the maximum lift/drag ratio",
      B: "decrease the maximum lift/drag ratio",
      C: "not affect the maximum lift/drag ratio",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Density of the atmosphere will",
    choices: {
      A: "increase with rising humidity",
      B: "decrease with rising humidity",
      C: "remain unaffected by changes in humidity",
      D: "decrease with reduced humidity",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Vy is defined as",
    choices: {
      A: "speed for best rate of descent",
      B: "speed for best angle of climb",
      C: "speed for best rate of climb",
      D: "maximum speed which should be used in a climb",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If air is assumed to be incompressible, this means: A there will be no change in pressure when the speed of the airflow is changed B there will be no change of density due to change of pressure C the density will only change with speed at supersonic speed D pressure changes will only occur at very high speedsRef: AIR: atpl, cpl;Ans: B23579. A line from the centre of curvature of the leading edge to the trailing edge, equidistant from the top and bottom wing surface is",
    choices: {
      A: "camber line",
      B: "upper camber line PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - Basics, laws and definitions",
      C: "mean chord",
      D: "mean aerodynamic chord",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the SI unit for density?",
    choices: {
      A: "mV2",
      B: "kg/cm2",
      C: "kg-m",
      D: "kg/m3",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Laminar flow has",
    choices: {
      A: "more friction than turbulent",
      B: "same friction as turbulent",
      C: "less friction than turbulent",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following is the equation for power?",
    choices: {
      A: "N/m",
      B: "NM/s",
      C: "Pa/s2",
      D: "Kg/m/s2",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What wing produces most of its lift at the root?",
    choices: {
      A: "swept",
      B: "rectangular PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      C: "elliptical",
      D: "tapered",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The aerodynamic centre is",
    choices: {
      A: "the point where the CG meets the lateral axis",
      B: "the point where all changes in the magnitude of the lift force effectively take place",
      C: "situated at about 50% chord",
      D: "always to the rear of the neutral point",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In the equation of continuity relating to low velocity air, what is the effect on density with a change in area?",
    choices: {
      A: "area increases/density decreases",
      B: "area decreases/density decreases",
      C: "area increases/density increases",
      D: "area increases or decreases/no significant change in density",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following wing planforms will be least affected by turbulence?",
    choices: {
      A: "straight, high aspect ratio",
      B: "swept, low aspect ratio",
      C: "straight, moderate aspect ratio",
      D: "swept, high aspect ratio",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When Fowler flaps are deployed?",
    choices: {
      A: "Only the area increases",
      B: "They move backwards then downwards",
      C: "They move downwards then backwards",
      D: "They move forwards PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With increasing angle of attack, the stagnation point will move (i) and the point of lowest pressure will move (ii).",
    choices: {
      A: "(i) up, (ii) aft",
      B: "(i) down, (ii) forward",
      C: "(i) down, (ii) aft",
      D: "(i) up, (ii) forward",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Consider an aerofoil with a certain camber and a positive angle of attack. At which location will the highest flow velocities occur?",
    choices: {
      A: "Upper side",
      B: "Lower side",
      C: "In front of the stagnation point",
      D: "In the stagnation point",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following is the greatest factor causing lift?",
    choices: {
      A: "Increased airflow velocity below the wing",
      B: "Increased pressure below wing",
      C: "Suction above the wing",
      D: "Decreased airflow velocity above the wing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "On a cambered airfoil the zero lift angle of attack will be",
    choices: {
      A: "dependent on the wing aspect ratio",
      B: "positive",
      C: "negative",
      D: "zero",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the purpose of a slat on the leading edge?",
    choices: {
      A: "Decelerate the air over the top surface",
      B: "Thicken the laminar boundary layer over the top surface",
      C: "Increase the camber of the wing",
      D: "Allow greater angle of attack",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In a two-dimensional flow pattern, where the streamlines converge the static pressure will",
    choices: {
      A: "increase initially, then decrease",
      B: "decrease",
      C: "increase",
      D: "not change",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is true regarding deployment of Slats/Krueger flaps?",
    choices: {
      A: "Slats increase the critical angle of attack, Krueger flaps do not",
      B: "Krueger flaps increase the critical angle of attack, Slats do not",
      C: "Krueger flaps form a slot, Slats do not",
      D: "Slats form a slot, Krueger flaps do not",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Subsonic flow over a cambered airfoil at 4o angle of attack will cause",
    choices: {
      A: "an increase in speed and drop in pressure over the upper surface and a decrease in speed anda rise in pressure over the lower surface",
      B: "a decrease in speed and drop in pressure over the upper surface and a decrease in speed anda drop in pressure over the lower surface",
      C: "an increase in speed and drop in pressure over the upper surface and an increase in speedand a drop in pressure over the lower surface",
      D: "a decrease in speed and drop in pressure over the upper surface and an increase in speed and adrop in pressure over the lower surface",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Cambered wing sections give maximum CL at a relatively angles of attack.",
    choices: {
      A: "high; high",
      B: "low; high",
      C: "low; low",
      D: "high; low",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "At zero angle of attack in flight, a symmetrical wing section will produce",
    choices: {
      A: "some lift and drag",
      B: "zero lift with some induced and profile drag",
      C: "zero lift and drag",
      D: "zero lift with some drag",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is the most effective type of flap system?",
    choices: {
      A: "Slotted",
      B: "Split",
      C: "Fowler",
      D: "Plain",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The lift force, acting on an aerofoil",
    choices: {
      A: "is mainly caused by suction on the upperside of the aerofoil",
      B: "B - increases, proportional to the angle of attack until 40 degrees",
      C: "C - is mainly caused by overpressure at the underside of the aerofoil",
      D: "D - is maximum at an angle of attack of 2 degrees",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Lift is generated when",
    choices: {
      A: "an aerofoil is placed in a high velocity air stream PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "the shape of the aerofoil is slightly cambered",
      C: "a certain mass of air is accelerated downwards",
      D: "a certain mass of air is retarded",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On an asymmetrical, single curve aerofoil, in subsonic airflow, at low angle of attack, when the angle of attack is increased, the centre of pressure will (assume a conventional transport aeroplane)",
    choices: {
      A: "move forward",
      B: "move aft",
      C: "remain matching the airfoil aerodynamic centre",
      D: "remain unaffected",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The point, where the aerodynamic lift acts on a wing is",
    choices: {
      A: "the c.g. location",
      B: "the centre of pressure",
      C: "the point of maximum thickness of the wing",
      D: "the suction point of the wing",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which statement is correct?",
    choices: {
      A: "The centre of pressure is the point on the wings leading edge where the airflow splits up",
      B: "As the angle of attack increases, the stagnation point on the wings profile moves downwards",
      C: "The stagnation point is another name for centre of pressure",
      D: "The stagnation point is always situated on the chord line, the centre of pressure is not",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In a stationary subsonic streamline flow pattern, if the streamlines converge, in this part of the pattern, the static pressure will (i) and the velocity will (ii)",
    choices: {
      A: "(i) decrease; (ii) increase",
      B: "(i) increase; (ii) increase",
      C: "(i) increase; (ii) decrease PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "(i) decrease; (ii) decrease",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The vane of a stall warning system with a flapper switch is activated by the change of the",
    choices: {
      A: "point of lowest pressure",
      B: "stagnation point",
      C: "centre of pressure",
      D: "centre of gravity",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When an aircraft pitches up, the angle of attack of the tailplane will",
    choices: {
      A: "remain the same",
      B: "depend solely upon the rigger's angle of incidence",
      C: "decrease",
      D: "increase",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A flat plate, when positioned in the airflow at a small angle of attack, will produce",
    choices: {
      A: "both lift and drag",
      B: "lift but no drag",
      C: "drag but no lift",
      D: "neither lift nor drag",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Considering a positively cambered aerofoil section, the pitching moment when the lift coefficient Cl=0 is",
    choices: {
      A: "positive (nose up)",
      B: "equal to zero",
      C: "maximum",
      D: "negative (nose down)",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If in a two-dimensional incompressible and subsonic flow, the streamlines converge the static pressure in the flow will",
    choices: {
      A: "not change",
      B: "increase",
      C: "decrease",
      D: "increase initially, then decrease",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Lift is generated when",
    choices: {
      A: "a certain mass of air is accelerated in its flow direction",
      B: "the flow direction of a certain mass of air is changed",
      C: "a symmetrical aerofoil is placed in a high velocity air stream at zero angle of attack",
      D: "a certain mass of air is retarded",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The location of the centre of pressure of a positively cambered aerofoil section at increasing angle of attack will",
    choices: {
      A: "shift forward until approaching the critical angle of attack",
      B: "not shift",
      C: "shift aft until approaching the critical angle of attack",
      D: "shift in spanwise direction",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The point where the single resultant aerodynamic force acts on an aerofoil, is called",
    choices: {
      A: "neutral point",
      B: "centre of gravity",
      C: "centre of pressure",
      D: "aerodynamic centre",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the stagnation point?",
    choices: {
      A: "The intersection of the total aerodynamic force and the chord line PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "The point where the velocity of the relative airflow is reduced to zero",
      C: "The intersection of the thrust vector and the chord line",
      D: "The point, relative to which the sum total of all moments is independent of angle of attack",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A symmetrical aerofoil set at zero angle of attack in an air stream will produce",
    choices: {
      A: "lift and drag",
      B: "no lift and no drag",
      C: "lift but no drag",
      D: "drag but no lift",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The centre of pressure of an aerofoil is",
    choices: {
      A: "the point where the pressure on the upper surface of the wing is lowest",
      B: "the centre of gravity of the aerofoil",
      C: "the point where the pressure on the lower surface of the wing is highest",
      D: "the point on the chord line where the resultant lift force acts",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the angle of attack of an aerofoil is increased slightly, the C of P will",
    choices: {
      A: "move forward slightly",
      B: "move forward to the leading edge",
      C: "move rearward",
      D: "remain stationary",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Compared to the relative airflow, air on top of a wing",
    choices: {
      A: "pressure increases, velocity decreases",
      B: "pressure increases, velocity increases",
      C: "pressure decreases, velocity decreases PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "pressure decreases, velocity increases",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Due to the span wise pressure gradient, on an unswept wing at a low angle of attack, producing lift, the airflow",
    choices: {
      A: "on the upper surface tends to flow towards the tip, on the lower surface towards the root",
      B: "on both upper and lower surfaces tends to flow towards the tip",
      C: "on the upper surface tends to flow towards the root, on the lower surface towards the tip",
      D: "on both upper and lower surfaces tends to flow equally towards the root",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For an aircraft in level flight at the optimum angle of attack, the lift will be",
    choices: {
      A: "slightly less than drag",
      B: "approximately equal to the drag",
      C: "about 2 to 3 times greater than the drag",
      D: "about 10 to 20 times greater than the drag",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "For a typical wing the optimum angle of attack is approximately",
    choices: {
      A: "-3o",
      B: "0o",
      C: "4o",
      D: "15o",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During flight with zero angle of attack, the pressure along the upper surface of a wing would be",
    choices: {
      A: "greater than atmospheric pressure",
      B: "equal to atmospheric pressure",
      C: "less than atmospheric pressure",
      D: "always above Mcrit",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Of the total lift produced by the wing",
    choices: {
      A: "the lower surface produces the greater proportion",
      B: "the upper and lower surfaces always give equal proportions of the lift",
      C: "the upper surface produces the greater proportion at high speed, but the lower surface producesthe greater proportion at low speed",
      D: "the upper surface produces the greater proportion at all speeds",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For aircraft of the same weight, flying at the same IAS the angle of attack will be",
    choices: {
      A: "the same at altitude as at sea level",
      B: "greater at altitude than at sea level because the TAS is greater",
      C: "less at altitude than at sea level because the TAS is greater",
      D: "less at altitude than at sea level because the density is less",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Between approximately 8 and 15 degrees angle of attack an aerofoil produces lift due to",
    choices: {
      A: "an increase in the speed of the airflow over the upper surface giving a decrease in pressure anda decrease in the speed of the airflow past the under surface giving a decrease in pressure",
      B: "an increase in the speed of the airflow over the upper surface giving a decrease in pressure anda decrease in the speed of the airflow past the under surface giving an increase in pressure",
      C: "a decrease in the speed of the airflow over the upper surface giving a decrease in pressure anda decrease in the speed of the airflow past the under surface giving an increase in pressure",
      D: "a decrease in the speed of the airflow over the lower surface giving an increase in pressure anda decrease in pressure over the upper surface causing an increase in velocity",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "As the air flows over the upper surface of a wing",
    choices: {
      A: "its speed increases and total pressure decreases",
      B: "its speed increases and static pressure decreases",
      C: "its speed decreases and static pressure decreases",
      D: "its speed increases and dynamic pressure decreases",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "With a decrease in angle of attack",
    choices: {
      A: "the stagnation point moves forward",
      B: "the separation point moves forward",
      C: "form drag will increase",
      D: "induced drag will increase",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Changes in the centre of pressure of a wing affect the aircrafts",
    choices: {
      A: "lift/drag ratio",
      B: "lifting capacity",
      C: "aerodynamic balance and controllability",
      D: "drag",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "At positive angles of attack, a wing produces most lift at",
    choices: {
      A: "4o angle of attack",
      B: "wings level",
      C: "just before the stall",
      D: "just after the stall",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If speed is increased in level flight the CP will",
    choices: {
      A: "move forward",
      B: "move rearward",
      C: "remain stationary",
      D: "coincide with the aerodynamic centre",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the CG is ahead of the wing CP and there is no thrust/drag couple, for level flight",
    choices: {
      A: "the wing lift must be greater than the weight PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "the wing lift must be less than the weight",
      C: "the wing lift must be exactly equal to weight",
      D: "the aircraft could not be balanced",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For an aircraft in steady level flight, if the tail plane is producing a download, the CP of the wing must be",
    choices: {
      A: "forward of the CG",
      B: "aft of the CG",
      C: "coincident with the CG",
      D: "coincident with the AC",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A symmetrical aerofoil section of a wing is set at zero AOA will produce",
    choices: {
      A: "most of the lift on the upper surface",
      B: "most of the lift on the lower surface",
      C: "depends on the aircraft's speed",
      D: "zero lift",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following creates lift?",
    choices: {
      A: "a slightly cambered aerofoil",
      B: "an aerofoil in a high speed flow",
      C: "air accelerated upwards",
      D: "air accelerated downwards",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Where does airflow separation begin?",
    choices: {
      A: "upper surface/towards the leading edge",
      B: "lower surface/towards the trailing edge",
      C: "upper surface/towards the trailing edge PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "lower surface/towards the leading edge",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When considering the aerodynamic forces acting on an aerofoil section",
    choices: {
      A: "lift and drag increase linearly with an increase in angle of attack",
      B: "lift and drag act normal to each other only at one angle of attack",
      C: "lift and drag increase exponentially with an increase in angle of attack",
      D: "lift increases linearly and drag increases exponentially with an increase in angle ofattack",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Consider a positively cambered aerofoil section, the pitching moment when Cl = 0 will be",
    choices: {
      A: "negative",
      B: "infinite",
      C: "positive",
      D: "equal to zero",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On a cambered airfoil, as the angle of attack increases from zero to about ten degrees, the Centre of Pressure",
    choices: {
      A: "Moves back and then forward",
      B: "Remains in the same place",
      C: "Moves forward and then remains in the same place",
      D: "Moves back and then remains in the same place",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane maintains straight and level flight while the IAS is doubled. The change in lift coefficient will be",
    choices: {
      A: "x 0.25",
      B: "x 2.0",
      C: "x 0.5",
      D: "x 4.0 PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A body is placed in a certain airstream. The density of the airstream decreases to half of the original value. The aerodynamic drag will decrease with a factor",
    choices: {
      A: "4",
      B: "2",
      C: "8",
      D: "1.4",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The aerofoil polar is",
    choices: {
      A: "the relation between the horizontal and the vertical speed",
      B: "a graph of the relation between the lift coefficient and the angle of attack",
      C: "a graph of the relation between the lift coefficient and the drag coefficient",
      D: "a graph, in which the thickness of the wing aerofoil is given as a function of the chord",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane performs a straight and level horizontal flight at the same angle of attack at two different altitudes: (all other factors of importance being constant, assume ISA conditions and no compressibility effects)",
    choices: {
      A: "the TAS at the higher altitude is higher",
      B: "the TAS at both altitudes is the same",
      C: "the TAS at the higher altitude cannot be determined",
      D: "the TAS at the higher altitude is lower",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The terms q and S in the lift formula are",
    choices: {
      A: "square root of surface and wing loading",
      B: "dynamic pressure and the area of the wing",
      C: "static pressure and wing surface area",
      D: "static pressure and dynamic pressure",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The aerodynamic drag of a body, placed in a certain airstream depends amongst others on",
    choices: {
      A: "the airstream velocity",
      B: "the specific mass of the body",
      C: "the weight of the body",
      D: "the c.g. location of the body",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A body is placed in a certain airstream. The airstream velocity increases by a factor 4. The aerodynamic drag will increase with a factor",
    choices: {
      A: "8",
      B: "4",
      C: "16",
      D: "12",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When considering an angle of attack versus coefficient of lift graph for a cambered aerofoil, where does the lift curve intersect the vertical CL axis?",
    choices: {
      A: "Above the origin",
      B: "Below the origin",
      C: "At the point of origin",
      D: "To the left of the origin",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Comparing the lift coefficient and drag coefficient at normal angle of attack",
    choices: {
      A: "CL is much greater than CD",
      B: "CL has approximately the same value as CD",
      C: "CL is lower than CD",
      D: "CL is much lower than CD",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The lift formula is",
    choices: {
      A: "L = CL ½ RHO V? S PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "L = W",
      C: "L = CL 2 RHO V?",
      D: "L = n W",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Increasing dynamic (kinetic) pressure will have the following effect on the drag of an aeroplane (all other factors of importance remaining constant)",
    choices: {
      A: "the drag decreases",
      B: "this has no effect",
      C: "the drag increases",
      D: "the drag is only affected by the ground speed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The frontal area of a body, placed in a certain airstream is increased by a factor 3. The shape will not alter. The aerodynamic drag will increase with a factor",
    choices: {
      A: "1.5",
      B: "9",
      C: "6",
      D: "3",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane flies in straight and level flight with a lift coefficient CL=1. What will be the new value of CL after the speed has doubled, whilst still maintaining the original condition of flight?",
    choices: {
      A: "1.00",
      B: "0.50",
      C: "0.25",
      D: "2.00",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Assuming zero wing twist, the wing planform that gives the highest local lift coefficient at the wing root is",
    choices: {
      A: "tapered",
      B: "elliptical",
      C: "rectangular PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "swept back",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In straight and level flight at a speed of 1.3 VS, the lift coefficient, expressed as a percentage of its maximum (CLmax), would be",
    choices: {
      A: "169%",
      B: "130%",
      C: "59%",
      D: "77%",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following parameters can be read from the parabolic polar diagram of an aeroplane?",
    choices: {
      A: "The aspect ratio of the wing and the induced drag coefficient",
      B: "The minimum rate of descent and the induced drag",
      C: "The induced drag and the parasite drag",
      D: "The minimum glide angle and the parasite drag coefficient",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement is correct regarding Cl (lift coefficient) and alpha (angle of attack)?",
    choices: {
      A: "For a symmetrical aerofoil section, if the alpha is zero, Cl is zero",
      B: "For a symmetrical aerofoil section, if the alpha is zero, Cl is not zero",
      C: "For an asymmetrical aerofoil section, if the alpha is zero, Cl is zero",
      D: "For an asymmetrical aerofoil section with positive camber, if alpha is greater than zero, Cl iszero",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "For a given angle of attack the lift/drag ratio",
    choices: {
      A: "decreases with increase of density",
      B: "is unaffected by density changes",
      C: "increases with increase of density",
      D: "decreases with decrease of density PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The lift coefficient (Cl) of a wing at a given angle of attack",
    choices: {
      A: "is increased by the use of high lift devices",
      B: "is a constant and not affected by high lift devices",
      C: "is reduced when high lift devices are used",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The take-off distance required for a swept wing aircraft compared to the same aircraft without sweep would be",
    choices: {
      A: "less because the acceleration would be better",
      B: "the same because the take-off speed will be the same",
      C: "greater, because Cl will be less for a given IAS",
      D: "less because the take-off speed will be lower",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the weight of the aircraft is increased, the maximum lift/drag ratio will",
    choices: {
      A: "decrease",
      B: "increase",
      C: "remain the same and occur at the same speed",
      D: "remain the same but occur at a higher speed",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which is the coefficient for minimum glide angle?",
    choices: {
      A: "(Cl/Cd) min",
      B: "(Cl/Cd) max",
      C: "Cl2/Cd",
      D: "Cl3/Cd2",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What do S and q represent in the lift equation?",
    choices: {
      A: "static pressure and chord",
      B: "wing span and dynamic pressure",
      C: "wing area and dynamic pressure",
      D: "wing area and static pressure",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When considering the coefficient of lift and angle of attack of aerofoil sections",
    choices: {
      A: "a symmetric section at zero angle of attack will produce a small positive coefficient of lift",
      B: "an asymmetric section at zero angle of attack will produce zero coefficient of lift",
      C: "a symmetric section at zero angle of attack will produce zero coefficient of lift",
      D: "aerofoil section symmetry has no effect on lift coefficient",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Considering the lift to drag ratio, in straight and level flight which of the following is correct?",
    choices: {
      A: "L/D is maximum at the speed for minimum total drag",
      B: "L/D decreases with increasing lift",
      C: "L/D is maximum when lift equals weight",
      D: "L/D is maximum when lift equals zero",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following formulae is correct ?",
    choices: {
      A: "VA = VS1G x vCNMax",
      B: "VS1G = VA x vCNMax",
      C: "VA = VS1G x vn2",
      D: "VA = VS1G x n",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Induced drag is created by the",
    choices: {
      A: "separation of the boundary layer over the wing PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "interference of the air stream between wing and fuselage",
      C: "spanwise flow pattern resulting in the tip vortices",
      D: "propeller wash blowing across the wing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following descriptions most accurately describes the airflow that causes wing tip vortices?",
    choices: {
      A: "From the tip to the root on the top surface and from the root to the tip on the bottom surfaceover the wing tip",
      B: "From the tip to the root on the top surface and from the root to the tip on the bottom surfaceover the trailing edge",
      C: "From the root to the tip on the top surface and from the tip to the root on the bottom surfaceover the trailing edge",
      D: "From the root to the tip on the top surface and from the tip to the root on the bottom surfaceover the wing tip",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Induced drag may be reduced by",
    choices: {
      A: "an increase in the taper ratio of the wing",
      B: "an increase in aspect ratio",
      C: "a decrease of the aspect ratio",
      D: "the use of a wing tip with a much thinner aerofoil",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Excluding constants, the coefficient of induced drag (CDI) is the ratio of",
    choices: {
      A: "CL2 and S (wing surface)",
      B: "CL2 and AR (aspect ratio)",
      C: "CL and CD",
      D: "CL and b (wing span)",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The induced drag",
    choices: {
      A: "increases as the lift coefficient increases",
      B: "increases as the aspect ratio increases",
      C: "has no relation to the lift coefficient",
      D: "increases as the magnitude of the tip vortices decreases",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An increase in aspect ratio will",
    choices: {
      A: "have no effect on a wing or airfoil section",
      B: "cause VIMD to be reduced",
      C: "cause induced drag to increase",
      D: "cause VIMD to be increased",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following wing planforms produces the lowest induced drag? (all other relevant factors constant)",
    choices: {
      A: "Rectangular",
      B: "Elliptical",
      C: "Tapered",
      D: "Circular",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With flaps deployed, at a constant IAS in straight and level flight, the magnitude of tip vortices",
    choices: {
      A: "increases",
      B: "increases or decreases depending upon the initial angle of attack",
      C: "decreases",
      D: "remains the same",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The wake vortices behind a large aircraft begin on takeoff and end on landing",
    choices: {
      A: "at V2; in the flare",
      B: "on rotation; as the nosewheel goes down PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      C: "at V1; when lift dump is selected",
      D: "at 80kt; on touchdown",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which location on the aeroplane has the largest effect on the induced rag?",
    choices: {
      A: "Wing root junction",
      B: "Engine cowling",
      C: "Wing tip",
      D: "Landing gear",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which statement about induced drag and tip vortices is correct?",
    choices: {
      A: "Tip vortices can be diminished by vortex generators",
      B: "The flow direction at the upper side of the wing has a component in wing root direction, theflow at the underside of the wing in wing tip direction",
      C: "The flow direction at the upper and under side of the wing, both deviate in wing tip direction",
      D: "The wing tip vortices and the induced drag decrease at increasing angle of attack",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The induced drag coefficient, CDi is proportional with",
    choices: {
      A: "CL2",
      B: "CL",
      C: "square root (CL)",
      D: "CLmax",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The relationship between induced drag and the aspect ratio is",
    choices: {
      A: "a decrease in the aspect ratio increases the induced drag",
      B: "there is no relationship",
      C: "induced drag = 1.3 aspect ratio value PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "an increase in the aspect ratio increases the induced drag",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "For a given angle of attack, a swept wing will",
    choices: {
      A: "have a lower lift coefficient than an equivalent straight one",
      B: "have the same lift coefficient as an equivalent straight one",
      C: "have reduced lateral stability than an equivalent straight one",
      D: "have the same lateral stability as an equivalent straight one",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The span-wise flow is caused by the difference between the air pressure on top and beneath the wing and its direction of movement goes from",
    choices: {
      A: "the top to beneath the wing via the wings trailing edge",
      B: "beneath to the top of the wing via the wing tip",
      C: "beneath to the top of the wing via the trailing edge",
      D: "the top to beneath the wing via the leading edge",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "How do vortex generators work?",
    choices: {
      A: "Re-direct spanwise flow",
      B: "Take energy from free stream and introduce it into the boundary layer",
      C: "Reduce kinetic energy to delay separation",
      D: "Reduce the adverse pressure gradient",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Low speed pitch up is caused by the",
    choices: {
      A: "wing tip vortex",
      B: "Mach trim system",
      C: "spanwise flow on a swept back wing",
      D: "spanwise flow on a swept forward wing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane accelerates from 80 kt to 160 kt at a load factor equal to 1. The induced drag coefficient (i) and the induced drag (ii) alter with the following factors",
    choices: {
      A: "(i) ½; (ii) 1/16",
      B: "(i) 1; (ii) ½",
      C: "(i) 1/16; (ii) ¼",
      D: "(i) ¼; (ii) 2",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the effect of high aspect ratio of an aeroplane¿s wing on induced drag?",
    choices: {
      A: "It is unaffected because there is no relation between aspect ratio and induced drag",
      B: "It is increased because high aspect ratio produces greater downwash",
      C: "It is reduced because the effect of wing-tip vortices is reduced",
      D: "It is increased because high aspect ratio has greater frontal area",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the effect on induced drag of weight and speed changes?",
    choices: {
      A: "Induced drag decreases with decreasing speed and induced drag decreases with increasing weight",
      B: "Induced drag increases with decreasing speed and induced drag increases with increasing weight",
      C: "Induced drag decreases with increasing speed and induced drag decreases with decreasing weight",
      D: "Induced drag increases with increasing speed and induced drag increases with decreasing weight",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Winglets",
    choices: {
      A: "create an elliptical lift distribution",
      B: "decrease the induced drag",
      C: "decrease the static lateral stability",
      D: "increase the manoeuvrability",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The induced angle of attack is the result of",
    choices: {
      A: "downwash due to tip vortices PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "a large local angle of attack in a two dimensional flow",
      C: "downwash due to flow separation",
      D: "change in direction of flow due to the effective angle of attack",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane enters a horizontal turn with a load factor n=2 from straight and level flight whilst maintaining constant indicated airspeed. The",
    choices: {
      A: "lift doubles",
      B: "induced drag doubles",
      C: "lift becomes four times its original value",
      D: "total drag becomes four times its original value",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane in straight and level flight is subjected to a strong vertical gust. The point on the wing, where the instantaneous variation in wing lift effectively acts is known as the",
    choices: {
      A: "neutral point",
      B: "centre of thrust",
      C: "centre of gravity",
      D: "aerodynamic centre of the wing",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane transitions from steady straight and level flight into a horizontal co-ordinated turn with a load factor of 2, the speed remains constant and the",
    choices: {
      A: "lift increases by a factor of 4",
      B: "angle of attack increases by a factor of ¼",
      C: "induced drag increases by a factor of 4",
      D: "total drag increases by a factor of 4",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Interference drag is the result of",
    choices: {
      A: "separation of the induced vortex",
      B: "downwash behind the wing",
      C: "aerodynamic interaction between aeroplane parts (eg. wing/fuselage) PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "the addition of induced and parasite drag",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Minimum drag of an aeroplane in straight and level flight occurs at the",
    choices: {
      A: "maximum CL-CD ratio",
      B: "minimum speed",
      C: "minimum CD value",
      D: "minimum angle of attack",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The effect of the wing downwash on the static longitudinal stability of an aeroplane is",
    choices: {
      A: "negligible",
      B: "negative",
      C: "positive",
      D: "smallest at high values of the lift coefficient",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The span-wise flow on an unswept wing is from the",
    choices: {
      A: "lower to the upper surface via the wing tip",
      B: "upper surface via the trailing edge to the lower wing surface",
      C: "lower surface via the trailing edge to the upper wing surface",
      D: "upper surface via the leading edge to the lower wing surface",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the effect on induced drag of an increase in aspect ratio?",
    choices: {
      A: "Induced drag increases, because the effect of tip vortices increases",
      B: "Induced drag increases, because a larger aspect ratio increases the frontal area",
      C: "Induced drag decreases, because the effect of tip vortices decreases",
      D: "Induced drag decreases, because a larger aspect ratio causes more downwash",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement concerning the local flow pattern around a wing is correct?",
    choices: {
      A: "Slat extension, at a constant angle of attack and normal extension speeds, will increasethe lift coefficient, which will also increase the induced drag coefficient",
      B: "By fitting winglets to the wing tip, the strength of the wing tip vortices is reduced which inturn reduces induced drag",
      C: "Sweepback reduces drag since, compared with a straight wing of equal area, the spanincreases",
      D: "Vortex generators on the wing partially block the spanwise flow over the wing leading to areduction in induced drag",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which statement is correct?",
    choices: {
      A: "Tip vortices and induced drag decrease with increasing angle of attack",
      B: "Tip vortices can be diminished by vortex generators",
      C: "The flows on the upper and lower surfaces of the wing are both in wing tip direction",
      D: "The flow on the upper surface of the wing has a component in wing root direction",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The calibration for the ASI is based on density",
    choices: {
      A: "at the normal cruising altitude",
      B: "at the tropopause",
      C: "at sea level, ISA temperature",
      D: "at sea level, ISA+15oC",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "For an aircraft flying at a constant IAS",
    choices: {
      A: "the drag will be less at altitude than at sea level because the TAS is lower",
      B: "the drag will be less at altitude than at sea level because density is lower",
      C: "the drag will be greater at altitude than at sea level because TAS is higher",
      D: "the drag will be the same at altitude as at sea level",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "For an aircraft in level flight, induced drag",
    choices: {
      A: "would be less if the aspect ratio was increased",
      B: "would be greater if the aspect ratio was increased",
      C: "would be less if the weight was increased",
      D: "would be independent of aspect ratio",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "To fly at a given IAS, the thrust required at altitude",
    choices: {
      A: "will be less than at sea level",
      B: "will be the same as at sea level and will be given by the same throttle position",
      C: "will be the same as at sea level, but will require the throttle to be advanced",
      D: "will be greater than at sea level",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft at an IAS of 150kts at sea level, then flies at 10,000ft, the drag will",
    choices: {
      A: "be greater at sea level than at 10,000 ft",
      B: "be greater at 10,000 ft than at sea level",
      C: "be the same",
      D: "depends on the angle of incidence",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Induced drag of an aircraft would be increased with",
    choices: {
      A: "increased speed",
      B: "increased weight",
      C: "increased aspect ratio",
      D: "decreased angle of attack",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A swept wing compared to the same wing without sweep will give",
    choices: {
      A: "the same lift at a given angle of attack but a lower Cl max PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "more lift at a given angle of attack",
      C: "less lift at a given angle of attack",
      D: "the same lift at a given angle of attack and a higher Cl max",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "To maintain the same aircraft speed, a swept wing compared to the same wing without sweep will require",
    choices: {
      A: "a higher angle of attack",
      B: "a lower angle of attack",
      C: "the same angle of attack",
      D: "the same angle of incidence",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An aerofoil which is producing lift will have",
    choices: {
      A: "upwash ahead of the wing and downwash behind it",
      B: "upwash ahead of the wing but no deflection of the airflow behind it",
      C: "no deflection of the airflow ahead of the wing but downwash behind it",
      D: "no deflection of the airflow either ahead or behind the aerofoil",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Downwash is",
    choices: {
      A: "the decrease in the angle of incidence from root to tip of the wing",
      B: "the higher speed airspeed behind the propeller",
      C: "the downward deflection of the airflow behind the wing",
      D: "the downward slope of a wing from root to tip",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which condition reduces the required runway for take-off?",
    choices: {
      A: "higher than recommended airspeed before rotation",
      B: "lower than standard air density",
      C: "increased headwind component PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "increased TAS",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Skin friction drag resulting from a laminar boundary layer will be",
    choices: {
      A: "more than from a turbulent boundary layer",
      B: "less than from a turbulent boundary layer",
      C: "the same as from a turbulent boundary layer",
      D: "unmeasurable",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If speed is reduced from 300 kt to 150 kt the form drag will be",
    choices: {
      A: "double",
      B: "half",
      C: "a quarter",
      D: "a third",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "How does increased weight affect the take-off distance of an aeroplane?",
    choices: {
      A: "The aeroplane will accelerate more slowly with the same take-off power output, and a higherairspeed is required to generate the necessary lift for take-off",
      B: "Every aeroplane has the same acceleration factor with the same power output, but a higherairspeed is needed to overcome the increased ground effect",
      C: "The aeroplane will accelerate more slowly with the same power output, but the same airspeed isrequired to generate necessary lift for take-off",
      D: "The aeroplane will accelerate more slowly with a greater power output, and a decreasedairspeed is required to generate necessary lift for take-off",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the weight of an aircraft is increased, the minimum drag speed (Vmd)",
    choices: {
      A: "is the same but occurs at a higher angle of attack",
      B: "is the same and occurs at the same angle of attack PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      C: "is increased",
      D: "is decreased",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For a rectangular wing at constant speed and angle of attack, induced drag",
    choices: {
      A: "will be uniform across the wing span",
      B: "will be greatest at the wing tip",
      C: "will be greatest at the wing root",
      D: "will be greatest at the inboard end of the wing root",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The change in downwash along a wing without taper",
    choices: {
      A: "reduces damping in roll",
      B: "reduces the adverse yaw effect in roll",
      C: "causes the stall to occur at the root first",
      D: "increases the load factor at the wing tip",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The principal cause of hazardous conditions associated with the wake turbulence of large aeroplanes is the",
    choices: {
      A: "high speeds at which large aircraft operate",
      B: "vortices generated at the wing tips",
      C: "propeller or jet wash",
      D: "laminar flow aerofoil",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Vortex wake behind large aircraft",
    choices: {
      A: "stays at ground level",
      B: "gradually descends to ground level",
      C: "gradually descends to a lower level",
      D: "gradually ascends to a higher level PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During a take-off made behind a departing large aircraft, the pilot can minimise the hazard of wake turbulence by",
    choices: {
      A: "extending the take-off roll and not rotating until well beyond the jet's rotation point",
      B: "maintaining extra speed on take-off and climb out",
      C: "remaining below the jet's flight path until able to turn clear of its wake",
      D: "being airborne prior to reaching the jet's rotation point and climbing above its flight path",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Induced drag is greatest",
    choices: {
      A: "at the wing tip",
      B: "at high speeds",
      C: "at low angles of attack",
      D: "at the wing root",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Increased downwash from the wing",
    choices: {
      A: "reduces the effective angle of attack of the tail plane",
      B: "increases the effective angle of attack of the tail plane",
      C: "reduces the effective angle of attack of the tail plane if it has a positive camber, andincreases the effective angle of attack of the tail plane if it has a negative camber",
      D: "does not affect the effective angle of attack of the tail plane",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following would occur if an aircraft in level flight maintaining a constant TAS, flew into an area of lower pressure?",
    choices: {
      A: "total drag decrease",
      B: "parasite drag decrease",
      C: "lift increase",
      D: "induced drag increase",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The minimum drag speed (TAS)",
    choices: {
      A: "remains constant with increasing aircraft weight",
      B: "increases with increasing altitude",
      C: "decreases with increasing altitude",
      D: "reduces with increasing aircraft weight",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "As altitude increases the excess thrust at a given IAS",
    choices: {
      A: "decreases because drag increases and thrust decreases",
      B: "increases because drag decreases and thrust is constant",
      C: "decreases because thrust decreases and drag is constant",
      D: "increases because drag decreases and thrust increases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Wing tip vortices are caused by unequal pressure distribution on the wing which results in airflow from",
    choices: {
      A: "bottom to top around the trailing edge",
      B: "top to bottom around the trailing edge",
      C: "bottom to top around the wingtip",
      D: "top to bottom around the wingtip",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is the correct definition of aspect ratio?",
    choices: {
      A: "span divided by tip chord",
      B: "chord divided by span",
      C: "span divided by mean chord",
      D: "chord divided by span, measured at the 25% chord position",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the cause of induced angle of attack?",
    choices: {
      A: "downwash from trailing edge in the vicinity of the wing tips PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "change in flow from effective angle of attack",
      C: "the upward inclination of the free stream flow around the wing tips",
      D: "wing downwash altering the angle at which the airflow meets the tail plane",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Parasite drag is linearly proportional to",
    choices: {
      A: "speed",
      B: "angle of attack",
      C: "speed2",
      D: "weight",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "On an untapered wing of constant section",
    choices: {
      A: "induced downwash is maximum at the wing tip",
      B: "induced downwash increases from tip to root",
      C: "the separation point is constant throughout the span",
      D: "induced downwash is constant over all the span",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft flying at 150 kt EAS at 10.000 ft compared to the same aircraft flying at the same EAS at sea level will have",
    choices: {
      A: "The same angle of attack",
      B: "A smaller angle of attack",
      C: "A larger angle of attack",
      D: "A lower TAS",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 081-01) Which point in the diagram gives the best glide condition?",
    choices: {
      A: "Point C",
      B: "Point A",
      C: "Point B PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "Point D",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 081-04) Which line represents the total drag line of an aeroplane?",
    choices: {
      A: "Line B",
      B: "Line A",
      C: "Line C",
      D: "Line D",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 081-01) Which point on the whole aeroplane polar diagram will give minimum sink rate?",
    choices: {
      A: "Point A",
      B: "Point C",
      C: "Point B",
      D: "Point D",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following decreases induced drag?",
    choices: {
      A: "Wing fences",
      B: "Anhedral",
      C: "Winglets",
      D: "Low aspect ratio plan form",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following is the cause of wing tip vortices?",
    choices: {
      A: "Air spilling from the top surface to the bottom surface at the wing tip",
      B: "Air spilling from the bottom surface to the top surface at the wing tip",
      C: "Air spilling from the bottom surface to the top surface at the left wing tip and from the topsurface to the bottom surface at the right wing tip",
      D: "Spanwise flow vector from the tip to the root on the bottom surface of the wing PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 081-06) The diagram shows the parameter X versus TAS. If a horizontal flight is considered the axis X shows",
    choices: {
      A: "the total drag",
      B: "the induced drag",
      C: "the lift force",
      D: "the parasite drag",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "High aspect ratio",
    choices: {
      A: "reduces parasite drag",
      B: "reduces induced drag",
      C: "increases stalling speed",
      D: "reduces manoeuvrability",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "At an aeroplane minimum drag speed, what is the ratio between induced drag Di and profile drag Dp (Di/Dp)?",
    choices: {
      A: "1/1",
      B: "It varies between aeroplane types",
      C: "2/1",
      D: "½",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Extending airbrakes during an approach will",
    choices: {
      A: "increase induced drag",
      B: "increase minimum drag speed (VDmin)",
      C: "reduce the minimum drag speed (VDmin)",
      D: "decrease profile drag",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "How does the total drag vary as speed is increased from stalling speed (VS) to maximum IAS (VNE) in a straight and level flight at constant weight?",
    choices: {
      A: "Decreasing, then increasing",
      B: "Decreasing",
      C: "Increasing",
      D: "Increasing, then decreasing",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The aeroplane drag in straight and level flight is lowest when the",
    choices: {
      A: "parasite drag equals twice the induced drag",
      B: "parasite drag is equal to the induced drag",
      C: "induced drag is equal to zero",
      D: "induced drag is lowest",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The effects of very heavy rain (tropical rain) on the aerodynamic characteristics of an aeroplane are",
    choices: {
      A: "decrease of CLmax and increase of drag",
      B: "decrease of CLmax and decrease of drag",
      C: "increase of CLmax and increase of drag",
      D: "increase of CLmax and decrease of drag",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Induced drag is caused by",
    choices: {
      A: "increased pressure at the leading edge stagnation point",
      B: "wing mounted fuel tanks",
      C: "wing tip vortices and downwash",
      D: "winglets and washout",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For a constant aircraft weight at constant IAS and in level flight",
    choices: {
      A: "VIMD will increase with increased altitude PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "VIMD will constantly vary regardless of altitude",
      C: "VIMD will remain the same regardless of altitude",
      D: "VIMD will reduce with increased altitude",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Total Drag at high Mach numbers is a combination of",
    choices: {
      A: "wave drag, interference drag, form drag, and induced drag",
      B: "induced drag, wave drag, form drag, skin friction drag and interference drag",
      C: "profile drag, form drag, induced drag and wave drag",
      D: "induced drag, form drag, interference drag and zero lift drag",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "How does aerodynamic drag vary when airspeed is doubled? By a factor of",
    choices: {
      A: "2",
      B: "1",
      C: "16",
      D: "4",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "As the speed of an aircraft at 20,000 ft increases, profile drag",
    choices: {
      A: "decreases at first, then increases",
      B: "decreases",
      C: "increases at first, then decreases at Mcrit",
      D: "increases as the square of the TAS",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In straight and level flight, which of the following would cause induced drag to vary linearly if weight is constant",
    choices: {
      A: "1/V",
      B: "V",
      C: "1/V2 PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "V2",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 081-01) Which point marks the value for minimum sink rate?",
    choices: {
      A: "Point A",
      B: "Point B",
      C: "Point C",
      D: "Point D",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The value of the parasite drag in straight and level flight at constant weight varies linearly with the",
    choices: {
      A: "angle of attack",
      B: "square of the angle of attack",
      C: "square of the speed",
      D: "speed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following will reduced induced drag?",
    choices: {
      A: "Elliptical lift distribution",
      B: "Low aspect ratio",
      C: "Flying at high angles of attack",
      D: "Extending the flaps",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Increasing air pressure will have the following effect on the drag of an aeroplane (angle of attack, OAT and TAS are constant)",
    choices: {
      A: "the drag is only affected by the ground speed",
      B: "the drag increases",
      C: "this has no effect",
      D: "the drag decreases",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The interference drag is created as a result of",
    choices: {
      A: "separation of the induced vortex",
      B: "the addition of induced and parasite drag",
      C: "interaction between aeroplane parts (eg. Wing/fuselage)",
      D: "downwash behind the wing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "How does the total drag change, in straight and level flight at constant mass, as speed is increased from flight at constant mass, as speed is increased from the stall speed (VS) to maximum IAS (VNE or VMO)?",
    choices: {
      A: "Initially decreases, then increases",
      B: "Decreases",
      C: "Increases",
      D: "Initially increases, then decreases",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Increasing dynamic pressure will have the following effect on the drag of an aeroplane (all other factors of importance remaining constant)",
    choices: {
      A: "drag increases across the whole speed range",
      B: "none",
      C: "drag decreases across the whole speed range",
      D: "at speeds greater than the minimum drag speed, drag increases",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If landing gear is lowered",
    choices: {
      A: "total drag increases and Vmd decreases",
      B: "total drag increases and Vmd increases",
      C: "total drag is the same and Vmd increases",
      D: "total drag increases and Vmd is the same",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The minimum total drag of an aircraft in flight occurs",
    choices: {
      A: "at the stalling speed PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "at the speed where parasite drag and induced drag are equal",
      C: "at the speed where induced drag is least",
      D: "at the speed where parasite drag is least",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The purpose of streamlining is",
    choices: {
      A: "to reduce form drag",
      B: "to reduce induced drag",
      C: "to increase lift",
      D: "to reduce skin friction drag",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For an aircraft in level flight, as indicated air speed increases",
    choices: {
      A: "both parasite and induced drag increase",
      B: "parasite drag decreases, induced drag increases",
      C: "parasite drag increases, induced drag decreases",
      D: "both parasite and induced drag decrease",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If the weight of an aircraft is increased, for a constant speed",
    choices: {
      A: "profile drag will increase; induced drag will remain the same",
      B: "induced drag will increase; profile drag will remain the same",
      C: "both profile drag and induced drag will remain the same",
      D: "profile drag will increase, induced drag will decrease",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "At high speed an aircraft will have",
    choices: {
      A: "more profile drag than induced drag",
      B: "more induced drag than profile drag",
      C: "about the same profile drag as induced drag PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "only induced drag",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Both lift and drag of an aerofoil are",
    choices: {
      A: "proportional to the square of the velocity of the relative airflow",
      B: "proportional to increases and decreases in the velocity of the relative airflow",
      C: "inversely proportional to the air density",
      D: "inversely proportional to the area of the wing",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft is required to cruise, maintaining Vmd. As the weight decreases the IAS must be",
    choices: {
      A: "decreased, and the angle of attack decreased",
      B: "decreased, and the angle of attack remain constant",
      C: "increased, and the angle of attack decreased",
      D: "kept the same, and the angle of attack kept the same",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "At a weight the maximum level flight speed will be because of a change in drag",
    choices: {
      A: "lower/less/parasite",
      B: "lower/less/induced",
      C: "higher/less/induced",
      D: "higher/less/parasite",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "For an aircraft flying at a speed above Vmd",
    choices: {
      A: "a speed increase causes a drag increase which will cause a deceleration",
      B: "a speed increase causes a drag decrease causing further acceleration",
      C: "a speed increase causes a drag increase causing an acceleration",
      D: "a speed decrease causes a drag increase causing a deceleration",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The speed for minimum sink rate is",
    choices: {
      A: "faster than Vmd",
      B: "slower than Vmd",
      C: "Vmd",
      D: "not related to Vmd",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When an aircraft selects its undercarriage and flaps down in flight, its VIMD will (i) and if it maintained the clean configuration VIMD its speed stability would (ii) .",
    choices: {
      A: "Increase/Reduce",
      B: "Increase/Increase",
      C: "Reduce/Reduce",
      D: "Reduce/Increase",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the effect on induced drag on entering the ground effect?",
    choices: {
      A: "Induce drag increases, but profile drag decreases",
      B: "Induced drag remains the same",
      C: "Induced drag decreases",
      D: "Induced drag increases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When an aircraft enters ground effect",
    choices: {
      A: "the total reaction vector is unaffected",
      B: "the total reaction vector is inclined forwards, reducing drag",
      C: "the total reaction vector is inclined rearwards, increasing drag",
      D: "the total reaction vector is inclined forwards, increasing drag",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Ground effect is most likely to result in which problem?",
    choices: {
      A: "Deep stall PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "Hard landings",
      C: "Becoming airborne before reaching recommended takeoff speed",
      D: "Inability to et airborne even though airspeed is sufficient for normal takeoff needs",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Ground Effect occurs",
    choices: {
      A: "acts like a decrease in aspect ratio",
      B: "is only effective up to 1 wingspan from the ground",
      C: "during the approach to landing",
      D: "aids landing by increasing the induced drag",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What will happen in ground effect?",
    choices: {
      A: "an increase in strength of the wing tip vortices",
      B: "The wing downwash on the tail surfaces increases",
      C: "The induced angle of attack and induced drag decreases",
      D: "A significant increase in thrust required",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Ground effect has the following influence on the landing distance",
    choices: {
      A: "decreases",
      B: "increases",
      C: "does not change",
      D: "increases, only if the landing flaps are fully extended",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "On entering ground effect, maintaining flight at the same speed",
    choices: {
      A: "ground effect has no effect on power",
      B: "less power is required",
      C: "more power is required PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "lift decreases",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What effect on induced drag does entering ground effect have",
    choices: {
      A: "Increase",
      B: "Decrease",
      C: "Remain the same",
      D: "Induced drag will increase, but profile drag will decrease",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If EAS is increased by a factor of 4, by what factor would profile drag increase?",
    choices: {
      A: "16",
      B: "12",
      C: "8",
      D: "4",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If an aeroplane flies in the ground effect",
    choices: {
      A: "drag and lift are reduced",
      B: "the effective angle of attack is decreased",
      C: "the induced angle of attack is increased",
      D: "the lift is increased and the drag is decreased",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Floating due to ground effect during an approach to land will occur",
    choices: {
      A: "at a speed approaching the stall",
      B: "when the height is less than twice the length of the wing span above the surface",
      C: "when a higher than normal angle of attack is used",
      D: "when the height is less than halve of the length of the wing span above the surface",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When an aeroplane enters ground effect",
    choices: {
      A: "the effective angle of attack is decreased",
      B: "the lift is increased and the drag is decreased",
      C: "the induced angle of attack is increased",
      D: "drag and lift are reduced",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The effect of changes of aspect ratio on total drag will be",
    choices: {
      A: "greatest at low speed",
      B: "greatest at high speed",
      C: "the same at all speeds",
      D: "no effect at any speed",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What must a pilot be aware of as a result of ground effect?",
    choices: {
      A: "Wingtip vortices increase, creating wake turbulence problems for arriving and departing aircraft",
      B: "Induced drag decreases, and any excess speed in the flare may cause floating",
      C: "A full stall landing will require less up elevator deflection than when free of ground effect",
      D: "Ground effect is due to a cushion of air generated by a landing aircraft when very close to theground",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Floating caused by ground effect will be most realized during an approach to land when",
    choices: {
      A: "at a higher than normal angle of attack",
      B: "at twice the length of the wing span above the surface",
      C: "at less than the length of the wing span above the surface",
      D: "at target threshold speed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "It is possible to fly an aircraft just clear of the ground at a slightly slower airspeed than that required to sustain level flight at higher altitudes. This is the result of",
    choices: {
      A: "a cushioning effect of the air as it is trapped between the ground and the descending aircraft",
      B: "ground interference with the static pressure system which produces false indications on the ASI",
      C: "interference of the ground surface with the airflow patterns about the aircraft in flight",
      D: "the ASI giving a false reading due to lower TAS at low pressure altitudes",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An aeroplane leaving ground effect will",
    choices: {
      A: "experience a decrease in the thrust required",
      B: "experience a decrease in stability and a nose up change in moments",
      C: "require a lower angle of attack to attain the same lift coefficient",
      D: "experience a decrease in induced drag",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When an aircraft enters ground effect",
    choices: {
      A: "the induced angle of attack increases",
      B: "lift decreases and drag increases",
      C: "lift increases and drag decreases",
      D: "the aircraft will be partially supported on a cushion of air",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When an aeroplane is in ground effect",
    choices: {
      A: "drag and lift are both increased",
      B: "drag is increased, lift is decreased",
      C: "drag is decreased, lift is increased",
      D: "drag and lift",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In level flight an increase in angle of attack will cause",
    choices: {
      A: "the stagnation point to move down and aft",
      B: "the boundary layer to become thinner PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      C: "a decrease in pitch angle",
      D: "the centre of pressure to move aft",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What must happen to the CL when flaps are deployed while maintaining a constant IAS in straight and level flight?",
    choices: {
      A: "Increase then decrease",
      B: "Remain constant",
      C: "Decrease",
      D: "Increase",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If IAS is doubled, by which of the following factors should the original CL be multiplied to maintain level flight?",
    choices: {
      A: "0.25",
      B: "0.5",
      C: "2.0",
      D: "4.0",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "To maintain level flight, if the angle of attack is increased the speed must be",
    choices: {
      A: "reduced",
      B: "increased in the same ratio as the lift/drag ratio decreases",
      C: "kept constant",
      D: "increased",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the effect on TAS if altitude is increased to 35,000 ft while flying at a constant Mach number?",
    choices: {
      A: "Increase then remain constant",
      B: "Increase",
      C: "Decrease",
      D: "Increase then decrease PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When an aeroplane is flying at an airspeed which is 1.3 times its basic stalling speed, the coefficient of lift as a percentage of the maximum lift coefficient (CLmax) would be",
    choices: {
      A: "169%",
      B: "130%",
      C: "59%",
      D: "77%",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Flap selection at constant IAS in straight and level flight will increase the",
    choices: {
      A: "lift coefficient and the drag",
      B: "stall speed",
      C: "lift and the drag",
      D: "maximum lift coefficient (CLmax) and the drag",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The stall speed increases, when? (all other factors of importance being constant)",
    choices: {
      A: "weight decreases",
      B: "pulling out of a dive",
      C: "spoilers are retracted",
      D: "minor altitude changes occur eg. 0-10.000 ft",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The speed range between high and low speed buffet",
    choices: {
      A: "decreases during a descent at a constant Mach number",
      B: "is always positive at Mach numbers below MMO",
      C: "increases during a descent at a constant IAS",
      D: "increases during climb",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "How does stalling speed (IAS) vary with altitude?",
    choices: {
      A: "It remains constant at lower altitudes but decreases at higher altitudes due to compressibilityeffects",
      B: "It remains constant",
      C: "It increases with increasing altitude, because the density decreases",
      D: "It remains constant at lower altitudes but increases at higher altitudes due to compressibilityeffects",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When entering a stall, the CP of a straight wing will (i) and of a strongly swept wing will (ii)",
    choices: {
      A: "(i) not move, (ii) not move",
      B: "(i) move aft, (ii) not move",
      C: "(i) move aft, (ii) move aft",
      D: "(i) move aft, (ii) move forward",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft whose weight is 237402 N stalls at 132 kt. At a weight of 356103 N it would stall at",
    choices: {
      A: "88 kt",
      B: "162 kt",
      C: "108 kt",
      D: "172 kt",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement is correct about the laminar and turbulent boundary layer",
    choices: {
      A: "separation point will occur earlier in the turbulent layer",
      B: "friction drag will be equal in both types of layers",
      C: "friction drag is lower in the turbulent layer",
      D: "friction drag is lower in the laminar layer",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane has a stall speed of 100 kt at a load factor n=1, in a turn with a load factor of n=2, the stall speed is",
    choices: {
      A: "70 kts",
      B: "282 kts",
      C: "141 kts",
      D: "200 kts",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On a swept wing aeroplane at low airspeed, the pitch up phenomenon",
    choices: {
      A: "is caused by boundary layer fences mounted on the wings",
      B: "never occurs, since a swept wing is a remedy to pitch up",
      C: "is caused by extension of trailing edge lift augmentation devices",
      D: "is caused by wingtip stall",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which stall has the greatest angle of attack?",
    choices: {
      A: "Low speed stall",
      B: "High speed stall (shock stall)",
      C: "Deep stall",
      D: "Accelerated stall",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With increasing angle of attack the CP will reach its most forward point",
    choices: {
      A: "just below the stalling angle",
      B: "just above the stalling angle",
      C: "at the stalling angle",
      D: "at various points dependent on aircraft weight",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A jet aeroplane cruises buffet free at high constant altitude in significant turbulence. Which type of stall can occur if this aeroplane decelerates?",
    choices: {
      A: "Low speed stall PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "Accelerated stall",
      C: "Shock stall",
      D: "Deep stall",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The sensor of a stall warning system can be activated by a change in the location of the",
    choices: {
      A: "stagnation point",
      B: "centre of lift",
      C: "transition region",
      D: "centre of gravity",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane has a stalling speed of 100 kt in a steady level flight. When the aeroplane is flying a level turn with a load factor of 1.5, the stalling speed is",
    choices: {
      A: "141 kt",
      B: "122 kt",
      C: "82 kt",
      D: "150 kt",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following statements about stall speed is correct?",
    choices: {
      A: "Use of a T-tail will decrease the stall speed",
      B: "Increasing the angle of sweep of the wing will decrease the stall speed",
      C: "Decreasing the angle of sweep of the wing will decrease the stall speed",
      D: "Increasing the anhedral of the wing will decrease the stall speed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Stick pushers must be installed in aeroplanes with dangerous stall characteristics. Dangerous stall characteristics include",
    choices: {
      A: "pitch down and minor wing drop",
      B: "pitch down and yaw",
      C: "excessive wing drop and deep stall PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "pitch down and increase in speed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Stall speed in a turn is proportional to",
    choices: {
      A: "the square root of the load factor",
      B: "weight",
      C: "lift",
      D: "TAS squared",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is the correct designation of stall speed in the landing configuration",
    choices: {
      A: "VSL",
      B: "VS0",
      C: "VS1",
      D: "VS1g",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The pitch up effect of an aeroplane with swept wing in a stall is due to the",
    choices: {
      A: "aft movement of the centre of gravity",
      B: "wing tip stalling first",
      C: "forward movement of the centre of gravity",
      D: "wing root stalling first",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The wing of an aeroplane will never stall at low subsonic speeds as long as",
    choices: {
      A: "the CAS exceeds the power-on stall speed",
      B: "the IAS exceeds the power-on stall speed",
      C: "the angle of attack is smaller than the value at which the stall occurs",
      D: "there is a nose-down attitude",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is the speed in level flight that would activate the stall warning?",
    choices: {
      A: "VS1G + 15 kts",
      B: "1.2 VS1G",
      C: "1.05 VS1G",
      D: "1.5VS1G",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 081-05) At an aircraft weight of 80,000lb in 1G level flight at FL350 your low speed buffet boundary will be",
    choices: {
      A: "222 kts",
      B: "200 kts",
      C: "310 kts",
      D: "M 0.6",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The input to a stick shaker comes from",
    choices: {
      A: "the airspeed, an sometimes the rate of change in airspeed",
      B: "the angle of incidence",
      C: "angle of attack, and sometimes the rate of change in angle of attack",
      D: "the angle of attack only",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Stick shaker stall warnings should be activated at",
    choices: {
      A: "1.2 VS",
      B: "1.05 VS",
      C: "1.5 VS",
      D: "VS",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If angle of attack is increased beyond the critical angle of attack, the lift coefficient and the stagnation point moves",
    choices: {
      A: "decreases; rearward PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "increases; rearward",
      C: "decreases; forward",
      D: "increases; forward",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which type of stall has the largest associated angle of attack?",
    choices: {
      A: "Low speed stall",
      B: "Shock stall",
      C: "Accelerated stall",
      D: "Deep stall",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The boundary layer of a wing is caused by",
    choices: {
      A: "suction at the upper wing side",
      B: "the normal shock wave at transonic speeds",
      C: "a turbulent stream pattern around the wing",
      D: "a layer on the wing in which the stream velocity is lower than the free stream velocity, due tofriction",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which kind of boundary layer has the strongest change in velocity close to the surface?",
    choices: {
      A: "No difference",
      B: "Laminar boundary layer",
      C: "Turbulent boundary layer",
      D: "Transition boundary layer",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following statements about the stall of a straight wing aeroplane is correct?",
    choices: {
      A: "The horizontal tail will stall at a higher speed than the wing",
      B: "Buffeting is the result of low separation on the tail plane PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      C: "The nose down effect is the result of increasing downwash, due to flow separation",
      D: "Just before the stall the aeroplane will have a nose-down tendence",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "At the point of stall",
    choices: {
      A: "lift decreases, drag decreases",
      B: "lift constant, drag increases",
      C: "lift decreases, drag increases",
      D: "lift decreases, drag constant",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "During an erect spin recovery",
    choices: {
      A: "the ailerons are held in the neutral position",
      B: "the control stick is moved side ways, against the angle of bank",
      C: "the control stick is moved side ways, in the direction of the angle of bank",
      D: "the control stick is pulled to the most aft position",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When a pilot makes a turn in horizontal flight, the stall speed",
    choices: {
      A: "increases with flap extension",
      B: "increases with the square root of load factor",
      C: "decreases with increasing bank angle",
      D: "increases with the load factor squared",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following statements about the spin is correct?",
    choices: {
      A: "In the spin, airspeed continuously increases",
      B: "An aeroplane is prone to spin when the stall starts at the wing root",
      C: "During spin recovery the ailerons should be kept in the neutral position",
      D: "Every aeroplane should be designed such that it can never enter a spin PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A boundary layer fence on a swept wing will",
    choices: {
      A: "improve the low speed characteristics",
      B: "improve the high speed characteristics",
      C: "increase the critical Mach Number",
      D: "improve the lift coefficient of the trailing edge flap",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which combination of design features is known to be responsible for deep stall",
    choices: {
      A: "Swept back wings and wing mounted engines",
      B: "Straight wings and a T-tail",
      C: "Swept back wings and a T-tail",
      D: "Straight wings and aft fuselage mounted engines",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The standard procedure for recovery from a stall in a light single engine aircraft is",
    choices: {
      A: "idle power; stick-roll neutral and forward",
      B: "maximum power; stick-roll neutral and forward, correct for bank with stick",
      C: "maximum power; stick-roll neutral and forward, correct for bank with rudder",
      D: "idle power; stick neutral, wait for normal nose down tendency",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which aeroplane design has the highest probability of a super stall?",
    choices: {
      A: "A canard wing",
      B: "A T-tail",
      C: "Swept wings",
      D: "A low horizontal tail",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "One disadvantage of the swept back wing is its stalling characteristics. At the stall",
    choices: {
      A: "wing root stall will occur first, which produces a rolling moment",
      B: "tip stall will occur first, which produces a pitch-up moment",
      C: "tip stall will occur first, which produces a nose-down moment",
      D: "leading edge stall will occur first, which produces a nose-down moment",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The normal stall recovery procedure for a light single engined aeroplane is",
    choices: {
      A: "full power and stick roll-neutral nose-down, correction for angle of bank with stick",
      B: "full power and stick roll-neutral nose-down, correcting for angle of bank with rudder",
      C: "idle power and stick roll-neutral, waiting for the natural nose-down tendency",
      D: "idle power and stick neutral, waiting for the natural nose-down tendency",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The following factors increase stall speed",
    choices: {
      A: "a lower weight, decreasing bank angle, a smaller flap setting",
      B: "a higher weight, selecting a higher flap setting, a forward c.g. shift",
      C: "increasing bank angle, increasing thrust, slat extension",
      D: "an increase in load factor, a forward c.g. shift, decrease in thrust",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the straight and level stall speed is 100 kt, what will be the stall speed in a 1.5g turn?",
    choices: {
      A: "122 kts",
      B: "150 kts",
      C: "81 kts",
      D: "100 kts",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "By what approximate percentage will the stall speed increase in a horizontal co-ordinated turn with a bank angle of 45o?",
    choices: {
      A: "19% PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "31%",
      C: "41%",
      D: "52%",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The stall speed",
    choices: {
      A: "increases with the length of the wingspan",
      B: "decreases with an increased weight",
      C: "does not depend on weight",
      D: "increases with an increased weight",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "At the same weight, with the CG at its forward limit",
    choices: {
      A: "VS is lower, the stalling angle is unchanged",
      B: "VS is higher, the stalling angle is greater",
      C: "VS is higher, the stalling angle is unchanged",
      D: "VS is lower, the stalling angle is less",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The stalling speed in IAS will change according to the following factors",
    choices: {
      A: "increase with increased load factor, icing conditions and an aft c.g. location",
      B: "decrease in a forward c.g. location, higher altitude and due to the slip stream from apropeller on an engine located forward of the wing",
      C: "increase during turn, increased mass and forward c.g. location",
      D: "increase with increased load factor, more flaps but will not increase due to the bank angle in aturn",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Two identical aeroplanes A and B are flying horizontal steady turns. Further data are:A: W=1500 kg Bank=20o TAS=130 ktB: W=1500 kg Bank=20o TAS=200 ktWhich of the following statements is correct?",
    choices: {
      A: "The turn radius A is larger than the turn radius B PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "The load factor A is larger than the load factor B",
      C: "The rate of turn A is larger than the rate of turn B",
      D: "The lift coefficient A is smaller than the lift coefficient B",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The most important problem of ice accretion on an aeroplane during flight is",
    choices: {
      A: "blocking of control surfaces",
      B: "increase in weight",
      C: "increase in drag",
      D: "reduction in CLmax",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the standard stall recovery for a light aircraft",
    choices: {
      A: "Pitch down, stick neutral roll, correct for bank with rudder",
      B: "Pitch down, stick neutral roll, correct for bank with aileron",
      C: "Pitch down, stick neutral, wait for neutral tendency",
      D: "Pitch down, stick neutral roll, do not correct for bank",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Entering the stall the centre of pressure of a straight wing will (1) and of a strongly swept back wing will (2)",
    choices: {
      A: "(1) move aft (2) not move",
      B: "(1) move aft (2) not move",
      C: "(1) nor move (2) move forward",
      D: "(1) move aft (2) move forward",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following aircraft designs would be most prone to super stall?",
    choices: {
      A: "T-tail",
      B: "Swept forward wing",
      C: "Swept back wing PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "Pod mounted engines beneath the wing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Stalling speed in a 15s bank level turn is 60 kt. The stalling speed in a 45s bank level turn will be",
    choices: {
      A: "60 kts",
      B: "85 kts",
      C: "70 kts",
      D: "83 kts",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The stalling speed in IAS will change according to the following factors?",
    choices: {
      A: "Will increase during turn, increased mass and an aft c.g. location",
      B: "Will decrease with a forward c.g. location, lower altitude and due to the slip stream from apropeller on an engine located forward of the wing",
      C: "Will increase with increased load factor, icing conditions and more flaps",
      D: "May increase during turbulence and will always increase when banking in a turn",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What causes a swept wing aircraft to pitch-up at the stall",
    choices: {
      A: "Negative camber at the root",
      B: "Separated airflow at the root",
      C: "Spanwise flow",
      D: "Rearward movement of the CP",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following statements about boundary layers is correct?",
    choices: {
      A: "The turbulent boundary layer is thinner than the laminar boundary layer",
      B: "The turbulent boundary layer gives a lower skin friction than the laminar boundary layer",
      C: "The turbulent boundary layer will separate more easily than the laminar boundary layer",
      D: "The turbulent boundary layer has more kinetic energy than the laminar boundary layer PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What factors determine the distance travelled over the ground of an aeroplane in a glide?",
    choices: {
      A: "The wind and the lift/drag ratio, which changes with angle of attack",
      B: "The wind and the aeroplane's mass",
      C: "The wind and CLmax",
      D: "The wind and weight together with power loading which is the ratio of power output to the weight",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Compared with level flight prior to the stall, the lift (1) and drag (2) in the stall change as follows",
    choices: {
      A: "(1) increases; (2) decreases",
      B: "(1) decreases; (2) increases",
      C: "(1) decreases; (2) decreases",
      D: "(1) increases; (2) increases",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The function of the stick pusher is",
    choices: {
      A: "to activate and push the stick forward at or beyond a certain value of angle of attack",
      B: "to activate and push the stick forward prior to stick shaker",
      C: "to vibrate the controls",
      D: "to pull the stick, to avoid a high speed stall",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following situations leads to a decreasing stall speed (IAS)?",
    choices: {
      A: "increasing air density",
      B: "increasing load factor",
      C: "decreasing weight",
      D: "increasing altitude",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Increase of wing loading will",
    choices: {
      A: "decrease the minimum gliding angle",
      B: "increase CLmax",
      C: "decrease take off speeds",
      D: "increase the stall speeds",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Compared with stalling airspeed 9VS) in a given configuration, the airspeed at which stick shaker will be triggered is",
    choices: {
      A: "1.20 VS",
      B: "1.30 VS",
      C: "1.12 VS",
      D: "greater than VS",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "After the transition point between the laminar and turbulent boundary layer",
    choices: {
      A: "the mean speed increases and the friction drag decreases",
      B: "the boundary layer gets thicker and the speed decreases",
      C: "the mean speed and friction drag increases",
      D: "the boundary layer gets thinner and the speed increases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The stall speed in a 60o banked turn increases by the following factor",
    choices: {
      A: "1.41",
      B: "1.07",
      C: "1.30",
      D: "2.00",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane has a stall speed of 78 KCAS at its gross weight of 6.850 lbs. What is the stall speed when the weight is 5.000 lbs?",
    choices: {
      A: "91 KCAS PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "78 KCAS",
      C: "57 KCAS",
      D: "67 KCAS",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With the centre of gravity on the forward limit, the stalling speed would be",
    choices: {
      A: "independent of the centre of gravity position",
      B: "lower than with the centre of gravity on the aft limit",
      C: "higher than with the centre of gravity on the aft limit",
      D: "the same as with the centre of gravity on the aft limit",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What effect does an increased load have on an aircraft?",
    choices: {
      A: "The aircraft will have a tendency to spin",
      B: "The aircraft will suffer immediate structural failure",
      C: "The aircraft will stall at a higher speed",
      D: "The aircraft will have a tendency to roll and yaw",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "As the centre of gravity is changed, recovery from a stall becomes progressively",
    choices: {
      A: "more difficult as the centre of gravity moves aft",
      B: "more difficult as the centre of gravity moves forward",
      C: "less difficult as the centre of gravity moves aft",
      D: "is unaffected by centre of gravity position, only by all up weight",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A wing stalling angle is",
    choices: {
      A: "unaffected by a turn",
      B: "increased in a high rate of turn",
      C: "decreased in a high rate of turn PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "decreased in any turn",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A low wing loading (aircraft weight has been reduced)",
    choices: {
      A: "increases stalling speed",
      B: "increases take-off run, stalling speed and landing speed",
      C: "decreases stalling speed and landing speed",
      D: "does not affect any of the above",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The load factor is",
    choices: {
      A: "the ratio of lift to drag",
      B: "the ratio of centripetal force to lift",
      C: "the ratio of thrust to weight",
      D: "the ratio of lift to weight",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When an aircraft with a typical aerofoil is in level flight at low speed and high angle of attack, the normal axis is",
    choices: {
      A: "vertical",
      B: "horizontal from side to side",
      C: "horizontal from front to rear",
      D: "nearly vertical",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane has a stall speed of 100 kt at a mass of 1000 kg. If the mass is increased to 2000 kg, the new value of the stall speed will be",
    choices: {
      A: "141 kt",
      B: "200 kt",
      C: "150 kt",
      D: "123 kt",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "As altitude is increased, the stall speed (IAS)",
    choices: {
      A: "remains constant regardless of altitude",
      B: "initially remains constant and at higher altitudes decreases",
      C: "initially remains constant and at higher altitudes increases",
      D: "remains constant until the tropopause and at higher altitudes increases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During which type of stall does the angle of attack have the smallest value?",
    choices: {
      A: "Deep stall",
      B: "Accelerated stall",
      C: "Low speed stall",
      D: "Shock stall",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given an initial condition in straight and level flight with a speed of 1.4 VS. The maximum bank angle attainable without stalling in a steady co-ordinated turn, whilst maintaining speed and altitude, is approximately",
    choices: {
      A: "32o",
      B: "44o",
      C: "60o",
      D: "30o",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "How is stall warning presented to the pilots of a large transport aeroplane?",
    choices: {
      A: "Stick pusher",
      B: "Stick shaker and/or aerodynamic buffet",
      C: "Stall warning light only",
      D: "Aural warning only",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When considering a swept back wing, with no corrective design features, at the stall",
    choices: {
      A: "leading edge stall will occur first, which produces a nose-down pitching moment",
      B: "wing root stall will occur first, which produces a rolling moment",
      C: "tip stall will occur first, which produces a nose-down pitching moment",
      D: "tip stall will occur first, which produces a nose-up pitching moment",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following statements is true?",
    choices: {
      A: "Flight in severe turbulence may lead to a stall and/or structural limitations being exceeded",
      B: "Flap extension in severe turbulence at constant speed increases both the stall speed and thestructural limitation margins",
      C: "By increasing the flap setting in severe turbulence at constant speed the stall speed will bereduced and the risk for exceeding the structural limits will be decreased",
      D: "Flap extension in severe turbulence at constant speed moves the centre of pressure aft, whichincreases the structural limitation margins",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The critical angle of attack at which a given aircraft stalls is dependent on the",
    choices: {
      A: "gross weight",
      B: "attitude and airspeed",
      C: "design of the wing",
      D: "altitude",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which action will result in a stall?",
    choices: {
      A: "exceeding the critical angle of attack",
      B: "flying at a low airspeed",
      C: "raising the aircraft's nose too high",
      D: "lowering the flaps during the cruise",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An aircraft is said to stall when",
    choices: {
      A: "the lift force from the wings is greater than the weight",
      B: "the airflow over the top surface of the wing separates which results in a large increase indrag and a large loss of lift",
      C: "the angle of attack of the wings is greater than 10 degrees",
      D: "it flies too slowly at low altitude",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "At the stalling angle of attack the lift/drag ratio will be",
    choices: {
      A: "higher than the optimum angle of attack",
      B: "lower than at the optimum angle of attack",
      C: "the same as at the optimum angle of attack",
      D: "the angle of attack does not affect the lift/drag ratio",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What affects indicated stall speed?",
    choices: {
      A: "Angle of attack, weight, and air density",
      B: "Load factor, angle of attack and power",
      C: "Weight, load factor, CG position and Mach number",
      D: "Humidity, air density and temperature",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the weight of an aircraft is increased the stalling speed will",
    choices: {
      A: "increase",
      B: "decrease",
      C: "remain the same",
      D: "be inversely proportional to the square root of the new weight",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With the CG on the forward limit, compared to the aft limit, the stalling speed would be",
    choices: {
      A: "higher PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "lower",
      C: "the same",
      D: "depends on the length of MAC",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "With engine power on, an aircraft will stall",
    choices: {
      A: "at a higher speed than with power off",
      B: "at a lower speed than with power off",
      C: "at the same speed as with power off",
      D: "aircraft will not stall",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The ratio between the total air load imposed on the wing and the gross weight of an aircraft in flight is known as",
    choices: {
      A: "load factor and directly affects stall speed",
      B: "load factor and has no effect on stall speed",
      C: "aspect ratio and directly affects stall speed",
      D: "load factor and is inversely proportional to the square root of the stall speed",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In a rapid recovery from a dive, the effects of load factor would cause the stall speed to",
    choices: {
      A: "not vary",
      B: "decrease",
      C: "increase",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The TAS of an aircraft at the stalling angle of attack at a given weight",
    choices: {
      A: "is constant at all altitudes",
      B: "increases as altitude increases",
      C: "decreases as altitude increases",
      D: "increases as altitude decreases PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The stalling angle of an aerofoil is approximately",
    choices: {
      A: "4o",
      B: "-2o",
      C: "16o",
      D: "10o",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the stalling speed of an aircraft is 75 kts, the approximate stalling speed in mph is",
    choices: {
      A: "multiply 75 by 0.87",
      B: "divide 75 by 0.87",
      C: "dividing 75 by 0.87 and subtracting the relative density",
      D: "multiplying 75 by 8.7",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The wing tip may be prevented from stalling before the root by",
    choices: {
      A: "having the wing swept back",
      B: "giving the tip a sharper leading edge than the root",
      C: "wash-in",
      D: "wash-out",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A fixed spoiler on the leading edge of the wing at the root will",
    choices: {
      A: "prevent the stall commencing at the root",
      B: "induce a root stall",
      C: "give a shorter landing run",
      D: "maintain a laminar boundary layer at the stall",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Wash out of a wing is",
    choices: {
      A: "an increase of incidence from root to tip",
      B: "a decrease of chord from root to tip",
      C: "a decrease in incidence from root to tip",
      D: "a decrease of camber from root to tip",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A rectangular wing, compared to other wing planforms, has a tendency to stall",
    choices: {
      A: "first at the leading edge, with progression outward toward the wing root and tip",
      B: "first at the wingtip, with the stall progression toward the wing root",
      C: "first at the wing root, with the stall progression toward towards the wing tip",
      D: "first at the semi-span centre, giving good aerodynamic stall warning",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A stick shaker will operate",
    choices: {
      A: "at the stall",
      B: "before the stall",
      C: "after the stall",
      D: "only during the stall",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A stall warning vane on an aircraft wing is fitted",
    choices: {
      A: "on the lower surface",
      B: "on or at the leading edge",
      C: "just above the leading edge",
      D: "just below the leading edge",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement is true concerning the aerodynamic conditions which occur during a spin entry?",
    choices: {
      A: "after a full stall, the wing that drops continues in a stalled condition while the rising wing PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "after a partial stall, the wing that drops remains in a stalled condition while the rising wingregains and continues to produce lift causing the rotation",
      C: "after a full stall, both wings remain in a stalled condition throughout the rotation",
      D: "after an incipient spin, the wing that drops remains in a stalled condition while the risingwing continues un-stalled, causing the rotation",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "During a spin to the left, which wing(s) is/are stalled?",
    choices: {
      A: "neither",
      B: "only the left",
      C: "both",
      D: "only the right",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "During autorotation the",
    choices: {
      A: "outer wing is stalled",
      B: "outer wing is more stalled than the inner",
      C: "inner wing is more stalled than the outer",
      D: "outer wing is not stalled",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A decrease in weight due to fuel consumption in flight will",
    choices: {
      A: "reduce the stalling speed, but the stall angle remains the same",
      B: "reduce the stalling speed and the stalling angle",
      C: "reduce the stalling angle and increase the stalling speed",
      D: "have no effect on the stall speed or angle",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The lift/drag ratio of a wing section at its stalling angle of attack is",
    choices: {
      A: "high PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "of a negative quantity",
      C: "maximum",
      D: "low",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the clean 1G stall speed for an aircraft is 151 kt, Vs during a 45o bank turn will be",
    choices: {
      A: "151 kt",
      B: "122 kt",
      C: "141 kt",
      D: "180 kt",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In what flight condition must an aircraft be placed in order to spin",
    choices: {
      A: "stalled",
      B: "partially stalled with one wing low",
      C: "in a steep diving spiral",
      D: "a steep turn",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a turn the stalling speed will be",
    choices: {
      A: "less than in level flight",
      B: "more than in level flight but at a lower angle of attack",
      C: "the same as in level flight",
      D: "more than in level and at the same angle of attack",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Comparing the IAS and TAS stall speed at 5000 ft and sea level, the IAS stalling speed will normally be",
    choices: {
      A: "the same at sea level but the TAS will be higher",
      B: "higher than at sea level but the TAS will be the same",
      C: "the same as at sea level and the TAS will be the same PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "higher than at sea level and the TAS will be higher",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When considering the approach to an airframe icing induced stall, which of the following statements is most correct?",
    choices: {
      A: "can easily be detected by the flight crew",
      B: "will give the same indications as any other stall",
      C: "can be so insidious that the pilot may be unaware that the aircraft has stalled",
      D: "will cause a nose down pitching moment due to the rearward movement of the CP at the stall",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is the speed that would activate the stick shaker?",
    choices: {
      A: "1.5Vs",
      B: "1.15Vs",
      C: "1.2Vs",
      D: "Above Vs",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following wing characteristics would be least affected by turbulence?",
    choices: {
      A: "straight wing",
      B: "swept back wing",
      C: "winglets",
      D: "dihedral wing",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What happens to stalling speed at a constant IAS in a climb?",
    choices: {
      A: "constant",
      B: "increase",
      C: "initially constant then decreases at high altitudes",
      D: "initially constant then increases at high altitudes",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "With a swept wing the nose up phenomena is caused by",
    choices: {
      A: "deploying lift augmentation devices",
      B: "wing fences",
      C: "wing sweep prevents the nose up phenomena",
      D: "tip stall",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The effect of rain on drag and stall speed would be to",
    choices: {
      A: "increase/increase",
      B: "increase/decrease",
      C: "decrease/increase",
      D: "decrease/decrease",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following is true?",
    choices: {
      A: "a turbulent boundary layer has more kinetic energy",
      B: "a turbulent boundary layer is thinner",
      C: "less skin friction is generated by a turbulent layer",
      D: "a laminar flow boundary layer is less likely to separate",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Stalling speed increases when",
    choices: {
      A: "recovering from a steep dive",
      B: "the aircraft is subjected to minor altitude changes",
      C: "the aircraft weight decreases",
      D: "flaps are deployed",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What happens to stall speed with flaps down?",
    choices: {
      A: "increases PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "decreases",
      C: "remains constant",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Vs is 100 kts at n=1What will the stall speed be if n=2?",
    choices: {
      A: "200 kt",
      B: "119 kt",
      C: "141 kt",
      D: "100 kt",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following increases the stall angle?",
    choices: {
      A: "slats",
      B: "flaps",
      C: "spoilers",
      D: "ailerons",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is used to activate a stall warning device?",
    choices: {
      A: "movement of the CP",
      B: "movement of the CG",
      C: "movement of the stagnation point",
      D: "a reduction in dynamic pressure",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If a jet is at 60o bank angle during a constant altitude turn, the stall speed will be",
    choices: {
      A: "1.6 greater",
      B: "1.19 greater",
      C: "1.41 greater",
      D: "2.0 greater PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The IAS of a stall",
    choices: {
      A: "increases with high altitude/more flaps/slats",
      B: "may increase with increasing altitude, especially high altitude/forward CG/icing",
      C: "forward CG and increasing altitude",
      D: "altitude never affects stall speed IAS",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The angle of attack at the stall",
    choices: {
      A: "increases with forward CG",
      B: "decreases with aft D",
      C: "decrease with decrease in weight",
      D: "is not affected by changes in weight",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following would indicate the stall?",
    choices: {
      A: "stall strip and stick shaker",
      B: "stall strip and angle of attack sensor",
      C: "ASI and stick shaker",
      D: "stick shaker and angle of attack indicator",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which list of configurations gives an increasing critical angle of attack?",
    choices: {
      A: "clean wing/flaps extended/slats extended",
      B: "flaps extended/clean wing/slats extended",
      C: "slats extended/clean wing/flaps extended",
      D: "clean wing/slat extended/flaps extended",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "One of the factors leading to pitch-up at the stall on swept wing aircraft is",
    choices: {
      A: "negative camber at the root",
      B: "airflow separation at the root",
      C: "spanwise outward flow of the boundary layer",
      D: "rearward movement of the CP",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following aircraft designs would be most likely to have poor recovery characteristics from a deep stall?",
    choices: {
      A: "high aspect ratio straight wing",
      B: "straight wing, T tail turboprop",
      C: "swept wing, T tail",
      D: "low aspect ratio straight wing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What happens to the level flight stalling speed given as IAS or CAS as you increase height?",
    choices: {
      A: "remains constantB- increases rapidly",
      B: "effectively constant, then increases",
      C: "effectively constant, then decreases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "At an AUW of 241030 N an aircraft stalls at 133 kt in level flight. At an AUW of 367200 N it will stall at in level flight.",
    choices: {
      A: "89 kt",
      B: "163 kt",
      C: "110 kt",
      D: "180 kt",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is the correct formula relating VS, VA and n?",
    choices: {
      A: "Vs1g = Vavn",
      B: "VA = VS1gvn PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      C: "VA = VS1g x n2",
      D: "VA = VS1g x n",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft with a take off weight of 10000 kg has a basic stalling speed VS of 240 kts. What is the stalling speed as the aircraft turns on to finals with landing flaps extended (CLmax doubles) at 30o AOB at an AUW of 6400 kg?",
    choices: {
      A: "146 kts",
      B: "192 kts",
      C: "240 kts",
      D: "292 kts",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 081-15). The lift augmentation device shown in the figures is a",
    choices: {
      A: "Zap flap",
      B: "Fowler flap",
      C: "Krueger flap",
      D: "Split flap",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 081-15)Which type of flap is shown in the picture?",
    choices: {
      A: "Plain flap",
      B: "Split flap",
      C: "Fowler flap",
      D: "Double slotted flap",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 081-13)The high lift device shown in the figure is a",
    choices: {
      A: "Krueger flap",
      B: "Slat",
      C: "Fowler flap PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "Slotted flap",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 081-12)The high lift device shown in the figure is a",
    choices: {
      A: "Slot or slat",
      B: "Krueger flap",
      C: "Slotted flap",
      D: "Fowler flap",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question:
      "After take-off the slats (when installed) are always retracted later than the flaps. Why?",
    choices: {
      A: "Because SLATS EXTENDED provides a better view from the cockpit than FLAPS EXTENDED",
      B: "Because SLATS EXTENDED gives a large decrease in stall speed with relatively less drag",
      C: "Because VMCA with SLATS EXTENDED is more favourable compared to the FLAPS EXTENDED situation",
      D: "Because FLAPS EXTENDED gives a large decrease in stall speed with relatively less drag",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The trailing edge flaps when extended",
    choices: {
      A: "increase the zero lift angle of attack",
      B: "worsen the best angle of glide",
      C: "significantly increase the angle of attack for maximum lift",
      D: "significantly lower the drag",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the purpose of an auto-slat system?",
    choices: {
      A: "Provide automatically slat IN selection after take-off",
      B: "Extend automatically when a certain value of angle of attack is exceeded",
      C: "Ensures that the slats are always extended when the ground/flight system is in the groundposition",
      D: "Assist the ailerons during rolling PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane has the following flap settings: 0o, 15o, 30o and 45o. Slats can be selected too. Which of the above selections will produce the greatest negative influence on the CL/CD ratio?",
    choices: {
      A: "Flaps from 15o to 30o",
      B: "The slats",
      C: "Flaps from 0o to 15o",
      D: "Flaps from 30o to 45o",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following occurs when trailing edge flaps are extended?",
    choices: {
      A: "The critical angle of attack decreases and CLMAX increases",
      B: "CLMAX increases and the critical angle of attack increases",
      C: "The critical angle of attack is constant, but CLMAX increases",
      D: "The critical angle of attack remains constant and stall speed increases",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which statement is correct?",
    choices: {
      A: "Spoiler extension decreases the stall speed and the minimum rate of descent, but increases theminimum descent angle",
      B: "Extension of flaps will increase (CL/CD) max, causing the minimum rate of descent to decrease",
      C: "Extension of flaps has no influence on the minimum rate of descent, as only the TAS has to betaken into account",
      D: "Extension of flaps causes a reduction of the stall speed, the maximum glide distance alsoreduces",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the effect of deploying leading edge flaps?",
    choices: {
      A: "Decrease CLMAX",
      B: "Decrease the critical angle of attack",
      C: "Not affect the critical angle of attack",
      D: "Increase the critical angle of attack PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Extension of FOWLER type trailing edge lift augmentation devices, will produce",
    choices: {
      A: "a nose-down pitching moment",
      B: "no pitching moment",
      C: "a nose-up pitching moment",
      D: "a force which reduces drag",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Compared with the flap up configuration the maximum angle of attack for the flaps down configuration is",
    choices: {
      A: "unchanged",
      B: "larger",
      C: "smaller",
      D: "smaller or larger depending on flap deflection",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following series of configurations has an increasing critical angle of attack",
    choices: {
      A: "flaps only extended, clean wing, slats only extended",
      B: "Clean wing, flaps only extended, slats only extended",
      C: "slats only extended, clean wing, flaps only extended",
      D: "slats only extended, flaps only extended, clean wing",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When flaps are deployed at constant angle of attack the lift coefficient will",
    choices: {
      A: "remain the same",
      B: "decrease",
      C: "increase",
      D: "vary as the square of IAS",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane with swept back wings is equipped with slats and/or leading edge (L.E) flaps. One possible efficient way to arrange the leading edge devices on the wings is?",
    choices: {
      A: "Wing roots: L.E. flaps Wing tips: no devices",
      B: "Wing roots: slats Wing tips: L.E. flaps",
      C: "Wing roots: slats Wing tips: no devices",
      D: "Wing roots: L.E. flaps Wing tips: slats",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Deflection of leading edge flaps will",
    choices: {
      A: "increase critical angle of attack",
      B: "decrease CLmax",
      C: "decrease drag",
      D: "not affect critical angle of attack",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In order to maintain straight and level flight at a constant airspeed, whilst the flaps are being retracted, the angle of attack will",
    choices: {
      A: "increase",
      B: "decrease",
      C: "remain constant",
      D: "increase or decrease depending on type of flap",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Vortex generators",
    choices: {
      A: "take energy from the laminar flow to induce boundary layer separation",
      B: "use free stream flow to induce laminar flow",
      C: "prevent spanwise flow",
      D: "use free stream flow to increase energy in the turbulent boundary layer",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A deployed slat will",
    choices: {
      A: "decrease the boundary layer energy and decrease the suction peak on the slat, so that CLmax is PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "increase the boundary layer energy and increase the suction peak on the fixed part of the wing,so that the stall is postponed to higher angles of attack",
      C: "increase the boundary layer energy, move the suction peak from the fixed part of the wing to theslat, so that the stall is postponed to higher angles of attack",
      D: "increase the camber of the aerofoil and increase the effective angle of attack, so that CLmax isreached at higher angles of attack",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Vortex generators",
    choices: {
      A: "transfer energy from the free airflow into the boundary layer",
      B: "change the turbulent boundary layer into a laminar boundary layer",
      C: "reduce the spanwise flow on swept wing",
      D: "take kinetic energy out of the boundary layer to reduce separation",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During the extension of the flaps at a constant angle of attack the aeroplane starts to: (all other factors of importance being constant)",
    choices: {
      A: "sink suddenly",
      B: "bank",
      C: "climb",
      D: "yaw",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the most effective flap system?",
    choices: {
      A: "Single slotted flap",
      B: "Split flap",
      C: "Plain flap",
      D: "Fowler flap",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What increases the stalling angle of attack? Use of",
    choices: {
      A: "flaps PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "slats",
      C: "spoilers",
      D: "fuselage mounted speed-brakes",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A plain flap will increase CLmax by",
    choices: {
      A: "increasing the camber of the aerofoil",
      B: "increasing angle of attack",
      C: "boundary layer control",
      D: "centre of lift movement",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Lower the inboard flaps causes the wing Centre of Pressure",
    choices: {
      A: "to move forward",
      B: "to move outboard towards the wing tips",
      C: "to move inboard towards the wing root",
      D: "to move inward and forward",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When a trailing edge flap is lowered fully",
    choices: {
      A: "the C of P moves to the rear and lift/drag ratio is unaffected",
      B: "the C of P moves to the rear and lift/drag ratio is decreased",
      C: "the C of P moves forward and lift/drag ratio is decreased",
      D: "the C of P moves to the rear and lift/drag ratio is increased",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During flap down selection in a continuous straight and level flight at constant IAS and weight",
    choices: {
      A: "the lift coefficient and the drag coefficient increase",
      B: "the centre of pressure moves aft",
      C: "the stall speed increases PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "the total boundary layer becomes laminar",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When flaps are extended in a straight and level flight at constant IAS, the lift coefficient will eventually",
    choices: {
      A: "remain the same",
      B: "increase",
      C: "decrease",
      D: "first increase and then decrease",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A slotted flap will increase the CLmax by",
    choices: {
      A: "increasing the critical angle of attack",
      B: "decreasing the skin friction",
      C: "increasing only the camber of the aerofoil",
      D: "increasing the camber of the aerofoil and improving the boundary layer",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A slat will",
    choices: {
      A: "increase the lift by increasing the wing area and the camber of the af portion of the wing",
      B: "increase the camber of the aerofoil and divert the flow around the sharp leading edge",
      C: "increase the boundary layer energy and prolongs the stall to a higher angle of attack",
      D: "provide a boundary layer suction on the upper side of the wing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During the retraction of the flaps at a constant angle of attack the aeroplane starts to (all other factors of importance being constant)",
    choices: {
      A: "bank",
      B: "sink suddenly",
      C: "climb",
      D: "yaw",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The use of a slot in the leading edge of the wing enables the aeroplane to fly at a slower speed because",
    choices: {
      A: "it changes the camber of the wing",
      B: "the laminar part of the boundary layer gets thicker",
      C: "it decelerates the upper surface boundary layer air",
      D: "it delays the stall to a higher angle of attack",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On a wing fitted with a fowler type trailing edge flap, the Full extended position will produce",
    choices: {
      A: "an unaffected wing area and increase in camber",
      B: "an increase in wing area and camber",
      C: "an unaffected CD, at a given angle of attack",
      D: "an increase in wing area only",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Where on the surface of a typical aerofoil will flow separation normally start at high angles of attack?",
    choices: {
      A: "lower side leading edge",
      B: "upper side trailing edge",
      C: "upper side leading edge",
      D: "lower side trailing edge",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If flaps are deployed at constant IAS in straight and level flight, the magnitude of tip vortices will eventually: (flap span less than wing span)",
    choices: {
      A: "increase",
      B: "remain the same",
      C: "increase or decrease, depending on the initial angle of attack",
      D: "decrease",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Trailing edge flap extension will",
    choices: {
      A: "increase the critical angle of attack and increase the value of CLmax PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      B: "decrease the critical angle of attack and decrease the value of CLmax",
      C: "increase the critical angle of attack and decrease the value of CLmax",
      D: "decrease the critical angle of attack and increase the value of CLmax",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following statements about the difference between Krueger flaps and slats is correct?",
    choices: {
      A: "Deploying a Krueger flap will increase critical angle of attack, deploying a slat does not",
      B: "Deploying a slat will form a slot deploying a Krueger flap does not",
      C: "Deploying a Krueger flap will form a slot, deploying a slat does not",
      D: "Deploying a slat will increase critical angle of attack, deploying a Krueger flap does not",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Deploying a Fowler flap, the flap will",
    choices: {
      A: "just turn down",
      B: "move aft, then turn down",
      C: "turn down, then move aft",
      D: "just move aft",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When spoilers are used as speed brakes",
    choices: {
      A: "at same angle of attack, CL remains unaffected",
      B: "at same angle of attack, CD is increased and CL is decreased",
      C: "CLmax of the polar curve is not affected",
      D: "they do not affect wheel braking action during landing",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When the trailing edge flaps are deflected in level flight, the change in pitch moment will be",
    choices: {
      A: "dependent on c.g. location",
      B: "nose down",
      C: "nose up PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "zero",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which type of flap is shown in the picture?",
    choices: {
      A: "Plain flap",
      B: "Split flap",
      C: "Single slotted flap",
      D: "Fowler flap",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the flaps are lowered but the airspeed is kept constant, to maintain level flight",
    choices: {
      A: "the nose must be pitched down",
      B: "the nose must be pitched up",
      C: "the altitude must be held constant",
      D: "soilers must be deployed",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When deploying the flaps the effective angle of attack",
    choices: {
      A: "decreases",
      B: "remains the same",
      C: "increases",
      D: "may increase of decrease depending on the aircraft type",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The lift coefficient C of a wing at a given angle of attack",
    choices: {
      A: "is dependent on the surface area of the wing",
      B: "is increased by the use of high lift devices",
      C: "is constant and not affected by high lift devices",
      D: "is reduced when high lift devices are used",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The purpose of a fixed spoiler on the leading edge of a wing at the root is to",
    choices: {
      A: "reduce the landing run",
      B: "ensure that the root of the wing stalls before the tip",
      C: "prevent the wing from stalling at the root",
      D: "re-energise the boundary layer thereby delaying the stall (although at a cost of increased fromdrat)",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "CLmax may be increased by the use of",
    choices: {
      A: "flaps",
      B: "slats",
      C: "boundary layer control",
      D: "A, B and C",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Slats",
    choices: {
      A: "de-energise the boundary layer, thereby decreasing the stalling angle of attack",
      B: "re-energise the boundary layer thereby decreasing the stalling angle of attack",
      C: "re-energise the boundary layer thereby increasing the stalling angle of attack",
      D: "de-energise the boundary layer thereby increasing the stalling angle of attack",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Slats",
    choices: {
      A: "increase CLmax",
      B: "decrease the minimum angle of attack",
      C: "both A and B",
      D: "neither A or B",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A slat will",
    choices: {
      A: "increased the camber of the aerofoil and divert the flow around the sharp leading edge",
      B: "prolong the stall to a higher angle of attack",
      C: "increase the lift by increasing the wing area and the camber of the aft portion of the wing",
      D: "provide a boundary layer suction on the upper surface of the wing",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane has the following flap positions: 0o, 15o, 30o, 45oSlats can also be selected. Generally speaking, which selection provides the highest positive contribution to the CLMAX?",
    choices: {
      A: "The flaps from 0o to 15o",
      B: "The flaps from 30o to 45o",
      C: "The slats from the retracted to the take-off position",
      D: "The flaps from 15o to 30o",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Compared with the clean configuration, the angle of attack at CLmax with trailing edge flaps extended is",
    choices: {
      A: "smaller or larger depending on the degree of flap extension",
      B: "larger",
      C: "unchanged",
      D: "smaller",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Extension of leading edge flaps will",
    choices: {
      A: "increase critical angle of attack",
      B: "decrease CLmax",
      C: "decrease drag",
      D: "not affect critical angle of attack",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Flap extension at constant IAS whilst maintaining straight and level flight will increase the",
    choices: {
      A: "stall speed",
      B: "lift coefficient and the drag PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      C: "maximum lift coefficient (CLmax) and the drag",
      D: "lift and the drag",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given the following aeroplane configurations:Clean wingSlats only extendedFlaps only extended Place these configurations in order of increasing critical angle of attack",
    choices: {
      A: "2, 1, 3",
      B: "1, 3, 2",
      C: "3, 1, 2",
      D: "2, 3, 1",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "On a large transport aeroplane, the auto-slat system",
    choices: {
      A: "assist the ailerons",
      B: "provides for automatic slat (retraction after take-off)",
      C: "ensures that the slats are always extended when the ground/flight system is in the groundposition",
      D: "extends the slats automatically when a certain value of angle of attack is exceeded",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Slat extension will",
    choices: {
      A: "increase the critical angle of attack",
      B: "reduce tip vortices",
      C: "create gaps between leading edge and engine nacelles",
      D: "decrease the energy in the boundary layer on the upper side of the wing",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The difference between the effects of slat and flap asymmetry is that:(large in the context of this question means not or hardly controllable by normal use of controls)",
    choices: {
      A: "flap asymmetry causes a large difference in CLmax whereas slat asymmetry causes a large rollingmoment at any speed",
      B: "flap asymmetry causes a large rolling moment whereas slat asymmetry causes a large yawingmoment PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      C: "flap asymmetry causes a large yawing moment whereas slat asymmetry causes a large rolling momentat any speed",
      D: "flap asymmetry causes a large rolling moment at any speed whereas slat asymmetry causes a largedifference in CLmax",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Trailing edge flaps once extended",
    choices: {
      A: "degrade the best angle of glide",
      B: "increase the zero lift angle of attack",
      C: "significantly increase the angle of attack for maximum lift",
      D: "significantly lower the drag",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Upon extension of Fowler flaps whilst maintaining the same angle of attack",
    choices: {
      A: "CL increases, while CD remains unaffected",
      B: "CL and CD increase",
      C: "CD decreases, while the centre of lift shifts aft",
      D: "CL decreases, while the centre of lift shifts forward",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When Fowler type trailing edge flaps are extended at a constant angle of attack, the following changes will occur",
    choices: {
      A: "CL increases and CD remains constant",
      B: "CL increases and the centre of pressure moves forward",
      C: "CL and CD increase",
      D: "CD decreases and the centre of pressure moves aft",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When trailing edge flaps are extended in level flight, the change in pitching moment, ignoring any effects on the tailplane, will be",
    choices: {
      A: "dependent on cg location",
      B: "nose up PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      C: "zero",
      D: "nose down",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When trailing edge flaps are extended whilst maintaining straight and level flight at constant IAS",
    choices: {
      A: "the centre of pressure moves aft",
      B: "the lift coefficient and the drag coefficient increase",
      C: "the stall speed increases",
      D: "the total boundary layer becomes laminar",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A slat is fitted to an aerofoil to",
    choices: {
      A: "reduce the stalling angle",
      B: "delay the stall and so increase the lift",
      C: "increase the drag and so enable the aircraft to fly more slowly",
      D: "increase the speed at which the aircraft stalls",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If flaps are slightly asymmetric this would cause",
    choices: {
      A: "a roll to a given bank angle which may be correctable with rudder",
      B: "a steady rate of roll which may be correctable with ailerons",
      C: "a steady rate of pitch which may be correctable with elevators",
      D: "a roll to a given bank angle which may be correctable with ailerons",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Because of the reduction in Cl when flaps are raised, to maintain a constant lift force",
    choices: {
      A: "the angle of attack must be decreased",
      B: "the angle of attack must be increased",
      C: "the angle of attack must remain the same",
      D: "the nose of the aircraft should be lowered PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The purpose of vortex generators is",
    choices: {
      A: "to delay stall by reducing boundary layer separation",
      B: "to increase the lift of the wing",
      C: "to counteract the effect of the wing tip vortices",
      D: "to delay the stall by reducing the kinetic energy of the boundary layer",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the increased downwash at the tail plane due to lowering trailing edge flaps is considered in isolation",
    choices: {
      A: "a nose up pitching moment will be generated",
      B: "a nose down pitching moment will be generated",
      C: "the direction of the pitch change will depend on the initial direction of the tail load",
      D: "tail plane angle of attack will be increased, causing a nose up pitching moment",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Split flaps have the characteristic of",
    choices: {
      A: "increasing the lift and decreasing the drag for take-off",
      B: "increasing the drag without appreciable increase in lift when moved from intermediate to fullydown",
      C: "changing the main plane area and thus reducing the wing loading",
      D: "allowing optimum wing flexing",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the trailing edge flaps are lowered and IAs kept constant, to maintain level flight",
    choices: {
      A: "the nose must be lowered and thrust increased",
      B: "the nose must be raised and thrust increased",
      C: "attitude and thrust must be kept constant",
      D: "attitude must be increased and thrust increased",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A slat is",
    choices: {
      A: "a leading edge high lift device, hinged at its forward edge, which increases the camber andleading edge radius of the main aerofoil when deployed",
      B: "a trailing edge device which is automatically deployed by movement of the stagnation point athigh angles of attack",
      C: "an auxiliary, cambered aerofoil positioned forward of the main aerofoil so as to form a slot",
      D: "a fixed slot in the leading edge of some older types of aircraft",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Vortex generators are fitted in front of control surfaces to",
    choices: {
      A: "tip stall at low speed for better handling",
      B: "re-energise the boundary layer",
      C: "prevent control surface flutter",
      D: "increase the effective angle of attack",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A Krueger flap is",
    choices: {
      A: "part of the upper surface of the leading edge, which moves forward",
      B: "part of the lower surface of the leading edge, hinged at its forward edge",
      C: "a flap which extends rearward from the trailing edge",
      D: "a flap which extends from the upper surface of the wing, to increase drag",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The type of flap which extends backwards from the trailing edge as its lowered is",
    choices: {
      A: "a split flap",
      B: "a Krueger flap",
      C: "a Fowler flap",
      D: "a Lower flap",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A low wing monoplane has its tail plane mounted on the top of the fin. When the Fowler flaps deploy the aircraft will",
    choices: {
      A: "tend to pitch nose up",
      B: "tend to pitch nose down",
      C: "tend to remain in a level attitude",
      D: "lose altitude and pitch nose up",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Because of the reduction in Cl when the flaps are raised in flight to maintain level flight, the angle of attack",
    choices: {
      A: "would have to be decreased",
      B: "would have to be increased",
      C: "would be required to remain the same",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If flaps are raised in flight while speed and attitude are kept constant",
    choices: {
      A: "the aircraft will gain height",
      B: "the aircraftg will sink",
      C: "the aircraft will maintain height",
      D: "the aircraft will stall",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The type of flap that increases wing area is",
    choices: {
      A: "a split flap",
      B: "a fowler flap",
      C: "a Plain flap",
      D: "a Slotted flap",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An automatic leading edge slat is operated by",
    choices: {
      A: "an automatic speed controlled switch",
      B: "a switch controlled by the pilot PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      C: "aerodynamic forces acting on the leading edge",
      D: "changes in dynamic pressure acting on the stagnation point",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "One of the main functions of flaps during an approach andlanding is to",
    choices: {
      A: "decrease the angle of descent without increasing the airspeed",
      B: "provide the same amount of lift at a slower speed",
      C: "decrease lift, thus enabling a steeper than normal approach to be made",
      D: "increase lift more than drag",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If trailing edge flaps are lowered asymmetrically, this will cause",
    choices: {
      A: "a nose up pitching moment",
      B: "a nose down pitching moment",
      C: "a rolling moment",
      D: "a yawing moment",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When considering a high speed jet, if flaps are selected down at a speed greater than Vfe",
    choices: {
      A: "the flaps will move to the selected position, causing structural damage",
      B: "flap movement will be prevented by the flap load relief system",
      C: "the flap selector lever cannot be moved because it is locked in position by a solenoid at thesespeeds",
      D: "the flaps will stall and a violent nose up pitch will result",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What would be the effect of taking off with full flaps deployed?",
    choices: {
      A: "acceleration would not be affected and the TOD would be shorter than normal",
      B: "acceleration would be reduced and the attitude required to climb would be more nose down thannormal PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      C: "acceleration would be reduced because of the extra drag and climb ability would be improvedbecause of the extra lift",
      D: "acceleration would be less, TOD would be less and climb gradient would be improved",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When flaps are lowered, the downwash behind the wing",
    choices: {
      A: "decreases and gives a decrease of tailplane effective AOA",
      B: "increases and gives an increase of tailplane effective AOA",
      C: "decreases and gives an increase of tailplane effective AOA",
      D: "increases and gives a decrease of tailplane effective AOA",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When a Fowler flap moves rearwards the wing area",
    choices: {
      A: "increases and camber increases",
      B: "decreases and camber decreases",
      C: "is unaffected as is the camber",
      D: "increases and camber decreases",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What effect has a plain flap on Cl?",
    choices: {
      A: "increase camber",
      B: "increases angle of attack",
      C: "changes position of CP",
      D: "decreases the aspect ratio",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In order to maintain straight and level flight when trailing edge flaps are retracted, the angle of attack must",
    choices: {
      A: "be increased or decreased depending on type of flap",
      B: "be decreased",
      C: "be increased PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      D: "stay the same because the lift requirement will be the same",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On a highly swept back wing with leading edge flaps and leading edge slats, which device would be fitted in the following locations?",
    choices: {
      A: "slats inboard/flaps outboard",
      B: "slats outboard/flaps inboard",
      C: "alternating slats and flaps",
      D: "no preferred positions",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The increased upwash experienced at the leading edge of a wing when trailing edge flaps are lowered causes",
    choices: {
      A: "An increase in the angle of attack",
      B: "A rearwards movement of the C of G",
      C: "A forward movement of the C of P",
      D: "A reduction in CLMAX",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Spoiler deflection causes",
    choices: {
      A: "an increase in lift and drag",
      B: "an increase in lift only",
      C: "an increase indrag and decrease in lift",
      D: "decrease in lift and drag",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is the most important result/problem caused by ice formation?",
    choices: {
      A: "Increased drag",
      B: "Increased weight",
      C: "Blockage of the controls",
      D: "Reduction in CLMAX",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Upon extension of a spoiler on a wing",
    choices: {
      A: "only CL is decreased (CD remains unaffected)",
      B: "CD is increased and CL is decreased",
      C: "both CL and CD are increased",
      D: "CD is increased, while CL remains unaffected",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 081-01)Which point shown in the figure corresponds with CL for minimum horizontal flight speed?",
    choices: {
      A: "Point C",
      B: "Point D",
      C: "Point A",
      D: "Point B",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Spoiler extension causes",
    choices: {
      A: "an increase in drag and decrease in lift",
      B: "an increase in lift and drag",
      C: "an increase in lift only",
      D: "decrease in lift and drag",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When roll spoilers are extended, the part of the wing on which they are mounted",
    choices: {
      A: "stalls. This causes a difference in lift between both wings, which generates the desiredrolling moment",
      B: "experiences extra drag, which generates a yawing moment. The speed difference between bothwings generates the desired rolling moment",
      C: "experiences a reduction in lift, which generates the desired rolling moment. In additionthere is a local increase in drag, which suppresses adverse yaw",
      D: "is forced downwards as a reaction to the increased drag",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which statement is correct?",
    choices: {
      A: "Flap extension reduces the maximum lift/drag ratio thus reducing the minimum rate of descent",
      B: "Spoiler extension increases the stallspeed, the minimum rate of descent and the minimum angle ofdescent",
      C: "Flap extension reduces the stallspeed, which increases the maximum glide distance",
      D: "flap extension has no effect on the minimum rate of descent s this is only affected by TAS",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When airbrakes are deployed",
    choices: {
      A: "the minimum drag speed will reduce",
      B: "the minimum drag speed will remain the same",
      C: "the lift/drag ratio will remain constant",
      D: "the minimum drag speed will increase",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Spoiler surfaces on the top surface of a wing when operated symmetrically",
    choices: {
      A: "are used to trim the aircraft",
      B: "are for use on landing only, to reduce speed",
      C: "may be used as airbrakes in flight",
      D: "cannot be used as airbrakes in flight because of excessive buffeting",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The primary purpose of wing spoilers is to decrease",
    choices: {
      A: "landing speed",
      B: "the lift of the wing",
      C: "the drag",
      D: "lift and drag",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The result of spoiler surfaces deploying are",
    choices: {
      A: "lift and drag increases",
      B: "lift and drag decreases",
      C: "lift increases and drag decreases",
      D: "drag increases and lift decreases",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The transition point located on the wing is the point where¿",
    choices: {
      A: "airflow starts separating from the wing",
      B: "the boundary layer changes from laminar flow to turbulent flow",
      C: "the static pressure reaches its highest value",
      D: "the airflow changes from subsonic to supersonic flow",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A laminar boundary layer is and has drag than a turbulent layer",
    choices: {
      A: "thick; more",
      B: "thick; less",
      C: "thin; more",
      D: "thin; less",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The boundary layer is considered to be turbulent",
    choices: {
      A: "Just in front of the transition point",
      B: "Between the transition and separation points",
      C: "Just aft of the separation point",
      D: "Just in front of the centre of pressure",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "There are two types of boundary layer: laminar and turbulent. One important advantage the turnbulent boundary layer has over the laminar type is that",
    choices: {
      A: "skin friction drag is less",
      B: "it is thinner PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
      C: "it has less tendency to separate from the surface",
      D: "energy is less",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The advantage of a turbulent boundary layer over a laminar boundary layer is",
    choices: {
      A: "decreases energy",
      B: "thinner",
      C: "increased skin friction",
      D: "less tendency to separate",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which boundary layer, when considering its velocity profile perpendicular to the flow, has the greatest change in velocity close to the surface?",
    choices: {
      A: "No difference",
      B: "Laminar boundary layer",
      C: "Turbulent boundary layer",
      D: "The boundary layer in the transition between turbulent and laminar",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When considering the properties of a laminar and turbulent boundary layer, which of the following statements is correct?",
    choices: {
      A: "friction drag is the same",
      B: "friction drag higher in laminar",
      C: "friction drag higher in turbulent",
      D: "separation point ismost forward with a turbulent layer",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When comparing the properties of laminar and turbulent boundary layers, which of the following statements is correct?",
    choices: {
      A: "the separation point is further aft in the laminar layer",
      B: "friction drag is the same in both layers",
      C: "friction drag is lower in the turbulent layer",
      D: "friction drag is lower in the laminar layer PRINCIPLES OF FLIGHT SUBSONIC AERODYNAMICS - The two-dimensional airflow about an aerofoil",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In which phase of the take-off is the aerodynamic effect of ice located on the wing leading edge most critical?",
    choices: {
      A: "The last part of the rotation",
      B: "The take-off run",
      C: "During climb with all engines operating",
      D: "All phases of the take-off are equally critical",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which is the most critical phase regarding ice on a wing leading edge?",
    choices: {
      A: "During the take off run",
      B: "The last part of rotation",
      C: "Climb with all engines operating",
      D: "All phases are equally important",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "While flying under icing conditions, the largest ice build-up will occur, principally, on",
    choices: {
      A: "the upper and lower surfaces on the rear of the wing",
      B: "the frontal areas of the aircraft",
      C: "the upper and lower rudder surfaces",
      D: "the pitot and static probes only",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the static pressure prot iced over while descending from altitude, the ASI would read",
    choices: {
      A: "zero",
      B: "high",
      C: "low",
      D: "correctly",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which is the effect of ice, snow or frost formation on an aeroplane?",
    choices: {
      A: "decreased angle of attack for the stall",
      B: "decreased stall speed",
      C: "increased tendency to be stable in roll",
      D: "increased angle of attack for stall",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Reducing the thickness/chord ratio on a wing will",
    choices: {
      A: "reduce the transonic variations in drag coefficient",
      B: "reduce the transonic variations in lift coefficient",
      C: "delay the onset of shockwave formation",
      D: "all of the above",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "The Mach cone semi-angle",
    choices: {
      A: "decreases with increasing speed",
      B: "increases with increasing speed",
      C: "decreases up to a certain speed, then increases",
      D: "remains constant at all speeds above MCRIT",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Which of the following flight phenomena can happen at Mach Numbers below the critical Mach number?",
    choices: {
      A: "Dutch roll",
      B: "Tuck under",
      C: "Mach buffet",
      D: "Shock stall",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "The formula for the Mach Number is: (a = speed of sound) is?",
    choices: {
      A: "M = TAS*a PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "M = a/TAS",
      C: "M = TAS/a",
      D: "M = IAS/a",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "The speed of sound is affected by the",
    choices: {
      A: "pressure of the air",
      B: "density of the air",
      C: "temperature of the air",
      D: "humidity of the air",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "If the altitude is increased and the TAS remains constant in the standard troposphere the Mach Number will",
    choices: {
      A: "not change",
      B: "decrease",
      C: "increase",
      D: "increase or decrease, depends on the type of aeroplane",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "An aeroplane is descending at a constant Mach number from FL 350. What is the effect on true airspeed?",
    choices: {
      A: "It remains constant",
      B: "It decreases as pressure increases",
      C: "It decreases as altitude decreases",
      D: "It increases as temperature increases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "The two areas of speed instability in transonic aircraft are",
    choices: {
      A: "above VDmin, above M 0.4",
      B: "below VDmin, M 0.89 to 0.98",
      C: "above VDmin, M 0.75 to 0.81 PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "below VDmin, above M 1.0",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "As an aircraft accelerates through the transonic speed range",
    choices: {
      A: "The coefficient of drag increases then decreases",
      B: "The coefficient of drag increases",
      C: "The coefficient of drag decreases then increases",
      D: "The coefficient of drag decreases",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "The Mach number",
    choices: {
      A: "increases at a given TAS when the temperature rises",
      B: "is the ratio between the TAS of the aeroplane and the speed of sound at sea level",
      C: "is the ratio between the IAS of the aeroplane and the local speed of sound",
      D: "is the ratio between the TAS of the aeroplane and the local speed of sound",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Compared to a noarmal transonic airfoil section a supercritical section has",
    choices: {
      A: "a more cambered top surface",
      B: "a flatter to surface",
      C: "a flatter bottom surface",
      D: "a very sharp leading edge",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "Shock stall is",
    choices: {
      A: "separation of the flow behind the bow wave",
      B: "separation of the boundary layer behind the shock wave",
      C: "separation of the flow at high angles of attack and at high Mach Numbers",
      D: "separation of the flow at the trailing edge of the wing at high Mach Numbers",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "In the transonic range the aeroplane characteristics are strongly determined by",
    choices: {
      A: "the CAS",
      B: "the TAS",
      C: "the IAS",
      D: "the Mach Number",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Should a transport aeroplane fly at a higher Mach number than the buffet-onset Mach number?",
    choices: {
      A: "Yes, but only during approach",
      B: "Yes, this causes no problems",
      C: "No, this is not acceptable",
      D: "Yes, if you want to fly fast at very high altitudes",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "A shock stall occurs when laminar flow breaks down",
    choices: {
      A: "behind the shock wave",
      B: "behind the trailing edge",
      C: "behind the leading edge",
      D: "at a high angle of attack and high Mach number",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "Climbing at a constant Mach Number up to FL 350 the TAS will",
    choices: {
      A: "decrease",
      B: "first increase, then decrease",
      C: "increase",
      D: "remain constant",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "In the transonic range CLmax will and the 1g stalling speed will",
    choices: {
      A: "decrease, increase PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "decrease, decrease",
      C: "increase, decrease",
      D: "increase, increase",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "The Mach trim system will",
    choices: {
      A: "pump the fuel from tank to tank, depending on the Mach Number",
      B: "keep the Mach Number automatically constant",
      C: "adjust the stabilizer, depending on the Mach Number",
      D: "adjust the elevator trim tab, depending on the Mach Number",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "The flight Mach number is 0.8 and the TAS is 400 kts. The speed of sound is",
    choices: {
      A: "480 kts",
      B: "320 kts",
      C: "500 kts",
      D: "600 kts",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "On a typical symmetrical airfoil, as the free stream Mach number approaches M 1.0, the centre of pressure will",
    choices: {
      A: "move from 25% chord to the leading edge",
      B: "move forward to about 25% chord",
      C: "move aft to about 45% chord",
      D: "move aft to the trailing edge",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "On a typical transonic airfoil the transonic rearward shift of the CP occurs at about",
    choices: {
      A: "M 0.75 to M 0.98",
      B: "M 0.81 to M 1.4",
      C: "M 0.75 to M 0.89 PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "M 0.89 to M 0.98",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "To be able to predict compressibility effects you have to determine the",
    choices: {
      A: "IAS",
      B: "EAS",
      C: "TAS",
      D: "Mach Number",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "A jet aeroplane is cruising at high altitude with a Mach-number, that provides a buffet margin of 0.3g incremental. In order to increase the buffet margin to 0.4g incremental the pilot must",
    choices: {
      A: "fly at a lower altitude and the same Mach-number",
      B: "extend the flaps to the first selection",
      C: "fly at a higher Mach-number",
      D: "fly at a larger angle of attack",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "Which statement with respect to the speed of sound is correct?",
    choices: {
      A: "Varies with the square root of the absolute temperature",
      B: "Increases always if the density of the air decreases",
      C: "Is independent of altitude",
      D: "Doubles if the temperature increases from 9o to 36o Centigrade",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Assuming ISA conditions, climbing at a constant Mach Number up the tropopause the TAS will",
    choices: {
      A: "first increase, then decrease",
      B: "decrease",
      C: "increase",
      D: "remain constant",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "During a climb at a constant IAS, the Mach number will",
    choices: {
      A: "remain constant",
      B: "decrease initially and increase subsequently",
      C: "increase",
      D: "increase initially and remain constant subsequently",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "The Mach number is the ratio between the",
    choices: {
      A: "TAS of the aeroplane and the speed of sound at sea level",
      B: "TAS of the aeroplane and speed of sound of the undisturbed flow",
      C: "IAS of the aeroplane and the speed of sound of the undisturbed flow",
      D: "IAS of the aeroplane and the speed of sound at sea level",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "Transonic speed is",
    choices: {
      A: "a speed at which locally around the aeroplane both supersonic and subsonic speeds exist",
      B: "a speed at which locally an oblique shock wave has developed in the flow along the aeroplane",
      C: "a speed at which compressibility effects are first noticeable",
      D: "the speed range between Mcrit and MMO",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "An aircraft flying at 0.5M would be flying at",
    choices: {
      A: "half the speed of sound at ground level only",
      B: "half the speed of sound at the tropopause only",
      C: "half the speed of sound under all conditions in the atmosphere",
      D: "half the speed of sound at sea level only",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "The Mach number corresponding to a given TAS will",
    choices: {
      A: "be greater if temperature increases PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "be less if temperature increases",
      C: "be the same at all temperatures",
      D: "temperature does not affect the mach number because it is a ratio",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "For a constant flight level and IAS, if the OAT increases, the Mach number will",
    choices: {
      A: "increase",
      B: "decrease",
      C: "remain constant",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "The mach number will remain constant if the OAT increases whilst an aircraft is flying at a constant flight level and CAS because",
    choices: {
      A: "when flying at a constant flight level the aircraft will change height as the actual pressure ofthe atmosphere changes, thus maintaining the same TAS and speed of sound",
      B: "the speed of sound and the TAS both increase with the square root of the absolute temperature ofthe air",
      C: "the aircraft is flying above the tropopause, where the air temperature remains constant, and theTAS will remain the same if the CAS remains constant",
      D: "the mach meter has become unserviceable, if the air temperature increases the speed of soundwill increase",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "Vmo can be exceeded in a descent at a constant mach number because",
    choices: {
      A: "Vmo is an IAS and descending at a constant mach will require a decrease in TAS which will reducedynamic pressure",
      B: "as altitude is reduced the speed of sound will increase which increases IAs",
      C: "as altitude decreases the ASI will start to under-read due to the increasing air density",
      D: "Vmo is an IAS and descending at a constant mach will require an increase in TAS which willincrease dynamic pressure",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "An aircraft is descending at a constant mach number, which of the following operational speed limitations may be exceeded?",
    choices: {
      A: "Vmo",
      B: "Vne",
      C: "Mmo",
      D: "Vd",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "The speed of sound is affected by the",
    choices: {
      A: "density",
      B: "humidity",
      C: "pressure",
      D: "temperature",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "What happens to mach number if IAS is increased when flying at FL390?",
    choices: {
      A: "remain constant",
      B: "increase",
      C: "decrease",
      D: "depends on the OAT",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "The local speed of sound",
    choices: {
      A: "is independent of altitude",
      B: "will double if temperature varies from 9o to 36o",
      C: "is dependent on the square root of the absolute temperature",
      D: "decreases with increasing density",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "In a steady climb",
    choices: {
      A: "At a steady IAS, Mach number remains constant because Mach number is only proportional to TASand inversely proportional to the local speed of sound PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "At steady IAS, Mach number will increase",
      C: "At a steady IAS, Mach number will remain constant because the local speed of sound isproportional to the square root of the absolute temperature",
      D: "At a steady IAS, Mach number will decrease because the absolute temperature will decrease",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "Shockwaves at MFS above MDET will be",
    choices: {
      A: "Sufficient to slow the local airflow to subsonic values",
      B: "Normal",
      C: "Oblique",
      D: "Detached",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "At what speed does the front of a shock wave move across the earth¿s surface?",
    choices: {
      A: "The speed of sound at ground level",
      B: "The ground speed of the aeroplane",
      C: "The speed of sound at flight level",
      D: "The true air speed of the aeroplane",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "When air has passed an expansion wave, the static pressure is",
    choices: {
      A: "decreased or increased, depending on Mach Number",
      B: "decreased",
      C: "increased",
      D: "unchanged",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "When air has passed through a shock wave the speed of sound is?",
    choices: {
      A: "decreased",
      B: "not affected PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "increased",
      D: "decreased and beyond a certain Mach number start increasing again",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "Compared with an oblique shock wave at the same Mach number a normal shock wave has a",
    choices: {
      A: "smaller compression",
      B: "higher expan sion",
      C: "higher compression",
      D: "smaller expansion",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "At higher altitudes, the stall speed (IAS)",
    choices: {
      A: "decreases until the tropopause",
      B: "decreases",
      C: "remains the same",
      D: "increases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "The buffet margin",
    choices: {
      A: "increases during a descent with a constant IAS",
      B: "is always greatest after a stepclimb has been executed",
      C: "decreases during a descent with a constant Mach number",
      D: "is always positive at Mach numbers below MMO",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "Vortex generators on the upper side of the wing surface will",
    choices: {
      A: "decrease the intensity of shock wave induced air separation",
      B: "increase the critical Mach Number",
      C: "decrease the span wise flow at high Mach Numbers",
      D: "increase the magnitude of the shock wave PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Tuck under is caused by (i) which movement of the centre of pressure of the wing and (ii) which change of the downwash angle at the location of the stabilizer",
    choices: {
      A: "(i) forward (ii) increasing",
      B: "(i) forward (ii) decreasing",
      C: "(i) aft (ii) increasing",
      D: "(i) aft (ii) decreasing",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "The least energy loss through a normal shockwave occurs when the local Mach number is",
    choices: {
      A: "well above 1.0 M",
      B: "just above 1.0 M",
      C: "just below 1.0 M",
      D: "exactly 1.0 M",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "When the air has passed through a normal shock wave the Mach number is?",
    choices: {
      A: "Higher than before",
      B: "Loer than before but still greater than 1",
      C: "Equal to 1",
      D: "Less than 1",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "In the transonic range lift will decrease at the shock stall due to the",
    choices: {
      A: "first appearance of a shock wave at the upper side of the wing",
      B: "attachment of the shock wave on the trailing edge of the wing",
      C: "separation of the boundary layer at the shock waves",
      D: "appearance of the bow wave",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "Shock induced separation results in",
    choices: {
      A: "constant lift",
      B: "decreasing lift",
      C: "increasing lift",
      D: "decreasing drag",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "The high speed buffet is induced by",
    choices: {
      A: "a shift of the centre of gravity",
      B: "boundary layer control",
      C: "expansion waves on the wing upper side",
      D: "boundary layer separation due to shock waves",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "For minimum wave drag, an aircraft should be operated at which of the following speeds?",
    choices: {
      A: "Mach 1.0",
      B: "High supersonic",
      C: "Low supersonic",
      D: "Subsonic",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "What data may be obtained from the Buffet Onset Boundary chart?",
    choices: {
      A: "The values of MMO at different weights and altitudes",
      B: "The values of the Mach Number at which low speed and Mach Buffet occur at different weights andaltitudes",
      C: "The values of Mcrit at different weights and altitudes",
      D: "The values of the Mach Number at which low speed and shock-stall occur at different weights andaltitudes",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "If an aeroplane is flying at transonic speed with increasing Mach number the shock wave on the upper side of the wing",
    choices: {
      A: "moves into leading edge direction",
      B: "moves into trailing edge direction",
      C: "stays all the time at the same position",
      D: "disappears",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "Which statement is correct about a normal shock wave?",
    choices: {
      A: "The airflow expands when passing the aerofoil",
      B: "The airflow changes direction",
      C: "The airflow changes from subsonic to supersonic",
      D: "The airflow changes from supersonic to subsonic",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "The loss of total pressure in a shock wave is due to the fact that",
    choices: {
      A: "the friction in the boundary layer is higher",
      B: "the speed reduction is too high",
      C: "the static pressure decrease is comparatively high",
      D: "kinetic energy in the flow is changed into heat energy",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "Tuck under will happen",
    choices: {
      A: "only above the critical Mach number",
      B: "only at the critical Mach number",
      C: "only below the critical Mach number",
      D: "above or below the critical Mach number depending on the angle of attack",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "When the Mach number is slowly increased in straight and level flight the first shockwaves will occur",
    choices: {
      A: "on the underside of the wing PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "at the wing root segment, upperside",
      C: "somewhere on the fin",
      D: "somewhere on the horizontal tail",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "Vortex generators mounted on the upper wing surface will",
    choices: {
      A: "decrease the shock wave induced separation",
      B: "decrease the interference drag of the trailing edge flaps",
      C: "decrease the stalling speed by increase of the tangential velocity of the swept wing",
      D: "increase the effectiveness of the spoiler due to increase in parasite drag",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Compared with an oblique shock wave at the same Mach number a normal shock wave has a",
    choices: {
      A: "higher total temperature",
      B: "higher total pressure",
      C: "higher loss in total pressure",
      D: "lower static temperature",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "Which kind of flow separation occurs at the smallest angle of attack?",
    choices: {
      A: "shock stall",
      B: "high-speed stall",
      C: "low-speed stall",
      D: "deep stall",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Just above the critical Mach number the first evidence of a shock wave will appear at the",
    choices: {
      A: "upper side of the wing",
      B: "lower side of the wing",
      C: "leading edge of the wing PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "trailing edge of the wing",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "A normal shock wave",
    choices: {
      A: "is a discontinuity plane in an airflow, in which the pressure drops suddenly",
      B: "is a discontinuity plane in an airflow, in which the temperature drops suddenly",
      C: "can occur at different points on the aeroplane in transonic flight",
      D: "is a discontinuity plane in an airflow, which is always normal to the surface",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "The application of the area rule on aeroplane design will decrease the",
    choices: {
      A: "wave drag",
      B: "skin friction drag",
      C: "induced drag",
      D: "form drag",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Air passes a normal shock wave. Which of the following statements is correct?",
    choices: {
      A: "The temperature increases",
      B: "The pressure decreases",
      C: "The temperature decreases",
      D: "The velocity increases",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 081-19)In 1G level flight at FL340 and at an aircraft weight of 110.000 kg and a CG at 35% MAC your low speed and high speed buffet boundaries will be",
    choices: {
      A: "M 0.54; M 0.82",
      B: "M 0.60; M 0.78",
      C: "M 0.49; MMO",
      D: "M 0.54; M 0.84",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 081-05)At an aircraft weight of 70.000 lbs your aerodynamic ceiling in 1G level flight will be",
    choices: {
      A: "FL320",
      B: "FL390",
      C: "FL420",
      D: "FL440",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "When the air is passing through a shock wave the static temperature will",
    choices: {
      A: "increase",
      B: "decrease",
      C: "stay constant",
      D: "decrease and beyond a certain Mach number start increasing again",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "When the air is passing through a shock wave the density will",
    choices: {
      A: "decrease and beyond a certin Mach number start increasing again",
      B: "decrease",
      C: "stay constant",
      D: "increase",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "At what speed does a shock wve move forward over the ground?",
    choices: {
      A: "Speed of sound at ground level",
      B: "Flight level airspeed",
      C: "Aircraft ground speed",
      D: "Aircraft TAS",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "Which of the following flight phenomena can only happen at Mach Numbers above the critical Mach Number?",
    choices: {
      A: "Elevator stall PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "Mach buffet",
      C: "Dutch roll",
      D: "Speed instability",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "In transonic flight the ailerons will be less effective than in subsonic flight because",
    choices: {
      A: "behind the shock wave pressure is lower",
      B: "aileron down deflection moves the shock wave forward",
      C: "aileron deflection only affects the air in front of the shock wave",
      D: "aileron deflection only partly affects the pressure distribution around the wing",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "When an aeroplane is flying through the transonic range with increasing Mach Number the centre of the pressure of the wing will move aft. This requires",
    choices: {
      A: "much more thrust from the engine",
      B: "a higher IAS to compensate the nose down effect",
      C: "a pitch up input of the stabilizer",
      D: "a stability augmentation system",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "A jet aeroplane cruises buffet free at constant high altitude. Which type of stall is most likely to occur if this aeroplane decelerates during an inadvertent increase in load factor?",
    choices: {
      A: "Low speed stall",
      B: "Accelerated stall",
      C: "Shock stall",
      D: "Deep stall",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "A normal shock wave is a discontinuity plane",
    choices: {
      A: "across which the pressure drops suddenly",
      B: "across which the temperature drops suddenly",
      C: "that is always normal to the local flow PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "that is always normal to the surface",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "Critical Mach number is the free stream Mach number at which",
    choices: {
      A: "there is supersonic flow over all parts of the aeroplane",
      B: "there is subsonic flow over all parts of the aeroplane",
      C: "local supersonic flow first exists on any part of the aeroplane",
      D: "the aeroplane has zero buffet margin",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "From the buffet onset graph of a given jet transport aeroplane it is determined that at FL 310 at a given mass buffet free flight is possible between M = 0.74 and M = 0.88. In what way would these numbers change if the aeroplane is suddenly pulled up?",
    choices: {
      A: "Both Mach numbers decrease",
      B: "The lower Mach number decreases and the higher Mach number increases",
      C: "The lower Mach number increases and the higher Mach number decreases",
      D: "Both Mach numbers increase",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "Mach buffet occurs",
    choices: {
      A: "directly after exceeding Mcrit",
      B: "when the Mach number has increased to Mcrit",
      C: "at the Mach number at which shock wave indiced boundary layer separation occurs",
      D: "when the stall angle of attack is exceeded",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "Some aeroplanes have a waist or coke bottle contoured fuselage. This is done to",
    choices: {
      A: "increase the strength of the wing root junction",
      B: "apply area rule",
      C: "fit the engine intakes better to the fuselage",
      D: "improve the low speed characteristics PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "The critical Mach number of an aerofoil is the free stream Mach number at which",
    choices: {
      A: "a shock wave appears on the upper surface",
      B: "the maximum operating temperature is reached",
      C: "sonic speed (M=1) is first reached on the upper surface",
      D: "a supersonic bell appears on the upper surface",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "To increase the critical Mach number a conventional aerofoil should",
    choices: {
      A: "have a low thicknedss to chord ratio",
      B: "have a large camber",
      C: "be used with a high angle of attack",
      D: "have a large leading edge radius",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "When the Mach number is slowly increased in straight and level flight the first shock waves will occur",
    choices: {
      A: "on the lower surface of the wing",
      B: "on the upper surface at the wing root",
      C: "somewhere on the fin",
      D: "somewhere on the horizontal tail",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "Which statement is correct regarding a shock wave on a lift generating wing?",
    choices: {
      A: "It is located at the greatest wing thickness when the aeroplane reaches the speed of sound",
      B: "It reaches its highest strength when flying at the critical Mach number",
      C: "It moves forward when the Mach number is increased",
      D: "It moves slightly aft when an aileron is deflected downward",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Whilst flying at a constant IAS and at n = 1, as the aeroplane mass decreases the value of Mcrit",
    choices: {
      A: "decreases",
      B: "remains constant",
      C: "is independent of the angle of attack",
      D: "increases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "What is the free stream Mach number which produces first evidence of local sonic flow?",
    choices: {
      A: "the transonic mach number",
      B: "the critical mach number",
      C: "M 1.0",
      D: "Mmo",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "At Mcrit, a shockwave will appear first",
    choices: {
      A: "at the leading edge",
      B: "near to the point of maximum wing thickness",
      C: "at the trailing edge",
      D: "on the underside of the wing",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "The critical Mach number is",
    choices: {
      A: "the mach number when the aircraft reaches the speed of sight",
      B: "the mach number when a shock wave forms at the leading edge",
      C: "the aircraft's mach number when the airflow reaches the speed of sound at some point on theaircraft",
      D: "the maximum speed at which the aircraft is permitted to fly during normal operations",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "At speeds just above the critical mach number, the drag coefficient",
    choices: {
      A: "will start to increase",
      B: "will start to decrease",
      C: "will remain constant",
      D: "is inversely proportional to the Mach number",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "At speeds just above the critical mach number the L/D ratio will",
    choices: {
      A: "increase",
      B: "decrease",
      C: "remain the same",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "The effect of a shock wave on control surface hinge moment will be",
    choices: {
      A: "none on powered flying controls, reversal on manual controls",
      B: "none, the shock wave forms forward of the flying control surfaces",
      C: "stalling of the control surfaces",
      D: "rapid fluctuation of hinge moments, causing a high frequency buzz",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "With increasing mach number the CP moves",
    choices: {
      A: "remains stationary",
      B: "forwards",
      C: "rearwards",
      D: "rearwards initially, then moves forward to a position in front of the leading edge",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "The local airflow after passing through a normal shockwave is",
    choices: {
      A: "more than mach 1",
      B: "less than mach 1",
      C: "exactly mach 1 PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "initially more than mach 1 then decreasing to mach 1",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "What causes a large increase in drag at high transonic speed?",
    choices: {
      A: "an increase in parasite drag due to shockwave formation",
      B: "an increase in induced drag due to shockwave formation",
      C: "the reduction is thrust due to shockwave formation",
      D: "wave drag",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "In the transonic range, lift will decrease when shock stall occurs, because",
    choices: {
      A: "of the separation of the boundary layer at the shock wave",
      B: "of the attachment of the shock wave on the trailing edge of the wing",
      C: "of the appearance of the bow wave",
      D: "Mcrit is reached",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "A normal shockwave causes the airflow to",
    choices: {
      A: "expand as it passes the aerofoil",
      B: "change direction",
      C: "change from subsonic to supersonic",
      D: "change from supersonic to subsonic",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "What is the effect of weight on Mcrit at a constant IAS?",
    choices: {
      A: "increase",
      B: "decrease",
      C: "increase with decreasing angle of attack",
      D: "decrease with increasing angle of attack",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "A normal shock wave is",
    choices: {
      A: "a discontinuity plane which is always normal to the surface",
      B: "develops anytime an aircraft is in the transonic range",
      C: "a discontinuity plane where pressure changes",
      D: "none of the above",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "How does an aircraft with swept wings behave due to shock stall?",
    choices: {
      A: "nose down",
      B: "nose up",
      C: "nose remains in neutral position",
      D: "it depends on the OAT",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "Increasing speed above Mcrit on a swept wing could cause",
    choices: {
      A: "buffeting and nose pitch up",
      B: "increased lift requiring high speed tuck",
      C: "structural failure of the wing due to shock wave formation",
      D: "buffeting and nose down pitch",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Which of the following is the correct definition of the free stream Mcrit?",
    choices: {
      A: "when the local velocity reaches mach 1",
      B: "when shock stall first occurs",
      C: "when the shock wave on the top surface and the bottom surface both reach the trailing edge",
      D: "equal to the local speed of sound",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "What wing design features will help increase Mcrit?",
    choices: {
      A: "sweep bak/thin aerofoil PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "positive camber/sweepback",
      C: "dihedral/thin aerofoil",
      D: "negative camber/sweepback",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "In the transonic speed range, what affects the flight handing characteristics?",
    choices: {
      A: "IAS",
      B: "CAS",
      C: "TAS",
      D: "Mach number",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "What phenomenon can exist at low Mach number?",
    choices: {
      A: "mach tuck",
      B: "shock waves",
      C: "dutch roll",
      D: "tuck under",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "Which of the following combinations would result in the lowest value of Mcrit?",
    choices: {
      A: "small camber/thin aerofoil",
      B: "large camber/thick aerofoil",
      C: "small camber/thick aerofoil",
      D: "large camber/thin aerofoil",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "How does the density and temperature of the airflow vary as it passes through a shock wave?",
    choices: {
      A: "increases/decreases",
      B: "decreases/decreases",
      C: "increases/increases PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "decreases/increases",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "What is determined by the buffet onset chart?",
    choices: {
      A: "values of low speed and mach buffet at different weights and altitudes",
      B: "values of Mcrit at different weights and altitudes",
      C: "values of stall and shock stall",
      D: "values of stall",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "Mach tuck is",
    choices: {
      A: "nose up at transonic speeds",
      B: "nose down at transonic speeds",
      C: "nose u pitching caused by CP movement",
      D: "caused by the tendency of a swept wing to initially stall at the tip",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "Tuck under occurs at",
    choices: {
      A: "all mach numbers",
      B: "above and below Mcrit",
      C: "mach numbers above Mcrit",
      D: "mach numbers below Mcrit",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "What happens to Mcrit if weight decreases?",
    choices: {
      A: "increases",
      B: "decreases",
      C: "remains constant",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "Which of the following will give an increase in Mcrit?",
    choices: {
      A: "low thickness/chord ratio",
      B: "large leading edge radius",
      C: "cambered surface",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "Deflecting a control surface down will cause Mcrit to",
    choices: {
      A: "increase",
      B: "decrease",
      C: "remain the same",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "What is normal shock wave perpendicular to?",
    choices: {
      A: "angle of attack",
      B: "angle of incidence",
      C: "aircraft longitudinal axis",
      D: "the relative airflow",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "Why does total pressure decrease across a shock wave?",
    choices: {
      A: "boundary layer control",
      B: "separation of boundary layer",
      C: "because some of the kinetic energy is used in heating the air",
      D: "pressure drop after shock wave",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "Critical mach number is the highest speed at which",
    choices: {
      A: "highest speed at which the aeroplane is certificated for operation (MMO)",
      B: "speed at which there is subsonic airflow over all parts of the aircraft (Mach number < 1)",
      C: "speed at which there is supersonic airflow over all parts of the aeroplane PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "highest speed without supersonic flow over any part of the aeroplane",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "What are the reasons for an aircraft to have a waisted or coke bottle shaped fuselage?",
    choices: {
      A: "allow engine intakes more room",
      B: "increased strength for wing attachment",
      C: "transonic area rule",
      D: "increase low speed stability",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "The mach buffet margin",
    choices: {
      A: "increases as altitude decreases at constant IAS",
      B: "decreases as altitude decreases at constant mach number",
      C: "remains constant at Mmo",
      D: "is better using a step climb technique",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "In transonic flight the increase in drag is due to the",
    choices: {
      A: "increase in skin friction",
      B: "increase in angle of attack",
      C: "shock wave",
      D: "increase in parasite drag",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "An aircraft accelerates in the transonic region, the CP moves aft. This compensated for by",
    choices: {
      A: "a stability augmentation device",
      B: "a nose up pitch from the stabiliser",
      C: "moving the CG forward by transferring fuel",
      D: "increasing the angle of incidence of the horizontal stabiliser",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "As mach number increases at transonic speed, tuck under is caused by the CP moving and downwash at the tail .",
    choices: {
      A: "aft/increasing",
      B: "aft/decreasing",
      C: "forward/increasing",
      D: "forward/decreasing",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 081-19)What are the low and high buffet onset speeds given the following conditions:FL 350 Mass: 110 000 KgBank angle: 50o",
    choices: {
      A: "M0.69 and > M0.84",
      B: "M0.72 and > M0.84",
      C: "M0.73 and M0.83",
      D: "M0.62 and M0.83",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 081-19)In 1G level flight at FL 340 and at an aircraft weight of 110.000 kg, CG at 35% MAC and at 45o bank your low speed and high speed buffet boundaries will be",
    choices: {
      A: "M0.54; M0.64",
      B: "M0.49; MMO",
      C: "M0.60; M0.78",
      D: "M0.54; M0.82",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "When comparing a rectangular wing and a swept back wing of the same wing area and wing loading, the swept back wing has the advantage of",
    choices: {
      A: "Lower stalling speed",
      B: "Greater strength",
      C: "Increased longitudinal stability",
      D: "Higher critical Mach number",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "The regime of flight from the critical Mach number upto M = 1.3 is called",
    choices: {
      A: "hypersonic range PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "supersonic range",
      C: "transonic range",
      D: "subsonic range",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "The critical Mach Number of an aeroplane is the free stream Mach Number, which produces the first evidence of",
    choices: {
      A: "buffet",
      B: "local sonic flow",
      C: "shock wave",
      D: "supersonic flow",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "The critical Mach number can be increased by",
    choices: {
      A: "an increase in wing aspect ratio",
      B: "positive dihedral of the wings",
      C: "a T-tail",
      D: "sweepback of the wings",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "Mcrit is the free stream Mach number at which",
    choices: {
      A: "the bottom shock wave reaches the wing trailing edge",
      B: "the first local Mach number at any point on the aircraft equals M 1.0",
      C: "the bow shock wave attaches to the wing leading edge",
      D: "the centre of pressure is at its most rearward point",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "Two methods to increase the critical Mach Number are",
    choices: {
      A: "thin aerofoils and sweep back of the wing",
      B: "thin aerofoils and dihedral of the wing",
      C: "positive cambering of the aerofoil and sweep back of the wing PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "thick aerofoils and dihedral of the wing",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "The consequences of exceeding Mcrit in a swept-wing aeroplane may be: (assume no corrective devices, straight and level flight)",
    choices: {
      A: "buffeting of the aeroplane and a tendency to pitch up",
      B: "an increase in speed and a tendency to pitch up",
      C: "engine unbalance and buffeting",
      D: "buffeting of the aeroplane and a tendency to pitch down",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Compared to straight wings of the same airfoil section swept wings the onset of the transonic drag rise and have a CD in supersonic flight",
    choices: {
      A: "delay, lower",
      B: "hasten, lower",
      C: "hasten, higher",
      D: "delay, higher",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "What is the effect of a decreasing aeroplane weight on Mcrit at n=1, when flying at constant IAS? The value of Mcrit",
    choices: {
      A: "increases",
      B: "remains constant",
      C: "is independent of the angle of attack",
      D: "decreases",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "The critical Mach Number of an aeroplane can be increased by",
    choices: {
      A: "dihedral of the wings",
      B: "vortex generators",
      C: "control deflection",
      D: "sweep back of the wings",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "What is the influence of decreasing aeroplane weight on Mcrit at constant IAS?",
    choices: {
      A: "Mcrit increases as a result of flying at a smaller angle of attack",
      B: "Mcrit increases as a result of compressibility effects",
      C: "Mcrit decreases",
      D: "Mcrit decreases as a result of flying at a greater angle of attack",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Compared to a straight wing of the same airfoil section a wing swept at 30 should theoretically have an Mcrit times Mcrit for the straight wing, but will, in practice gain that increase",
    choices: {
      A: "cosine 30; twice",
      B: "1.154; half",
      C: "sine 30; half",
      D: "1,414; twice",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "Vortex generators on the upper side of the wing",
    choices: {
      A: "increase critical Mach Number",
      B: "increase wave drag",
      C: "decrease wave drag",
      D: "decrease critical Mach number",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "Which of the following (1) aerofoils and (2) angles of attack will produce the lowest Mcrit values?",
    choices: {
      A: "(1) thick and (2) small",
      B: "(1) thick and (2) large",
      C: "(1) thin and (2) large",
      D: "(1) thin and (2) small",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "The critical Mach number for an aerofoil equals the free stream airfoil Mach number at which",
    choices: {
      A: "the maximum operating temperature is reached PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "sonic speed (M=1) is reached at a certain point on the upper side of the aerofoil",
      C: "a shock wave appears on the upper surface",
      D: "a supersonic bell appears on the upper surface",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "Critical Mach-number is the",
    choices: {
      A: "highest speed at which the aeroplane is certificated for operation (MMO)",
      B: "speed at which there is subsonic airflow over all parts of the aircraft (Mach number < 1)",
      C: "speed at which there is supersonic airflow over all parts of the aeroplane",
      D: "highest speed without supersonic flow over any part of the aeroplane",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "Mcrit is the free stream Mach Number at which",
    choices: {
      A: "shockstall occurs",
      B: "Mach buffet occurs",
      C: "somewhere about the airframe Mach 1 is reached locally",
      D: "the critical angle of attack is reached",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "An aeroplane should be equipped with a Mach trimmer, if",
    choices: {
      A: "stick force stability is independent of the airspeed and altitude",
      B: "at transonic Mach numbers the aeroplane demonstrates unconventional elevator stick forcecharacteristics",
      C: "stick force per g strongly decreases at low Mach numbers",
      D: "at high airspeed and low altitude the aeroplane demonstrates unconventional elevator stickforce characteristics",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "The purpose of sweep back on the wings of a high speed aircraft is",
    choices: {
      A: "to reduce drag at all speeds PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "to reduce drag at low speeds only",
      C: "to increase the lift at high speeds",
      D: "to delay to a higher speed the drag rise resulting from wave drag (increase Mcrit)",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "Vortex generators on an aircraft's wings",
    choices: {
      A: "re-energise the boundary layer by making it more turbulent",
      B: "re-energise the boundary layer by making it more laminar",
      C: "delay the transition from laminar to turbulent flow",
      D: "delay the separation by decreasing the kinetic energy of the boundary layer",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "At high airspeeds, vortex generators",
    choices: {
      A: "mix the boundary layer to delay separation",
      B: "increase Mcrit",
      C: "decrease Mcrit",
      D: "increase the velocity of the airflow through the shock wave",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "What is the principal advantage of sweepback?",
    choices: {
      A: "accelerates the onset of compressibility effect",
      B: "the Mcrit will increase",
      C: "increases changes in the magnitude of force coefficients due to compressibility",
      D: "lateral stability is reduced",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "The purpose of vortex generators on a high speed aircraft is to",
    choices: {
      A: "prevent the formation of shock waves",
      B: "induce a root stall",
      C: "reduce induced drag PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "delay boundary layer separation",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "For a wing of low thickness/chord ratio the critical mach number will be",
    choices: {
      A: "higher than a wing of high thickness/chord ratio",
      B: "lower than a wing of high thickness/chord ratio",
      C: "the same as a wing of high thickness/chord ratio",
      D: "higher only if the wing has a supercritical section",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "The purpose of vortex generators is",
    choices: {
      A: "prevent span wise flow",
      B: "to reduce the severity of shock induced airflow separation",
      C: "prevent tip stalling on a swept wing",
      D: "to de-energise the boundary layer",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "The mach trip system operates",
    choices: {
      A: "operates at all mach numbers",
      B: "at low mach numbers only",
      C: "at high mach numbers only",
      D: "operates at supersonic speeds only",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "What is the function of a mach trim device?",
    choices: {
      A: "to prevent high speed tuck",
      B: "to prevent overspeed",
      C: "to prevent short period oscillation",
      D: "to prevent phugoid oscillation",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "If mach trim is unsereviceable you should",
    choices: {
      A: "limit the mach number at which you fly",
      B: "fly at a constant speed",
      C: "move pax to the rear of the aeroplane",
      D: "move pax to the forward of the aeroplane",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "The mach trimmer",
    choices: {
      A: "increases the stick force per g in the supersonic range",
      B: "increases the nose down pitching moment due to shock induced separation",
      C: "compensates for the nose up pitching moment due to super stall",
      D: "compensates for the nose down pitching moment at transonic speeds",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "Mach trim is used to correct for",
    choices: {
      A: "increased drag",
      B: "movement of the CP",
      C: "pitching up",
      D: "changes in the position of the CG at speeds greater than Mcrit",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "To counter act tuck under",
    choices: {
      A: "increase IAS",
      B: "decrease stabiliser incidence",
      C: "increase thrust",
      D: "increase stability",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "When the air is passing through an expansion wave the static temperature will?",
    choices: {
      A: "decrease PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "increase",
      C: "stay constant",
      D: "decrease and beyond a certain Mach number start increasing again",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "If a symmetrical aerofoil is accelerated from subsonic to supersonic speed the centre of lift will move",
    choices: {
      A: "forward to the leading edge",
      B: "aft to the trailing edge",
      C: "aft to the mid chord",
      D: "forward to the mid chord",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "In case of supersonic flow retarded by a normal shock wave a high efficiency (low loss in total pressure) can be obtained if the Mach number in front of the shock is",
    choices: {
      A: "high (supersonic)",
      B: "small but still supersonic",
      C: "lower than 1",
      D: "exactly 1",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "On a non-swept wing, when the aerofoil is accelerated from subsonic to supersonic speeds, the aerodynamic centre",
    choices: {
      A: "shifts from 25% to about 50% of the aerofoil chord",
      B: "shifts aft by about 10%",
      C: "remains unchanged",
      D: "slightly shifts forward",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "When airflow over a wing becomes supersonic, the pressure pattern over the surface will become",
    choices: {
      A: "the same as subsonic",
      B: "irregular",
      C: "rectangular PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "triangular",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "If an aeroplane is accelerated from subsonic to supersonic speeds, the centre of pressure will move",
    choices: {
      A: "to a position near the trailing edge",
      B: "forward",
      C: "to a position near the leading edge",
      D: "to the mid chord position",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "When a supersonic airflow passes through an oblique shockwave static pressure will and temperature will",
    choices: {
      A: "rise; rise",
      B: "fall; rise",
      C: "fall; fall",
      D: "rise; fall",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "The aft movement of the centre of pressure during the acceleration through the transonic flight regim will",
    choices: {
      A: "increase the static longitudinal stability",
      B: "decrease the longitudinal stability",
      C: "increase the static lateral stability",
      D: "decrease the static lateral stability",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "Which statement is correct about an expansion wave in supersonic flow:The temperature in front of an expansion wave is higher than the temperature behind itThe speed in front of an expansion wave is higher than the speed behind it",
    choices: {
      A: "1 and 2 are incorrect",
      B: "1 and 2 are correct",
      C: "1 is incorrect and 2 is correct",
      D: "1 is correct and 2 is incorrect PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "The bow wave will appear first at",
    choices: {
      A: "M=0.6",
      B: "M=Mcrit",
      C: "M=1.0",
      D: "M=1.3",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "In supersonic flilght aerofoil pressure distribution is",
    choices: {
      A: "irregular",
      B: "rectangular",
      C: "triangular",
      D: "the same as in subsonic flight",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "The additional increase of drag at Mach Numbers above the critical Mach Number is due to",
    choices: {
      A: "increased angle of attack",
      B: "wave drag",
      C: "increased interference drag",
      D: "increased skin friction",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "As an aircraft goes from subsonic to supersonic flight the CP",
    choices: {
      A: "remains in the same position",
      B: "moves aft and then forward",
      C: "moves forward",
      D: "moves aft",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Which statement is correct about an expansion wave in a supersonic flow?The density in front of an expansion wave is higher than behindThe pressure in front of an expansion wave is higher than behind",
    choices: {
      A: "1 and 2 are correct",
      B: "1 is correct and 2 is incorrect",
      C: "1 is incorrect and 2 is correct",
      D: "1 and 2 are incorrect",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "When the air is passing through an expansion wave the local speed of sound will",
    choices: {
      A: "stay constant",
      B: "increase",
      C: "decrease",
      D: "decrease and beyond a certain Mach number start increasing again",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "How will the density and temperature change in a supersonic flow from a position in front of a shock wave to behind it?",
    choices: {
      A: "Density will increase, temperature will increase",
      B: "Density will increase, temperature will decrease",
      C: "Density will decrease, temperature will increase",
      D: "Density will decrease, temperature will decrease",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "When a supersonic airflow passes through an expansion wave speed will and temperature",
    choices: {
      A: "decrease; fall",
      B: "decrease; rise",
      C: "increase; rise",
      D: "increase; fall",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "When the air is passing through an expansion wave the Mach number will",
    choices: {
      A: "decrease PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "increase",
      C: "stay constant",
      D: "decrease and beyond a certain Mach number start increasing again",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "The shock wave angle of a supersonic aircraft at increasing Mach Number",
    choices: {
      A: "remain the same",
      B: "decreases",
      C: "increases",
      D: "decreases, the increases above certain Mach number",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "When an aircraft is flying at speeds above Mach 1, pressure disturbances from the aircraft will be felt only",
    choices: {
      A: "in front of the normal shock wave",
      B: "in front of the Mach cone",
      C: "within the Mach cone",
      D: "in front of the oblique shock wave",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "If the Mach number of an aeroplane in supersonic flight is increased, the shock wave angles will",
    choices: {
      A: "decrease and beyond a certain Mach number start increasing again",
      B: "increase",
      C: "stay constant",
      D: "decrease",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "In supersonic flight, all disturbances produced by an aeroplane are",
    choices: {
      A: "in front of the aeroplane",
      B: "very weak and negligible",
      C: "in between a conical area, depending on the Mach Number PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "outside the conical area depending on the Mach Number",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "Wave drag",
    choices: {
      A: "may occur at any speed, but will be very small at low speeds",
      B: "will only occur on aircraft without sweepback",
      C: "will only occur at speeds above the critical Mach number",
      D: "will only occur when the aircraft is flying at supersonic speed",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "A bow wave develops",
    choices: {
      A: "just below mach 1",
      B: "equal to mach 1",
      C: "above mach 1",
      D: "only if the leading edge is very sharp",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "During acceleration from subsonic to supersonic speed the centre of pressure movement will be",
    choices: {
      A: "forward",
      B: "rearward",
      C: "remain stationary",
      D: "irregular, forward and aft, but overall rearward to the 50% chord",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "The velocity behind a (1) normal and an (2) oblique shock wave is",
    choices: {
      A: "decreased to subsonic/decreased but still supersonic",
      B: "increased to supersonic/decreased to subsonic",
      C: "decreased but still supersonic/increased to supersonic",
      D: "increased to supersonic/increased but still subsonic",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "A bow wave is",
    choices: {
      A: "the aft limit of influence of the aeroplane, air behind the bow wave is not affected by thepresence of the aircraft",
      B: "the forward limit of influence of the aeroplane, air behind the bow wave is not affected by thepresence of the aircraft",
      C: "the aft limit of influence of the aeroplane, air ahead of the bow wave is affected by theaircraft's approach",
      D: "the forward limit of influence of the aeroplane, air ahead of the bow wave receives no warningof the aircraft's approach",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "What movement of the centre of lift occurs when accelerating an aircraft with a symmetrical aerofoil to supersonic speed?",
    choices: {
      A: "forward to the leading edge",
      B: "irregular, but in an overall rearward direction towards the centre of the chord",
      C: "aft to the trailing edge",
      D: "no movement occurs",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "What happens to the pressure and temperature of supersonic airflow through an oblique shock wave?",
    choices: {
      A: "static pressure increases/temperature decreases",
      B: "static pressure decreases/temperature decreases",
      C: "static pressure decreases/temperature increases",
      D: "static pressure increases/temperature increases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "When an aircraft is flying at supersonic speed, where will be the area of influence of any pressure disturbance due to the presence of the aircraft be located?",
    choices: {
      A: "within the mach cone",
      B: "in front of the mach cone",
      C: "in front of the normal shock wave",
      D: "in front of the oblique shock wave",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "When an aircraft with symmetrical aerofoil accelerates to supersonic speed, what happens to the centre of lift?",
    choices: {
      A: "moves aft to the centre of the chord",
      B: "moves forward towards the 25% chord",
      C: "moves forward of the 25% chord to the leading edge",
      D: "moves aft of the 25% chord to the trailing edge at a speed just in excess of M1.0",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question:
      "What happens to the temperature of airflow as it passes through an expansion wave?",
    choices: {
      A: "increases",
      B: "decreases",
      C: "remains the same",
      D: "initially increases slightly, then increases substantially",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "What happens to the static pressure and temperature of supersonic flow through an oblique shock wave?",
    choices: {
      A: "temp increases and static pressure decreases",
      B: "static pressure increases and temp is constant",
      C: "static pressure remains constant and temp decreases",
      D: "static pressure increases and temp increases",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "What happens to static pressure as air flows through an expansion wave?",
    choices: {
      A: "increase",
      B: "decrease",
      C: "stay the same",
      D: "initially increases then decreases, but still higher than before",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "What happens to the Mach number of the airflow as it passes through an expansion wave?",
    choices: {
      A: "increases PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "decreases",
      C: "remains constant",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "What is the movement of the AC from subsonic to supersonic?",
    choices: {
      A: "0 to 25%",
      B: "0 to 50%",
      C: "50% to 25%",
      D: "25% to 50%",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "When an aeroplane accelerates from subsonic to supersonic speed, the Aerodynamic Centre",
    choices: {
      A: "moves from 25% to 50% chord",
      B: "moves forward",
      C: "is unchanged",
      D: "no longer exists",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "For a normal stable aeroplane, the centre of gravity is located",
    choices: {
      A: "aft of the neutral point of the aeroplane",
      B: "with a sufficient minimum margin ahead of the neutral point of the aeroplane",
      C: "at the neutral point of the aeroplane",
      D: "between the aft limit and the neutral point of the aeroplane",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The distance between the CG Datum and the CG Neutral Point in straight and level flight is called the",
    choices: {
      A: "CG forward limit",
      B: "CG aft limit",
      C: "CG static margin",
      D: "CG manoeuvre margin PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In a twin-engined jet powered aeroplane (engines mounted below the low wings) the thrust is suddenly increased. Which elevator deflection will be required to maintain the pitching moment zero?",
    choices: {
      A: "Down",
      B: "UP",
      C: "No elevator movement will be required because the thrust line of the engines remains unchanged",
      D: "It depends on the position of the centre of gravity",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "How can the designer of an aeroplane with straight wings increase the static lateral stability?",
    choices: {
      A: "By increasing the aspect ratio of the vertical stabiliser, whilst maintaining a constant area",
      B: "By fitting a ventral fin (a fin at the under side of the aeroplane)",
      C: "By applying wing twist",
      D: "By increasing anhedral",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If an aircraft is stable, this means that",
    choices: {
      A: "it is in a state of balance",
      B: "all the stick forces have been trimmed out",
      C: "if it is displaced it will return to its original position without any correction by the pilot",
      D: "if it is displaced it must be returned to its original position by the pilot",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The effect of Mach trim on stick forces for power operated controls",
    choices: {
      A: "is to decrease the stick force gradient to prevent the possibility of high speed stall",
      B: "is to decrease the stick force gradient to ensure the pilot can manoeuvre the aircraftadequately when flying at high transonic Mach number",
      C: "is to maintain the required stick force gradient",
      D: "a Mach trim system is not required if an aircraft has power operated controls",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "The Mach-trim function is installed on most commercial jets in order to minimize the adverse effects of",
    choices: {
      A: "compressibility effects on the stabiliser",
      B: "increased drag due to shock wave formation",
      C: "uncontrolled changes in stabiliser setting",
      D: "changes in the position of centre of pressure",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Which of the following best describes the function of the Mach trim system?",
    choices: {
      A: "It adjusts the longitudinal trim of the aircraft",
      B: "It adjusts the stabiliser trim position",
      C: "It adjusts thefore and aft fuel balance",
      D: "It adjusts the elevator trim tab",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "In case the Mach trimmer fails",
    choices: {
      A: "the speed must be kept constant",
      B: "try to relocate the centre-of-gravity aft",
      C: "the Mach number must be limited",
      D: "the aeroplane weight must be limited",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question: "A Machtrimmer",
    choices: {
      A: "has no effect on the shape of the elevator position versus speed (IAS) curve for a fullyhydraulic controlled aeroplane",
      B: "increases the stick force per g at high Mach Numbers",
      C: "is necessary for compensation of the autopilot at high Mach Numbers",
      D: "corrects insufficient stick force stability at high Mach Numbers",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question:
      "Which of the following statements about a Mach trimmer is correct?",
    choices: {
      A: "A Mach trimmer reduces the stick force stability of a straight wing aeroplane to zero athigh Mach numbers",
      B: "A straight wing aeroplane always needs a Mach trimmer for flying at Mach numbers close to MMO",
      C: "A Mach trimmer corrects the change in stick force stability of a swept wing aeroplane above acertain Mach number",
      D: "The Mach trimmer corrects the natural tendency of a swept wing aeroplane to pitch-up",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "What is the effect of an aft shift of the centre of gravity on (1) static longitudinal stability and (2) the required control deflection for a given pitch change?",
    choices: {
      A: "(1) reduces; (2) increases",
      B: "(1) increases; (2) increases",
      C: "(1) increases; (2 reduces",
      D: "(1) reduces; (2) reduces",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The max aft position of the centre of gravity is amongst others limited by the",
    choices: {
      A: "too small effect of the controls on the aeroplane",
      B: "maximum longitudinal stability of the aeroplane",
      C: "maximum elevator deflection",
      D: "minimum value of the stick force per g",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The effects of CG position on longitudinal static stability and control response will be",
    choices: {
      A: "forward movement of the CG will reduce stability and increase control response",
      B: "forward movement of the CG will reduce control response and increase stability",
      C: "rearward movement of the CG will increase stability and reduce control response",
      D: "rearward movement of the CG will reduce stability and control response",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which statement about stick force per g is correct?",
    choices: {
      A: "The stick force per g can only be corrected by means of electronic devices (stabilityaugmentation) in case of an unacceptable value",
      B: "The stick force per g increases, when centre of gravity is moved aft",
      C: "The stick force per g must have both an upper and lower limit in order to assure acceptablecontrol characteristics",
      D: "If the slope of the Fe-n line becomes negative, generally speaking this is not a problem forcontrol of an aeroplane",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The manoeuvrability of an aeroplane is best when the",
    choices: {
      A: "C.G. is on the aft C.G. limit",
      B: "speed is low",
      C: "C.G. position is on the forward C.G. limit",
      D: "flaps are down",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When an aeroplane with the centre of gravity forward of the centre of pressure of the combined wing/fuselage is in straight and level flight, the vertical load on the tailplane will be",
    choices: {
      A: "downwards because it is always negative regardless of the position of the centre of gravity",
      B: "upwards",
      C: "zero because in steady flight all loads are in equilibrium",
      D: "downwards",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The value of the manoeuvre stability of an aeroplane is 150 N/g. The load factor in straight and level flight is 1. The increase of stick force necessary to achieve the load factor of 2.5 is",
    choices: {
      A: "150 N",
      B: "375 N",
      C: "450 N",
      D: "225 N",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If an airraft has static longitudinal instability, it",
    choices: {
      A: "will be dynamically stable",
      B: "may or may not be dynamically stable, depending on momentum and damping factors",
      C: "will be dynamically unstable",
      D: "will be dynamically stable only at low speed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The C.G. position of an aeroplane is forward of the neutral point in a fixed location. Speed changes cause a departure from the trimmed position. Which of the following statements about the stick force stability is correct?",
    choices: {
      A: "Increase of speed generates pull forces",
      B: "Increasing 10 kt trimmed at low speed has more effect on the stick force than increasing 10 kttrimmed at high speed",
      C: "Aeroplane nose up trim decreases the stick force stability",
      D: "Stick force stability is not affected by trim",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "One of the requirements for dynamic stability is",
    choices: {
      A: "positive static stability",
      B: "a large deflection range of the stabiliser trim",
      C: "a small C.G. range",
      D: "effective elevator",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The effect of a swept wing is to give",
    choices: {
      A: "positive dihedral effect",
      B: "negative dihedral effect",
      C: "decreased roll-with-yaw effect",
      D: "adverse yaw effect",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Tuck under is",
    choices: {
      A: "the tendency to nose up when speed is increased into the transonic flight regime",
      B: "the tendency to nose down when speed is increased into the transonic flight regime",
      C: "shaking of the control column at high Mach Number",
      D: "the tendency to nose down when the control column is pulled back",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In what way is the longitudinal stability affected by the degree of positive camber of the aerofoil?",
    choices: {
      A: "Negative, because the lift vector rotates forward at increasing angle of attack",
      B: "Positive, because the centre of pressure shifts rearward at increasing angle of attack",
      C: "No effect, because camber of the aerofoil produces a constant pitch down moment coefficient,independent of angle of attack",
      D: "Positive, because the lift vector rotates backward at increasing angle of attack",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The short-period mode of longitudinal dynamic stability is",
    choices: {
      A: "a rapid oscillation about the normal axis",
      B: "a rapid oscillation about the longitudinal axis",
      C: "a rapid oscillation about the lateral axis",
      D: "always induced by the pilot",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which part of an aeroplane provides the greatest positive contribution to the static longitudinal stability?",
    choices: {
      A: "The engine",
      B: "The horizontal tailplane",
      C: "The fuselage",
      D: "The wing",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following statements is correct?",
    choices: {
      A: "Dynamic stability means that after being displaced from original equilibrium condition, the PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "Static stability means that the aeroplane is also dynamically stable about the relevant axis",
      C: "Dynamic stability is possible only when the aeroplane is statically stable about the relevantaxis",
      D: "A dynamically stable aeroplane would be almost impossible to fly manually",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Dynamic longitudinal stability requires",
    choices: {
      A: "an effective elevator",
      B: "a small CG range",
      C: "positive static longitudinal stability",
      D: "a variable incidence (trimming) tailplane",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following components is most important in determining longitudinal static stability?",
    choices: {
      A: "Fuselage",
      B: "Wings",
      C: "Engines",
      D: "Horizontal tailplane",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The effect of a highly cambered airfoil on longitudinal stability will be",
    choices: {
      A: "Positive effect because the lift vector is inclined rearwards as angle of attack increases",
      B: "No effect",
      C: "Negative effect because the lift vector is inclined forwards as angle of attack increases",
      D: "Positive effect as CP moves backwards as angle oof attack increases",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When the aircraft CG is on the aft limit, it is",
    choices: {
      A: "in front of the neutral point",
      B: "above the neutral point PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "behind the neutral point",
      D: "on the neutral point",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A C.G. location beyond the aft limit leads to",
    choices: {
      A: "a too high pulling stick force during rotation in the take off",
      B: "an unacceptable low value of the manoeuvre stability (stick force per g. Fe/g)",
      C: "an increasing static longitudinal stability",
      D: "a better recovery performance in the spin",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During landing of a low-winged jet aeroplane, the maximum elevator up deflection is normally required when the flaps are",
    choices: {
      A: "fully down and the C.G. is fully forward",
      B: "up and the C.G. is fully forward",
      C: "fully down and the C.G. is fully aft",
      D: "up and the C.G. is fully aft",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The aerodynamic centre of the wing is the point, where",
    choices: {
      A: "change of lift due to variation of angle of attack is constant",
      B: "pitching moment coefficient does not vary with angle of attack",
      C: "aerodynamic forces are constant",
      D: "the aeroplanes lateral axis intersects with the centre of gravity",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Longitudinal static stability is created by the fact that the",
    choices: {
      A: "wing surface is greater than the horizontal tail surface",
      B: "centre of gravity is located in front of the leading edge of the wing",
      C: "centre of gravity is located in front of the neutral point of the aeroplane",
      D: "aeroplane possesses a large trim speed range PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Tuck under may happen at",
    choices: {
      A: "low Mach numbers",
      B: "all Mach numbers",
      C: "only at low altitudes",
      D: "high Mach numbers",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The Mach trim system will prevent",
    choices: {
      A: "dutch roll",
      B: "buffeting",
      C: "shock stall",
      D: "tuck under",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Tuck under is the",
    choices: {
      A: "nose down pitching tendency as speed is increased in the transonic range",
      B: "nose up pitching tendency as speed is increased in the transonic range",
      C: "shaking of the control column at high Mach number",
      D: "nose down pitching tendency when the control column is pulled rearwards",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 081-20)The aeroplane motion, schematically illustrated in the annex, is an example of a dynamically",
    choices: {
      A: "unstable periodic motion",
      B: "indifferent periodic motion",
      C: "stable periodic motion",
      D: "indifferent periodic motion",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A negative contribution to the static longitudinal stability of conventional jet transport aeroplanes is provided by",
    choices: {
      A: "a fixed trim position",
      B: "the tail",
      C: "the fuselage",
      D: "a fixed elevator deflection",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane, being manually flown in the speed unstable region, experiences a disturbance that causes a speed reduction. If the altitude is maintained and thrust remains constant, the aeroplane speed will",
    choices: {
      A: "increase",
      B: "further decrease",
      C: "initially increase an thereafter decrease",
      D: "initially further decrease and thereafter increase",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane exhibits static longitudinal stability, if, when the angle of attack changes",
    choices: {
      A: "the change in total aeroplane lift acts through the centre of gravity",
      B: "the change in total aeroplane lift acts aft of the centre of gravity",
      C: "the resulting moment is positive",
      D: "the change in wing lift is equal to the change in tail lift",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "During a phugoid the speed",
    choices: {
      A: "varies significantly, as during a short period oscillation",
      B: "remains approximately constant, as during a short period oscillation",
      C: "varies significantly, whereas during a short period oscillation it does not",
      D: "remains approximately constant, whereas during a short period oscillation it variessignificantly",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Positive static lo ngitudinal stability means that a",
    choices: {
      A: "nose up moment occurs with a speed change at constant angle of attack",
      B: "nose down moment occurs after encountering an up-gust",
      C: "nose down moment occurs with a speed change at constant angle of attack",
      D: "nose up moment occurs after encountering an up-gust",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Stick force per g",
    choices: {
      A: "does not change with increasing altitude",
      B: "is selected by the pilot by electronic means before each flight",
      C: "is dependent on cg location",
      D: "has a maximum value related to acceptable controllability, the minimum value is of no concern",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The aerodynamic contribution to the static longitudinal stability of the nacelles of aft fuselage mounted engines is",
    choices: {
      A: "zero",
      B: "negative",
      C: "positive",
      D: "maximum during cruise",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The manoeuvre stability of a large jet transport aeroplane is 280 N/g. What stick force is required, if the aeroplane is pulled to the limit manoeuvring load factor from a trimmed horizontal straight and steady flight? (cruise configuration)",
    choices: {
      A: "1050 N",
      B: "770 N",
      C: "630 N",
      D: "420 N",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the effect of elevator trim tab adjustment on the static longitudinal stability of an aeroplane? A Depends on the value of stick force/g B No effect C Aeroplane nose up trim increases the static longitudinal stability D Aeroplane nose down trim increases the static longitudinal stabilityRef: AIR: atpl, cpl;Ans: B21154. When an aeroplane has zero static loingitudinal stability, the Cm versus angle of attack line: Answers",
    choices: {
      A: "is horizontal",
      B: "is vertical",
      C: "has a negative slope",
      D: "has a positive slope",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When moving the centre of gravity forward the stick force per g will",
    choices: {
      A: "decrease",
      B: "not change",
      C: "increase",
      D: "change but only at very high speeds",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following statements is correct?l) A high limit load factor enables the manufacturer to design for a lowr stick force per gll) The stick force per g is a limitation on the use of an aeroplane, which the pilot should determine from the A",
    choices: {
      A: "l is correct and ll is correct",
      B: "l is correct and ll is incorrect",
      C: "l is incorrect and ll is incorrect",
      D: "l is incorrect and ll is correct",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which statement is correct",
    choices: {
      A: "During a phugoid altitude varies significantly, but during a short period oscillation itremains approximately constant",
      B: "During both a phugoid and a short period oscillation altitude remains approximately constant",
      C: "During both a phugoid and a short period oscillation altitude varies significantly",
      D: "During a phugoid altitude remains approximately constant, but during a short periodoscillation it varies significantly",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which statement is correct?",
    choices: {
      A: "The phugoid should always be heavily damped",
      B: "The short period oscillation should always be heavily damped",
      C: "When the phugoid is slightly unstable, an aeroplane becomes uncontrollable",
      D: "A slightly unstable short period oscillation is no problem for an aeroplane",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement is correct?l) Stick force per g is independent of altitudell) Stick force per g increases when the centre of gravity moves forward",
    choices: {
      A: "l is correct, ll is correct",
      B: "l is incorrect, ll is correct",
      C: "l is correct, ll is incorrect",
      D: "l is incorrect, ll is incorrect",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The CG of an aircraft with a nose wheel is",
    choices: {
      A: "forward of the main wheels",
      B: "behind the main wheels",
      C: "concident with the nose undercarriage",
      D: "in front of the nose wheel",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Damping is the property that",
    choices: {
      A: "slows down the rate or diminishes the amplitude of vibrations or cycles",
      B: "makes a body decelerate when thrust is reduced",
      C: "requires an increased amountof energy to be used to accelerate a body when it approaches thespeed of sound",
      D: "makes an aircraft more stable at high altitude",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the maximum pull force acceptable is 50 lbs and the design limit g of the aircraft is 6g, what stick force/g must be achieved to permit the aircraft to be manoeuvred to its design g limit?",
    choices: {
      A: "10 lb/g",
      B: "8.33 lb/g",
      C: "6 lb/g",
      D: "5 lb/g",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Moving the CG rearwards will",
    choices: {
      A: "have no effect on stability",
      B: "increase lateral stability",
      C: "increase longitudinal stability",
      D: "reduce loingitudinal stability",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the aircraft has a nose up pitch displacement, the effective angle of attack of the tail plane",
    choices: {
      A: "remains the same",
      B: "changes an causes the tail plan to apply a nose down moment",
      C: "changes and causes the tail plane to apply a nose up moment",
      D: "will not change if the pitch up was due to elevator selection",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The magnitude of the stick force required to pitch, for an aircraft with manual controls, is determined by",
    choices: {
      A: "the distance the CG is forward of the neutral point",
      B: "the distance the CG is forward of the static margin",
      C: "the distance the CG is forward of the forward CG limit",
      D: "the neutral stability",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The stick force gradient is",
    choices: {
      A: "the force required to change the load factor of the aircraft a given amount",
      B: "the force required to hold the aircraft in a particular pitch attitude PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "due to the dynamic pressure",
      D: "only supplied by an artificial feel unit",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If a stick force of 20 lbs is required to pull 4g from the position of trim, the stick force gradient is",
    choices: {
      A: "6.6 lb/g",
      B: "5 lb/g",
      C: "20 lb/g",
      D: "60 lb/g",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When an aircraft's forward CG limit is exceeded, it will affect the flight characteristics of the aircraft by producing",
    choices: {
      A: "very light elevator control forces",
      B: "higher stalling speeds and more longitudinal stability",
      C: "improved performance since it reduces the induced drag",
      D: "an extremely high tail down force",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the airspeed increases and decreases during longitudinal phugoid oscillations, the aircraft",
    choices: {
      A: "is constantly changing AOA making it difficult to reduce the magnitude of the oscillations",
      B: "can be easily controlled by the pilot",
      C: "will display poor trimming qualities",
      D: "is displaying lateral dynamic instability",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following components provides longitudinal stability?",
    choices: {
      A: "engines",
      B: "wing",
      C: "fuselage",
      D: "tail plane PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the position of the CG in relation to the neutral point when the CG is on the aft limit?",
    choices: {
      A: "on the neutral point",
      B: "just behind the neutral point",
      C: "above the neutral point",
      D: "in front of the neutral point",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Forward and aft movement of the CG effect on stability and control will be",
    choices: {
      A: "rearward movement of the CG will reduce control and stability",
      B: "rearward movement of the CG will reduce control and increase stability",
      C: "forward movement of the CG will increase stability and reduce control",
      D: "forward movement of the CG will reduce stability and increase control",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In relation to the manoeuvre point, the aft CG limit is",
    choices: {
      A: "always forward of it",
      B: "on the manoeuvre point",
      C: "the least distance away when the CG is on the forward limit",
      D: "aft of the manoeuvre point",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Rearward movement of the CG will",
    choices: {
      A: "give increased tendency for spiral instability",
      B: "increase Vmcg",
      C: "give greater tendency to dutch roll",
      D: "increase elevator stick force gradient",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If an aircraft is longitudinally statically unstable, at the same time it will be dynamically",
    choices: {
      A: "unstable",
      B: "neutral",
      C: "stable",
      D: "positively stable",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Long period (phugoid) oscillations are characterised by",
    choices: {
      A: "oscillations will take 5 seconds to damp out",
      B: "speed is constant",
      C: "long period of damping",
      D: "rapid and repeated changes in effective angle of attack",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Where must the CG be located?",
    choices: {
      A: "aft of the neutral point and in front of the manoeuvre point",
      B: "between the aft limit and the neutral point",
      C: "with sufficient margin ahead of the neutral point",
      D: "on the neutral point",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What happens if CG moves behind the aft limit?",
    choices: {
      A: "stick forces become excessive",
      B: "lateral stability will be decreased",
      C: "insufficient manoeuvre stability",
      D: "longitudinal stability increases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Short period oscillation is",
    choices: {
      A: "pilot induced and unstable PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "oscillation in pitch",
      C: "oscillation in roll",
      D: "oscillation in yaw",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The sum of the moments in flight are not zero, therefore movement would take place about",
    choices: {
      A: "the CG",
      B: "the neutral point",
      C: "the manoeuvre point",
      D: "the CP",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What will be the effect of a highly cambered aerofoil on longitudinal stability?",
    choices: {
      A: "a negative effect because the lift vector is inclined forwards as the angle of attack increases",
      B: "no effect",
      C: "a positive effect because the lift vector is inclined rearwards as the angle of attackincreases",
      D: "a positive effect as the CP moves to the rear as the angle of attack increases",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The forward and aft CG limits are determined respectively by",
    choices: {
      A: "roll response, control forces",
      B: "minimum control response, decreasing stability",
      C: "dutch roll, increasing stability",
      D: "control forces, increasing stability",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When considering the relationship between lateral static stability and directional stability",
    choices: {
      A: "dominant directional static stability gives an increased tendency for dutch roll",
      B: "dominant lateral static stability gives an increased tendency for spiral instability PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "dominant lateral static stability gives an increased tendency for dutch roll",
      D: "they are mutually independent and have no effect on each other",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An aerolplane that has positive static stability",
    choices: {
      A: "is never dynamically stable",
      B: "is always dynamically stable",
      C: "can be dynamically stable, neutral or unstable",
      D: "is always dynamically unstable",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The effect of a ositive wing sweep on static directional stability is as follows",
    choices: {
      A: "negative dihedral effect",
      B: "no effect",
      C: "destabilising dihedral effect",
      D: "stabilising effect",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Directional static stability is determined by",
    choices: {
      A: "aircraft weight",
      B: "tail volume",
      C: "fin volume",
      D: "elevator angle for trim",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following gives an unstable contribution in sideslip?",
    choices: {
      A: "Wing sweep",
      B: "Flap extension",
      C: "Dihedral",
      D: "High wing PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane has static directional stability; in a sideslip to the right, initially the",
    choices: {
      A: "nose of the aeroplane tends to move to the left",
      B: "right wing tends to go down",
      C: "nose of the aeroplane will remain in the same direction",
      D: "nose of the aeroplane tends to move to the right",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The primary function of the fin is to give",
    choices: {
      A: "lateral stability - about the longitudinal axis",
      B: "directional stability - about the normal axis",
      C: "directional stability - about the longitudinal axis",
      D: "directional stability - about the lateral axis",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Positive static stability of an aeroplane means that once it has been displaced the",
    choices: {
      A: "tendency will be to move with an oscillating motion of decreasing amplitude",
      B: "tendency will be to move with an oscillating motion of increasing amplitude",
      C: "initial tendency to move is towards its equilibrium position",
      D: "initial tendency to move is away from its equilibrium position",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the static lateral stability of an aeroplane is increased, whilst its static directional stability remains constant",
    choices: {
      A: "its sensitivity to Dutch roll increases",
      B: "its spiral stability decreases",
      C: "turning flight becomes more difficult",
      D: "the nose-down pitching moment in a turn increases",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The contribution of swept back wings to static directional stability",
    choices: {
      A: "is nil",
      B: "is negative",
      C: "is positive",
      D: "decreases as the sweepback increases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The contribution to the static directional stability of a straight wing with high aspect ratio and without dihedral",
    choices: {
      A: "is always positive",
      B: "is always negative",
      C: "is always negligible",
      D: "becomes more positive as the aspect ratio increases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The effect of a wing with sweepback on static directional stability is as follows",
    choices: {
      A: "Destabilising dihedral effect",
      B: "No effect",
      C: "Stabilising effect",
      D: "Negative dihedral effect",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Increasing the size of the fin",
    choices: {
      A: "reduces directional stability",
      B: "reduces lateral stability",
      C: "increases longitudinal stability and directional control",
      D: "increases the size of the keel surface behind the CG, giving increased directional stability",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With a swept wing aircraft, with an increase in altitude, which of the following statements about lateral stability is correct?",
    choices: {
      A: "Static lateral stability increases, dynamic lateral stability increases PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "Static lateral stability remains the same, dynamic lateral stability decreases",
      C: "Static lateral stability decreases, dynamic lateral stability increases",
      D: "Static lateral stability increases, dynamic lateral stability decreases",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following lists aeroplane features that each increase static lateral stability?",
    choices: {
      A: "Fuselage mounted engines, dihedral, T-tail",
      B: "Low wing, dihedral, elliptical wing planform",
      C: "High wing, sweep back, large and high vertical fin",
      D: "Sweep back, uner wing mounted engines, winglets",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The short period mode is an",
    choices: {
      A: "oscillation about the vertical axis",
      B: "oscillation about the lateral axis",
      C: "oscillation about the longitudinal axis",
      D: "unstable movement of the aeroplane, induced by the pilot",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Considering the lateral stability of a swept wing airraft, at high flight levels th static lateral stability will be and th dynamic lateral stability will be",
    choices: {
      A: "greater; greater",
      B: "the same; less",
      C: "less; greater",
      D: "the same; greater",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The effect of a high wing with zero dihedral is as follows",
    choices: {
      A: "its only purpose is to ease aeroplane loading",
      B: "Negative dihedral effect",
      C: "Positive dihedral effect PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "Zero dihedral effect",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Dihedral of the wing",
    choices: {
      A: "is the only way to increase the static lateral stability",
      B: "increases the static lateral stability",
      C: "is only positive for aeroplanes with high mounted wings",
      D: "decreases the static lateral stability",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "After a disturbance about the lateral axis, an aeroplane oscillates about the lateral axis at a constant amplitude. The aeroplane is",
    choices: {
      A: "Statically unstable - Dynamically neutral",
      B: "Statically unstable - Dynamically stable",
      C: "Statically stable - Dynamically unstable",
      D: "Statically stable - Dynamically neutral",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What happens to lateral stability when flaps are extended?",
    choices: {
      A: "Lateral stability is decreased",
      B: "Lateral stability is increased as lift is increased",
      C: "Lateral stability is unaffected, as the wings are symmetrical",
      D: "Lateral stability is increased as the centre of pressure moves inboard",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following statements about dihedral is correct?",
    choices: {
      A: "Dihedral is necessary for the execution of slp-free turns",
      B: "Effective dihedral is the angle between the ¼-chord",
      C: "Dihedral contributes to dynamic but not to static lateral stability",
      D: "The effective dihedral of an aeroplane component means the contribution of that component to thestatic lateral stability PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which type of wing arrangement decreases the static lateral stability of an aeroplane?",
    choices: {
      A: "Increased wing span",
      B: "Dihedral",
      C: "High wing",
      D: "Anhedral",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement is correct for a side slip condition at constant speed and side slip angle, where the geometric dihedral of an aeroplane is increased?",
    choices: {
      A: "the required lateral control force does not change",
      B: "the required lateral control force decreases",
      C: "the required lateral control force increases",
      D: "the stick force per g decreases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Lateral static stability is determined by",
    choices: {
      A: "aircraft response to sideslip",
      B: "aspect ratio",
      C: "wingspan",
      D: "cg position",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What will increase the sensitivity to Dutch Roll?",
    choices: {
      A: "A forward movement of the centre of gravity",
      B: "An increased anhedral",
      C: "An increased static lateral stability",
      D: "An increased static directional stability",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Positive static lateral stability is the tendency of an aeroplane to",
    choices: {
      A: "roll to the left in the case of a sideslip angle (with the aeroplane nose pointing to the rightof the incoming flow)",
      B: "roll to the left in the case of a sideslip (with the aeroplane nose pointing to the left oftheincoming flow)",
      C: "roll to the right in a right turn",
      D: "roll to the left in a right turn",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Static lateral stability should not be too large, because",
    choices: {
      A: "too much rudder deflection would be required in a crosswind landing",
      B: "too much aileron deflection would be required in a crosswind landing",
      C: "constant aileron deflection would be required during cruise in case of crosswind",
      D: "the roll trim sensitivity would increase sharply",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Static lateral stability should not be too small because",
    choices: {
      A: "the aeroplane would show too strong a tendency to spiral dive",
      B: "after a disturbance around the longitudinal axis the aeroplane would show too strong a tendencyto return to the original attitude",
      C: "the stick force per g would become unacceptably small",
      D: "the aeroplane would show too strong a tendency to Dutch roll",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The effect on static lateral stability of an aeroplane with a high wing as compared with a low wing is",
    choices: {
      A: "zero dihedral effect",
      B: "a negative dihedral effect",
      C: "no effect as it is only used to improve aeroplane loading",
      D: "a positive dihedral effect",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which statement concerning sweepback is correct?",
    choices: {
      A: "Sweepback provides a positive contribution to static lateral stability",
      B: "Sweepback increases speed stability at Mach numbers above Mcrit",
      C: "Sweepback is mainly intended to increase static directional stability",
      D: "A disadvantage of sweepback is that it decreases Mcrit",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For an aircraft with neutral static roll stability, folliwng a wing drop",
    choices: {
      A: "the wing would tend to return to the level position",
      B: "the wing would continue to drop",
      C: "the wing would remain in its displaced position",
      D: "the forces of lift and weight would remain in balance",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following does not increase lateral stability",
    choices: {
      A: "large fin area",
      B: "large keel surface with low CG",
      C: "anhedral",
      D: "dihedral",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When considering the effect of a swept wing on stability with an increase in altitude, which of the following is correct?",
    choices: {
      A: "increased static lateral stability/decreased dynamic lateral stability",
      B: "decreased static lateral stability/decreased dynamic lateral stability",
      C: "same static lateral stability/reduced dynamic lateral stability",
      D: "increased static lateral stability/same dynamic lateral stability",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following increases the tendency for Dutch roll?",
    choices: {
      A: "increased anhedral PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "increased keel surface aft of the CG",
      C: "increased static lateral stability",
      D: "decreased dihedral",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following will increase lateral stability?",
    choices: {
      A: "dihedral/wing mounted engines/high wing",
      B: "high wing/high vertical stabiliser/sweepback",
      C: "low wing/dihedral/elliptical plan form",
      D: "anhedral/low wing/sweepback",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The tendency for Dutch roll increases with",
    choices: {
      A: "increased static directional stability",
      B: "forward CG position",
      C: "increased anhedral",
      D: "increased static lateral stability",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following will reduce lateral stability?",
    choices: {
      A: "Anhedral",
      B: "Tip tanks",
      C: "Dihedral",
      D: "Wing root fairing",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Longitudinal dynamic oscillation takes two forms. One of these, long period oscillation, involves slow changes in",
    choices: {
      A: "height and load factor",
      B: "height and speed",
      C: "pitch and load factor PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "speed and load factor",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following statements about static lateral and directional stability is correct?",
    choices: {
      A: "The effects of static lateral and static directional stability are completely independent ofeachother because they take place about different axis",
      B: "An aeroplane with an excessive static directional stability in relation to its static lateralstability, will be prone to spiral dive (spiral instability)",
      C: "An aeroplane with an excessive static directional stability in relation to its static lateralstability, will be prone to Dutch roll",
      D: "Static directional stability can be increased by installing more powerful engines",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which aeroplane behaviour will be corrected by a yaw damper?",
    choices: {
      A: "Spiral dive",
      B: "Tuck under",
      C: "Dutch roll",
      D: "Buffeting",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Sensitivity for spiral dive will occur when",
    choices: {
      A: "the static directional stability is negative and the static lateral stability is positive",
      B: "the static directional stability is positive and the static lateral stability is relatively weak",
      C: "the static lateral and directional stability are both negative",
      D: "the dutch roll tendency is too strongly suppressed by the yaw damper",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With increasing altitude and constant IAS the static lateral stability (1) and the dynamic lateral/directional stability (2) of an aeroplane with swept-back wing will",
    choices: {
      A: "A - (1) increase; (2) increase",
      B: "B - (1) increase; (2) decrease",
      C: "C - (1) decrease; (2) decrease PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "D - (1) decrease; (2) increase",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which one of the following statements about the dynamic stability of a conventional aeroplane about the lateral axis is correct?",
    choices: {
      A: "An aft C.G. position shortens the period time of the phugoid",
      B: "Speed remains constant during one period of the phugoid",
      C: "Period time of the phugoid is normally 5 sec",
      D: "Damping of the phugoid is normally very weak",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which one of the following systems suppresses the tendency to Dutch roll?",
    choices: {
      A: "Rudder limiter",
      B: "Yaw damper",
      C: "Roll spoilers",
      D: "Spoiler mixer",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When pulling out of a dive the angle of attack",
    choices: {
      A: "increases",
      B: "decreases",
      C: "remains the same",
      D: "cannot be increased at all due to structural considerations",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What will increase the tendency to Dutch roll? A an increased static lateral stability B An increased static directional stability C A forward movement of the centre of gravity An increased anhedralRef: AIR: atpl, cpl;Ans: A23636. Which of the following conditions woujld leave an aircraft susceptivle to spiral divergence? Answers",
    choices: {
      A: "positive lateral stability, negative directional stability",
      B: "over active rudder inputs from the yaw damper when recovering from dutch roll",
      C: "positive longitudinal stability PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "positive directional stability, weak lateral stability",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Dutch roll is a combination of",
    choices: {
      A: "pitch and roll",
      B: "pitch and yaw",
      C: "yaw and roll",
      D: "none of the above",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Aft settings of the CG will",
    choices: {
      A: "increase the possibility of spiral instability",
      B: "increase VMCG",
      C: "increase the possibility of dutch roll",
      D: "increase the elevator stick force gradient",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is the reason for putting the horizontal stabiliser on top of the fin, known as a T- tail?",
    choices: {
      A: "to improve ground clearance during take-off and landing on a contaminated runway",
      B: "to decrease the tendency for super stall",
      C: "to improve the aerodynamic efficiency of the vertical tail",
      D: "to improve the wing efficiency",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During initiation of a turn with speedbrakes extended, the roll spoiler function induces a spoiler deflection",
    choices: {
      A: "on the downgoing wing only",
      B: "upward on the upgoing wing and downward on the downgoing wing",
      C: "on the upgroing wing only PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "downward on the upgoing wing and upward on the downgoing wing",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When are outboard ailerons (if present) de-activated?",
    choices: {
      A: "Flaps (and slats) retracted or speed above a certain value",
      B: "Flaps (and/or slats) extended or speed below a certain value",
      C: "Landing gear retracted",
      D: "Landing gear extended",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Manoeuvreability is best at",
    choices: {
      A: "aft CG position",
      B: "forward CG position",
      C: "high flap settings",
      D: "low speed",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the advantage of a variable incidence tailplane over a fixed incidence tailplane with elevator and trim tab?",
    choices: {
      A: "Linkages and mechanism less complicated",
      B: "Increased flight stability and less weight",
      C: "Less trim drag and maximum elevator authority retained",
      D: "Elevator movement is restricted at high speed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following statements is correct? 1. When the critical engine fails during take-off the speed VMCL can be limiting 2. The speed VMCL is always limited by maximum rudder deflection",
    choices: {
      A: "1 is incorrect, 11 is incorrect",
      B: "1 is correct, 11 is correct",
      C: "1 is correct, 11 is incorrect",
      D: "1 is incorrect, 11 is correct PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The range of control surface movements is limited by",
    choices: {
      A: "leaving control cables a little stack",
      B: "tensioning control cables correctly",
      C: "defined limits is the operations manual",
      D: "providing control stops",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Over tensioned cables is a flying control system could result in",
    choices: {
      A: "appreciable difference",
      B: "insufficient friction in the system",
      C: "excessive friction in the system",
      D: "restricted movement of control surfaces",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The axes of an aircraft by definition must all pass through the",
    choices: {
      A: "flight desk",
      B: "aircraft datum",
      C: "centre of pressure",
      D: "centre of gravity",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The normal axis of an aircraft is",
    choices: {
      A: "the axis passing from nose to tail of the aircraft",
      B: "an axis through the CP, perpendicular to the longitudinal axis",
      C: "an axis through the CG, perpendicular to the longitudinal axis",
      D: "the axis which is a straight line passing through the CG which is parallel to a linepassing through the wing tips PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A cable operated control system has external locks",
    choices: {
      A: "when fitted to the control surface, they will prevent movement of the control column if thecontrols are not fitted with servo tabs",
      B: "they will not prevent movement of the control column",
      C: "they will not be necessary because controls are irreversible and cannot be moved by thewind",
      D: "will prevent movement of a servo tab",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The aerodynamic force on a control surface",
    choices: {
      A: "increases as speed increases",
      B: "depends only on the control angle and is independent of speed",
      C: "depends only on the air density",
      D: "decreases as speed increases",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Control surface flutter",
    choices: {
      A: "a rapid oscillation of the control surface in flight",
      B: "buffeting of the controls, caused by separation of the airflow over the control surface",
      C: "the tendency of the control surface to move onto its stops due to overbalance",
      D: "movement of the control, due to gusts, when the aircraft is on the ground",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Power assisted flying controls",
    choices: {
      A: "give no feel",
      B: "are irreversible",
      C: "give no manual reversion",
      D: "give some feel PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following devices is used to counter adverse yaw on rolling into or out of a turn?",
    choices: {
      A: "Differential ailerons",
      B: "A yaw damper",
      C: "A dorsal fin",
      D: "Vortex generators",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane has a servo-tab controlled elevator. What will happen when only the elevator jams during flight?",
    choices: {
      A: "The pitch control forces double",
      B: "Pitch control has been lost",
      C: "The servo-tab now works as a negative trim-tab",
      D: "Pitch control reverses direction",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The centre of gravity moving aft will",
    choices: {
      A: "increase the elevator up effectiveness",
      B: "decrease the elevator up effectiveness",
      C: "not affect the elevator up or down effectiveness",
      D: "increase or decrease the elevator up effectiveness, depending on wing location",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In a mechanically controlled aeroplane, the most forward allowable position of the centre of gravity could be limited by the",
    choices: {
      A: "elevator capability, elevator control forces",
      B: "engine thrust, engine location",
      C: "trim system, trim tab surface",
      D: "wing surface, stabiliser surface",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When the control column is moved forward and to the right",
    choices: {
      A: "the elevator goes down, the starboard aileron moves down and the port aileron moves up",
      B: "the elevator goes up, the starboard aileron moves up and the port aileron moves down",
      C: "the elevator goes down, the starboard aileron moves up and the port aileron moves down",
      D: "the elevator goes up, the starboard aileron moves down and the port aileron moves up",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft is approaching to land with its CG at the forward limit. It will be to flare and VREF will be than normal.",
    choices: {
      A: "difficult; higher",
      B: "easy; lower",
      C: "easy; higher",
      D: "difficult; lower",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When the C.G. position is moved forward, the elevator deflection for a manoeuvre with a load factor greater than 1 will be",
    choices: {
      A: "larger",
      B: "smaller",
      C: "unchanged",
      D: "dependent on trim position",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft is fitted with an elevator with a servo tab mechanism in the pitch control system. If the elevator becomes jammed, what is the effect on pitch control?",
    choices: {
      A: "The servo tab will become a negative trim tab",
      B: "Some pitch control will be retained, working in the reverse sense",
      C: "The servo tab will become an anti-balance tab",
      D: "Pitch control will be lost",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the effect on the aeroplane's static longitudinal stability of a shift of the centre of gravity to a more aft location and on the required control deflection for a certain pitch up or down?",
    choices: {
      A: "The static longitudinal stability is smaller and the required control deflection is larger PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "The static longitudinal stability is larger and the required control deflection is smaller",
      C: "The static longitudinal stability is larger and the required control deflection is larger",
      D: "The static longitudinal stability is smaller and the required control deflection is smaller",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Rotation about the lateral axis is called",
    choices: {
      A: "yawing",
      B: "slipping",
      C: "pitching",
      D: "rolling",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A jet transport aeroplane exhibits pitch up when thrust is suddenly increased from an equilibrium condition, because the thrust line is below the",
    choices: {
      A: "CG",
      B: "drag line of action",
      C: "neutral point",
      D: "centre of pressure",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The air loads on the horizontal tailplane )tail load) of an aeroplane in straight and level cruise flight",
    choices: {
      A: "will in principle be zero on transport aeroplanes without an electronic flight control system(Fly-by-Wire) due to the trim system",
      B: "are generally directed upwards and will increase when cg is moved forward",
      C: "are generally directed downwards and will become less negative when the cg moves aft",
      D: "are generally directed downwards and will always become less negative in a linear fashion withincreasing airspeed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The pitch angle is defined as the angle between the",
    choices: {
      A: "chord line and the horizontal plane PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "longitudinal axis and the chord line",
      C: "longitudinal axis and the horizontal plane",
      D: "speed vector axis and the longitudinal axis",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With the CG on the aft limit the control forces required to pitch the aircraft would be",
    choices: {
      A: "less than with a forward CG",
      B: "more than with a forward CG",
      C: "the same as with a forward CG",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If an increase in power tends to make the nose of an aeroplane rise, this is the result of the",
    choices: {
      A: "line of thrust being below the CG",
      B: "centre of lift being ahead of the CG",
      C: "centre of lift and CG being collocated",
      D: "line of thrust being above the CG",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On an aircraft with an all-moving tail plane, backward movement of the control wheel in flight causes",
    choices: {
      A: "an increase in tail plane incidence and nose up pitch",
      B: "an upward movement of the trimming tab and nose up pitch",
      C: "an increase in tail plane incidence and nose down pitch",
      D: "a decrease in tail plane incidence and nose up pitch",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If an aircraft has a down-load on the tail plane, as the elevator is lowered",
    choices: {
      A: "the down-load is increased",
      B: "the down-load is decreased",
      C: "the down-load remains the same unless the tail plane incidence is changed",
      D: "the negative camber is increased PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "For an aircraft with a manually operated elevator",
    choices: {
      A: "the neutral point will be forward of the CG",
      B: "the neutral point will be aft of the CG",
      C: "the neutral point will be coincident with the CG",
      D: "there will be a neutral point but no static margin",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The elevators control the aircraft around",
    choices: {
      A: "the lateral axis",
      B: "the longitudinal axis",
      C: "the normal axis",
      D: "the horizontal stabiliser",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Force on the tail and its effect on Vs due to CG movement",
    choices: {
      A: "if rearward gives a reduced down force on the tail/Vs will be higher",
      B: "if forward gives a reduced down force on the tail/Vs will be higher",
      C: "if rearward gives a reduced down force on the tail/Vs will be reduced",
      D: "if rearward gives an increased down force on the tail/Vs will be reduced",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the advantage of a variable incidence tail plane over a fixed incidence tail plane with elevator and trim tab?",
    choices: {
      A: "more powerful trim",
      B: "increased flight stability",
      C: "less weight",
      D: "linkages and mechanisms less complicated",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the horizontal stabiliser gets stuck in the cruise position what action should you take on landing?",
    choices: {
      A: "land at slower speed",
      B: "land at faster speed with less flap",
      C: "move pax forward",
      D: "use the mach trim system",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When is the greatest up elevator angle required for landing?",
    choices: {
      A: "flaps extended with a forward CG",
      B: "flaps extended and an aft CG",
      C: "flaps up with a forward CG",
      D: "flaps up with an aft CG",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With forward CG movement the elevator deflection required for a manoeuvre with load factor greater than one will",
    choices: {
      A: "increase",
      B: "decrease",
      C: "remain constant",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An advantage of locating the engines at the rear of the fuselage, in comparison to a location beneath the wing is",
    choices: {
      A: "a wing which is less sensitive to flutter",
      B: "easier maintenance of the engines",
      C: "less influence on longitudinal control of thrust changes",
      D: "lighter wing construction",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Left rudder input will cause",
    choices: {
      A: "left yaw about the vertical axis and left roll about the longitudinal axis",
      B: "right yaw about the vertical axis and right roll about the longitudinal axis PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "left yaw about the vertical axis and right roll about the longitudinal axis",
      D: "right yaw about the vertical axis and left roll about the longitudinal axis",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What happens during an engine failure with two similar aeroplanes with wing mounted engines, one of them with jet engines, the other one with co-rotating propellers",
    choices: {
      A: "more roll tendency for the propeller aeroplane",
      B: "the same yaw tendency for both aeroplanes regardless of left or right engine failure",
      C: "the same roll tendency for both aeroplanes",
      D: "less roll tendency for the propeller aeroplane",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If the right rudder is pushed forward",
    choices: {
      A: "the rudder moves to the left and the aircraft yaws to the right",
      B: "the rudder moves to the right and the aircraft yaws to the left",
      C: "the rudder moves to the right and the aircraft yaws to the right",
      D: "the rudder moves to the left and the aircraft yaws to the left",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A symmetrical fin will give a side force",
    choices: {
      A: "with rudder neutral and no yaw",
      B: "only when rudder is applied",
      C: "only when the aircraft yaws",
      D: "when rudder is applied and when the aircraft yaws",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If left rudder is applied",
    choices: {
      A: "the aircraft will roll to the left and yaw to the right",
      B: "the aircraft will yaw to the left and roll to the right",
      C: "the aircraft will yaw to the left and roll to the left",
      D: "the aircraft will yaw to the left, but there will be no rolling moment PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Directional control is",
    choices: {
      A: "by ailerons around the longitudinal axis",
      B: "by rudder around the normal axis",
      C: "by elevator around the lateral axis",
      D: "by rudder around the longitudinal axis",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When the rudder pedals are moved to cause a yaw to the left",
    choices: {
      A: "the left pedal is moved forward and the rudder moves to the right",
      B: "the right pedal is moved forward and the rudder moves to the left",
      C: "the left pedal is moved forward and the rudder moves to the left",
      D: "the right pedal is moved forward and the rudder moves to the right",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following statements concerning control is correct?",
    choices: {
      A: "In general the maximum downward elevator deflection is larger than upward",
      B: "On some aeroplanes, the servo tab also serves as a trim tab",
      C: "Hydraulically powered control surfaces do not need mass balancing",
      D: "In a different aileron control system the control surfaces have a larger upward thandownward maximum deflection",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Rolling is the rotation of the aeroplane about the",
    choices: {
      A: "longitudinal axis",
      B: "vertical axis",
      C: "lateral axis",
      D: "wing axis",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Differential aileron deflection",
    choices: {
      A: "increases the CLmax",
      B: "is required to keep the total lift constant when ailerons are deflected",
      C: "equals the drag of the right and left aileron",
      D: "is required to achieve the required roll-rate",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A modern jet aeroplane equipped with inboard and outboard ailerons plus roll control spoilers is cruising at its normal cruise Mach number",
    choices: {
      A: "only the inboard ailerons are active, the spoilers may be active",
      B: "the inboard and outboard ailerons are active, the spoilers may be active",
      C: "only the outboard ailerons are active, the spoilers may be active",
      D: "only the spoilers will be active, not the ailerons",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Roll is",
    choices: {
      A: "rotation about the longitudinal axis due to speed brake selection",
      B: "rotation about the normal axis",
      C: "due to aileron deflection and is motion about the lateral axis",
      D: "rotation about the longitudinal axis",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "How is adverse yaw compensated for during entry into and roll out from a turn?",
    choices: {
      A: "Anti-balanced rudder control",
      B: "Horn-balanced controls",
      C: "Differential aileron deflection",
      D: "Servo tabs",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which motion occurs about the longitudinal axis?",
    choices: {
      A: "Sideslip PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "Rolling",
      C: "Pitching",
      D: "Yawing",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which phenomenon is counteracted with differential aileron deflection?",
    choices: {
      A: "Turn co-ordination",
      B: "Aileron reversal",
      C: "Sensitivity for spiral dive",
      D: "Adverse yaw",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In an aircraft fitted with spoilers for lateral control, and not deployed as speed brakes, a roll to the right is initiated by",
    choices: {
      A: "right spoiler extended, left spoiler retracted",
      B: "both spoilers extended",
      C: "left spoiler extended, right spoiler retracted",
      D: "right spoiler extended, but left spoiler extended more",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "One method to compensate adverse yaw is a",
    choices: {
      A: "differential aileron",
      B: "balance tab",
      C: "antibalance tab",
      D: "balance panel",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Flaperons are controls which are used simultaneously as",
    choices: {
      A: "flaps and elevator",
      B: "ailerons and flaps",
      C: "ailerons and elevator PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "flaps and speed brakes",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If a turbulent gust causes an aeroplane to roll",
    choices: {
      A: "the down going wing experiences a decrease in angle of attack",
      B: "the down going wing experiences an increase in angle of attack",
      C: "the down going wing has no angle of attack",
      D: "the angle of attack depends on whether the aeroplane changes speed",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Adverse aileron yaw can be countered by",
    choices: {
      A: "aileron reversal",
      B: "nothing (it is all a desirable flight characteristic)",
      C: "aileron snatch",
      D: "differential ailerons",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane is provided with spoilers and both inboard and outboard ailerons. Roll control during cruise is provided by",
    choices: {
      A: "outboard ailerons and roll spoilers",
      B: "inboard ailerons and roll spoilers",
      C: "inboard and outboard ailerons",
      D: "outboard ailerons only",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In what phase of flight are the outboard ailerons (if fitted) not active?",
    choices: {
      A: "Take-off, until lift-off",
      B: "Cruise",
      C: "Approach",
      D: "Landing with a strong and gusty crosswind, to avoid over-controlling the aeroplane",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which component of drag increases most when an aileron is deflected upwards?",
    choices: {
      A: "Induced drag",
      B: "Interference drag",
      C: "Wave drag",
      D: "Form drag",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "While an aircraft is rolling, the down-going and up-going wing",
    choices: {
      A: "provides a force to increase the rate of roll",
      B: "provides a damping force which reduces the rate of roll",
      C: "has a reduced effective angle of attack",
      D: "will stall due to the increased effective angle of attack",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Why do some aeroplanes equipped with inboard/outboard ailerons use the outboards for slow flight only?",
    choices: {
      A: "locking out the outboard ailerons in high speed flight provides variable flight controlfeel",
      B: "aerodynamic loads on the outboard ailerons tend to twist the wingtips at high speeds",
      C: "increased surface area provides greater controllability with flap extension",
      D: "none of the above",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On an aircraft on which the ailerons are assisted by spoilers to give lateral control, if the control wheel is turned to the right",
    choices: {
      A: "the right aileron moves up, right spoiler remains retracted, left spoiler moves up, leftaileron down",
      B: "the right aileron moves up, right spoiler up, left spoiler remains retracted, left ailerondown",
      C: "the right aileron moves down, right spoiler up, left spoiler remains retracted, leftaileron up",
      D: "the right aileron moves up, right spoiler up, left spoiler remains retracted, left spoilerneutral",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For a given IAS and angle of aileron deflection, increasing altitude will",
    choices: {
      A: "reduce the rate of roll",
      B: "increase the rate of roll",
      C: "increase the rate of turn",
      D: "reduce the rate of turn",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Lateral control is given by",
    choices: {
      A: "the ailerons around the lateral axis",
      B: "the elevators around the lateral axis",
      C: "the rudder around the normal axis",
      D: "the ailerons around the longitudinal axis",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The aileron on which the leading edge protrudes below the wing when the aileron is raised, but not above it when the aileron is lowered is",
    choices: {
      A: "a differential aileron",
      B: "a drooped aileron",
      C: "a frise aileron",
      D: "a mass balanced aileron",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Spoilers are operated asymmetrically",
    choices: {
      A: "to provide pitch control",
      B: "to provide roll control",
      C: "to provide yaw control",
      D: "as airbrakes in flight",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following is true with regard to inboard ailerons?",
    choices: {
      A: "used during low speed flight only PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "used during low and high speed flight",
      C: "used during high speed flight",
      D: "activated by the GPWS",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When the control column is moved back and to the left",
    choices: {
      A: "the elevators move down and the left aileron moves down",
      B: "the left aileron moves up and the elevators move up",
      C: "the elevators move up and the left aileron moves down",
      D: "the left aileron moves down and the elevators move down",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a differential aileron system",
    choices: {
      A: "the aileron moves further up than down",
      B: "the aileron moves further down than up",
      C: "the leading edge of the up going aileron projects below the wing",
      D: "the ailerons are inter-connected with the rudder",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Adverse yaw during a turn entry is caused by",
    choices: {
      A: "decreased induced drag on the lowered wing and increased induced drag on the raised wing",
      B: "increased induced drag on the lowered wing and decreased induced drag on the raised wing",
      C: "increased parasite drag on the raised wing and decreased parasite drag on the lowered wing",
      D: "decreased induced drag on the raised wing and decreased induced drag on the lowered wing",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When rolling out of a steep banked turn, what causes the lowered aileron to create more drag than when rolling into the turn?",
    choices: {
      A: "the wing being raised is travelling faster through the air than the wing being lowered",
      B: "the wing being lowered is travelling faster through the air and producing more lift than thewing being raised PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "the angle of attack of the wing being raised is greater as the rollout is started",
      D: "none of the above",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of deflection of a differential aileron when the aircraft is being rolled will be",
    choices: {
      A: "greatest on the up going aileron on the up going wing",
      B: "greatest on the down going aileron on the up going wing",
      C: "greatest on the up going aileron on the down going wing",
      D: "greatest on the down going aileron on the down going wing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is a true statement with regard to inboard ailerons?",
    choices: {
      A: "inboard ailerons are used during low speed flight only",
      B: "inboard ailerons are used during low speed and high speed flight",
      C: "inboard ailerons are used during high speed flight only",
      D: "inboard ailerons are activated by the GPWS",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When an aircraft is rolled to the left, adverse aileron yaw will be reduced",
    choices: {
      A: "by a frise aileron being effective on the left wing",
      B: "by fries ailerons producing increased drag on both surfaces",
      C: "by the leading edge of the downgoing aileron protruding into the airflow",
      D: "by the down going aileron moving through a greater angle of deflection than the up goingaileron",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On an aircraft with a differential aileron control system, when the control wheel is turned to the right",
    choices: {
      A: "the right aileron moves up, and the left aileron moves down through a greater angle",
      B: "the right aileron moves down and the left aileron moves up through a greater angle",
      C: "the left aileron moves down and the right aileron moves up through a greater angle PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "the left aileron moves up and the right aileron moves down through a greater angle",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a turn, differential ailerons",
    choices: {
      A: "reduce the drag on the inner wing",
      B: "reduce the drag on the outer wing",
      C: "reduce the drag on both wings",
      D: "increase the drag on the upper wing",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Spoilers are normally extended",
    choices: {
      A: "on the upper and lower wing surfaces in flight",
      B: "on the upper wing surfaces on the down going wing",
      C: "on the lower wing surface on the up going wing",
      D: "on the upper surface of both wings to roll the aircraft",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Roll rate is rotation about the",
    choices: {
      A: "normal axis",
      B: "longitudinal axis due to speed brake selection",
      C: "longitudinal axis",
      D: "lateral axis",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a turn with speed brakes extended, roll control spoilers",
    choices: {
      A: "move on the down going wing only",
      B: "move on the up going wing only",
      C: "move up on the down going wing, down on the up going wing",
      D: "move down on the down going wing, up on the up going wing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Adverse yaw in a turn is corrected with",
    choices: {
      A: "differential ailerons",
      B: "horn balance",
      C: "mass in the nose of the aeroplane",
      D: "anti-balance tabs",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is the correct example of differential aileron deflection to initiate a left turn?",
    choices: {
      A: "left aileron up 5o/right aileron down 2o",
      B: "right aileron up 5o/left aileron down 2o",
      C: "left aileron up 2o/right aileron down 5o",
      D: "right aileron up 2o/left aileron down 5o",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following phenomena is prevented by differential ailerons?",
    choices: {
      A: "adverse yaw",
      B: "turn co-ordination",
      C: "sensitivity to spiral dive",
      D: "aileron reversal",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When are outboard ailerons locked out?",
    choices: {
      A: "flaps retracted",
      B: "landing gear retracted",
      C: "landing gear extended",
      D: "flaps extended",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Rolling is a movement about the axis",
    choices: {
      A: "lateral/lateral PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "lateral/longitudinal",
      C: "longitudinal/lateral",
      D: "longitudinal/longitudinal",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane fitted with spoilers is rolling to the right, which way do the spoilers move?",
    choices: {
      A: "down on the downgoing wing",
      B: "up on the downgoing wing",
      C: "up on the upgoing wing",
      D: "down on the upgoing wing",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane fitted with differential ailerons is in a level turn to the right. Which of the following statements is correct?",
    choices: {
      A: "the left aileron moves up more than the right aileron moves down",
      B: "the left aileron moves down more than the right aileron moves up",
      C: "the right aileron moves up more than the left aileron moves down",
      D: "theright aileron moves down more than left aileron moves up",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An aircraft's tendency to dutch roll may be reduced by",
    choices: {
      A: "reducing the size of the fin",
      B: "giving the wings an angle of anhedral",
      C: "sweeping the wings",
      D: "giving the aircraft longitudinal dihedral",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When an aircraft is rolled to port, adverse yaw will be reduced by",
    choices: {
      A: "the leading edge of the down going aileron protruding into the airflow",
      B: "Frise ailerons producing increased profile leading edge drag on both surfaces",
      C: "a Frise aileron being effective on the port wing PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "the down going aileron producing a greater angle of deflection than the up going aileron",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which moments or motions interact in a dutch roll?",
    choices: {
      A: "Rolling and yawing",
      B: "Pitching and yawing",
      C: "Pitching and rolling",
      D: "Pitching and adverse yaw",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When a jet aircraft enters a turn or straightens-up from a turn, what device ensures correct response?",
    choices: {
      A: "Dorsal fin",
      B: "Yaw damper",
      C: "Aileron rudder coupling",
      D: "Vortex generators",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If the nose of an aeroplane yaws left, this causes",
    choices: {
      A: "a roll to the right",
      B: "a decrease in relative airspeed on the right wing",
      C: "an increase in lift on the left wing",
      D: "a roll to the left",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What are the secondary effects of rudder and aileron respectively",
    choices: {
      A: "yaw and roll",
      B: "roll and yaw",
      C: "pitch and roll",
      D: "yaw and pitch",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When the rudder is moved to the right, the force acting on the fin",
    choices: {
      A: "gives a yawing moment but no rolling moment",
      B: "gives a rolling moment to the left",
      C: "gives a rolling moment to the right",
      D: "gives a nose-up pitching moment because the force is applied above the CG",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If an aircraft yaws to port, the secondary effect will be",
    choices: {
      A: "roll right",
      B: "roll left",
      C: "pitch up",
      D: "pitch down",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The inputs to the Q unit are from",
    choices: {
      A: "static and temperature",
      B: "pitot and static",
      C: "altitude and pitot",
      D: "pilot and altitude",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Examples of aerodynamic balancing of control surfaces are",
    choices: {
      A: "spring tab, servo tab, and power assisted control",
      B: "balance tab, horn balance, and mass balance",
      C: "mass in the nose of the control surface, horn balance and mass balance",
      D: "servo tab, spring tab, seal between the wing trailing edge and the leading edge of controlsurface",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A horn balance in a control system has the following purpose",
    choices: {
      A: "to decrease the effective longitudinal dihedral of the aeroplane",
      B: "to prevent flutter",
      C: "to obtain mass balancing",
      D: "to decrease stick forces",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If an aircraft is fitted with powered flying controls, which of the following would be used in the case of manual reversion?",
    choices: {
      A: "Balance tab",
      B: "Anti-balance tab",
      C: "Spring tab",
      D: "Servo tab",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which kind of tab is commonly used in case of manual reversion of fully powered flight controls?",
    choices: {
      A: "Balance tab",
      B: "Spring tab",
      C: "Servo tab",
      D: "Anti-balance tab",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The inputs to the Q feel unit are from",
    choices: {
      A: "static pressure and temperature",
      B: "pitot and static pressures",
      C: "altitude and pitot pressure",
      D: "pitot pressure and total head pressure",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "On take-off with the CG at the forward limit",
    choices: {
      A: "elevator stick force is less because of the increased tailplane arm",
      B: "elevator stick force to rotate the aircraft at VR will be unchanged, because the aircraft PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "VMCG is lower due to the increased fin arm",
      D: "elevator stick forces will be higher at VR",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Aerodynamic balance can be obtained by",
    choices: {
      A: "a weight mounted forward of the control surface hinge line",
      B: "an external balance, provided by a seal from the wing to the traiing edge of the aileron",
      C: "an internal balance (the leading edge of the aileron is housed within a box inside the wing trailing edge, vented to atmosphere, with a seal from the wing to the leading dge of theaileron)",
      D: "the down going aileron moving through a smaller angle than the up going aileron",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "To hold a given sideslip angle and airspeed, increased geometric dihedral would",
    choices: {
      A: "reduce the stick force to zero",
      B: "have no effect on stick force",
      C: "decrease the stick force",
      D: "increase the stick force",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Stick forces, provide by an elevator feel system, depend on",
    choices: {
      A: "stabiliser position, static pressure",
      B: "elevator deflection, dynamic pressure",
      C: "elevator deflection, static pressure",
      D: "stabiliser position, total pressure",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When power assisted controls are used for pitch control, this",
    choices: {
      A: "makes trimming superfluous",
      B: "ensures that a part of the aerodynamic forces is still felt on the column PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "makes aerodynamic balancing of the control surfaces meaningless",
      D: "can only function in combination with an elevator trim tab",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement about a primary control surface controlled by a servo tab, is correct?",
    choices: {
      A: "The position is undetermined during taxiing, in particular with tailwind",
      B: "The servo tab can also be used as a trimtab",
      C: "Due to the effectiveness of the servo tab the control surface area can be smaller",
      D: "The control effectiveness of the primary surface is increased by servo tab deflection",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When flutter damping of control surfaces is obtained by mbas balancing, these weights will be located with respect to the hinge of the control surface",
    choices: {
      A: "above the hinge",
      B: "below the hinge",
      C: "in front of the hinge",
      D: "behind the hinge",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Examples of aerodynamic balancing of control surfaces are",
    choices: {
      A: "Fowler flaps, upper and lower rudder",
      B: "seal between wing's trailing edge and leading edge of a control surface, horn balance",
      C: "upper and lower rudder, seal between wing's trailing edge and leading edge of a control surface",
      D: "weight in the nose of the control surface, horn balance",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A downward adjustment of a trim tab in the longitudinal control system, has the following effect",
    choices: {
      A: "the stick force stability remains constant",
      B: "the stick position stability increases",
      C: "the stick position stability remains constant",
      D: "the stick force stability decreases PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Examples of aerodynamic balancing of control surfaces are",
    choices: {
      A: "weight in the nose of the control surface, horn balance",
      B: "upper and lower rudder, seal between wing's trailing edge and leading edge of a control surface",
      C: "seal between wing's trailing edge and leading edge of a control surface, horn balance",
      D: "Fowler flaps, upper and lower rudder",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Upward deflection of a trim tab in the longitudinal control results in",
    choices: {
      A: "the stick position stability remaining constant",
      B: "increasing the stick position stability",
      C: "increasing the stick force stability",
      D: "the stick force stability remaining constant",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the fundamental difference between a trim tab and a servo tab?",
    choices: {
      A: "A servo tab affects the stick force stability, whereas a trim tab does not",
      B: "The purpose of a trim tab is to reduce continuous stick force to zero, a servo tab onlyreduces stick force",
      C: "A trim tab is automatically adjusted when its particular control surface moves, whereas aservo tab is moved independently of its particular control surface",
      D: "The functioning of a trim tab is based on aerodynamic balancing, whereas a servo tab is usuallyadjusted via a screwjack",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which statement is correct about a spring tab?",
    choices: {
      A: "At high IAS it behaves like a servo tab",
      B: "At low IAS it behaves like a servo tab",
      C: "At high IAS it behaves like a fixed extension of the elevator",
      D: "Its main purpose is to increase stick force per g PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which three aerodynamic means decrease manoeuvring stick forces?",
    choices: {
      A: "Servo tab horn balance spring tab",
      B: "Servo tab trim tab balance tab",
      C: "Spring tab trim tab mass balancing weight",
      D: "Spring tab horn balance bobweight",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A servo tab on the rudder moves",
    choices: {
      A: "when the rudder pedals are moved",
      B: "when the rudder is moved",
      C: "when the rudder trim wheel is moved",
      D: "in the same direction as the rudder to make the rudder more effective at low speed",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On an aileron with an inset hinge, the leading dge of the control surface may protrude above or below the wing surface when the control is moved. This is to",
    choices: {
      A: "give assistance to the pilot to move the control",
      B: "increase the effectiveness of the control",
      C: "increase the drag in a turn",
      D: "give a mass balance",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Balance tabs",
    choices: {
      A: "move in the same direction as the control surface",
      B: "move in the same direction as control surfaces and trim tabs",
      C: "move in the opposite direction to control surfaces and the same direction as trim tabs",
      D: "move in the opposite direction to both control surfaces and trim tabs",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Aerodynamic balance on a flying control is used to",
    choices: {
      A: "prevent flutter of the flying control",
      B: "reduce the load required to move the control",
      C: "reduce the control load to zero",
      D: "balance the aircraft about its axes",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the control surface hinge is placed too far back from the control surface leading edge",
    choices: {
      A: "control effectiveness will be reduced",
      B: "the controls will be too heavy",
      C: "range of control surface movement will be reduced",
      D: "control surface CP may move ahead of the hinge and cause overbalance",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An inset hinge is an example of (i) balance and a horn balance is an example of (ii) balance",
    choices: {
      A: "(i) mass; (ii) mass",
      B: "(i) mass; (ii) aerodynamic",
      C: "(i) aerodynamic; (ii) mass",
      D: "(i) aerodynamic; (ii) aerodynamic",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An aileron control surface is provided with an inset hinge",
    choices: {
      A: "to prevent flutter",
      B: "to prevent adverse aileron yaw",
      C: "to provide aerodynamic balance",
      D: "to increase the stick force",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Inset hinges",
    choices: {
      A: "provide mass forward of the control surface CG to prevent flutter PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "provide mass aft of the hinge line to prevent flutter",
      C: "provide aerodynamic assistance to the pilot",
      D: "prevent over balance of the controls",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A graduated horn balance",
    choices: {
      A: "gives a high degree of assistance at high speed",
      B: "ensures that only a limited degree of assistance is available at low speed",
      C: "prevents over balance resulting from excess balance at high speed",
      D: "provides the required amount of aerodynamic assistance to the pilot at lowspeed",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A balance tab is an auxiliary surface fitted to a main control surface operated",
    choices: {
      A: "automatically to assist the pilot to move the controls",
      B: "automatically to provide feel",
      C: "independently by the pilot to remove excessive loads from the controls",
      D: "directly by the pilot to cause movement of the main control surface",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A balance tab reduces aerodynamic stick forces",
    choices: {
      A: "and control effectiveness",
      B: "but increases control effectiveness",
      C: "and has no effect on control effectiveness",
      D: "none of the above",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the purpose of a balance tab?",
    choices: {
      A: "Move the flight controls in the event of manual reversion",
      B: "reduce control forces by deflecting in the proper direction to move a primary flight control",
      C: "prevent a control surface from moving to a full-deflection position due to aerodynamic PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "decrease control forces by deflecting in the sam direction as the main control",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which direction from the primary control surface does an anti-balance tab move?",
    choices: {
      A: "opposite direction",
      B: "same direction",
      C: "remains fixed for all positions",
      D: "fixed at low speeds, same direction at high speed",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An anti-balance tab moves in the",
    choices: {
      A: "opposite direction to the control surface and increases control effectiveness",
      B: "same direction as the control surface and increases control effectiveness",
      C: "opposite direction to the control surface and decreases control effectiveness",
      D: "same direction as the control surface and decreases control effectiveness",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following devices is used to provide aerodynamic balance?",
    choices: {
      A: "trim tab",
      B: "fries ailerons",
      C: "anti-balance tab",
      D: "mass balance fitted forward of the hinge line",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When an elevator is deflected down the balance tab will",
    choices: {
      A: "maintain its chord line parallel to the elevator chord line",
      B: "move up relative to the elevator chord line",
      C: "move down relative to the elevator chord line",
      D: "maintain its chord line parallel to the tail plane chord line",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With the aircraft stationary, if the control column is pulled back, a sprig tab on the elevator will",
    choices: {
      A: "move down relative to the elevator",
      B: "move up relative to the elevator",
      C: "remain in the neutral position relative to the elevator",
      D: "remain in the neutral position until the elevator reaches the limit of its travel, and thenmove up",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A tab fitted to zero the loads on the pilot¿s control during flight is known as",
    choices: {
      A: "a balance tab",
      B: "a spring tab",
      C: "an anti-balance tab",
      D: "a trim tab",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Some aircraft are fitted with fixed trimming tabs",
    choices: {
      A: "these are set by the manufacturer and must not be altered",
      B: "these may be adjusted only on the ground",
      C: "these may be adjusted by the pilot in flight",
      D: "these may be adjusted by the manufacturer",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For an aircraft fitted with servo operated controls, if external locks are fitted to the main control surfaces",
    choices: {
      A: "they will prevent movement of the control wheel, the control surfaces and the servo tabs",
      B: "they will prevent movement of the control surfaces but not the control wheel or the servotabs",
      C: "they will prevent movement of the control wheel and the control surfaces but not the servotabs",
      D: "they will prevent movement of the control wheel and the servo tabs but not the controlsurfaces",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a servo tab operated control system, movement of the tab",
    choices: {
      A: "is always in the same direction as the control surface",
      B: "is always in the opposite direction to the control surface",
      C: "may be either opposite or in the same direction as the control surface",
      D: "is controlled directly by the main control surface",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "For an aircraft fitted with servo tabs",
    choices: {
      A: "locks fitted on the control surface will not prevent movement of the control wheel",
      B: "locks on the control surface will prevent movement of the control wheel",
      C: "locks on the control surface will prevent movement of the tabs",
      D: "none of the above",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Aerodynamic balance may be achieved by",
    choices: {
      A: "a fixed trimming tab",
      B: "a horn balance",
      C: "a weight attached forward of the control hinge",
      D: "a spring attached to the rudder control circuit",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If servo tabs are fitted to a main control surface",
    choices: {
      A: "they make the control surface effective allowing for a reduced size to be used",
      B: "they also act as trim tabs",
      C: "they are activated by movement of the control surface",
      D: "the controls are less effective at low speed",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft is fitted with a servo tab, if the elevator becomes jammed, what is the effect of the servo tab?",
    choices: {
      A: "pitch control will be lost PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "it will become an anti-balance tab",
      C: "it will become a negative trim tab",
      D: "it will reverse the direction of pitch input",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Stick force artificial feel depends on",
    choices: {
      A: "elevator deflection/static pressure",
      B: "elevator deflection/dynamic pressure",
      C: "stabiliser deflection/total pressure",
      D: "stabiliser deflection/static pressure",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The force characteristics of a q feel system rely on",
    choices: {
      A: "hydraulic pressure",
      B: "dynamic pressure",
      C: "static pressure",
      D: "kinetic pressure",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The location of mass balance weights is",
    choices: {
      A: "on the hinge line if the control surface has an inset hinge",
      B: "on the hinge line if the control surface does not have an inset hinge",
      C: "always on the hinge line, irrespective of the type of aerodynamic balance",
      D: "in front of the hinge line",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Mass balance to reduce control flutter is not required on",
    choices: {
      A: "aircraft with a fully powered irreversible control system with no manual emergency system",
      B: "aircraft with a fully powered irreversible control system",
      C: "aircraft limited to speeds below 200kt PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "aircraft with short rigid wings",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When a large modern aircraft employs a variable incidence tailplane, trim changes are made by",
    choices: {
      A: "adjusting the trim tab on the trailing edge of the elevator",
      B: "changing the angle of the entire tailplane",
      C: "varying the spring bias trimming system",
      D: "adjusting the Q feel unit",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If an aeroplane exhibits insufficient sticl force per g, this problem can be resolved by installing",
    choices: {
      A: "a spring which pulls the stick backwards",
      B: "a bobweight in the control system which pulls the stick forwards",
      C: "a spring which pushes the stick forwards",
      D: "a bobweight in the control system which pulls the stick backwards",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Mass-balancing of control surfaces is used to",
    choices: {
      A: "increase the stick force stability",
      B: "limit the stick forces",
      C: "ensure that the control surfaces are in the mid-position during taxiing",
      D: "prevent flutter of control surfaces",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement is correct? l. On fully hydraulic powered flight controls there is no need for mass balancing ll. On fully hydraulic powered flight controls there is no need for trim tabs",
    choices: {
      A: "1 is incorrect, ll is correct",
      B: "l is incorrect, ll is incorrect PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "l is correct, ll is correct",
      D: "l is correct, ll is incorrect",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The effect of a mass balance weight is to",
    choices: {
      A: "move the control surface CG forward onto the control hinge",
      B: "increase the mass of the control surface without moving its CG",
      C: "move the control surface G rearwards",
      D: "make the mass balance weight coincident with the control hinge",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If mass balance is used to reduce flutter, it should be attached to a control surface",
    choices: {
      A: "on the hinge",
      B: "behind the hinge",
      C: "above the hinge",
      D: "in front of the hinge",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Power assisted flying control systems have trim controls primarily in order to",
    choices: {
      A: "allow the pilot to maintain control in case of hydraulic failure",
      B: "relieve stresses on the trim tab",
      C: "relieve stresses on the hydraulic actuators",
      D: "bring the control forces to zero in steady flight",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following is an advantage of engines mounted on the rear fuselage over those mounted in wing pods?",
    choices: {
      A: "Wings can have a lighter form of construction PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "The wing is less likely to suffer from flutter",
      C: "Easier maintenance access",
      D: "Longitudinal trim is less affected by changes in thrust",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "One advantage of a movable-stabiliser system compared with a fixed stabiliser system is that",
    choices: {
      A: "the systems complexity is reduced",
      B: "the structure weighs less",
      C: "it leads to greater stability in flight",
      D: "it is a more powerful means of trimming",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What should be usually done to perform a landing with the stabiliser jammed in the cruise flight position?",
    choices: {
      A: "If possible, relocate as many passengers as possible to the front of the cabin",
      B: "Choose a lower landing speed than normal",
      C: "Choose a higher landing speed than normal and/or use a lower flapsetting for landing",
      D: "Use the Mach trimmer until after landing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In general transport aeroplanes with power assisted flight controls are fitted with an adjustable stabiliser instead of trim tabs on the elevator. This is because",
    choices: {
      A: "the pilot does not feel the stick forces at all",
      B: "effectiveness of trim tabs is insufficient for those aeroplanes",
      C: "mechanical adjustment of trim tabs creates too many problems",
      D: "trim tab deflection increases Mcrit",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement about a jet transport aeroplane is correct, during take-off at the maximum allowable forward centre of gravity limit, while the THS (Trimming Horizontal Stabiliser) has been positioned at the maximum allowable AND (Aeroplane Nose Down) position.",
    choices: {
      A: "The rotation will require extra stick force",
      B: "If the THS position is just within the limits of the green band, the take off warning system PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "Early nose wheel raising will take place",
      D: "Nothing special will happen",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The reason for having a trim system on powered assisted flying controls is",
    choices: {
      A: "enables the pilot to maintain control in case of hydraulic failure",
      B: "relieve stresses on the trim tab",
      C: "relieve stresses on the hydraulic actuators",
      D: "enables the stick force to be reduced to zero",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement about the trim position is true related to centre of gravity and adjustable stabiliser position?",
    choices: {
      A: "A nose heavy aeroplane requires that the stabiliser leading edge is lower than compared with atail heavy aeroplane",
      B: "Because characteristic speeds at take off do not vary with centre of gravity location, the needfor stabiliser adjustment is dependent on flap position only",
      C: "A nose heavy aeroplane requires that the stabiliser leading edge is higher than compared with atail heavy aeroplane",
      D: "At the forward limit for centre of gravity, stabiliser trim is adjusted maximum Nose Downto obtain maximum elevator authority at take off rotation",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the position of the elevator in relation to the trimmable horizontal stabiliser of a power assisted aeroplane, which is in trim?",
    choices: {
      A: "The position depends on speed, the position of slats and flaps and the position of thecentre of gravity",
      B: "The elevator deflection (compared to the stabiliser position) is always zero",
      C: "At a forward CG the elevator is deflected upward and at an aft CG the elevator is deflecteddownward",
      D: "The elevator is always deflected slightly downwards in order to have sufficient remainingflare capability",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the elevator trim tab is deflected up, the cockpit trim indicator presents",
    choices: {
      A: "nose-left",
      B: "neutral",
      C: "nose-up",
      D: "nose-down",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "How would the exterior appearance of an aeroplane change, when trimming for speed increase?",
    choices: {
      A: "The exterior appearance of the aeroplane will not change",
      B: "The elevator is deflected further up by a downward deflected trim tab",
      C: "The elevator is deflected further downward by means of a movable horizontal stabiliser",
      D: "Elevator deflection is increased further downward by an upward deflected trim tab",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "How does the exterior view of an aeroplane change, when the trim is used during a speed decrease?",
    choices: {
      A: "The elevator is deflected further downwards by means of an upwards deflected trim tab",
      B: "The elevator is deflected further upwards by means of a downwards deflected trim tab",
      C: "The elevator is deflcted further downwards by means of a trimmable horizontal stabiliser",
      D: "Nothing changes in the exterior view",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft is equipped with an all flying tailplane which has c ombined antibalance and trimming tab. The top of the trim wheel is moved forward. Which of the following statements is most correct?",
    choices: {
      A: "The tab moves up, so that less effort is required when the pilot attempts to move the controlcolumn to the rear",
      B: "The tab moves up, so that more effect is required when the pilot attempts to move the controlclumn to the rear",
      C: "The tab moves down, so that less effort is required when the pilot attempts to move the controlcolumn to the rear",
      D: "The tab moves down, so that more effort is required when the pilot attempts to move thecontrol column to the rear",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In straight and level flight, as speed is reduced",
    choices: {
      A: "the elevator is deflected further downwards and the trim tab further upwards",
      B: "both elevator and trim tab are deflected further upwards",
      C: "the elevator and trim tab do not move",
      D: "the elevator is deflected further upwards and the trim tab further downwards",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement in respect of a trimmable horizontal stabiliser is correct?",
    choices: {
      A: "Because take-off speeds do not vary with centre of gravity location, the need for stabiliseradjustment is dependent on flap position only",
      B: "An aeroplane with a forward cg requires the stabiliser leading edge to be lower than for onewith an aft cg in the same trimmed condition",
      C: "An aeroplane with a forward cg requires the stabiliser leading edge to be higher than for onewith an aft cg in the same trimmed condition",
      D: "At the forward C.G. limit, stabiliser trim is adjusted fully nose down to obtain maximumelevator authority at rotation during take-off",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In the unlikely event of an aircraft becoming airborne with the elevator control lock engaged, operation of an elevator trim tab control in the normal direction to counteract a nose up tendency would",
    choices: {
      A: "have no effect",
      B: "result in a reduction of the nose up tendency",
      C: "result in an increase in the nose down pitching moment",
      D: "result in an increase of the nose up tendency",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When checking the range of movement of an elevator trim tab as part of the pre-flight check, movement of the trim wheel or trim switches will move the",
    choices: {
      A: "tab and control column",
      B: "elevator",
      C: "tab",
      D: "tab, elevator and control column",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the control column is pushed forward, a trim tab on the elevator",
    choices: {
      A: "will move up relative to the elevator",
      B: "will move down relative to the elevator",
      C: "will only move relative to the elevator at high speed",
      D: "will not move relative to the elevator unless the trim wheel is moved",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which direction from the primary control surface does an elevator adjustable trim tab move when the control surface is moved?",
    choices: {
      A: "same direction",
      B: "opposite direction",
      C: "in the same direction at high speeds to increase the stick force, but in the opposite directionat low speed",
      D: "remains fixed for all positions",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In order to zero the load if a rearward force on the control column is required to maintain level flight",
    choices: {
      A: "the elevator trim tab must be moved up",
      B: "the elevator trim tab must be moved down",
      C: "the elevator will be required to remain neutral",
      D: "the incidence of a trimming tail plane must be increased",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On an aircraft with a variable incidence trimming tail plane, the tail plane incidence changes",
    choices: {
      A: "if the control column is moved",
      B: "if the trim wheel is turned",
      C: "automatically if the elevator moves",
      D: "by re-setting it on the ground",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On a variable incidence tail plane with elevators fitted at the trailing edge, longitudinal trimming will be done by adjusting the",
    choices: {
      A: "elevators with the control wheel",
      B: "elevators with the trim wheel",
      C: "tail plane incidence with the control wheel",
      D: "tail plane incidence with the twim wheel",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the elevator trim wheel is moved fully back, what will happen to the control range?",
    choices: {
      A: "no effect on range",
      B: "increase elevator range",
      C: "decrease elevator range",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the elevator trim tab has been moved fully to the aircraft nose up position, the available aircraft nose up pitch authority will be",
    choices: {
      A: "increased",
      B: "reduced",
      C: "not affected",
      D: "reversed",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When an aileron trim control in the cockpit is moved to correct a tendency to fly left wing low, an aileron trim tab on the left aileron will move",
    choices: {
      A: "up and this causes theleft aileron to move down, and the right one to move up",
      B: "up and this causes the left aileron to move down, but the right aileron will remain neutral",
      C: "down and this causes the left aileron to move up and the right aileron to move down",
      D: "down and this causes the left aileron to move up and the right aileron to move up",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "To counteract a right wing low tendency, a fixed tab on the port aileron would",
    choices: {
      A: "be moved up causing the left aileron to come up",
      B: "be moved up causing the right aileron to come down",
      C: "be moved down causing the left aileron to go down PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "be moved down causing the left aileron to come up",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Down movement of the elevator trimming tab will",
    choices: {
      A: "make the aircraft nose heavy",
      B: "overcome a tendency to fly nose heavy",
      C: "overcome a tendency to fly tail heavy",
      D: "make the aircraft pitch nose down",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An aircraft keeps yawing to the left, you would trim it by",
    choices: {
      A: "moving the fixed trimming tab on the rudder over to the left",
      B: "moving the adjustable trim tab to the right",
      C: "adjusting the rudder bar to keep theleft rudder pedal forward",
      D: "adjusting the aileron trim tab wheel to the right",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "To trim an aircraft which tends to fly tail heavy with hands off, the top of the elevator trimming wheel mounted on a shaft running laterally would be rotated",
    choices: {
      A: "forward/trim tab down/elevator up",
      B: "rearward/trim tab up/elevator up",
      C: "rearward/trim tab down/elevator down",
      D: "forward/trim tab up/elevator down",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane has a CG on the forward limit and full nose down trim. How will this affect stick forces at take-off?",
    choices: {
      A: "increase stick forces",
      B: "decrease stick forces",
      C: "set off an alarm",
      D: "nose wheel will lift off early",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If the trim tab is moved up, what is the cockpit indication?",
    choices: {
      A: "neutral",
      B: "nose up",
      C: "nose down",
      D: "initially nose up than down",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What position must the stabiliser be in during take-off with a nose heavy aircraft, compared to a balanced aircraft?",
    choices: {
      A: "more nose u trim/decreased stabiliser incidence",
      B: "more nose down trim/decreased stabiliser incidence",
      C: "less nose up trim/increased stabiliser incidence",
      D: "less nose down trim/increased stabiliser incidence",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On an aircraft with a trimming horizontal stabiliser, what is the elevator position relative to the stabiliser when the aircraft is in the trimmed condition?",
    choices: {
      A: "downwards",
      B: "upwards",
      C: "always neutral to the stabiliser",
      D: "always down relative to the stabiliser",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Why does a transport aircraft with powered controls use a horizontal stabiliser trim?",
    choices: {
      A: "pilot input is not subject to aerodynamic control forces",
      B: "trim tabs are not effective enough",
      C: "overly complex mechanism",
      D: "trim tabs would increase Mcrit",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When the trim tab on the elevator is deflected down the cockpit indication of trim is",
    choices: {
      A: "nose up PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "nose down",
      C: "nose left",
      D: "nose right",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "To adjust for a deceleration, the trim tab on an elevator",
    choices: {
      A: "moves up, making the elevator move down",
      B: "moves down, making the elevator move up",
      C: "moves down, adjusting the variable incidence tail plane",
      D: "moves up, making the variable incidence tail plane increase incidence",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On take-off, with the CG at the forward limit, the aeroplane is trimmed fully nose down. What is the effect?",
    choices: {
      A: "less stick force is required to rotate",
      B: "more stick force is required to rotate",
      C: "the stick force required to rotate is not affected",
      D: "the aeroplane is longitudinally neutrally statically stable",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the relationship of VMO and MMO, in a climb and descent?",
    choices: {
      A: "If climbing at VMO, Mach number is decreasing",
      B: "If climbing at MMO, Indicated Airspeed is increasing",
      C: "If climbing at VMO, it is possible to exceed MMO",
      D: "If descending at MMO, VMO cannot be exceeded",
    },
    correct: "C",
    ref: "ATPL A",
  },
  {
    question:
      "(Refer to figure 081-05)In a high speed descent at MMO you will reach VMO at",
    choices: {
      A: "M 0.8",
      B: "FL 270",
      C: "350 kts PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "FL 250",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question:
      "A commercial jet aeroplane is performing a straight descent at a constant Mach Number with constant weight. The operational limit that may be exceeded is",
    choices: {
      A: "MMO",
      B: "VMO",
      C: "VNE",
      D: "VD",
    },
    correct: "B",
    ref: "ATPL A",
  },
  {
    question: "VMO",
    choices: {
      A: "should be chosen in between VC and VD",
      B: "is equal to the design speed for maximum gust intensity",
      C: "is the calibrated airspeed at which MMO is reached at 35.000 ft",
      D: "should be not greater than VC",
    },
    correct: "D",
    ref: "ATPL A",
  },
  {
    question: "Flutter may be caused by a",
    choices: {
      A: "combination of bending and torsion of the structure",
      B: "combination of fuselage bending and wing torsion",
      C: "combination roll control reversal and low speed stall",
      D: "high airspeed aerodynamic wing stall",
    },
    correct: "A",
    ref: "ATPL A",
  },
  {
    question: "VA is",
    choices: {
      A: "the speed that should not be exceeded in the climb",
      B: "the maximum speed at which rolls are allowed",
      C: "the speed at which a heavy transport aeroplane should fly in turbulence",
      D: "the maximum speed at which maximum elevator deflection up is allowed",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft is flown at 20% below its normal weight. Because of this, VA will be",
    choices: {
      A: "20% lower",
      B: "10% higher",
      C: "20% higher",
      D: "10% lower",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When flying at speeds above VA",
    choices: {
      A: "full elevator deflection may result in damage to the airframe or structural failure",
      B: "an overspeed warning will be activated",
      C: "the aircraft may self-destruct in a turn",
      D: "the aircraft cannot be stalled",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The relationship between the stall speed VS and VA (EAS) for a large transport aeroplane can be expressed in the following formula: (SQRT= square root)",
    choices: {
      A: "Va = VA SQRT (3.75)",
      B: "VS = VA SQRT (2.5)",
      C: "VS = VA SQRT (3.75)",
      D: "VA = VS SQRT (2.5)",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "By what percentage does VA (EAS) alter when the aeroplane's weight decreases by 19%?",
    choices: {
      A: "19% lower",
      B: "4.36% lower",
      C: "No change",
      D: "10% lower",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following statements is true?",
    choices: {
      A: "Limiting factors in severe turbulence are the possibility of a stall and the margin to the PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "Through extension of the flaps in severe turbulence it is possible to reduce the speed andincrease the margins to the structural limits",
      C: "By increasing the flap setting in severe turbulence the stall speed will be reduced and therisk for exceeding the structural limits will be decreased",
      D: "Through extension of the flaps in severe turbulence the centre of pressure will move aftwhich will increase the margins to the structural limits",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For an aeroplane with one fixed value of VA the following applies. VS is",
    choices: {
      A: "the speed at which the aeroplane stalls at the manoeuvring limit load factor at MTOW",
      B: "the maximum speed in smooth air",
      C: "the speed at which unrestricted application of elevator control can be used, withoutexceeding the maximum manoeuvring limit load factor",
      D: "just another symbol for the rough air speed",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Flutter may be caused by",
    choices: {
      A: "distorsion by bending and torsion of the structure causing increasing vibration in thereasonable frequency",
      B: "low airspeed aerodynamic wing stall",
      C: "roll control reversal",
      D: "high airspeed aerodynamic wing stall",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What can happen to the aeroplane structure flying at a speed just exceeding VA?",
    choices: {
      A: "It may break if the elevator is fully deflected upwards",
      B: "It may suffer permanent deformation if the elevator is fully deflected upwards",
      C: "It may suffer permanent deformation because the flight is performed at too large dynamicpressure",
      D: "It wsill collapse if a turn is made",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A jet transport aeroplane is in a straight climb at the constant IAS and constant weight. The operational limit that may be exceeded is",
    choices: {
      A: "VA",
      B: "VMO",
      C: "MMO",
      D: "MD",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft has a mass of 60,000 kg and a limiting positive load factor of 2.5. VA is calculated as the EAS at which full positive elevator deflection will give the limiting load factor at the stall, and is 237 kts. If the aircraft mass is reduced to 40,000 kg by fuel burn, what will be the new VA?",
    choices: {
      A: "375 kts",
      B: "194 kts",
      C: "237 kts",
      D: "150 kts",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Aileron reversal can be caused by",
    choices: {
      A: "twisting of the wing above reversal speed",
      B: "fries type ailerons at low angles of attack",
      C: "both A and B",
      D: "neither A nor B",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "How can wing flutter be prevented?",
    choices: {
      A: "By installing the fuel tanks in the fuselage",
      B: "By increasing the aspect ratio of the wing",
      C: "By mounting the engines on the fuselage",
      D: "By locating mass in front of the torsion axis of the wing",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "VLE is defined as the",
    choices: {
      A: "maximum landing gear extended speed",
      B: "maximum speed at which the landing gear may be extended or retracted",
      C: "maximum flap extended speed",
      D: "maximum authorised speed",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Aileron reversal may be caused by",
    choices: {
      A: "the wing twisting and increasing incidence when the aileron is lowered",
      B: "the wing twisting and reducing incidence when the aileron is lowered",
      C: "the aileron being pushed in the reverse direction by aileron drag",
      D: "the wing twisting and reducing incidence when the aileron is raised",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Vne is defined as",
    choices: {
      A: "never exceed speed",
      B: "maximum nose wheel extend speed",
      C: "maximum landing gear extended speed",
      D: "maximum flap extended speed",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Mmo can be exceeded in a climb at a constant IAS because",
    choices: {
      A: "maintaining a constant IAS requires an increase in TAS",
      B: "as altitude increases the local speed of sound increases",
      C: "at reduced density the mach meter will under read",
      D: "position error increases",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Aileron reversal at high Cl results from",
    choices: {
      A: "dynamic pressure acting on the aileron twisting the wing in the opposite direction,possibly causing the aircraft to bank in a direction opposite to that intended PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "dynamic pressure reducing the stick force, making the ailerons act in the reverse sense",
      C: "the down going aileron increasing the semi-span angle of attack beyond the critical",
      D: "the increased drag of the down going aileron causing the aircraft to yaw in the oppositedirection",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is flutter caused by?",
    choices: {
      A: "low airspeed aerodynamic stall",
      B: "high airspeed aerodynamic stall",
      C: "control reversal",
      D: "bending and torsion causing vibration at the resonant frequency",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which load factor determines VA?",
    choices: {
      A: "manoeuvring flap limit load factor",
      B: "manoeuvring ultimate load factor",
      C: "gust load factor at 66 ft/sec gust",
      D: "manoeuvring limit load factor",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which has the effect of increasing load factor (all other relevant factors being constant)?",
    choices: {
      A: "Rearward CG location",
      B: "Increased aeroplane mass",
      C: "Increased air density",
      D: "Vertical gusts",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The positive manoeuvring limit load factor for a large jet transport aeroplane with flaps extended is",
    choices: {
      A: "3.75",
      B: "1.5 PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "2.5",
      D: "2.0",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the positive limit load factor for large jet transport aircraft?",
    choices: {
      A: "n = 2.5",
      B: "n = 3.75",
      C: "n = 1.5",
      D: "n = 1.0",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Load factor is",
    choices: {
      A: "Lift/Weight",
      B: "Weight/Lift",
      C: "1/Bank angle",
      D: "Wing loading",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The positive manoeuvring limit load factor for a light aeroplane in the utility category in the clean configuration is",
    choices: {
      A: "2.5",
      B: "4.4",
      C: "3.8",
      D: "6.0",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the limit load factor of a large transport aeroplane in the manoeuvring diagram?",
    choices: {
      A: "6",
      B: "1.5",
      C: "3.75",
      D: "2.5 PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The manoeuvring speed VA, expressed as indicated airspeed, of a transport aeroplane",
    choices: {
      A: "depends on aeroplane mass and pressure altitude",
      B: "is a constant value",
      C: "is independent of aeroplane mass, but dependent on pressure altitude",
      D: "depends on aeroplane mass and is independent of pressure altitude",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the significance of the maximum allowed cruising altitude, based on the 1.3 g margin? At this altitude",
    choices: {
      A: "a manoeuvre with a load factor of 1.3 will cause a Mach number at which accelerated lowspeed stall occurs",
      B: "a manoeuvre with a load factor of 1.3 will cause Mcrit to be exceeded",
      C: "a manoeuvre with a load factor of 1.3 will cause buffet onset",
      D: "exceeding a load factor of 1.3 will cause permanent deformation of this aeroplane",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When flying slightly faster than Va",
    choices: {
      A: "the airframe may collapse in a turn",
      B: "possible permanent deformation of the structure may occur with full elevator deflection",
      C: "a high speed warning will be activated",
      D: "the aircraft cannot stall",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With regard to Va, which of the following statements is correct?",
    choices: {
      A: "When flying at speeds up to Va it is possible to carry out full control deflectionmanoeuvres without exceeding the limit load factor",
      B: "The aircraft will be damaged if it stalls at full control deflection at speeds below Va",
      C: "Va is the speed that should never be exceeded in normal operation",
      D: "the structure will be permanently deformed by manoeuvring the aircraft at speeds greater than Va PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following is correct?",
    choices: {
      A: "By extending the flaps during severe turbulence it is possible to reduce speed and increasethe margins to structural limitations",
      B: "By extending flaps during extreme turbulence, the CP moves aft which will increase themargin to structural limitations",
      C: "Extending flaps in turbulence reduces the stall speed, but will reduce the margin tostructural limitations",
      D: "None of the above is correct",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In a jet aircraft with flaps extended, the load factor limit would be",
    choices: {
      A: "2.0",
      B: "1.5",
      C: "1.0",
      D: "3.5",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Va for an aeroplane with one fixed Va is defined as",
    choices: {
      A: "the highest speed at which full elevator deflection can be made without exceeding thedesign limit load factor",
      B: "the speed at which the aeroplane would stall at the maximum limit load factor at maximum allup weight",
      C: "the speed at which a large transport aircraft should be flown in turbulence",
      D: "none of the above",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane is flying at a speed of 1.3Va and full nose up elevator deflection is applied. This is likely to",
    choices: {
      A: "make the wing collapse",
      B: "cause excess dynamic pressure because the aeroplane is flying so fast",
      C: "break the aeroplane PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "possibly cause permanent deformation of the aeroplane",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Va is the",
    choices: {
      A: "maximum speed at which maximum deflection is allowed",
      B: "maximum speed at which rolls are allowed",
      C: "speed at which a heavy aeroplane should fly in turbulence",
      D: "speed that should not be exceeded in the climb",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A high aspect ratio wing",
    choices: {
      A: "increases induced drag",
      B: "decreases induced drag",
      C: "is structurally stiffer than a low aspect ratio",
      D: "has a higher stall angle than a low aspect ratio",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The extreme right limitation for both V-n (gust and manoeuvre) diagrams is created by the speed",
    choices: {
      A: "VD",
      B: "VC",
      C: "Vflutter",
      D: "VMO",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement regarding the gust load factor on an aeroplane is correct (all other factors of importance being constant)? 1. Increasing the aspect-ratio of the wing will increase the gust load factor. 2. Increasing the speed will increase the gust load factor",
    choices: {
      A: "1 and 2 are incorrect",
      B: "1 is incorrect and 2 is correct",
      C: "1 and 2 are correct",
      D: "1 is correct and 2 is incorrect PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What wing shape or wing characteristic is the least sensitive to turbulence",
    choices: {
      A: "straight wings",
      B: "swept wings",
      C: "wing dihedral",
      D: "winglets",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which combination of speeds is applicable for structural strength in gust (clean configuration)?",
    choices: {
      A: "66 ft/sec and VD",
      B: "50 ft/sec and VC",
      C: "65 ft/sec at all speeds",
      D: "55 ft/sec and VB",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement is correct about the gust load on an aeroplane (IAS and all other factors of importance remaining constant): 1. the gust load increases, when the weight decreases. 2. the gust load increases, when the altitude increases",
    choices: {
      A: "1 is incorrect and 2 is correct",
      B: "1 and 2 are correct",
      C: "1 and 2 are incorrect",
      D: "1 is correct and 2 is incorrect",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft flying at a given EAS is subject to a positive gust of 50 kt EAS. Which of the following correctly describes the increase in positive g felt by the aircraft?",
    choices: {
      A: "More at high aircraft weight",
      B: "More with a high aspect ratio straight wing",
      C: "Less at altitude",
      D: "More with a swept wing",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The shape of the gust load diagram is also determinated by the following three vertical speed in ft/s (clean configuration)",
    choices: {
      A: "25, 55, 75",
      B: "15, 56, 65",
      C: "25, 50, 66",
      D: "35, 55, 66",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following statements is correct?",
    choices: {
      A: "The use of flaps during severe turbulence reduces the stall speed and the risk of exceedingstructural limitations decreases",
      B: "Extending flaps in turbulence reduces the stall speed but will reduce the margin tostructural limitations",
      C: "By extending flaps during extreme turbulence, the CP moves aft which will increase the margin tostructural limitations",
      D: "By extending flaps during severe turbulence it is possible to reduce speed and increase themargins to structural limitations",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "All gust lines in the V-n graph originate from a point where the",
    choices: {
      A: "speed = 0, load factor = 0",
      B: "speed = 0, load factor = +1",
      C: "speed = VS, load factor = 0",
      D: "speed = VB, load factor = +1",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The gust load factor due to a vertical upgust increases when",
    choices: {
      A: "weight increases",
      B: "the gradient of the CL-alpha graph increases",
      C: "altitude increases",
      D: "wing loading increases",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement is correct about the gust load factor on an aeroplane?l. When the mass increases, the gust load factor increasesll. When the altitude decreases, the gust load factor increases",
    choices: {
      A: "1 is correct, ll is correct",
      B: "l is incorrect, ll is incorrect",
      C: "l is incorrect, ll is correct",
      D: "l is correct, ll is incorrect",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The recommended air speed at which to fly in turbulence is",
    choices: {
      A: "Vmd",
      B: "Vlo",
      C: "VraD - Vmo",
      D: "V no",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following is a correct design gust value?",
    choices: {
      A: "25 ft/sec at Vb",
      B: "50 ft/sec at Vc",
      C: "66 ft/sec at Vd",
      D: "55 ft/sec at Vd",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The extreme right limit for both V-n and gust/manoeuvre diagrams are created by the speed",
    choices: {
      A: "Vd",
      B: "Vmd",
      C: "V flutter",
      D: "Vc",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following are the gust values used in the V-n diagram?",
    choices: {
      A: "66 ft/sec / 55 ft/sec / 35 ft/sec PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "75 ft/sec / 25 ft/sec / 50 ft/sec",
      C: "20 ft/sec / 55 ft/sec / 70 ft/sec",
      D: "50 ft/sec / 66 ft/sec / 25 ft/sec",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which is the correct speed for a modern jet to fly in turbulence?",
    choices: {
      A: "between Vc and Vd",
      B: "Vmo",
      C: "Vra",
      D: "Va",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Propeller efficiency may be defined as the ratio between",
    choices: {
      A: "the usable (power available) power and the maximum power",
      B: "the thrust and the maximum thrust",
      C: "usable (power available) power of the propeller and shaft power",
      D: "the thermal power of fuel-flow and shaft power",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If you putt back the RPM lever of a constant speed propeller during a glide with idle power and constant speed, the propeller pitch will",
    choices: {
      A: "decrease and the rate of descent will increase",
      B: "increase and the rate of descent will increase",
      C: "decrease and the rate of descent will decrease",
      D: "increase and the rate of descent will decrease",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of attack of a fixed pitch propeller can be increased by",
    choices: {
      A: "reducing power and reducing TAS",
      B: "increasing power and increasing TAS",
      C: "reducing power and increasing TAS PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "increasing power and reducing TAS",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Does the pitch-angle of a constant-speed propeller alter in medium horizontal turbulence?",
    choices: {
      A: "Yes, but only if the pitch is full-fine",
      B: "Yes strongly",
      C: "No",
      D: "Yes slightly",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following statements about a constant speed propeller is correct?",
    choices: {
      A: "The blade angle increases with increasing speed",
      B: "The propeller system keeps the aeroplane speed constant",
      C: "The RPM decreases with increasing aeroplane speed",
      D: "The selected RPM is kept constant by the manifold pressure",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If you increase the propeller pitch during a glide with idle-power at constant IAS the lift to drag ratio will",
    choices: {
      A: "decrease and the rate of descent will decrease",
      B: "increase and the rate of descent will increase",
      C: "increase and the rate of descent will decrease",
      D: "decrease and the rate of descent will increase",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The propeller blade angle of attack on a fixed pitch propeller is increased when",
    choices: {
      A: "forward velocity increases and RPM decreasing",
      B: "velocity and RPM increase",
      C: "RPM increases and forward velocity decreases",
      D: "velocity and RPM decrease",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The propeller CTM will",
    choices: {
      A: "Cause the propeller CSU to pitch lock",
      B: "Tend to move the blades to a coarse pitch",
      C: "Move the blades about their longitudinal axis",
      D: "Act in reverse when propeller braking is applied",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of these definitions of propeller parameters is correct?",
    choices: {
      A: "Propeller angle of attack = angle between blade chord line and propeller vertical plane",
      B: "Blade angle = angle between blade chord line and propeller axis",
      C: "Geometric propeller pitch = the theoretical distance a propeller blade element is travelling inforward direction in one propeller revolution",
      D: "Critical tip velocity = propeller speed at which risk of flow separation at some parts ofpropeller blade occurs",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With a constant speed propeller, which of the following statements is true?",
    choices: {
      A: "Pitch angle increases with increasing TAS",
      B: "Pitch angle decreases with increasing TAS",
      C: "RPM decreases with increasing TAS",
      D: "RPM increases with increasing TAS",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Constant-speed propellers provide a better performance than fixed-pitch propellers because they",
    choices: {
      A: "have a higher maximum efficiency than a fixed-pitch propeller",
      B: "produce an almost maximum efficiency over a wider speed range",
      C: "produce a greater maximum thrust than a fixed-pitch propeller",
      D: "have more blade surface area than a fixed-pitch propeller",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With a fixed pitch propeller increasing speed will propeller alpha and increasing power and therefore propeller RPM will l propeller alpha.",
    choices: {
      A: "decrease, decrease",
      B: "increase, decrease",
      C: "decrease, increase",
      D: "increase, increase",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of attack for a propeller blade is the angle between blade chord line and",
    choices: {
      A: "Aeroplane heading",
      B: "Direction of propeller axis",
      C: "Local air speed vector",
      D: "Principal direction of propeller blade",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If you push forward the RPM lever of a constant speed propeller during a glide with idle power and constant speed, the propeller pitch will",
    choices: {
      A: "decrease and the rate of descent will increase",
      B: "increase and the rate of descent will decrease",
      C: "increase and the rate of descent will increase",
      D: "decrease and the rate of descent will decrease",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If you decrease the propeller pitch during a glide with idle-power at constant IAS the lift to drag ratio will",
    choices: {
      A: "decrease and the rate of descent will decrease",
      B: "increase and the rate of descent will increase",
      C: "decrease and the rate of descent will increase",
      D: "increase and the rate of descent will decrease",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The geometric pith of a propeller is",
    choices: {
      A: "the distance it would forward in one revolution at the blade angle PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "the angle the blade makes with the plane of rotation",
      C: "the distane the propeller actually moves forward in one revolution",
      D: "the difference between A and C",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A fixed pitch propeller is usually",
    choices: {
      A: "at too coarse an angle to take off",
      B: "at too fine an angle of take off",
      C: "at too coarse an angle in the cruise",
      D: "at its optimum angle on take off",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Running an engine fitted with a fixed pitch propeller at full throttle with the aircraft stationary and nose into strong wind will result in",
    choices: {
      A: "a variable rpm depending on the CSU",
      B: "higher rpm than in still air",
      C: "lower rpm than in still air",
      D: "the sane rpm as in still air",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For a variable propeller, which way does the blade twist from root to tip?",
    choices: {
      A: "To finer pitch angle",
      B: "To coarser pith angle",
      C: "Depend on the variable pitch setting",
      D: "Depends if it is a left handed or right handed propeller",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane is fitted with a constant speed propeller. If the aeroplane speed increases while manifold pressure remains constant (1) propeller pitch and the (2) propeller torque will",
    choices: {
      A: "(1) decrease; (2) decrease",
      B: "(1) increase; (2) increase",
      C: "(1) increase; (2) remain constant PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "(1) decrease; (2) remain constant",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the propeller pitch, within its constant speed range and at constant power, during descent at constant IAS is decreased, the aeroplane lift to drag ratio will",
    choices: {
      A: "decrease and the rate of descent will decrease",
      B: "increase and the rate of descent will increase",
      C: "decrease and the rate of descent will increase",
      D: "increase and the rate of descent will decrease",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the propeller pitch, within its constant speed range and at constant power, during descent at constant IAS is increased, the aeroplane lift to drag ratio will",
    choices: {
      A: "increase and the rate of descent will increase",
      B: "increase and the rate of descent will decrease",
      C: "decrease and the rate of descent will decrease",
      D: "decrease and the rate of descent will increase",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of attack of a fixed pitch propeller blade increases when",
    choices: {
      A: "forward velocity increases and RPM decreases",
      B: "velocity and RPM increase",
      C: "RPM increases and forward velocity decreases",
      D: "velocity and RPM decrease",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of attack of a propeller blade element is the angle between the blade element chord line and the",
    choices: {
      A: "propeller axis",
      B: "resultant air speed vector",
      C: "propeller plane",
      D: "TAS vector",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Why is a propeller blade twisted from root to tip?",
    choices: {
      A: "To ensure that the tip produces most thrust",
      B: "To ensure the angle of attack is greatest at the tip",
      C: "To ensure that the root produces most thrust",
      D: "To maintain a constant angle of attack along the whole length of the propeller blade",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Propeller slip is the difference between the",
    choices: {
      A: "geometric pitch and the blade angle",
      B: "geometric pitch and th effective pitch",
      C: "plane of rotation and the aircraft's forward velocity",
      D: "the rpm of the engine and the rpm of the propeller",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The blade angle of a propeller is the angle between",
    choices: {
      A: "the root chord and the tip chord of the propeller",
      B: "the chord and the airflow relative to the propeller",
      C: "the chord of the propeller and the longitudinal axis of the aircraft",
      D: "the propeller chord and the plane of rotation of the propeller",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is the primary advantage of a constant speed propeller?",
    choices: {
      A: "to obtain and maintain a selected pitch angle of the blades regardless of the flight situationor power setting",
      B: "to maintain a specific engine speed",
      C: "to obtain a pitch setting that is suitable for each flight situation and power setting",
      D: "to ensure that the propeller rpm is always greater than the manifold pressure",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A constant speed propeller is one which",
    choices: {
      A: "rotates at a constant speed by altering the blade angle",
      B: "is most efficient at a constant aircraft speed",
      C: "rotates at a constant speed by maintaining a constant blade angle",
      D: "maintains a constant aircraft speed by altering blade angle",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The aerodynamic loads on a propeller which produce forward thrust will tend to",
    choices: {
      A: "increase RPM",
      B: "bend the tips forward",
      C: "increase tip velocity to supersonic speeds",
      D: "bend the tips backwards",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The forces acting on a propeller are",
    choices: {
      A: "thrust only",
      B: "thrust and drag only",
      C: "torque only",
      D: "thrust and torque",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft with constant speed propeller increases its speed with constant manifold pressure. The propeller pitch will (1) and the propeller torque will (2)",
    choices: {
      A: "increase/remain constant",
      B: "increase/increase",
      C: "decrease/increase",
      D: "remain constant/decrease",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "How can the angle of attack of a fixed pitch propeller be increased?",
    choices: {
      A: "increased RPM and increase TAS",
      B: "increase RPM and reduce TAS PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "decrease RPM and increase TAS",
      D: "decrease RPM and decrease TAS",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the engine is developing no thrust in a glide, if the propeller pitch is increased",
    choices: {
      A: "L/D increases, ROD increases",
      B: "L/D decreases, ROD increases",
      C: "L/D increases, ROD decreases",
      D: "L/D decreases, ROD decreases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The advantage of a constant speed propeller over a fixed pitch propeller is",
    choices: {
      A: "higher maximum thrust available",
      B: "higher maximum efficiency",
      C: "more blade surface area available",
      D: "nearly maximum efficiency over wide speed range",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When an aircraft with a fixed pitch propeller climbs, does the angle of attack of the propeller",
    choices: {
      A: "get smaller",
      B: "remain the same",
      C: "get bigger",
      D: "reduce to zero",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of attack of a fixed pitch propeller designed for cruising flight, measured at its reference station is",
    choices: {
      A: "optimum in steady cruising flight only",
      B: "increases with an increase in TAS",
      C: "decreases with an increase in RPM",
      D: "will always be positive in a power off glide PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The angle of attack of a fixed pitch propeller",
    choices: {
      A: "is lower in the take-off run than in flight",
      B: "is optimum in flight",
      C: "is optimum in stabilised cruise flight",
      D: "decreases with decrease in speed at constant engine RPM",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Propeller blade angle of attack is the angle between the chord and the",
    choices: {
      A: "direction of axis of the propeller",
      B: "aeroplane heading",
      C: "relative airflow",
      D: "vector of TAS",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An engine failure can result in a windmilling (1) propeller and a non rotating (2) propeller. Which statement about propeller drag is correct?",
    choices: {
      A: "(2) is larger than (1)",
      B: "(1) is equal to (2)",
      C: "(1) is larger than (2)",
      D: "impossible to say which one is largest",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A twin-engine aircraft is available in both jet and propeller variants. The engines are mounted on the wings in the same position in both types. In the case of failure of one engine how would the engine torque effect show itself?",
    choices: {
      A: "Jet: roll towrd the dead engine; Propeller: roll toward the dead engine",
      B: "Jet: no change; Propeller: roll in the direction of rotation of the dead engine",
      C: "Jet: roll toward the live engine; Propeller: roll toward the dead engine",
      D: "Jet: no change but; Propeller: roll away from the live engine",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A twin-engine aircraft is available in both jet and propeller variants. The engines are mounted on the wngs in the same position in both types. In the case of failure of one engine how would the resultant roll effect show itself?",
    choices: {
      A: "Jet: roll toward the dead engine; Propeller: roll toward the live engine",
      B: "Jet: roll toward the live engine; Propeller: roll toward the dead engine",
      C: "Jet: roll away from the live engine; Propeller: roll away from the live engine more rapidly",
      D: "Jet: no change but; Propeller: roll opposite to direction of rotation of the live engine",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When the blades of a propeller are in the fethered position",
    choices: {
      A: "the windmilling RPM is the maximum",
      B: "the propeller produces an optimal windmilling RPM",
      C: "the drag of the propeller is then minimal",
      D: "the RPM is then just sufficient to lubricate the engine",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In an aircraft with a two-lever power control system, in a descent with the throttle closed, what would be the effect if the pitch control were pulled fully back to the flight stop?",
    choices: {
      A: "Rate of descent would remain the same and RPM would decrease",
      B: "Rate of descent would remain the same and RPM would increase",
      C: "Rate of descent would decrease and RPM would decrease",
      D: "Rate of descent would increase and RPM would increase",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "With a propeller feathered",
    choices: {
      A: "the best windmilling speed is achieved",
      B: "the engine will turn over just fast enough to lubricate it",
      C: "there will be minimum lift to drag ratio",
      D: "there will be minimum drag on the propeller",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In twin engine aeroplanes with propellers turning clockwise as seen from behind",
    choices: {
      A: "the left engine produces a higher yaw moment if the right engine fails that vice versa",
      B: "the left engine is the critical engine",
      C: "the minimum control speed is determined by the failure of the right engine",
      D: "the right engine is the critical engine",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft fitted with a constant speed propeller is in a gliding descent with the throttle closed and the engine at idle; what would be the effect if the propeller lever were pulled back?",
    choices: {
      A: "rate of descent would increase and RPM increase",
      B: "ROD decreases and RPM decreases",
      C: "ROD remains the same and RPM increases",
      D: "ROD remains the same and RPM decreases",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft is maintaining altitude while flying with the left engine inoperative and the wings level; which of the following indications are correct?",
    choices: {
      A: "turn indicator neutral and slip indicator displaced to the left",
      B: "turn indicator displaced to the left and the slip indicator displaced to the left",
      C: "turn indicator displaced to the left and the slip indicator neutral",
      D: "turn indicator neutral and slip indicator neutral",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When considering 2 multi-engine aircraft, one a jet and one with co-rotating propellers, following an engine failure in flight which of the following is most likely to occur?",
    choices: {
      A: "the jet will have a greater rolling tendency",
      B: "the propeller will have a greater rolling tendency",
      C: "both will have the same rolling tendency",
      D: "neither will tend to roll",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Drag on a windmilling propeller compared to a stationary propeller is",
    choices: {
      A: "greater",
      B: "equal PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "less",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the propeller RPM lever is pushed forward during a power off descent the propeller pitch",
    choices: {
      A: "increases and ROD increases",
      B: "increases and ROD decreases",
      C: "decreases and ROD increases",
      D: "decreases and ROD decreases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "With a propeller in the feathered position",
    choices: {
      A: "drag is minimal",
      B: "best for engine lubrication",
      C: "gives maximum wind milling RPM",
      D: "drag is maximal",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A single engine aircraft with a constant speed propeller is in a gliding descent with the engine idling; what would be the effect of increasing the propeller pitch?",
    choices: {
      A: "increased L/D max, increased ROD",
      B: "decreased L/D max, increased ROD",
      C: "increased L/D max, decrased ROD",
      D: "decreased L/D max, decreased ROD",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which is one of the disadvantages of increasing the number of propeller blades?",
    choices: {
      A: "Decrease propeller efficiency",
      B: "Increased noise",
      C: "Less power can be absorbed by the propeller",
      D: "Higher tip-speed",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In the alpha and beta ranges respectively the governed elements of turboprop propeller controls are as follows",
    choices: {
      A: "fuel flow and pitch",
      B: "reverse thrust and blade angle",
      C: "engine RPM and fuel flow",
      D: "propeller RPM and engine RPM",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Increasing the number of propeller blades will",
    choices: {
      A: "decrease the torque in the propeller shaft at maximum power",
      B: "increase the propeller efficiency",
      C: "increase the noise level at maximum power",
      D: "increase the maximum absorption of power",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Increasing the camber on propeller blades will, if all else is the same",
    choices: {
      A: "increase the propeller solidity",
      B: "increase the power absorption capability",
      C: "increase the propeller efficiency",
      D: "give the aircraft greater range",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Why does the blade angle of a propeller change from root to tip?",
    choices: {
      A: "To compensate for the increased velocity of the blade tip",
      B: "Cross-sectional segment increases from tip to root",
      C: "To provide increased thrust at root",
      D: "To compensate for the change in geometric cross section",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For a fixed-pitch propeller designed for cruise, the angle of attack of each blade, measured at the reference section",
    choices: {
      A: "is lower in ground run than in flight (with identical engine RPM) PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "decreases when the aircraft speed decreases (with identical engine RPM)",
      C: "is optimum when the aircraft is in a stabilised cruising flight",
      D: "is always positive during idling descent",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The number of blades in a propeller would be increased",
    choices: {
      A: "to increase the efficiency of the variable pitch mechanism",
      B: "to increase power absorption capability",
      C: "to reduce noise",
      D: "to enable a longer undercarriage to be fitted",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A reversible propeller is on that",
    choices: {
      A: "will deliver negative thrust",
      B: "is mounted behind the main wing",
      C: "is a pusher rather than a tractor",
      D: "can be operated in either direction of rotation",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The more blades a propeller has, the more power it is able to absorb. The limitation on blade number from an aerodynamic standpoint is",
    choices: {
      A: "engine speed if the engine is not geared",
      B: "the blade diameter as compared to the maximum width",
      C: "the loss of efficiency of one blade if it follows to the path of the preceding blade too closely",
      D: "the loss of efficiency as the propeller tip approaches sonic speed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the purpose of increasing the number of propeller blades?",
    choices: {
      A: "noise reduction",
      B: "increase the power absorption",
      C: "increase the efficiency of the variable pitch mechanism PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "enable a longer undercarriage to be used",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the disadvantage of increasing the number of propeller blades?",
    choices: {
      A: "decreased efficiency",
      B: "increased noise",
      C: "decreased power absorption",
      D: "increased vibration",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Asymmetric propeller blade effect is mainly induced by",
    choices: {
      A: "large angles of yaw",
      B: "large angles of climb",
      C: "the inclination of the propeller axis to the relative airflow",
      D: "high speed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A propeller is turning to the right, seen from behind. The asymmetric thrust effect in the climb will",
    choices: {
      A: "roll the aeroplane to the right",
      B: "roll the aeroplane to the left",
      C: "yaw the aeroplane to the right",
      D: "yaw the aeroplane to the left",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A propeller is turning to the right, seen from behind. The asymmetric thrust effect is mainly induced by",
    choices: {
      A: "large angles of yaw",
      B: "high speed",
      C: "high angles of attack",
      D: "large angles of climb",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 081-02)Using the diagram below of the forces affecting a propeller in flight, which arrow represents the torque moment?",
    choices: {
      A: "B",
      B: "A",
      C: "C",
      D: "D",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A propeller turns to the right, seen from behind. The torque effect in the take-off will",
    choices: {
      A: "pitch the aeroplane nose up",
      B: "pitch the aeroplane nose down",
      C: "roll the aeroplane to the right",
      D: "roll the aeroplane to the left",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Propeller efficiency is best described as",
    choices: {
      A: "thrust HP to shaft HP",
      B: "thrust HP to overall power",
      C: "brake HP to maximum power",
      D: "thermal HP to shaft HP",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following definitions of propeller parameters is correct?",
    choices: {
      A: "Blade angle is the angle between chord line and propeller axis",
      B: "Geometric propeller pitch is the theoretical distance travelled forward by the propeller in onerotation",
      C: "Critical tip speed is the propeller speed at which there is a risk of the flow separating atsome part of the propeller",
      D: "Blade angle of attack is the angle between chord line and propeller vertical axis",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following would change the magnitude of the gyroscopic precession effect of the propeller?",
    choices: {
      A: "Propeller blade angle",
      B: "Rate of roll",
      C: "Propeller RPM",
      D: "TAS",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During the take-off roll, what affect does torque have on an aircraft with a clockwise rotating propeller?",
    choices: {
      A: "Weight on left wheel increased, weight on right wheel decreased",
      B: "Weight on left wheel increased, weight on right wheel remains constant",
      C: "Weight on left wheel decreased, weight on right wheel increased",
      D: "Weight on right wheel increased, weight on left wheel decreased",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A propeller rotating anti-clockwise when viewed from the front, during the take-off ground roll will",
    choices: {
      A: "produce an increased load on the left wheel due to torque reaction",
      B: "produce an increased load on the right wheel due to gyroscopic effect",
      C: "produce an increased load on the right wheel due to torque reaction",
      D: "produce an increased load on the left wheel due to gyroscopic effect",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Gyroscopic precession of the propeller is induced by",
    choices: {
      A: "pitching and rolling",
      B: "pitching and yawing",
      C: "increasing RPM and yawing",
      D: "increasing RPM and rolling",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Propeller torque is caused by",
    choices: {
      A: "the propeller trying to reduce the pitch angl owing to the centrifugal turning moment PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "the forces caused by the airflow on the propeller",
      C: "the forward thrust on the propeller",
      D: "the backward thrust on the propeller",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The torque reaction of a right-hand propeller will cause",
    choices: {
      A: "roll to the right",
      B: "nose up pitch",
      C: "roll to the left",
      D: "nose down pitch",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For an aircraft with a right hand propeller, the slip-stream rotation will cause",
    choices: {
      A: "yaw to the left",
      B: "yaw to the right",
      C: "roll to the left",
      D: "roll to the right",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "To counteract the effect of slip-stream on a single engined aircraft",
    choices: {
      A: "the horizontal stabiliser should be reduced in size",
      B: "the fin should be placed as far as possible from the propeller",
      C: "higher power settings should be used",
      D: "fries ailerons should be used",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "On a single engined aircraft with a right hand propeller the gyroscopic effect causes",
    choices: {
      A: "the nose to rise during turn to the left",
      B: "the nose to fall during turns to the left",
      C: "roll to the right during turns to the left PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "roll to the left during turns to the right",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Counter rotating propellers have the effect of",
    choices: {
      A: "increasing the torque but decreasing the gyroscopic effect",
      B: "decreasing the torque but increasing the gyroscopic effect",
      C: "increasing the torque and gyroscopic effects",
      D: "cancelling out the torque and gyroscopic effects",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For a tail wheel aircraft with a right handed propeller, at the start of the take off run, ashymmetric blade effect causes",
    choices: {
      A: "yaw to right",
      B: "no effect",
      C: "nose down pitch (tail up)",
      D: "yaw to left",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In which of the following lists of flight conditions will torque effect be greatest in a single-engine aeroplane?",
    choices: {
      A: "low airspeed/high power/high angle of attack",
      B: "high airspeed/high power/high angle of attack",
      C: "low airspeed/low power/low angle of attack",
      D: "high airspeed/ low power/low angle of attack",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following would alter the gyroscopic effect of a propeller?",
    choices: {
      A: "roll and pitch",
      B: "pitch an roll",
      C: "increase rpm",
      D: "decrease blade angle",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With a clockwise rotating propeller in a climb, the asymmetric thrust effect will cause",
    choices: {
      A: "roll to the left",
      B: "yaw to the left",
      C: "roll to the right",
      D: "yaw to the right",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Torque effect of a propeller which turns to the right produces a",
    choices: {
      A: "nose up pitching moment",
      B: "rolling moment to the left",
      C: "nose down pitching moment",
      D: "rolling moment to the right",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a steady banked turn the lift will",
    choices: {
      A: "equal the weight",
      B: "equal the centrifugal force",
      C: "equal the resultant of weight and centrifugal force",
      D: "equal the centrifugal force minus the weight",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Why is VMCG determined with the nosewheel steering disconnected?",
    choices: {
      A: "Because the nosewheel steering could become inoperative after an engine has failed",
      B: "Because the value of VMCG must also be applicable on wet and/or slippery runways",
      C: "Because it must be possible to abort the take-off even after the nosewheel has already beenlifted off the ground",
      D: "Because nosewheel steering has no effect on the value of VMCG",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Nose-wheel seering is not used in certification of Vmcg because",
    choices: {
      A: "nose-wheel steering is not stressed for high speed operation",
      B: "nose-wheel steering does not work on wet runways",
      C: "the use of nose-wheel steering is a distraction from the real emergency",
      D: "all of the above",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "How does VMCG change with increasing field elevation and temperature?",
    choices: {
      A: "Increases, because VMCG is related to V1 and VR and those speeds increase if the densitydecreases",
      B: "Decreases, because VMCG is expressed in IAS and the IAS decreases with TAS constant anddecreasing density",
      C: "Increases, because at a lower density a larger IAS is necessary to generate the required rudderforce",
      D: "Decreases, because the engine thrust decreases",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement is correct about an aeroplane, that has experienced a left engine failure and continues afterwards in straight and level cruise flight with wings level?",
    choices: {
      A: "turn indicator neutral, slip indicator neutral",
      B: "turn indicator neutral, slip indicator left of neutral",
      C: "turn indicator left of neutral, slip indicator left of neutral",
      D: "turn indicator left of neutral, slip indicator neutral",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft is in straight and level flight with the left engine inoperative and the wings level. The turn indicator will be and the slip indicator will be",
    choices: {
      A: "neutral; neutral",
      B: "showing left yaw; neutral",
      C: "showing right yaw; displaced left",
      D: "showing right yaw; displaced right",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During the take-off roll with a strong crosswind from the left, a four engine jet aeroplane with wing mounted engines experiences an engine failure. The greatest control problem is caused by the loss of which engine?",
    choices: {
      A: "The left inboard engine",
      B: "The right outboard engine",
      C: "The right inboard engine",
      D: "The left outboard engine",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For a given aeroplane which two main variables determine the value of VMCG?",
    choices: {
      A: "Airport elevation and temperature",
      B: "Engine thrust and rudder deflection",
      C: "Air density and runway length",
      D: "Engine thrut and gear position",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "VMCA is certified with a bank angle of not more than 5o towards the operating engine because",
    choices: {
      A: "the slip indicator at 5o bank (live engine low) is centred",
      B: "at 5o bank (live engine low) sideslip is zero",
      C: "more than 5o bank (live engine low) would not reduce VMCA",
      D: "although more bank reduces VMCA, too much bank may lead to fin stall",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following statements is correct? l. VMCL is the minimum contro speed in the landing configurationll. ii. The speed VMCL is always limited by maximum rudder deflection",
    choices: {
      A: "l is incorrect; ii is correct",
      B: "l is incorrect; ll is incorrect",
      C: "l is correct; ll is correct",
      D: "l is correct; ll is incorrect",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which statement about minikmum control speed is correct?",
    choices: {
      A: "VMCL is determined by maximum rudder only",
      B: "The nose wheel steering control may be used to determine VMCG",
      C: "Crosswind is taken into account to determine VMCG",
      D: "VMCA depends on the airport density altitude, and the location of the engine on the aeroplane(aft fuselage or wing)",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The fin of an aircraft is a symmetrical aerofoil",
    choices: {
      A: "It will only provide an aerodynamic force when the rudder is moved",
      B: "It will give drag, but no lift because it is a symmetrical aerofoil",
      C: "it can give no lift, only drag",
      D: "it could stall if the fin angle of attack is too great",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which condition has the effect of reducing critical engine failure speed",
    choices: {
      A: "low gross weight",
      B: "high density altitude",
      C: "slush on the runway or inoperative anti-skid",
      D: "fitting engines of greater power output",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What effect, if any, does altitude have on Vmc for an aeroplane with un- supercharged engines?",
    choices: {
      A: "remains constant to full throttle height and then decreases",
      B: "increases with increasing altitude",
      C: "altitude has no effect",
      D: "decreases with increasing altitude",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which is the advantage of rear mounted engines?",
    choices: {
      A: "easier engine access PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "decreased liability for wing flutter",
      C: "lighter wing construction",
      D: "less effect of thrust changes on longitudinal control",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Why is it necessary to consider the nose wheel steering disconnected when establishing Vmcg?",
    choices: {
      A: "if the take off is abandoned after the nose wheel is lifted, there will be no loss of control",
      B: "to take account of slipper runway conditions",
      C: "to prevent weather cocking in a cross wind",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What happens to Vmcg as altitude increases and temperature increases",
    choices: {
      A: "remains constant",
      B: "increases",
      C: "decreases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Higher all-up-weight will make your VMCA",
    choices: {
      A: "lower",
      B: "higher",
      C: "the same",
      D: "higher by half the percentage change in a.u.w.",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "VMCG is the speed at which",
    choices: {
      A: "Directional control can be maintained at engine failure on take-off using the primary flyingcontrols",
      B: "It is no longer possible to reject the take-off",
      C: "Nose wheel steering becomes ineffective",
      D: "Directional and lateral control can be maintained using aileron alone PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A glider reduces weight by dumping water ballast. A ten per cent reduction in weight would give",
    choices: {
      A: "a decrease in best rate of descent",
      B: "a ten per cent increase in best glide angle",
      C: "a five per cent reduction in best glide angle",
      D: "no change in best rate of descent",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The effect of a headwind is to the climb gradient and to the rate of climb",
    choices: {
      A: "increase; not affect",
      B: "increase; decrease",
      C: "decrease; increase",
      D: "not affect; increase",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The maximum glide range of an aircraft will depend on wind and",
    choices: {
      A: "the ratio to lift to drag which varies according to angle of attack",
      B: "speed for minimum power required",
      C: "CL MAX",
      D: "minimum Lift/Drag ratio",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "With a L/D ratio of 9:1 and flying at 12000 ft the glide rane in still air would be",
    choices: {
      A: "15 nm",
      B: "20 nm",
      C: "14 nm",
      D: "18 nm",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The polar curve of an aerofoil is a graphic relation between",
    choices: {
      A: "angle of attack and CL",
      B: "CD and angle of attack",
      C: "CL and CD",
      D: "TAC and stall speed",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Maximum gliding distance of an aircraft is obtained when",
    choices: {
      A: "induced drag equals the coefficient of lift",
      B: "induced drag and parasite drag are equal",
      C: "parasite drag is the least",
      D: "parasite drag is greatest",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "To obtain the best possible gliding distance an aircraft should",
    choices: {
      A: "be as light as possible",
      B: "have a wing that will give high lift",
      C: "have the highest possible lift/drag ratio",
      D: "be as heavy as possible",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following will result in the maximum distance covered over the ground when gliding?",
    choices: {
      A: "headwind",
      B: "tailwind",
      C: "increased weight",
      D: "decreased weight",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The L/D ratio allows the pilot to determine",
    choices: {
      A: "glide distance in still air from a given altitude PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "glide distance from a given altitude",
      C: "horizontal distance covered over the ground",
      D: "descent angle",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "(Refer to figure 081-04)Which line represents the total drag line of an aeroplane?",
    choices: {
      A: "Line B",
      B: "Line A",
      C: "Line C",
      D: "Line D",
    },
    correct: "C",
    ref: "ATPL AND H",
  },
  {
    question:
      "(Refer to figure 081-06)The diagram shows the parameter X versus TAS. If a horizontal flight is considered the axis X shows",
    choices: {
      A: "the total drag",
      B: "the induced drag",
      C: "the lift force",
      D: "the parasite drag",
    },
    correct: "B",
    ref: "ATPL AND H",
  },
  {
    question: "Which wind-shear condition results in an increase in airspeed?",
    choices: {
      A: "increasing tailwind",
      B: "decreasing tailwind",
      C: "decreasing headwind",
      D: "none of the above",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which initial cockpit indications should a pilot be aware of when a headwind shears to a calm wind?",
    choices: {
      A: "IAS decreases/pitch up/altitude decreases",
      B: "IAS increases/pitch down/altitude increases",
      C: "IAS dedcreases/pitch down/altitude decreases PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "IAS increases/pitch up/altitude increases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "On passing through a shear line, why does the IAS change?",
    choices: {
      A: "the inertia of the aircraft will initially keep it at its original speed in relation to theground",
      B: "a decreased mass of air is entering the pitot tube",
      C: "windshear alters the air density, which affects the ASI reading",
      D: "windshear changes the static pressure, which makes the ASI miss-read",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The rate of doing work is",
    choices: {
      A: "Power, measured in Joules",
      B: "Power, measured in Watts",
      C: "Force, measured in Newtons",
      D: "Power, measured in Newtons",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is the significance of Vi?",
    choices: {
      A: "Along with Vr, it determines the angle of attack",
      B: "It determines the magnitude of Vr",
      C: "Along with Vr, it determines the pitch angle",
      D: "It determines the magnitude of rotor drag",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "During a climb how is the angle of attack affected?",
    choices: {
      A: "A rate of climb airflow opposes induced flow increasing the angle of attack",
      B: "A rate of climb airflow adds to induced flow decreasing the angle of attack",
      C: "A rate of descent airflow opposes induced flow increasing the angle of attack",
      D: "A rate of climb airflow adds to induced flow increasing the angle of attack PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If a steady stream of airflows through a venture its velocity will and static pressure will",
    choices: {
      A: "increase; rise",
      B: "decrease; fall",
      C: "decrease; rise",
      D: "increase; fall",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is viscosity?",
    choices: {
      A: "The resistance to movement of one layer of air over another",
      B: "The density of a liquid or gas",
      C: "The pressure exerted within a substance",
      D: "A measure of temperature and humidity",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If the disc of a teetering rotor system with an under-slung feathering hinge is tilted the radius of the rotor blades cedntre of gravity will",
    choices: {
      A: "increase",
      B: "decrease",
      C: "become elliptical",
      D: "remain the same",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The resultant force from pressure envelopes around an aerofoil can be described as",
    choices: {
      A: "The total reaction",
      B: "Lift",
      C: "Rotor thrust",
      D: "The Vertical component of rotor thrust",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Up to what height can water vapour be found in the atmosphere?",
    choices: {
      A: "11 miles",
      B: "6 km",
      C: "11 km",
      D: "16 miles",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is the relationship between Vr and the plane of rotation",
    choices: {
      A: "They are parallel",
      B: "They are perpendicular",
      C: "They determine the angle of attack",
      D: "They determine the RAF",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Lift = CL1/2pV2S, where S is",
    choices: {
      A: "The speed of the air flow",
      B: "The shape of the aerofoil",
      C: "The plan area of the aerofoil",
      D: "Air density",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is force?",
    choices: {
      A: "Mass x pressure",
      B: "Speed x pressure",
      C: "Mass x speed",
      D: "Mass x acceleration",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is a mixing unit?",
    choices: {
      A: "A mechanical system of balancing the controls PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "A mechanical system of cross-coupling the controls",
      C: "A method of balancing blade pitch angle",
      D: "A piece of equipment a DJ might use",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If a helicopter is on the ground and the centre of gravity is directly below the rotor hub, where will weight be acting?",
    choices: {
      A: "Vertically down along the shaft axis",
      B: "Vertically down from the centre of the helicopter",
      C: "Down and back, away from the shaft axis",
      D: "Down and forward, away from the shaft axis",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "When the upper surface of an aerofoil is predominantly covered in separated airflow the aerofoil is",
    choices: {
      A: "Descending",
      B: "Climbing",
      C: "Stalled",
      D: "Retreating",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "If uncorrected, what will retreating blade stall cause?",
    choices: {
      A: "The helicopter to pitch down and roll towards the retreating side",
      B: "The helicopter to pitch up and roll towards the advancing side",
      C: "The helicopter to pitch down and roll towards the advancing side",
      D: "The helicopter to pitch up and roll towards the retreating side",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What part of the disc is affected by retreating blade stall?",
    choices: {
      A: "The tip section on the advancing side",
      B: "The root section on the retreating side",
      C: "The root section on the advancing side PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "The tip section on the retreating side",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "At what speed do shock waves occur on most aerofoils?",
    choices: {
      A: "0.99 mach",
      B: "0.5 mach",
      C: "1.15 mach",
      D: "0.85 mach",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "When can shock stall occur?",
    choices: {
      A: "At low speed",
      B: "At negative angles of attack",
      C: "At any angle of attack",
      D: "In the hover",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In fully developed vortex ring root stall moves and the tip vortices",
    choices: {
      A: "inboard; reduce",
      B: "outboard; increase",
      C: "outboard; reduce",
      D: "inboard; increase",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "As air becomes saturated, air density and rotor performance is",
    choices: {
      A: "increases; reduced",
      B: "decreases; reduced",
      C: "decreases; improved",
      D: "increases; improved",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "If a body is dynamically unstable any oscillations would be",
    choices: {
      A: "Damped",
      B: "Divergent",
      C: "Neutral",
      D: "Contained",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is ASE?",
    choices: {
      A: "Automated Servo Equipment",
      B: "Automatic Stopping Equipment",
      C: "Automatic Stability Equipment",
      D: "Angle Staged Electrics",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "If density altitude increases the TAS will and range will",
    choices: {
      A: "increase; increase",
      B: "decrease; increase",
      C: "decrease; decrease",
      D: "increase; decrease",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which is the normal axis of stability?",
    choices: {
      A: "Pitch",
      B: "Roll",
      C: "Yaw",
      D: "Feathering",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The Centre of Pressure is the point on an aerofoil chord section where",
    choices: {
      A: "The total weight of the aircraft is said to act PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "The total reaction is said to act",
      C: "The airflow separates from the aerofoil section",
      D: "The maximum velocity of the airflow occurs",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The formula for lift can be written as",
    choices: {
      A: "L = CL1/2pV2S",
      B: "L = CL1/2pVS2",
      C: "L = CL1/2pVS",
      D: "L= CL1/4pV2S",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A helicopter is in unaccelerated, steady forward flight. The forces acting on the helicopter are",
    choices: {
      A: "The lift/weight couple balancing the thrust/parasite drag couple",
      B: "The vertical component of TRT/horizontal component of TRT, balancing the weight/parasitedrag couple",
      C: "The lift/thrust couple balancing the weight/parasite drag couple",
      D: "The vertical component of TRT/weight couple, balancing the horizontal component ofTRT/parasite drag couple",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The phenomenon of retreating blade stall can cause the helicopter to",
    choices: {
      A: "Suddenly pitch up and roll towards the advancing side",
      B: "Suddenly pitch down and roll towards the retreating side",
      C: "Suddenly pitch up and roll towards the retreating side",
      D: "Suddenly pitch down and roll towards the advancing side",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The (i) is determined by the relationship between (ii) and the (iii). Choose which words which fit the statement.",
    choices: {
      A: "(i) rotational airflow, (ii) induced flow, (iii) relative velocity PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "(i) relative airflow, (ii) rotor thrust, (iii) plane of rotation",
      C: "(i) relative airflow, (ii) induced flow, (iii) rotational velocity",
      D: "(i) rotational airflow, (ii) rotor drag, (iii) relative velocity",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Ice build up on the airframe, rotor blades and engine can lead to a number of hazards and limitations: 1. Increase in power requirements 2. Increase in A.U.W 3. Increase in vibration 4. Decrease in controllability 5. Change to rotor profile",
    choices: {
      A: "i, ii, iv and v",
      B: "ii, iii and v",
      C: "i, ii, iii and iv",
      D: "All the above",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "As A.U.W. or altitude is increased, retreating blade stall is likely to occur",
    choices: {
      A: "At a lower Indicated Airspeed (IAS) in both cases",
      B: "At a higher IAS for a higher AUW, but the same IAS for an increased altitude",
      C: "At a higher IAS in both cases",
      D: "At a lower IAS for a higher AUW but the same IAS for an increased altitude",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The unit of measurement of pressure is",
    choices: {
      A: "psi",
      B: "kg/m3",
      C: "lb/gal",
      D: "kg/dm2",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "In level flight an increase in angle of attack will cause",
    choices: {
      A: "the stagnation point to move down and aft",
      B: "the boundary layer to become thinner",
      C: "a decrease in pitch angle",
      D: "the centre of pressure to move aft",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The unit of density is",
    choices: {
      A: "Bar",
      B: "psi",
      C: "kg/cm2",
      D: "kg/m3",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Induced drag is created by the",
    choices: {
      A: "separation of the boundary layer over the wing",
      B: "interference of the air stream between wing and fuselage",
      C: "spanwise flow pattern resulting in the tip vortices",
      D: "propeller wash blowing across the wing",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The angle of attack of a wing profile is defined as the angle between",
    choices: {
      A: "the undisturbed airflow and the chordline",
      B: "the local airflow and the mean camberline",
      C: "the local airflow and the chordline",
      D: "the undisturbed airflow and the mean camberline",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The term angle of attack is defined as",
    choices: {
      A: "the angle that determines the magnitude of the lift force PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "the angle between the wing chord line and the relative wind",
      C: "the angle between the relative airflow and the horizontal axis",
      D: "the angle between the wing and tail plane incidence",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "At a constant IAS, induced drag is affected by",
    choices: {
      A: "aircraft weight",
      B: "changes in thrust",
      C: "angle between chord line and longitudinal axis",
      D: "wing location",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which of the following is the cause of wing tip vortices?",
    choices: {
      A: "Air spilling from the top surface to the bottom surface at the wing tip",
      B: "Air spilling from the bottom surface to the top surface at the wing tip",
      C: "Air spilling from the bottom surface to the top surface at the left wig tip and from thetop surface to the bottom surface at the right wing tip",
      D: "Spanwise flow vector from the tip to the root on the bottom surface of the wing",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which statement is correct about the laminar and turbulent boundary layer",
    choices: {
      A: "separation point will occur earlier in the turbulent layer",
      B: "friction drag will be equal in both types of layers",
      C: "friction drag is lower in the turbulent layer",
      D: "friction drag is lower in the laminar layer",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "High aspect ratio",
    choices: {
      A: "reduces parasite drag",
      B: "reduces induced drag PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "increases stalling speed",
      D: "reduces manoeuvrability",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "At a constant CAS when flying below sea level an aircraft will have",
    choices: {
      A: "a higher TAX than at sea level",
      B: "a lower TAS than at sea level at ISA conditions",
      C: "the same TAS as at sea level",
      D: "the same TAS, but an increased IAS",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The angle of attack of a two dimensional wing section is the angle between",
    choices: {
      A: "the chord line of the aerofoil and the fuselage centreline",
      B: "the chord line of the aerofoil and the free stream direction",
      C: "the fuselage core line and the free stream direction",
      D: "the chord line and the camber line of the aerofoil",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Induced drag may be reduced by",
    choices: {
      A: "an increase in the taper ratio of the wing",
      B: "an increase in aspect ratio",
      C: "a decrease of the aspect ratio",
      D: "the use of a wing tip with a much thinner aerofoil",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The units of wing loading (l) W/S and (ll) dynamic pressure q are",
    choices: {
      A: "(l) N/m3; (ll) kg/m2",
      B: "(l) kg/m; (ll) N/m2",
      C: "(l) N/m; (ll) kg",
      D: "(l) N/m2; (ll) N/m2 PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "With increasing angle of attack the CP will reach its most forward point",
    choices: {
      A: "just below the stalling angle",
      B: "just above the stalling angle",
      C: "at the stalling angle",
      D: "at various points dependent on aircraft weight",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Excluding constants, the coefficient of induced drag (CDi) is the ratio of",
    choices: {
      A: "CL2 and S (wing surface)",
      B: "CL2 and AR (aspect ratio)",
      C: "CL and CD",
      D: "CL and b (wing span)",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The units of density of the air (l) and the force (ll) are",
    choices: {
      A: "(l) kg/m3; (ll) N",
      B: "(l) kg/m?; (ll) kg",
      C: "(l) N/m3; (ll) N",
      D: "(l) N/kg; (ll) kg",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The induced drag",
    choices: {
      A: "increases as the lift coefficient increases",
      B: "increases as the aspect ratio increases",
      C: "has no relation to the lift coefficient",
      D: "increases as the magnitude of the tip vortices decreases",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The aeroplane drag in straight and level flight is lowest when the",
    choices: {
      A: "parasite drag equals twice the induced drag",
      B: "parasite drag is equal to the induced drag",
      C: "induced drag is equal to zero",
      D: "induced drag is lowest",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "With increasing angle of attack, the stagnation point will move (l) and the point of lowest pressure will move (ll).",
    choices: {
      A: "(l) up; (ll) aft",
      B: "(l) down; (ll) forward",
      C: "(ll) down; (ll) aft",
      D: "(l) up; (ll) forward",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "A symmetrical aerofoil section at CL = 0 will produce?",
    choices: {
      A: "A negative (nose down) pitching moment",
      B: "A positive (nose up) pitching moment",
      C: "Zero pitching moment",
      D: "No aerodynamic force",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which of the following is the greatest factor causing lift?",
    choices: {
      A: "Increased airflow velocity below the wing",
      B: "Increased pressure below wing",
      C: "Suction above the wing",
      D: "Decreased airflow velocity above the wing",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is the Si unit that results from multiplying kg and m/s2?",
    choices: {
      A: "Joule PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "Psi",
      C: "Newton",
      D: "Watt",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The airfoil chord line is",
    choices: {
      A: "a straight line from the wing leading edge to the trailing edge",
      B: "a line equidistant from the upper and lower wing surfaces",
      C: "a line tangential to the wing surface at the point of maximum curvature",
      D: "a line drawn at 15% chord from the root to the tip",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "An increase in aspect ratio will",
    choices: {
      A: "have no effect on a wing or airfoil section",
      B: "cause VIMD to be reduced",
      C: "cause induced drag to increase",
      D: "cause VIMD to be increased",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The effects of very heavy rain (tropical rain) on the aerodynamic characteristics of an aeroplane are",
    choices: {
      A: "decrease of CLmax and increase of drag",
      B: "decrease of CLmax and decrease of drag",
      C: "increase of CLmax and increase of drag",
      D: "increase of CLmax and decrease of drag",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Induced drag is caused by",
    choices: {
      A: "increased pressure at the leading edge stagnation point",
      B: "wing mounted fuel tanks",
      C: "wing tip vortices and downwash PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "winglets and washout",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "A laminar boundary layer is and has drag than a turbulent layer",
    choices: {
      A: "thick; more",
      B: "thick; less",
      C: "thin; more",
      D: "thin; less",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A body is placed in a certain airstream. The density of the airstream decreases to half of the original value. The aerodynamic drag will decrease with a factor",
    choices: {
      A: "4",
      B: "2",
      C: "8",
      D: "1.4",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In a two-dimensional flow pattern, where the streamlines converge the static pressure will",
    choices: {
      A: "increase initially, then decrease",
      B: "decrease",
      C: "increase",
      D: "not change",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The term angle of attack in a two dimensional flow is defined as",
    choices: {
      A: "the angle for maximum lift/drag ratio",
      B: "the angle between the aeroplane climb path and the horizon",
      C: "the angle formed by the longitudinal axis of the aeroplane and the chord line of the wing",
      D: "the angle between the wing chord line and the direction of the relative wind/airflow",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The continuity equation states: If the area of a tube is increasing, the speed of the subsonic and incompressible flow inside is",
    choices: {
      A: "sonic",
      B: "not changing",
      C: "increasing",
      D: "decreasing",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What phenomena causes induced drag?",
    choices: {
      A: "Wing tip vortices",
      B: "Wing tanks",
      C: "The increased pressure at the leading edge",
      D: "The spanwise flow, inward below the wing and outward above",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In a stream tube, if density is halved, drag will be reduced by a factor of",
    choices: {
      A: "8",
      B: "4",
      C: "6",
      D: "2",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The following unit of measurement kgm/s is expressed in the Si system as",
    choices: {
      A: "Pascal",
      B: "Newton",
      C: "Joule",
      D: "Watt",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The wake vortices behind a large aircraft begin on takeoff and end on landing",
    choices: {
      A: "at V2; in the flare PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "on rotation; as the nosewheel goes down",
      C: "at V1; when lift dump is selected",
      D: "at 80kt; on touchdown",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The (subsonic) static pressure",
    choices: {
      A: "increases in a flow in a tube when the diameter decreases",
      B: "is the total pressure plus the dynamic pressure",
      C: "is the pressure in a point at which the velocity has become zero",
      D: "decreases in a flow in a tube when the diameter decreases",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The boundary layer is considered to be turbulent?",
    choices: {
      A: "Just in front of the transition point",
      B: "Between the transition and separation points",
      C: "Just aft of the separation point",
      D: "Just in front of the centre of pressure",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If the IAS is increased by a factor of 4, by what factor would the drag increase?",
    choices: {
      A: "4",
      B: "8",
      C: "12",
      D: "16",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which statement is correct about the Cl and angle of attack?",
    choices: {
      A: "For a symmetric aerofoil, if angle of attack = 0, Cl = 0",
      B: "For a symmetric aerofoil, if angle of attach = 0, Cl is not equal to 0",
      C: "For an asymmetric aerofoil, if angle of attack = 0, l = 0 PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "For an asymmetric aerofil with positive camber, if angle of attack is greater than 0, Cl = 0",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What are the correct Sl units for density and force?",
    choices: {
      A: "Kg/N, Nm3",
      B: "N/m3, Kg",
      C: "Kg/m3, Newtons",
      D: "Kg/m3, Kg",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Subsonic flow over a cambered airfoil at 4o angle of attack will cause",
    choices: {
      A: "an increase in speed and drop in pressure over the upper surface and a decrease in speed and arise in pressure over the lower surface",
      B: "a decrease in speed and drop in pressure over the upper surface and a decrease in speed anda drop in pressure over the lower surface",
      C: "an increase in speed and drop in pressure over the upper surface and an increase in speedand a drop in pressure over the lower surface",
      D: "a decrease in speed and drop in pressure over the upper surface and an increase in speedand a drop in pressure over the lower surface",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which of the following expressions could represent the relationship between force, mass and acceleration",
    choices: {
      A: "a = m/F",
      B: "m = F x a",
      C: "F = m x a",
      D: "a = F x m",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A line connecting the leading and trailing edge midway between the upper and lower surface of a aerofoil. This definition is application for",
    choices: {
      A: "the mean aerodynamic chord line",
      B: "the chord line PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "the camber line",
      D: "the upper camber line",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The terms q and S in the lift formula are",
    choices: {
      A: "square root of surface and wing loading",
      B: "dynamic pressure and the area of the wing",
      C: "static pressure and wing surface area",
      D: "static pressure and dynamic pressure",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If angle of attack is increased beyond the critical angle of attack, the lift coefficient and the stagnation point moves",
    choices: {
      A: "decrease; rearward",
      B: "increases; rearward",
      C: "decreases; forward",
      D: "increases; forward",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "What is the Sl unit which results from multiplying kg and m/s squared?",
    choices: {
      A: "Newton",
      B: "Psi",
      C: "Joule",
      D: "Watt",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which kind of boundary layer has the strongest change in velocity close to the surface?",
    choices: {
      A: "No difference",
      B: "Laminar boundary layer",
      C: "Turbulent boundary layer",
      D: "Transition boundary layer PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "How is the thickness of an aerofoil section measured?",
    choices: {
      A: "As the ratio of wing angle",
      B: "Related to camber",
      C: "As the percentage of chord",
      D: "In metres",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which of the following is the most important result/problem caused by ice formation?",
    choices: {
      A: "Increased drag",
      B: "Increased weight",
      C: "Blockage of the controls",
      D: "Reduction in CLMAX",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is the CL and CD ratio at normal angles of attack?",
    choices: {
      A: "CL higher",
      B: "CD higher",
      C: "The same",
      D: "CL much higher",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Cambered wing sections give maximum CL at a relatively angles of attack.",
    choices: {
      A: "high; high",
      B: "low; high",
      C: "low; low",
      D: "high; low",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Drag is in the direction of and lift is perpendicular to the",
    choices: {
      A: "chord line",
      B: "relative wind/airflow",
      C: "horizon",
      D: "longitudinal axis",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Bernoullis Theorem states",
    choices: {
      A: "dynamic pressure increase and static pressure increase",
      B: "dynamic pressure increase and static pressure decrease",
      C: "dynamic pressure is maximum at stagnation point",
      D: "zero pressure at zero dynamic pressure",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "On an airfoil the centre of pressure will be most forward",
    choices: {
      A: "at the optimum angle",
      B: "at the stalling angle",
      C: "just below the stalling angle",
      D: "just above the stalling angle",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The aerodynamic drag of a body, placed in a certain airstream depends amongst others on",
    choices: {
      A: "the airstream velocity",
      B: "the specific mass of the body",
      C: "the weight of the body",
      D: "the c.g. location of the body",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which statement about induced drag and tip vortices is correct?",
    choices: {
      A: "Tip vortices can be diminished by vortex generators PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "The flow direction at the upper side of the wing has a component in wing root direction,the flow at the underside of the wing in wing tip direction",
      C: "The flow direction at the upper and under side of the wing, both deviate in wing tipdirection",
      D: "The wing tip vortices and the induced drag decrease at increasing angle of attack",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "How does aerodynamic drag vary when airspeed is doubled? By a factor of",
    choices: {
      A: "2",
      B: "1",
      C: "16",
      D: "4",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The true airspeed (TAS) is",
    choices: {
      A: "higher than the speed of the undisturbed airstream about the aeroplane",
      B: "lower than the indicated airspeed (IAS) at ISA conditions and altitudes below sea level",
      C: "equal to the IAS, multiplied by the air density at sea level",
      D: "lower than the speed of the undisturbed airstream about the aeroplane",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A body is placed in a certain airstream. The airstream velocity increases by a factor 4. The aerodynamic drag will increase with a factor.",
    choices: {
      A: "8",
      B: "4",
      C: "16",
      D: "12",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What does parasite drag vary with?",
    choices: {
      A: "Square of the speed PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "Clmax",
      C: "Speed",
      D: "Surface area",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Bernoullis equation can be written as (pt = total pressure, ps =static pressure, q = dynamic pressure)",
    choices: {
      A: "pt = ps ' q",
      B: "pt ' q = ps",
      C: "pt + ps = q",
      D: "pt = q ' ps",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "In a symmetrical airfoil the mean camber line is?",
    choices: {
      A: "A line joining points of mean camber along the wing",
      B: "A line joining points of maximum camber along the wing",
      C: "A curve co-incident with the top surface of the airfoil",
      D: "A straight line co-incident with the chord line",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Lift is a function of",
    choices: {
      A: "velocity, density, wing shape and lift coefficient",
      B: "velocity, wing area, CL and density",
      C: "velocity, wing shape, wing area and CL",
      D: "velocity, density, gross wing area and CD",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The induced drag coefficient, CDi is proportional with",
    choices: {
      A: "CL2",
      B: "CL",
      C: "square root (CL) PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "Clmax",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "At zero angle of attack in flight, a symmetrical wing section will produce",
    choices: {
      A: "some lift and drag",
      B: "zero lift with some induced and profile drag",
      C: "zero lift and drag",
      D: "zero lift with some drag",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "When considering an angle of attack versus coefficient of lift graph for a cambered aerofoil, where does the lift curve intersect the vertical CL axis?",
    choices: {
      A: "Above the origin",
      B: "Below the origin",
      C: "At the point of origin",
      D: "To the left of the origin",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The relationship between induced drag and the aspect ratio is",
    choices: {
      A: "a decrease in the aspect ratio increases the induced drag",
      B: "there is no relationship",
      C: "induced drag = 1.3 aspect ratio value",
      D: "an increase in the aspect ratio increases the induced drag",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If the continuity equation is applicable, what will happen to the air density (rho) if the cross sectional area of a tube changes? (low speed, subsonic and incompressible flow)",
    choices: {
      A: "The density depends on the change of the tube area",
      B: "rho1<rho2",
      C: "rho1>rho2",
      D: "rho1=rho2",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The angle between the airflow (relative wind) and the chord line of an aerofoil is",
    choices: {
      A: "climb path angle",
      B: "glide path angle",
      C: "angle of attack",
      D: "same as the angle between chord line and fuselage axis",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which of the following statements are correct?",
    choices: {
      A: "Drag acts in the same direction as the relative airflow and lift perpendicular to it",
      B: "Lift acts at right angles to the top surface of the wing and drag acts at right angles tolift",
      C: "Drag acts parallel to the chord and opposite to the direction of motion of the aircraft andlift acts perpendicular to the chord",
      D: "Lift acts perpendicular to the horizontal and drag parallel in a rearwards direction",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Comparing the lift coefficient and drag coefficient at normal angle of attack",
    choices: {
      A: "CL is much greater than CD",
      B: "CL has approximately the same value as CD",
      C: "CL is lower than CD",
      D: "CL is much lower than CD",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The lift force, acting on an aerofoil",
    choices: {
      A: "is mainly caused by suction on the upperside of the aerofoil",
      B: "increases, proportional to the angle of attack until 40 degrees",
      C: "is mainly caused by overpressure at the underside of the aerofoil",
      D: "is maximum at an angle of attack of 2 degrees",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Consider a certain stream line tube. The velocity of the stream in the tube is V. An increase of temperature of the stream at constant value of V will",
    choices: {
      A: "increase the mass flow when the tube is divergent in the direction of the flow",
      B: "increase the mass flow",
      C: "not affect the mass flow",
      D: "decrease the mass flow",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Lift is generated when",
    choices: {
      A: "an aerofoil is placed in a high velocity air stream",
      B: "the shape of the aerofoil is slightly cambered",
      C: "a certain mass of air is accelerated downwards",
      D: "a certain mass of air is retarded",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The most important problem of ice accretion on an aeroplane during flight is",
    choices: {
      A: "blocking of control surfaces",
      B: "increase in weight",
      C: "increase in drag",
      D: "reduction in CLmax",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Static pressure acts",
    choices: {
      A: "parallel to airflow",
      B: "parallel to dynamic pressure",
      C: "in all directions",
      D: "downwards",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The lift formula is",
    choices: {
      A: "L=CL ½ RHO V? S PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "L=W",
      C: "L=CL2 RHO V? S",
      D: "L = nW",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "As subsonic air flows through a convergent duct: (i) static pressure(ii) velocity",
    choices: {
      A: "(i) increases and (ii) decreases",
      B: "(i) increases and (ii) decreases",
      C: "(i) decreases and (ii) decreases",
      D: "(i) decreases and (ii) increases",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "On an asymmetrical, single curve aerofoil, in subsonic airflow, at low angle of attack, when the angle of attack is increased, the centre of pressure will (assume a conventional transport aeroplane)",
    choices: {
      A: "move forward",
      B: "move aft",
      C: "remain matching the airfoil aerodynamic centre",
      D: "remain unaffected",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The point, where the aerodynamic lift acts on a wing is",
    choices: {
      A: "the c.g.location",
      B: "the centre of pressure",
      C: "the point of maximum thickness of the wing",
      D: "the suction point of the wing",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Increasing dynamic (kinetic) pressure will have the following effect on the drag of an aeroplane (all other factors of importance remaining constant)",
    choices: {
      A: "the drag decreases",
      B: "this has no effect",
      C: "the drag increases PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "the drag is only affected by the ground speed",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which one of the following statements about Bernoullis theorem is correct?",
    choices: {
      A: "The dynamic pressure is maximum in the stagnation point",
      B: "The dynamic pressure decreases as static pressure decreases",
      C: "The total pressure is zero when the velocity of the stream is zero",
      D: "The dynami pressure increases as static pressure decreases",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The span-wise flow is caused by the difference between the air pressure on top and beneath the wing and its direction of movement goes from",
    choices: {
      A: "the top to beneath the wing via the wing's trailing edge",
      B: "beneath to the top of the wing via the wing tip",
      C: "beneath to the top of the wing via the trailing edge",
      D: "the top to beneath the wing via the leading edge",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The frontal area of a body, placed in a certain airstream is increased by a factor 3. The shape will not alter. The aerodynamic drag will increase with a factor",
    choices: {
      A: "1.5",
      B: "9",
      C: "6",
      D: "3",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A wing has a span of 50 feet and an area of 200 suare feet. Its mean chord would be",
    choices: {
      A: "4 feet",
      B: "10 feet",
      C: "7.5 feet",
      D: "2.5 feet",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The advantage of a turbulent boundary layer over a laminar boundary layer is",
    choices: {
      A: "decreases energy",
      B: "thinner",
      C: "increased skin friction",
      D: "less tendency to separate",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which statement is correct?",
    choices: {
      A: "The centre of pressure is the point on the wings leading edge where the airflow splits up",
      B: "As the angle of attack increases, the stagnation point on the wings profile moves downwards",
      C: "The stagnation point is another name for centre of pressure",
      D: "The statnation point is always situated on the chord line, the centre of pressure is not",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "On a symmetrical aerofoil, the pitch moment for which Cl = 0 is",
    choices: {
      A: "zero",
      B: "equal to the moment coefficient for stabilised angle of attack",
      C: "positive (pitch-up)",
      D: "negative (pitch-down)",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The angle of attack (aerodynamic angle of incidence) of an aerofoil is the angle between the",
    choices: {
      A: "bottom surface and the chord line",
      B: "chord line and the relative undisturbed airflow",
      C: "bottom surface and the Horizontal",
      D: "bottom surface and the relative airflow",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In a stationary subsonic streamline flow pattern, if the streamline converge in this part of the pattern, the static pressure will (l) and the velocity will (ll)",
    choices: {
      A: "(l) decrease; (ll) increase PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "(l) increase; (ll) increase",
      C: "(l) increase; (ll) decrease",
      D: "(l) decrease; (ll) decrease",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which formula or equation describes the relationship between force (F), acceleration (a) and mass (m)?",
    choices: {
      A: "m = F.a",
      B: "a = F.m",
      C: "F = m/a",
      D: "F = m.a",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The static pressure is acting",
    choices: {
      A: "only perpendicular to the direction of the flow",
      B: "only in the direction of the total pressure",
      C: "in all directions",
      D: "only in direction of the flow",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which of the following statements about boundary layers is correct?",
    choices: {
      A: "The turbulent boundary layer is thinner than the laminar boundary layer",
      B: "The turbulent boundary layer gives a lower skin friction than thelaminar boundary layer",
      C: "The turbulent boundary layer will separate more easily than the laminar boundary layer",
      D: "The turbulent boundary layer has more kinetic energy than the laminar boundary layer",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Where on the surface of a typical aerofoil will flow separation normally start at high angles of attack",
    choices: {
      A: "lower side leading edge",
      B: "upper side trailing edge",
      C: "upper side leading edge PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "lower side trailing edge",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which one of the following statements about the lift-to-drag ratio in straight and level flight is correct?",
    choices: {
      A: "At the highest value of the lift/drag ratio the total drag is lowest",
      B: "The highest value of the lift/drag ratio is reached when the lift is zero",
      C: "The lift/drag ratio always increases as the lift decreases",
      D: "The highest value of the lift/drag ratio is reached when the lift is equal to, the aircraftweight",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The correct drag formula is",
    choices: {
      A: "D=CD ½ RHO V? S",
      B: "D=CD 2 RHO V? S",
      C: "D=CD ½ RHO V S",
      D: "D=CD ½ 1/RHO V? S",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The value of the parasite drag in straight and level flight at constant weight varies linearly with the",
    choices: {
      A: "angle of attack",
      B: "square of the angle of attack",
      C: "square of the speed",
      D: "speed",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "A laminar boundary layer is a layer, in which",
    choices: {
      A: "the vortices are weak",
      B: "the velocity is constant",
      C: "The temperature varies constantly",
      D: "no velocity components exist normal to the surface PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The total pressure is",
    choices: {
      A: "can be measured in a small hole in a surface, parallel to the local stream",
      B: "static pressure plus the dynamic pressure",
      C: "static pressure minus the dynamic pressure",
      D: "½ rho V2",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The lift and drag forces, acting on a wing cross section",
    choices: {
      A: "vary linearly with the angle of attack",
      B: "depend on the pressure distribution about the wing cross section",
      C: "are normal to each other at just one angle of attack",
      D: "are proportional to each other, independent of angle of attack",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The relative thickness of an aerofoil is expressed in",
    choices: {
      A: "degrees cross section tail angle",
      B: "% chord",
      C: "camber",
      D: "meters",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "After the transition point between the laminar and turbulent boundary layer",
    choices: {
      A: "the mean speed increases and the friction drag decreases",
      B: "the boundary layer gets thicker and the speed decreases",
      C: "the mean speed and friction drag increases",
      D: "the boundary layer gets thinner and the speed increases",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "High Aspect Ratio, as compared with low Aspect Ratio, has the effect of",
    choices: {
      A: "increasing lift and drag",
      B: "increasing induced drag and decreasing critical angle of attack",
      C: "decreasing induced drag and critical angle of attack",
      D: "increasing list and critical angle of attack",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is the unit of measurement for power?",
    choices: {
      A: "N/m",
      B: "Nm/s",
      C: "kgm/s2",
      D: "Pa/m2",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The interference drag on an aerofoil are vertical respectively parallel to the",
    choices: {
      A: "separation of the induced vortex",
      B: "the addition of induced and parasite drag",
      C: "interaction between aeroplane parts (e.g. wing/fuselage)",
      D: "downwash behind the wing",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Lift and drag on an aerofoil are vertical respectively parallel to the",
    choices: {
      A: "horizon",
      B: "relative wind/airflow",
      C: "chord line",
      D: "longitudinal axis",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The induced angle of attack is the result of",
    choices: {
      A: "downwash due to tip vortices PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "a large local angle of attack in two dimensional flow",
      C: "downwash due to flow separation",
      D: "change in direction of flow due to the effective angle of attack",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Load factor is the actual lift supported by the wins at any given time",
    choices: {
      A: "divided by the surface area of the wing",
      B: "divided by the total weight of the aircraft",
      C: "subtracted from the aircraft's total weight",
      D: "divided by the aircraft's empty weight",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The service ceiling of an aircraft is",
    choices: {
      A: "the altitude where rate of climb is zero",
      B: "the highest altitude permitted for flight because of manoeuvre capability",
      C: "the altitude where a low specific rate of climb is achieved",
      D: "the altitude above which cruising speed cannot be maintained",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If the weight of an aircraft is increased, the maximum lift/drag ratio will",
    choices: {
      A: "decrease",
      B: "increase",
      C: "not be affected",
      D: "increase although the aircraft will have to be flown more slowly",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A flat plate, when positioned in the airflow at a small angle of attack, will produce",
    choices: {
      A: "both lift and drag",
      B: "lift but no drag",
      C: "drag but no lift PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "neither lift nor drag",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "An aerofoil is cambered when",
    choices: {
      A: "the upper surface of the aerofoil is curved",
      B: "the chord line is curved",
      C: "the line, which connects the centresof all inscribed circles, is curved",
      D: "the maximum thickness is large compared with the length of the chord",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "An aeroplane transitions from steady straight and level flight into a horizontal co-ordinated turn with a load factor of 2, the speed remains constant and the",
    choices: {
      A: "lift increases by a factor of 4",
      B: "angle of attack increases by a factor of ¼",
      C: "induced drag increases by a factor of 4",
      D: "total drag increases by a factor of 4",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Bernoulli's equation can be written as:(pt=total pressure, ps=static pressure and q=dynamic pressure)",
    choices: {
      A: "pt = ps/q",
      B: "pt = ps ' q",
      C: "pt = q ' ps",
      D: "pt = ps + q",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Bernoulli's equation is:(note: rho is density; pstat is static pressure; pdyn is dynamic pressure; ptot is total pressure)",
    choices: {
      A: "ptot + 1rho * TAS2 = constant",
      B: "pstat + 1rho * IAS2 = constant",
      C: "pdyn + 1rho * IAS2 = constant",
      D: "pstat + 1rho * TAS2 = constant",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Consider the steady flow through a stream tube where the velocity of the stream is V. An increase in temperature of the flow at a constant value of V will",
    choices: {
      A: "increase the mass flow when the tube is divergent in the direction of the flow",
      B: "increase the mass flow",
      C: "not affect the mass flow",
      D: "decrease the mass flow",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Considering a positively cambered aerofoil section, the pitching moment when the lift coefficient Cl=0 is",
    choices: {
      A: "positive (nose up)",
      B: "equal to zero",
      C: "maximum",
      D: "negative (nose down)",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If in a two-dimensional incompressible and subsonic flow, the streamlines converge the static pressure in the flow will",
    choices: {
      A: "not change",
      B: "increase",
      C: "decrease",
      D: "increase initially, then decrease",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In a convergent tube with an incompressible sub-sonic airflow, the following pressure changes will occur: Ps = static pressure Pdyn= dynamic pressure Ptot = total pressure Answers",
    choices: {
      A: "Ps decreases, Pdyn increases, static temperature increases",
      B: "Ps increases, Pdyn decreases, Ptot remains constant",
      C: "Ps decreases, Pdyn increases, Ptot remains constant",
      D: "Ps decreases, Ptot increases, static temperature decreases",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In what way do (l) induced drag and (2) parasite drag alter with increasing speed in straight and level flight",
    choices: {
      A: "(1) increases and (2) increases",
      B: "(1) decreases and (2) increases",
      C: "(1) decreases and (2) decreases",
      D: "(1) increases and (2) decreases",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Lift is generated when",
    choices: {
      A: "a certain mass of air is accelerated in its flow direction",
      B: "the flow direction of a certain mass of air is changed",
      C: "a symmetrical aerofoil is placed in a high velocity air stream at zero angle of attack",
      D: "a certain mass of air is retarded",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The angle of attack of a aerofoil section is defined as the angle between",
    choices: {
      A: "The undisturbed airflow and the mean camberline",
      B: "The local airflow and the mean camberline",
      C: "The local airflow and the chordline",
      D: "The undisturbed airflow and the chordline",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The angle of attack of an aerofoil section is the angle between the",
    choices: {
      A: "bottom surface and the chord line",
      B: "bottom surface and the horizontal",
      C: "bottom surface and the relative airflow",
      D: "chord line and the relative undisturbed airflow",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The difference between IAS and TAS will",
    choices: {
      A: "increase with increasing air density PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "increase with decreasing temperature",
      C: "decrease with decreasing altitude",
      D: "decrease with increasing speed",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The location of the centre of pressure of a positively cambered aerofoil section at increasing angle of attack will",
    choices: {
      A: "shift forward until approaching the critical angle of attack",
      B: "not shift",
      C: "shift aft until approaching the critical angle of attack",
      D: "shift in spanwise direction",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The point, where the single resultant aerodynamic force acts on an aerofoil, is called",
    choices: {
      A: "neutral point",
      B: "centre of gravity",
      C: "centre of pressure",
      D: "aerodynamic centre",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The Sl units of air density (l) and force (ll) are",
    choices: {
      A: "(l) kg/m2; (ll) kg",
      B: "(l) kg/m3; (ll) N",
      C: "N/m3; (ll) N",
      D: "(l) N/kg; (ll) kg",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The unit of measurement for density is",
    choices: {
      A: "kg/m3",
      B: "psi",
      C: "kg/cm2 PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "bar",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is the stagnation point?",
    choices: {
      A: "The intersection of the total aerodynamic force and the chord line",
      B: "The point where the velocity of the relative airflow is reduced to zero",
      C: "The intersection of the thrust vector and the chord line",
      D: "The point, relative to which the sum total of all moments is independent of angle of attack",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which boundary layer, when considering its velocity profile perpendicular to the flow, has the greatest change in velocity close to the surface?",
    choices: {
      A: "No difference",
      B: "Laminar boundary layer",
      C: "Turbulent boundary layer",
      D: "The boundary layer in the transition between turbulent and laminar",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which statement is correct regarding Cl (lift coefficient) and alpha (angle of attack)?",
    choices: {
      A: "For a symmetrical aerofoil section, if the alpha is zero, Cl is zero",
      B: "For a symmetrical aerofoil section, if the alpha is zero, Cl is not zero",
      C: "For an asymmetrical aerofoil section, if the alpha is zero, Cl is zero",
      D: "For an asymmetrical aerofoil section with positive camber, if alpha is greater than zero, Cl iszero",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Dynamic pressure is",
    choices: {
      A: "the total pressure at a point where the moving air stream is bought to rest",
      B: "the amount by which the pressure rises at a point where a moving air stream is brought to rest",
      C: "the pressure due to the weight of the atmosphere in still air",
      D: "the pressure change caused by heating when a moving air stream is brought to rest PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The input connections to an air Speed Indicator are from",
    choices: {
      A: "a static source only",
      B: "a pitot source only",
      C: "both pitot and static sources",
      D: "pitot and static sources and outside air temperature sensor",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The mean camber line of an aerofoil section is",
    choices: {
      A: "a straight line from the leading edge to the trailing edge",
      B: "a line from the leading to the trailing edge equidistant from the upper and lower surfaces",
      C: "C - the profile of the upper surface of an aerofoil section",
      D: "D - an arc of circle from the leading edge to the trailing edge",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A symmetrical aerofoil set at zero angle of attack in an air stream will produce",
    choices: {
      A: "lift and drag",
      B: "no lift and no drag",
      C: "lift but no drag",
      D: "drag but no lift",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "For a cambered aerofoil which of the following statements is correct",
    choices: {
      A: "it will give lift at small negative angles of attack",
      B: "at negative angles of attack it will produce negative lift only",
      C: "it will give lift at positive angles of attack only",
      D: "it will give negative lift at small positive angles of attack",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The dynamic pressure is equal to",
    choices: {
      A: "the density x speed squared",
      B: "half the density x speed",
      C: "half the density x speed squared",
      D: "half the speed x density squared",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "As air flows into a converging section of a venture",
    choices: {
      A: "static pressure decreases, velocity increases, mass flow decreases",
      B: "static pressure increases, velocity decreases, mass flow is constant",
      C: "static pressure decreases, velocity increases, mass flow is constant",
      D: "static pressure decreases, velocity decreases, mass flow decreases",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The calibration for the ASI is based on density",
    choices: {
      A: "at the normal cruising altitude",
      B: "at the tropopause",
      C: "at sea level, ISA temperature",
      D: "at sea level, ISA+15oC",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "To obtain TAS, the EAS must be corrected for",
    choices: {
      A: "relative density only",
      B: "relative density and compressibility",
      C: "position error and compressibility",
      D: "position error and relative density",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The chord line of an aerofoil is",
    choices: {
      A: "a line from wing tip to wing tip PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "a line from the leading edge to trailing edge equidistant from the upper And lower surfaces",
      C: "a straight line joining the centre of curvature of the leading and trailing edges",
      D: "a horizontal line tangential to the wing surface",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The thickness : chord ratio of an aerofoil is",
    choices: {
      A: "the ratio of wing thickness at the root to the thickness at the tip",
      B: "the ratio of the maximum thickness of an aerofoil section to its chord",
      C: "the ratio of the wing span to the mean chord",
      D: "the ratio of the thickness at the quarter chord point to the chord",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The centre of pressure of an aerofoil is",
    choices: {
      A: "the point where the pressure on the upper surface of the wing is lowest",
      B: "the centre of gravity of the aerofoil",
      C: "the point where the pressure on the lower surface of the wing is highest",
      D: "the point on the chord line where the resultant lift force acts",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If the angle of attack of an aerofoil is increased slightly, the C of P will",
    choices: {
      A: "move forward slightly",
      B: "move forward to the leading edge",
      C: "move rearward",
      D: "remain stationary",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A symmetrical aerofoil at zero degree angle of attack will, in level flight produce",
    choices: {
      A: "most of its lift on the lower surface",
      B: "most of its lift on the upper surface",
      C: "the same amount of lift on the upper and lower surfaces PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "zero lift",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Compared to the relative airflow, air on top of a wing",
    choices: {
      A: "pressure increases, velocity decreases",
      B: "pressure increases, velocity increases",
      C: "pressure decreases, velocity decreases",
      D: "pressure decreases, velocity increases",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The effect of changes of aspect ratio on total drag will be",
    choices: {
      A: "greatest at low speed",
      B: "greatest at high speed",
      C: "the same at all speeds",
      D: "no effect at any speed",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The minimum total drag of an aircraft in flight occurs",
    choices: {
      A: "at the stalling speed",
      B: "at the speed here parasite drag and induced drag are equal",
      C: "at the speed where induced drag is least",
      D: "at the speed where parasite drag is least",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Aspect ratio is",
    choices: {
      A: "the ratio of the mean chord to the maximum wing thickness",
      B: "the ratio of the wingspan to the square of the mean chord",
      C: "the ratio of the wingspan to the mean chord",
      D: "the ratio of the wingspan to the wing area",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If the static pressure port iced over while descending from altitude, the ASI would read",
    choices: {
      A: "zero",
      B: "high",
      C: "low",
      D: "correctly",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "During flight with zero angle of attack, the pressure along the upper surface of a wing would be",
    choices: {
      A: "greater than atmospheric pressure",
      B: "equal to atmospheric pressure",
      C: "less than atmospheric pressure",
      D: "always above Mcrit",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Effective angle of attack is the",
    choices: {
      A: "angle between the chord line and the mean direction of a non-uniform disturbed air stream",
      B: "angle between the relative airflow and the chord line",
      C: "angle between the chord line and the fuselage horizontal datum",
      D: "angle between the fuselage horizontal datum and the chord line of the horizontal stabiliser",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The magnitude of a force is",
    choices: {
      A: "its direction of application",
      B: "its largeness of size",
      C: "the units in which it is normally measured",
      D: "its vector",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "In ISA the air temperature is considered to be",
    choices: {
      A: "-56.5 degrees C at 26.090ft PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "-56.5 degrees F at 36.500ft",
      C: "-56.5 degrees C at 36.090ft",
      D: "56.5 degrees C at 36.090ft",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "In ISA pressure decreases",
    choices: {
      A: "at a constant rate as altitude increases",
      B: "at a rate of 1 milibar per 30ft at low altitudes",
      C: "at a rate of 0.5 lb/in per 1000ft above 10000ft altitude",
      D: "at a rateof 30 milibars per ft",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If an aircraft is descending at 500 ft/min from 5000 ft altitude, the rate of pressure increase outside the aircraft is",
    choices: {
      A: "greater than the rate of pressure increase outside an aircraft descending at 500 ft/min from15000 ft to 10000 ft",
      B: "less than the rate of pressure increase outside an aircraft descending at 500 ft/min from15000 ft to 10000 ft",
      C: "equal to the rate of pressure increase outside an aircraft descending at 5000 ft/min at anyaltitude",
      D: "the rate of change will be the same",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "An aerofoil which is producing lift will have",
    choices: {
      A: "upwash ahead of the wing and downwash behind it",
      B: "upwash ahead of the wing but no deflection of the airflow behind it",
      C: "no deflection of the airflow ahead of the wing but downwash behind it",
      D: "no deflection of the airflow either ahead or behind the aerofoil",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The purpose of streamlining is",
    choices: {
      A: "to reduce form drag PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "to reduce induced drag",
      C: "to increase lift",
      D: "to reduce skin friction drag",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Skin friction drag resulting from a laminar boundary layer will be",
    choices: {
      A: "more than from a turbulent boundary layer",
      B: "less than from a turbulent boundary layer",
      C: "the same as from a turbulent boundary layer",
      D: "unmeasurable",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "A moment is",
    choices: {
      A: "the product of a force and the distance through which it acts. The distance in the moment ismerely a leverage and no movement is involved",
      B: "the product of a force and the distance through which it moves",
      C: "the product of the application of a force",
      D: "the vector quantity of a lever",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "At a constant TAS the dynamic pressure",
    choices: {
      A: "will be greater at sea level than at high altitude",
      B: "will be less at sea level than at high altitude",
      C: "will be the same at sea level as at high altitude",
      D: "will be greater at altitude than at sea level",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The position error of an ASI results from",
    choices: {
      A: "mechanical differences in individual instruments",
      B: "the difference in air density from sea level ISA density PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "theeffects of the airflow around the static vent and pitot head",
      D: "the fact that air becomes more compressible at high speeds",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The CAS is the ASI reading correctd for",
    choices: {
      A: "position and instrument error",
      B: "position, instrument and compressibility error",
      C: "compressibility and density error",
      D: "position, instrument, compressibility at high speeds",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Between approximately 8 and 15 degrees angle of attack an aerofoil produces lift due to",
    choices: {
      A: "an increase in the speed of the airflow over the upper surface giving a decrease in pressure anda decrease in the speed of the airflow past th under surface giving a decrease in pressure",
      B: "an increase in the speed of the airflow over the upper surface giving a decrease in pressure anda ecrease in the speed of the airflow past the under surface giving an increase in pressure",
      C: "a decrease in the speed of the airflow over the upper surface giving a decrease in pressure anda decrease in the speed of the airflow past the under surface giving an increase in pressure",
      D: "a decrease in the speed of the airflow over the lower surface giving an increase in pressure anda decrease in pressure over the upper surface causing an increase in velocity",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The stalling angle of an aerofoil is approximately",
    choices: {
      A: "4o",
      B: "-2o",
      C: "16o",
      D: "10o",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "With a decrease in angle of attack",
    choices: {
      A: "the stagnation point moves forward PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "the separation point moves forward",
      C: "form drag will increase",
      D: "induced drag will increase",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "To convert knots into miles per hour",
    choices: {
      A: "multiply the knots by 0.87",
      B: "divide the knots by 0.87",
      C: "multiply the knots by 0.87 and divie by the relative density",
      D: "divide the knots by 8.7",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The aerodynamic centre is the point on the chord line where",
    choices: {
      A: "drag acts",
      B: "the sum of all aerodynamic force act",
      C: "the geometric centre of the wing is located",
      D: "the pitching moment remains constant throughout changes in angle of attack within the normalrange",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The drag of an aircraft will",
    choices: {
      A: "increase with increase in air temperature",
      B: "increase with decrease in air density",
      C: "increase with increase in air pressure",
      D: "decrease with an increase in stagnation pressure",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Vortex wake behind large aircraft",
    choices: {
      A: "stays at ground level",
      B: "gradually descends to ground level PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "gradually descends to a lower level",
      D: "gradually ascends to a higher level",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The density of air may be measured in",
    choices: {
      A: "kg/square metre",
      B: "millibars",
      C: "kg/cubic metre",
      D: "Newton's per cubic metre",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Density of the atmosphere will",
    choices: {
      A: "increase with rising humidity",
      B: "decrease with rising humidity",
      C: "remain unaffected by changes in humidity",
      D: "decrease with reduced humidity",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Vy is defined as",
    choices: {
      A: "speed for best rate of descent",
      B: "speed for best angle of climb",
      C: "speed for best rate of climb",
      D: "maximum speed which should be used in a climb",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "If air is assumed to be incompressible, this means",
    choices: {
      A: "there will be no change in pressure when the speed of the airflow is changed",
      B: "there will be no change of density due to change of pressure",
      C: "the density will only change with speed at supersonic speed",
      D: "pressure changes will only occur at very high speeds PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A symmetrical aerofoil section of a wing is set at zero AOA will produce",
    choices: {
      A: "most of the lift on the upper surface",
      B: "most of the lift on the lower surface",
      C: "depends on the aircraft's speed",
      D: "zero lift",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A line from the centre of curvature of the leading edge to the trailing edge, equidistant from the top and bottom wing surface is",
    choices: {
      A: "camber line",
      B: "upper camber line",
      C: "mean chord",
      D: "mean aerodynamic chord",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which of the following creates lift?",
    choices: {
      A: "a slightly cambered aerofoil",
      B: "an aerofoil in a high speed flow",
      C: "air accelerated upwards",
      D: "air accelerated downwards",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is the Sl unit for density?",
    choices: {
      A: "mV2",
      B: "kg/cm2",
      C: "kg-m",
      D: "kg/m3",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Wing tip vortices are caused by unequal pressure distribution on the wing which results in airflow from",
    choices: {
      A: "bottom to top around the trailing edge",
      B: "top to bottom around the trailing edge",
      C: "bottom to top around the wingtip",
      D: "top to bottom around the wingtip",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "When considering the properties of a laminar an turbulent boundary layer, which of the following statements is correct?",
    choices: {
      A: "friction drag is the same",
      B: "friction drag higher in laminar",
      C: "friction drag higher in turbulent",
      D: "separation point is most forward with a turbulent layer",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Where does the airflow separation begin?",
    choices: {
      A: "upper surface/towards the leading edge",
      B: "lower surface/towards the trailing edge",
      C: "upper surface/towards the trailing edge",
      D: "lower surface/towards the leading edge",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which of the following is true?",
    choices: {
      A: "a turbulent boundary layer has more kinetic energy",
      B: "a turbulent boundary layer is thinner",
      C: "less skin friction is generated by a turbulent layer",
      D: "a laminar flow boundary layer is less likely to separate",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which of the following is the equation for power?",
    choices: {
      A: "N/m PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "NM/s",
      C: "Pa/s2",
      D: "Kg/m/s2",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "When considering the aerodynamic forces acting on an aerofoil section",
    choices: {
      A: "lift and drag increase linearly with an increase in angle of attack",
      B: "lift and drag at normal to each other only at one angle of attack",
      C: "lift and drag increase exponentially with an increase in angle of attack",
      D: "lift increases linearly and drag increases exponentially with an increase in angle ofattack",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Parasite drag is linearly proportional to",
    choices: {
      A: "speed",
      B: "angle of attack",
      C: "speed",
      D: "weight",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The aerodynamic centre is",
    choices: {
      A: "the point where the CG meets the lateral axis",
      B: "the point where all changes in the magnitude of the lift force effectively take place",
      C: "situated at about 50% chord",
      D: "always to the rear of the neutral point",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In the equation of continuity relating to low velocity air, what is the effect on density with a change in area?",
    choices: {
      A: "area increases/density decreases",
      B: "area decreases/density decreases PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "area increases/density increases",
      D: "area increases or decreases/no significant change in density",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "On a cambered airfoil, as the angle of attack increases from zero to about ten degrees, the entre of Pressure",
    choices: {
      A: "Moves back and then forward",
      B: "Remains in the same place",
      C: "Moves forward and then remains in the same place",
      D: "Moves back and then remains in the same place",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The Robinson R22 is equipped with",
    choices: {
      A: "Relatively small bias springs",
      B: "Hydraulic flying controls",
      C: "Relatively large bias springs",
      D: "Balance weights to overcome Centrifugal Turning Moments on the main rotor",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Rotor blades are connected to the rotor head by a allowing the blades to",
    choices: {
      A: "Dragging hinge; flap up and down",
      B: "Flapping hinge; twist",
      C: "Feathering hinge; twist",
      D: "Feathering hinge; move in the plane of rotation",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "As streamline flow approaches an aerofoil it pauses at the stagnation point. What happens to static pressure at this point?",
    choices: {
      A: "It drops",
      B: "It reaches a minimum value",
      C: "It rises",
      D: "It reaches a maximum value PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "To achieve an even increase in rotor thrust across the disc the blade pitch angle must be increased",
    choices: {
      A: "cyclicly",
      B: "collectively",
      C: "one by one",
      D: "at the front of the disc",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "To enable the blade to feather the blade must be able to rotate around the",
    choices: {
      A: "rotor head",
      B: "Span-wise axis of the blade",
      C: "Chord",
      D: "Dragging hinge",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "When hovering close to the ground, the downwash creates under the helicopter",
    choices: {
      A: "a convergent duct",
      B: "a divergent duct",
      C: "a drop in pressure",
      D: "a vacuum",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The pitch operating arms are linked to at the",
    choices: {
      A: "pitch horns; non rotating swash plate",
      B: "the control linkages; rotating swash plate",
      C: "pitch horns; blade root",
      D: "the swash plate; blade root",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "In which direction does rotor thrust act?",
    choices: {
      A: "Along the plane of rotation",
      B: "Along the axis of rotation",
      C: "Perpendicular to the RAF",
      D: "Perpendicular to the chord",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What can reduce the positive effects of ground cushion?",
    choices: {
      A: "Zero wind",
      B: "Hovering too low",
      C: "A smooth tarmac surface",
      D: "Long grass",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "How does recirculation affect the angle of attack?",
    choices: {
      A: "It adds to induced flow, increasing the angle of attack",
      B: "It opposes inducedflow, increasing the angle of attack",
      C: "It adds to induced flow, decreasing the angle of attack",
      D: "It opposes induced flow, decreasing the angle of attack",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The hughes NOTAR balances fuselage torque reaction by",
    choices: {
      A: "Using a cambered tail fin",
      B: "Hydraulic assistance",
      C: "Low pressure air ducts",
      D: "High pressure air ducts",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "What is the major difference between the operation of the main rotor and the tail rotor?",
    choices: {
      A: "The tail rotor has no cyclic pitch control PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "The main rotor has no cyclic pitch control",
      C: "The tail rotor has no collctive pitch control",
      D: "The tail rotor is always slower that the main rotor",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "When hovering total rotor thrust is resolved into a vertical component to balance and a horizontal component to balance",
    choices: {
      A: "weight; the wind",
      B: "weight; tail rotor drift",
      C: "tail rotor roll; tail rotor drift",
      D: "tail rotor roll; the wind",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Rotor blades are normally built with to provide",
    choices: {
      A: "an extruded D spar; sufficient twisting",
      B: "an extruded C spar; torsional stiffness",
      C: "a strong trailing edge; rigidity; torsional",
      D: "an extruded D spar; stiffness",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Tapered rotor blades have a shorter at the blade",
    choices: {
      A: "span; root",
      B: "chord; root",
      C: "chord; tip",
      D: "span; tip",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Why do rotor blades lead as the disc cones upwards?",
    choices: {
      A: "Hookes Joint Effect",
      B: "Coriolis Effect",
      C: "Less rotor drag PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "The blades do not lead as the disc cones upwards",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If the rotor disc is tilted to the left, what happens to the blade at the front of the disc?",
    choices: {
      A: "It accelerates because of the Coriolis Effect",
      B: "It accelerates because of Hookes Joint Coriolis Effect",
      C: "It decelerates because of the Coriolis Effect",
      D: "It decelerates because of Hookes Joint Effect",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The Fenestron tail has a",
    choices: {
      A: "Shrouded tail rotor",
      B: "Flat fin",
      C: "Traditional tail rotor",
      D: "Puffer jets",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "What happens to the coning angle if rotor rpm decreases and collective pitch is constant?",
    choices: {
      A: "Nothing",
      B: "It increases",
      C: "It decreases",
      D: "It is balanced by an incease in centrifugal force",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If a helicopter is in a free air hover with 9o of collective pitch applied and the swash plate is tilted to the left by 4o, what will be the pitch angle of the blade at the rear of the disc?",
    choices: {
      A: "5o",
      B: "9o",
      C: "14o",
      D: "4o",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which of the following can be used to overcome Centrifugal Turning Moments? 1. Bias springs 2. Balance weights 3. Trim tabs 4. Hydraulic assistance",
    choices: {
      A: "i, ii and iii",
      B: "I, iii and iv",
      C: "i, ii and iv",
      D: "All of the above",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If the rotor blades turn in a clockwise direction during normal flight, which way does fuselage torque reaction occur?",
    choices: {
      A: "Clockwise",
      B: "Right",
      C: "Anti-clockwise",
      D: "There is no reaction during power on flight",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A conventional helicopter will hover with the undercarriage on the low because of",
    choices: {
      A: "retreating side; tail rotor drift",
      B: "retreating side; tail rotor roll",
      C: "advancing side; tail rotor drift",
      D: "advancing side; tail rotor roll",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A rotor blade will always reah the low point after it experienced the maximum change in pitch angle",
    choices: {
      A: "45o",
      B: "30o",
      C: "60o",
      D: "90o",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which direction does the swash plate move when the collective lever is raised?",
    choices: {
      A: "Down",
      B: "Left",
      C: "Up",
      D: "Right",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Rigid rotor heads have to absorb stress with the rotor excessively",
    choices: {
      A: "dragging hinges; flap",
      B: "pillow blocks; flap",
      C: "pillow blocks; feather",
      D: "dragging hinges; feather",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Without hydraulic assistance, how much pressure is required to control a Fenestron tail rotor?",
    choices: {
      A: "6 lbs",
      B: "36 lbs",
      C: "66 lbs",
      D: "96 lbs",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "At what speeds are the majority of horizontal stabilisers designed to be effective?",
    choices: {
      A: "In the cruise",
      B: "At low speed",
      C: "At high speed",
      D: "In the hover",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "How does rotor downwash affect a helicopter with a tail boom mounted horizontal stabiliser in a free air hover?",
    choices: {
      A: "It will pitch nose down PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "It will descend",
      C: "It will pitch nose up",
      D: "The downwash will not affect the stabiliser",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "How is the hover attitude affected by tilting the main rotor shaft forwards?",
    choices: {
      A: "Hoer with a level attitude",
      B: "Hover with a pronounced nose up attitude",
      C: "Hover with a pronounced nose down attitude",
      D: "Hover with a roll towards the advancing blade",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "When hovering into a 15kt headwind, the induced flow is",
    choices: {
      A: "Removed",
      B: "Reduced",
      C: "Unaffected",
      D: "Increased",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which of the following must increase as a helicopter accelerates in level flight? 1. Total rotor thrust 2. Parasite drag 3. Horizontal component of total rotor thrust 4. Vertical component of total rotor thrust",
    choices: {
      A: "i, iii and iv",
      B: "i, ii and iv",
      C: "i, ii and iii",
      D: "All of the above",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What happens as a helicopter accelerates through 12 kt?",
    choices: {
      A: "It descends unless corrected",
      B: "It passes through tail rotor drift",
      C: "It passes through translational lift",
      D: "It yaws towards the retreating blade",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "As a helicopter accelerates the attitude becomes",
    choices: {
      A: "Level",
      B: "Nose up",
      C: "Nose down",
      D: "Rolls towards the advancing side",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "When a helicopter is in an ideal free air hover the TRT is acting vertically and is equal and opposite to",
    choices: {
      A: "Weight and parasite drag",
      B: "Weight and rotor drag",
      C: "Parasite drag and rotor drag",
      D: "Engine torque and rotor drag",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "As a helicopter accelerates the benefits of are outweighed by the increased",
    choices: {
      A: "translational lift; 90o component of horizontal airflow",
      B: "translational lift; 60o component of horizontal airflow",
      C: "90o component of horizontal airflow; translational lift",
      D: "increased induced flow; horizontal airflow",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "During acceleration the component of total rotor thrust must be than parasite drag",
    choices: {
      A: "Horizontal; less",
      B: "Vertical; less PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "Horizontal; greater",
      D: "Vertical; greater",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The Delta Three Hinge has what?",
    choices: {
      A: "A flapping hinge mounted at right angles to the span of the rotor blades",
      B: "A flapping hinge set at an angle forward of the leading edge",
      C: "A feathering hinge set at right angles to the leading edge",
      D: "A dragging hinge set at an angle forward of the leading edge",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In order to counteract airflow reversal the retreating blade must have",
    choices: {
      A: "An angle of attack less than the advancing blade",
      B: "An angle of attack equal to the advancing blade",
      C: "A velocity greater than the advancing blade",
      D: "A large angle of attack on the outboard section",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If tail rotor blades are not allowed to flap the tail rotor will suffer from what?",
    choices: {
      A: "Inflow roll",
      B: "Flapback",
      C: "Dissymmetry of rotor thrust",
      D: "Airflow reversal",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "As a helicopter is flared the increases because decreases",
    choices: {
      A: "Rrpm; rotor drag",
      B: "Rrpm; angle of attack",
      C: "rotor drag; rotor thrust",
      D: "rotor drag; Nr PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "In a free air hover how does Vi vary along the blade?",
    choices: {
      A: "It is greater at the tip because of tip vortices",
      B: "It is greater at the root because of the demarcation vortex",
      C: "It is less at the tip because oftip vortices",
      D: "it is less at the tip because of recirculation",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If a helicopter is positioned into wind and suffers from blade sailing where will the blade reach a maximum height?",
    choices: {
      A: "At the back of the disc",
      B: "Perpendicular to the airflow",
      C: "On the advancing side",
      D: "At the front of the disc",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "As a rotor blade passes the back of the disc it is subjected to velocity and it will flap",
    choices: {
      A: "an increasing; up",
      B: "an increasing; down",
      C: "a decreasing; down",
      D: "a decreasing; up",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is the relationship between flapback and forward speed?",
    choices: {
      A: "Flapback increases with forward speed",
      B: "Flapback decreases with forward speed",
      C: "There is no relationship",
      D: "Flapback is subject to changes in TAS",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which of the following conditions need to be met for vortex ring to exist? 1. Induced flow passing down through the disc 2. Low IAS 3. High all up weight 4. Moderate or high rate of descent",
    choices: {
      A: "i, ii and iii",
      B: "ii, iii and iv",
      C: "i, ii and iv",
      D: "All of the above",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "During a flare what acts against Vi?",
    choices: {
      A: "The 90o component",
      B: "The 60o component",
      C: "TRT",
      D: "Recirculation",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Inflow roll is caused by",
    choices: {
      A: "The reduction of Vi differing across the disc",
      B: "The reduction of Vi being greater at the front of the disc",
      C: "The reduction of induced flow being uniform",
      D: "The increase of induced flow differing across the disc",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The fuselage rotates around the point where the s acting and is known as",
    choices: {
      A: "TRT; pendulosity",
      B: "vertical component of TRT; flapback",
      C: "horizontal components of TRT; pendulosity",
      D: "rotor drag; flapback",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The risk causing damage by blade sailing can be reduced by",
    choices: {
      A: "Accelerating the rotors slower than normal",
      B: "Positioning the helicopter downwind",
      C: "Accelerating the rotors faster than normal",
      D: "Positioning the helicopter into wind",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The blade velocity at the midway point on the retreating side is",
    choices: {
      A: "Vr + Vw",
      B: "Vw , Vr",
      C: "Vr , Vw",
      D: "Vi + Vr",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Tail rotors with more than 2 blades are likely to use",
    choices: {
      A: "An offset control junction ahead of the leading edge",
      B: "A delta three hinge",
      C: "An offset pitch control rod at the feathering hinge",
      D: "A feathering hinge mounted on the control rod",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is the speed range for normal rotor tips?",
    choices: {
      A: "390 - 350 ft per second",
      B: "660 - 680 ft per second",
      C: "660 - 680 kt",
      D: "45 - 490 kt",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which part of the tail rotor is least affected by the main rotor?",
    choices: {
      A: "The bottom PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "The top",
      C: "The advancing side",
      D: "The retreating side",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Airflow reversal causes greater",
    choices: {
      A: "Tuck under",
      B: "Inflow roll",
      C: "Flapback",
      D: "Forward speed",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What happens to translational lift as a helicopter decelerates?",
    choices: {
      A: "It increases",
      B: "It remains the same",
      C: "It reduces",
      D: "It adds to forward speed",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If the collective lever is raised when a helicopter is in vortex ring what will happen?",
    choices: {
      A: "The rate of descent will decrease",
      B: "The helicopter will recover",
      C: "The stall will lessen",
      D: "The stall will deepen",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "During autorotation the rate of descent creates the inflow angle between the and the",
    choices: {
      A: "RAF; plane of rotation",
      B: "plane of rotation; induced flow",
      C: "RAF; axis of rotation PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "plane of rotation; axis of rotation",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "In the hover, a helicopter is dynamically and statically in yaw",
    choices: {
      A: "stable; stable",
      B: "neutral; stable",
      C: "unstable; stable",
      D: "unstable; unstable",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In order to autorotate for range the helicopter must be flown at",
    choices: {
      A: "The fastest speed",
      B: "The slowest speed",
      C: "The steepest angle",
      D: "The shallowest angle",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is rotor profile power?",
    choices: {
      A: "The power related to variation of rpm for a given pitch angle and coefficient of drag",
      B: "The power related to variation of pitch for a given rpm and coefficient of drag",
      C: "The power related to variation of drag for a given pitch angle and rpm",
      D: "The power related to variation of rpm for a given pitch angle and coefficient of lift",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "On a fully articulated rotor head what makes u the dragging and flapping hinges?",
    choices: {
      A: "Pillow blocks",
      B: "Trunnions mounted in bearings",
      C: "Trunnions mounted on pillow blocks",
      D: "Pillow blocks mounted in bearings",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What causes the rotors to turn during autorotation?",
    choices: {
      A: "Rotor thrust",
      B: "Autorotative force",
      C: "Engine torque",
      D: "Momentum",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "As a helicopter accelerates away from a zero speed autorotation what will happen to the rate of descent?",
    choices: {
      A: "It will increase",
      B: "It will decrease",
      C: "It will decrease initially, then increase",
      D: "It will increase initially, then decrease",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What is power available?",
    choices: {
      A: "A measure of rotor efficiency and engine power",
      B: "A measure of the power available to drive to rotor shaft and produce lift",
      C: "A measure of the power available to produce lift",
      D: "A measure of the power available to drive to the rotor shaft",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "How is the inflow angle affected if the disc is tilted in autorotation?",
    choices: {
      A: "It is reduced",
      B: "It is increased",
      C: "It is not affected by disc tilt",
      D: "It is only affected at the front of the disc",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which rotor system is most effective in terms of control power?",
    choices: {
      A: "The fully articulated head PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "The teetering head",
      C: "The semi-rigid head",
      D: "The rigid head",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The speed in piston engine helicopters is than in turbine helicopters",
    choices: {
      A: "endurance; lower",
      B: "range; lower",
      C: "maximum; higher",
      D: "range; higher",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Where is a stabiliser bar mounted?",
    choices: {
      A: "On the tail boom",
      B: "On the rotor shaft parallel to the main rotor blades",
      C: "On the rotor mast perpendicular to the main rotor blades",
      D: "On the tail rotor",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What must autorotative force balance to maintain rrpm?",
    choices: {
      A: "Rotor drag",
      B: "Friction caused by the gearbox",
      C: "Friction caused by the tail rotor shaft and gearbox",
      D: "All of the above",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Once established in autorotation the rate of descent airflow is reduced by",
    choices: {
      A: "Rotor drag",
      B: "Rotor thrust",
      C: "Horizontal airflow through the disc PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "Collective pitch reduction",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "If an object is statically unstable it will",
    choices: {
      A: "Move in the direction of the displacement",
      B: "Stop moving",
      C: "Return to the original position",
      D: "Oscillate",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If the disc of a teetering head is tilted what will the blades do?",
    choices: {
      A: "Tilt by flapping",
      B: "Tilt by feathering",
      C: "Remain at the preset coning angle",
      D: "Cone upwards",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What are modern piston aero-engines constructed from?",
    choices: {
      A: "Pressed steel",
      B: "Stainless steel",
      C: "Dense alloys",
      D: "Lightweight alloys",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Power is",
    choices: {
      A: "KV2",
      B: "KV3",
      C: "KVV",
      D: "V/CD",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "It is unwise to operate a helicopter at low speed between and ft above the ground",
    choices: {
      A: "15; 1000",
      B: "65; 400",
      C: "15; 400",
      D: "65; 1000",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "During autorotation with forward speed what cuases the inflow angle to reduce?",
    choices: {
      A: "Horizontal airflow and disc tilt",
      B: "Vertical airflow and disc tilt",
      C: "Horizontal airflow and rotor thrust",
      D: "Vertical airflow and rotor thrust",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which of the following are rate of descent requirements in autorotation? 1. Parasite drag 2. Rotor drag 3. Rotor thrust 4. Autorotative force",
    choices: {
      A: "i, ii and iii",
      B: "i, iii and iv",
      C: "i, ii and iv",
      D: "All of the above",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "As a helicopter then power reduces",
    choices: {
      A: "accelerates; induced",
      B: "decelerates; induced",
      C: "accelerates; rotor profile",
      D: "decelerates; parasite",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Total power required is",
    choices: {
      A: "The sum of rotor profile power and induced power",
      B: "The sum of parasite power and induced power",
      C: "The sum of rotor profile power and parasite power",
      D: "The sum of rotor profile power, induced power and parasite power",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Following an engine failure the is removed and the turns the blades",
    choices: {
      A: "engine torque; airflow",
      B: "airflow; engine torque",
      C: "engine torque; momentum",
      D: "airflow; momentum",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "During a 30o banked turn the apparent increase in mass is",
    choices: {
      A: "100%",
      B: "60%",
      C: "30%",
      D: "15%",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The axis about which a mai rotor blade is able to change pitch angle is known as",
    choices: {
      A: "The normal axis",
      B: "The feathering axis",
      C: "The axis of rotation",
      D: "The lateral axis",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "An aerofoil produces lift by",
    choices: {
      A: "Airflow velocity decreasing over the upper surface decreasing the pressure and increasing across PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "Airflow velocity increasing over the upper surface decreasing the pressure and decreasingacross the lower surface increasing the pressure",
      C: "Airflow velocity decreasing over the upper surface increasing the pressure and increasing acrossthe lower surface decreasing the pressure",
      D: "Airflow velocity increasing over the upper surface increasing the pressure and decreasingacross the lower surface decreasing the pressure",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The lift/drag ratio is",
    choices: {
      A: "At a maximum where the lift/drag curve meets the origin",
      B: "A minimum at thepeak of the lift/drag curve",
      C: "A maximum at the peak of the lift/drag curve",
      D: "At a minimum where the lift/drag curve mets the origin",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "When a rotor blade flaps u it will accelerate. Why does this happen?",
    choices: {
      A: "Due to an increase in engine torque",
      B: "As a result of an increase in drag",
      C: "As a result of an increase in rotor thrust",
      D: "Due to the conservation of angular momentum",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "From displacement a divergent oscillation is",
    choices: {
      A: "Dynamically stable",
      B: "Neutrally stable",
      C: "Dynamically neutral",
      D: "Dynamically unstable",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The phenomenon of inflow roll will",
    choices: {
      A: "Cause a helicopter to roll towards the advancing blade PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "Cause an increase in flapback with an increase of forward speed",
      C: "Cause a helicopter to roll towards the retreating blade",
      D: "Cause a decrease in flapback with an increase of forward speed",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "In an established steady vertical climb from a hover where parasite drag is negligible",
    choices: {
      A: "TRT is greater than weight and TR Drag is the same as at the hover",
      B: "TRT balances weight but TR Drag is greater than at the hover",
      C: "TRT is greater than weight and TR Drag is greater than at the hover",
      D: "TRT balances weight and TR Drag is the same as at the hover",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Blade loading of a helicopter can be calculated by",
    choices: {
      A: "The AUW of the helicopter divided by the disc area",
      B: "The disc area divided by the AUW of the helicopter",
      C: "The AUW of the helicopter divided by the total area of all the blades",
      D: "The total area of all the blades divided by the AUW of the helicopter",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The coning angle is determined by",
    choices: {
      A: "The drag and lift produced by the blade",
      B: "The rotor RPM and the centrifugal force on the blade",
      C: "Rotor thrust parallel to the feathering axis and drag",
      D: "Rotor thrust and centrifugal force",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The maximum rate of climb speed for a piston engine helicopter is",
    choices: {
      A: "The lowest point on the power required curve",
      B: "Where the power required curve meets the power available line",
      C: "That point where a line from the origin makes a tangent with the power available curve PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "Range speed minus endurance speed in ft per min",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A helicopter is most likely to enter a state of vortex ring when at",
    choices: {
      A: "Partial power, cruising airspeed and RoD of less than 200 fpm",
      B: "Partial power, low airspeed and RoD greater than 300 fpm",
      C: "Partial power, zero airspeed and RoD less than 200 fpm",
      D: "Zero power, low to mid-range speed and RoD greater than 1000 fpm",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Pitching is a rotation about",
    choices: {
      A: "The normal axis of the helicopter",
      B: "The longitudinal axis of the helicopter",
      C: "The lateral axis of the helicopter",
      D: "The axis of rotation",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "So that the rotor maintains symmetry of rotor thrust",
    choices: {
      A: "The retreating blade flaps down, automatically increasing the A of A",
      B: "The advancing blade flaps up, thereby maintaining the A of A",
      C: "The retreating blade flaps up, thereby maintaining the A of A",
      D: "The advancing blade flaps down, automatically ecreasing the A of A",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "During autorotation, the tail rotor normally provides thrust using",
    choices: {
      A: "A positive pitch angle",
      B: "A neutral pitch angle",
      C: "A negative pitch angle",
      D: "Does not provide any thrust",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Consider the rotor blade of a helicopter with blade pitch applied, Centrifugal Turning Moments will",
    choices: {
      A: "Reduce the pitch angle of the rotor blade about the feathering axis",
      B: "Increase the pitch angle of the rotor blade about the feathering axis",
      C: "Reduce the pitch angle of the rotor blade about the tip path plane",
      D: "Increase the pitch angle of the rotor blade about the tip path plane",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "When considering the effect of overpitching, the",
    choices: {
      A: "RRpm decreases and the coning angle increases",
      B: "RRpm increases and the coning angl increases",
      C: "RRpm decreases and the coning angle decreases",
      D: "RRpm increases and the coning angle remains constant",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "When a helicopter is in forward flight, the thrust produced by the advancing side of a tail rotor system",
    choices: {
      A: "Can be kept constant due to flapping of the blade on a delta 3 hinge",
      B: "Decreases due to the upward movement of the blade increasing the AoA",
      C: "Increases due to the downward movement of the blade decreasig the AoA",
      D: "Is kept constant due to the balancing effect of the retreating blade on an alpha 3 hinge",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The theory of conservation of angular momentum influences the position of a blade on its lead-lag hinge with changes in the coning angle. Assuming a constant RRpm which of the following statements is correct",
    choices: {
      A: "Flapping up moves the blade forward as it speeds up in the POR",
      B: "Flapping down moves the blade forward as it slows down in the POR",
      C: "Flapping up moves the blade rearwards as it slows down in the POR",
      D: "Flapping down moves the blade rearwards as it speeds up in the POR",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "When entering aujtorotation any delay in lowering the collective lever",
    choices: {
      A: "Causes the RRpm to speed up and the coning angle to increase PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "Increases the coning angle and causes a rapid decrease in RRpm",
      C: "Reduces the pitch angle and causes a rapid increase in RRpm",
      D: "Causes the RRpm to remain steady but decreases the pitch angle",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Rotor profile power is that part of the power required to",
    choices: {
      A: "The power required to maintain TRT in response to changes in pitch angle",
      B: "The power required to maintain RRpm at a zero thrust condition and overcome the drag ofancilliary equipment, drive shafts and tail rotor",
      C: "The power required to overcome the parasite drag associated with the rotor blades",
      D: "The power required to overcome TRT in response to changes in pitch angle",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A helicopter has 120 horsepower available at a mass of 2750 lbs. What rate of climb could be expected?",
    choices: {
      A: "1250 feet per min",
      B: "980 feet per min",
      C: "1740 feet per min",
      D: "1440 feet per min",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "When a helicopter is hovering within ground effect",
    choices: {
      A: "The requirement for induced power is increased",
      B: "The requirement for rotor profile power is reduced",
      C: "The requirement for induced power is reduced",
      D: "The required total power remains the same",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "With reference to translational lift, which of the following statements is true?",
    choices: {
      A: "Translational lift with the associated reduction in induced flow and inflow angle becomeseffective at about 12 knots PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "Translational lift with the associated increase in induced flow and reduction in inflow anglebecomes effective at about 18 knots",
      C: "Translational lift with the associated reduction in induced flow and increase in inflowangle becomes effective at about 12 knots",
      D: "Translational lift with the associated increase in induced flow and increase in inflowangle becomes effective at about 18 knots",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The maximum angle of bank in a level turn will be achieved at what speed",
    choices: {
      A: "At the speed for max range",
      B: "Min level speed",
      C: "The bank angle remains constant at all speeds",
      D: "At max rate of climb speed",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "A helicopter takes off and transitions from thehoer into level forward flight. During this phase the",
    choices: {
      A: "Power requirement inceases but TRT decreases",
      B: "The TRT increases whilst TR Drag decreases",
      C: "The TRT and the power requirement increases",
      D: "The TRT increases and the TR Drag remains the same",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "To enable the rotor blades to rotate freely during an autorotation",
    choices: {
      A: "An intermediate gearbox is fitted to transfer the drive to the main rotor",
      B: "A clutch is fitted between the engine and rotor drive unit",
      C: "A semi-automatic gearbox is fitted between engine and rotor",
      D: "A free-wheeling unit is fitted between the engine and the rotor",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "For a single-engined helicopter flying at low forward airspeeds, what altitude band should be avoided to ensure the helicopter can land sfety in the event of an engine failure",
    choices: {
      A: "In the band 15 - 200 feet PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "In the band 15 - 400 metres",
      C: "In the band 15 - 400 feet",
      D: "In the band 15 - 200 metres",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If when flying a helicopter a pilot accidentally finds themselves in a zero or negative G situation, the correct recovery technique is to",
    choices: {
      A: "Apply rearward cyclic to reload the rotor into positive G situation, then use cyclic tocounteract the roll",
      B: "Apply forward cyclic to remove the load on the rotor",
      C: "Apply left cyclic to counteract the roll, whilst raising collective",
      D: "Raise collective",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "What effect does a headwind have on the rate of climb and the angle of climb of a helicopter",
    choices: {
      A: "rate of climb - increases; angle of climb - steeper",
      B: "rate of climb - remains steady; angle of climb - steeper",
      C: "rate of climb - reduces; angle of climb - remains the same",
      D: "rate of climb - increases; angle of climb - shallower",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The technical term washout can be described as",
    choices: {
      A: "A reduction in blade angle towards the tip to reduce the changes of Retreating Blade Stall (RBS)",
      B: "A reduction in blade angle towards the tip to delay the onset of compressibility",
      C: "A reduction in blade angle towards the tip to give a more equal distribution of rotor thrustalong the span",
      D: "An increase in blade angle towards the tip to delay the onset of compressibility",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The condition of dynami rollover is",
    choices: {
      A: "A rate of roll which cannot be counteracted with full up collective PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "A rate of roll, where the rolling motion with wheels/skid in ground contact cannot be stoppedwith cyclic",
      C: "The rate of angular momentum about the wheel/skids is greater than the power available",
      D: "Is influenced by inflow roll and cannot be stopped by increasing RRpm",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which of the following statements is correct about recirculation?",
    choices: {
      A: "It reduces the induced flow, increasing the AoA and TRT",
      B: "It increases the induced flow, increases the AoA and TRT",
      C: "It reduces the induced flow, whilst AoA and TRT remain constant",
      D: "It increases the induced flow, decreasing the AoA and TRT",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Raising the collective lever in autorotation resulting in a large pitch change will cause",
    choices: {
      A: "The blade beginning to stall at the blade tip",
      B: "The blade beginning to stall near the root",
      C: "The blade beginning to stall along the length of the blade",
      D: "The blade will not stall due to the steady RoD flow through the disc",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "Which direction will a helicopter yaw if it suffers from a tail rotor control failure at a high pitch setting during the cruise?",
    choices: {
      A: "The same direction as the main rotor",
      B: "The opposite direction to the main rotor",
      C: "Always to the left",
      D: "Always to the right",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Phase lag can be described as",
    choices: {
      A: "A gyroscopic effect on the main rotor due to a collective pitch change",
      B: "A vertical movement of the blades to a max/min position 90o further on in the plane of rotation PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "Vertical movement of the blade in response to changing aerodynamic loads 90o before maximumcollective pitch change",
      D: "Horizontal movement of the blade in the plane of rotation in response to a cyclic input",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "The retreating blade experiences airflow reversal in forward flight. This effect can be reduced by",
    choices: {
      A: "Giving the retreating blade a lower AoA thereby reducing the inflow angle",
      B: "Designing the rotor system to work at a lower RRpm",
      C: "Giving the rotor blade an aerodynamic section starting further away from rotor hub",
      D: "Giving the rotor blade a more efficient aerodynamic section inboard which repositions thereverse flow area over the centre of the rotor disc",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Which statement most accurately describes the flare?",
    choices: {
      A: "Tot Reaction moves nearer the axis of rotation, increase in RRpm, thrust reversal, increase inTRT and a reduction in rotor drag",
      B: "Tot Reaction moves away from the axis of rotation, decrease in RRpm, thrust reversal, decreasein TRT and a reduction in rotor drag",
      C: "Tot Reaction moves nearer the axis of rotation, decrease in RRpm, increase in parasite drag",
      D: "Tot Reaction moves away from the axis of rotation, increase in RRpm, decrease in parasite dragand a decrease in TRT",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "What parameters are most likely to give rise to blade sailing",
    choices: {
      A: "Three bladed rotor, high RRpm and low wind speed",
      B: "Two bladed rotor, low RRpm and gusting wind",
      C: "Three bladed rotor, low RRpm and gusting wind",
      D: "Two bladed rotor, high RRpm and low wind speed",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If the collective lever is held at a constant position during an autorotation from altitude, what is likely to happen",
    choices: {
      A: "An increase in RRpm due to an increase in temperature PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "An increase in RRpm due to an increase in density",
      C: "A decrease in RRpm due to an increase in density",
      D: "A decrease in RRpm due to an increase in temperature",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "A helicopter in the hover is",
    choices: {
      A: "Statically unstable and dynamically stable in the normal axis",
      B: "Statically neutral and dynamically stable in the normal axis",
      C: "Statically and dynamically stable in the normal axis",
      D: "Statically stable and dynamically unstable in the normal axis",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "The most common mechanical cause of ground resonance is",
    choices: {
      A: "Sidways vector during landing",
      B: "Faulty drag dampers creating an imbalance in the rotor head",
      C: "Faulty flapping hinges inhibiting the natural conservation of angular momentum response",
      D: "Faulty feathering hinges increasing the centrifugal turning moment of a blade",
    },
    correct: "B",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "Blade counter-weights are fitted to the rotor system so that",
    choices: {
      A: "The level of aerodynamic pitching can be reduced",
      B: "The feathering moment can be increased in the POR",
      C: "The feathering moment due to CTM is reduced",
      D: "They provide damping reducing individual blade vibration",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "If a helicopter encounters a microburst during an approach to land, a drop in windspeed could place the helicopter in",
    choices: {
      A: "Retreating blade stall conditions",
      B: "A sudden climb",
      C: "Vortex ring conditions PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "Overpitching regime",
    },
    correct: "C",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "When flying in an area of strong wind or turbulence, a pilot should",
    choices: {
      A: "Keep the collective within a set range to avoid an over-torque",
      B: "Keep the cyclic within a set range to avoid an over-speed",
      C: "Keep the collectie within a set range to avoid an overspeed",
      D: "Keep the yaw pedals within a set range to avoid over-torque",
    },
    correct: "A",
    ref: "CPL H AND ATPL H",
  },
  {
    question: "To initiate recovery from vortex ring the pilot should",
    choices: {
      A: "Cyclic forwards, raise the collective then accelerate above 20 knots",
      B: "Reduce collective, move cyclic forwards and accelerate",
      C: "Raise the collective, move cyclic forwards and accelerate",
      D: "Cyclic forwards, accelerate to min 20 knots then raise collective",
    },
    correct: "D",
    ref: "CPL H AND ATPL H",
  },
  {
    question:
      "At constant EAS, what is the effect on aerodynamic damping as height increases?",
    choices: {
      A: "Damping in all axes is reduced",
      B: "Damping in pitch manoeuvres only is reduced",
      C: "Damping in roll is increased",
      D: "Damping in all axes is increased",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft is placed in a level balanced turn and the controls released. It is spirally unstable if",
    choices: {
      A: "the bank steadily increases",
      B: "the bank remains the same",
      C: "the bank reduces",
      D: "the pitch attitude increases",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A statically unstable aeroplane is",
    choices: {
      A: "always dynamically stable",
      B: "never dynamically stable",
      C: "sometimes dynamically stable",
      D: "sometimes dynamically unstable",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In which situation would the wing lift of an aeroplane in straight and level flight have the highest value? (the engines are mounted below the wing)?",
    choices: {
      A: "Forward centre of gravity and take-off thrust",
      B: "Aft centre of gravity and idle thrust",
      C: "Forward centre of gravity and idle thrust",
      D: "Aft centre of gravity and take-off thrust",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane, with a C.G. location behind the centre of pressure of the wing can only maintain a straight and level flight when the horizontal tail loading is",
    choices: {
      A: "zero",
      B: "upwards",
      C: "downwards",
      D: "upwards or downwards depending on elevator deflection",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The effect of a ventral fin on the static stability of an aeroplane is as follows: (1=longitudinal, 2=lateral, 3=directional)",
    choices: {
      A: "1: no effect, 2: positive, 3: negative",
      B: "1: positive, 2: negative, 3: negative",
      C: "1: negative, 2: positive, 3: positive",
      D: "1: no effect, 2: negative, 3: positive",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the total moments about an axis are not zero, what will be the result around that axis?",
    choices: {
      A: "Equilibrium PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "Constant angular velocity",
      C: "Angular acceleration",
      D: "Constant angular displacement",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If an aircraft has its CG ahead of its CP, in straight and level flight",
    choices: {
      A: "there will normally be an upload on the tailplane",
      B: "the tailplane will have a negative angle of attack",
      C: "there will normally be a download on the tailplane",
      D: "there will normally be no load on the tailplane",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the aircraft is properly loaded the CG, the neutral point and the manoeuvre point will be in the order given, forward to aft",
    choices: {
      A: "manoeuvre point, neutral point, CG",
      B: "manoeuvre point, CG, neutral point",
      C: "CG, neutral point, manoeuvre point",
      D: "CG, manoeuvre point, neutral point",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the total sum of moments about one of its axis is not zero, an aeroplane",
    choices: {
      A: "would fly a path with a constant curvature",
      B: "would be difficult to control",
      C: "would experience an angular acceleration about that axis",
      D: "would not be affected because the situation is normal",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the sum of moments in flight is not zero, the zero plane will rotate about",
    choices: {
      A: "the aerodynamic centre of the wing",
      B: "the neutral point of the aeroplane",
      C: "the centre of gravity PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "the centre of pressure of the wing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Speed stability of an aircraft",
    choices: {
      A: "is stable below Vmd because total drag decreases as speed decreases",
      B: "is unstable above Vmd because thrust decreases as speed increases",
      C: "is unstable below Vmd because total drag decreases as speed decreases",
      D: "is stable above Vmd because total drag increases as speed increases",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An aircraft is said to have speed stability",
    choices: {
      A: "if it recovers from displacements about any of the three axes at all speeds",
      B: "if it can be trimmed to fly at any speed between stalling speed and Vne",
      C: "when the speed is disturbed from its trimmed value, it tends to return to the original speed",
      D: "if it can fly a 3 degree glide slope without the need to adjust the thrust setting",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If an aircraft has negative dynamic and positive static stability, this will result in",
    choices: {
      A: "undamped oscillations",
      B: "convergent oscillations",
      C: "divergent oscillations",
      D: "damped oscillations",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "If an aircraft has positive static stability",
    choices: {
      A: "It is always dynamically stable",
      B: "it is always dynamically unstable",
      C: "it can be dynamically neutral/stable or unstable",
      D: "it is always dynamically neutral",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The lift coefficient (CL) of an aeroplane in steady horizontal flight is 0.42, increase in angle of attack of 1 degree increases CL by is 0.1. A vertical up gust instantly changes the angle of attack by 3 degrees. The load factor will be",
    choices: {
      A: "0.74",
      B: "1.71",
      C: "1.49",
      D: "2.49",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft is in straight, level flight has a CL of 0.42 and a 1o increase in angle of attack would increase the CL by 0.1. Following a gust that increases the angle of attack by 3o, what load factor would the aircraft be subject to?",
    choices: {
      A: "n = 0.7",
      B: "n = 1.7",
      C: "n = 1.4",
      D: "n = 1.0",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The lift coefficient (CL) of an aeroplane in steady horizontal flight is 0.4. Increase of angle of attack of 1 degree will increase CL by 0.09. A vertical up gust instantly changes the angle of attack by 5 degrees. The load factor will be",
    choices: {
      A: "3.18",
      B: "1.09",
      C: "2.0",
      D: "2.13",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The lift coefficient (CL) of an aeroplane in steady horizontal flight is 0.35. Increase in angle of attack of 1 degree will increase CL by 0.079. A vertical up gust instantly changes the angle of attack by 2 degrees. The load factor will be",
    choices: {
      A: "1.9",
      B: "0.9",
      C: "0.45",
      D: "1.45",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following statements is correct? 1. VMCL is the minimum control speed in the landing configuration 2. The speed VMCL can be limited by the available maximum roll rate",
    choices: {
      A: "l is correct, ll is correct",
      B: "l is incorrect, ll is incorrect",
      C: "l is correct, ll is incorrect",
      D: "l is incorrect, ll is correct",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "As fuel is consumed during a level flight cruise at high level",
    choices: {
      A: "the angle of attack must be increased",
      B: "the stalling speed will increase",
      C: "the centre of pressure will move forward",
      D: "induced drag will decrease",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the approximate value of the lift of an aeroplane at a gross weight of 50.000 N, in a horizontal co- ordinated 45 degrees banked turn?",
    choices: {
      A: "50.000 N",
      B: "60.000 N",
      C: "70.000 N",
      D: "80.000 N",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The lift of an aeroplane of weight W in a constant linear climb with a climb angle (gamma) is approximately",
    choices: {
      A: "Wcos.gamma",
      B: "W(1-sin.gamma)",
      C: "W(1-tan.gamma)",
      D: "W/cos.gamma",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The turn indicator shows a right turn. The slip indicator is left of neutral. To co-ordinate the turn",
    choices: {
      A: "a higher turn rate is required",
      B: "more right rudder is required",
      C: "less right bank is required",
      D: "more right bank is required",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What action must the pilot take to maintain altitude and airspeed when turning in a jet aircraft?",
    choices: {
      A: "Increase thrust",
      B: "Increase angle of attack",
      C: "Decrease the turn radius",
      D: "Increase angle of attack and thrust",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The theoretical best range speed for a jet aircraft at low level is",
    choices: {
      A: "approximately 1.32 times the minimum drag speed",
      B: "the minimum drag speed",
      C: "the same as for a propeller aircraft",
      D: "the minimum power speed",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Propeller aircraft flown at medium altitude at the recommended EAS will have a better specific air range (SAR) than at sea level because",
    choices: {
      A: "drag is the same",
      B: "the power required to maintain level flight is less",
      C: "engine efficiency is greater",
      D: "the thrust required is less",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For an aircraft in level flight, if the wing centre of pressure is aft of the centre of gravity and there is no thrust-drag couple, the tailplane load must be",
    choices: {
      A: "directed upwards",
      B: "up or down depending on the position of the flight spoilers PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "directed downwards",
      D: "zero at all times",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a steady climb",
    choices: {
      A: "thrust equals drag plus the weight component perpendicular to the flight path and lift equalsthe weight component along the flight path",
      B: "thrust equals drag plus the weight component along the flight path and lift equals theweight component perpendicular to the flight path",
      C: "thrust equals the weight component along the flight path and lift equals the sum of thecomponents of drag and weight along the flight path",
      D: "if the angle of climb is 20o, lift equals weight times sin 20o",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "By what percentage does the lift increase in a steady level turn at 45o angle of bank, compared to straight and level flight?",
    choices: {
      A: "41%",
      B: "19%",
      C: "31%",
      D: "52%",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The bank angle in a rate-one turn depends on",
    choices: {
      A: "wind",
      B: "weight",
      C: "load factor",
      D: "TAS",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a steady turn at constant height",
    choices: {
      A: "the radius of turn depends upon the weight and load factor",
      B: "the rate of turn depends upon the TAS and angle of bank PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "the rate of turn depends upon the weight, TAS and angle of bank",
      D: "the radius of turn depends only upon load factor",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane performs a steady horizontal turn with 20 degrees bank and 150 kt TAS. The same aeroplane with the same bank angle and the same speed, but at a lower mass will",
    choices: {
      A: "turn with a higher turn rate",
      B: "turn with the same turn radius",
      C: "turn with a larger turn radius",
      D: "turn with a smaller turn radius",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Weight acts",
    choices: {
      A: "perpendicular to the chord line",
      B: "parallel to the gravitational force",
      C: "perpendicular to the longitudinal axis",
      D: "perpendicular to the relative airflow",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If VS1G is 100kt, the stalling speed in a 45o bank level turn will be",
    choices: {
      A: "119 kts",
      B: "80 kts",
      C: "141 kts",
      D: "100 kts",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "For a jet aircraft the best rate of climb is achieved",
    choices: {
      A: "at the optimum lift to drag ratio",
      B: "when excess thrust available is at a maximum",
      C: "when excess power available is at a maximum",
      D: "at the optimum angle of attack, nominally 4o PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In order to achieve the maximum rate of climb, aircraft should be flown at the indicated airspeed which",
    choices: {
      A: "gives the best lift/drag ratio",
      B: "gives maximum excess power",
      C: "gives the best thrust/drag ratio",
      D: "gives the best speed/drag ratio",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A jet aeroplane is rolled into a turn, while maintaining airspeed and holding altitude. In such a case, the pilot has to",
    choices: {
      A: "increase thrust and decrease angle of attack",
      B: "increase thrust and keep angle of attack unchanged",
      C: "increase thrust and angle of attack",
      D: "increase angle of attack and keep thrust unchanged",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement is correct at the speed for minimum drag (subsonic)?",
    choices: {
      A: "The gliding angle is minimum",
      B: "The CL/CD rati is minimum",
      C: "Induced drag is greater than the parasite drag",
      D: "Propeller aeroplanes fly at that speed at max endurance",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The speed for minimum sink rate in a glide, compared to the speed for maximum distane VIMD is",
    choices: {
      A: "equal to VIMD",
      B: "slower than VIMD",
      C: "faster than VIMD",
      D: "not related to VIMD",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aircraft in flight is affected by loads. These may be classified as",
    choices: {
      A: "tensile, shear, twisting and stretching",
      B: "compressive, tensile, shear and torsional",
      C: "thrust, drag, lift and weight",
      D: "compressive, bending, shear and torsional",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A light twin is in a turn at 20 degrees bank and 150 kt TAS. A more heavy aeroplane at the same bank and the same speed will",
    choices: {
      A: "turn at a smaller turn radius",
      B: "turn at a bigger turn radius",
      C: "turn at the same turn radius",
      D: "turn ata higher turn rate",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "During a correctly balanced turn",
    choices: {
      A: "the thrust is a component of the centrifugal force",
      B: "the centrifugal force directly balances the weight of the aircraft",
      C: "the lift force balances the aircraft weight",
      D: "the lift force provides a centripetal force and a force that opposes the weight of the aircraft",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The angle of climb of an aircraft is proportional to and as weight increases",
    choices: {
      A: "excess power; decreases",
      B: "excess thrust; increases",
      C: "excess thrust; decreases",
      D: "excess power; increases",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "At a true airspeed of 300 kt and in a 45o bank level turn, the radius of turn would be (assume a value of 10m/sec/sec for g)",
    choices: {
      A: "2387m PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "2765m",
      C: "8000m",
      D: "23780m",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following will give an increase of ground range when gliding at VDmin?",
    choices: {
      A: "Increased weight",
      B: "A tailwind",
      C: "A headwind",
      D: "Decreased weight",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane performs a continuous descent with 160 kts IAS and 1000 feet/min vertical speed. In this condition",
    choices: {
      A: "drag isles than the combined forces that move the aeroplane forward",
      B: "lift is equal to weight",
      C: "lift is less tan drag",
      D: "weight is greater than lift",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "From the polar diagram of the entire aeroplane one can read",
    choices: {
      A: "the maximum CL/CD ratio and maximum lift coefficient",
      B: "the minimum drag and the maximum lift",
      C: "the minimum drag coefficient and the maximum lift",
      D: "the minimum CL/CD ratio and the minimum drag",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which of the following statements is correct?",
    choices: {
      A: "Lift acts perpendicular to the horizontal and drag parallel in a rearwards direction",
      B: "Drag acts parallel to the chord and opposite to the direction of motion of the aircraft andlift acts perpendicular to the chord PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "Lift acts at right angles to the top surface of the wing and drag acts at right angles tolift",
      D: "Drag acts in the same direction as the relative wind and lift perpendicular to it",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane is in a steady turn, at a constant TAS of 300 kt, and a bank angle of 45o. Its turning radius is equal to",
    choices: {
      A: "3.354 metresB - 2.381 metres",
      B: "4.743 metres",
      C: "9.000 metres",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The value of the induced drag of an aeroplane in straight and level flight at constant weight varies linearly with",
    choices: {
      A: "V",
      B: "1/V",
      C: "1/V2",
      D: "v2",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a turn, the load factor n and the stalling speed VS will be",
    choices: {
      A: "n greater than 1, VS higher than in straight and level flight",
      B: "n smaller than 1, VS lower than in straight and level flight",
      C: "n greater than 1, VS lower than in straight and level flight",
      D: "n smaller than 1, VS higher than in straight and level flight",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The location of the centre of pressure of a positive cambered wing at increasing angle of attack will",
    choices: {
      A: "shift aft",
      B: "shift in spanwise direction",
      C: "shift forward",
      D: "not shift PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The greatest gliding range would be obtained from a wing at",
    choices: {
      A: "a high angle of attack at maximum lift/drag ratio",
      B: "a small angle of attack at maximum lift/drag ratio",
      C: "a small angle of attack at minimum lift/drag ratio",
      D: "a high angle of attack at minimum lift/drag ratio",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The margin between the power available and the power required",
    choices: {
      A: "increases when the aircraft climbs",
      B: "decreases when the aircraft climbs",
      C: "decreases when the aircraft descends",
      D: "remains the same",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A pitch up could be caused by",
    choices: {
      A: "forward movement of the centre of gravity",
      B: "a reduction in varying loads due to G",
      C: "forward movement of the centre of pressure",
      D: "lateral movement of the centre of gravity",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a level banked turn, the stalling speed will",
    choices: {
      A: "decrease",
      B: "increase",
      C: "remain the same",
      D: "vary inversely with wing loading",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "During the glide, the forces acting on an aircraft are",
    choices: {
      A: "thrust, lift and drag",
      B: "lift, weight and thrust",
      C: "lift, drag and weight",
      D: "drag, thrust and weight",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "To cover the greatest distance when gliding, the gliding speed must be",
    choices: {
      A: "near to the stalling speed",
      B: "as high as possible within V limits",
      C: "minimum control speed",
      D: "the one that gives the lowest total drag",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane climbs to cruising level with a constant pitch attitude and maximum climb thrust, (assume no supercharter). How do the following variables change during the climb? (gamma = flight path angle)",
    choices: {
      A: "gamma decrases, angle of attack increases, IAS remains constant",
      B: "gamma decreases, angle of attack increases, IAS decreases",
      C: "gamma decreases, angle of attack remains constant, IAS decreases",
      D: "gamma remains constant, angle of attack remains constant, IAS decreases",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane is in a steady horizontal turn at a TAS of 194 kt. The turn radius is 1000 m. The bank angle is (assume g = 10 m/s2)?",
    choices: {
      A: "45o",
      B: "30o",
      C: "50o",
      D: "60o",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane performs a right turn, the slip indicator is left of neutral. One way to co-ordinate the turn is to apply",
    choices: {
      A: "a higher turn-rate PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "more right rudder",
      C: "less right bank",
      D: "more left rudder",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "An aeroplane performs a steady horizontal turn with a TAS of 200 kt. The turn radius is 2000 m. The load factor (n) is approximately",
    choices: {
      A: "2.0",
      B: "1.4",
      C: "1.1",
      D: "1.8",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Approximately how long does it take to fly a complete circle during a horizontal steady co-ordinated turn with a bank angle of 45h and a TAS of 200 kt?",
    choices: {
      A: "63 s",
      B: "95 s",
      C: "126 s",
      D: "630 s",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Dividing lift by weight gives",
    choices: {
      A: "wing loading",
      B: "lift-drag ratio",
      C: "load factor",
      D: "aspect ratio",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "During a climbing turn to the right the",
    choices: {
      A: "angle of attack of the left wing is larger than the angle of attack of the right wing",
      B: "angle of attack of the left wing is smaller than the angle of attack of the right wing",
      C: "angle of attack of both wings is the same PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "stall angle of attack of the left wing will be larger than the correspondingangle for the rightwing",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "During a straight steady climb:lift is less than weightlift is greater than weightload factor is less than 1load factor is greater than 1lift is equal to weightload factor is equal to 1Which of the following lists all the correct answers?",
    choices: {
      A: "1 and 3",
      B: "2 and 4",
      C: "5 and 6",
      D: "1 and 6",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "For shallow climb angles the following formula can be used",
    choices: {
      A: "sin (gamma) = W/T ¿ CD/CL",
      B: "sin (gamma) = T/W ¿ CD/CL",
      C: "sin (gamma) = W/T ¿ CL/CD",
      D: "sin (gamma) = T/W ¿ CL/CD",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given:Aeroplane mass:50 000 kgLift/Drag ratio:10Thrust per engine:60 000 NAssumed g:10 m/s2For a straight, steady, wings level climb of a twin engine aeroplane, the all engines climb gradient will be",
    choices: {
      A: "3.7%",
      B: "14%",
      C: "15.7%",
      D: "11.7%",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given:Aeroplane mass:50 000 kgLift/Drag ratio:10Thrust per engine:20 000 NAssumed g:10 M/S2For a straight, steady, wings level climb of a four engine aeroplane, the all engines climb gradient will be",
    choices: {
      A: "8.5%",
      B: "4.3%",
      C: "7.7% PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "6.0%",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given:Aeroplane mass:50 000 kgLift/Drag ratio:10Thrust per engine:30 000 NAssumed g:10 m/s2For a straight, steady, wings level climb of a three engine aeroplane, the all engines climb gradient will be",
    choices: {
      A: "8.5%",
      B: "9.7%",
      C: "2.9%",
      D: "8.0%",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given:Aeroplane mass:50 000 kgLift/Drag ratio:12Thrust per engine:20 000 NAssumed g:10 m/s2For a straight, steady, wings level climb of a four engine aeroplane, the all engines climb gradient will be",
    choices: {
      A: "4.3%",
      B: "7.7%",
      C: "6.0%",
      D: "8.5%",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given:Aeroplane mass:50 000 kgLift/Drag ratio:12Thrust per engine:21 000 NAssumed g:10 m/s2For a straight, steady, wings level climb of a four engine aeroplane, the all engines climb gradient will be",
    choices: {
      A: "8.5%",
      B: "4.3%",
      C: "7.7%",
      D: "6.0%",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given:Aeroplane mass:50 000 kgLift/Drag ratio:12Thrust per engine:21 000 NAssumed g:10 m/s2For a straight, steady, wings level climb of a four engine aeroplane, the one engine inoperative climb gradient will be",
    choices: {
      A: "6.0%",
      B: "7.7%",
      C: "4.3%",
      D: "8.5%",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given:Aeroplane mass:50 000 kgLift/Drag ratio:12Thrust per engine:28 000 NAssumed g:10 m/s2For a straight, steady, wings level climb of a four engine aeroplane, the all engines climb gradient will be",
    choices: {
      A: "8.5%",
      B: "8.0%",
      C: "9.7%",
      D: "2.9%",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given:Aeroplane mass:50 000 kgLift/Drag ratio:12Thrust per engine:28 000 NAssumed g:10 m/s2For a straight, steady, wings level climb of a three engine aeroplane, the one engine inoperative climb gradient will be",
    choices: {
      A: "8.0%",
      B: "9.7%",
      C: "2.9%",
      D: "8.5%",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given:Aeroplane mass:50 000 kgLift/Drag ratio:12Thrust per engine:30 000 NAssumed g:10 m/s2For a straight, steady, wings level climb of a three engine aeroplane, the all engines climb gradient will be",
    choices: {
      A: "2.9%",
      B: "9.7%",
      C: "8.0%",
      D: "8.5%",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given:Aeroplane mass:50 000 kgLift/Drag ratio:12Thrust per engine:50 000 NAssumed g:10 m/s2For a straight, steady, wings level climb of a twin engine aeroplane, the all engines climb gradient will be",
    choices: {
      A: "15.7%",
      B: "3.7%",
      C: "14%",
      D: "11.7%",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given:Aeroplane mass:50 000 kgLift/Drag ratio:12Thrust per engine:60 000 NAssumed g:10 m/s2For a straight, steady, wings level climb of a twin engine aeroplan e, the all engines climb gradient will be",
    choices: {
      A: "14% PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "3.7%",
      C: "15.7%",
      D: "11.7%",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Given:Aeroplane mass:50 000 kgLift/Drag ratio:12Thrust per engine:60 000 NAssumed g:10 m/s2For a straight, steady, wings level climb of a twin engine aeroplane, the one engine inoperative climb gradient will be",
    choices: {
      A: "3.7%",
      B: "15.7%",
      C: "14%",
      D: "11.7%",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In a slipping turn (nose pointing outwards), compared with a co-ordinated turn, the bank angle (i) and the ball or slip indicator (ii) are respectively",
    choices: {
      A: "(i) too large; (ii) displaced towards the high wing",
      B: "(i) too small; (ii) displaced towards the low wing",
      C: "(i) too large; (ii) displaced towards the low wing",
      D: "(i) too small; (ii) displaced towards the high wing",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In a steady straight climb at climb angle gamm, the lift of an aeroplane with weight W is approximately",
    choices: {
      A: "W x (1-tan (gamma))",
      B: "W x (1-sin (gamma))",
      C: "W x cos (gamma)",
      D: "W/cos (gamma)",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In a straight steady descent, which of the following statements is correct?",
    choices: {
      A: "Lift is equal to weight, load factor is equal to 1",
      B: "Lift is less that weight, load factor is equal to 1",
      C: "Lift is less than weight, load factor is less than 1 PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "Lift is equal to weight, load factor is less than 1",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In order to perform a steady level turn at constant speed in an aeroplane, the pilot must",
    choices: {
      A: "increase angle of attack and keep thrust/polwer unchanged",
      B: "increase thrust/power and keep angle of attack unchanged",
      C: "increase thrust/power and decrease angle of attack",
      D: "increase thrust/power and angle of attack",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The descent angle of a given aeroplane in a steady wings level glide has a fixed value for a certain combination of:(ignore compressibility effects and assume zero thrust)",
    choices: {
      A: "configuration and angle of attack",
      B: "mass and altitude",
      C: "altitude and configuration",
      D: "configuration and mass",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The forces of lift and drag on an aerofoil are, respectively, normal and parallel to the",
    choices: {
      A: "relative wind/airflow",
      B: "chord line",
      C: "longitudinal axis",
      D: "horizon",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The speed for minimum glide angle occurs at an angle of attack that corresponds to (assume zero thrust)",
    choices: {
      A: "(CL/CD^2) max",
      B: "CL max",
      C: "(CL/CD) max",
      D: "(CL^3/CD^2) max",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Two identical aircraft A and B, with the same mass, are flying steady level co- ordinated 20 degree bank turns. If the TAS of A is 130 kt and that of B is 200 kt",
    choices: {
      A: "the rate of turn of A is greater than that of B",
      B: "the load factor of A is greater than that of B",
      C: "the turn radius of A is greater than that of B",
      D: "the lift coefficient of A is less than that of B",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What decreases the maximum ground distance during a glide with zero thrust?",
    choices: {
      A: "A decrease in aeroplane mass with zero wind",
      B: "A tailwind with constant aeroplane mass",
      C: "An increase in aeroplane mass with zero wind",
      D: "A headwind with constant aeroplane mass",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What increases the maximum ground distance during a glide with zero thrust?",
    choices: {
      A: "A decrease in aeroplane mass with zero wind",
      B: "A headwind with constant aeroplane mass",
      C: "An increase in aeroplane mass with zero wind",
      D: "A tailwind with constant aeroplane mass",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the approximate diameter of a steady, level, co-ordinated turn with a bank angle of 30 degrees and a speed (TAS) of 500 kt?",
    choices: {
      A: "13 km",
      B: "17 km",
      C: "23 km",
      D: "7 km",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the approximate radius of a steady horizontal co-ordinated turn at a bank angle of 45o and a TAS of 200 kt?",
    choices: {
      A: "1 km PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "10 km",
      C: "2 km",
      D: "1.5 km",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the correct relationship between the true airspeed for (i) minimum sink rate and (ii) minimum glide angle, at a given altitude?",
    choices: {
      A: "(i) is equal to (ii)",
      B: "(i) is less than (ii)",
      C: "(i) is greater than (ii)",
      D: "(i) can be greater than or less than (ii) depending on the type of aeroplane",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When an aeroplane performs a straight steady climb with a 20% climb gradient, the load factor is equal to",
    choices: {
      A: "0.83",
      B: "1.02",
      C: "1",
      D: "0.98",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The lift to drag ratio determines the",
    choices: {
      A: "horizontal distance in the climb up to a given altitude",
      B: "maximum rate of climb",
      C: "endurance speed",
      D: "horizontal glide distance from a given altitude at zero wind and zero thrust",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What is load factor?",
    choices: {
      A: "lift multiplied by the total weight",
      B: "lift divided by the total weight",
      C: "lift subtracted by the total weight PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "the total weight divided by the wing area",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Side slip is",
    choices: {
      A: "that which occurs when an aircraft loses adhesion when taxi-ing",
      B: "the motion that will occur if trailing edge flaps deploy asymmetrically",
      C: "the out of balance which occurs when an engine fails and thrust is asymmetric",
      D: "motion of an aircraft, relative to the relative airflow, whichhas a component of velocityalong the lateral axis",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In steady level flight the load factor is",
    choices: {
      A: "zero",
      B: "1.0",
      C: "1.5",
      D: "2.0",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If cruising into a 15 kt headwind and a 180o turn is made so the wind is directly behind the aircraft, the IAS would",
    choices: {
      A: "be the same and the ground speed would increase by 30 kt",
      B: "be the same and the ground speed would increase by 15 kt",
      C: "decrease by 15 kt and the ground speed would increase by 15 kt",
      D: "increase by 30 kt and the ground speed would remain the same",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "To maintain level flight at a steady speed",
    choices: {
      A: "thrust must be exactly equal to drag",
      B: "thrust must be slightly greater than drag",
      C: "thrust must be much greater than drag",
      D: "thrust must be less than drag PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When an airraft is in level unaccelerated flight",
    choices: {
      A: "parasite drag equals induced drag",
      B: "lift is greater than weight",
      C: "lift equals weight and thrust equals drag",
      D: "lift and weight are equal and act through the CP",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement is true, if during a level co-ordinated turn theload factor was kept constant?",
    choices: {
      A: "a decrease in airspeed result in an increase in radius",
      B: "an increase in airspeed results in an increase in radius",
      C: "an increase in airspeed results in a decrease in radius",
      D: "an increase in airspeed would result in the same radius",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "For a given TAS and bank angle, a heavy aircraft",
    choices: {
      A: "will have a larger radius of turn than a lighter one",
      B: "will have a smaller radius of turn than a lighter one",
      C: "will have the same radius of turn as a lighter one, but at a higher g load",
      D: "will have the same radius of turn as a lighter one and the same g load",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What action is necessary to make an aircraft turn?",
    choices: {
      A: "change the direction of lift",
      B: "change the direction of thrust",
      C: "yaw the aircraft",
      D: "roll the aircraft",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "When an aircraft is in level unaccelerated flight",
    choices: {
      A: "parasite drag equals induced drag",
      B: "lift must be greater than weight",
      C: "upward forces equal downward forces and thrust equals drag",
      D: "lift and weight are equal and both act through the CP",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When an aircraft is climbing the requirements to maintain equilibrium are",
    choices: {
      A: "thrust equals the sum of drag and the weight component along the flight path, and lift equalsthe weight component perpendicular to the flight path",
      B: "thrust equals the weight component along the flight path, and lift equals the sm of the dragand weight component perpendicular to the flight path",
      C: "thrust equals the weight component perpendicular to the flight path, and lift equals the weightcomponent along the flight path",
      D: "lift equals weight, and thrust equals drag",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The best speed for obstacle clearance is",
    choices: {
      A: "Vx with optimum flap setting for runway length, take-off weight and atmospheric conditions",
      B: "Vx and no high lift devices",
      C: "Vy with no flaps",
      D: "Vy with optimum flap setting for runway length, take-off weight and atmospheric conditions",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When climbing into a headwind, comparedto still air, the climb gradient relative to the ground will be",
    choices: {
      A: "sleeper, and the rate of climb increased",
      B: "sleeper, and the rate of climb unchanged",
      C: "less steep, and the rateof climb increased",
      D: "the same, and the rate of climb unchanged",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A glider has a L/D ratio of 25:1. For every 1000 ft of height lost it would cover a distance instill air of",
    choices: {
      A: "4 NM",
      B: "2.5 NM",
      C: "25 NM",
      D: "40 NM",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a glide the line of action of the totqal reaction will be",
    choices: {
      A: "behind that of lift and ahead that of weight",
      B: "ahead that of lift and directly opposite that of weight",
      C: "behind that of lift and directly opposite that of weight",
      D: "ahead that of lift and weight",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "The force which causes an aircraft to turn is given by",
    choices: {
      A: "the rudder",
      B: "the ailerons",
      C: "the wing lift",
      D: "the weight",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement is correct with respect to rate and radius of turn for an aeroplane flown in a co- ordinated turn at a constant altitude?",
    choices: {
      A: "For any specific angle of bank and airspeed, the lighter the aeroplane the faster the rateand the smaller the radius of turn",
      B: "For a specific angle of bank and airspeed the rate and radius of turn will not vary",
      C: "the faster the true airspeed, the faster the rate and larger radius of turn regardless ofthe angle of bank",
      D: "to maintain a steady rate of turn, the angle of bank must be increased as the airspeed isdecreased",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If an aircraft maintains a constant radius of turn but the speed is increased",
    choices: {
      A: "the bank angle must be increased",
      B: "the bank angle must be decreased",
      C: "the bank angle will remain constant and the g load will be constant",
      D: "the bank angle will remain constant but the g load will increase",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In co-ordinated flight for any specific bank, the faster the speed of the aircraft the",
    choices: {
      A: "smaller the radius and slower rate of turn",
      B: "greater the radius and faster rate of turn",
      C: "smaller the radius and faster rate of turn",
      D: "greater the radius and slower rate of turn",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "While holding the angle of bank constant, if the rate of turn is varied the load factor would",
    choices: {
      A: "vary depending upon the resultant lift vector",
      B: "remain constant regardless of air density and the resultant lift vector",
      C: "vary depending upon speed and air density provided the resultant lift vector variesproportionately",
      D: "increase at an increasing rate",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "For an aircraft to make a rate 1 turn",
    choices: {
      A: "there is only 1 correct speed and one corresponding bank angle",
      B: "it may be done at any speed but there is only 1 correct bank angle",
      C: "there is only 1 correct speed but any bank angle may be chosen",
      D: "it may be done at any speed but the higher the speed the greater the bank angle",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which statement is true, regarding the opposing forces acting on an aeroplane in steady state level flight?",
    choices: {
      A: "thrust is greater than drag and weight and lift are equal",
      B: "thrust is greater than drag and lift is greater than weight",
      C: "thrust is less than drag and lift is less than weight",
      D: "these forces are equal",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a steady climb, the rate of climb is a maximum when",
    choices: {
      A: "angle of climb is a maximum",
      B: "excess thrust is a maximum",
      C: "lift is a maximum",
      D: "excess power is a maximum",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Flying at the maximum rate of climb speed will give",
    choices: {
      A: "maximum height in the shortest distance",
      B: "maximum height in the shortest time",
      C: "maximum height in both shortest time and distance",
      D: "minimum height gain in the shortest distance",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a steady climb at a constant speed",
    choices: {
      A: "the power available must equal the power required",
      B: "the power available must exceed the power required",
      C: "the power available must be less than the power required",
      D: "the power required must be greater than the power available",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "To obtain the maximum rate of climb",
    choices: {
      A: "power available must be least for the power required",
      B: "power required must be least for the power available PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      C: "power available must be equal to power required",
      D: "thrust must exceed drag by the greatest margin",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When gliding, the speed which will give the minimum rate of descent is",
    choices: {
      A: "as close to the stalling speed as possible",
      B: "the same as the speed for maximum glide range",
      C: "less than the speed for maximum glide range",
      D: "higher than the speed for maximum glide range",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which is true regarding the forces acting on an aircraft in a steady-state descent?",
    choices: {
      A: "the sum of all rearward forces is greater than the sum of all forward forces",
      B: "the sum of all forward forces is equal to the sum of all rearward forces",
      C: "the sum of all upward forces is less than the sum of all downward forces",
      D: "the sum of all upward forces is greater than the sum of all downward forces",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If, during a level turn the rate of turn is kept constant, an increase in airspeed will result in a",
    choices: {
      A: "decrease in centrifugal force",
      B: "constant load factor regardless of changes in bank angle",
      C: "need to decrease angle of bank to maintain the same radius of turn",
      D: "need to increase angle of bank to maintain the same radius of turn",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If no corrective action is taken by the pilot as angle of bank is increased, how is the vertical component of lift and sink rate affected?",
    choices: {
      A: "lift increases and sink rate increases",
      B: "lift decreases and sink rate decreases",
      C: "lift increases and sink rate decreases",
      D: "lift decreases and sink rate increases PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What is the relationship of the rate of turn with the radius of turn with a constant angle of bank but increasing airspeed?",
    choices: {
      A: "rate will increase and radius will decrease",
      B: "rate will decrease and radius will increase",
      C: "rate and radius will increase",
      D: "rate and radius will decrease",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If an aircraft with a gross weight of 2 000 kg was subjected to a 60 degree bank turn, what would the total load be?",
    choices: {
      A: "3 000 kg",
      B: "12 000 kg",
      C: "1 000 kg",
      D: "4 000 kg",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Why is it necessary to increase bank elevator pressure to maintain altitude during a turn?",
    choices: {
      A: "rudder deflection and slight aileron use throughout the turn",
      B: "due to the loss of the vertical component of lift",
      C: "due to the loss of the horizontal component of lift",
      D: "because the wing tip on the outside of the turn is travelling faster",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In level flight at a constant speed the load factor",
    choices: {
      A: "will increase in direct proportion to the bank angle",
      B: "will increase in inverse proportion to the bank angle",
      C: "will increase as turn radius is tightened",
      D: "will decrease as turn radius is reduced",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When the landing gear is lowered, given that the CG does not move longitudinally, to maintain level flight, the download on the tail plane must be",
    choices: {
      A: "increased",
      B: "decreased",
      C: "remain the same",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a glide the maximum range will be obtained by flying at",
    choices: {
      A: "Vne",
      B: "a speed close to the stalling speed",
      C: "Vmd",
      D: "Vmo/Mmo",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "At a constant IAS, the radius of turn increases, the angle of bank has been",
    choices: {
      A: "increased",
      B: "decreased",
      C: "held constant",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For an aircraft at high weight, the minimum possible radius of turn will be",
    choices: {
      A: "less than when at low weight",
      B: "the same as when at a low weight",
      C: "more than when at a low weight",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What effect does an increase in airspeed have on a co-ordinated turn while maintaining a constant angle of bank and altitude?",
    choices: {
      A: "the rate of turn will decrease resulting in a decreased load factor",
      B: "the rate of turn will decrease resulting in no change in the load factor",
      C: "the rate of turn will increase resulting in an increased load factor",
      D: "the rate of turn will increase resulting in a decreased load factor PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Upon which factor does wing loading during a level co-ordinated turn in smooth air depend?",
    choices: {
      A: "angle of bank",
      B: "TAS",
      C: "rate of turn",
      D: "IAS",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In a climb the weight component along the flight path is balanced by",
    choices: {
      A: "thrust",
      B: "lift",
      C: "drag",
      D: "gravity",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If a twin engine airraft with a L/D ratio of 8:1 is in straight and level flight and the engines are each evelopoing 16000 N of thrust, what is the weight of the aircraft?",
    choices: {
      A: "4 000 N",
      B: "8 000 N",
      C: "256 000 N",
      D: "32 000 N",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "A glide ratio of 14:1 with respect to the air mass will be",
    choices: {
      A: "7:1 in a headwind and 28:1 in a tailwind",
      B: "7:1 in a tailwind and 28:1 in a headwind",
      C: "14:1 in a tailwind and 7:1 in a headwind",
      D: "14:1 regardless of wind direction and speed",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For a given angle of bank, the load factor imposed on both the aircraft and pilot in a co-ordinated constant altitude turn",
    choices: {
      A: "is constant, but the stall speed is higher than in straight and level flight",
      B: "varies with the rate of turn",
      C: "is directly related to the aeroplane's gross weight",
      D: "is inversely proportional to the bank angle",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the airspeed is increased from 90 kts to 135 kts during a level 60o banked turn, the load factor will",
    choices: {
      A: "decrease and the stall speed will increase",
      B: "remain the same but the radius of turn will increase",
      C: "increase as well as the stall speed",
      D: "increase and the radius of turn will increase",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "What % increase in lift is required to maintain altitude while in a 45o bank turn?",
    choices: {
      A: "19%",
      B: "41%",
      C: "50%",
      D: "10%",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a rate 1 turn, the angle of bank is affected by",
    choices: {
      A: "TAS",
      B: "weight",
      C: "wind",
      D: "load factor",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the turn and slip indicator needle shows right and ball to the left, the correct input is",
    choices: {
      A: "more bank to the right PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "more right rudder",
      C: "less bank to the right",
      D: "increase turn radius",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The effect on turn radius at the same angle of bank at different weights will be to",
    choices: {
      A: "increase turn radius",
      B: "decrease turn radius",
      C: "the turn radius will not be affected by different weights",
      D: "the turn radius depends only upon the bank angle",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In a constant continuous descent of 1000 ft/min at 160 kt IAS, which statement is true?",
    choices: {
      A: "lift is less than drag",
      B: "lift is less than weight",
      C: "drag is less than the sum of the forces driving the aeroplane forward",
      D: "lift equals weight",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Except wing, what other factors affect the glide range?",
    choices: {
      A: "weight",
      B: "lift/drag ratio",
      C: "Cl max",
      D: "weight and power required",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "When flying at L/D max the glide distance covered will be increased by",
    choices: {
      A: "increasing weight",
      B: "decreasing weight",
      C: "increasing tailwind PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      D: "increasing headwind",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "In a descent",
    choices: {
      A: "weight and lift are the same",
      B: "weight is greater than lift",
      C: "weight is less than lift",
      D: "weight and drag are the same",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "What changes the load factor in straight and level flight?",
    choices: {
      A: "an increase in weight",
      B: "an increase in density",
      C: "CG moving rearwards",
      D: "a vertical gust",
    },
    correct: "D",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "Which condition gives the greatest gliding range?",
    choices: {
      A: "a tail wind",
      B: "a head wind",
      C: "a cross wind at right angles",
      D: "still air conditions",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question: "An increase in weight will glide range with a wind",
    choices: {
      A: "decrease/head",
      B: "increase/tail",
      C: "increase/head",
      D: "have no effect/tail",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "For an aeroplane in a glide, what other factor apart from wind affects the minimum glide angle?",
    choices: {
      A: "height",
      B: "weight",
      C: "Cl:Cd",
      D: "CG",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "The lift of an aeroplane in level flight is 50 kN. In a level turn at 45o bank the lift would be increased to",
    choices: {
      A: "50 kN",
      B: "60 kN",
      C: "70 kN",
      D: "80 kN",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "If the turn and slip indicator needed is to the left and the ball is to the right, what is the correct control input?",
    choices: {
      A: "more left rudder",
      B: "more right rudder",
      C: "less left bank",
      D: "increase rate of turn",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "A glider reduces weight by dumping water ballast. A ten per cent reduction in weight would give",
    choices: {
      A: "A five per cent reduction in best glide angle",
      B: "A ten per cent increase in best glide angle",
      C: "A decrease in best rate of descent",
      D: "No change in best rate of descent",
    },
    correct: "C",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "In straight and level flight the aircraft's normal axis is approximately",
    choices: {
      A: "Horizontal PRINCIPLES OF FLIGHT TRANSONIC AERODYNAMICS - The Mach number definition",
      B: "Vertical",
      C: "Lateral",
      D: "Longitudinal",
    },
    correct: "B",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "VMCL can be limited by:(i) engine failure on take-off(ii) roll rate",
    choices: {
      A: "(i) is incorrect; (ii) is correct",
      B: "(i) is correct; (ii) is incorrect",
      C: "(i) and (ii) are both correct",
      D: "(i) and (ii) are incorrect",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
  {
    question:
      "Which of the following statements is correct? 1. When the critical engine fails during take-off the speed VMCL can be limiting 2. The speed VMCL can be limited by the available maximum roll rate",
    choices: {
      A: "l is incorrect; ll is correct",
      B: "l is correct; ll is correct",
      C: "l is incorrect; ll is incorrect",
      D: "l is correct; ll is incorrect",
    },
    correct: "A",
    ref: "CPL A AND ATPL A",
  },
];

export default principlesOfFlight;
