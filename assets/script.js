const progress = document.querySelector(".site-progress");
const header = document.querySelector(".site-header");
const revealItems = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll("[data-count]");
const parallaxItems = document.querySelectorAll("[data-parallax]");
const languageToggle = document.querySelector("[data-lang-toggle]");
const originalTitle = document.title;

const bnText = {
  "Adarsha Nursery School": "আদর্শ নার্সারি স্কুল",
  "Private learning campus": "একটি বেসরকারি শিক্ষাপ্রতিষ্ঠান",
  "About": "পরিচিতি",
  "Notice": "নোটিশ",
  "New Admission": "নতুন ভর্তি",
  "Next Class": "পরবর্তী শ্রেণি",
  "Back to Home": "হোমে ফিরে যান",
  "Back to top": "উপরে যান",
  "Admissions open for 2026-27": "২০২৬-২৭ শিক্ষাবর্ষে ভর্তি চলছে",
  "A warm, carefully guided private school where early learners begin with confidence, curiosity, language, numbers, movement, art, and everyday kindness.": "একটি যত্নশীল বেসরকারি বিদ্যালয়, যেখানে ছোট শিক্ষার্থীরা আত্মবিশ্বাস, কৌতূহল, ভাষা, সংখ্যা, খেলাধুলা, শিল্পচর্চা ও সুন্দর আচরণের মাধ্যমে শেখা শুরু করে।",
  "Start Admission": "ভর্তি শুরু করুন",
  "Latest Notices": "সর্বশেষ নোটিশ",
  "Years of trusted care": "বছরের নির্ভরযোগ্য যত্ন",
  "Focused classroom ratio": "প্রতিটি শ্রেণিতে সীমিত সংখ্যক শিক্ষার্থী",
  "Parent satisfaction": "অভিভাবকদের আস্থা",
  "Explore": "দেখুন",
  "Our school story and campus values": "আমাদের স্কুলের গল্প ও মূল্যবোধ",
  "Visit About": "পরিচিতি দেখুন",
  "Updates": "নতুন খবর",
  "Announcements, dates, and reminders": "ঘোষণা, তারিখ ও স্মরণিকা",
  "Read Notices": "নোটিশ পড়ুন",
  "Admission": "ভর্তি",
  "Documents for new student admission": "নতুন শিক্ষার্থী ভর্তির কাগজপত্র",
  "View Checklist": "চেকলিস্ট দেখুন",
  "Promotion": "উচ্চতর শ্রেণিতে ভর্তি",
  "Next class admission requirements": "পরবর্তী শ্রেণিতে ভর্তির প্রয়োজনীয়তা",
  "View Details": "বিস্তারিত দেখুন",
  "The Adarsha approach": "আদর্শের শিক্ষাদর্শন",
  "Small-school attention with a premium learning rhythm.": "ছোট পরিসরে যত্নশীল ও মানসম্মত শিক্ষার পরিবেশ।",
  "Dummy details: Our classrooms blend phonics, early numeracy, storytelling, craft, free play, assembly habits, and gentle discipline. Parents receive clear updates, children receive patient guidance, and each day feels purposeful without feeling pressured.": "নমুনা তথ্য: আমাদের শ্রেণিকক্ষে ধ্বনি শেখা, প্রাথমিক গণনা, গল্প বলা, কারুশিল্প, মুক্ত খেলা, অ্যাসেম্বলি অভ্যাস ও কোমল শৃঙ্খলা একসঙ্গে চলে। অভিভাবকেরা স্পষ্ট বার্তা পান, শিশুরা ধৈর্যশীল নির্দেশনা পায়, আর প্রতিটি দিন চাপ ছাড়াই অর্থবহ হয়।",
  "Foundational Learning": "ভিত্তিমূলক শিক্ষা",
  "Language, numbers, motor skills, memory, rhythm, and creative expression for nursery to primary readiness.": "নার্সারি থেকে প্রাথমিক স্তরের প্রস্তুতির জন্য ভাষা, সংখ্যা, হাতের কাজের দক্ষতা, স্মৃতি, ছন্দ ও সৃজনশীল প্রকাশ।",
  "Careful Supervision": "নিবিড় তত্ত্বাবধান",
  "Structured arrival, dispersal, classroom hygiene, monitored play areas, and child-friendly routines.": "নিয়মিত আগমন-প্রস্থান, শ্রেণিকক্ষ পরিচ্ছন্নতা, তত্ত্বাবধানে খেলার জায়গা এবং শিশুবান্ধব রুটিন।",
  "Parent Partnership": "অভিভাবকদের সহযোগিতা",
  "Regular notices, meeting windows, admission support, progress remarks, and simple communication.": "নিয়মিত নোটিশ, মিটিং সময়, ভর্তি সহায়তা, অগ্রগতি মন্তব্য এবং সহজ যোগাযোগ।",
  "Campus life": "বিদ্যালয় জীবন",
  "Bright days, steady habits, and room to grow.": "আনন্দময় পরিবেশ, সুন্দর অভ্যাস এবং বিকাশের সুযোগ।",
  "Replace this with your actual campus details: school timings, transport points, uniform policy, principal message, extracurricular list, fee counter timing, and contact numbers.": "এখানে আপনার বিদ্যালয়ের প্রকৃত তথ্য বসান: স্কুলের সময়সূচি, পরিবহন পয়েন্ট, ইউনিফর্ম নীতি, প্রধান শিক্ষকের বার্তা, সহশিক্ষা কার্যক্রম, ফি জমার সময় এবং যোগাযোগ নম্বর।",
  "Morning Assembly": "সকালের অ্যাসেম্বলি",
  "Prayer, thought of the day, news reading, and confidence practice.": "প্রার্থনা, দিনের ভাবনা, সংবাদ পাঠ এবং আত্মবিশ্বাস চর্চা।",
  "Activity Rooms": "কার্যক্রম কক্ষ",
  "Art, rhyme, reading corners, sensory learning, and guided play.": "চিত্রকলা, ছড়া, পড়ার কোণা, ইন্দ্রিয়ভিত্তিক শেখা এবং নির্দেশিত খেলা।",
  "Secure Campus": "নিরাপদ বিদ্যালয় পরিবেশ",
  "Visitor register, supervised gate, staff support, and clean classrooms.": "ভিজিটর রেজিস্টার, তত্ত্বাবধানে গেট, কর্মী সহায়তা এবং পরিচ্ছন্ন শ্রেণিকক্ষ।",
  "Celebrations": "উৎসব",
  "Annual day, sports day, festivals, exhibitions, and parent events.": "বার্ষিক অনুষ্ঠান, ক্রীড়া দিবস, উৎসব, প্রদর্শনী এবং অভিভাবক অনুষ্ঠান।",
  "Admission flow": "ভর্তি প্রক্রিয়া",
  "A clear four-step admission experience.": "চার ধাপে সহজ ভর্তি প্রক্রিয়া।",
  "These are dummy steps for now. You can replace the exact dates, fees, and office timing later.": "এগুলি আপাতত নমুনা ধাপ। পরে সঠিক তারিখ, ফি এবং অফিস সময় বসাতে পারবেন।",
  "Collect Form": "ফর্ম সংগ্রহ",
  "Visit the school office between 10:00 AM and 2:00 PM with parent ID proof.": "অভিভাবকের পরিচয়পত্র নিয়ে সকাল ১০:০০টা থেকে দুপুর ২:০০টার মধ্যে স্কুল অফিসে আসুন।",
  "Submit Documents": "কাগজপত্র জমা",
  "Bring photographs, birth certificate, address proof, and previous school record if applicable.": "ছবি, জন্ম সনদ, ঠিকানার প্রমাণ এবং প্রয়োজনে পূর্বের স্কুলের রেকর্ড আনুন।",
  "Interaction": "সাক্ষাৎকার",
  "Child and parents meet the admission desk for a short friendly conversation.": "শিশু ও অভিভাবক ভর্তি সহায়তা কেন্দ্রে সংক্ষিপ্ত বন্ধুসুলভ আলোচনায় অংশ নেবেন।",
  "Confirm Seat": "আসন নিশ্চিতকরণ",
  "Complete fee formalities and collect books, uniform guidance, and school calendar.": "ফি সংক্রান্ত কাজ সম্পন্ন করে বই, ইউনিফর্ম নির্দেশনা এবং স্কুল ক্যালেন্ডার সংগ্রহ করুন।",
  "Office help desk": "বিদ্যালয় সহায়তা কেন্দ্র",
  "Ready for admission details?": "ভর্তির তথ্য জানতে প্রস্তুত?",
  "Dummy contact: Adarsha Nursery School, Main Road, Your City. Phone: 98765 43210. Email: office@adarshaschool.example": "নমুনা যোগাযোগ: আদর্শ নার্সারি স্কুল, মেইন রোড, আপনার শহর। ফোন: ৯৮৭৬৫ ৪৩২১০। ই-মেইল: office@adarshaschool.example",
  "View Admission Items": "ভর্তির জিনিসপত্র দেখুন",
  "Premium static school website template with dummy details.": "নমুনা তথ্যসহ মানসম্মত স্থির স্কুল ওয়েবসাইট।",
  "About | Adarsha Nursery School": "পরিচিতি | আদর্শ নার্সারি স্কুল",
  "About the school": "স্কুল পরিচিতি",
  "A caring private school for confident early beginnings.": "আত্মবিশ্বাসী শুরুর জন্য একটি যত্নশীল বেসরকারি বিদ্যালয়।",
  "Dummy details: Adarsha Nursery School was founded to give children a calm, polished, and joyful start to formal education through thoughtful academics and attentive care.": "নমুনা তথ্য: শিশুদের মনোযোগী পড়াশোনা ও যত্নশীল পরিবেশে শান্ত, সুন্দর এবং আনন্দময় প্রাতিষ্ঠানিক শিক্ষার শুরু দেওয়ার জন্য আদর্শ নার্সারি স্কুল প্রতিষ্ঠিত হয়েছে।",
  "Mission": "মিশন",
  "To nurture disciplined, curious, emotionally secure children through strong foundations and warm guidance.": "মজবুত ভিত্তি ও কোমল নির্দেশনার মাধ্যমে শৃঙ্খলাবদ্ধ, কৌতূহলী ও মানসিকভাবে নিরাপদ শিশু গড়ে তোলা।",
  "Vision": "লক্ষ্য",
  "To become a trusted local school known for academic readiness, respectful behavior, and parent confidence.": "শিক্ষাগত প্রস্তুতি, ভদ্র আচরণ এবং অভিভাবকের আস্থার জন্য পরিচিত একটি নির্ভরযোগ্য স্থানীয় স্কুল হওয়া।",
  "Promise": "প্রতিশ্রুতি",
  "Clean classrooms, transparent communication, balanced activities, and steady personal attention for each learner.": "পরিচ্ছন্ন শ্রেণিকক্ষ, স্বচ্ছ যোগাযোগ, ভারসাম্যপূর্ণ কার্যক্রম এবং প্রতিটি শিক্ষার্থীর প্রতি নিয়মিত ব্যক্তিগত মনোযোগ।",
  "What makes us premium": "আমাদের বিশেষত্ব",
  "Details that parents notice and children feel.": "যে যত্ন অভিভাবকরা দেখেন, শিশুরা অনুভব করে।",
  "Replace this area with the principal message, school history, affiliation details, teacher qualifications, transport route, and fee office timing.": "এখানে প্রধান শিক্ষকের বার্তা, স্কুলের ইতিহাস, অনুমোদনের তথ্য, শিক্ষকদের যোগ্যতা, পরিবহন রুট এবং ফি অফিসের সময় বসান।",
  "Area": "বিষয়",
  "Dummy Detail": "নমুনা তথ্য",
  "Classes": "শ্রেণি",
  "Playgroup, Nursery, LKG, UKG, Class I to IV": "প্লেগ্রুপ, নার্সারি, এলকেজি, ইউকেজি, প্রথম থেকে চতুর্থ শ্রেণি",
  "Timings": "সময়",
  "Morning shift from 8:30 AM to 12:45 PM": "সকাল ৮:৩০টা থেকে দুপুর ১২:৪৫টা পর্যন্ত",
  "Facilities": "সুবিধা",
  "Activity room, reading corner, safe play area, clean drinking water": "কার্যক্রম কক্ষ, পড়ার কোণা, নিরাপদ খেলার জায়গা, বিশুদ্ধ পানীয় জল",
  "Communication": "যোগাযোগ",
  "Notice board, parent meetings, phone support, printed circulars": "নোটিশ বোর্ড, অভিভাবক মিটিং, ফোন সহায়তা, প্রিন্টেড সার্কুলার",
  "Dummy address: Main Road, Your City.": "নমুনা ঠিকানা: মেইন রোড, আপনার শহর।",
  "Notice | Adarsha Nursery School": "নোটিশ | আদর্শ নার্সারি স্কুল",
  "Notice board": "নোটিশ বোর্ড",
  "Important updates for parents and students.": "অভিভাবক ও শিক্ষার্থীদের জন্য গুরুত্বপূর্ণ ঘোষণা।",
  "Dummy notices are shown here. Replace dates, events, and instructions with the school’s real announcements whenever needed.": "এখানে নমুনা নোটিশ দেওয়া আছে। প্রয়োজন অনুযায়ী তারিখ, অনুষ্ঠান এবং নির্দেশনা স্কুলের আসল ঘোষণায় বদলে দিন।",
  "10 June 2026": "১০ জুন ২০২৬",
  "Admission form submission window": "ভর্তি ফর্ম জমার সময়",
  "New admission forms will be accepted at the school office from 10:00 AM to 2:00 PM on working days.": "কর্মদিবসে সকাল ১০:০০টা থেকে দুপুর ২:০০টা পর্যন্ত স্কুল অফিসে নতুন ভর্তি ফর্ম গ্রহণ করা হবে।",
  "15 June 2026": "১৫ জুন ২০২৬",
  "Parent orientation day": "অভিভাবক পরিচিতি সভা",
  "Parents of newly admitted students are requested to attend a short orientation with the class teacher.": "নতুন ভর্তি হওয়া শিক্ষার্থীদের অভিভাবকদের শ্রেণি শিক্ষকের সঙ্গে একটি সংক্ষিপ্ত পরিচিতি সভায় অংশ নেওয়ার অনুরোধ করা হচ্ছে।",
  "20 June 2026": "২০ জুন ২০২৬",
  "Uniform measurement desk": "ইউনিফর্ম মাপ নেওয়ার কেন্দ্র",
  "Uniform measurements and book list guidance will be available near the reception counter.": "রিসেপশনের কাছে ইউনিফর্মের মাপ এবং বইয়ের তালিকা সংক্রান্ত নির্দেশনা পাওয়া যাবে।",
  "01 July 2026": "০১ জুলাই ২০২৬",
  "First day of academic session": "শিক্ষাবর্ষের প্রথম দিন",
  "Students should arrive in school uniform with ID card, water bottle, tiffin, and diary.": "শিক্ষার্থীরা স্কুল ইউনিফর্ম, আইডি কার্ড, পানির বোতল, টিফিন এবং ডায়েরি নিয়ে আসবে।",
  "05 July 2026": "০৫ জুলাই ২০২৬",
  "Health and hygiene reminder": "স্বাস্থ্য ও পরিচ্ছন্নতা স্মরণিকা",
  "Parents are requested to label all belongings and send a small hand towel daily.": "অভিভাবকদের সব জিনিসে নাম লিখে দিতে এবং প্রতিদিন একটি ছোট হাত তোয়ালে পাঠাতে অনুরোধ করা হচ্ছে।",
  "12 July 2026": "১২ জুলাই ২০২৬",
  "Monthly parent meeting": "মাসিক অভিভাবক মিটিং",
  "Class-wise meeting slots will be shared through the notice board and school diary.": "শ্রেণিভিত্তিক মিটিং সময় নোটিশ বোর্ড ও স্কুল ডায়েরির মাধ্যমে জানানো হবে।",
  "Notice details are placeholders for easy editing.": "সহজে সম্পাদনার জন্য নোটিশগুলি নমুনা লেখা হিসেবে রাখা হয়েছে।",
  "New Admission | Adarsha Nursery School": "নতুন ভর্তি | আদর্শ নার্সারি স্কুল",
  "New admission": "নতুন ভর্তি",
  "Bring these items for first-time admission.": "প্রথমবার ভর্তির জন্য এগুলি সঙ্গে আনুন।",
  "Static dummy information for parents. Replace the list with your exact school requirements, fee amount, and office timing.": "অভিভাবকদের জন্য স্ট্যাটিক নমুনা তথ্য। আপনার স্কুলের সঠিক প্রয়োজনীয়তা, ফি এবং অফিস সময় দিয়ে তালিকাটি বদলে দিন।",
  "Student documents": "শিক্ষার্থীর কাগজপত্র",
  "Original birth certificate and one photocopy": "জন্ম সনদের মূল কপি ও একটি ফটোকপি",
  "Four recent passport-size photographs": "সাম্প্রতিক চারটি পাসপোর্ট সাইজ ছবি",
  "Previous school transfer certificate if applicable": "প্রযোজ্য হলে পূর্বের স্কুলের ট্রান্সফার সার্টিফিকেট",
  "Blood group note or health card if available": "থাকলে রক্তের গ্রুপের নোট বা স্বাস্থ্য কার্ড",
  "Parent documents": "অভিভাবকের কাগজপত্র",
  "Parent or guardian ID proof photocopy": "অভিভাবক বা গার্ডিয়ানের পরিচয়পত্রের ফটোকপি",
  "Current address proof photocopy": "বর্তমান ঠিকানার প্রমাণপত্রের ফটোকপি",
  "Two passport-size photographs of parent or guardian": "অভিভাবক বা গার্ডিয়ানের দুটি পাসপোর্ট সাইজ ছবি",
  "Emergency contact number written clearly": "জরুরি যোগাযোগ নম্বর পরিষ্কারভাবে লেখা",
  "School formalities": "স্কুলের আনুষ্ঠানিকতা",
  "Completed admission form with signature": "স্বাক্ষরসহ পূরণ করা ভর্তি ফর্ম",
  "Admission fee and first month fee": "ভর্তি ফি এবং প্রথম মাসের ফি",
  "Uniform measurement details": "ইউনিফর্মের মাপের তথ্য",
  "Transport requirement form if needed": "প্রয়োজন হলে পরিবহন চাহিদা ফর্ম",
  "Office timing": "অফিস সময়",
  "Suggested admission desk schedule.": "ভর্তি সহায়তা কেন্দ্রের প্রস্তাবিত সময়সূচি।",
  "This table is also dummy content for quick replacement.": "এই টেবিলটিও দ্রুত বদলানোর জন্য নমুনা তথ্য।",
  "Purpose": "উদ্দেশ্য",
  "Time": "সময়",
  "Bring Along": "সঙ্গে আনবেন",
  "Form collection": "ফর্ম সংগ্রহ",
  "10:00 AM to 2:00 PM": "সকাল ১০:০০টা থেকে দুপুর ২:০০টা",
  "Parent ID proof": "অভিভাবকের পরিচয়পত্র",
  "Document verification": "কাগজপত্র যাচাই",
  "11:00 AM to 1:30 PM": "সকাল ১১:০০টা থেকে দুপুর ১:৩০টা",
  "Original documents and copies": "মূল কাগজপত্র ও কপি",
  "Fee counter": "ফি জমা কেন্দ্র",
  "10:30 AM to 2:30 PM": "সকাল ১০:৩০টা থেকে দুপুর ২:৩০টা",
  "Cash or approved payment mode": "নগদ বা অনুমোদিত পেমেন্ট পদ্ধতি",
  "Uniform guidance": "ইউনিফর্ম নির্দেশনা",
  "12:00 PM to 3:00 PM": "দুপুর ১২:০০টা থেকে বিকেল ৩:০০টা",
  "Student measurement details": "শিক্ষার্থীর মাপের তথ্য",
  "Admission checklist uses editable placeholder content.": "ভর্তি চেকলিস্টে সম্পাদনাযোগ্য নমুনা লেখা ব্যবহার করা হয়েছে।",
  "Next Class Admission | Adarsha Nursery School": "পরবর্তী শ্রেণির ভর্তি | আদর্শ নার্সারি স্কুল",
  "Next class admission": "পরবর্তী শ্রেণির ভর্তি",
  "Simple requirements for promoted students.": "উত্তীর্ণ শিক্ষার্থীদের জন্য সহজ প্রয়োজনীয়তা।",
  "This page is for students moving to the next class. The items below are dummy details for renewal or promotion admission.": "এই পেজটি পরবর্তী শ্রেণিতে ওঠা শিক্ষার্থীদের জন্য। নিচের বিষয়গুলি নবায়ন বা পরবর্তী শ্রেণিতে ভর্তির নমুনা তথ্য।",
  "Academic items": "শিক্ষাগত জিনিসপত্র",
  "Previous class report card photocopy": "পূর্বের শ্রেণির রিপোর্ট কার্ডের ফটোকপি",
  "School diary with updated parent contact": "হালনাগাদ অভিভাবক যোগাযোগসহ স্কুল ডায়েরি",
  "Completed next class admission form": "পূরণ করা পরবর্তী শ্রেণির ভর্তি ফর্ম",
  "Pending homework or project file if requested": "চাওয়া হলে অসমাপ্ত হোমওয়ার্ক বা প্রজেক্ট ফাইল",
  "Fee and records": "ফি ও রেকর্ড",
  "Previous dues clearance receipt": "পূর্বের বকেয়া পরিশোধের রসিদ",
  "Next class admission fee": "পরবর্তী শ্রেণির ভর্তি ফি",
  "Monthly fee card or student ID card": "মাসিক ফি কার্ড বা শিক্ষার্থীর আইডি কার্ড",
  "Transport renewal slip if applicable": "প্রযোজ্য হলে পরিবহন নবায়ন স্লিপ",
  "Student essentials": "শিক্ষার্থীর প্রয়োজনীয় জিনিস",
  "Two passport-size photographs": "দুটি পাসপোর্ট সাইজ ছবি",
  "Updated uniform size requirement": "হালনাগাদ ইউনিফর্ম মাপের প্রয়োজনীয়তা",
  "Books and copies list collection": "বই ও খাতার তালিকা সংগ্রহ",
  "Medical update note if any condition changed": "স্বাস্থ্য সংক্রান্ত কোনো পরিবর্তন থাকলে লিখিত তথ্য",
  "Promotion note": "পরবর্তী শ্রেণিতে ভর্তির নোট",
  "Keep the process calm and quick.": "প্রক্রিয়াটি সহজ ও দ্রুত রাখুন।",
  "Parents can complete the next class admission formalities at the school office. Please replace these dummy paragraphs with your real fee rules, promotion policy, and last date.": "অভিভাবকেরা স্কুল অফিসে পরবর্তী শ্রেণির ভর্তি আনুষ্ঠানিকতা সম্পন্ন করতে পারবেন। অনুগ্রহ করে এই নমুনা অনুচ্ছেদগুলি আপনার আসল ফি নিয়ম, শ্রেণি-উন্নয়ন নীতি এবং শেষ তারিখ দিয়ে বদলে দিন।",
  "Class Group": "শ্রেণি গ্রুপ",
  "Suggested Date": "প্রস্তাবিত তারিখ",
  "Desk": "কেন্দ্র",
  "Nursery to LKG": "নার্সারি থেকে এলকেজি",
  "18 June 2026": "১৮ জুন ২০২৬",
  "Ground floor office": "গ্রাউন্ড ফ্লোর অফিস",
  "LKG to UKG": "এলকেজি থেকে ইউকেজি",
  "19 June 2026": "১৯ জুন ২০২৬",
  "Admission desk": "ভর্তি সহায়তা কেন্দ্র",
  "UKG to Class I": "ইউকেজি থেকে প্রথম শ্রেণি",
  "20 June 2026": "২০ জুন ২০২৬",
  "Academic counter": "শিক্ষা বিভাগীয় কেন্দ্র",
  "Class I onward": "প্রথম শ্রেণি থেকে পরবর্তী",
  "21 June 2026": "২১ জুন ২০২৬",
  "Next class details are placeholders.": "পরবর্তী শ্রেণির তথ্যগুলি নমুনা হিসেবে রাখা হয়েছে।"
};


