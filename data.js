window.MILESTONES = [
  {label:"Applicant year", iso:"2026-09-11", display:"Year 5", note:"Year 7 entry September 2028"},
  {label:"Grammar registration", iso:"2027-07-08", display:"Jul 2027", note:"First hard deadline"},
  {label:"Common application form", iso:"2027-10-31", display:"31 Oct 2027", note:"Six preferences, one form"},
  {label:"National Offer Day", iso:"2028-03-01", display:"1 Mar 2028", note:"One offer only"}
];

window.SCHOOLS = [

/* ======================= GRAMMAR ======================= */
{
  id:"qe-barnet", cat:"grammar", name:"Queen Elizabeth's School, Barnet",
  location:"Barnet, EN5 · boys",
  criteria_short:"Own two-paper multiple-choice test in English and maths. Ranked purely on score.",
  fees_per_term:"None — state funded",
  next_open_day:"Not published · usually first Thursday in July",
  flags:[{text:"No catchment",tone:"good"},{text:"No reasoning paper",tone:""},{text:"Real bar 235, not 225",tone:"crit"}],
  detail:{
    headline_notes:[
      {tone:"crit", text:"<strong>The published qualifying score is not the real one.</strong> The school states 225 as the standard, but the lowest score actually admitted has been 232, 234, 232, 235 and 235 across the last five years. Treat 235 as the working target."},
      {tone:"good", text:"<strong>No catchment, no sibling rule, no faith test, no staff priority.</strong> Distance is a tie-break between equal scores and nothing more. Geography is close to irrelevant here."}
    ],
    criteria_detail:"This is structurally the simplest school on the entire list. The published criteria contain no named priority categories at all. Every applicant reaching the qualifying standard is ranked by combined test score, the top 180 are offered places, ties are broken by straight-line distance to the main school gate, and any remaining ties by an independently supervised ballot.\nOne gap worth raising directly with the school: the published document does not mention pupils with an education, health and care plan at all. Statutory priority applies regardless of what a policy says, but the silence is unusual.",
    banding:"None. Pure rank order by score.",
    alternative_entry:"None. There is no music, sport or art route. All 180 places go through the single academic test.",
    exam_detail:"Two multiple-choice papers, English and maths, sat in one session on one day. Single stage, no second round, no interview. Marked electronically and standardised by age.\n<strong>No verbal or non-verbal reasoning.</strong> The school's own familiarisation material covers English and mathematics only. Its provider is widely reported to be GL Assessment, which also sells reasoning papers, but the papers this school buys are English and maths.\nSample papers are published. Past papers are not released. Free preparation is offered to pupil premium families through a partnership with an online learning provider.",
    timeline_rows:[
      ["Registration opens","~1 May 2027","Projected"],
      ["Open Day","~first Thursday July 2027","Projected"],
      ["Registration closes","~8 July 2027, 12 noon","Projected"],
      ["Entrance test","~15–16 September 2027","Projected"],
      ["Results released","~1 October 2027","Projected · before the deadline"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[
      ["Registration fee","None",1],
      ["Test fee","None",1],
      ["Deposit","Not applicable",1]
    ],
    deadlines_note:"No late entries are accepted under any circumstances. Registration opens on 1 May and closes at noon in early July, so the window sits entirely inside the summer term of Year 5.\nResults arrive around 1 October, three weeks before the application deadline, so you can rank this school knowing the score.",
    performance_rows:[
      ["Attainment 8","85.6 (2025)",1],["Progress 8","Not calculable nationally",1],
      ["GCSE 9–7","95.5%",1],["Grade 9","64%",1],
      ["A level A*–A","86.3%",1],["A level average","Grade A*",1],
      ["Ofsted","Outstanding, May 2022",0]
    ],
    destinations_rows:[
      ["Oxbridge offers","44 in 2026 · 29 Cambridge, 15 Oxford",1],
      ["Four-year total","202 offers",1],
      ["Offer rate","~40% of applicants",1],
      ["Russell Group","66% of leavers (school figure)",1]
    ],
    bursary_scholarship:"None. State funded. Free entrance-test preparation is offered to pupil premium families, which is preparation support rather than financial assistance.",
    numbers_rows:[
      ["Year 7 places","180",1],["Total roll","1,321",1],
      ["Sat the test (2025)","3,433",1],["Reached the standard","764",1],
      ["Applicants","809",1],["Applicants per place","4.5 to 1",1]
    ],
    sixth_form:"Yes, boys only at 16. There is no external entry into Year 12. Rated outstanding at the 2022 inspection.",
    open_days_detail:"One open day a year, all day, in eight timed sessions. Maximum three visitors per family, one booking per family, first come first served. Booking details are published towards the end of May. No parking. No year-round tours.",
    other_info:"A genuine cross-London journey from north-west London, typically two lines plus a bus. The roll of 1,321 exceeds the recorded capacity of 1,200, which is unexplained in the published sources.",
    sources:["https://www.qebarnet.co.uk/admissions-information/secondary-transfer-entrance-test-faqs/","https://www.qebarnet.co.uk/admissions-information/admissions-information-parents/","https://www.qebarnet.co.uk/about-us/school-performance/","https://reports.ofsted.gov.uk/provider/23/136290"]
  }
},
{
  id:"tiffin", cat:"grammar", name:"Tiffin School",
  location:"Kingston upon Thames, KT2 · boys",
  criteria_short:"Two-stage own test. Stage one multiple choice, stage two written. Combined score.",
  fees_per_term:"None — state funded",
  next_open_day:"Not published · 2027-entry evening has passed",
  flags:[{text:"10km priority area",tone:"crit"},{text:"100% of places inside it",tone:"crit"},{text:"9 music places",tone:"good"},{text:"Address settled by Sept",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"crit", text:"<strong>In 2024, 2025 and 2026 every single place went to a boy already inside the 10 kilometre priority area.</strong> The out-of-area category has been empty three years running. From north-west London, roughly 17 kilometres away, a qualifying address is a precondition rather than an advantage."},
      {tone:"good", text:"<strong>Up to nine reserved music places.</strong> They do not bypass the academic bar, but they do come with a separate 10 per cent leeway at stage one, and the aptitude assessments fall in early July of Year 5."},
      {tone:"warn", text:"<strong>Residence for the music route is measured at the early July form deadline,</strong> not at the October application deadline. The school states it cannot arrange aptitude assessments for boys who move in afterwards."}
    ],
    criteria_detail:"Order of allocation: pupils with a plan naming the school; then looked-after and pupil premium boys inside the priority area who reach the 450th-ranked combined score; then remaining priority-area places by score; then out-of-area places by score; then up to 18 reserved sport and music places.\nThe priority area is a single tier, under 10 kilometres straight line. The widely repeated tiered version with an inner and outer band is stale and pre-dates 2019.\nThe measuring point changed between cycles, from the nearer of two pedestrian gates to the Queen Elizabeth Road gate alone. It could change again before 2028.",
    banding:"None. Pure rank order by combined score.",
    alternative_entry:"Up to nine sport and nine music places, 18 of 186. <strong>These do not bypass the academic bar.</strong> A boy must already hold a combined score at or above the 450th rank to be eligible. The only pre-bar effect is a separate 10 per cent leeway for aptitude candidates to reach stage two at all.\nThat 450th-rank threshold is materially softer than the roughly 180-place open bar, which is what makes this the most realistic selective route on the list for a boy whose strength is music rather than timed comprehension.",
    exam_detail:"Two stages, with papers built bespoke each year by the school's test provider.\nStage one: multiple choice, machine marked, English and maths, roughly 40 to 60 minutes each, early October. This is a sift only.\nStage two: written and hand marked, English and maths including extended writing, mid-November, invited candidates only.\nWeighting is published: the combined score is 50 per cent English and 50 per cent maths, with the English component taken wholly from stage two and the maths component combining stage one and stage two in a 2 to 3 ratio.\n<strong>No verbal or non-verbal reasoning paper.</strong> The school publishes illustrative questions for English and maths only.",
    timeline_rows:[
      ["Registration opens","~early June 2027","Projected"],
      ["Music and sport form","~6 July 2027, 9am","Projected · residence measured here"],
      ["Music assessments","~8–10 July 2027","Projected"],
      ["Main form deadline","~1 September 2027, 12 noon","Projected"],
      ["Stage one test","~2 October 2027","Projected"],
      ["Stage two invitations","~16 October 2027","Projected"],
      ["Common application form","31 October 2027","Confirmed"],
      ["Stage two test","~mid-November 2027","Projected"],
      ["Stage two rank","1 March 2028","After the deadline"]
    ],
    costs_rows:[["Registration fee","None",1],["Test fee","None",1]],
    deadlines_note:"<strong>Two dates fall well before the common application form.</strong> The music and sport form closes in early July 2027 and residence is measured on that date. The main form closes in early September 2027, roughly eight weeks before the October deadline.\nStage one results arrive mid-October, before the deadline. The final stage two rank is not released until offer day, so a preference for this school is ranked without knowing the outcome.\nThe qualifying parent is identified as the one receiving Child Benefit unless a legal document says otherwise.",
    performance_rows:[
      ["Attainment 8","79.1 (2024/25)",1],["Progress 8","+0.86 (2023/24)",1],
      ["GCSE 9–7","79.1% (calculated)",1],["A level A*–A","70.2% (calculated)",1],
      ["Ofsted","Good, May 2022",0]
    ],
    university_destinations:"Not published in any numeric form. The school's own results releases carry narrative claims only, so destinations here are unverified.",
    bursary_scholarship:"None. State funded. Pupil premium eligibility affects admissions ranking and unlocks free online preparation.",
    numbers_rows:[
      ["Year 7 places","180 published, 186 offered",1],["Total roll","1,478",1],
      ["Sat stage one (2026)","1,866",1],["Sat stage two","665",1],
      ["Offered","186",1],["Ratio","~10 to 1",1],
      ["Qualifying score","100 (2026), 98 (2025), 102 (2024)",1],
      ["Inside priority area","100% of offers, three years running",1]
    ],
    sixth_form:"Yes, and coeducational at 16. Internal progression needs 56 GCSE points across eight subjects plus grade 5 in English and maths. The statutory external intake is 90.",
    open_days_detail:"One open evening a year, most recently at the end of June. Nothing published for the 2028 cycle. No year-round tours.",
    other_info:"Boys at Year 7, coeducational at 16. There is no sibling priority category at all, which is unusual. No parking on test days. This is the only school on the list whose published inspection grade is good rather than outstanding, alongside Sutton Grammar.",
    sources:["https://www.tiffinschool.co.uk/admissions/year-7-admissions/","https://www.tiffinschool.co.uk/wp-content/uploads/2025/12/Tiffin-Admissions-Policy-2027-28-for-Consultation.pdf","https://reports.ofsted.gov.uk/provider/23/136910"]
  }
},
{
  id:"wilsons", cat:"grammar", name:"Wilson's School",
  location:"Wallington, SM6 · boys",
  criteria_short:"Sutton Selective Eligibility Test, then Wilson's own written stage two.",
  fees_per_term:"None — state funded",
  next_open_day:"Not published · school will publish in spring 2027",
  flags:[{text:"No catchment at all",tone:"good"},{text:"9 music + 9 sport places",tone:"good"},{text:"No reasoning paper",tone:""}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>No catchment and no priority area.</strong> This is the most geographically open of the three Sutton schools and, with Queen Elizabeth's, one of only two on the list where moving house would buy nothing. A Sutton preference sits inside the tie-break, but ties are rare."},
      {tone:"good", text:"<strong>Nine music and nine sport places.</strong> They rank within candidates who have already passed, so they do not lower the academic bar, but they are a real route once through."}
    ],
    criteria_detail:"Order: pupils with a plan naming the school; looked-after boys by score; up to 14 places for pupil premium boys by score; up to nine sport places; up to nine music places; then remaining places by rank order.\nFinal rank combines the consortium test and the two stage-two papers in a 1 to 2 to 2 ratio, standardised by age.\nDistance is a tie-break only, measured straight line to the main front door. The tie-break itself prefers Sutton residents, then others by distance, then a ballot.",
    banding:"None. Fully academically selective.",
    alternative_entry:"Nine sport and nine music places out of 186. Candidates must first pass the consortium test at this school's threshold and pass both stage-two papers before an aptitude assessment can rank them. The assessment is described as testing potential to develop ability, held on a Saturday in October.",
    exam_detail:"Two stages.\nStage one, the shared consortium test: two multiple-choice papers, maths and English, 40 to 50 minutes each with a break between, paper-based with a separate answer sheet, no negative marking, standardised by age, content broadly Key Stage 2.\n<strong>The consortium states in its own words that the tests do not include verbal reasoning or non-verbal reasoning.</strong>\nStage two, shared with Sutton Grammar and Wallington: one maths and one English paper, written rather than multiple choice, around 45 minutes to an hour each. Automatic for boys meeting the threshold.\nOfficial sample questions are published for stage one. There is no sample material at all for stage two.",
    timeline_rows:[
      ["Registration opens","~1 May 2027","Projected"],
      ["Registration closes","~31 July 2027, midnight","Projected"],
      ["Consortium test","~14–15 September 2027","Projected"],
      ["Stage two","~2 October 2027","Projected"],
      ["Aptitude tests","~9 October 2027","Projected"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Test fee","None",1]],
    deadlines_note:"<strong>There is no residence qualifying date at all,</strong> because there is no catchment. This is the only school on the list with no geographic deadline pressure.\nThe access-arrangements deadline in mid-June is roughly four and a half months before the application deadline and is the binding date for anyone seeking extra time.",
    performance_rows:[
      ["Attainment 8","86.7 (2026)",1],["Progress 8","+1.27 (2024)",1],
      ["GCSE 9–7","96.2%",1],["Pass rate","100%",1],
      ["A level A*–A","79.4%",1],
      ["Ofsted","Outstanding, September 2022",0]
    ],
    destinations_rows:[["Oxbridge places","34 in 2026, 21 in 2024",1],["Russell Group","Not published",1]],
    bursary_scholarship:"None. State funded. The statutory sixth-form bursary fund applies from 16.",
    numbers_rows:[["Year 7 places","186",1],["Total roll","1,327",1],["Applicants","Not published",1]],
    sixth_form:"Yes, boys only through Year 13. External Year 12 entry requires at least grade 8 in GCSE maths, with remaining places allocated by total points.",
    open_days_detail:"Four evening events each June, ticketed, booked through the school website. No year-round tours. Dates for the 2028-entry cycle will be published in spring 2027.",
    other_info:"A genuine cross-London journey from north-west London, realistically an hour or more each way with at least one change. Academy within a single-school trust.",
    sources:["https://www.wilsons.school/admissions-criteria/","https://www.wilsons.school/year-7-applying-for-a-place/","https://www.wilsons.school/exam-results/","https://reports.ofsted.gov.uk/provider/23/136621"]
  }
},
{
  id:"sutton-grammar", cat:"grammar", name:"Sutton Grammar School",
  location:"Sutton, SM1 · boys",
  criteria_short:"Sutton Selective Eligibility Test, then the school's own written stage two.",
  fees_per_term:"None — state funded",
  next_open_day:"Wednesday 23 September 2026, 4.45–8pm · for Year 5 boys, no booking",
  flags:[{text:"Open evening in 12 days",tone:"good"},{text:"85 of 150 places postcode-reserved",tone:"warn"},{text:"No aptitude route",tone:"crit"},{text:"Deprivation-adjusted scoring",tone:""}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>This is the only open event on the whole list that falls in the next nine months and is aimed at Year 5 boys.</strong> Wednesday 23 September 2026, 4.45 to 8pm, no booking needed. Every other school has closed its Year 6 programme and will not publish Year 5 dates until spring or summer 2027."},
      {tone:"warn", text:"<strong>Fifty-seven per cent of places are reserved for a named postcode list,</strong> which extends beyond Sutton borough and does not cover all of it. Of the three Sutton schools this is the one where relocation would matter most."},
      {tone:"crit", text:"<strong>There is no music, sport or art route here.</strong> All 150 places go through the same academic bar. Claims elsewhere of nine music and nine sport places belong to Wilson's, not this school."}
    ],
    criteria_detail:"Order: pupils with a plan naming the school; looked-after boys; children of trust staff; up to 10 places for pupil premium boys in the priority postcodes; 75 places for other boys in the priority postcodes; then remaining places open to any postcode, all by combined score.\nThe priority area is a named postcode list rather than a borough or a radius: SM1 to SM7, KT4, KT17, CR0 4 and CR4. It includes parts of Kingston and Croydon and excludes parts of Sutton.\n<strong>Marks are adjusted for age and for income deprivation</strong> using a recognised area-level index, which is unusual and is confirmed in the determined policy.",
    banding:"None. Fully selective.",
    alternative_entry:"None. No music, sport or art route exists in the determined policy.",
    exam_detail:"Stage one, the shared consortium test: two multiple-choice papers, maths and English, 40 to 50 minutes each, paper-based, content broadly Key Stage 2. <strong>The consortium states explicitly that the tests do not include verbal reasoning or non-verbal reasoning.</strong>\nStage two, shared with Wallington and Wilson's: one maths and one English paper, written rather than multiple choice, roughly 45 minutes to an hour each, on a Saturday in early October. Automatic for boys meeting this school's threshold.\nSample questions are published for stage one only.",
    timeline_rows:[
      ["Open evening for Year 5","23 September 2026","Confirmed · the 2028-entry cohort"],
      ["Registration opens","~May 2027","Projected"],
      ["Registration closes","~31 July 2027","Projected"],
      ["Consortium test","~mid-September 2027","Projected"],
      ["Stage two","~early October 2027","Projected"],
      ["Result notified","Before 31 October 2027","Projected"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Test fee","None",1]],
    deadlines_note:"The address must be current at the October application deadline, so there is no earlier residence date to worry about. The access-arrangements deadline in mid-June is the real early date.",
    performance_rows:[
      ["Attainment 8","80.3 (2025)",1],["Progress 8","+1.2 (2024)",1],
      ["GCSE 9–7","81.1% (2025)",1],["Grade 9","33.3%",1],
      ["A level A*–A","67.0% (2025)",1],
      ["Ofsted","Good, June 2022",0]
    ],
    destinations_rows:[
      ["Oxbridge places 2025","12 · 9 Cambridge, 3 Oxford",1],
      ["2024","16",1],["2023","10",1],
      ["Medicine and dentistry","24 students in 2025",1]
    ],
    bursary_scholarship:"None for Years 7 to 11. State funded. A sixth-form bursary fund covers textbooks, travel and trips for students on free school meals or below a household income threshold.",
    numbers_rows:[["Year 7 places","150, up from 135",1],["Total roll","~1,043",1],["Applicants","Not published",1]],
    sixth_form:"Yes, and coeducational at 16. Year 12 intake is 190 with around 50 external places. Sixth form open evening 11 November 2026.",
    open_days_detail:"Year 7 open evening 23 September 2026, with head's talks at 5.00, 5.35, 6.10 and 6.45pm and student-guided tours. Entry via Manor Lane, exit via Greyhound Road, parking at the Times Square car park. A virtual tour is also available. No year-round tours.",
    other_info:"Sutton is roughly 13 miles from central London. A recent structural shift is worth watching: the intake rose from 135 to 150 and a new pupil premium sub-criterion was introduced that did not exist three cycles ago.",
    sources:["https://www.suttongrammar.sutton.sch.uk/admissions/","https://www.suttongrammar.sutton.sch.uk/admissions/faqs/","https://reports.ofsted.gov.uk/provider/23/136787"]
  }
},
{
  id:"wallington", cat:"grammar", name:"Wallington County Grammar School",
  location:"Wallington, SM6 · boys",
  criteria_short:"Sutton Selective Eligibility Test, then the school's own written second stage.",
  fees_per_term:"None — state funded",
  next_open_day:"July 2027 · for September 2028 entry, details to follow",
  flags:[{text:"Only 15 of 150 postcode-reserved",tone:"good"},{text:"No aptitude route",tone:"warn"},{text:"Russell Group 72%",tone:"good"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>Only 15 of 150 places are postcode-reserved, against 85 at Sutton Grammar.</strong> That makes this substantially more open to an out-of-area family than its neighbour, though less open than Wilson's, which reserves none."},
      {tone:"good", text:"<strong>The next open evening is explicitly for the 2028-entry cohort,</strong> in July 2027 for September 2028 entry. The school has said so in writing."}
    ],
    criteria_detail:"Order: pupils with a plan naming the school who meet the standard; looked-after children meeting the standard; children of permanent staff; then rank order of combined score, with these first three capped together at 110 places; then up to 25 places for pupil premium boys meeting the standard; then up to 15 places for boys meeting the standard whose home address at the October deadline falls in a named postcode list.\nUnfilled places in the last two categories roll back into the general rank order.\nWeighting is published: two fifths from the consortium test and three fifths from the second stage.\nDistance is a tie-break only, measured straight line to the front entrance, with lots drawn for any remaining ties.",
    banding:"None. Rank order by combined score within the named priority groups.",
    alternative_entry:"None published. There is no music, sport or art route. Every priority group other than looked-after children and staff children still requires reaching the combined qualifying standard.",
    exam_detail:"Stage one is the shared consortium test: two multiple-choice papers, maths and English, 40 to 50 minutes each, paper-based, run centrally for six Sutton schools. <strong>No verbal or non-verbal reasoning.</strong>\nStage two is jointly administered with Sutton Grammar and Wilson's, so it is the same sitting: one maths and one English paper, written, around 45 minutes to an hour each. Automatic for boys reaching this school's threshold.\nThe school's parent association, rather than the school itself, runs familiarisation tests for Year 5 pupils each year.",
    timeline_rows:[
      ["Open evening","July 2027","Confirmed for 2028 entry"],
      ["Registration opens","~1 May 2027","Projected"],
      ["Registration closes","~31 July 2027","Projected"],
      ["Consortium test","~mid-September 2027","Projected"],
      ["Second stage test","~early October 2027","Projected"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Test fee","None",1]],
    deadlines_note:"Both the postcode priority and the pupil premium criterion use the October application deadline as the residence date, so there is no earlier cut-off. The access-arrangements deadline in June is the binding early date.",
    performance_rows:[
      ["GCSE grade 9","34% (2026)",1],["GCSE 9–7","86% (2026)",1],
      ["Grade 9–4","100%",1],
      ["A level A*–A","67% (2026)",1],["A level A*–B","90%",1],
      ["Ofsted","Outstanding, November 2022",0]
    ],
    destinations_rows:[
      ["Russell Group 2025","72%",1],["2024","67%",1],["2023","58%",1],
      ["Russell Group, pupil premium","57% in 2025",1],
      ["Oxbridge","6% of leavers, 2025",1],
      ["University or degree apprenticeship","97–99%",1]
    ],
    bursary_scholarship:"None for Years 7 to 11. State funded. A sixth-form vulnerable bursary of up to £1,200 and a discretionary income-based bursary exist from 16.",
    numbers_rows:[["Year 7 places","150",1],["Total roll","1,119",1],["Applicants","Not published",1]],
    sixth_form:"Yes, and confirmed coeducational at 16 despite being boys only lower down. Entry needs eight GCSEs including three at grade 7 or above. Predicted grades are not accepted, so applications open on results day.",
    open_days_detail:"One Year 7 open evening a year, most recently in July 2026. The next is July 2027 for the 2028-entry cohort. A separate sixth form evening runs each November. No year-round tours, but a self-service digital tour is published.",
    other_info:"Roughly 14 to 16 miles from north-west London with no direct rail route and at least one change. The admissions authority is the academy trust board rather than the school, and it redetermines arrangements annually.",
    sources:["https://www.wcgs-sutton.co.uk/content/?pid=16&contentid=57","https://www.wcgs-sutton.co.uk/page/?pid=109","https://files.ofsted.gov.uk/v1/file/50203380"]
  }
},

/* ======================= CE / FAITH ======================= */
{
  id:"chelsea-academy", cat:"faith", name:"Chelsea Academy",
  location:"Chelsea, SW10 · coed",
  criteria_short:"Twice monthly for 1 year, child's attendance, priest-signed; or a C of E primary plus living within 3.5 miles. No test.",
  fees_per_term:"None — state funded",
  next_open_day:"Thursday 24 September 2026, 5–8pm · no booking needed",
  flags:[{text:"Faith route undersubscribed",tone:"good"},{text:"Lowest attendance bar on the list",tone:"good"},{text:"Needs a move inside 3.5 miles",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>This is the single biggest opportunity on the list.</strong> In both 2025 and 2026 every qualifying church applicant was offered a place. Nineteen to twenty-two offers a year, all of them filled, while the open route ran out at 1.93 miles against 498 applications for 180 places."},
      {tone:"good", text:"<strong>The 2.5 mile radius applies to the church or the primary school, never to your home.</strong> A separate criterion, based on attending a C of E primary and living within 3.5 miles, is the one that turns on your own address. A Church of England primary satisfies the school half of it, and there is no borough restriction on which one."},
      {tone:"warn", text:"<strong>north-west London is about 4.6 miles out, so this needs a move of roughly a mile.</strong> That is the smallest relocation of anything on the list that changes an outcome. The document defining the radius is referenced in the policy but missing from the published version — request it."}
    ],
    criteria_detail:"Order: pupils with a plan naming the academy; looked-after children; exceptional medical or social need; children of staff; siblings. The remaining places then split equally between foundation and community, with unfilled places in either transferring to the other.\nThe foundation criteria run in three tiers. The first needs a qualifying church plus enrolment at a C of E primary in the local borough. The second needs a C of E primary or a church within 2.5 miles of the academy. <strong>The third needs enrolment at a C of E primary and a home within 3.5 miles</strong> — and unlike the first tier, it carries no borough restriction, so a Westminster church primary reads as qualifying.\nFaith evidence: regular attendance for at least one year within the past three years, at least twice a month, on a form signed by your priest or minister. The determined policy frames this around the child; the website mentions parents too. The policy is authoritative, but get it in writing.\nTie-break is straight-line distance to the centre of the site.",
    banding:"None. The academy states plainly that there are no banding tests for Year 7 entry.",
    alternative_entry:"None. No music, art or sport route.",
    exam_detail:"No test of any kind.",
    timeline_rows:[
      ["Open evening","24 September 2026","Confirmed · this autumn"],
      ["Foundation form to the academy","31 October 2027","Projected"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Supplementary form","None",1]],
    deadlines_note:"<strong>The attendance window can start as late as autumn 2026.</strong> A 2028 application needs one year of twice-monthly attendance falling within the three years to October 2027, which means the clock has only just started rather than already run out. That is unique among the faith schools here.\nThe foundation form goes back to the academy, not the council, and postal submissions must be postmarked on or before the deadline.",
    performance_rows:[
      ["Attainment 8","51.9 (2024/25)",1],["Progress 8","+0.23 (2023/24)",1],
      ["Grade 5+ English and maths","53.1%",1],
      ["A level A*–B","54.1%",1],["A level average","Grade B−",1],
      ["Ofsted","Good, September 2023",0],
      ["Church inspection","Flourishing, November 2024",0]
    ],
    destinations_rows:[
      ["Higher education","90% of 2022 leavers",1],
      ["Selective universities","34% to top-third institutions",1],
      ["Oxbridge","12 since 2019, no recent single-year figure",1]
    ],
    bursary_scholarship:"None. State funded.",
    numbers_rows:[
      ["Year 7 places","180",1],["Total roll","1,126",1],
      ["Applications 2026","498",1],["Per place","2.8 to 1 · the least contested here",1],
      ["Faith offers","21 · all qualifying applicants",1],
      ["Open offers","94, last at 1.930 miles",1],
      ["Plan places","10",1]
    ],
    sixth_form:"Yes, coeducational, with 50 external places in Year 12 as a minimum rather than a cap. Around 113 students take A levels.",
    open_days_detail:"Year 6 open evening Thursday 24 September 2026, 5 to 8pm, no booking needed. Pre-booked daytime tours run from mid-September to late October, roughly 40 minutes during a normal school day, with separate booking routes for parents alone and for parents with their child. Sixth form evening 12 November 2026.",
    other_info:"Where care is shared equally and parents cannot agree, the academy uses the address of <strong>the parent receiving Child Benefit</strong>, then the address where the child is registered with a doctor. Worth checking who currently receives Child Benefit.\nThe waiting list is managed to preserve the even faith and community split and runs to the end of Year 7.",
    sources:["https://chelsea-academy.org/wp-content/uploads/2025/12/Admission-policy-2027-28.pdf","https://chelsea-academy.org/admissions/foundation-places/","https://www.rbkc.gov.uk/media/document/how-places-were-offered-at-bi-borough-secondary-schools---2-march-2026","https://reports.ofsted.gov.uk/provider/23/135531"]
  }
},
{
  id:"fulham-boys", cat:"faith", name:"The Fulham Boys School",
  location:"Fulham, SW6 · boys",
  criteria_short:"Practising member confirmed by a minister, no minimum frequency stated, but you must live within 2 miles. Or sports aptitude.",
  fees_per_term:"None — state funded",
  next_open_day:"Thursday 24 September 2026 · talks 6pm and 7.15pm, booking form",
  flags:[{text:"Lightest faith evidence bar",tone:"good"},{text:"2-mile zone gates everything",tone:"crit"},{text:"Ballot, not distance, inside the zone",tone:"good"},{text:"Sports route only, no music",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"crit", text:"<strong>The two-mile zone gates the faith route, and north-west London is about 4.4 miles out.</strong> In 2026 a family outside the zone received one offer across the entire faith route and none at all on the open route. The same pattern held in 2025. Church commitment buys nothing here without moving."},
      {tone:"good", text:"<strong>Inside the zone, allocation is by ballot rather than distance.</strong> So any address within two miles is equally good and there is no need to chase the tightest street. That is a large, genuinely liveable area."},
      {tone:"good", text:"<strong>The faith evidence bar is the lightest of any school here.</strong> The policy states no minimum frequency and no minimum duration. It rests entirely on what your minister is willing to certify."}
    ],
    criteria_detail:"Order: pupils with a plan naming the school; looked-after children; founders' children; children of staff; up to fifteen sports aptitude places. Only then do the remaining places split evenly between Christian faith places and open places, with unfilled places in either converting to the other.\nWithin the faith half: siblings, then practising Anglicans resident in the zone, then other practising Christians resident in the zone. Within the open half: siblings, then residents of the zone, then everyone else. Ballot resolves oversubscription in any band.\nResidence is defined as where the child lives for <strong>the majority of the school week</strong>, which differs from the Child Benefit rule Chelsea Academy uses.",
    banding:"None.",
    alternative_entry:"<strong>Up to fifteen sports places,</strong> ranked above both the faith and open categories, so they bypass faith, the zone and the ballot entirely. Fitness tests of speed, stamina, agility and power, then football and rugby skills assessment with a sporting record reviewed.\nThe route is filling fast: five places used in 2025, eleven in 2026, against a cap of fifteen. It is the fastest-growing entry point at the school.\n<strong>There is no music route.</strong>",
    exam_detail:"Sports aptitude only. No academic or banding test.",
    timeline_rows:[
      ["Open evening","24 September 2026","Confirmed"],
      ["Open day","1 October 2026","Confirmed"],
      ["Sports aptitude form","~1 October 2027","Projected"],
      ["Sports assessments","~mid-October 2027","Projected"],
      ["Faith form","31 October 2027","Projected"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Supplementary form","None",1]],
    deadlines_note:"Sports results are communicated before the application deadline where possible, so the outcome can inform ranking. The waiting list is re-randomised every time a name is added or removed.",
    performance_rows:[
      ["Attainment 8","61.4 (2024/25)",1],["Progress 8","+0.93 (2023/24)",1],
      ["Grade 5+ English and maths","70.0%",1],["Grade 4+","94.2%",1],
      ["GCSE 7+","48.6% of grades (2026)",1],
      ["A level A*–A","just under 40% (2026)",1],
      ["Ofsted","Good, October 2022 · personal development outstanding",0],
      ["Church inspection","Flourishing, May 2026",0]
    ],
    destinations_rows:[
      ["Russell Group 2026","over 60% of applicants",1],
      ["Oxbridge 2026","3 · 2 Cambridge, 1 Oxford",1],
      ["2024","4 Oxbridge",1]
    ],
    bursary_scholarship:"None. State funded.",
    numbers_rows:[
      ["Year 7 places","130",1],["Total roll","~822",1],
      ["Applications 2026","634",1],["Per place","4.9 to 1",1],
      ["Faith offers inside zone","51",1],["Faith offers outside zone","1",1],
      ["Open offers outside zone","0, two years running",1],
      ["Sports places used","11 of 15",1]
    ],
    sixth_form:"Yes. External applicants are admitted only if internal candidates have not taken the places, with a published external intake of 20. Entry needs five GCSEs at grade 5 or above.",
    open_days_detail:"Open evening Thursday 24 September 2026, talks at 6pm and 7.15pm, tours after, ending by 8.30pm. Open day Thursday 1 October 2026, talks at 9.15am and 11.15am with tours of the school in action. Booking by online form. No year-round tours published.",
    other_info:"Proof of residence and an original or certified short birth certificate are required. A boys' church school that looks ideal on paper and is closed on geography alone until you move.",
    sources:["https://fulhamboysschool.org/admissions/year-7-admissions/","https://fulhamboysschool.org/curriculum/exam-results/","https://reports.ofsted.gov.uk/provider/23/141135"]
  }
},
{
  id:"twyford", cat:"faith", name:"Twyford CE High School",
  location:"Acton, W3 · coed",
  criteria_short:"Weekly attendance, 5 years, child and parent both. A perfect 21 out of 21 was needed last round. Or the music test.",
  fees_per_term:"None — state funded",
  next_open_day:"24 September 2026 · but Year 5 families are asked not to attend",
  flags:[{text:"Faith route needs 21/21",tone:"crit"},{text:"19 music places, 3 to 1",tone:"good"},{text:"Best results on the list",tone:"good"},{text:"No open route at all",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"crit", text:"<strong>The faith route needs a perfect score.</strong> The maximum is 21 points. Every applicant scoring 21 was offered a place. Every applicant scoring 20 or below was refused, all 124 of them. Twenty-one requires weekly attendance by both child and parent for five years, so any gap in either record caps the score below the pass mark."},
      {tone:"good", text:"<strong>The music route is wide open by comparison.</strong> Nineteen places, 57 applicants, allocated purely on aptitude score with no faith test and no distance test. Roughly three to one."},
      {tone:"warn", text:"<strong>There is no open or community route at all.</strong> Every non-music applicant must supply a religious reference. In the last round, 245 applicants submitted no supplementary form and every one was refused."}
    ],
    criteria_detail:"Intake of 190, split into 150 foundation places, 21 world faith places and 19 specialist music places.\nFoundation scoring runs to a maximum of 21: up to 5 for the child's frequency of worship over five years, up to 5 for the child's length of attendance, up to 5 and 5 again for the parent, and 1 if the family's main church is Church of England. Weekly is defined precisely as being in church on the Sundays in term time and at least half of other Sundays. Attendance at church with the primary school does not count.\nDeanery ordering breaks ties within a score: siblings, then the local deanery, then the neighbouring ones, then everywhere else. north-west London sits in the third tier.\n<strong>The published outcome is harsher than the policy suggests.</strong> The policy anticipates distance applying to candidates scoring 20 or 21. In practice nobody below 21 was offered.",
    banding:"None.",
    alternative_entry:"<strong>Nineteen specialist music places.</strong> This is a single shared test run across three schools in the same trust — here, Ada Lovelace and Ealing Fields — so one assessment process covers three separate preferences.\nIt assesses natural ability to hear and discriminate pitch, rhythm, chords and melodies, explicitly regardless of any prior tuition. Certificates are not accepted and are not relevant.\nTwo rounds. The first is an unseen listening test under exam conditions, one hour, marked out of 60. The second, for the highest scorers, is about twenty minutes of aural tests: clapping and playing back rhythms and pitches on classroom instruments, identifying instruments in recordings, and singing short phrases, marked out of 40. Scores are added and ranked.\n<strong>This bypasses faith and distance entirely.</strong>\nScholars commit to choir, an ensemble and a weekly skills session, roughly 2 to 2.5 hours a week, must learn a string, woodwind or brass instrument as first or second study, and must pass an annual graded exam.",
    exam_detail:"Music aptitude only. No banding and no academic test.\nThe application form invites disclosure of any special educational need or disability that may affect the testing process so arrangements can be made. This is one of the few aptitude processes on the list that says so explicitly.",
    timeline_rows:[
      ["Music application","~1 October 2027, 4pm","Projected · earliest deadline here"],
      ["Round one listening test","~second week October 2027","Projected"],
      ["Round two aural test","~third week October 2027","Projected"],
      ["Faith form, hard copy only","~third week October 2027, 4pm","Projected"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Music test","None",1]],
    deadlines_note:"<strong>The faith form must be an original hard copy. Emailed copies are not accepted.</strong> Send by registered or recorded post. A late religious reference cannot be considered until after offers are made.\nFor a 2028 application the five-year attendance window runs from roughly October 2022, so most of that record is already written.",
    performance_rows:[
      ["Attainment 8","67.1 (2024/25) · highest here",1],
      ["Progress 8","+1.08 (2023/24), +1.26 (2022/23)",1],
      ["Grade 5+ English and maths","82.0%",1],
      ["GCSE 9–7","49% of grades (2026), 55% (2025)",1],
      ["A level average","Grade B+, 43.29 points",1],
      ["A level A*–A","47% (2026)",1],
      ["Ofsted","Outstanding in every category, October 2023",0],
      ["Church inspection","Flourishing, November 2024",0]
    ],
    destinations_rows:[
      ["Oxbridge 2026","16 students",1],["2025","14",1],
      ["Medicine 2026","11",1],
      ["Selective universities","61% to top-third institutions",1],
      ["Higher education","90% of leavers",1]
    ],
    bursary_scholarship:"None. State funded. Music scholars get free small-group tuition in Year 7 or a discount on individual lessons, which has real cash value but is not financial assistance.",
    numbers_rows:[
      ["Year 7 places","190 · 150 foundation, 21 world faith, 19 music",1],
      ["Total roll","~1,626, capacity 1,372",1],
      ["Applications 2026","1,375",1],["Per place","7.2 to 1 · most contested here",1],
      ["Music applicants","57 for 19 places",1],
      ["Refused with no form","245",1],
      ["Plan places","18",1]
    ],
    sixth_form:"Yes, coeducational, over 500 students — the largest on the list. A level music is available to specialist music students who meet the entry requirements.",
    open_days_detail:"Open evening Thursday 24 September 2026, head's talks at 5.30, 6.30 and 7.30pm, tours from 5.15pm, ticketed with booking from 17 September. <strong>Tickets are restricted to prospective Year 6 students and families with a child in Year 5 or below are asked not to attend</strong>, so this autumn's event is not available to you. The relevant one is September 2027.\nOutside the published events the school is closed to the public and hosts no personal tours.",
    other_info:"Two structural facts dominate. No faith reference means no place, and the faith route needs a perfect score. That leaves the music test as the realistic route, and it is genuinely blind to both faith and address.",
    sources:["https://www.ealing.gov.uk/download/downloads/id/21313/twyford_cofe_high_school_admissions_policy_2027-28.pdf","https://www.ealing.gov.uk/download/downloads/id/21309/high_school_on_time_offers_2026.pdf","https://twyford.org.uk/about-us/reports-exam-results","https://reports.ofsted.gov.uk/provider/23/137546"]
  }
},
{
  id:"christs-richmond", cat:"faith", name:"Christ's School",
  location:"Richmond, TW10 · coed",
  criteria_short:"Twice monthly for 2 years, and critically the child OR the parent qualifies. No test.",
  fees_per_term:"None — state funded",
  next_open_day:"Wednesday 16 September 2026, 9.15–10.40am · ticketed",
  flags:[{text:"Child OR parent qualifies",tone:"good"},{text:"Deanery rule shuts the door",tone:"crit"},{text:"Exceptional-need route near-closed",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>The most accommodating faith definition on the list.</strong> A regular worshipper is defined as a child <em>or</em> a parent attending at least twice a month for two years. A parent's own attendance is sufficient on its own, which matters when a child's church attendance is capped by a custody schedule."},
      {tone:"crit", text:"<strong>But the deanery rule closes it.</strong> Worshippers inside the four named local deaneries rank above those outside. In the last three rounds the out-of-deanery categories produced between zero and two offers a year, and zero in each of the last two. A parish in the Diocese of London falls outside all four of those deaneries."}
    ],
    criteria_detail:"Intake of 150: a maximum of 60 Christian foundation places and a minimum of 90 open places.\nOrder: pupils with a plan naming the school; looked-after children; exceptional medical or social circumstances requiring this school specifically. Then the two categories.\nWithin the foundation category: C of E worshippers resident in the Richmond and Barnes, Kingston, Hampton or Hounslow deaneries; then other qualifying Christian bodies in those deaneries; <strong>then C of E worshippers outside them; then other bodies outside them.</strong>\nWithin each category: siblings at admission, siblings at application, children of staff, then distance.\nThere is an express exception where unavoidable circumstances have consistently prevented a parent from attending, with the minister deciding.\n<strong>Distance is measured in metres along the shortest walking route,</strong> not straight line — the only school on the list that does so.",
    banding:"None.",
    alternative_entry:"None. No music, art or sport route.",
    exam_detail:"No test of any kind.",
    timeline_rows:[
      ["Open mornings","16, 24 Sept and 1, 2, 15 Oct 2026","Confirmed"],
      ["Foundation form","31 October 2027","Projected"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Supplementary form","None",1]],
    deadlines_note:"<strong>The two-year attendance window for a 2028 application has already opened,</strong> running from roughly October 2025. The form goes back to the school in person, by post or by email.",
    performance_rows:[
      ["Attainment 8","57.0 (2024/25), 56.53 provisional 2026",1],
      ["Progress 8","+0.31 (2023/24)",1],
      ["Grade 5+ English and maths","63.9%, 67.2% provisional 2026",1],
      ["A level average","Grade B, 41.19 points",1],
      ["AAB or better","41.1%",1],
      ["Ofsted","Strong standard in six of seven areas, February 2026",0],
      ["Church inspection","Top judgement, October 2023",0]
    ],
    destinations_rows:[
      ["Russell Group 2026","58%",1],["2025","67%",1],
      ["Higher education 2026","90%",1],
      ["Oxbridge","Not published",1]
    ],
    bursary_scholarship:"None. State funded.",
    numbers_rows:[
      ["Year 7 places","150 · max 60 foundation, min 90 open",1],
      ["Total roll","1,037",1],
      ["Applications 2026","733",1],["Per place","4.9 to 1",1],
      ["Foundation offers","60 of 60, all inside the deaneries",1],
      ["Outside-deanery offers","0 in 2026, 0 in 2025",1],
      ["Last distance offered","1.34 km",1]
    ],
    sixth_form:"Yes, coeducational, 173 students. Ninety places in Year 12 with a minimum of 10 reserved for external applicants. Entry needs five GCSEs at grade 5 with an average points score of 5.0, grade 5 in English and maths, and grade 6 in each subject to be studied. The last inspection called the sixth form the sparkling jewel in the school's crown.",
    open_days_detail:"Five open mornings, 9.15 to 10.40am, on 16 and 24 September and 1, 2 and 15 October 2026, each with a head's talk, a tour and Year 7 ambassadors. Ticketed, maximum two tickets per family, individual tickets for every visitor, no on-site parking. No open evening published.",
    other_info:"About seven miles from north-west London, and Richmond measures by walking route so the practical distance reads longer than a map suggests. The faith definition is the most workable of the five and the deanery restriction is what decides it.",
    sources:["https://christsschool.reactfiles.co.uk/uploads/key_information/Admissions-Policy-2027-28.pdf","https://www.christs.richmond.sch.uk/admissions/admissions-statistics","https://reports.ofsted.gov.uk/provider/23/102929"]
  }
},

/* ======================= COMPREHENSIVE ======================= */
{
  id:"holland-park", cat:"comp", name:"Holland Park School",
  location:"Kensington, W8 · coed",
  criteria_short:"Fair banded across 4 equal bands. Distance within band: 0.761 to 1.767 miles in 2026. Plus 24 art places.",
  fees_per_term:"None — state funded",
  next_open_day:"Wednesday 16 September 2026, 8.55–10.35am",
  flags:[{text:"Fair banding protects uneven profiles",tone:"good"},{text:"Art places bypass band and distance",tone:"good"},{text:"Art aptitude, not music",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>Fair banding is the most forgiving mechanism in the state system for an uneven attainment profile.</strong> Four bands, 54 places each, filled equally. An uneven attainment profile is not punished, because places are deliberately reserved across the whole ability range."},
      {tone:"good", text:"<strong>The 2022 inadequate rating has been superseded.</strong> The school was re-inspected on 20 January 2026 and rated exceptional for attendance and behaviour and for leadership, and at the strong standard for achievement, curriculum, teaching, personal development and post-16."},
      {tone:"warn", text:"<strong>The art route bypasses both the band and the distance test,</strong> and the qualifying score has been 33 out of 40 in each of the last three years despite a published floor of 20. Note that this is the art route specifically. There is no music route at this school."}
    ],
    criteria_detail:"Intake of 240. After places for pupils with a plan: looked-after children; up to 24 art aptitude places, made without reference to the banding score; children of staff; then within each of the four bands, siblings, then distance.\nDistance is straight line from the home address point to the main entrance gate, measured to four decimal places. Accessibility by car or public transport is disregarded. Same-address ties are resolved by ballot.\n<strong>Attendance at the banding test is compulsory and unforgiving.</strong> A child not allocated to a band will not be offered a place even with a sibling at the school or living very close.\nThe 2026 cut-offs by band were 1.767 miles in band A, 1.287 in band B, 1.121 in band C and 0.761 in band D. Band A has loosened each year while band D has tightened each year, and band D has been consistently under-filled at 36 to 46 offers against a nominal 54.",
    banding:"<strong>Yes, four bands, each a quarter of the intake.</strong> The test indicates current ability to reason using words and numbers, and applicants are ranked against the others who sat it that year rather than against a national standard. The test date for the current cycle is Saturday 7 November 2026.",
    alternative_entry:"<strong>Twenty-four art aptitude places, ten per cent of the intake.</strong> Offered in descending order of score to applicants above a published floor of 20 out of 40, though the operative floor has been 33 in each of the last three years.\nIt sits second in the criteria, above siblings and above distance, and is made without reference to the banding score. But all applicants must still attend the banding test, because unsuccessful art applicants are reconsidered within their band.\nThe test runs on a Saturday morning from 8.30am and <strong>the school offers no alternative sessions at all</strong>, so it needs checking against the custody rota. Format and duration are not published.",
    exam_detail:"Two tests. The banding test covers verbal and numerical reasoning, with duration and provider not published and no familiarisation material issued. The art aptitude test is scored out of 40, with format and content not published beyond a downloadable guidance document.",
    timeline_rows:[
      ["Open evening","16 September 2026","Confirmed"],
      ["Open mornings","18 and 21 September 2026","Confirmed"],
      ["Art aptitude form","~late September 2027, 5pm","Projected"],
      ["Art aptitude test","~first Saturday October 2027","Projected · no alternatives"],
      ["Common application form","31 October 2027","Confirmed"],
      ["Banding test","~early November 2027","Projected · compulsory"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Both tests","None",1]],
    deadlines_note:"Two dates fall before the application deadline and one after it. The art form closes roughly five weeks before, and the banding test sits about a week after. Missing the banding test forfeits the place regardless of anything else.\n<strong>The two published art deadlines disagree</strong>, with the borough brochure giving one date and the school's own page giving another four days later. Plan for the earlier.",
    performance_rows:[
      ["Attainment 8","59.4 (2024/25)",1],["Progress 8","+0.04 (2023/24)",1],
      ["Grade 5+ English and maths","73.5%",1],
      ["EBacc entry","91.9% against 40.5% nationally",1],
      ["A level points","37.87, above national",1],
      ["Ofsted","Exceptional ×2, strong ×5, January 2026",0]
    ],
    university_destinations:"Not published as numbers. The January 2026 inspection describes sustained and extremely ambitious destinations and targeted support for university and apprenticeship applications.",
    bursary_scholarship:"None. State funded.",
    numbers_rows:[
      ["Year 7 places","240",1],["Total roll","1,336",1],
      ["Applications 2026","1,078",1],["Per place","4.5 to 1",1],
      ["Art offers","24, all scoring 33+ of 40",1],
      ["Plan places","18",1]
    ],
    sixth_form:"Yes, coeducational, maximum 230 students, with up to 100 external entrants into Year 12 and priority to internal candidates.",
    open_days_detail:"Open evening Wednesday 16 September 2026 and open mornings on 18 and 21 September, all 8.55 to 10.35am. The borough brochure labels the first an evening but gives morning times, which is worth confirming. No year-round tours published.",
    other_info:"Notting Hill Gate and High Street Kensington, with buses 27, 28, 31, 52, 70, 94, 328 and 452. The school joined a large academy trust in January 2023 and the inspection is unambiguous that this drove the turnaround. Its closing line notes pupils are rightly proud of their work, especially in art.",
    sources:["https://files.ofsted.gov.uk/v1/file/50297559","https://www.rbkc.gov.uk/sites/default/files/media/documents/secondary-admissions-brochure-2027_0.pdf","https://www.hollandparkschool.co.uk/admissions/art-aptitude"]
  }
},
{
  id:"hurlingham", cat:"comp", name:"The Hurlingham Academy",
  location:"Fulham, SW6 · coed",
  criteria_short:"Distance only: 1.221 miles straight line in 2026, tightening each year. No banding, no aptitude route.",
  fees_per_term:"None — state funded",
  next_open_day:"Tuesday 29 September 2026, 4–7.30pm · talk at 6pm",
  flags:[{text:"Outstanding, March 2024",tone:"good"},{text:"Pure distance, no protection",tone:"crit"},{text:"Year-round open door",tone:"good"},{text:"Cut-off tightening fast",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"crit", text:"<strong>This is the one school of the west London group with no mechanism that protects an uneven profile and no route that bypasses geography.</strong> No banding, no aptitude places, no faith. After looked-after children, exceptional need, siblings and staff, it is pure distance."},
      {tone:"warn", text:"<strong>The cut-off is tightening sharply:</strong> 1.952 miles in 2024, 1.268 in 2025, 1.221 in 2026. The intake has also been cut, from 150 to 135."}
    ],
    criteria_detail:"Order after places for pupils with a plan: looked-after children; significant medical, social or special educational need not covered by a plan; siblings; children of staff; then nearest distance.\nDistance is straight line from the home address point to the main school gate for pupils. Flats sharing a street entrance are ordered by floor then flat number, with a ballot beyond that. Proof of residency can be requested at any stage and false information voids an offer.\n<strong>The exceptional-need criterion is unusually demanding and has produced zero offers in each of the last three years.</strong> It requires proof that no other school can meet the need, which is close to the standard for naming a school on a statutory plan. A psychologist report alone would not clear it.",
    banding:"None.",
    alternative_entry:"None. No music, art, sport or languages route.\nThe school does run a grammar stream of 28 to 32 pupils taught a more challenging curriculum from Year 7, and an art excellence programme, but both are internal and neither is an admissions route. The selection mechanism for the grammar stream is not published and is worth asking about, since a top stream in a small non-banded school raises a placement question for an uneven profile.",
    exam_detail:"No banding test and no aptitude test. Nothing to prepare for.\nPupils are streamed on entry using a cognitive test rather than a reading test, which would generally show an uneven profile more favourably, but that is an internal setting question rather than an entry one.",
    timeline_rows:[
      ["Open evening","29 September 2026","Confirmed"],
      ["Open mornings","5–22 October 2026","Confirmed"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Tests","None — no test",1]],
    deadlines_note:"There is no supplementary form and no aptitude test, so nothing falls before the application deadline. The only material action beforehand is establishing residence, and the school can request council tax and child benefit evidence at any point.",
    performance_rows:[
      ["Attainment 8","58.4 (2024/25)",1],["Progress 8","+0.86 (2023/24)",1],
      ["Grade 5+ English and maths","64.6%, school reports 73% in 2026",1],
      ["EBacc entry","71.4%",1],
      ["Ofsted","Outstanding in all four areas, March 2024",0]
    ],
    university_destinations:"Not published. The school states leavers go on to top further education institutions across London in both sectors, and names a scholarship programme with an independent school providing three fully funded A level places a year.",
    bursary_scholarship:"None. State funded.",
    numbers_rows:[
      ["Year 7 places","135, cut from 150",1],["Total roll","728",1],
      ["Applications 2026","580",1],["Per place","4.3 to 1",1],
      ["Distance offers","95, last at 1.221 miles",1],
      ["Appeals","None in three years",1]
    ],
    sixth_form:"Sources conflict. The department and the borough both record this as an 11 to 16 school, while the school's own site carries sixth form pages. The official records are more authoritative, so treat it as 11 to 16 and confirm directly.",
    open_days_detail:"Open evening Tuesday 29 September 2026, 4 to 7.30pm, with the principal's talk at 6pm. Open mornings through October in 45-minute slots.\n<strong>This is the only school on the list offering a year-round open door.</strong> The brochure entry says parents are welcome to visit without an appointment.",
    other_info:"Parsons Green on the District line, with buses 28, 295, 424, C3, 22 and 44. Part of the same trust as Holland Park, which makes the two a useful comparison: one trust, very different admissions architecture.",
    sources:["https://www.lbhf.gov.uk/sites/default/files/2026-09/moving-on-up-2027-brochure-accessible.pdf","https://www.thehurlinghamacademy.org.uk/Portals/0/adam/Files/ukkYRCiYmkymTjcbFYZXMA/Files/Admissions%20policy%202026-27.pdf","https://files.ofsted.gov.uk/v1/file/50246359"]
  }
},
{
  id:"wlfs", cat:"comp", name:"West London Free School",
  location:"Hammersmith, W6 · coed",
  criteria_short:"No distance criterion. The general ballot produced zero offers in 2025 and 2026. Entry is music, art, pupil premium, sibling or feeder.",
  fees_per_term:"None — state funded",
  next_open_day:"Open mornings from 14 September 2026 · four mornings a week",
  flags:[{text:"General route: 0 offers, 2 years",tone:"crit"},{text:"Music test is the door",tone:"good"},{text:"5–10 min vocal test",tone:"good"},{text:"Best results of the group",tone:"good"}],
  detail:{
    headline_notes:[
      {tone:"crit", text:"<strong>The single most decision-relevant fact about this school.</strong> In both 2025 and 2026 the general random-allocation criterion produced zero offers. The school filled entirely on looked-after children, music places, staff, pupil premium, siblings and feeder primaries. An applicant with none of those had no realistic route in at any distance, including living next door."},
      {tone:"good", text:"<strong>So the music test is not an advantage here, it is the entry route.</strong> And it is the gentlest aptitude test on the list: five to ten minutes, entirely vocal, no instrument, nothing to prepare, testing pitch perception and rhythm."},
      {tone:"warn", text:"Music places drop from twelve to <strong>eleven</strong> for the current cycle, while applications rose 34 per cent in a year against a fixed intake."}
    ],
    criteria_detail:"This school uses no distance criterion at all. A two-mile radius acts as an eligibility boundary within which places are drawn by ballot, not ranked by nearness.\nOrder: pupils with a plan; looked-after children; founders' children; up to eleven music places; up to two art places, new this cycle; children of staff; up to 45 places for pupil premium pupils at feeder primaries, siblings, or within two miles; siblings; feeder pupils; then the two-mile ballot; then everyone else.\nSiblings and feeder links are unrestricted for families connected before September 2023, and conditional on living within two miles for those after.\n<strong>The policy carries a strategic trap.</strong> A music place is only converted into an offer if this school is first on the application form, or ranked above any other school where the child is eligible. Ranking it below a school the candidate would also get into forfeits the music place.",
    banding:"None for admission. The school sets internally by ability once pupils are on roll.",
    alternative_entry:"<strong>Up to eleven music places, which bypass the ballot entirely.</strong> The test is vocal only, five to ten minutes, assessing pitch perception and sense of rhythm. Candidates bring nothing and prepare nothing, and it is explicitly not a test of vocal quality. No prior musical experience is needed and the test is designed not to favour children who have had lessons.\nResults are notified before the application deadline, with roughly two weeks to spare, so you can rank knowing the outcome. That is the cleanest timing of any aptitude route here.\nScholars get a half-hour weekly lesson half funded by the school, theory classes, choir membership and sight-singing.\n<strong>Two art places are new this cycle.</strong> Format is not published and two places against 1,035 applications is a long shot rather than a strategy.",
    exam_detail:"Music aptitude only. Five to ten minutes, vocal, testing pitch and rhythm. The school publishes no familiarisation material, and given the test deliberately avoids rewarding prior training, heavy preparation is of doubtful value.",
    timeline_rows:[
      ["Open mornings","14 Sept – 15 Oct 2026","Confirmed"],
      ["Music application","~early October 2027, 12 noon","Projected"],
      ["Music test","~mid-October 2027","Projected"],
      ["Results notified","~late October 2027","Projected · before the deadline"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Music test","None",1]],
    deadlines_note:"The music application closes in early October and results land about a fortnight before the application deadline, which is the best sequencing of any aptitude route on the list.\nRemember the ranking rule: the music place only converts if this school sits above any other school where the candidate is eligible.",
    performance_rows:[
      ["Attainment 8","69.2 (2024/25) · best of the group",1],
      ["Progress 8","+0.96 (2023/24)",1],
      ["Grade 5+ English and maths","85.1% · best of the group",1],
      ["GCSE 9–7","57% of entries (2026)",1],
      ["A level A*–A","58% (2026)",1],["A level points","46.6, grade A−",1],
      ["Ofsted","Good, June 2022 · oldest inspection here",0]
    ],
    destinations_rows:[
      ["Russell Group","68% of applicants",1],
      ["Oxbridge 2026","7 students",1],
      ["Medicine and veterinary","3 places, plus 1 dentistry",1],
      ["Art and conservatoire","5 to art foundation, 1 to jazz",1]
    ],
    bursary_scholarship:"None. State funded. The music place carries a real cash benefit: half the cost of a weekly lesson, plus free theory classes, choir and sight-singing.",
    numbers_rows:[
      ["Year 7 places","130",1],["Total roll","921",1],
      ["Applications 2026","1,035",1],["Per place","8 to 1 · most contested here",1],
      ["Music offers","12 in each of 2025 and 2026",1],
      ["General ballot offers","0 in 2025, 0 in 2026",1],
      ["Appeals 2026","9 heard, none upheld",1]
    ],
    sixth_form:"Yes, coeducational, on a separate site in Hammersmith. Rated outstanding at the 2022 inspection. Size not published.",
    open_days_detail:"Open mornings from Monday 14 September to Thursday 15 October 2026, four mornings a week, 9.25 to 10.30am, booked through the school website from 1 September. No single open evening published.",
    other_info:"Knowledge-rich classical curriculum with Latin from Year 7 for all pupils. Split site, with Years 7 to 11 on King Street and the sixth form on Bridge Avenue. About three miles from north-west London, though distance is largely irrelevant here except as a pupil premium or sibling qualifier.",
    sources:["https://www.wlfs.org/Admissions/Musical-aptitude/","https://www.lbhf.gov.uk/sites/default/files/2026-09/moving-on-up-2027-brochure-accessible.pdf","https://www.wlfs.org/2026-GCSE-Results/","https://files.ofsted.gov.uk/v1/file/50196125"]
  }
},
{
  id:"william-ellis", cat:"comp", name:"William Ellis School",
  location:"Gospel Oak, NW5 · boys",
  criteria_short:"Undersubscribed — vacancies at offer day in both 2024 and 2025, so no distance cut-off applied. Music or languages aptitude route.",
  fees_per_term:"None — state funded",
  next_open_day:"Thursday 24 September 2026, 6pm",
  flags:[{text:"Undersubscribed two years running",tone:"good"},{text:"Closest viable boys' school",tone:"good"},{text:"Weakest results on the list",tone:"crit"},{text:"Test format not published",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>This is the only school on the list where applying has recently been sufficient.</strong> The borough records vacancies at offer day in both 2024 and 2025, so the distance criterion did not bite at all. Applications fell 14 per cent year on year, from 313 to 270 against 112 places."},
      {tone:"crit", text:"<strong>It is also the weakest performer on the list.</strong> Attainment 8 of 48.2 against a national 46.1, progress slightly below average, and 23 per cent of grades at 9 to 7 against 57 per cent at West London Free School."},
      {tone:"warn", text:"<strong>The aptitude test format is the largest published information gap of any school here.</strong> Neither the admissions page nor the music department page describes the format, duration, content or whether prior experience is assessed. The school itself directs families to ask at an open event."}
    ],
    criteria_detail:"Boys, Years 7 to 11, intake of 112.\nOrder: pupils with a plan; looked-after children; siblings at this school; siblings at two named partner schools; professionally supported medical or social need evidenced within the last six months; music or languages aptitude, up to ten per cent of places; children of staff at this school or at local primaries and secondaries in four named postcode districts; then nearest distance as the final tie-break.\nThe borough brochure summarises the criteria in a slightly different order, merging two of them. The school's own policy is authoritative and the borough says so itself.\n<strong>Distance is measured to the centre of the school</strong> rather than to a gate, which is marginally more favourable to applicants than the method used at Holland Park and Hurlingham.\nThe last published cut-off was 2.17 miles in 2023, before the school became undersubscribed.",
    banding:"None.",
    alternative_entry:"<strong>Music or modern foreign languages aptitude, up to ten per cent of places</strong>, so roughly eleven of 112.\nIt sits fifth of seven, above staff children and above distance, so an aptitude place is awarded before any distance ordering. But it sits below siblings and below medical or social need, so it is not the top-priority bypass that Holland Park's art places or West London Free School's music places are. In the current undersubscribed reality that distinction hardly matters.\nApplicants sit separate tests for each discipline and can be considered under both, with languages taken after music on the same afternoon.\n<strong>The languages route is unusual and worth knowing about.</strong> It assesses aptitude for learning a language rather than knowledge of one already taught, which is an unusual fit for a child carrying Korean, English and emerging Italian.",
    exam_detail:"<strong>Not published.</strong> No format, no duration, no description of what is assessed, no familiarisation material. The music department page says only that up to ten per cent of places are offered on aptitude as determined by a test.\nThe timing is tight: the application deadline is 4pm and the test is at 4pm the following day.",
    timeline_rows:[
      ["Open evening","24 September 2026, 6pm","Confirmed"],
      ["Aptitude application","~6 October 2027, 4pm","Projected"],
      ["Aptitude test","~7 October 2027, 4pm","Projected · arrive 3.30pm"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Aptitude test","None",1]],
    deadlines_note:"A separate online form goes to the school in addition to the council application. The school asks interested families to attend an open event and discuss the aptitude route with staff before applying, which given the absent published detail is not optional in practice.",
    performance_rows:[
      ["Attainment 8","48.2 (2024/25)",1],["Progress 8","−0.17 (2023/24)",1],
      ["Grade 5+ English and maths","52.6%, school reports 54% in 2026",1],
      ["GCSE 9–7","23% of grades (2026)",1],
      ["EBacc entry","79.4%",1],
      ["Ofsted","Good in four areas, October 2024",0]
    ],
    university_destinations:"Held at the consortium sixth form rather than at school level, so not published here.",
    bursary_scholarship:"None. State funded.",
    numbers_rows:[
      ["Year 7 places","112 boys",1],["Total roll","817",1],
      ["Applications 2025","270, down from 313",1],
      ["Outcome","Vacancies at offer day, 2024 and 2025",1],
      ["Last cut-off","2.17 miles, in 2023",1]
    ],
    sixth_form:"Yes, but not the school's own. It is part of a four-school consortium sixth form with a mixed intake, so girls from partner schools study alongside the boys and students move between sites for different subjects. The consortium open evening is Thursday 27 November 2026, with pre-registration required.",
    open_days_detail:"Open evening Thursday 24 September 2026 at 6pm. The school explicitly invites conversations about the aptitude route at its open events, which is the only way to learn the test format.",
    other_info:"About three and a half to four miles from north-west London, and the closest viable boys' school on the list. A short move north would put you comfortably inside any historic cut-off while keeping everything else about your life intact.",
    sources:["https://www.williamellis.camden.sch.uk/admissions-information","https://www.find-school-performance-data.service.gov.uk/school/100048/william-ellis-school/secondary","https://reports.ofsted.gov.uk/provider/23/100048"]
  }
},
{
  id:"ada-lovelace", cat:"comp", name:"Ada Lovelace CE High School",
  location:"Ealing, W5 · coed",
  criteria_short:"Distance 0.683 miles in 2026. But 20 music places rank above siblings and above distance. No faith test.",
  fees_per_term:"None — state funded",
  next_open_day:"Wednesday 30 September 2026 · talks 5.15, 6.15 and 7.15pm",
  flags:[{text:"Music ranks above siblings",tone:"good"},{text:"Best music odds: 2.5 to 1",tone:"good"},{text:"No faith criterion",tone:"good"},{text:"Sixth form is T Levels, not A levels",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>Music ranks above siblings here, which is unusual and better than its sister school.</strong> Twenty places, ten per cent of the intake, allocated purely on ranked assessment score with no geographic condition at all."},
      {tone:"good", text:"<strong>The odds are the best of any music route on the list.</strong> Fifty applicants for twenty places, roughly 2.5 to one, against a distance route running at 4.3 to one with a sub-0.7-mile radius on top."},
      {tone:"warn", text:"<strong>Despite the Church of England designation there is no faith criterion at all,</strong> and the school says children of all faiths and none are warmly welcome. That makes it materially different from Twyford in the same trust."}
    ],
    criteria_detail:"Intake of 200, of which 20 are music places and 180 are allocated under the general criteria.\nOrder: pupils with a plan; looked-after children; children of staff; <strong>ten per cent of places on music aptitude</strong>; siblings; then children living closest.\nDistance is straight line from the home address point to a published grid reference at the centre of the site. The family must be living at the address on the closing date. Equidistant applicants are separated by computer ballot, and multiple births are admitted together even above the intake number.\nThe cut-off was 0.637 miles in 2025 and 0.683 in 2026.",
    banding:"None. Ballot only as a tie-break between equidistant applicants.",
    alternative_entry:"<strong>Twenty specialist music places, ranked third of five, above siblings and above distance.</strong>\nA single shared test covers this school, Twyford and Ealing Fields, so one assessment process feeds three separate preferences. Applicants apply to each school separately but sit one process.\nIt assesses natural ability to hear and discriminate pitch, rhythm, chords and melodies, explicitly regardless of prior tuition. Certificates are not accepted.\nTwo rounds. The first is an unseen listening test under exam conditions, one hour, marked out of 60. The second is about twenty minutes of aural tests using classroom instruments and recordings, marked out of 40. Scores are summed and ranked.\nUnsuccessful applicants go on a ranked waiting list and remain eligible for a general place.",
    exam_detail:"Music aptitude only. One hour of listening under exam conditions, then a twenty-minute aural assessment.\n<strong>The trust explicitly invites families to disclose any special educational need or disability that may affect the testing process before the assessment date, so arrangements can be made.</strong> This is the only one of the four aptitude processes on the list that publishes that invitation, and with a pending psychologist report it matters.\nOne caveat worth weighing: a full hour of sustained listening under exam conditions is a materially heavier attention load than the five-to-ten-minute vocal test at West London Free School.",
    timeline_rows:[
      ["Open evening","30 September 2026","Confirmed"],
      ["Music application","~1 October 2027, 4pm","Projected"],
      ["Round one listening test","~first half October 2027","Projected · 1 hour"],
      ["Round two aural test","~mid-October 2027","Projected · ~20 min"],
      ["Ranked position notified","~late October 2027","Projected · before the deadline"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"],
      ["Instrument package interview","~June or July 2028","Projected"]
    ],
    costs_rows:[["Registration fee","None",1],["Music test","None",1]],
    deadlines_note:"One application process covers three schools' tests, but each school needs its own form and each is a separate preference on the council application.\nRound one and round two dates for this school specifically were not published at the time of research, while the sister school's were. Confirm directly.",
    performance_rows:[
      ["Attainment 8","64.4 (2024/25)",1],["Progress 8","+1.40 (2024)",1],
      ["Grade 5+ English and maths","77.7%",1],
      ["EBacc entry","89.3%",1],
      ["T Level 2025","Average grade merit, 20 students",1],
      ["Ofsted","Outstanding, January 2023",0]
    ],
    university_destinations:"Not published. The school opened in September 2018, so its first cohort reached Year 13 only recently and verified destinations data is not yet available.",
    bursary_scholarship:"None. State funded.",
    numbers_rows:[
      ["Year 7 places","200, including 20 music",1],["Total roll","1,051",1],
      ["Distance route 2026","452 applicants for 106 places",1],
      ["Music route 2026","50 applicants for 20 places · 2.5 to 1",1],
      ["Distance cut-off","0.683 miles",1]
    ],
    sixth_form:"Yes, coeducational and on site, <strong>but it delivers T Levels rather than A levels.</strong> A child entering Year 7 here would face either a T Level pathway on site or an external move for A levels at 16. The sixth form open evening is 26 November 2026.",
    open_days_detail:"Open evening Wednesday 30 September 2026, head's talks at 5.15, 6.15 and 7.15pm, tours from 5pm and throughout. Sixth form evening 26 November 2026. No year-round tours published.",
    other_info:"Opened September 2018 and part of the same trust as Twyford. The computer science curriculum in Years 7 to 9 is described by inspectors as highly ambitious, with pupils learning three programming languages, and all pupils study ethics. Extracurricular breadth includes rowing, cricket and Duke of Edinburgh.",
    sources:["https://files.schudio.com/ada-lovelace-c-of-e-high-school/files/documents/2027_Year_7_Admissions_Policy_-_FINAL.pdf","https://www.ealing.gov.uk/download/downloads/id/21309/high_school_on_time_offers_2026.pdf","https://files.ofsted.gov.uk/v1/file/50210206"]
  }
},
{
  id:"ealing-fields", cat:"comp", name:"Ealing Fields CE High School",
  location:"Ealing, W5 · coed",
  criteria_short:"Distance 0.493 miles in 2026, the tightest on the list. 16 music places, but they rank below siblings.",
  fees_per_term:"None — state funded",
  next_open_day:"Thursday 1 October 2026 · ticketed, booking opens 25 September",
  flags:[{text:"Violin already qualifies",tone:"good"},{text:"Tightest catchment: 0.493 mi",tone:"crit"},{text:"One ticketed visit a year",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>Progress has been sustained above plus 1.3 for three consecutive years</strong>, which is the most consistent record of its kind on this list, and the December 2024 inspection found the school may have improved significantly across all areas since its previous one."},
      {tone:"good", text:"<strong>Music scholars must learn a string, woodwind or brass instrument as first or second study, and guitar counts.</strong> A string player therefore satisfies that directly, and the annual graded-exam expectation extends an existing pathway rather than adding a new demand."},
      {tone:"crit", text:"<strong>0.493 miles is the tightest cut-off of any school on this list,</strong> and it has been essentially static across two years. The music route is the only realistic door without a very precise move."}
    ],
    criteria_detail:"Renamed from Ealing Fields High School in September 2025. Intake raised from 150 to 168, of which 16 are music places.\n<strong>The trust chose an open admissions policy with no faith criteria</strong>, despite the Church of England designation.\nOrder: pupils with a plan; looked-after children; children of staff; <strong>siblings</strong>; sixteen music places; then remaining places under the tie-break, which is distance.\nNote the ordering difference from its sister school: here music sits below siblings, where at Ada Lovelace it sits above. In practice siblings have been fully accommodated with places to spare in both recent years, so the ordering has not yet bitten.\nThe cut-off was 0.500 miles in 2025 and 0.493 in 2026.",
    banding:"None. Ballot only as an equidistance tie-break.",
    alternative_entry:"<strong>Sixteen specialist music places, which bypass distance but not siblings.</strong>\nThe same single shared trust test as Ada Lovelace and Twyford. Two rounds: an hour-long unseen listening test under exam conditions marked out of 60, then a twenty-minute aural assessment marked out of 40. Certificates are explicitly not accepted and previous experience is not relevant.\nThe odds in 2026 were 47 applicants for 16 places, roughly three to one.\nA tie on score is broken by proximity to the school.\n<strong>Scholar commitments are substantial:</strong> choir, an ensemble, a weekly skills session, roughly 2 to 2.5 hours a week rising year on year, a string, woodwind or brass instrument as first or second study, and an annual practical exam through a recognised board.",
    exam_detail:"Music aptitude only.\nRound one offers a choice of three slots, all after the school day and two of them 4 to 5pm. A full hour of listening under exam conditions in a late-afternoon slot is a real attention load, and it is worth asking whether an earlier slot can be arranged.\n<strong>Special needs accommodations are explicitly offered</strong> if the school is told before the assessment date.",
    timeline_rows:[
      ["Open evening","1 October 2026","Confirmed · ticketed"],
      ["Music application","~1 October 2027, 12 noon","Projected"],
      ["Round one","~8–12 October 2027","Projected · 1 hour"],
      ["Round two","~14–16 October 2027","Projected · ~20 min"],
      ["Ranked position notified","~21 October 2027","Projected"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Music test","None",1]],
    deadlines_note:"<strong>There is a sequencing problem worth planning around.</strong> The only open evening falls the day before the music application deadline, under 24 hours apart. Prepare the music application before the visit, not after it.",
    performance_rows:[
      ["Attainment 8","66.1 (2024/25)",1],
      ["Progress 8","+1.31 (2024), +1.34 (2023), +1.32 (2022)",1],
      ["Grade 5+ English and maths","80.3%",1],
      ["EBacc entry","88.4%",1],
      ["Ofsted","Good, and 'may have improved significantly', December 2024",0]
    ],
    university_destinations:"Not applicable at school level, since there is no sixth form. Destinations attach to the trust's other schools.",
    bursary_scholarship:"None. State funded. Music scholars may receive a discount on individual tuition, and those already learning piano, drums or voice can apply for discounted or free small-group tuition on a second instrument.",
    numbers_rows:[
      ["Year 7 places","168, including 16 music",1],["Total roll","760",1],
      ["Distance route 2026","364 applicants for 97 places",1],
      ["Music route 2026","47 applicants for 16 places · 2.9 to 1",1],
      ["Distance cut-off","0.493 miles · tightest here",1]
    ],
    sixth_form:"<strong>No.</strong> The prospectus is explicit that students are considered as internal applicants for the trust's sixth forms elsewhere. The department still records an 11 to 18 age range, but the school's own current prospectus is more authoritative and that record appears stale.",
    open_days_detail:"<strong>The most restrictive access of any school on the list.</strong> One ticketed open evening a year, Thursday 1 October 2026, with booking opening 25 September. Outside that event the school is closed to the public and hosts no personal tours at any point in the year.",
    other_info:"All pupils get regular curriculum time to develop singing knowledge and skills, so music is embedded rather than an add-on. Published specialisms are music, languages, science and chaplaincy. Small, tightly drawn, high-performing and hard to see — of everything on the list this is the one where a visit needs the most forward planning.",
    sources:["https://files.schudio.com/ealing-fields/files/documents/2027-2028_Ealing_Fields_Specialist_Music_Place_Admissions_Criteria(2).pdf","https://www.ealing.gov.uk/download/downloads/id/21309/high_school_on_time_offers_2026.pdf","https://files.ofsted.gov.uk/v1/file/50267440"]
  }
},
{
  id:"grey-court", cat:"comp", name:"Grey Court School",
  location:"Ham, TW10 · coed",
  criteria_short:"Distance 2.551 km in 2026, measured by shortest walking route rather than straight line.",
  fees_per_term:"None — state funded",
  next_open_day:"Tuesday 6 October 2026, 9am or 11am · booking opened 1 September",
  flags:[{text:"Walking route widens it",tone:"good"},{text:"Walking route, not straight line",tone:""},{text:"Both parents must sign",tone:"crit"}],
  detail:{
    headline_notes:[
      {tone:"warn", text:"<strong>The catchment is far wider than a straight-line map suggests.</strong> Richmond measures by shortest walking route, and published cut-offs across six years run between 2.379 and 2.992 kilometres, with the last round closing at 2.551. That makes it one of the more accessible schools on this list rather than one of the tightest."},
      {tone:"crit", text:"<strong>Richmond requires both parents to sign.</strong> Separated parents must both be named on the application with either a court order or a joint declaration attached, setting out both addresses and the residency pattern including weekends and holidays. If one parent applies without the other's agreement, the council treats it as deliberately misleading and withdraws the application and any offer."}
    ],
    criteria_detail:"Order: looked-after and previously looked-after children; social or medical need evidenced at application by a doctor, social worker or education welfare officer where only this school can meet it; siblings on roll at admission; children of staff of two years or more; then distance.\n<strong>Distance is the shortest route by road and maintained footpath</strong>, from a point at the middle of the home, out of the front entrance, to the nearest pedestrian gate used by the year group. That is a walking measure, not a straight line, so river bends and park boundaries can hurt an address that looks fine on a radius map. Check any candidate property on foot.\nThe school offered above its intake number on offer day with the intention of falling back before waiting-list offers.",
    banding:"None.",
    alternative_entry:"None. No music, art or sport route anywhere in the determined arrangements.",
    exam_detail:"None. Non-selective.",
    timeline_rows:[
      ["Open mornings","6–9 and 13–16 October 2026","Confirmed · booking opened 1 Sept"],
      ["Arrangements re-determined","by 28 February 2027","Check for changes"],
      ["Applications open","1 September 2027","Projected"],
      ["Common application form","31 October 2027, 11.59pm","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Tests","None — non-selective",1]],
    deadlines_note:"<strong>Richmond raised its address-scrutiny threshold from twelve to eighteen months for the current round.</strong> A future address is not accepted, including one already bought or rented. If you cannot be verified on council tax or moved within the last eighteen months, extra evidence is required.\nYou must notify the council immediately of any address change or any change to joint care arrangements. Offers are reassessed and can be withdrawn.",
    performance_rows:[
      ["Attainment 8","62.8 (2024/25)",1],["Progress 8","+0.85 (2023/24)",1],
      ["Grade 5+ English and maths","78.9%",1],
      ["A level average","Grade B−, 37.14 points",1],
      ["Ofsted","Outstanding, March 2024",0]
    ],
    destinations_rows:[["Higher education or training","92% against 65% nationally",1]],
    bursary_scholarship:"None. State funded.",
    numbers_rows:[
      ["Year 7 places","252, raised from 240",1],["Total roll","1,650",1],
      ["Applications 2026","1,669",1],
      ["Cut-off 2026","2.551 km by walking route",1],
      ["2025","2.706 km",1],["2024","2.708 km",1]
    ],
    sixth_form:"Yes, 363 students, with a Year 12 intake of 190.",
    open_days_detail:"Open mornings only, Tuesday to Friday across two weeks in October, at 9am and 11am, booked through the school website with booking opened on 1 September. Tours for the current cycle sold out. No year-round tours.",
    other_info:"Ham is poorly served by rail and reached by bus. The cut-off tightened by 155 metres year on year while applications rose, so the trend narrows despite the larger intake.",
    sources:["https://www.richmond.gov.uk/media/utmdtytx/lbr_tss_furthest_distance_offers.pdf","https://www.greycourt.richmond.sch.uk/page/?title=Admissions&pid=13","https://reports.ofsted.gov.uk/provider/23/138825"]
  }
},
{
  id:"kingston-academy", cat:"comp", name:"The Kingston Academy",
  location:"Kingston upon Thames, KT2 · coed",
  criteria_short:"Distance 1.235 km in 2026, measured straight line — so the walkable catchment is smaller than the number suggests.",
  fees_per_term:"None — state funded",
  next_open_day:"Wednesday 16 September 2026, 5–8pm · no booking required",
  flags:[{text:"Best progress score on the list",tone:"good"},{text:"Most contested of the six",tone:"warn"},{text:"Straight line, not walking route",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>The highest progress score of any school in the Richmond and Kingston group by a clear margin, at plus 1.16.</strong> Outstanding at its May 2024 inspection."},
      {tone:"warn", text:"<strong>It measures straight line rather than by walking route,</strong> unlike the Richmond schools. That means the effective walking catchment is smaller than the 1.235 kilometre figure suggests — the opposite of Grey Court."}
    ],
    criteria_detail:"Order: looked-after and previously looked-after children; siblings at the school including the sixth form at the time of application; exceptional family, social or medical need that only this school can meet, professionally evidenced; children of staff of two years or more; then distance.\nDistance is straight line from the home address to the main Richmond Road entrance, measured on the admissions mapping system. Ties are resolved by independently verified ballot, which also applies within the same block of flats.\nCut-offs: 1.203 km in 2024, 1.298 in 2025, 1.235 in 2026. The council does not publish end-of-coordination distances.",
    banding:"None. Verified against both the school's own admissions page and the borough brochure.",
    alternative_entry:"None. No music, art or sport route.",
    exam_detail:"None. Non-selective.",
    timeline_rows:[
      ["Open evening","16 September 2026, 5–8pm","Confirmed · no booking"],
      ["Open mornings","18, 21 and 24 September 2026","Confirmed · book online"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Tests","None — non-selective",1]],
    deadlines_note:"<strong>You apply through the council you pay council tax to, not the borough the school sits in.</strong>\nKingston requests further evidence if the address cannot be verified on council tax or you moved within the last eighteen months. You must notify immediately of any address change, of any relocation of thirteen weeks or more even if you intend to return, and of any change to joint care arrangements. Reassessment after allocation can withdraw an offer.\n<strong>Only one application is accepted.</strong> If both parents apply, neither is processed until they agree, and applying without the agreement of everyone with parental responsibility is treated as deliberately misleading, withdrawing both the application and the offer.",
    performance_rows:[
      ["Attainment 8","62.8 (2024/25)",1],
      ["Progress 8","+1.16 (2023/24) · best of the group",1],
      ["Grade 5+ English and maths","78.9%",1],
      ["EBacc entry","74.2%",1],
      ["A level average","Grade B−, 38.00 points",1],
      ["Ofsted","Outstanding, May 2024",0]
    ],
    destinations_rows:[["Higher education or training","84%",1]],
    bursary_scholarship:"None. State funded.",
    numbers_rows:[
      ["Year 7 places","210",1],["Total roll","1,213",1],
      ["Applications 2026","1,362",1],["Per place","6.5 to 1 · most contested of the six",1],
      ["Cut-off 2026","1.235 km straight line",1]
    ],
    sixth_form:"Yes, ages 11 to 19, with admissions managed directly by the school under its own policy. Size not published.",
    open_days_detail:"Open evening Wednesday 16 September 2026, 5 to 8pm, no booking required, gates open at 5pm and last tours at 7.30pm, with head's talks at 5.15, 6.00, 6.45 and 7.30pm. Open mornings on 18, 21 and 24 September, 9.15 to 10am, booked via the website and aimed at local primary schools.",
    other_info:"Richmond Road, walkable to Kingston and Norbiton stations. A free school opened in 2015, now with a mature intake. The tightest genuine catchment of the six on a straight-line basis.",
    sources:["https://www.thekingstonacademy.org/about-tka/information-policies/item/1/academy-admissions","https://www.compare-school-performance.service.gov.uk/school/141862/the-kingston-academy","https://reports.ofsted.gov.uk/provider/23/141862"]
  }
},
{
  id:"orleans-park", cat:"comp", name:"Orleans Park School",
  location:"Twickenham, TW1 · coed",
  criteria_short:"Distance 1.110 km in 2026 by shortest walking route. Tight, and tightening every year.",
  fees_per_term:"None — state funded",
  next_open_day:"Monday 21 September 2026, 9am · also 22, 23 and an evening on 24",
  flags:[{text:"Strongest attainment of the six",tone:"good"},{text:"Catchment 1.11 km and shrinking",tone:"crit"},{text:"Lowest support rate of the six",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>The strongest overall attainment profile of the Richmond and Kingston group.</strong> Attainment 8 of 64.4, the highest EBacc points score of the six, and 98 per cent staying in education."},
      {tone:"crit", text:"<strong>Combined with the second-tightest catchment.</strong> The cut-off has tightened each year, from 1.240 km in 2024 to 1.186 in 2025 to 1.110 in 2026, and this was one of only four Richmond schools that did not offer above its intake number, so waiting-list movement starts immediately."}
    ],
    criteria_detail:"Order: looked-after and previously looked-after children; exceptional family, medical or social need requiring this school, professionally evidenced and considered by a governors' panel; siblings on roll on 1 September of the entry year or at admission, at the same permanent residence; children of staff of two years or more; then distance.\n<strong>Distance is the shortest route by road or maintained footpath</strong> from the permanent residence to the main pedestrian gate. Transport accessibility is disregarded.\nThe end-of-coordination figure has historically run 180 to 240 metres wider than the offer-day figure.",
    banding:"None.",
    alternative_entry:"None.",
    exam_detail:"None. Non-selective.",
    timeline_rows:[
      ["Open mornings","21, 22 and 23 September 2026","Confirmed · book via ticketing site"],
      ["Open evening","24 September 2026, 5.30–7.30pm","Confirmed"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Tests","None — non-selective",1]],
    deadlines_note:"Richmond's address rules apply in full: the eighteen-month scrutiny threshold, no future addresses, a requirement to disclose connected properties, immediate notification of address or joint-care changes, and reassessment after allocation that can withdraw an offer.\nBoth parents must be named with a court order or joint declaration attached.",
    performance_rows:[
      ["Attainment 8","64.4 (2024/25) · highest of the six",1],
      ["Progress 8","+0.88 (2023/24)",1],
      ["Grade 5+ English and maths","79.5%",1],
      ["EBacc points","6.11 · highest of the six",1],
      ["A level average","Grade B−, 35.93 points",1],
      ["Ofsted","Outstanding, January 2024",0]
    ],
    destinations_rows:[["Higher education or training","89%",1],["Staying in education","98% · highest of the six",1]],
    bursary_scholarship:"None. State funded.",
    numbers_rows:[
      ["Year 7 places","216",1],["Total roll","1,403",1],
      ["Applications 2026","1,577",1],
      ["Cut-off 2026","1.110 km by walking route",1],
      ["2025","1.186 km",1],["2024","1.240 km",1]
    ],
    sixth_form:"Yes, ages 11 to 18. Entry needs six GCSEs at grades 9 to 4 with at least three at grade 6 including English and maths.",
    open_days_detail:"Open mornings on 21, 22 and 23 September 2026, registration at 9am, tours from 9.15am, finishing 10.45am, student-led. Open evening Thursday 24 September, 5.30 to 7.30pm, self-guided with head's talks at 5.55, 6.30 and 7.05pm on a first-come basis. Booked through a ticketing site, maximum three tickets per household for mornings. No on-site parking, and the car park closes at 5pm.",
    other_info:"Near Twickenham and St Margarets stations. An address qualifying here would almost certainly also qualify for Twickenham School, giving a coherent pair of preferences on one move.",
    sources:["https://www.orleanspark.school/key-information/item/1/admissions","https://www.richmond.gov.uk/media/utmdtytx/lbr_tss_furthest_distance_offers.pdf","https://reports.ofsted.gov.uk/provider/23/138651"]
  }
},
{
  id:"lift-richmond-park", cat:"comp", name:"Lift Richmond Park",
  location:"East Sheen, SW14 · coed",
  criteria_short:"Distance 3.546 km in 2026 by walking route, but wildly volatile — all preferences were met in 2025.",
  fees_per_term:"None — state funded",
  next_open_day:"Thursday 1 October 2026, 6–8.15pm",
  flags:[{text:"Renamed from Richmond Park Academy",tone:""},{text:"Least contested Richmond school",tone:"good"},{text:"Distance wildly volatile",tone:"warn"},{text:"Oldest inspection, pre-rebrand",tone:"crit"}],
  detail:{
    headline_notes:[
      {tone:"warn", text:"<strong>By far the most volatile school on the list.</strong> The cut-off across six years runs from all preferences met to 13.453 kilometres. It was 3.546 km in 2026, all preferences met in 2025, and 9.115 km in 2024. It cannot be relied on either as a target or as a safety net."},
      {tone:"crit", text:"<strong>The evidence base is the weakest here.</strong> The last inspection was December 2022, which predates both the rebrand and the current framework, and the school has since changed name and trust. A new inspection is overdue."}
    ],
    criteria_detail:"Formerly Richmond Park Academy, renamed under a new trust and appearing under the new name in all current admissions documents.\nOrder: looked-after and previously looked-after children; exceptional medical or social need; siblings still on roll at admission; children of staff of two years or more or recruited to a skill-shortage post; then children resident closest.\nTies are resolved by independently verified ballot. Multiple births are admitted above the intake number where one twin gets the last place.\nRichmond's borough-wide method applies: shortest walking route by road and maintained footpath to the designated gate.\nOne published figure across the six years appears to be a typographical error in the council's own document and is reported as published.",
    banding:"None.",
    alternative_entry:"None.",
    exam_detail:"None. Non-selective.",
    timeline_rows:[
      ["Open evening","1 October 2026, 6–8.15pm","Confirmed"],
      ["Open mornings","Fridays, late Sept–Oct 2026","Confirmed · booking method not published"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Tests","None — non-selective",1]],
    deadlines_note:"Richmond's address rules apply in full, including the eighteen-month threshold and the requirement for both separated parents to sign a joint declaration.",
    performance_rows:[
      ["Attainment 8","56.1 (2024/25)",1],
      ["Progress 8","+0.49 (2023/24), up from +0.34",1],
      ["Grade 5+ English and maths","66.5%",1],
      ["A level average","Grade C+, 32.00 points",1],
      ["A level progress","−0.47 · weakest sixth form of the six",1],
      ["Ofsted","Good, March 2023 · pre-rebrand",0]
    ],
    destinations_rows:[["Higher education or training","90%, against the weakest A level grades",1]],
    bursary_scholarship:"None. State funded.",
    numbers_rows:[
      ["Year 7 places","180",1],["Total roll","1,046",1],
      ["Applications 2026","558 · least contested Richmond school",1],
      ["2025","495, all preferences met",1],
      ["Cut-off 2026","3.546 km by walking route",1]
    ],
    sixth_form:"Yes, ages 11 to 18. Size not published.",
    open_days_detail:"Open evening Thursday 1 October 2026, 6 to 8.15pm. Friday-morning tours through late September and October, with the booking method not published for the current cycle.",
    other_info:"Park Avenue, near Mortlake and North Sheen stations. Still uses its former web and email addresses. The combination of a rebrand and a trust change makes the 2022 inspection weak evidence for what the school is now.",
    sources:["https://www.richmond.gov.uk/media/utmdtytx/lbr_tss_furthest_distance_offers.pdf","https://www.compare-school-performance.service.gov.uk/school/136208/lift-richmond-park","https://reports.ofsted.gov.uk/provider/23/136208"]
  }
},
{
  id:"teddington", cat:"comp", name:"Teddington School",
  location:"Teddington, TW11 · coed",
  criteria_short:"Distance 5.080 km in 2026 by walking route — the widest reliable catchment of the group.",
  fees_per_term:"None — state funded",
  next_open_day:"Wednesday 30 September 2026, 5–8pm",
  flags:[{text:"Widest catchment: 5.08 km",tone:"good"},{text:"Progress softening",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>The widest reliable catchment of the group, by a wide margin.</strong> Above five kilometres by walking route, and rated at the strong standard in six of seven areas at a fresh April 2026 inspection. That combination is unique here."},
      {tone:"good", text:"<strong>The gap between offer day and the end of coordination is enormous here.</strong> In three of the last six years it effectively became an all-preferences-met school by September. In 2023 it went from 5.907 km at offer day to 17.801 km by the end."},
      {tone:"warn", text:"The trade-off is mid-table attainment, a softening progress score, and weak A level outcomes."}
    ],
    criteria_detail:"Order: looked-after and previously looked-after children, professionally evidenced; exceptional social or medical circumstances where this is deemed the only school that can meet the need, evidenced by a doctor, consultant or social worker and considered by a governors' panel; siblings on roll on 1 September of the entry year or at admission, at the same permanent residence; then distance.\n<strong>Note there is no staff-children criterion</strong>, unlike the other Richmond schools here.\nDistance is the shortest route by road or maintained footpath to the nearest pedestrian gate, with transport accessibility disregarded. Ties are broken by lots run independently of the school.\nThe school offered above its intake number on offer day.",
    banding:"None.",
    alternative_entry:"None.",
    exam_detail:"None. Non-selective.",
    timeline_rows:[
      ["Open evening","30 September 2026, 5–8pm","Confirmed · not ticketed"],
      ["Open mornings","w/c 5 October 2026","Confirmed · book online"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Tests","None — non-selective",1]],
    deadlines_note:"Richmond's address rules apply in full: eighteen-month scrutiny, no future addresses, connected-property disclosure, immediate notification of address or joint-care changes, and post-allocation reassessment that can withdraw an offer.",
    performance_rows:[
      ["Attainment 8","56.5 (2024/25)",1],
      ["Progress 8","+0.23 (2023/24), down from +0.39",1],
      ["Grade 5+ English and maths","66.5%",1],
      ["A level average","Grade C+, 32.22 points",1],
      ["Ofsted","Strong standard in six of seven areas, April 2026",0]
    ],
    destinations_rows:[["Higher education or training","86%",1]],
    bursary_scholarship:"None. State funded.",
    numbers_rows:[
      ["Year 7 places","240",1],["Total roll","1,405",1],
      ["Applications 2026","1,045",1],
      ["Cut-off 2026","5.080 km by walking route",1],
      ["2025","5.611 km",1],["2024","5.801 km",1]
    ],
    sixth_form:"Yes, ages 11 to 18, rated at the strong standard in April 2026. Size not published.",
    open_days_detail:"Open evening Wednesday 30 September 2026, 5 to 8pm, with staff, curriculum departments and student-guided tours, and head's presentations at 5.00, 5.45, 6.30 and 7.15pm, not ticketed and first come first served. Open mornings in the week beginning 5 October, booked online with tickets emailed. Sources differ slightly on the morning times; the school's own page is authoritative.",
    other_info:"Broom Road, near Teddington and Hampton Wick stations.",
    sources:["https://www.teddingtonschool.org/937/admissions","https://www.richmond.gov.uk/media/utmdtytx/lbr_tss_furthest_distance_offers.pdf","https://reports.ofsted.gov.uk/provider/23/138460"]
  }
},
{
  id:"twickenham-school", cat:"comp", name:"Twickenham School",
  location:"Twickenham, TW2 · coed",
  criteria_short:"All preferences met at offer day and at end of coordination in every published year from 2021 to 2026.",
  fees_per_term:"None — state funded",
  next_open_day:"Wednesday 30 September 2026, 6–8.30pm",
  flags:[{text:"The only genuine safety net",tone:"good"},{text:"Weakest attainment · no sixth form",tone:"crit"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>This is the safety net the list otherwise lacks.</strong> All preferences met at offer day and at the end of coordination in 2021, 2022, 2023, 2024, 2025 and 2026. Six consecutive years in which the distance criterion never bit. It is the only school here where a place is effectively certain."},
      {tone:"crit", text:"The counterweight is real: the weakest attainment of the Richmond and Kingston group, a progress score not statistically distinguishable from average, and no sixth form."}
    ],
    criteria_detail:"Order: looked-after and previously looked-after children, professionally evidenced; exceptional medical or social need, requiring written reasons from the parent plus professional reports connecting the need to this school specifically, at the time of application; siblings at the school at admission; then distance.\n<strong>There is no staff-children criterion.</strong>\nDistance is the shortest route by road or maintained footpath from a grid reference point within the property, out of the front entrance, along the middle of the road and footpath, to the nearest pedestrian gate used by the year group. Ties are resolved by lots for the same block of flats or equal distance.\nApplications rose to 447 against 180 places in 2026, so there is meaningful headroom, though the school also offered above its intake number with the intention of falling back.",
    banding:"None.",
    alternative_entry:"None.",
    exam_detail:"None. Non-selective.",
    timeline_rows:[
      ["Open evening","30 September 2026, 6–8.30pm","Confirmed"],
      ["Open mornings","2 and 5 October 2026","Confirmed · booking only"],
      ["Super Saturday","10 October 2026, 9–11am","Confirmed · booking only"],
      ["Common application form","31 October 2027","Confirmed"],
      ["National Offer Day","1 March 2028","Confirmed"]
    ],
    costs_rows:[["Registration fee","None",1],["Tests","None — non-selective",1]],
    deadlines_note:"Because all preferences have been met every year, Richmond's address rules are materially less binding here than at the other five. But name it truthfully anyway, since a withdrawn application affects every preference, not just one.",
    performance_rows:[
      ["Attainment 8","46.5 (2024/25), at the national average",1],
      ["Progress 8","+0.20 (2023/24), confidence interval crosses zero",1],
      ["Grade 5+ English and maths","39.7%, below national",1],
      ["EBacc entry","27.8%",1],
      ["Ofsted","Strong for leadership, December 2025",0]
    ],
    university_destinations:"Not applicable. There is no sixth form.",
    bursary_scholarship:"None. State funded.",
    numbers_rows:[
      ["Year 7 places","180",1],["Total roll","774 · smallest of the six",1],
      ["Applications 2026","447",1],
      ["Outcome","All preferences met, 2021–2026",1]
    ],
    sixth_form:"<strong>No.</strong> Ages 11 to 16 only, so a transfer to a separate sixth form or college is required at 16.",
    open_days_detail:"Open evening Wednesday 30 September 2026, 6 to 8.30pm. Open mornings Friday 2 and Monday 5 October, 9 to 10.45am, booking only. A Saturday event on 10 October, 9 to 11am, booking only. Separate transition mornings run in March for families already holding offers.",
    other_info:"Percy Road, near Strawberry Hill and Twickenham stations. Year-group sizes have been volatile as the school fills, and the small roll means smaller year groups and, on the inspection evidence, closer individual knowledge of pupils.",
    sources:["https://www.richmond.gov.uk/media/utmdtytx/lbr_tss_furthest_distance_offers.pdf","https://www.twickenhamschool.org.uk/311/transition-events-dates-for-your-diary","https://reports.ofsted.gov.uk/provider/23/143420"]
  }
},

/* ======================= INDEPENDENT ======================= */
{
  id:"latymer-upper", cat:"indep", name:"Latymer Upper School",
  location:"Hammersmith, W6 · coed",
  criteria_short:"Own papers: English comprehension, descriptive writing and maths in December, then an invitation-only interview day.",
  fees_per_term:"£10,675 inc VAT · £32,025 a year (2026/27)",
  next_open_day:"3 October 2026 · Music Scholars day 26 September",
  flags:[{text:"1 in 4 pupils on a bursary",tone:"good"},{text:"147 pupils on free places",tone:"good"},{text:"No reasoning paper",tone:""},{text:"80 min of comprehension and writing",tone:"crit"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>The largest bursary programme in London, and it is real.</strong> 275 pupils hold means-tested awards, 147 of them on completely free places, with average remission over 80 per cent and £6.9 million spent a year. There is a separate no-fee application form for full bursaries."},
      {tone:"crit", text:"<strong>But the entrance exam is the least forgiving format on the list.</strong> Eighty minutes of timed comprehension and descriptive writing, with no reasoning paper to offset a weak comprehension score. It is the least forgiving format on the list for a comprehension-process profile."},
      {tone:"warn", text:"<strong>The school publishes an unusually frank warning.</strong> It says it can be a busy, loud and crowded place and asks families of children with significant sensory needs to consider whether a smaller, quieter school might suit better."}
    ],
    criteria_detail:"All registered candidates sit the exam; there is no pre-screening. Stage two is a half-day of classroom activities plus a small-group interview assessing character, curiosity and teachability. A school reference is requested after the written stage.\nWeighting, whether scoring is rank-ordered or threshold-based, and the proportion shortlisted are all unpublished. The sibling policy is not published either.\nOf 168 Year 7 places, 44 come from the school's own prep, leaving roughly 124 external.",
    banding:"Not applicable.",
    alternative_entry:"<strong>There are no academic scholarships at all</strong>, stated twice on the school's own pages. At 11 the only award is music: up to 20 per cent fee remission plus funded tuition on two instruments, with one enhanced award up to 40 per cent.\nExpectation is two instruments, one orchestral, at roughly grade 5 on the main instrument. Art, drama and sport awards exist at 16 only.\nWhether a music award stacks with a bursary is strongly implied by the accounts but not explicitly stated. Ask.",
    exam_detail:"Own written papers at the school. <strong>Not the common pre-test, and there is no reasoning paper.</strong>\nEnglish paper one: comprehension, multiple choice, 35 minutes. English paper two: descriptive writing, 45 minutes. Then a 20-minute break. Maths: 60 minutes. 140 minutes in total.\nSample papers are published without mark schemes. The interview stage is immersive classroom activities plus a small-group interview.",
    timeline_rows:[
      ["11+ Open Day","3 October 2026","Confirmed"],
      ["Music Scholars Open Day","26 September 2026","Confirmed"],
      ["Registration opens","~May 2027","Projected"],
      ["Registration, bursary and music close","~mid-October 2027, midday","Projected"],
      ["Entrance exam","~early December 2027","Projected"],
      ["Interview day","~early January 2028","Projected"],
      ["Music auditions","~mid-January 2028","Projected"],
      ["Offers","~early February 2028","Projected"]
    ],
    costs_rows:[
      ["Registration fee","£220, non-refundable",1],
      ["Waived for","Full bursary applicants",0],
      ["Deposit","Not published",1],
      ["Annual fee","£32,025 inc VAT",1]
    ],
    deadlines_note:"<strong>A procedural trap worth knowing.</strong> The bursary form is only released after registration is processed, and then allows two weeks to complete. Register early rather than on deadline day.\nLate registrations are not considered. Learning-support documentation must also be in by the registration deadline.",
    performance_rows:[
      ["GCSE 9–7","96% (2026)",1],["Grade 9","64%",1],
      ["A level A*–A","81% (2026)",1],["A*","43%",1],
      ["Inspection","All standards met, November 2023",0]
    ],
    destinations_rows:[
      ["Oxbridge 2026","23 · 11 Oxford, 12 Cambridge",1],
      ["2025","35 admissions",1],
      ["Medicine 2026","12 offers",1],
      ["United States","over 20 students",1],
      ["First-choice course","83%",1]
    ],
    bursary_scholarship:"<strong>The strongest provision found anywhere on this list.</strong>\nAwards run 25 to 100 per cent. A full award is likely where combined income falls below roughly £65,000 to £75,000. Partial awards need total gross family income under £135,000, both parents working and no second property.\nWorked examples are published: a single parent with one child on a low income and renting receives 100 per cent; two working parents on moderate incomes owning their home receive 50 per cent.\nDisqualifiers include a home over £1.5 million, a second home, another child in unsupported fee-paying education, a luxury car or frequent expensive holidays.\nAssessment is by an independent external company, with home visits for shortlisted families and the decision communicated in the February offer letter. There is no appeal.\n<strong>Both separated parents must complete the form.</strong> Divorce itself is not a qualifying hardship.\nThere is no higher academic bar for bursary candidates. Extras grants cover lunch, uniform, music, exam fees and trips.",
    numbers_rows:[
      ["Year 7 places","168 · 44 internal, ~124 external",1],
      ["Total roll","1,443",1],
      ["Applicants","Not published",1],
      ["Bursary holders","275, of whom 147 free",1],
      ["Annual bursary spend","£6.9m",1]
    ],
    sixth_form:"Fully coeducational. External intake around 30 to 35. Requires nine GCSEs with grades 8 to 9 in A level subjects and at least grade 8 in maths.",
    open_days_detail:"11+ open days on 12 September and 3 October 2026, a music scholars day on 26 September and a 16+ day on 16 September. Booked through an events platform. <strong>The school states it does not offer small-group tours.</strong>",
    other_info:"Two minutes from Ravenscourt Park. Tutor groups of 16 to 18, remixed into teaching classes of 24. No coach service. A 400-year-old foundation with an explicit socio-economic diversity mission.",
    sources:["https://www.latymer-upper.org/admissions/fees/","https://www.latymer-upper.org/admissions/joining-at-11/","https://www.latymer-upper.org/admissions/bursaries/"]
  }
},
{
  id:"city-of-london", cat:"indep", name:"City of London School",
  location:"Blackfriars, EC4V · boys",
  criteria_short:"Own computerised assessment including verbal and non-verbal reasoning, plus handwritten creative writing, then interview.",
  fees_per_term:"£9,848 inc VAT · £29,545 a year (2026/27)",
  next_open_day:"22 and 24 September 2026",
  flags:[{text:"Cheapest of the six",tone:"good"},{text:"Full bursaries, ~100 pupils",tone:"good"},{text:"Tests VR and NVR",tone:""},{text:"Expects you to release home equity",tone:"crit"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>The school has abolished fee-discounting scholarships entirely and redirected the money into bursaries.</strong> Every prize and scholarship, academic, music and sport, is worth £35. Around a hundred pupils hold transformational bursaries covering up to 100 per cent of fees plus extras."},
      {tone:"crit", text:"<strong>Two bursary conditions are unusually demanding.</strong> The school expects capital release, including re-mortgaging or moving to release equity in the family home. And both biological parents are assessed even where separated, with the guidance stating explicitly that a court order limiting a parent's contribution is not sufficient evidence they cannot pay."},
      {tone:"warn", text:"<strong>There is no sibling or feeder priority whatsoever.</strong> The policy states brothers of current or former pupils and children of alumni must comply with all aspects of the process with no preferential consideration."}
    ],
    criteria_detail:"Offers rest on exam performance, an individual interview and a group session, and a confidential head's report covering the candidate and the parents. No published weighting, no published shortlist proportion, and the school gives no feedback and states it is not obliged to give reasons.",
    banding:"Not applicable.",
    alternative_entry:"<strong>All prizes and scholarships are worth £35.</strong> The academic prize needs no separate preparation. The music award adds free tuition on two instruments but requires grade 5 minimum on piano and strings, orchestral instruments only as first study, and voice cannot be first study. A sports prize gives access to a separate fund of unpublished value.\nNo art or drama awards are published.\nChoral scholarships worth £7,500 a year exist at two City churches but are auditioned at age eight with entry at ten, so effectively closed.\n<strong>A prize or scholarship can be combined with a bursary up to the full value of fees.</strong>",
    exam_detail:"Own papers. Not the common pre-test at 11. Both parts on the same day, around two and a half hours.\nPart one, online, 105 minutes in six sections: maths 20 minutes, English 30, <strong>non-verbal reasoning 10, verbal reasoning 10</strong>, puzzles and problem solving 15, creative comprehension 20. The maths and both reasoning sections are adaptive.\nPart two: creative writing, 30 minutes, handwritten, marked on creativity, vocabulary and accuracy.\n<strong>Reading comprehension totals 50 of the 105 online minutes</strong> across the English and creative comprehension sections. Sample questions are published. No taster day.",
    timeline_rows:[
      ["Open events","22 and 24 September 2026","Confirmed"],
      ["Registration closes","~early November 2027","Projected"],
      ["Bursary declaration","~one week later","Projected"],
      ["Assessments","~late November 2027","Projected"],
      ["Interviews","~January 2028","Projected"],
      ["Offers","~mid-February 2028","Projected"]
    ],
    costs_rows:[
      ["Registration fee","£192 inc VAT, non-refundable",1],
      ["Reduced fee","£64 where net income under £35,000",1],
      ["Deposit","Not published",1],
      ["Annual fee","£29,545 inc VAT · cheapest here",1]
    ],
    deadlines_note:"<strong>The bursary tick-box exists only on the registration form.</strong> The school states this is the only stage at which interest can be indicated. Missing it in November 2027 forecloses the bursary permanently.",
    performance_rows:[
      ["GCSE 9–7","97% (2026)",1],["Grade 9","60%",1],
      ["A level A*–A","83% (2026)",1],["A*","42%",1],
      ["Inspection","All standards met, November 2024",0]
    ],
    destinations_rows:[
      ["Oxbridge 2026","10% of leavers with confirmed places",1],
      ["Russell Group or top 10","97%",1],
      ["World top 10","37%",1]
    ],
    bursary_scholarship:"Transformational bursaries up to 100 per cent of fees plus extras.\nPublished worked examples, on net joint income: both parents low income and renting, £29,854, receives 100 per cent; moderate incomes with a mortgage, £54,325, receives 75 per cent; owning a home with some assets, £74,873, is unlikely except in exceptional circumstances.\nExtras for pupils at 95 per cent or more: lunch, a £500 uniform contribution, <strong>travel to and from school</strong>, curriculum trips and public exam fees.\nEligibility gates: the child and at least one parent must have lived in the UK for two continuous years; the family must live within the M25 throughout; and it is <strong>not available to applicants currently at another independent school</strong> unless already holding a substantial bursary there.\nThree stages, ending in full documentation from both parents, a possible home visit and a required meeting with the head of finance. Reviewed annually and can go down.",
    numbers_rows:[
      ["Year 7 places","up to 85",1],["Total roll","1,076",1],
      ["Applicants","Not published",1],
      ["Bursary holders","~100, about 9% of the roll",1]
    ],
    sixth_form:"Boys only at 16, with joint activities with the neighbouring girls' school but not coeducational. Up to 20 external places, needing six GCSEs at 8 to 9.",
    open_days_detail:"Open events 22 and 24 September 2026 in three sessions each evening, booked through an events platform, one event per family. Private tours are not published but worth asking about. The school advises visiting in the six months before assessment, so the relevant events are autumn 2027.",
    other_info:"Bakerloo line from north-west London Park to Embankment, then a short walk — about 40 minutes, better than the mileage suggests, and travel is covered for bursary holders at 95 per cent or more.\n<strong>Split site:</strong> Year 6 is taught at a separate junior school rather than at Blackfriars.",
    sources:["https://www.cityoflondonschool.org.uk/admissions/fees/","https://www.cityoflondonschool.org.uk/admissions/11-entry/","https://www.cityoflondonschool.org.uk/admissions/transformational-bursaries/"]
  }
},
{
  id:"ucs", cat:"indep", name:"University College School",
  location:"Hampstead, NW3 · boys at 11",
  criteria_short:"Own English and maths papers in January, plus a school reference, then a mini-lesson and interview.",
  fees_per_term:"£11,437 inc VAT · £34,311 a year (2026/27)",
  next_open_day:"Monday 12 October 2026, 5pm · bursary evening 28 September",
  flags:[{text:"90% of bursaries are full",tone:"good"},{text:"Closest independent to home",tone:"good"},{text:"Highest fee on the list",tone:"warn"},{text:"45-min comprehension paper",tone:"crit"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>The bursary provision here is the reason this school stays on the list despite carrying the highest fee.</strong> Around 60 pupils hold awards and 90 per cent of those are at 100 per cent of fees. The school states it consistently ranks among the top London schools for the number of full bursaries offered."},
      {tone:"good", text:"<strong>A dedicated bursary information evening runs each autumn</strong> for families considering an 11+ place with financial support. For anyone applying with a bursary in mind it is the most important event on the independent calendar."},
      {tone:"crit", text:"<strong>The 45-minute reading comprehension is the heaviest single discrete element published across all six independents</strong>, a third of the total assessed time, with no reasoning paper to offset it."}
    ],
    criteria_detail:"Around 60 external places at 11, alongside roughly 60 boys transferring from the school's own junior branch. Judged primarily on performance in English and maths. A confidential academic reference is requested after the deadline and only shortlisted candidates are interviewed.\nWeighting, scoring method and shortlist proportion are unpublished, and no sibling policy appears anywhere.\n<strong>There are no additional academic selection criteria applied to boys whose families are applying for a bursary</strong>, which the school states explicitly.",
    banding:"Not applicable.",
    alternative_entry:"<strong>Music scholarships are the only award at 11.</strong> Worth 10 to 25 per cent of fees, in exceptional cases up to 50 per cent, plus free tuition on one instrument.\nMinimum grade 5 on at least one instrument, and candidates must offer at least one orchestral instrument as first or strong second study. Saxophone and tuned percussion count; <strong>piano, guitar, electric guitar and drum kit do not</strong>. Audition is two contrasting pieces on the main instrument, one on a second, plus interview, with an eight-minute limit.\n<strong>It stacks with a bursary up to 100 per cent remission</strong>, which the school states explicitly.\nNo art, drama or sport awards were found.",
    exam_detail:"Own written papers at the school on one day. Not the common pre-test, no online adaptive stage.\nEnglish, 1 hour 15 minutes: <strong>reading comprehension 45 minutes plus creative writing 30 minutes</strong>.\nMaths, 1 hour 15 minutes, in two sections, multiple choice and short-answer core maths plus problems.\n<strong>No separate reasoning paper.</strong> No past papers are released.\nThe interview stage is a mini-lesson plus a one-to-one interview, with parents attending separately. No group activity or taster day at 11.",
    timeline_rows:[
      ["11+ Open Evening","12 October 2026, 5pm","Confirmed · 17 Sept is full"],
      ["Bursary Information Evening","28 September 2026","Confirmed · the key event"],
      ["Music Scholarship Evening","16 September 2026","Confirmed"],
      ["Application and music deadline","~early November 2027, 5pm","Projected"],
      ["Entrance exam","~early January 2028","Projected"],
      ["Music auditions and interviews","~late January 2028","Projected"],
      ["Offers, with bursary outcome","~mid-February 2028","Projected"]
    ],
    costs_rows:[
      ["Registration fee","£210",1],
      ["Waived for","Bursary applicants",0],
      ["Reservation fee","Amount not published",1],
      ["Annual fee","£34,311 inc VAT, includes lunch",1]
    ],
    deadlines_note:"The financial disclosure form is issued only to candidates called to interview, and the bursary outcome is communicated with the offer of a place. Bursary applicants do not pay the registration fee.",
    performance_rows:[
      ["GCSE 9–7","94% (2026)",1],["Grade 9","59%",1],
      ["A level A*–A","79% (2026)",1],["A*","39%",1],
      ["Inspection","All standards met, October 2024",0]
    ],
    destinations_rows:[
      ["Oxbridge","85 offers over five years, ~17 a year",1],
      ["Medicine","50 enrolled over five years",1],
      ["Russell Group 2026","76%, rising to 85% with Bath, St Andrews and Loughborough",1],
      ["Overseas 2026","17 leavers",1]
    ],
    bursary_scholarship:"<strong>Range 10 to 100 per cent, and 100 per cent is the normal shape of an award here rather than a theoretical ceiling.</strong> Around 60 pupils receive support, the vast majority at full remission, totalling £1.2 million.\nThe published income band runs to household incomes of up to £100,000, assessed as gross income from all sources for both parents less reasonable housing costs. <strong>That figure appears in an older brochure rather than on the current page, so confirm it at the bursary evening.</strong>\n<strong>The critical caveat:</strong> there is an overriding assumption that capital assets, including significant equity in the family home, be realised to meet fees before assistance is offered.\nExtras: curriculum trips pro-rata to the award, uniform, sports kit and a school laptop. A dedicated bursaries coordinator supports holders from application onward.\nReviewed annually and can go down as well as up.",
    numbers_rows:[
      ["Year 7 places","~60 external, ~60 from the junior branch",1],
      ["Total roll","1,309",1],
      ["Applicants","Not published",1],
      ["Bursary holders","~60, 90% of them at 100%",1]
    ],
    sixth_form:"Coeducational at 16, with around 60 places for girls and a small number for boys. Requires an average GCSE grade of 7.0. Assessment is a multiple-choice reasoning test, a 20-minute writing task on a topical issue and two one-to-one interviews.",
    open_days_detail:"11+ open evenings 17 September 2026, now full, and 12 October 2026. Music scholarship evening 16 September. <strong>Bursary information evening 28 September.</strong> Private pupil-led daytime tours are available by email to admissions.",
    other_info:"About two and a half miles from home, roughly 30 minutes, and the closest independent on the list.\n<strong>One thing to confirm:</strong> a planning notice describes partial demolition of one wing, full demolition of another building and a new teaching block. Status and timeline are unverified, but that would mean construction through the whole of the application and early school years.\nFounded 1830, explicitly non-denominational with no chapel. Five modern languages plus Latin and Greek. No school transport, but Finchley Road and Frognal is a short, straightforward journey.",
    sources:["https://www.ucs.org.uk/admissions/fees/","https://www.ucs.org.uk/admissions/admissions-process/year-7/","https://www.ucs.org.uk/admissions/fee-assistance/"]
  }
},
{
  id:"alleyns-dulwich", cat:"indep", name:"Alleyn's School, Dulwich",
  location:"Dulwich, SE22 · coed",
  criteria_short:"Own papers in Reasoning, English and Maths in early January, then an assessment day of group tasks and interview.",
  fees_per_term:"£10,830 inc VAT · £32,490 a year (2026/27)",
  next_open_day:"Wednesday 30 September 2026 · Music day 21 October",
  flags:[{text:"Bursaries average 94% of fees",tone:"good"},{text:"Tests reasoning",tone:""},{text:"75–90 min commute each way",tone:"crit"}],
  detail:{
    headline_notes:[
      {tone:"good", text:"<strong>Bursaries average 94 per cent of full fees.</strong> Seventy pupils are fully funded and contribute nothing. 117 receive means-tested support, about ten per cent of the senior school, and the school states that on average over 20 such places are awarded each year at 11."},
      {tone:"crit", text:"<strong>The commute is the real constraint, not the fees.</strong> Roughly 75 to 90 minutes each way from north-west London, two and a half to three hours a day, for a child whose documented difficulty involves sustained attention under fatigue. The guidance given to parents is that ninety minutes each way is too much at eleven."},
      {tone:"warn", text:"<strong>The commute is the binding constraint, not the fees.</strong> The guidance given to parents is that ninety minutes each way is too much at eleven, and after the clocks change in late October children travel home in the dark."}
    ],
    criteria_detail:"Two stages. Stage one is entrance exams in literacy, numeracy and reasoning. Stage two is an assessment day of group and individual tasks for selected candidates. <strong>A confidential report from the current school is requested and used to inform selection</strong>, which gives an uneven profile somewhere to be explained.\nCandidates must be under 12 on 1 September and normally get one attempt only. No feedback and no appeal.\nSiblings get no automatic place, but where candidates perform similarly, priority goes where possible to a sibling. Pupils from the school's own junior schools transfer automatically but must still sit the exam on the published date or forfeit that right.",
    banding:"Not applicable.",
    alternative_entry:"Merit-based awards, not means-tested, and <strong>explicitly combinable with bursaries up to 100 per cent remission</strong>.\nTop academic and standard academic awards up to £5,000; music up to £5,000 plus free tuition on the principal instrument; sport and drama up to £5,000; art and design technology up to £2,000.\n<strong>All 11+ candidates are automatically considered for an academic scholarship.</strong> Music, sport, art, technology and drama need application at registration.\nMinimum music grade is not published; the details sit in a scholarship booklet available from the registrar. A music department open day for prospective scholars runs 21 October 2026.\nScale check: £5,000 is about 15 per cent of fees, so a scholarship alone changes the figure modestly. The bursary is the route that materially alters it.",
    exam_detail:"Own papers, written on paper in early January. Three papers: <strong>Reasoning, English and Maths.</strong>\n<strong>Durations are not published by the school.</strong> Tuition sites give figures that are internally inconsistent and should not be relied on.\nEnglish is reading comprehension on a passage plus a creative writing task. Maths follows the curriculum to the end of Year 5. Reasoning is reported to cover verbal, non-verbal and spatial, standardised by age, though the school's page does not break it down — worth asking.\n<strong>The school publishes sample papers and a syllabus with reasoning samples</strong>, which are authoritative on format. Download them directly.\nStage two is an assessment day with a group activity and a one-to-one interview.",
    timeline_rows:[
      ["11+ Open Afternoon","30 September 2026","Confirmed"],
      ["Open Morning","3 October 2026","Confirmed"],
      ["Music Department Open Day","21 October 2026","Confirmed"],
      ["Registration opens","~1 September 2027","Projected"],
      ["Registration closes","~mid-November 2027, midday","Projected"],
      ["Written assessments","~early January 2028","Projected"],
      ["Interviews and group activity","~late January 2028","Projected"],
      ["Offers","Not published","Ask the registrar"]
    ],
    costs_rows:[
      ["Registration fee","£270 inc VAT, non-refundable",1],
      ["Waived for","Families on universal credit or income support",0],
      ["Deposit","Exists, amount not published",1],
      ["Annual fee","£32,490 inc VAT",1]
    ],
    deadlines_note:"<strong>The single highest-risk date on this school's calendar is unpublished.</strong> The admissions policy states that late bursary applications cannot be accepted under any circumstances, and that a bursary form not returned with documentation by the deadline converts the application to a fee-paying one. Get that date from the registrar at registration in September 2027.",
    performance_rows:[
      ["GCSE 9–7","92% (2026), 95% (2025)",1],["Grade 9","53%",1],
      ["A level A*–A","77% (2026), 81% (2025)",1],
      ["Inspection","All five standards met, October 2024",0]
    ],
    destinations_rows:[
      ["Oxbridge 2026","23, a record",1],["2025","21",1],
      ["Russell Group","85%",1],["Oxford or Cambridge","12% of leavers",1],
      ["Medicine 2025","13 students",1]
    ],
    bursary_scholarship:"<strong>Bursaries cover an average of 94 per cent of full fees.</strong> Seventy pupils are fully funded. 117 receive support, about ten per cent of the senior school. Around 20 new bursary places are awarded each year at 11, plus up to five at 16.\nTwo routes: an academic bursary place on need plus ability, or a bursary supplementing a scholarship, both up to 100 per cent. <strong>Scholarships and bursaries stack.</strong>\n<strong>The double gate, stated by the school:</strong> bursaries are awarded only to candidates reaching a high standard in the entrance assessments, and priority goes to the most able children needing very significant financial help.\nBeyond fees: uniform, <strong>travel including coach funding where no suitable public transport exists</strong>, lunches, devices, trips and co-curricular activities.\nThe chief financial officer and a colleague meet applicants at home or at school. Reviewed annually. Income thresholds are not published.",
    numbers_rows:[
      ["Year 7 places","~150, roughly two thirds external",1],
      ["Total roll","1,451, capacity raised to 1,475",1],
      ["Applicants","Not published",1],
      ["Bursary holders","117, 70 of them fully funded",1]
    ],
    sixth_form:"Coeducational at 16, external intake around 40. Stage one is three papers: maths multiple choice, reasoning with text comprehension and data interpretation, and a critical writing essay on a general topic. The interview is described by the school as a major factor.",
    open_days_detail:"11+ open afternoons 30 September and 14 October 2026, an open morning 3 October, a taster afternoon 2 October, a 16+ evening 6 October and a music department open day for prospective scholars on 21 October. Applications go through an online platform. Private tours are not published — contact admissions.",
    other_info:"<strong>This is a different school from Alleyn's Hampstead.</strong> Separate admissions, separate fees, separate inspection. Attending one confers no route into the other.\nThe head has been in post since 2021 and still teaches Year 7 and A level English.",
    sources:["https://www.alleyns.org.uk/admissions/school-fees","https://www.alleyns.org.uk/admissions/senior-school-11-","https://www.alleyns.org.uk/admissions/help-with-fees"]
  }
},
{
  id:"alleyns-hampstead", cat:"indep", name:"Alleyn's Hampstead",
  location:"Hampstead, NW3 · coed",
  criteria_short:"Own online assessment in Maths, English and non-verbal reasoning, plus an Activity Day, interview and school reference.",
  fees_per_term:"£10,912 inc VAT · £32,736 a year · year label not published",
  next_open_day:"Year 7 Open Evening, Tuesday 13 October 2026, 5.15pm",
  flags:[{text:"No published bursary at all",tone:"crit"},{text:"Max 20% scholarship",tone:"crit"},{text:"Opened under this name Sept 2026",tone:"warn"}],
  detail:{
    headline_notes:[
      {tone:"crit", text:"<strong>There is no published means-tested bursary here. None.</strong> Established from four independent checks: the site map has no bursary page, the 24-page scholarship booklet never uses the word, and the admissions policy has no section on it. Maximum publicly available reduction is a 20 per cent scholarship, and only one award may be held."},
      {tone:"warn", text:"<strong>Two phrases are easy to misread.</strong> Awards are described as open to children of all backgrounds regardless of financial circumstances. That says awards are <em>not</em> means-tested, which is the opposite of a bursary."},
      {tone:"warn", text:"<strong>Nothing about this school has a track record under its current identity.</strong> It opened under the name in September 2026, so there are no published results, no inspection and no destinations data for it as constituted, and building works run across the whole application window."}
    ],
    criteria_detail:"Formerly North Bridge House Senior School Hampstead, renamed in September 2026. <strong>Alleyn's in Dulwich, a registered charity, now oversees education, while Cognita, a for-profit group, retains ownership and operation.</strong> Every policy and the fee terms are Cognita documents. That distinction governs the bursary answer.\nThe policy describes a bespoke set of selective academic assessments, an interview and a review of reports and references, plus a compulsory Activity Day of group activities assessed against the school's values.\nTie-breaks at equal score run: looked-after children, siblings, children of staff, then date of application. <strong>Siblings are a tie-break, not a standing priority.</strong>\n<strong>Feeder priority is significant:</strong> pupils from the school's own junior section and its sister prep are usually offered places that are explicitly not contingent on the 11+ exam.\nThere is no right of appeal; the head's decision is final.",
    banding:"Not applicable.",
    alternative_entry:"Four categories at Year 7: academic, creative arts, performing arts and sport.\n<strong>Value is 5 to 20 per cent of fees</strong>, so £1,637 to £6,547 a year. Numbers available are not published. It is not possible to hold more than one award, though candidates may apply for two.\nAcademic needs a portfolio of at most eight A4 sides across five sections, brought to interview in duplicate. Creative arts needs a digital portfolio of ten artworks and a January workshop. Drama is a late-January session with improvisation and a prepared monologue.\n<strong>Music requires grade 5 or above at Year 7</strong>, or working towards it, on two instruments or one instrument and voice, with two contrasting pieces of at most ten minutes plus sight-reading and questions on key, time signature and performance directions.\n<strong>Whether an award combines with a bursary cannot be answered, because the booklet never mentions bursaries.</strong>",
    exam_detail:"Own assessment on an online platform covering <strong>maths, English and non-verbal reasoning</strong>. Not the common pre-test.\nDurations, section timings, comprehension length and any creative writing requirement are all unpublished.\nPlus a compulsory Activity Day of group activities and an interview.\n<strong>The spread of weight across four instruments</strong> — online test, activity day, interview and school reference — structurally favours a pupil who presents unevenly. But the weighting is unpublished, so it cannot be relied on.",
    timeline_rows:[
      ["Senior Open Morning","10 October 2026, 9.15am","Confirmed"],
      ["Year 7 Open Evening","13 October 2026, 5.15pm","Confirmed"],
      ["Online Fireside Chat","3 November 2026, 8.30pm","Confirmed"],
      ["Registration closes","~November 2027","Projected"],
      ["Scholarship deadline","Not published","Request the pack"],
      ["Assessment, Activity Day, interview","~January 2028","Projected"],
      ["Offers","~February 2028","Projected"]
    ],
    costs_rows:[
      ["Registration fee","Not published · ring admissions",1],
      ["Deposit","£2,000, returned on leaving",1],
      ["Annual fee","£32,736 inc VAT",1],
      ["Sibling discounts","5, 10 and 15 per cent",1],
      ["Fee after a maximum 20% award","~£26,189 a year",1]
    ],
    deadlines_note:"<strong>Not one date for 2028 entry is confirmed in published material.</strong> The policy states deadlines fall in November before the year of entry, which is the only firm anchor. The scholarship deadline sits in a separate pack that is not on the public site — request it directly.\nThe scholarship booklet still carries a stale line referring to January 2025 assessments, so do not rely on it for dates.",
    performance_rows:[
      ["Results under this name","None published",0],
      ["Pre-rebrand GCSE 9–7","44% (2023), against 22% nationally",1],
      ["A level","Could not verify for this site",0],
      ["Inspection","2023, under the former name and identity",0]
    ],
    university_destinations:"<strong>Not published, for either the old or the new identity.</strong> No destinations page exists. No Oxbridge count, no Russell Group figure, no medicine numbers. Treat outcomes at 18 as an unknown rather than a strength.",
    bursary_scholarship:"<strong>No means-tested bursary exists in any published document.</strong>\nNo income thresholds, no separate form, no deadlines, no full awards, no published proportion supported, no published spend. The stated ceiling is a 20 per cent scholarship.\nStructural context: Cognita is for-profit and has no public-benefit obligation driving bursary provision. Alleyn's in Dulwich runs substantial bursaries to full fees because it is a charity, and <strong>that provision has not been extended here</strong>. The March 2025 partnership announcements describe investment in buildings and technology and mention bursaries, means-tested places or widening access nowhere at all.\n<strong>Recommended action:</strong> ask admissions in writing whether any means-tested bursary exists or is planned for 2028, and request the scholarship applications pack. A negative published record is strong evidence but is not the school confirming it, and the partnership is new enough that provision could yet be introduced.",
    numbers_rows:[
      ["Senior roll","365, ages 11 to 18",1],
      ["Year 7 intake","Not published · ~50 implied",1],
      ["Applicants per place","Not published",1],
      ["Offers from sister prep","26 in one recent year",1]
    ],
    sixth_form:"Coeducational, size not published. Sixteen A level subjects are listed, taken three at a time plus an extended project. External entry exists via interview and a statement of purpose. <strong>Specific GCSE requirements are not published,</strong> though a sixth-form floor of grade 6, and 7 for maths and sciences, now exists where the former school had none.",
    open_days_detail:"Senior open morning 10 October 2026 at 9.15am and Year 7 open evening 13 October at 5.15pm, the more relevant of the two. An online chat runs 3 November and a further online event 10 November. Private tours are available on request. <strong>Nothing is published beyond November 2026.</strong>",
    other_info:"<strong>Do not confuse three schools.</strong> This one, renamed September 2026, ages 2 to 18. Its sister prep, renamed September 2025, ages 4 to 13. And a third school in Islington, unchanged and still under the old name.\n<strong>A live trap:</strong> the old website's senior Hampstead pages now redirect to the Islington school and serve that school's results and fees. Any comparison drawn from those pages after September 2026 is wrong.\n<strong>Risks to 2028:</strong> fees are reviewed each April and two more reviews land before entry; selectivity may tighten; there is no bursary to plan around; there is no inspection or results record under the new identity; and building works are funded and under way across the whole application window.",
    sources:["https://www.alleyns-hampstead.org.uk/admissions-process/","https://www.alleyns-hampstead.org.uk/school-fees/","https://www.alleyns-hampstead.org.uk/senior-school/"]
  }
},
{
  id:"maida-vale", cat:"indep", name:"Maida Vale School",
  location:"Maida Vale, W9 · coed",
  criteria_short:"ISEB Common Pre-Test — maths, English, verbal and non-verbal reasoning — plus a group interview with the headmaster.",
  fees_per_term:"£10,992 inc VAT · £32,976 a year (2026/27)",
  next_open_day:"Saturday 26 September 2026, 10am",
  flags:[{text:"No bursary exists · resolved",tone:"crit"},{text:"~1 mile, walkable",tone:"good"}],
  detail:{
    headline_notes:[
      {tone:"crit", text:"<strong>The contradiction in the sources is resolved, and both sides were partly right.</strong> Scholarships exist, which is why one listing said yes. Means-tested bursaries do not, which is why another said no. The scholarship policy caps awards at 20 per cent of tuition and states plainly that they recognise talent and potential <em>rather than to support families with school fees</em>."},
      {tone:"crit", text:"<strong>None of its 33 published policies is a bursary policy.</strong> For a school that publishes an accessibility plan and a numeracy policy, that absence is strong negative evidence. The proprietor is a limited company rather than a charity, which is the structural reason."},
      {tone:"good", text:"<strong>Against that, the entry route is the gentlest of the six and the commute is about a mile.</strong> The interview is a presentation on any subject the candidate is passionate about, it happens before the test rather than after, classes are capped at 22, and the school is still filling at roughly a third of capacity."}
    ],
    criteria_detail:"Two elements, interview and testing, with <strong>the interview usually before the tests</strong>, from as early as September of Year 6.\nA reference is sought before interview. Where there is significant disparity between the current school's standardised scores and the school's own, the school contacts that school for clarity.\n<strong>Any professional assessment reports must be disclosed as part of the admissions requirement</strong>, and failure to declare may result in forfeiting the offer or place.\nSiblings may be preferred at the headmaster's discretion, but there is no automatic priority. Pupils from the group's two prep schools have an automatic right of entry and are not expected to take the pre-test.\nThe school aims never to exceed a 60:40 gender ratio.",
    banding:"Not applicable.",
    alternative_entry:"Five categories at Year 7: academic, art and design technology, music, drama and sport.\n<strong>Awards may be honorary, may carry specific benefits, or may attract remission up to 20 per cent of tuition fees.</strong> Only one award may be held at a time and no fixed number is published.\nAcademic needs no separate application: all Year 7 applicants are automatically considered on their pre-test scores, with shortlisted candidates attending an assessment day of problem-solving and debating.\nMusic expects work at or beyond grade 4 on one instrument plus proficiency in a second or a commitment to singing. <strong>An internal inconsistency to flag:</strong> the scholarship policy says awards go to students who excel in two or more instruments, which is stricter than the web page. Ask the registrar.\nContinuation terms allow the school to end an award on one term's notice where it is not in the school's financial interests.",
    exam_detail:"<strong>The ISEB Common Pre-Test</strong>, not the school's own papers. Online and adaptive, in four timed sections: <strong>English, maths, verbal reasoning and non-verbal reasoning.</strong> Reading comprehension sits within the English section, and the school does not publish section durations.\nCreative writing is not part of the 11+ route, though written papers are used for entry at other points.\n<strong>The interview is the distinctive part.</strong> Group format, typically three candidates, with the headmaster. Each candidate gives a presentation on any subject they are passionate about, followed by discussion. It may include mental maths and a reading element. It usually happens before the tests.\nExtra time is permitted only on receipt of a qualifying professional report.",
    timeline_rows:[
      ["Open Morning","26 September 2026, 10am","Confirmed"],
      ["Registration closes","~26 November 2027","Projected"],
      ["Scholarship applications close","~3 December 2027","Projected"],
      ["ISEB pre-test","~November–December 2027","Projected"],
      ["Group interview with the head","~early January 2028","Projected"],
      ["Scholarship assessments","~late January 2028","Projected"],
      ["Offer day","~mid-February 2028","Projected"],
      ["Acceptance and deposit","~early March 2028","Projected"]
    ],
    costs_rows:[
      ["Registration fee","£180 inc VAT",1],
      ["ISEB pre-test","No charge from the board itself",1],
      ["Invigilation elsewhere","Chargeable · see note",1],
      ["Deposit","Not published on the school's site",1],
      ["Annual fee","£32,976 inc VAT, lunch extra",1],
      ["Fee after a maximum 20% award","~£26,381 a year",1]
    ],
    deadlines_note:"<strong>A practical problem to solve early.</strong> Not every primary hosts the common pre-test, and where yours does not, testing must be arranged elsewhere. The board charges families nothing and states invigilation is free, but that assumes a school hosts it. Commercial centres charge their own fee.\nBest options in order: ask this school to host it, since it is the school requiring it; ask your own primary to register as a centre, since doing so costs a school little; then a commercial centre.\nThe booking window projects to roughly June 2027, with the test sittable from September 2027. Aim for October or November 2027, because most senior schools want the result before their December and January rounds.\nTwo published acceptance dates differ by one day on the school's own site.",
    performance_rows:[
      ["GCSE and A level","None published, and none verifiable",0],
      ["First GCSE cohort","Summer 2025",0],
      ["First A level cohort","Summer 2027",0],
      ["Inspection","All standards met, November 2024",0],
      ["Previous","Good, November 2021",0]
    ],
    university_destinations:"<strong>Effectively non-existent.</strong> No Oxbridge figures, no Russell Group percentage, no destinations list. The school opened in August 2020, so there is no track record to assess.",
    bursary_scholarship:"<strong>Scholarships yes, means-tested bursaries no.</strong>\nMaximum remission 20 per cent of tuition. No income thresholds, because no means-testing exists. No separate bursary form, no deadline, no full awards, no published proportion supported, no published spend.\nThe fees page offers only a 5 per cent sibling discount for families with three or more children across the group, which does not apply to a one-child family, and a fees-in-advance scheme.\n<strong>Even a maximum award leaves roughly £26,400 a year payable.</strong> Fees will also rise before 2028.\nWorth putting in writing to the registrar: whether any hardship fund or discretionary remission exists outside the scholarship route, and confirmation that 20 per cent is the maximum reduction available to a new Year 7 entrant.",
    numbers_rows:[
      ["Year 7 places","Not published",1],
      ["Class size target","Up to 22, support sets 8–10",1],
      ["Total roll","197 to 211, capacity ~600",1],
      ["Applicants per place","Not published",1],
      ["Oversubscription evidence","None · roll well below capacity",1]
    ],
    sixth_form:"Yes, confirmed by inspectors and understood to have opened in 2023. Coeducational, size not published. External entry is accepted with offers conditional on GCSE results, but <strong>specific minimum grades are not published</strong> and the A level subject list sits behind a downloadable guide.",
    open_days_detail:"Open morning Saturday 26 September 2026 at 10am, the only dated event published. Open mornings otherwise run regularly in term time, normally on a Thursday, with introductions from the headmaster and two deputies followed by pupil-led tours, though individual dates are not published. <strong>Private tours are available</strong> by contacting the registrar.",
    other_info:"<strong>Roughly a mile from home and walkable</strong>, by far the best commute on the list, which removes daily fatigue as a variable.\nOwned by a four-school group structured as a limited company whose directors form the governing body. That for-profit structure is the reason there is no means-tested provision and the reason the scholarship terms allow termination on financial grounds. Families should not expect this to change.\nThe school is young, still filling at roughly a third of capacity, and frames entry as a seven-year commitment through to A level rather than a staging post.",
    sources:["https://maidavaleschool.com/admissions/entry-at-11/","https://maidavaleschool.com/admissions/fees/","https://maidavaleschool.com/admissions/scholarships/","https://www.isi.net/institutions/school/maida-vale-school-9470"]
  }
}
];

/* ===================== OPEN DAYS, CHRONOLOGICAL ===================== */
window.OPENDAYS = [
 {iso:"2026-09-12", when:"Sat 12 September", school:"Latymer Upper", cat:"indep", event:"11+ Open Day", note:"Booked via events platform"},
 {iso:"2026-09-14", when:"Mon 14 Sept – Thu 15 Oct", school:"West London Free School", cat:"comp", event:"Open mornings, four a week, 9.25–10.30am", note:"Book from 1 September"},
 {iso:"2026-09-16", when:"Wed 16 September", school:"Holland Park", cat:"comp", event:"Open evening, 8.55–10.35am", note:"Labelled an evening but timed in the morning — confirm"},
 {iso:"2026-09-16", when:"Wed 16 September", school:"The Kingston Academy", cat:"comp", event:"Open evening, 5–8pm", note:"No booking. Talks at 5.15, 6, 6.45, 7.30"},
 {iso:"2026-09-16", when:"Wed 16 September", school:"Christ's School", cat:"faith", event:"Open morning, 9.15–10.40am", note:"Ticketed, max two per family"},
 {iso:"2026-09-16", when:"Wed 16 September", school:"University College School", cat:"indep", event:"Music Scholarship Evening", note:"School gives two dates — confirm"},
 {iso:"2026-09-17", when:"Thu 17 September", school:"University College School", cat:"indep", event:"11+ Open Evening", note:"Fully booked — 12 October is the alternative"},
 {iso:"2026-09-18", when:"Fri 18 September", school:"Holland Park", cat:"comp", event:"Open morning, 8.55–10.35am", note:""},
 {iso:"2026-09-18", when:"Fri 18, Mon 21, Thu 24 Sept", school:"The Kingston Academy", cat:"comp", event:"Open mornings, 9.15–10am", note:"Book online. Aimed at local primaries"},
 {iso:"2026-09-21", when:"Mon 21 September", school:"Holland Park", cat:"comp", event:"Open morning, 8.55–10.35am", note:""},
 {iso:"2026-09-21", when:"Mon 21 – Wed 23 Sept", school:"Orleans Park", cat:"comp", event:"Open mornings, 9am registration", note:"Ticketed, max three per household"},
 {iso:"2026-09-22", when:"Tue 22 September", school:"City of London School", cat:"indep", event:"10+/11+ Open Event, three sessions", note:"One event per family"},
 {iso:"2026-09-23", when:"Wed 23 September", school:"Sutton Grammar", cat:"grammar", event:"Year 7 Open Evening, 4.45–8pm", note:"Explicitly for Year 5 boys. No booking needed"},
 {iso:"2026-09-24", when:"Thu 24 September", school:"City of London School", cat:"indep", event:"10+/11+ Open Event, three sessions", note:""},
 {iso:"2026-09-24", when:"Thu 24 September", school:"Chelsea Academy", cat:"faith", event:"Year 6 Open Evening, 5–8pm", note:"No booking needed"},
 {iso:"2026-09-24", when:"Thu 24 September", school:"The Fulham Boys School", cat:"faith", event:"Open Evening, talks 6pm and 7.15pm", note:"Booking form. Ends by 8.30pm"},
 {iso:"2026-09-24", when:"Thu 24 September", school:"William Ellis", cat:"comp", event:"Open Evening, 6pm", note:"Ask about the aptitude test format here"},
 {iso:"2026-09-24", when:"Thu 24 September", school:"Twyford CE High", cat:"faith", event:"Open Evening, talks 5.30, 6.30, 7.30pm", note:"Year 6 only — Year 5 families asked not to attend"},
 {iso:"2026-09-24", when:"Thu 24 September", school:"Christ's School", cat:"faith", event:"Open morning, 9.15–10.40am", note:"Ticketed"},
 {iso:"2026-09-24", when:"Thu 24 September", school:"Orleans Park", cat:"comp", event:"Open evening, 5.30–7.30pm", note:"No parking after 5pm"},
 {iso:"2026-09-25", when:"Fri 25 September", school:"Ealing Fields", cat:"comp", event:"Ticket booking opens for the 1 October evening", note:"The only public access all year — book promptly"},
 {iso:"2026-09-26", when:"Sat 26 September", school:"Latymer Upper", cat:"indep", event:"Music Scholars Open Day", note:"Shows what an audition panel wants"},
 {iso:"2026-09-26", when:"Sat 26 September", school:"Maida Vale School", cat:"indep", event:"Open Morning, 10am", note:"Only dated event published. Private tours on request"},
 {iso:"2026-09-28", when:"Mon 28 September", school:"University College School", cat:"indep", event:"Bursary Information Evening", note:"The key independent-route event if fees are in question"},
 {iso:"2026-09-29", when:"Tue 29 September", school:"The Hurlingham Academy", cat:"comp", event:"Open evening, 4–7.30pm", note:"Principal's talk at 6pm"},
 {iso:"2026-09-30", when:"Wed 30 September", school:"Ada Lovelace", cat:"comp", event:"Open evening, talks 5.15, 6.15, 7.15pm", note:"Tours from 5pm"},
 {iso:"2026-09-30", when:"Wed 30 September", school:"Teddington School", cat:"comp", event:"Open evening, 5–8pm", note:"Not ticketed. Talks at 5, 5.45, 6.30, 7.15"},
 {iso:"2026-09-30", when:"Wed 30 September", school:"Twickenham School", cat:"comp", event:"Open evening, 6–8.30pm", note:""},
 {iso:"2026-09-30", when:"Wed 30 September", school:"Alleyn's School, Dulwich", cat:"indep", event:"11+ Open Afternoon", note:""},
 {iso:"2026-09-30", when:"Wed 30 September", school:"Alleyn's Hampstead", cat:"indep", event:"Sixth Form Open Evening, 5.30pm", note:""},
 {iso:"2026-10-01", when:"Thu 1 October", school:"Ealing Fields", cat:"comp", event:"Year 6 into 7 Open Evening", note:"Ticketed. One day before its music deadline"},
 {iso:"2026-10-01", when:"Thu 1 October", school:"The Fulham Boys School", cat:"faith", event:"Open Day, talks 9.15 and 11.15am", note:"School in action"},
 {iso:"2026-10-01", when:"Thu 1 October", school:"Lift Richmond Park", cat:"comp", event:"Open evening, 6–8.15pm", note:""},
 {iso:"2026-10-01", when:"Thu 1 October", school:"Christ's School", cat:"faith", event:"Open morning, 9.15–10.40am", note:"Ticketed"},
 {iso:"2026-10-02", when:"Fri 2 October", school:"Christ's School", cat:"faith", event:"Open morning, 9.15–10.40am", note:"Ticketed"},
 {iso:"2026-10-02", when:"Fri 2 October", school:"Alleyn's School, Dulwich", cat:"indep", event:"Experience Alleyn's taster afternoon", note:"Marketing event, not assessed"},
 {iso:"2026-10-02", when:"Fri 2 October", school:"Twickenham School", cat:"comp", event:"Open morning, 9–10.45am", note:"Booking only"},
 {iso:"2026-10-03", when:"Sat 3 October", school:"Latymer Upper", cat:"indep", event:"11+ Open Day", note:"Second of two"},
 {iso:"2026-10-03", when:"Sat 3 October", school:"Alleyn's School, Dulwich", cat:"indep", event:"11+ and 16+ Open Morning", note:""},
 {iso:"2026-10-05", when:"Mon 5 October", school:"Twickenham School", cat:"comp", event:"Open morning, 9–10.45am", note:"Booking only"},
 {iso:"2026-10-05", when:"Mon 5 – Thu 22 Oct", school:"The Hurlingham Academy", cat:"comp", event:"Open mornings, 45-minute slots", note:"Also a year-round open door, no appointment needed"},
 {iso:"2026-10-05", when:"Week of 5 October", school:"Teddington School", cat:"comp", event:"Open mornings, 9–11am", note:"Book online, tickets emailed"},
 {iso:"2026-10-06", when:"Tue 6 October", school:"Alleyn's School, Dulwich", cat:"indep", event:"16+ Open Evening", note:""},
 {iso:"2026-10-06", when:"Tue 6 – Fri 16 Oct", school:"Grey Court", cat:"comp", event:"Open mornings, 9am and 11am", note:"Two weeks of tours. Booking opened 1 September"},
 {iso:"2026-10-10", when:"Sat 10 October", school:"Alleyn's Hampstead", cat:"indep", event:"Senior School Open Morning, 9.15am", note:""},
 {iso:"2026-10-10", when:"Sat 10 October", school:"Twickenham School", cat:"comp", event:"Super Saturday, 9–11am", note:"Booking only"},
 {iso:"2026-10-12", when:"Mon 12 October", school:"University College School", cat:"indep", event:"11+ Open Evening, 5pm", note:"The alternative to the full 17 September date"},
 {iso:"2026-10-13", when:"Tue 13 October", school:"Alleyn's Hampstead", cat:"indep", event:"Year 7 Open Evening, 5.15pm", note:"The more relevant of its two senior events"},
 {iso:"2026-10-14", when:"Wed 14 October", school:"Alleyn's School, Dulwich", cat:"indep", event:"11+ Open Afternoon", note:"Second of two"},
 {iso:"2026-10-15", when:"Thu 15 October", school:"Christ's School", cat:"faith", event:"Open morning, 9.15–10.40am", note:"Last of five"},
 {iso:"2026-10-21", when:"Wed 21 October", school:"Alleyn's School, Dulwich", cat:"indep", event:"Music Department Open Day", note:"For prospective 11+ music scholars"},
 {iso:"2026-11-03", when:"Tue 3 November", school:"Alleyn's Hampstead", cat:"indep", event:"Online Fireside Chat, 8.30pm", note:""},
 {iso:"2026-11-10", when:"Tue 10 November", school:"Alleyn's Hampstead", cat:"indep", event:"Alleyn's Live, online, 7pm", note:"For prospective pupils"},
 {iso:"2026-11-11", when:"Wed 11 November", school:"Sutton Grammar", cat:"grammar", event:"Sixth Form Open Evening", note:""},
 {iso:"2026-11-12", when:"Thu 12 November", school:"Twyford CE High", cat:"faith", event:"Sixth Form Open Evening", note:"Tickets from 5 November"},
 {iso:"2026-11-12", when:"Thu 12 November", school:"Chelsea Academy", cat:"faith", event:"Sixth Form Open Evening", note:""},
 {iso:"2026-11-26", when:"Thu 26 November", school:"Ada Lovelace", cat:"comp", event:"Sixth Form Open Evening", note:"T Level pathway"},
 {iso:"2026-11-27", when:"Fri 27 November", school:"William Ellis", cat:"comp", event:"Consortium Sixth Form Evening, 4.30–7pm", note:"Pre-registration required"}
];

window.OPENDAYS_PENDING = [
 {school:"Queen Elizabeth's, Barnet", cat:"grammar", note:"Usually the first Thursday in July. Booking details published towards the end of May."},
 {school:"Wilson's School", cat:"grammar", note:"The school has said it will publish September 2028 entry visits in spring 2027."},
 {school:"Wallington County Grammar", cat:"grammar", note:"July 2027, explicitly for families applying for September 2028 entry."},
 {school:"Tiffin School", cat:"grammar", note:"One evening a year, most recently late June. Nothing published for the 2028 cycle."},
 {school:"Chelsea Academy", cat:"faith", note:"Pre-booked daytime tours also run from mid-September to late October, roughly 40 minutes."},
 {school:"Ealing Fields", cat:"comp", note:"No tours at any other point in the year. The single October evening is the only access."},
 {school:"Twyford CE High", cat:"faith", note:"Closed to the public outside its published events. No personal tours."},
 {school:"Maida Vale School", cat:"indep", note:"Further open mornings run in term time, normally Thursdays, but individual dates are not published."},
 {school:"Alleyn's Hampstead", cat:"indep", note:"Private tours available on request. Nothing published beyond November 2026."},
 {school:"University College School", cat:"indep", note:"Pupil-led daytime tours available year-round by email to admissions."}
];
