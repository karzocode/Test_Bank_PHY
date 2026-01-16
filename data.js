const assignments = [
{
id: 1,
title: "Assignment 1",
questions:[
  {
    "id": 1,
    "text": "A plastic rod is rubbed with a piece of animal fur. The plastic rod acquires a negative charge during this process. Which of the following is true about the charge on the piece of fur?",
    "image": null,
    "options": [
      "It acquires a positive charge but greater in magnitude than the rod",
      "It acquires a positive charge but less in magnitude than the rod",
      "It acquires a positive charge with the same magnitude as the rod",
      "Does not acquire any charge"
    ],
    "correct": 2,
    "translate": "قضيب بلاستيكي يُدعك بقطعة من فراء حيواني. يكتسب القضيب البلاستيكي شحنة سالبة خلال هذه العملية. أي مما يلي صحيح بشأن الشحنة على قطعة الفراء؟",
    "explain": "عند الدعك، تنتقل الإلكترونات من الفراء إلى القضيب البلاستيكي. القضيب يكتسب إلكترونات (شحنة سالبة) والفراء يفقد نفس العدد من الإلكترونات (شحنة موجبة بنفس المقدار)"
  },
  {
    "id": 2,
    "text": "Two positive charges with magnitudes 4Q and Q are separated by a distance r. Which of the following statements is true?",
    "image": null,
    "options": [
      "The charge with a greater magnitude exerts a larger force on the small charge",
      "The charge with a greater magnitude exerts a smaller force on the small charge",
      "The forces on each charge are the same in magnitude and opposite in direction",
      "The forces on each charge are the same in magnitude and pointing in the same direction"
    ],
    "correct": 2,
    "translate": "شحنتان موجبتان مقداراهما 4Q و Q تفصلهما مسافة r. أي من العبارات التالية صحيحة؟",
    "explain": "وفقاً لقانون نيوتن الثالث: $F_{12} = -F_{21}$. القوة التي تؤثر بها 4Q على Q مساوية في المقدار ومعاكسة في الاتجاه للقوة التي تؤثر بها Q على 4Q"
  },
  {
    "id": 3,
    "text": "Two positive charges $Q_1$ and $Q_2$ are separated by a distance r. The charges repel each other with a force F. If the magnitude of each charge is doubled and the distance stays unchanged what is the new force between the charges?",
    "image": null,
    "options": ["F", "2 F", "4 F", "F/4"],
    "correct": 2,
    "translate": "شحنتان موجبتان $Q_1$ و $Q_2$ تفصلهما مسافة r. تتنافر الشحنتان بقوة F. إذا تضاعف مقدار كل شحنة وبقيت المسافة دون تغيير، فما هي القوة الجديدة بين الشحنتين؟",
    "explain": "$F = k\\frac{Q_1 Q_2}{r^2}$، إذا أصبحت $Q_1' = 2Q_1$ و $Q_2' = 2Q_2$، فإن $F' = k\\frac{(2Q_1)(2Q_2)}{r^2} = 4k\\frac{Q_1 Q_2}{r^2} = 4F$"
  },
  {
    "id": 4,
    "text": "Two positive charges $Q_1$ and $Q_2$ are separated by a distance r. The charges repel each other with a force F. If the distance between the charges is cut to one-fourth what is the new force acting on each charge?",
    "image": null,
    "options": ["16 F", "2 F", "4 F", "F/4"],
    "correct": 0,
    "translate": "شحنتان موجبتان $Q_1$ و $Q_2$ تفصلهما مسافة r. تتنافر الشحنتان بقوة F. إذا قلت المسافة بين الشحنتين إلى ربع المسافة الأصلية، فما هي القوة الجديدة المؤثرة على كل شحنة؟",
    "explain": "$F = k\\frac{Q_1 Q_2}{r^2}$، إذا أصبحت $r' = \\frac{r}{4}$، فإن $F' = k\\frac{Q_1 Q_2}{(r/4)^2} = k\\frac{Q_1 Q_2}{r^2/16} = 16k\\frac{Q_1 Q_2}{r^2} = 16F$"
  },
  {
    "id": 5,
    "text": "Two charges $Q_1$ and $-Q_2$ are separated by a distance r. The charges attract each other with a force F. What is the new force between the charges if the distance is tripled?",
    "image": null,
    "options": ["3 F", "9 F", "F/6", "F/9"],
    "correct": 3,
    "translate": "شحنتان $Q_1$ و $-Q_2$ تفصلهما مسافة r. تتجاذب الشحنتان بقوة F. ما هي القوة الجديدة بين الشحنتين إذا تضاعفت المسافة ثلاث مرات؟",
    "explain": "$F = k\\frac{|Q_1 Q_2|}{r^2}$، إذا أصبحت $r' = 3r$، فإن $F' = k\\frac{|Q_1 Q_2|}{(3r)^2} = k\\frac{|Q_1 Q_2|}{9r^2} = \\frac{1}{9}F$"
  },
  {
    "id": 6,
    "text": "Two charges $Q_1$ and $-Q_2$ are separated by a distance r. The charges attract each other with a force F. What is the new force between the charges if the distance is cut to one-fourth and the magnitude of each charge is doubled?",
    "image": null,
    "options": ["16 F", "64 F", "48 F", "F/16"],
    "correct": 1,
    "translate": "شحنتان $Q_1$ و $-Q_2$ تفصلهما مسافة r. تتجاذب الشحنتان بقوة F. ما هي القوة الجديدة بين الشحنتين إذا قلت المسافة إلى ربع المسافة الأصلية وتضاعف مقدار كل شحنة؟",
    "explain": "$F = k\\frac{|Q_1 Q_2|}{r^2}$، إذا أصبحت $r' = \\frac{r}{4}$ و $Q_1' = 2Q_1$ و $Q_2' = 2Q_2$، فإن $F' = k\\frac{|(2Q_1)(2Q_2)|}{(r/4)^2} = k\\frac{4|Q_1 Q_2|}{r^2/16} = 64k\\frac{|Q_1 Q_2|}{r^2} = 64F$"
  },
  {
    "id": 7,
    "text": "A positively charged sphere with a charge of +8$Q$ is separated from a negatively charged sphere -2$Q$ by a distance r. The spheres briefly touch each other and move to the original distance r. What is the new charge on each sphere after they move to the distance r?",
    "image": null,
    "options": ["$Q$", "2$Q$", "3$Q$", "$Q/4$"],
    "correct": 2,
    "translate": "كرة موجبة الشحنة مقدارها +8$Q$ مفصولة عن كرة سالبة الشحنة -2$Q$ بمسافة r. الكرتان تتلامسان لفترة وجيزة ثم تعودان إلى المسافة الأصلية r. ما هي الشحنة الجديدة على كل كرة بعد عودتها إلى المسافة r؟",
    "explain": "عند التلامس: الشحنة الكلية = $8Q + (-2Q) = 6Q$. بعد فصل الكرتين (نفس الحجم)، تتوزع الشحنة بالتساوي: كل كرة تحصل على $\\frac{6Q}{2} = 3Q$"
  },
  {
    "id": 8,
    "text": "SI unit of permittivity of free space is",
    "image": null,
    "options": [
      "$C^2 N^{-2} m^{-1}$",
      "$C^2 N^{-1} m^{-2}$",
      "$C^2 N m^2$",
      "$C N^{-1} m^{-2}$"
    ],
    "correct": 1,
    "translate": "وحدة SI لسماحية الفراغ هي",
    "explain": "سماحية الفراغ $\\epsilon_0$ لها وحدة $C^2/(N \\cdot m^2) = C^{2}N^{-1}m^{-2}$"
  },
  {
    "id": 9,
    "text": "Where an electric charge experiences a force, there is an ……",
    "image": null,
    "options": [
      "Electric Field",
      "Magnetic Field",
      "Electric current",
      "Conventional current"
    ],
    "correct": 0,
    "translate": "حيثما تشعر شحنة كهربائية بقوة، يوجد ……",
    "explain": "المجال الكهربائي هو المنطقة المحيطة بالشحنة حيث تؤثر بقوة على الشحنات الأخرى"
  },
  {
    "id": 10,
    "text": "The force between two charges is 120 N. If the distance between the charges is doubled, the force will be",
    "image": null,
    "options": ["60 N", "30 N", "40 N", "15 N"],
    "correct": 1,
    "translate": "القوة بين شحنتين هي 120 N. إذا تضاعفت المسافة بين الشحنتين، فستصبح القوة",
    "explain": "$F \\propto \\frac{1}{r^2}$، إذا أصبحت $r' = 2r$، فإن $F' = \\frac{F}{4} = \\frac{120}{4} = 30$ N"
  }
]
},
{
id: 2,
title: "Assignment 2",
questions:[
  {
    "id": 1,
    "text": "What is the magnitude of the electric field 30.0 cm from a point charge of 0.35 $\\mu$C?",
    "image": null,
    "options": [
      "$1.2 \\times 10^{-2}$ N/C",
      "$9.5 \\times 10^{4}$ N/C",
      "$3.5 \\times 10^{4}$ N/C",
      "$1.1 \\times 10^{4}$ N/C"
    ],
    "correct": 2,
    "translate": "ما هو مقدار المجال الكهربائي على بعد 30.0 سم من شحنة نقطية مقدارها 0.35 $\\mu$C؟",
    "explain": "$E = \\frac{kQ}{r^2} = \\frac{(9\\times10^9)(0.35\\times10^{-6})}{(0.30)^2} = 3.5\\times10^4$ N/C"
  },
  {
    "id": 2,
    "text": "The electric field has a magnitude of 3.00 N/C at a distance of 60.0 cm from a point charge. What is the charge?",
    "image": null,
    "options": [
      "3.00 nC",
      "1.40 nC",
      "120 pC",
      "12.0 $\\mu$C",
      "36.0 mC"
    ],
    "correct": 2,
    "translate": "المجال الكهربائي مقداره 3.00 N/C على بعد 60.0 سم من شحنة نقطية. ما هي الشحنة؟",
    "explain": "$E = \\frac{kQ}{r^2} \\Rightarrow Q = \\frac{Er^2}{k} = \\frac{(3.00)(0.60)^2}{9\\times10^9} = 1.2\\times10^{-10}$ C = 120 pC"
  },
  {
    "id": 3,
    "text": "A 3.7 pC charge experiences a force of $8.1 \\times 10^{-7}$ N in an electric field. What is the magnitude of the electric field?",
    "image": null,
    "options": [
      "$1.2 \\times 10^{-3}$ N/C",
      "$3.00 \\times 10^{5}$ N/C",
      "12 N/C",
      "$4.3 \\times 10^{-6}$ N/C",
      "$2.2 \\times 10^{5}$ N/C"
    ],
    "correct": 4,
    "translate": "شحنة مقدارها 3.7 pC تتعرض لقوة مقدارها $8.1 \\times 10^{-7}$ N في مجال كهربائي. ما هو مقدار المجال الكهربائي؟",
    "explain": "$E = \\frac{F}{q} = \\frac{8.1\\times10^{-7}}{3.7\\times10^{-12}} = 2.19\\times10^{5}$ N/C ≈ $2.2 \\times 10^{5}$ N/C"
  },
  {
    "id": 4,
    "text": "In a diagram of electric field lines, what is represented by lines that are drawn closer together?",
    "image": null,
    "options": [
      "a more positive field",
      "a more negative field",
      "nothing (artistic license)",
      "a stronger field",
      "a weaker field"
    ],
    "correct": 3,
    "translate": "في رسم تخطيطي لخطوط المجال الكهربائي، ماذا تمثل الخطوط المرسومة بالقرب من بعضها؟",
    "explain": "كلما كانت خطوط المجال الكهربائي أقرب إلى بعضها، كان المجال أقوى في تلك المنطقة"
  },
  {
    "id": 5,
    "text": "In a diagram of electric field lines, q1 has 9 lines going into it and q2 has 27 lines going out of it. If one of the charges is $-40$ mC, which of the following could be the other one?",
    "image": null,
    "options": [
      "18.0 mC",
      "120 mC",
      "$-120$ mC",
      "$-18.0$ mC",
      "none of these choices are correct"
    ],
    "correct": 1,
    "translate": "في رسم تخطيطي لخطوط المجال الكهربائي، q1 لديه 9 خطوط تدخل إليه وq2 لديه 27 خطاً تخرج منه. إذا كانت إحدى الشحنتين $-40$ mC، فما هي الشحنة الأخرى؟",
    "explain": "عدد خطوط المجال يتناسب مع مقدار الشحنة. $q_1$ سالبة (خطوط تدخل)، $q_2$ موجبة (خطوط تخرج). النسبة: $\\frac{q_1}{q_2} = \\frac{-9}{27} = -\\frac{1}{3}$. إذا كانت $q_1 = -40$ mC، فإن $q_2 = 120$ mC"
  },
  {
    "id": 6,
    "text": "A proton is moving in an electric field. The direction of the acceleration of the proton is",
    "image": null,
    "options": [
      "in the direction the proton is moving.",
      "perpendicular to the direction the proton is moving.",
      "in the direction of the electric field.",
      "opposite the direction of the electric field.",
      "opposite the direction the proton is moving."
    ],
    "correct": 2,
    "translate": "بروتون يتحرك في مجال كهربائي. اتجاه تسارع البروتون هو",
    "explain": "القوة على البروتون الموجب: $\\vec{F} = q\\vec{E}$، واتجاه التسارع نفس اتجاه القوة، أي اتجاه المجال الكهربائي"
  },
  {
    "id": 7,
    "text": "A long wire with uniform linear charge density 1.35 nC/m is surrounded by a concentric cylindrical surface of length 1.60 m and radius 23.6 cm. What is the magnitude of the electric field at the curved surface of the cylinder?",
    "image": null,
    "options": [
      "51.5 N/C",
      "103 N/C",
      "0.0",
      "436 N/C",
      "135 N/C"
    ],
    "correct": 1,
    "translate": "سلك طويل بكثافة شحنة خطية منتظمة 1.35 nC/m محاط بسطح أسطواني متحد المركز طوله 1.60 م ونصف قطره 23.6 سم. ما هو مقدار المجال الكهربائي على السطح المنحني للأسطوانة؟",
    "explain": "لشحنة خطية طويلة: $E = \\frac{\\lambda}{2\\pi\\epsilon_0 r} = \\frac{1.35\\times10^{-9}}{2\\pi(8.85\\times10^{-12})(0.236)} = 103$ N/C"
  },
  {
    "id": 8,
    "text": "A conducting sphere of radius 10.0 cm holds a net charge of 4.4 $\\mu$C. What is the surface charge density?",
    "image": null,
    "options": [
      "$1.1 \\times 10^{-5}$ C/m$^2$",
      "$5.6 \\times 10^{-3}$ C/m$^2$",
      "$3.5 \\times 10^{-5}$ C/m$^2$",
      "0.0",
      "$2.2 \\times 10^{-4}$ C/m$^2$"
    ],
    "correct": 2,
    "translate": "كرة موصلة نصف قطرها 10.0 سم تحمل شحنة صافية 4.4 $\\mu$C. ما هي كثافة الشحنة السطحية؟",
    "explain": "$\\sigma = \\frac{Q}{4\\pi r^2} = \\frac{4.4\\times10^{-6}}{4\\pi(0.10)^2} = 3.5\\times10^{-5}$ C/m$^2$"
  },
  {
    "id": 9,
    "text": "What is the total electric flux through a closed surface containing a 2.0 $\\mu$C charge?",
    "image": null,
    "options": [
      "0",
      "$1.8 \\times 10^{4}$ N·m$^2$/C",
      "$2.3 \\times 10^{5}$ N·m$^2$/C",
      "$1.4 \\times 10^{5}$ N·m$^2$/C",
      "$4.5 \\times 10^{3}$ N·m$^2$/C"
    ],
    "correct": 2,
    "translate": "ما هو إجمالي التدفق الكهربائي عبر سطح مغلق يحتوي على شحنة 2.0 $\\mu$C؟",
    "explain": "$\\Phi = \\frac{Q_{\\text{enc}}}{\\epsilon_0} = \\frac{2.0\\times10^{-6}}{8.85\\times10^{-12}} = 2.26\\times10^{5}$ N·m$^2$/C"
  },
  {
    "id": 10,
    "text": "We find from Gauss's law that the flux through a closed surface",
    "image": null,
    "options": [
      "is zero.",
      "is less the larger the closed surface.",
      "is proportional to the net charge enclosed.",
      "is proportional to the square root of the charge enclosed.",
      "is inversely proportional to the net charge enclosed."
    ],
    "correct": 2,
    "translate": "نجد من قانون غاوس أن التدفق عبر سطح مغلق",
    "explain": "قانون غاوس: $\\Phi = \\frac{Q_{\\text{enc}}}{\\epsilon_0}$، أي أن التدفق يتناسب مع الشحنة المحصورة"
  },
  {
    "id": 11,
    "text": "An electric dipole is surrounded by a closed surface with the surface nearer to the negative end of the dipole than the positive end. The flux through the surface is",
    "image": null,
    "options": [
      "inversely proportional to the positive charge.",
      "negative.",
      "proportional to the negative charge.",
      "positive.",
      "zero."
    ],
    "correct": 4,
    "translate": "ثنائي القطب الكهربائي محاط بسطح مغلق يكون السطح أقرب إلى الطرف السالب للثنائي القطبي من الطرف الموجب. التدفق عبر السطح هو",
    "explain": "الشحنة الكلية المحصورة للثنائي القطبي تساوي صفراً، لذلك التدفق الكلي عبر أي سطح مغلق يساوي صفراً"
  },
  {
    "id": 12,
    "text": "The symbols $\\rho$, $\\lambda$, and $\\sigma$ are used to represent, respectively, the charge density per unit",
    "image": null,
    "options": [
      "area, length, and volume.",
      "length, volume, and area.",
      "volume, length, and area.",
      "volume, area, and length.",
      "area, volume, and length."
    ],
    "correct": 2,
    "translate": "الرموز $\\rho$, $\\lambda$, و $\\sigma$ تستخدم لتمثيل، على التوالي، كثافة الشحنة لكل وحدة",
    "explain": "$\\rho$: كثافة الشحنة الحجمية (C/m³)، $\\lambda$: كثافة الشحنة الخطية (C/m)، $\\sigma$: كثافة الشحنة السطحية (C/m²)"
  }
]
},
{
id: 3,
title: "Assignment 3",
questions: [
  {
    "id": 1,
    "text": "Which one of the following is the unit of electric field?",
    "image": null,
    "options": ["Coulomb", "Newton", "Volt", "N/C"],
    "correct": 3,
    "translate": "أي مما يلي هو وحدة المجال الكهربائي؟",
    "explain": "وحدة المجال الكهربائي هي نيوتن/كولوم (N/C)"
  },
  {
    "id": 2,
    "text": "Three charges $+3q$, $+q$, and $Q$ are placed on a straight line with equal separation. In order to make the net force on $q$ to be zero, the value of $Q$ will be:",
    "image": null,
    "options": ["$+3q$", "$+2q$", "$-3q$", "$-4q$"],
    "correct": 2,
    "translate": "ثلاث شحنات $+3q$, $+q$, و $Q$ موضوعة على خط مستقيم بنفس المسافة. لجعل القوة المحصلة على $q$ صفراً، قيمة $Q$ ستكون:",
    "explain": "لجعل القوة المحصلة على $q$ صفراً، يجب أن تكون القوة من $+3q$ مساوية ومعاكسة للقوة من $Q$. $\\frac{k(3q)(q)}{r^2} = \\frac{k(Q)(q)}{(2r)^2} \\Rightarrow Q = -3q$"
  },
  {
    "id": 3,
    "text": "The conventional direction of electric field is……",
    "image": null,
    "options": [
      "Positive to negative",
      "Negative to positive",
      "No specific direction",
      "Direction cannot be determined"
    ],
    "correct": 0,
    "translate": "الاتجاه التقليدي للمجال الكهربائي هو……",
    "explain": "الاتجاه التقليدي للمجال الكهربائي هو من الشحنة الموجبة إلى الشحنة السالبة"
  },
  {
    "id": 4,
    "text": "Electric field originates at ………",
    "image": null,
    "options": [
      "Positive charge",
      "Negative charge",
      "Neither positive nor negative",
      "Both positive and negative"
    ],
    "correct": 0,
    "translate": "ينشأ المجال الكهربائي عند ………",
    "explain": "خطوط المجال الكهربائي تبدأ من الشحنات الموجبة"
  },
  {
    "id": 5,
    "text": "Electric field terminates at ……",
    "image": null,
    "options": [
      "Positive charge",
      "Negative charge",
      "Neither positive nor negative",
      "Both positive and negative"
    ],
    "correct": 1,
    "translate": "ينتهي المجال الكهربائي عند ……",
    "explain": "خطوط المجال الكهربائي تنتهي عند الشحنات السالبة"
  },
  {
    "id": 6,
    "text": "Which among the following statements is true with regard to electric field lines?",
    "image": null,
    "options": [
      "Electric field lines always intersect",
      "Electric field lines may or may not intersect",
      "Electric field lines can be seen",
      "Electric field lines never intersect"
    ],
    "correct": 3,
    "translate": "أي من العبارات التالية صحيحة فيما يتعلق بخطوط المجال الكهربائي؟",
    "explain": "خطوط المجال الكهربائي لا تتقاطع أبداً، لأن ذلك سيعني وجود اتجاهين للمجال عند نفس النقطة"
  },
  {
    "id": 7,
    "text": "In uniform fields, all points have ……… field strength.",
    "image": null,
    "options": ["Zero", "Same", "Infinity", "Different"],
    "correct": 1,
    "translate": "في المجالات المنتظمة، جميع النقاط لها ……… شدة مجال.",
    "explain": "في المجال الكهربائي المنتظم، تكون شدة المجال متساوية عند جميع النقاط"
  },
  {
    "id": 8,
    "text": "Which, among the following is the correct expression for an electric field?",
    "image": null,
    "options": ["$E=F/C$", "$E=F*C$", "$E=F/Q$", "$E=F*Q$"],
    "correct": 2,
    "translate": "أي مما يلي هو التعبير الصحيح للمجال الكهربائي؟",
    "explain": "$\\vec{E} = \\frac{\\vec{F}}{q}$، حيث $F$ هي القوة و $q$ هي الشحنة"
  },
  {
    "id": 9,
    "text": "Which of the following statements is not true about Gauss's law?",
    "image": null,
    "options": [
      "Gauss's law is true for any closed surface.",
      "The term q on the right side of Gauss's law includes the sum of all charges enclosed by the surface.",
      "Gauss's law is not much useful in calculating electrostatic field when the system has some symmetry.",
      "Gauss's law is based on the inverse square dependence on distance contained in the Coulomb's law."
    ],
    "correct": 2,
    "translate": "أي من العبارات التالية غير صحيحة حول قانون غاوس؟",
    "explain": "قانون غاوس يكون أكثر فائدة عندما يكون للنظام تماثل، ليس أقل فائدة"
  },
  {
    "id": 10,
    "text": "Electric field lines provide information about ………",
    "image": null,
    "options": ["field strength", "direction", "nature of charge", "all of these"],
    "correct": 3,
    "translate": "توفر خطوط المجال الكهربائي معلومات عن ………",
    "explain": "خطوط المجال الكهربائي توفر معلومات عن: شدة المجال (كثافة الخطوط)، الاتجاه (اتجاه الخطوط)، ونوع الشحنة (تبدأ من موجبة وتنتهي عند سالبة)"
  },
  {
    "id": 11,
    "text": "The SI unit of electric flux is ……..",
    "image": null,
    "options": ["$N C^{-1} m^{-2}$", "$N C m^{-2}$", "$N C^{-2} m^{2}$", "$N C^{-1} m^{2}$"],
    "correct": 3,
    "translate": "وحدة SI للتدفق الكهربائي هي ……..",
    "explain": "التدفق الكهربائي $\\Phi_E = \\vec{E} \\cdot \\vec{A}$، وحدة $E$ هي $N/C$، وحدة $A$ هي $m^2$، إذن وحدة التدفق هي $N \\cdot m^2 / C = N C^{-1} m^{2}$"
  },
  {
    "id": 12,
    "text": "Consider a region inside which, there are various types of charges, but the total charge is zero. At points outside the region",
    "image": null,
    "options": [
      "the electric field is necessarily zero.",
      "the electric field is due to the dipole moment of the charge distribution only.",
      "the dominant electric field is inversely proportional to $r^{3}$, (distance from origin).",
      "the work done to move a charged particle along a closed path, away from the region will not be zero."
    ],
    "correct": 2,
    "translate": "افترض منطقة تحتوي على أنواع مختلفة من الشحنات، لكن الشحنة الكلية صفر. عند نقاط خارج المنطقة",
    "explain": "عندما تكون الشحنة الكلية صفراً ولكن هناك توزيع شحنات، يكون المجال الكهربائي المهيمن متناسباً عكسياً مع $r^3$ (مثل ثنائي القطب)"
  },
  {
    "id": 13,
    "text": "SI unit of permittivity of free space is ……",
    "image": null,
    "options": ["Farad", "Weber", "$C^{2}N^{-1} m^{-2}$", "$N m^{2}C^{-2}$"],
    "correct": 2,
    "translate": "وحدة SI لسماحية الفراغ هي ……",
    "explain": "سماحية الفراغ $\\epsilon_0$ لها وحدة $C^2/(N \\cdot m^2) = C^{2}N^{-1} m^{-2}$"
  },
  {
    "id": 14,
    "text": "A point charge Q is far from all other charges. At a distance of 2 m from Q, the electric field is 20 N/C. What is the force a charge of 5 Coulombs feels?",
    "image": null,
    "options": ["4 N", "100 N", "40 N", "10 N"],
    "correct": 1,
    "translate": "شحنة نقطية Q بعيدة عن جميع الشحنات الأخرى. على بعد 2 متر من Q، المجال الكهربائي هو 20 N/C. ما هي القوة التي تشعر بها شحنة 5 كولوم؟",
    "explain": "$F = qE = 5 \\times 20 = 100$ N"
  },
  {
    "id": 15,
    "text": "An electrostatic force of $2 \\times 10^{2}$ newtons is exerted on a charge of 4 coulomb at point P in an electric field. The magnitude of the electric field intensity at P is",
    "image": null,
    "options": ["$8 \\times 10^{2}$ N/C", "5 N/C", "$2 \\times 10^{-2}$ N/C", "50 N/C"],
    "correct": 3,
    "translate": "قوة كهروستاتيكية مقدارها $2 \\times 10^{2}$ نيوتن تؤثر على شحنة 4 كولوم عند النقطة P في مجال كهربائي. مقدار شدة المجال الكهربائي عند P هو",
    "explain": "$E = \\frac{F}{q} = \\frac{2 \\times 10^{2}}{4} = 50$ N/C"
  },
  {
    "id": 16,
    "text": "$Q_A$ and $Q_B$ are two charges creating an electric field. Based on the electric field lines, we can conclude",
    "image": null,
    "options": [
      "$Q_A$ and $Q_B$ are both positive",
      "$Q_A$ and $Q_B$ are both negative",
      "$Q_A$ is positive and $Q_B$ is negative",
      "$Q_A$ is negative and $Q_B$ is positive"
    ],
    "correct": 2,
    "translate": "$Q_A$ و $Q_B$ هما شحنتان تشكلان مجالاً كهربائياً. بناءً على خطوط المجال الكهربائي، يمكننا استنتاج",
    "explain": "خطوط المجال تبدأ من الشحنة الموجبة ($Q_A$) وتنتهي عند الشحنة السالبة ($Q_B$)"
  },
  {
    "id": 17,
    "text": "Gauss Law states that the total electric flux out of a closed surface is equal to the charge enclosed divided by the permittivity.",
    "image": null,
    "options": ["True", "False", "Can be true or false", "Can not say"],
    "correct": 0,
    "translate": "ينص قانون غاوس على أن إجمالي التدفق الكهربائي خارج سطح مغلق يساوي الشحنة المحصورة مقسومة على السماحية.",
    "explain": "$\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enc}}}{\\epsilon_0}$"
  },
  {
    "id": 18,
    "text": "In Gauss law formula, $Q$ stands for?",
    "image": null,
    "options": [
      "The electric constant",
      "Total charge within the given surface",
      "Magnetic field",
      "None of these"
    ],
    "correct": 1,
    "translate": "في صيغة قانون غاوس، $Q$ ترمز إلى؟",
    "explain": "$Q$ في قانون غاوس هي الشحنة الكلية المحصورة داخل السطح المغلق"
  },
  {
    "id": 19,
    "text": "If there are no charges enclosed by a surface, then the net electric flux?",
    "image": null,
    "options": ["1", "-1", "0", "infinite"],
    "correct": 2,
    "translate": "إذا لم تكن هناك شحنات محصورة داخل سطح، فإن صافي التدفق الكهربائي؟",
    "explain": "إذا كانت $Q_{\\text{enc}} = 0$، فإن $\\Phi_E = 0$"
  },
  {
    "id": 20,
    "text": "The Gaussian surface for a line charge will be……",
    "image": null,
    "options": ["Sphere", "Cube", "Cylinder", "Rectangle"],
    "correct": 2,
    "translate": "سطح غاوس لشحنة خطية سيكون……",
    "explain": "لسلك طويل مشحون (شحنة خطية)، يكون سطح غاوس المناسب هو أسطوانة متحدة المحور مع السلك"
  },
  {
    "id": 21,
    "text": "In Gauss Theorem, Number of electric field lines entering the surface is ……….. the field lines leaving the surface.",
    "image": null,
    "options": ["Greater than", "Less than", "Equal to", "None of these"],
    "correct": 2,
    "translate": "في نظرية غاوس، عدد خطوط المجال الكهربائي الداخلة إلى السطح ……….. خطوط المجال الخارجة من السطح.",
    "explain": "في السطح المغلق، عدد خطوط المجال الداخلة يساوي عدد خطوط المجال الخارجة إذا لم تكن هناك شحنات محصورة"
  },
  {
    "id": 22,
    "text": "A uniformly charged conducting sphere of 4.4 m diameter has a surface charge density of 60 $\\mu$C m$^{-2}$. The charge on the sphere is",
    "image": null,
    "options": [
      "$7.3 \\times 10^{-3}$ C",
      "$3.7 \\times 10^{-6}$ C",
      "$7.3 \\times 10^{-6}$ C",
      "$3.7 \\times 10^{-3}$ C"
    ],
    "correct": 3,
    "translate": "كرة موصلة مشحونة بشكل منتظم قطرها 4.4 متر وكثافة شحنتها السطحية 60 $\\mu$C m$^{-2}$. الشحنة على الكرة هي",
    "explain": "$Q = \\sigma A = \\sigma (4\\pi r^2) = (60 \\times 10^{-6}) \\times (4\\pi \\times (2.2)^2) = 3.7 \\times 10^{-3}$ C"
  },
  {
    "id": 23,
    "text": "A point charge 2nC is located at origin. What is the potential at (1,0,0)?",
    "image": null,
    "options": ["12 V", "14 V", "16 V", "18 V"],
    "correct": 3,
    "translate": "شحنة نقطية 2nC موجودة عند نقطة الأصل. ما هو الجهد عند النقطة (1,0,0)؟",
    "explain": "$V = \\frac{kQ}{r} = \\frac{(9 \\times 10^9) \\times (2 \\times 10^{-9})}{1} = 18$ V"
  },
  {
    "id": 24,
    "text": "How much work is done in moving a charge of 2C across two points having a potential difference of 5V?",
    "image": null,
    "options": ["0.4 J", "2.5 J", "10 J", "20 J"],
    "correct": 2,
    "translate": "ما مقدار الشغل المبذول في تحريك شحنة 2C بين نقطتين لهما فرق جهد 5V؟",
    "explain": "$W = q \\Delta V = 2 \\times 5 = 10$ J"
  },
  {
    "id": 25,
    "text": "1 volt is equivalent to ……",
    "image": null,
    "options": ["Newton/sec", "Newton/Coulomb", "Joule/Coulomb", "Joule/sec"],
    "correct": 2,
    "translate": "1 فولت يعادل ……",
    "explain": "$V = \\frac{W}{q}$، إذن 1 فولت = 1 جول/كولوم"
  },
  {
    "id": 26,
    "text": "If the charge is placed at infinity, its potential is",
    "image": null,
    "options": ["zero", "infinite", "1", "-1"],
    "correct": 0,
    "translate": "إذا وضعت الشحنة عند اللانهاية، فإن جهدها هو",
    "explain": "يتم تعريف الجهد عند اللانهاية بأنه صفر"
  },
  {
    "id": 27,
    "text": "If we move a positive charge to a positive plate, then potential energy of charge is……",
    "image": null,
    "options": ["decreased", "increased", "remains constant", "dissipated"],
    "correct": 1,
    "translate": "إذا حركنا شحنة موجبة نحو صفيحة موجبة، فإن طاقة الوضع للشحنة……",
    "explain": "تتنافر الشحنات المتشابهة، لذا يلزم شغل لنقل شحنة موجبة نحو صفيحة موجبة، مما يزيد من طاقة الوضع"
  },
  {
    "id": 28,
    "text": "Two isolated metallic spheres, one with a radius R and another with a radius 3R, each carries a charge Q uniformly distributed over the entire surface. Which sphere stores more electric energy (U)?",
    "image": null,
    "options": [
      "the smaller sphere",
      "the larger sphere",
      "both have the same energy",
      "needs more information"
    ],
    "correct": 0,
    "translate": "كرتان معدنيتان معزولتان، واحدة نصف قطرها R والأخرى نصف قطرها 3R، كل منهما تحمل شحنة Q موزعة بشكل منتظم على السطح بأكمله. أي كرة تخزن طاقة كهربائية (U) أكثر؟",
    "explain": "$U = \\frac{Q^2}{2C}$، و $C = 4\\pi\\epsilon_0 R$، إذن $U \\propto \\frac{1}{R}$، لذا الكرة الأصغر تخزن طاقة أكثر"
  },
  {
    "id": 29,
    "text": "The energy a charge-field system gains or loses when a charge of magnitude e is moved through a potential difference of 1 volt.",
    "image": null,
    "options": ["Potential energy", "Kinetic energy", "Electron-volt", "Electrical power"],
    "correct": 2,
    "translate": "الطاقة التي يكتسبها أو يخسرها نظام شحنة-مجال عندما تتحرك شحنة مقدارها e عبر فرق جهد 1 فولت.",
    "explain": "الإلكترون فولت (eV) هو وحدة طاقة تساوي الطاقة المكتسبة عندما يتحرك إلكترون عبر فرق جهد 1 فولت"
  },
  {
    "id": 30,
    "text": "Gauss's Law can be represented as …",
    "image": null,
    "options": [
      "$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{in}}{\\epsilon_0}$",
      "$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{\\epsilon_0}{q_{in}}$",
      "$\\oint \\phi \\cdot d\\vec{A} = \\frac{q_{in}}{\\epsilon_0}$",
      "$\\oint \\phi \\cdot d\\vec{A} = \\frac{\\epsilon_0}{q_{in}}$"
    ],
    "correct": 0,
    "translate": "يمكن تمثيل قانون غاوس كـ …",
    "explain": "قانون غاوس: $\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enc}}}{\\epsilon_0}$"
  }
]
},
{
id: 4,
title: "Assignment 4",
questions: [
  {
    "id": 1,
    "text": "Doubling both charges changes the potential energy for a pair of point charges by a factor of",
    "image": null,
    "options": ["2", "4", "1/2", "1/4", "1 (no change)"],
    "correct": 1,
    "translate": "مضاعفة كلتا الشحنتين تغير طاقة الوضع لزوج من الشحنات النقطية بعامل",
    "explain": "$U = \\frac{k q_1 q_2}{r}$، إذا تضاعفت $q_1$ و $q_2$، تصبح $U' = \\frac{k (2q_1)(2q_2)}{r} = 4U$"
  },
  {
    "id": 2,
    "text": "Tripling the separation between charges changes the potential energy of a pair of point charges by a factor of",
    "image": null,
    "options": ["3", "9", "1/3", "1/9", "1 (no change)"],
    "correct": 2,
    "translate": "تضاعف المسافة بين الشحنات ثلاث مرات يغير طاقة الوضع لزوج من الشحنات النقطية بعامل",
    "explain": "$U = \\frac{k q_1 q_2}{r}$، إذا أصبحت $r' = 3r$، تصبح $U' = \\frac{k q_1 q_2}{3r} = \\frac{1}{3}U$"
  },
  {
    "id": 3,
    "text": "The potential energy of a 3.5 pC charge separated by 6.2 cm from a 16 µC charge is",
    "image": null,
    "options": [
      "1.3 × 10⁻⁷ J",
      "81 × 10⁻⁷ J",
      "1.2 × 10⁻⁵ J",
      "81 × 10⁻⁵ J",
      "1.0 × 10⁻⁵ J"
    ],
    "correct": 1,
    "translate": "طاقة الوضع لشحنة 3.5 pC مفصولة مسافة 6.2 cm عن شحنة 16 µC هي",
    "explain": "$U = \\frac{k q_1 q_2}{r} = \\frac{(9\\times10^9)(3.5\\times10^{-12})(16\\times10^{-6})}{0.062} = 8.1\\times10^{-6} \\ \\text{J} = 81\\times10^{-7} \\ \\text{J}$"
  },
  {
    "id": 4,
    "text": "The SI unit for electric potential energy is equivalent to",
    "image": null,
    "options": ["N·m²", "V·C", "N/m", "C·m²", "none of these choices are correct"],
    "correct": 1,
    "translate": "وحدة SI لطاقة الوضع الكهربائية تعادل",
    "explain": "$U = qV$، وحدة $U$ هي جول (J) = كولوم × فولت = C·V"
  },
  {
    "id": 5,
    "text": "Three point charges, $q_1 = 2.0 \\ \\mu\\text{C}$, $q_2 = 2.0 \\ \\mu\\text{C}$, and $q_3 = -1.0 \\ \\mu\\text{C}$, are located at the vertices of an equilateral triangle of side length 30 cm. What is the potential energy of this arrangement?",
    "image": null,
    "options": ["0.24 J", "0.12 J", "$-0.24$ J", "$-0.12$ J", "0"],
    "correct": 4,
    "translate": "ثلاث شحنات نقطية، $q_1 = 2.0 \\ \\mu\\text{C}$, $q_2 = 2.0 \\ \\mu\\text{C}$, و $q_3 = -1.0 \\ \\mu\\text{C}$، موضوعة عند رؤوس مثلث متساوي الأضلاع طول ضلعه 30 سم. ما هي طاقة الوضع لهذا الترتيب؟",
    "explain": "$U = k\\left(\\frac{q_1 q_2 + q_2 q_3 + q_3 q_1}{r}\\right) = 9\\times10^9\\times\\frac{(4 + (-2) + (-2))\\times10^{-12}}{0.3} = 0 \\ \\text{J}$"
  },
  {
    "id": 6,
    "text": "Three point charges, $q_1$, $q_2$, and $q_3$, are located at the vertices of an equilateral triangle. If $q_1 = q_2$, what value must $q_3$ have so that the total potential energy of the arrangement is zero?",
    "image": null,
    "options": ["$q_1$", "$0.5 q_1$", "$-0.5 q_1$", "$(q_1 + q_2)/2$", "no value will have this result"],
    "correct": 2,
    "translate": "ثلاث شحنات نقطية، $q_1$, $q_2$, و $q_3$، موضوعة عند رؤوس مثلث متساوي الأضلاع. إذا كانت $q_1 = q_2$، فما القيمة التي يجب أن تكون عليها $q_3$ بحيث تكون طاقة الوضع الكلية للترتيب صفر؟",
    "explain": "$U_{\\text{total}} = 0 \\Rightarrow q_1 q_2 + q_2 q_3 + q_3 q_1 = 0 \\Rightarrow q_1^2 + 2q_1 q_3 = 0 \\Rightarrow q_3 = -\\frac{q_1}{2}$"
  },
  {
    "id": 7,
    "text": "The unit of electric potential, the volt, is equal to a",
    "image": null,
    "options": ["C-N", "$\\text{C}^2\\text{-N/s}$", "$\\text{J}^2/\\text{C}$", "$\\text{J}/\\text{C}$", "$\\text{J}/\\text{C}^2$"],
    "correct": 3,
    "translate": "وحدة الجهد الكهربائي، الفولت، تساوي",
    "explain": "$V = \\frac{U}{q}$، وحدة $V$ هي جول/كولوم = J/C"
  },
  {
    "id": 8,
    "text": "A 2.5-mC charge is on the y-axis at $y = 3.0 \\ \\text{m}$, and a 6.3-mC charge is on the x-axis at $x = 3.0 \\ \\text{m}$. What is the direction of the electric potential at the origin?",
    "image": null,
    "options": ["$22.0^\\circ$", "$168^\\circ$", "$292^\\circ$", "$332^\\circ$", "potential has no direction"],
    "correct": 4,
    "translate": "شحنة 2.5-mC على محور y عند $y = 3.0 \\ \\text{m}$، وشحنة 6.3-mC على محور x عند $x = 3.0 \\ \\text{m}$. ما هو اتجاه الجهد الكهربائي عند نقطة الأصل؟",
    "explain": "الجهد الكهربائي كمية قياسية (ليس له اتجاه)."
  },
  {
    "id": 9,
    "text": "A 3.6 µC charge is moved from a position where its electric potential energy is 7.2 mJ to a position where its potential energy is 1.8 mJ. What is the potential at the first position?",
    "image": null,
    "options": ["1500 V", "2000 V", "-2000 V", "3500 V", "-1500 V"],
    "correct": 1,
    "translate": "شحنة 3.6 µC انتقلت من موضع حيث طاقتها الوضعية الكهربائية 7.2 mJ إلى موضع حيث طاقتها الوضعية 1.8 mJ. ما هو الجهد عند الموضع الأول؟",
    "explain": "$V = \\frac{U}{q} = \\frac{7.2\\times10^{-3}}{3.6\\times10^{-6}} = 2000 \\ \\text{V}$"
  },
  {
    "id": 10,
    "text": "What is the potential at a distance of 0.0529 nm from a proton?",
    "image": null,
    "options": ["13.6 V", "-13.6 V", "27.2 V", "-27.2 V", "911 pC"],
    "correct": 2,
    "translate": "ما هو الجهد على بعد 0.0529 nm من بروتون؟",
    "explain": "$V = \\frac{kq}{r} = \\frac{(9\\times10^9)(1.6\\times10^{-19})}{0.0529\\times10^{-9}} = 27.2 \\ \\text{V}$"
  },
  {
    "id": 11,
    "text": "How much charge is on a conducting sphere of diameter 20 µm if its surface potential is 50 mV?",
    "image": null,
    "options": [
      "5.6 × 10⁻¹⁷ C",
      "1.1 × 10⁻¹⁴ C",
      "2.8 × 10⁻¹⁵ C",
      "3.6 × 10⁻¹⁶ C",
      "none of these"
    ],
    "correct": 0,
    "translate": "ما مقدار الشحنة على كرة موصلة قطرها 20 µm إذا كان جهد سطحها 50 mV؟",
    "explain": "للكرة الموصلة: $V = \\frac{kQ}{r}$، $r = 10 \\ \\mu\\text{m} = 10^{-5} \\ \\text{m}$، $Q = \\frac{Vr}{k} = \\frac{(0.050)(10^{-5})}{9\\times10^9} = 5.56\\times10^{-17} \\ \\text{C}$"
  },
  {
    "id": 12,
    "text": "An air-filled parallel plate capacitor has plates of area 100 cm$^2$ and separation 0.25 mm. What is its capacitance?",
    "image": null,
    "options": ["40 nF", "0.35 nF", "4.4 µF", "88 pF", "88 µF"],
    "correct": 1,
    "translate": "مكثف ذو صفيحتين متوازيتين مملوء بالهواء، مساحة الصفيحتين 100 cm$^2$ والتباعد 0.25 mm. ما هي سعته؟",
    "explain": "$C = \\frac{\\epsilon_0 A}{d} = \\frac{(8.85\\times10^{-12})(0.01)}{0.25\\times10^{-3}} = 3.54\\times10^{-10} \\ \\text{F} = 0.354 \\ \\text{nF}$"
  },
  {
    "id": 13,
    "text": "A parallel plate capacitor has a paper dielectric having dielectric strength 8.0 kV/mm and dielectric constant 3.0. The plate area is 3000 cm$^2$ and the plate separation is 0.50 mm. What is the capacitance?",
    "image": null,
    "options": ["16 nF", "4.2 nF", "5.3 nF", "1.6 nF", "4.2 pF"],
    "correct": 0,
    "translate": "مكثف ذو صفيحتين متوازيتين به عازل ورقي قوة عزل 8.0 كيلوفولت/مم وثابت عزل 3.0. مساحة الصفيحة 3000 سم$^2$ والتباعد بين الصفيحتين 0.50 مم. ما هي السعة؟",
    "explain": "$C = \\kappa \\frac{\\epsilon_0 A}{d} = 3 \\times \\frac{(8.85\\times10^{-12})(0.3)}{0.5\\times10^{-3}} = 1.59\\times10^{-8} \\ \\text{F} = 16 \\ \\text{nF}$"
  },
  {
    "id": 14,
    "text": "The unit F, the farad, is equal to which of the following?",
    "image": null,
    "options": ["V/m", "V/C", "V²/C", "C/V", "C/V²"],
    "correct": 3,
    "translate": "وحدة F، الفاراد، تساوي أي مما يلي؟",
    "explain": "$C = \\frac{Q}{V}$، وحدة الفاراد هي كولوم/فولت = C/V"
  },
  {
    "id": 15,
    "text": "A parallel plate capacitor has a paper dielectric having dielectric strength 8.00 kV/mm and dielectric constant 3.00. The plate area is 3000 cm$^2$ and the plate separation is 0.500 mm. If 10.0 V are applied to this capacitor, what is the charge on the capacitor?",
    "image": null,
    "options": ["50.0 µC", "42.0 nC", "159 nC", "16.0 nC", "42.0 µC"],
    "correct": 2,
    "translate": "مكثف ذو صفيحتين متوازيتين به عازل ورقي قوة عزل 8.00 كيلوفولت/مم وثابت عزل 3.00. مساحة الصفيحة 3000 سم$^2$ والتباعد بين الصفيحتين 0.500 مم. إذا تم تطبيق 10.0 V على هذا المكثف، فما هي الشحنة على المكثف؟",
    "explain": "$C = \\kappa \\frac{\\epsilon_0 A}{d} = 3 \\times \\frac{(8.85\\times10^{-12})(0.3)}{0.5\\times10^{-3}} = 1.59\\times10^{-8} \\ \\text{F}$، $Q = CV = (1.59\\times10^{-8})(10.0) = 1.59\\times10^{-7} \\ \\text{C} = 159 \\ \\text{nC}$"
  },
  {
    "id": 16,
    "text": "If the area of the plates of a parallel plate capacitor is tripled and the plate separation is halved, by what factor does the capacitance change?",
    "image": null,
    "options": [
      "It triples.",
      "It doubles.",
      "It increases by a factor of 6.",
      "It increases 1.5 times.",
      "It decreases to 2/3 the original."
    ],
    "correct": 2,
    "translate": "إذا تضاعفت مساحة صفائح مكثف ذي صفيحتين متوازيتين ثلاث مرات وانخفض التباعد بين الصفيحتين للنصف، بأي عامل تتغير السعة؟",
    "explain": "$C = \\frac{\\epsilon_0 A}{d}$، $A' = 3A$، $d' = \\frac{d}{2}$، $C' = \\frac{\\epsilon_0 (3A)}{d/2} = 6 \\frac{\\epsilon_0 A}{d} = 6C$"
  },
  {
    "id": 17,
    "text": "If the plate area, plate separation, and dielectric constant all are doubled for a parallel plate capacitor, what happens to the capacitance?",
    "image": null,
    "options": [
      "It stays the same.",
      "It doubles.",
      "It quadruples.",
      "It halves.",
      "It quarters."
    ],
    "correct": 1,
    "translate": "إذا تضاعفت مساحة الصفيحة والتباعد بين الصفيحتين وثابت العزل جميعًا لمكثف ذي صفيحتين متوازيتين، ماذا يحدث للسعة؟",
    "explain": "$C = \\kappa \\frac{\\epsilon_0 A}{d}$، $\\kappa' = 2\\kappa$، $A' = 2A$، $d' = 2d$، $C' = (2\\kappa) \\frac{\\epsilon_0 (2A)}{2d} = 2\\kappa \\frac{\\epsilon_0 A}{d} = 2C$"
  },
  {
    "id": 18,
    "text": "If the potential difference across the plates of a capacitor is doubled, what happens to the energy stored?",
    "image": null,
    "options": [
      "It stays the same.",
      "It doubles.",
      "It quadruples.",
      "It halves.",
      "It increases by a factor of 1.414."
    ],
    "correct": 2,
    "translate": "إذا تضاعف فرق الجهد عبر صفيحتي مكثف، ماذا يحدث للطاقة المخزنة؟",
    "explain": "$U = \\frac{1}{2} C V^2$، إذا أصبح $V' = 2V$، تصبح $U' = \\frac{1}{2} C (2V)^2 = 4 \\times \\frac{1}{2} C V^2 = 4U$"
  },
  {
    "id": 19,
    "text": "A 22 µF capacitor is charged to 100 V. What is the energy stored in the capacitor?",
    "image": null,
    "options": [
      "0.11 J",
      "0.22 J",
      "1.1 J",
      "0.011 J",
      "2.2 J"
    ],
    "correct": 0,
    "translate": "مكثف 22 µF مشحون إلى 100 V. ما هي الطاقة المخزنة في المكثف؟",
    "explain": "$U = \\frac{1}{2} C V^2 = \\frac{1}{2} (22\\times10^{-6})(100)^2 = 0.11 \\ \\text{J}$"
  },
  {
    "id": 20,
    "text": "To store 80 mJ of energy in a 100 µF capacitor, what voltage is necessary?",
    "image": null,
    "options": ["10 V", "45 V", "4.0 V", "40 V", "more than 120 V"],
    "correct": 3,
    "translate": "لتخزين 80 mJ من الطاقة في مكثف 100 µF، ما هو الجهد اللازم؟",
    "explain": "$U = \\frac{1}{2} C V^2 \\Rightarrow V = \\sqrt{\\frac{2U}{C}} = \\sqrt{\\frac{2(0.080)}{100\\times10^{-6}}} = 40 \\ \\text{V}$"
  }
]
},
{
id: 5,
title: "Assignment 5 (From 1 to 26 are included in Assignment 6.)",
questions: []
},
{
id: 6,
title: "Assignment 6",
questions: [
  {
    "id": 1,
    "text": "If 64 coulombs flow along a wire in 4.0 seconds, what is the average current?",
    "image": null,
    "options": ["64 A", "16 A", "32 A", "4.0 A", "none of these choices are correct"],
    "correct": 1,
    "translate": "إذا مرت 64 كولوم عبر سلك في 4.0 ثوانٍ، ما هو التيار المتوسط؟",
    "explain": "$I = \\frac{Q}{t} = \\frac{64}{4.0} = 16$ A"
  },
  {
    "id": 2,
    "text": "An ampere, A, is equivalent to a",
    "image": null,
    "options": ["V·C", "N/V", "V/m", "C/s", "C·s"],
    "correct": 3,
    "translate": "الأمبير يعادل",
    "explain": "1 A = 1 C/s"
  },
  {
    "id": 3,
    "text": "When current flows through a wire",
    "image": null,
    "options": [
      "protons are moving in the direction of the current.",
      "electrons are moving in the direction of the current.",
      "both protons and electrons are moving in the direction of the current.",
      "electrons are moving opposite the direction of the current.",
      "protons are moving opposite the direction of the current."
    ],
    "correct": 3,
    "translate": "عندما يتدفق التيار عبر سلك",
    "explain": "الإلكترونات تتحرك عكس اتجاه التيار التقليدي."
  },
  {
    "id": 4,
    "text": "An ohm is equivalent to which of the following?",
    "image": null,
    "options": ["volt/ampere", "ampere/coulomb", "coulomb/volt", "volt/meter"],
    "correct": 0,
    "translate": "الأوم يعادل أي مما يلي؟",
    "explain": "$1 \\Omega = 1 \\text{V/A}$"
  },
  {
    "id": 5,
    "text": "Aluminum has a resistivity of $2.65 \\times 10^{-8} \\ \\Omega \\cdot \\text{m}$. What is the resistance of 15 m of aluminum wire with cross-sectional area 1.0 mm$^2$?",
    "image": null,
    "options": ["0.13 $\\Omega$", "1.6 $\\Omega$", "56 $\\Omega$", "$1.3 \\times 10^2 \\ \\Omega$", "0.40 $\\Omega$"],
    "correct": 4,
    "translate": "الألومنيوم له مقاومية $2.65 \\times 10^{-8} \\ \\Omega \\cdot \\text{m}$. ما هي مقاومة سلك ألومنيوم طوله 15 م ومساحة مقطعه 1.0 مم$^2$؟",
    "explain": "$R = \\rho \\frac{L}{A} = (2.65 \\times 10^{-8}) \\times \\frac{15}{1.0 \\times 10^{-6}} = 0.39 \\ \\Omega$"
  },
  {
    "id": 6,
    "text": "A 12.0 V battery is connected across a 4.00-$\\Omega$ resistor. If the current through the resistor is 2.80 A, what is the internal resistance of the battery?",
    "image": null,
    "options": ["0.200 $\\Omega$", "0.800 $\\Omega$", "0.286 $\\Omega$", "3.71 $\\Omega$", "4.29 $\\Omega$"],
    "correct": 2,
    "translate": "بطارية 12.0 V موصلة عبر مقاومة 4.00 $\\Omega$. إذا كان التيار عبر المقاومة 2.80 A، فما هي المقاومة الداخلية للبطارية؟",
    "explain": "$V = I(R + r) \\Rightarrow 12.0 = 2.80(4.00 + r) \\Rightarrow r = 0.285 \\ \\Omega$"
  },
  {
    "id": 7,
    "text": "Four 12 $\\Omega$ resistors are connected together. What is the maximum resistance that can be attained with these resistors by connecting them in various ways?",
    "image": null,
    "options": ["24 $\\Omega$", "12 $\\Omega$", "48 $\\Omega$", "36 $\\Omega$", "44 $\\Omega$"],
    "correct": 2,
    "translate": "أربع مقاومات 12 $\\Omega$ موصلة معًا. ما هي أقصى مقاومة يمكن الحصول عليها بوصلها بطرق مختلفة؟",
    "explain": "لأقصى مقاومة: جميعها على التوالي، $R = 12 + 12 + 12 + 12 = 48 \\ \\Omega$"
  },
  {
    "id": 8,
    "text": "Four 12 $\\Omega$ resistors are connected together. What is the least resistance that can be attained with these resistors by connecting them in various ways?",
    "image": null,
    "options": ["6.0 $\\Omega$", "2.0 $\\Omega$", "12 $\\Omega$", "3.0 $\\Omega$", "1.0 $\\Omega$"],
    "correct": 3,
    "translate": "أربع مقاومات 12 $\\Omega$ موصلة معًا. ما هي أقل مقاومة يمكن الحصول عليها بوصلها بطرق مختلفة؟",
    "explain": "لأقل مقاومة: جميعها على التوازي، $\\frac{1}{R} = \\frac{1}{12} + \\frac{1}{12} + \\frac{1}{12} + \\frac{1}{12} = \\frac{4}{12} \\Rightarrow R = 3.0 \\ \\Omega$"
  },
  {
    "id": 9,
    "text": "A 6.0 $\\Omega$ resistor and a 3.0 $\\Omega$ resistor are connected in series to a 1.5 V battery of negligible internal resistance. What is the current in the 3.0 $\\Omega$ resistor?",
    "image": null,
    "options": ["0.17 A", "0.75 A", "0.25 A", "0.50 A", "2.0 A"],
    "correct": 0,
    "translate": "مقاومة 6.0 $\\Omega$ ومقاومة 3.0 $\\Omega$ موصلتان على التوالي ببطارية 1.5 V مقاومتها الداخلية مهملة. ما هو التيار في المقاومة 3.0 $\\Omega$؟",
    "explain": "$R_{\\text{total}} = 6.0 + 3.0 = 9.0 \\ \\Omega$، $I = \\frac{V}{R} = \\frac{1.5}{9.0} = 0.167$ A ≈ 0.17 A"
  },
  {
    "id": 10,
    "text": "A 6.0 $\\Omega$ resistor and a 3.0 $\\Omega$ resistor are connected in parallel to a 1.5 V battery of negligible internal resistance. What is the current in the 3.0 $\\Omega$ resistor?",
    "image": null,
    "options": ["2.0 A", "0.50 A", "0.75 A", "0.25 A", "0.17 A"],
    "correct": 1,
    "translate": "مقاومة 6.0 $\\Omega$ ومقاومة 3.0 $\\Omega$ موصلتان على التوازي ببطارية 1.5 V مقاومتها الداخلية مهملة. ما هو التيار في المقاومة 3.0 $\\Omega$؟",
    "explain": "$V = IR \\Rightarrow I = \\frac{V}{R} = \\frac{1.5}{3.0} = 0.50$ A"
  },
  {
    "id": 11,
    "text": "The SI unit of magnetic field is the tesla, which is equivalent to a",
    "image": null,
    "options": ["magnon", "A/m", "N/(A·m)", "N/C", "None of these choices are correct"],
    "correct": 2,
    "translate": "وحدة SI للمجال المغناطيسي هي التسلا، والتي تعادل",
    "explain": "1 T = 1 N/(A·m)"
  },
  {
    "id": 12,
    "text": "The magnitude of the magnetic force on a charge depends on all of the following except for which one?",
    "image": null,
    "options": [
      "the magnitude of the magnetic field",
      "the magnitude of the velocity",
      "the magnitude of the charge",
      "the sign of the charge",
      "the angle between the velocity and the magnetic field",
      "the velocity component perpendicular to the magnetic field"
    ],
    "correct": 3,
    "translate": "مقدار القوة المغناطيسية على شحنة يعتمد على كل مما يلي ما عدا",
    "explain": "$F = qvB\\sin\\theta$، لا تعتمد على إشارة الشحنة في المقدار، فقط في الاتجاه."
  },
  {
    "id": 13,
    "text": "A proton is moving perpendicular to a magnetic field at $3.0 \\times 10^6 \\ \\text{m/s}$ and experiences a magnetic force of magnitude $2.5 \\times 10^{-16} \\ \\text{N}$. What is the magnitude of the magnetic field?",
    "image": null,
    "options": [
      "$3.8 \\times 10^{-2}$ T",
      "$2.6 \\times 10^{-4}$ T",
      "0.52 T",
      "$1.9 \\times 10^{-3}$ T",
      "$5.2 \\times 10^{-4}$ T"
    ],
    "correct": 4,
    "translate": "بروتون يتحرك عموديًا على مجال مغناطيسي بسرعة $3.0 \\times 10^6 \\ \\text{m/s}$ ويتعرض لقوة مغناطيسية مقدارها $2.5 \\times 10^{-16} \\ \\text{N}$. ما مقدار المجال المغناطيسي؟",
    "explain": "$F = qvB \\Rightarrow B = \\frac{F}{qv} = \\frac{2.5 \\times 10^{-16}}{(1.6 \\times 10^{-19})(3.0 \\times 10^{6})} =5.2 \\times 10^{-4}$ T"
  },
  {
    "id": 14,
    "text": "An electron is moving at $2.5 \\times 10^{6} \\ \\text{m/s}$ perpendicular to a uniform 3.5 mT magnetic field. What is the radius of its path?",
    "image": null,
    "options": ["3.9 cm", "2.0 mm", "5.1 cm", "4.1 mm", "1.6 cm"],
    "correct": 3,
    "translate": "إلكترون يتحرك بسرعة $2.5 \\times 10^{6} \\ \\text{m/s}$ عموديًا على مجال مغناطيسي منتظم 3.5 mT. ما نصف قطر مساره؟",
    "explain": "$r = \\frac{mv}{qB} = \\frac{(9.11 \\times 10^{-31})(2.5 \\times 10^{6})}{(1.6 \\times 10^{-19})(3.5 \\times 10^{-3})} = 4.1 \\ \\text{mm}$"
  },
  {
    "id": 15,
    "text": "An electron is moving at $3.0 \\times 10^{6} \\ \\text{m/s}$ perpendicular to a uniform magnetic field. If the radius of the motion is 18 mm, what is the magnitude of the magnetic field?",
    "image": null,
    "options": ["1.6 $\\mu$T", "8.9 nT", "70 mT", "9.3 mT", "0.95 mT"],
    "correct": 4,
    "translate": "إلكترون يتحرك بسرعة $3.0 \\times 10^{6} \\ \\text{m/s}$ عموديًا على مجال مغناطيسي منتظم. إذا كان نصف قطر الحركة 18 mm، فما مقدار المجال المغناطيسي؟",
    "explain": "$B = \\frac{mv}{qr} = \\frac{(9.11 \\times 10^{-31})(3.0 \\times 10^{6})}{(1.6 \\times 10^{-19})(0.018)} = 0.95 \\times 10^{-3} \\ \\text{T} = 0.95 \\ \\text{mT}$"
  },
  {
    "id": 16,
    "text": "An electron is moving at $3.0 \\times 10^{6} \\ \\text{m/s}$ at an angle of 40° to a 0.80 T magnetic field. What is the magnitude of the force on the electron?",
    "image": null,
    "options": [
      "$2.9 \\times 10^{-13}$ N",
      "$1.2 \\times 10^{-13}$ N",
      "$4.8 \\times 10^{-13}$ N",
      "$3.8 \\times 10^{-13}$ N",
      "$2.5 \\times 10^{-13}$ N"
    ],
    "correct": 4,
    "translate": "إلكترون يتحرك بسرعة $3.0 \\times 10^{6} \\ \\text{m/s}$ بزاوية 40° بالنسبة لمجال مغناطيسي 0.80 T. ما مقدار القوة على الإلكترون؟",
    "explain": "$F = qvB\\sin\\theta = (1.6 \\times 10^{-19})(3.0 \\times 10^{6})(0.80)\\sin 40^{\\circ} = 2.5 \\times 10^{-13}$ N"
  },
  {
    "id": 17,
    "text": "If a charged particle is moving through a magnetic field with its velocity at an angle of 45 degrees with respect to the field, what happens to the magnetic force on it if both the speed and magnetic field are doubled?",
    "image": null,
    "options": [
      "It stays the same.",
      "It halves.",
      "It increases by a factor of 5.66.",
      "It quadruples.",
      "It doubles."
    ],
    "correct": 3,
    "translate": "إذا تحرك جسيم مشحون عبر مجال مغناطيسي بسرعة بزاوية 45 درجة بالنسبة للمجال، ماذا يحدث للقوة المغناطيسية عليه إذا تضاعفت السرعة والمجال المغناطيسي؟",
    "explain": "$F = qvB\\sin\\theta$، إذا تضاعف $v$ و $B$، تصبح $F' = q(2v)(2B)\\sin\\theta = 4qvB\\sin\\theta = 4F$"
  },
  {
    "id": 18,
    "text": "A 3.0 cm section of a horizontal wire, carrying a 6.7 A current from east to west, is placed in a horizontal north-to-south 0.42 T uniform magnetic field in the lab. What is the magnitude of the force on the 3.0 cm section of the wire?",
    "image": null,
    "options": ["0.17 N", "0.084 N", "0.0017 N", "0.0025 N", "0.25 N"],
    "correct": 1,
    "translate": "قطعة سلك أفقية طولها 3.0 cm تحمل تيار 6.7 A من الشرق إلى الغرب، موضوعة في مجال مغناطيسي منتظم أفقي 0.42 T من الشمال إلى الجنوب. ما مقدار القوة على قطعة السلك؟",
    "explain": "$F = ILB\\sin\\theta = (6.7)(0.030)(0.42)\\sin 90^{\\circ} = 0.084$ N"
  },
  {
    "id": 19,
    "text": "The emf produced by an ac generator is given by $\\varepsilon = \\omega NBA \\sin \\omega t$. In SI units, what is the value of $\\omega$ for a frequency of 60.0 Hz?",
    "image": null,
    "options": ["$2.00\\pi$ rad/s", "60.0 Hz", "377 Hz", "120 rad/s", "377 rad/s"],
    "correct": 4,
    "translate": "القوة الدافعة الكهربائية الناتجة عن مولّد تيار متردد تعطى بـ $\\varepsilon = \\omega NBA \\sin \\omega t$. بوحدات SI، ما قيمة $\\omega$ لتردد 60.0 Hz؟",
    "explain": "$\\omega = 2\\pi f = 2\\pi \\times 60 = 377$ rad/s"
  },
  {
    "id": 20,
    "text": "The SI unit H (the henry) is equal to a",
    "image": null,
    "options": ["V·s", "V/m", "V·s/A", "V·A/s", "V/A"],
    "correct": 2,
    "translate": "وحدة SI H (الهينري) تساوي",
    "explain": "1 H = 1 V·s/A"
  },
  {
    "id": 21,
    "text": "Faraday's law of induction states that the emf induced in a rectangular loop of wire is proportional to",
    "image": null,
    "options": [
      "the rate of change of the magnetic flux.",
      "the magnetic flux density times the area of the loop.",
      "the magnetic flux.",
      "current divided by the time."
    ],
    "correct": 0,
    "translate": "ينص قانون فاراداي للحث على أن القوة الدافعة الكهربائية المستحثة في حلقة سلكية مستطيلة تتناسب مع",
    "explain": "$\\varepsilon = -\\frac{d\\Phi_B}{dt}$"
  },
  {
    "id": 22,
    "text": "A 20 turn coil of area 10 cm$^2$ is placed in a magnetic field so that the normal to the coil's area is in the same direction as the field. If the field has a value of 0.25 T, what is the total flux through the coil?",
    "image": null,
    "options": [
      "$5.0 \\times 10^{-3} \\ \\text{T·m}^2$",
      "$25 \\times 10^{-5} \\ \\text{T·m}^2$",
      "50 T·m$^2$",
      "25 T·m$^2$",
      "0.0"
    ],
    "correct": 0,
    "translate": "ملف 20 لفة مساحته 10 cm$^2$ موضوع في مجال مغناطيسي بحيث يكون العمودي على مساحة الملف في نفس اتجاه المجال. إذا كانت قيمة المجال 0.25 T، فما إجمالي التدفق عبر الملف؟",
    "explain": "$\\Phi = NBA = (20)(0.25)(10 \\times 10^{-4}) = 5.0 \\times 10^{-3} \\ \\text{T·m}^2$"
  },
  {
    "id": 23,
    "text": "A 33 mH inductor has a current going through it that is increasing at a rate of 2.3 A/s. What is the magnitude of the induced emf in this coil?",
    "image": null,
    "options": ["2.5 V", "95 mV", "33 mV", "13 mV", "76 mV"],
    "correct": 4,
    "translate": "ملف حثي 33 mH يمر به تيار يتزايد بمعدل 2.3 A/s. ما مقدار القوة الدافعة الكهربائية المستحثة في هذا الملف؟",
    "explain": "$\\varepsilon = L \\frac{dI}{dt} = (33 \\times 10^{-3})(2.3) = 0.076 \\ \\text{V} = 76$ mV"
  },
  {
    "id": 24,
    "text": "A generator is designed to produce a maximum emf of 170 V while rotating at 3200 rpm. The 1531 coils of the generator are circular with diameter 7.5 cm. What is the necessary magnetic field for the generator?",
    "image": null,
    "options": ["0.30 T", "0.24 T", "0.0079 T", "0.075 T"],
    "correct": 3,
    "translate": "مولّد مصمم لإنتاج قوة دافعة كهربائية قصوى 170 V بينما يدور بسرعة 3200 rpm. ملفات المولّد البالغ عددها 1531 دائرية قطرها 7.5 cm. ما هو المجال المغناطيسي اللازم للمولّد؟",
    "explain": "$\\varepsilon_{\\text{max}} = \\omega NBA$، $\\omega = 3200 \\times \\frac{2\\pi}{60} = 335$ rad/s، $A = \\pi (0.0375)^2$، $B = \\frac{\\varepsilon_{\\text{max}}}{\\omega NA} = 0.075$ T"
  },
  {
    "id": 25,
    "text": "What is the period for a frequency of 60 Hz?",
    "image": null,
    "options": ["120 s", "60 s", "(1/60) s", "(1/120) s", "(1/377) s"],
    "correct": 2,
    "translate": "ما هي الزمن الدوري لتردد 60 Hz؟",
    "explain": "$T = \\frac{1}{f} = \\frac{1}{60}$ s"
  },
  {
    "id": 26,
    "text": "The voltage supplied to an ac circuit is given by $v(t) = (120 \\ \\text{V}) \\sin (377t)$. What is the voltage at $t = 3.00 \\times 10^{-3} \\ \\text{s}$?",
    "image": null,
    "options": ["0.00 V", "2.37 V", "119 V", "109 V", "63.0 V"],
    "correct": 3,
    "translate": "الجهد المزود لدائرة تيار متردد يعطى بـ $v(t) = (120 \\ \\text{V}) \\sin (377t)$. ما هو الجهد عند $t = 3.00 \\times 10^{-3} \\ \\text{s}$؟",
    "explain": "$v = 120 \\sin(377 \\times 0.00300) = 120 \\sin(1.131) = 120 \\times 0.904 = 108.5 \\approx 109$ V"
  },
  {
    "id": 27,
    "text": "The voltage supplied to an ac circuit is given by $ v(t) = (120 \\ \\text{V}) \\sin (60t)$. What are the rms voltage and the frequency?",
    "image": null,
    "options": ["85 V, 9.5 Hz", "120 V, 60 Hz", "170 V, 9.5 Hz", "240 V, 30 Hz", "120 V, 380 Hz"],
    "correct": 0,
    "translate": "الجهد المزود لدائرة تيار متردد يعطى بـ $ v(t) = (120 \\ \\text{V}) \\sin (60t)$. ما هي جهد RMS والتردد؟",
    "explain": "$V_{\\text{rms}} = \\frac{120}{\\sqrt{2}} = 85$ V، $\\omega = 60 \\Rightarrow f = \\frac{60}{2\\pi} = 9.55$ Hz"
  },
  {
    "id": 28,
    "text": "What is the capacitive reactance of an 8.00 $\\mu$F capacitor attached to 120 V rms at 60.0 Hz?",
    "image": null,
    "options": ["332 $\\Omega$", "166 $\\Omega$", "960 $\\Omega$", "480 $\\Omega$", "663 $\\Omega$"],
    "correct": 0,
    "translate": "ما هو الممانعة السعوية لمكثف 8.00 $\\mu$F موصول بجهد 120 V rms بتردد 60.0 Hz؟",
    "explain": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{2\\pi (60)(8.00 \\times 10^{-6})} = 332 \\ \\Omega$"
  },
  {
    "id": 29,
    "text": "What is the rms current for an 8.0 $\\mu$F capacitor attached to a 120 V rms 60 Hz source?",
    "image": null,
    "options": ["0.36 A", "0.18 A", "1.4 A", "2.8 A", "0.72 A"],
    "correct": 0,
    "translate": "ما هو تيار RMS لمكثف 8.0 $\\mu$F موصول بمصدر 120 V rms 60 Hz؟",
    "explain": "$I_{\\text{rms}} = \\frac{V_{\\text{rms}}}{X_C} = \\frac{120}{332} = 0.361$ A"
  },
  {
    "id": 30,
    "text": "In an ac circuit, the current in a capacitor",
    "image": null,
    "options": [
      "leads the voltage by 90°.",
      "lags the voltage by $\\pi$ radians.",
      "leads the voltage by $\\pi$ radians.",
      "is in phase with the voltage.",
      "lags the voltage by 90°."
    ],
    "correct": 0,
    "translate": "في دائرة تيار متردد، التيار في المكثف",
    "explain": "في المكثف، التيار يسبق الجهد بزاوية 90°."
  },
  {
    "id": 31,
    "text": "At what frequency is the reactance of a 20.0 mH inductor equal to 18.8 $\\Omega$?",
    "image": null,
    "options": ["150 Hz", "75.0 Hz", "1500 Hz", "15.0 Hz"],
    "correct": 0,
    "translate": "عند أي تردد تكون ممانعة محث 20.0 mH تساوي 18.8 $\\Omega$؟",
    "explain": "$X_L = 2\\pi f L \\Rightarrow f = \\frac{X_L}{2\\pi L} = \\frac{18.8}{2\\pi (0.0200)} = 150$ Hz"
  },
  {
    "id": 32,
    "text": "What is the rms current in a 200 mH inductor attached to a 120 V rms, 60.0 Hz source?",
    "image": null,
    "options": ["1.00 A", "600 A", "12.0 A", "100 A", "1.59 A"],
    "correct": 4,
    "translate": "ما هو تيار RMS في محث 200 mH موصول بمصدر 120 V rms، 60.0 Hz؟",
    "explain": "$X_L = 2\\pi f L = 2\\pi (60)(0.200) = 75.4 \\ \\Omega$، $I_{\\text{rms}} = \\frac{V_{\\text{rms}}}{X_L} = \\frac{120}{75.4} = 1.59$ A"
  },
  {
    "id": 33,
    "text": "A series RLC ac circuit has a capacitive reactance of 55 $\\Omega$, an inductive reactance of 25 $\\Omega$, and a resistance of 40 $\\Omega$. What is the impedance of this circuit?",
    "image": null,
    "options": ["50 $\\Omega$", "12 $\\Omega$", "10 $\\Omega$", "70 $\\Omega$", "95 $\\Omega$"],
    "correct": 0,
    "translate": "دائرة RLC متسلسلة تيار متردد لها ممانعة سعوية 55 $\\Omega$، وممانعة حثية 25 $\\Omega$، ومقاومة 40 $\\Omega$. ما هي الممانعة الكلية لهذه الدائرة؟",
    "explain": "$Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{40^2 + (25 - 55)^2} = \\sqrt{1600 + 900} = 50 \\ \\Omega$"
  },
  {
    "id": 34,
    "text": "A series RLC ac circuit has a capacitive reactance of 55 $\\Omega$, an inductive reactance of 25 $\\Omega$, and a resistance of 40 $\\Omega$. What is the phase constant of this circuit?",
    "image": null,
    "options": ["37°", "-37°", "66°", "53°", "-53°"],
    "correct": 1,
    "translate": "دائرة RLC متسلسلة تيار متردد لها ممانعة سعوية 55 $\\Omega$، وممانعة حثية 25 $\\Omega$، ومقاومة 40 $\\Omega$. ما هو ثابت الطور لهذه الدائرة؟",
    "explain": "$\\phi = \\arctan\\left(\\frac{X_L - X_C}{R}\\right) = \\arctan\\left(\\frac{25 - 55}{40}\\right) = \\arctan(-0.75) = -36.9^{\\circ} \\approx -37^{\\circ}$"
  },
  {
    "id": 35,
    "text": "Specular reflection occurs whenever",
    "image": null,
    "options": [
      "rays reflect in all directions from a surface.",
      "parallel rays all reflect at the same angle from a surface.",
      "rays reflect from a surface.",
      "rays reflect at only one angle from a surface.",
      "visible light rays reflect."
    ],
    "correct": 1,
    "translate": "ينعكس الانعكاس المنتظم عندما",
    "explain": "الانعكاس المنتظم: الأشعة المتوازية تنعكس بنفس الزاوية."
  },
  {
    "id": 36,
    "text": "A light ray reflects from a surface. If the angle of incidence is 24°, what is the angle between the reflected ray and the incident ray at the surface?",
    "image": null,
    "options": ["48°", "66°", "102°", "24°", "12°"],
    "correct": 0,
    "translate": "ينعكس شعاع ضوئي من سطح. إذا كانت زاوية السقوط 24°، فما الزاوية بين الشعاع المنعكس والشعاع الساقط عند السطح؟",
    "explain": "زاوية الانعكاس = زاوية السقوط = 24°، الزاوية بينهما = 24° + 24° = 48°"
  },
  {
    "id": 37,
    "text": "What is the critical angle for diamond (n = 2.42) in air?",
    "image": null,
    "options": ["65.6°", "67.5°", "37.1°", "2.42°", "24.4°"],
    "correct": 4,
    "translate": "ما هي الزاوية الحرجة للألماس (n = 2.42) في الهواء؟",
    "explain": "$\\theta_c = \\sin^{-1}\\left(\\frac{1}{n}\\right) = \\sin^{-1}\\left(\\frac{1}{2.42}\\right) = 24.4^{\\circ}$"
  },
  {
    "id": 38,
    "text": "A convex mirror has a radius of 10 cm. What is its focal length?",
    "image": null,
    "options": ["20 cm", "$-10$ cm", "5.0 cm", "10 cm", "$-5.0$ cm"],
    "correct": 4,
    "translate": "مرآة محدبة نصف قطرها 10 cm. ما هو بعدها البؤري؟",
    "explain": "للمرآة المحدبة: $f = -\\frac{R}{2} = -\\frac{10}{2} = -5.0$ cm"
  },
  {
    "id": 39,
    "text": "A mirror has a focal length $-20$ cm. If an object is placed 10 cm in front of the mirror, where will the image form?",
    "image": null,
    "options": [
      "6.7 behind the mirror",
      "20 cm in front of the mirror",
      "6.7 in front of the mirror",
      "20 cm behind the mirror",
      "no image will form"
    ],
    "correct": 0,
    "translate": "مرآة بعدها البؤري $-20$ cm. إذا وضع جسم على بعد 10 cm أمام المرآة، أين تتكون الصورة؟",
    "explain": "$\\frac{1}{f} = \\frac{1}{p} + \\frac{1}{q} \\Rightarrow -\\frac{1}{20} = \\frac{1}{10} + \\frac{1}{q} \\Rightarrow q = -6.67$ cm (خلف المرآة)"
  },
  {
    "id": 40,
    "text": "An object is placed 60 cm in front of a mirror and the image is upright and $\\frac{1}{4}$ the size of the object. What is the focal length of the mirror?",
    "image": null,
    "options": ["$-75$ cm", "$-20$ cm", "$-45$ cm", "$-12$ cm", "some positive value not given"],
    "correct": 1,
    "translate": "وضع جسم على بعد 60 cm أمام مرآة والصورة قائمة و$\\frac{1}{4}$ حجم الجسم. ما هو البعد البؤري للمرآة؟",
    "explain": "$m = +\\frac{1}{4} = -\\frac{q}{p} \\Rightarrow q = -\\frac{p}{4} = -15$ cm، $\\frac{1}{f} = \\frac{1}{p} + \\frac{1}{q} = \\frac{1}{60} + \\frac{1}{-15} = -\\frac{1}{20} \\Rightarrow f = -20$ cm"
  }
]
}
];