const originalText = new WeakMap();
const translatableNodes = [];

if (!("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("in-view"));
  counters.forEach((item) => animateCounter(item));
}

function collectTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const text = node.textContent.trim();
      const parent = node.parentElement;

      if (!text || !parent || parent.closest("[data-count]") || ["SCRIPT", "STYLE"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    }
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;
    originalText.set(node, node.textContent);
    translatableNodes.push(node);
  }
}

function translateValue(value, lang) {
  const trimmed = value.trim();
  if (lang === "en" || !bnText[trimmed]) return value;
  return value.replace(trimmed, bnText[trimmed]);
}

function applyLanguage(lang) {
  document.documentElement.lang = lang === "bn" ? "bn" : "en";

  translatableNodes.forEach((node) => {
    const original = originalText.get(node);
    node.textContent = translateValue(original, lang);
  });

  document.title = translateValue(originalTitle, lang);

  if (languageToggle) {
    languageToggle.textContent = lang === "bn" ? "English" : "বাংলা";
    languageToggle.setAttribute("aria-label", lang === "bn" ? "Switch to English" : "বাংলায় দেখুন");
  }
}

collectTextNodes(document.body);

const savedLanguage = localStorage.getItem("schoolLanguage") || "bn";
applyLanguage(savedLanguage);

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "bn" ? "en" : "bn";
    localStorage.setItem("schoolLanguage", nextLanguage);
    applyLanguage(nextLanguage);
  });
}

function updateChrome() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;

  if (progress) {
    progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  }

  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  parallaxItems.forEach((item) => {
    const speed = Number(item.dataset.parallax || 0.12);
    item.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
  });
}

function animateCounter(item) {
  const target = Number(item.dataset.count || 0);
  const suffix = item.dataset.suffix || "";
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progressValue = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progressValue, 3);
    item.textContent = `${Math.round(target * eased)}${suffix}`;

    if (progressValue < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("in-view");

        if (entry.target.hasAttribute("data-count") && !entry.target.dataset.done) {
          entry.target.dataset.done = "true";
          animateCounter(entry.target);
        }

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
  counters.forEach((item) => observer.observe(item));
}

window.addEventListener("scroll", updateChrome, { passive: true });
window.addEventListener("resize", updateChrome);
updateChrome();
