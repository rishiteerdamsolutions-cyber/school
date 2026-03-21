export type NoticeCategory = "events" | "exams" | "circulars";

export type BoardNotice = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  category: NoticeCategory;
  date: string;
};

export const BOARD_CATEGORIES: { id: NoticeCategory; label: string }[] = [
  { id: "events", label: "Events" },
  { id: "exams", label: "Exams" },
  { id: "circulars", label: "Circulars" },
];

export const boardNotices: BoardNotice[] = [
  {
    id: "n1",
    title: "Annual Day Rehearsals",
    excerpt: "Grades 6–10: schedule for stage blocks and costume checks.",
    body: "Rehearsals begin next week in the main auditorium. Students must bring their performance kits. Parents are invited to the preview on Friday at 4:30 PM.",
    category: "events",
    date: "2026-03-28",
  },
  {
    id: "n2",
    title: "Science Olympiad Workshop",
    excerpt: "Hands-on labs and mock rounds with faculty mentors.",
    body: "Registration closes this Friday. Sessions run Mon–Wed after school. Materials and safety gear will be provided on campus.",
    category: "events",
    date: "2026-04-02",
  },
  {
    id: "n3",
    title: "Term Assessment — Grade 9",
    excerpt: "Timetable published; bring ID card and stationery kit.",
    body: "Assessments follow the board pattern. Mobile devices are not permitted in the examination block. Reporting time: 8:45 AM.",
    category: "exams",
    date: "2026-04-10",
  },
  {
    id: "n4",
    title: "Board Practical Dates",
    excerpt: "Lab batches and external examiner slots confirmed.",
    body: "Batch A: 12–14 April. Batch B: 15–17 April. Venue: Senior Science Labs. Dress code: full school uniform.",
    category: "exams",
    date: "2026-04-08",
  },
  {
    id: "n5",
    title: "Fee Reminder — Q1",
    excerpt: "Online portal open; offline counters on Sat 9–1.",
    body: "Kindly clear dues before the due date to avoid late fees. For assistance, contact the accounts office via the parent portal.",
    category: "circulars",
    date: "2026-03-25",
  },
  {
    id: "n6",
    title: "Summer Uniform Window",
    excerpt: "Approved vendors list updated on the school website.",
    body: "Please purchase only from authorised vendors. Tailoring assistance is available at the cooperative store on campus.",
    category: "circulars",
    date: "2026-03-30",
  },
];
