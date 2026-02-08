import {
    Building2,
    Users,
    Briefcase,
    Code,
    Camera,
    Calendar,
} from "lucide-react";

import drHimanshuPandey from "@/assets/dr-himanshu-pandey.jpg";
import erPavanKumarSingh from "@/assets/er-pavan-kumar-singh.jpg";
import erGauravSrivastava from "@/assets/er-gaurav-srivastava.jpg";
import erPrashantKumarSingh from "@/assets/dr-prashant-kumar-singh.png";
import riddhiSingh from "@/assets/riddhi-singh-rathore.jpg";
import studentCoordinatorsGroup from "@/assets/student-coordinators-2025-26.jpg";
import akashSingh from "@/assets/akash-singh-new.jpg";
import srishtiMishra from "@/assets/srishti-mishra.jpg";
import rashmiKushwaha from "@/assets/rashmi-kushwaha.jpg";
import aryanTripathi from "@/assets/aryan-tripathi.jpg";
import akashKumarYadav from "@/assets/akash-kumar-yadav.jpg";
import erRoliKushwaha from "@/assets/er-roli-kushwaha.jpg";
import erSonamSingh from "@/assets/er-sonam-singh.jpg";
import erMarutiMaurya from "@/assets/er-maruti-maurya.jpg";
import erNamitaSrivastava from "@/assets/er-namita-srivastava.png";

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    email?: string;
    phone?: string;
    linkedin?: string;
    image?: string;
    branch?: string;
    year?: string;
    title?: string; // For faculty
}

export interface Team {
    id: number;
    name: string;
    description: string;
    icon: typeof Building2;
    keyPoints: string[];
    members: TeamMember[];
    stats: { label: string; value: string }[];
}

export const facultyMembers = [
    {
        name: "Dr. Himanshu Pandey",
        title: "Associate Professor",
        role: "T&P Cell Incharge",
        phone: "7905287870",
        email: "pandey_himanshu@lkouniv.ac.in",
        image: drHimanshuPandey
    },
    {
        name: "Er. Pavan Kumar Singh",
        title: "Assistant Professor",
        role: "Faculty Coordinator",
        phone: "9406987292",
        email: "pavanrajawat038@gmail.com",
        image: erPavanKumarSingh
    },
    {
        name: "Er. Gaurav Srivastava",
        title: "Assistant Professor",
        role: "Faculty Coordinator",
        phone: "9717681158",
        email: "gaurav.ap1793@gmail.com",
        image: erGauravSrivastava
    },
    {
        name: "Dr. Prashant Kumar Singh",
        title: "Associate Professor",
        role: "Faculty Coordinator",
        phone: "9179122557",
        email: "singh_pk@lkouniv.ac.in",
        image: erPrashantKumarSingh
    },
    {
        name: "Er. Roli Kushwaha",
        title: "Assistant Professor",
        role: "Faculty Coordinator",
        phone: "7007538905",
        email: "rolikushwaha.academics22@gmail.com",
        image: erRoliKushwaha
    },
    {
        name: "Er. Sonam Singh",
        title: "Assistant Professor",
        role: "Faculty Coordinator",
        phone: "7007928931",
        email: "ssinghsonam061@gmail.com",
        image: erSonamSingh
    },
    {
        name: "Er. Maruti Maurya",
        title: "Assistant Professor",
        role: "Faculty Coordinator",
        phone: "7020464299",
        email: "maurya_maruti@lkouniv.ac.in",
        image: erMarutiMaurya
    },
    {
        name: "Er. Namita Srivastava",
        title: "Assistant Professor",
        role: "Faculty Coordinator",
        phone: "9651314977",
        email: "namitas25@gmail.com",
        image: erNamitaSrivastava
    }
];

export const teamLeads = [
    { name: "Riddhi Singh Rathore", role: "Coordinator Lead", image: riddhiSingh, linkedin: "https://linkedin.com/in/riddhi-singh-rathore-997b962aa", email: "singhrathoreriddhi874@gmail.com", twitter: "https://x.com/riddhi_sin22754" },
    { name: "Student Coordinators", role: "Team 2025-26", image: studentCoordinatorsGroup },
];


