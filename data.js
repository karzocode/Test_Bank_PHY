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
    "translate": "قضيب بلاستيك يتم حكه بقطعة فراء حيوان. القضيب يكتسب شحنة سالبة. أي العبارات التالية صحيحة عن شحنة قطعة الفراء؟",
    "explain": "الشحن بالحك ينقل الإلكترونات. إذا اكتسب القضيب شحنة سالبة، فإن الفراء يفقد إلكترونات ويصبح موجبًا بنفس المقدار."
  },
  {
    "id": 2,
    "text": "Two positive charges with magnitudes 4Q and Q are separated by a distance r. Which of the following statements is true?",
    "image": "4Q (+) --- r --- Q (+)",
    "options": [
      "The charge with a greater magnitude exerts a larger force on the small charge",
      "The charge with a greater magnitude exerts a smaller force on the small charge",
      "The forces on each charge are the same in magnitude and opposite in direction",
      "The forces on each charge are the same in magnitude and pointing in the same direction"
    ],
    "correct": 2,
    "translate": "شحنتان موجبتان مقدارهما 4Q و Q تفصل بينهما مسافة r. أي العبارات التالية صحيحة؟",
    "explain": "طبقًا لقانون نيوتن الثالث وقانون كولوم، القوة بين شحنتين متساوية في المقدار ومتعاكسة في الاتجاه."
  },
  {
    "id": 3,
    "text": "Two positive charges Q1 and Q2 are separated by a distance r. The charges repel each other with a force F. If the magnitude of each charge is doubled and the distance stays unchanged what is the new force between the charges?",
    "image": null,
    "options": ["F", "2F", "4F", "F/4"],
    "correct": 2,
    "translate": "شحنتان موجبتان Q1 و Q2 تفصل بينهما مسافة r، وتتنافران بقوة F. إذا تضاعفت كل شحنة وبقيت المسافة كما هي، فما القوة الجديدة؟",
    "explain": "القوة تتناسب مع حاصل ضرب الشحنتين. إذا تضاعفت كل منهما تصبح 4 أمثال، وبالتالي القوة 4F."
  },
  {
    "id": 4,
    "text": "Two positive charges Q1 and Q2 are separated by a distance r. The charges repel each other with a force F. If the distance between the charges is cut to one-fourth what is the new force acting on each charge?",
    "image": null,
    "options": ["16F", "2F", "4F", "F/4"],
    "correct": 0,
    "translate": "شحنتان موجبتان Q1 و Q2 تفصل بينهما مسافة r، وتتنافران بقوة F. إذا قلت المسافة إلى ربع، فما القوة الجديدة؟",
    "explain": "القوة تتناسب عكسيًا مع مربع المسافة. إذا قلت المسافة إلى الربع، تصبح القوة 16 ضعفًا."
  },
  {
    "id": 5,
    "text": "Two charges Q1 and -Q2 are separated by a distance r. The charges attract each other with a force F. What is the new force between the charges if the distance is tripled?",
    "image": null,
    "options": ["3F", "9F", "F/6", "F/9"],
    "correct": 3,
    "translate": "شحنتان Q1 و -Q2 تفصل بينهما مسافة r، وتجذبان بعضهما بقوة F. إذا زادت المسافة 3 أضعاف، فما القوة الجديدة؟",
    "explain": "القوة تتناسب عكسيًا مع مربع المسافة. إذا زادت المسافة 3 مرات، تصبح القوة 1/9 من القوة الأصلية."
  },
  {
    "id": 6,
    "text": "Two charges Q1 and -Q2 are separated by a distance r. The charges attract each other with a force F. What is the new force between the charges if the distance is cut to one-fourth and the magnitude of each charge is doubled?",
    "image": null,
    "options": ["16F", "64F", "48F", "F/16"],
    "correct": 1,
    "translate": "شحنتان Q1 و -Q2 تفصل بينهما مسافة r، وتجذبان بعضهما بقوة F. إذا قلت المسافة إلى الربع وتضاعفت كل شحنة، فما القوة الجديدة؟",
    "explain": "تضاعف كل شحنة → القوة ×4. نقص المسافة إلى الربع → القوة ×16. الإجمالي: 4 × 16 = 64F."
  },
  {
    "id": 7,
    "text": "A positively charged sphere with a charge of +8Q is separated from a negatively charged sphere -2Q by a distance r. The spheres briefly touch each other and move to the original distance r. What is the new charge on each sphere after they move to the distance r?",
    "image": null,
    "options": ["Q", "2Q", "3Q", "Q/4"],
    "correct": 2,
    "translate": "كرة موجبة شحنتها +8Q منفصلة عن كرة سالبة شحنتها -2Q بمسافة r. تلمس الكرتان لفترة قصيرة ثم تعودان للمسافة r. ما الشحنة الجديدة على كل كرة؟",
    "explain": "عند التلامس تتوزع الشحنة الكلية (+8Q - 2Q = +6Q) بالتساوي بينهما. كل كرة تصبح شحنتها +3Q."
  },
  {
    "id": 8,
    "text": "SI unit of permittivity of free space is",
    "image": null,
    "options": [
      "C² N⁻² m⁻¹",
      "C² N⁻¹ m⁻²",
      "C² N m²",
      "C N⁻¹ m⁻²"
    ],
    "correct": 1,
    "translate": "الوحدة الدولية لسماحية الفراغ هي:",
    "explain": "من قانون كولوم: ε₀ = (C²) / (N·m²) = C² N⁻¹ m⁻²."
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
    "translate": "إذا تأثرت شحنة كهربائية بقوة، فهذا يعني وجود ……",
    "explain": "المجال الكهربائي هو المنطقة المحيطة بالشحنة التي تؤثر فيها بقوة على شحنات أخرى."
  },
  {
    "id": 10,
    "text": "The force between two charges is 120 N. If the distance between the charges is doubled, the force will be",
    "image": null,
    "options": ["60 N", "30 N", "40 N", "15 N"],
    "correct": 1,
    "translate": "القوة بين شحنتين هي 120 N. إذا زادت المسافة بينهما إلى الضعف، تصبح القوة:",
    "explain": "القوة تتناسب عكسيًا مع مربع المسافة. إذا زادت المسافة ضعفين، تصبح القوة ربع القيمة الأصلية: 120 / 4 = 30 N."
  }
]
},
{
id: 2,
title: "Assignment 2",
questions:[
  {
    "id": 1,
    "text": "What is the magnitude of the electric field 30.0 cm from a point charge of 0.35 μC?",
    "image": null,
    "options": [
      "1.2 × 10⁻² N/C",
      "9.5 × 10⁴ N/C",
      "9.5 × 10⁴ N/C",
      "3.5 × 10⁴ N/C",
      "1.1 × 10⁴ N/C"
    ],
    "correct": 1,
    "translate": "ما مقدار المجال الكهربائي على بعد 30.0 سم من شحنة نقطية مقدارها 0.35 ميكروكولوم؟",
    "explain": "E = kQ/r²، حيث k = 9 × 10⁹، Q = 0.35 × 10⁻⁶ C، r = 0.3 m → E ≈ 3.5 × 10⁴ N/C"
  },
  {
    "id": 2,
    "text": "The electric field has a magnitude of 3.00 N/C at a distance of 60.0 cm from a point charge. What is the charge?",
    "image": null,
    "options": [
      "3.00 nC",
      "1.40 nC",
      "120 pC",
      "12.0 μC",
      "36.0 mC"
    ],
    "correct": 2,
    "translate": "المجال الكهربائي مقداره 3.00 N/C على بعد 60.0 سم من شحنة نقطية. ما مقدار الشحنة؟",
    "explain": "E = kQ/r² → Q = E·r²/k = (3 × (0.6)²) / (9×10⁹) ≈ 1.2 × 10⁻¹⁰ C = 120 pC"
  },
  {
    "id": 3,
    "text": "A 3.7 pC charge experiences a force of 8.1 × 10⁻⁷ N in an electric field. What is the magnitude of the electric field?",
    "image": null,
    "options": [
      "1.2 × 10⁻³ N/C",
      "3.00 × 10⁵ N/C",
      "12 N/C",
      "4.3 × 10⁻⁶ N/C",
      "2.2 × 10⁵ N/C"
    ],
    "correct": 4,
    "translate": "شحنة مقدارها 3.7 بيكوكولوم تتأثر بقوة 8.1 × 10⁻⁷ N في مجال كهربائي. ما مقدار المجال الكهربائي؟",
    "explain": "E = F/Q = (8.1 × 10⁻⁷) / (3.7 × 10⁻¹²) ≈ 2.19 × 10⁵ N/C"
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
    "translate": "في مخطط خطوط المجال الكهربائي، ماذا تمثل الخطوط المرسومة أقرب إلى بعضها؟",
    "explain": "كثافة خطوط المجال تشير إلى قوة المجال. كلما كانت الخطوط أقرب، كان المجال أقوى."
  },
  {
    "id": 5,
    "text": "In a diagram of electric field lines, q1 has 9 lines going into it and q2 has 27 lines going out of it. If one of the charges is -40 mC, which of the following could be the other one?",
    "image": null,
    "options": [
      "18.0 mC",
      "120 mC",
      "-120 mC",
      "-18.0 mC",
      "none of these choices are correct"
    ],
    "correct": 1,
    "translate": "في مخطط خطوط المجال، q1 لها 9 خطوط تدخل فيها و q2 لها 27 خطًا تخرج منها. إذا كانت إحدى الشحنتين -40 mC، فما قيمة الأخرى؟",
    "explain": "عدد الخطوط يتناسب مع مقدار الشحنة. نسبة الخطوط 9:27 = 1:3. إذا كانت q1 = -40 mC (تدخل)، فإن q2 = +120 mC (تخرج)."
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
    "translate": "بروتون يتحرك في مجال كهربائي. اتجاه تسارع البروتون هو:",
    "explain": "البروتون موجب الشحنة، لذا تتجه قوته في اتجاه المجال، وبالتالي يتسارع في اتجاه المجال الكهربائي."
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
    "correct": 0,
    "translate": "سلك طويل بكثافة شحنة خطية منتظمة 1.35 nC/m محاط بسطح أسطواني متحد المركز طوله 1.60 م ونصف قطره 23.6 سم. ما مقدار المجال الكهربائي على السطح المنحني للأسطوانة؟",
    "explain": "نظرية غاوس للمجال حول سلك طويل: E = λ/(2πε₀r). λ = 1.35×10⁻⁹، r = 0.236 m → E ≈ 103 N/C"
  },
  {
    "id": 8,
    "text": "A conducting sphere of radius 10.0 cm holds a net charge of 4.4 μC. What is the surface charge density?",
    "image": null,
    "options": [
      "1.1 × 10⁻⁵ C/m²",
      "5.6 × 10⁻³ C/m²",
      "3.5 × 10⁻⁵ C/m²",
      "0.0",
      "2.2 × 10⁻⁴ C/m²"
    ],
    "correct": 4,
    "translate": "كرة موصلة نصف قطرها 10.0 سم تحمل شحنة صافية 4.4 μC. ما كثافة الشحنة السطحية؟",
    "explain": "σ = Q/A = Q/(4πr²) = (4.4×10⁻⁶) / (4π×(0.1)²) ≈ 3.5 × 10⁻⁵ C/m²"
  },
  {
    "id": 9,
    "text": "What is the total electric flux through a closed surface containing a 2.0 μC charge?",
    "image": null,
    "options": [
      "0",
      "1.8 × 10⁴ N·m²/C",
      "2.3 × 10⁵ N·m²/C",
      "1.4 × 10⁵ N·m²/C",
      "4.5 × 10³ N·m²/C"
    ],
    "correct": 2,
    "translate": "ما التدفق الكهربائي الكلي عبر سطح مغلق يحتوي على شحنة 2.0 μC؟",
    "explain": "حسب قانون غاوس: Φ = Q_enclosed / ε₀ = (2×10⁻⁶) / (8.85×10⁻¹²) ≈ 2.26 × 10⁵ N·m²/C"
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
    "translate": "نستنتج من قانون غاوس أن التدفق عبر سطح مغلق:",
    "explain": "قانون غاوس: التدفق الكهربائي عبر سطح مغلق يتناسب مع الشحنة الصافية المحصورة داخله."
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
    "translate": "ثنائي قطب كهربائي محاط بسطح مغلق، حيث السطح أقرب إلى الطرف السالب منه إلى الموجب. التدفق عبر هذا السطح هو:",
    "explain": "حسب قانون غاوس، إذا لم توجد شحنة صافية محصورة داخل السطح (لأن ثنائي القطب له شحنتان متساويتان ومتعاكستان)، فإن التدفق الكلي يساوي صفر."
  },
  {
    "id": 12,
    "text": "The symbols ρ, λ, and σ are used to represent, respectively, the charge density per unit",
    "image": null,
    "options": [
      "area, length, and volume.",
      "length, volume, and area.",
      "volume, length, and area.",
      "volume, area, and length.",
      "area, volume, and length."
    ],
    "correct": 2,
    "translate": "الرموز ρ و λ و σ تستخدم لتمثيل كثافة الشحنة لكل وحدة، على الترتيب:",
    "explain": "ρ: كثافة الشحنة الحجمية (C/m³)، λ: كثافة الشحنة الخطية (C/m)، σ: كثافة الشحنة السطحية (C/m²)"
  }
]
},
{
id: 3,
title: "Assignment 3",
questions: []
},
{
id: 4,
title: "Assignment 4",
questions: []
},
{
id: 5,
title: "Assignment 5",
questions: []
},
{
id: 6,
title: "Assignment 6",
questions: []
}
];