export const teams: Team[] = [
    {
        id: 2,
        name: "Networking & Outreach Team",
        description: "Alumni relations & external partnerships",
        icon: Users,
        keyPoints: ["Alumni engagement", "Finding leads for internship and placement opportunities", "Helping establishing networks with HRs and Companies"],
        members: [
            { id: 1, name: "Ramakant Mishra", role: "Team Lead", year: "3rd Year", branch: "B.Tech ECE", linkedin: "https://www.linkedin.com/in/ramakant-mishra-935199275/" },
            { id: 2, name: "Rashmi Kushwaha", role: "Co-Lead", year: "2nd Year", branch: "BCA", linkedin: "https://www.linkedin.com/in/rashmikushwaha2005/", image: rashmiKushwaha },
            { id: 3, name: "Akash Singh", role: "Co-Lead", year: "2nd Year", branch: "B.Tech CSE-AI", linkedin: "https://www.linkedin.com/in/akashsinghmrj64/", image: akashSingh },
            { id: 4, name: "Srishti Mishra", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE-AI", linkedin: "https://www.linkedin.com/in/mishrasrishti108/", image: srishtiMishra },
            { id: 5, name: "Akash Kumar Yadav", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE-AI", linkedin: "https://www.linkedin.com/in/akash-kumar-yadav-b1a33430b/", image: akashKumarYadav },
            { id: 6, name: "Harshit Yadav", role: "Team Member", year: "1st Year", branch: "B.Tech CSE", linkedin: "https://www.linkedin.com/in/harshit-yadav-690036341/" },
            { id: 7, name: "Astitva Bharadwaj", role: "Team Member", year: "1st Year", branch: "BCA", linkedin: "https://www.linkedin.com/in/astitva-bhardwajlu/" },
            { id: 8, name: "Riya Jainer", role: "Team Member", year: "1st Year", branch: "B.Tech EE", linkedin: "https://www.linkedin.com/in/riya-jainer-61ab39384/" },
            { id: 9, name: "Divyanshu Dubey", role: "Team Member", year: "2nd Year", branch: "B.Tech ECE", linkedin: "https://www.linkedin.com/in/divyanshu-dubey-652ab932a/" },
        ],
        stats: [
            { label: "Alumni Connected", value: "500+" },
            { label: "New Leads", value: "80+" },
            { label: "Partnerships", value: "25" },
        ],
    },
    {
        id: 1,
        name: "Team Corporate Connect",
        description: "Company relations & recruitment coordination",
        icon: Building2,
        keyPoints: ["Company outreach", "JAF processing", "MoU management", "Recruiter relations"],
        members: [

            { id: 1, name: "Kshitiz Singh", role: "Team Lead", year: "3rd Year", branch: "B.Tech ECE", linkedin: "https://www.linkedin.com/in/kshitiz-singh-0163a432a/" },
            { id: 2, name: "Aryan Tripathi", role: "Team Lead", year: "2nd Year", branch: "B.Tech EE", linkedin: "https://www.linkedin.com/in/aryan-tripathi-45346a254/", image: aryanTripathi },
            { id: 3, name: "Abhinav Singh", role: "Team Lead", year: "2nd Year", branch: "B.Tech CSE", linkedin: "https://www.linkedin.com/in/abhinavatwork/" },
            { id: 4, name: "Aditya Swamy", role: "Team Member", year: "2nd Year", branch: "B.Tech ME", linkedin: "https://www.linkedin.com/in/aditya-swamy-773698300/" },
            { id: 5, name: "Shivaksh Singh", role: "Team Member", year: "1st Year", branch: "B.Tech CSE-AI", linkedin: "https://www.linkedin.com/in/shivaksh-singh-626a93384/" },
            { id: 6, name: "Himanshu Mishra", role: "Team Member", year: "1st Year", branch: "B.Tech EE", linkedin: "https://www.linkedin.com/in/himanshu-mishra-122a77389/" },
            { id: 7, name: "Shreya Pandey", role: "Team Member", year: "1st Year", branch: "B.Tech EE", linkedin: "https://www.linkedin.com/in/shreya-pandey-74a426385/" },
            { id: 8, name: "Abhay Pratap Yadav", role: "Team Member", year: "2nd Year", branch: "B.Tech CE", linkedin: "https://www.linkedin.com/in/abhay-pratap-yadav-552b10258/" },
        ],
        stats: [
            { label: "Companies Reached", value: "150+" },
            { label: "MoUs Signed", value: "45" },
            { label: "JAFs Processed", value: "200+" },
        ],
    },
    {
        id: 3,
        name: "Team Industry Interface",
        description: "Training, skill development & internships",
        icon: Briefcase,
        keyPoints: ["Soft skill training", "Skill assessments", "Internship coordination", "Industry collaboration"],
        members: [
            { id: 1, name: "Prateek Jaiswal", role: "Team Lead", year: "3rd Year", branch: "B.Tech CE", linkedin: "https://www.linkedin.com/in/prateek-jaiswal-aa985324b/" },
            { id: 2, name: "Arnav Singh Chauhan", role: "Team Lead", year: "3rd Year", branch: "B.Tech", linkedin: "https://www.linkedin.com/in/arnav-singh-chauhan-/" },
            { id: 3, name: "Aman Kumar Yadav", role: "Co-Lead", year: "2nd Year", branch: "B.Tech EE", linkedin: "https://www.linkedin.com/in/aman-kumar-yadav-70765232a/" },
            { id: 4, name: "Abhishek Bajpai", role: "Co-Lead", year: "2nd Year", branch: "B.Tech CSE", linkedin: "https://www.linkedin.com/in/heybajpai/" },
            { id: 5, name: "Tejas Kumar Vishwakarma", role: "Team Member", year: "1st Year", branch: "BCA", linkedin: "https://www.linkedin.com/in/tejas-kumar-vishwakarma-86878a304/" },
            { id: 6, name: "Kanishka Singh", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE", linkedin: "https://www.linkedin.com/in/kanishka-singh-71a045283/" },
            { id: 7, name: "Satyam Nagar", role: "Team Member", year: "1st Year", branch: "B.Tech CSE-AI", linkedin: "https://www.linkedin.com/in/satyam-nagar-8ab50638b/" },
            { id: 8, name: "Kashvi Jaiswal", role: "Team Member", year: "1st Year", branch: "BCA", linkedin: "https://www.linkedin.com/in/kashvi-jaiswal-3838b5355/" },
        ],
        stats: [
            { label: "Training Sessions", value: "60+" },
            { label: "Internships Secured", value: "300+" },
            { label: "Industry Partners", value: "40" },
        ],
    },
    {
        id: 4,
        name: "Web Dev & Design Team",
        description: "Technical infrastructure & design",
        icon: Code,
        keyPoints: ["Website development", "Technical support", "Database management", "UI/UX design"],
        members: [
            { id: 1, name: "Tejas Bharadwaj", role: "Team Lead", year: "3rd Year", branch: "B.Tech ECE", linkedin: "https://www.linkedin.com/in/tejasbharadwaj05/" },
            { id: 2, name: "Sivasti Awasthi", role: "Team Lead", year: "3rd Year", branch: "B.Tech ECE" },
            { id: 3, name: "Aditya Sharma", role: "Co-Lead", year: "3rd Year", branch: "B.Tech CSE", linkedin: "https://www.linkedin.com/in/imadityaxd/" },
            { id: 4, name: "Varun Sagar", role: "Co-Lead", year: "2nd Year", branch: "B.Tech CE", linkedin: "https://www.linkedin.com/in/varun-sagar-ba4204189/" },
            { id: 5, name: "Ayush Kumar Mishra", role: "Team Member", year: "2nd Year", branch: "B.Tech EE", linkedin: "https://www.linkedin.com/in/ayush-kumar-mishra-34480332a/" },
            { id: 6, name: "Divyanshu Dubey", role: "Team Member", year: "2nd Year", branch: "B.Tech ECE", linkedin: "https://www.linkedin.com/in/divyanshu-singh-chauhan-320947335/" },
            { id: 7, name: "Shahid Ali Mansuri", role: "Team Member", year: "1st Year", branch: "B.Tech CSE", linkedin: "https://www.linkedin.com/in/shahidalimansuri/" },
            { id: 8, name: "Arti", role: "Team Member", year: "1st Year", branch: "B.Tech CSE-AI", linkedin: "https://www.linkedin.com/in/aarti-kumari-915622383/" },
            { id: 9, name: "Subodh Kushwaha", role: "Team Member", year: "2nd Year", branch: "B.Tech ECE", linkedin: "https://www.linkedin.com/in/subodh-kushwaha-1020a032b/" },
            { id: 10, name: "Piyush Kumar Singh", role: "Team Member", year: "2nd Year", branch: "B.Tech ECE", linkedin: "https://www.linkedin.com/in/piyush-kumar-singh-67575a383/" },
        ],
        stats: [
            { label: "Features Deployed", value: "25+" },
            { label: "Uptime", value: "99.9%" },
            { label: "User Satisfaction", value: "95%" },
        ],
    },
    {
        id: 5,
        name: "Content & Media Team",
        description: "Content creation & social media",
        icon: Camera,
        keyPoints: ["Social media management", "Content writing", "Photography/videography", "Brand management"],
        members: [
            { id: 1, name: "Tanishka Soni", role: "Team Lead", year: "3rd Year", branch: "B.Tech CSE", linkedin: "https://www.linkedin.com/in/tanishka-soni-a902b2283/" },
            { id: 2, name: "Ishan Chawla", role: "Co-Lead", year: "2nd Year", branch: "B.Tech CSE-AI", linkedin: "https://www.linkedin.com/in/ishan-chawla-36a356325/" },
            { id: 3, name: "Akriti Rao", role: "Team Member", year: "1st Year", branch: "B.Tech CSE", linkedin: "https://www.linkedin.com/in/akriti-rao-1a149434b/" },
            { id: 4, name: "Prachi Aswal", role: "Team Member", year: "1st Year", branch: "BCA", linkedin: "https://www.linkedin.com/in/prachi-aswal/" },
            { id: 5, name: "Shubham Mishra", role: "Team Member", year: "1st Year", branch: "B.Tech CSE-AI", linkedin: "https://www.linkedin.com/in/shubham-mishra-550675394/" },
            { id: 6, name: "Vishnu", role: "Team Member", year: "1st Year", branch: "B.Tech CE" },
            { id: 7, name: "Smriti Shukla", role: "Team Member", year: "1st Year", branch: "B.Tech ME", linkedin: "https://www.linkedin.com/in/smriti-shukla-40169b384/" },
            { id: 8, name: "Anshu Pandey", role: "Team Member", year: "1st Year", branch: "B.Tech ME", linkedin: "https://www.linkedin.com/in/anshu-pandey-72b98726b/" },
        ],
        stats: [
            { label: "Posts Created", value: "500+" },
            { label: "Followers", value: "10K+" },
            { label: "Engagement Rate", value: "8.5%" },
        ],
    },
    {
        id: 6,
        name: "Event & Hospitality Team",
        description: "Event execution & recruiter hospitality",
        icon: Calendar,
        keyPoints: ["Campus drive logistics", "Venue management", "Recruiter hospitality", "Volunteer coordination"],
        members: [
            { id: 1, name: "Abhay Yadav", role: "Team Lead", year: "3rd Year", branch: "B.Tech CE", linkedin: "https://www.linkedin.com/in/abhayadav4401/" },
            { id: 2, name: "Aayush Aaryan", role: "Co-Lead", year: "2nd Year", branch: "B.Tech CE", linkedin: "https://www.linkedin.com/in/aayush-aaryan-a80214333/" },
            { id: 3, name: "Mohd. Faisal", role: "Co-Lead", year: "3rd Year", branch: "B.Tech ECE" },
            { id: 4, name: "Jatin Yadav", role: "Co-Lead", year: "2nd Year", branch: "B.Tech CE", linkedin: "https://www.linkedin.com/in/jatin-yadav-252839328/" },
            { id: 5, name: "Kuldeep Yadav", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE-AI", linkedin: "https://www.linkedin.com/in/kuldeep-yadav-5142b5339/" },
            { id: 6, name: "Akshay Kumar Dubey", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE-AI" },
            { id: 7, name: "Shubham Singh", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE-AI", linkedin: "https://www.linkedin.com/in/shubham-singh-032206322/" },
            { id: 8, name: "Anushka Dwivedi", role: "Team Member", year: "1st Year", branch: "B.Tech CSE" },
            { id: 9, name: "Rajvardhan Shukla", role: "Team Member", year: "2nd Year", branch: "B.Tech CSE-AI" },
            { id: 10, name: "Anvi Jaiswal", role: "Team Member", year: "1st Year", branch: "B.Tech CSE", linkedin: "https://www.linkedin.com/in/anvi-jaiswal-107379382/" },
        ],
        stats: [
            { label: "Events Managed", value: "50+" },
            { label: "Drives Hosted", value: "120+" },
            { label: "Volunteers", value: "200+" },
        ],
    },
];
