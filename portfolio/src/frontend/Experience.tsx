
interface LinkItem {
  label: string; // ชื่อที่จะโชว์บนปุ่ม เช่น "GitHub", "Live Site"
  url: string;   // ลิงก์เว็บจริงๆ
}

interface ProjectData{
    id:number;
    title:string;
    date:Date[];//date -> year-month-day
    role:string[]|any|string;
    details:string[];

    link:LinkItem[];
}

export let inputProject:ProjectData (id:number, title:string,
    data:Date[],role:string[]|string|string|any,
    details:string[]){
        

};


export const MyProject:ProjectData[]=[
    //2024//
    {
    id:1,
    title:"GRAND SUWAN",
    date:[new Date(2024-11-5)],
    role: "",
    details:["- Created website, Quotation, and LINE api  for Family Business",
      " - Platform: Built and designed on Wix.",
      "- Seamlessly linked   Quotation Forms with LINE Messaging API/Notify.",
      "- Efficiency: Automated the data flow to ensure consistent and timely responses to customer leads." 
    ],
    link:[
        {label:"Google drive",url:"https://drive.google.com/drive/folders/1NVeNw2uRRK6cXBaPld896XcZjgbEl7Pg?usp=sharing"},
        {label:"GRAND SUWAN website",url:"https://www.grandsuwanproperty.com/"}
    ]

},

    //2025//
    {
    id:2,
    title:"Dsign mascot → CENTRAL THAM",
    date:[new Date(2025-10-31),new Date(2025-10-31)],
    role: "Design mascot",
    details:["",
      " ",
      "",
      "" 
    ],
    link:[
        {label:"Google drive",url:"https://www.notion.so/My-experience-2e64e61b9b94803fa780e476bc878c7e?source=copy_link#2f04e61b9b9480b3be03ee7b050cdddd"},
        {label:"CENTRAL THAM hackathon",url:"https://www.centraltham.com/th/newsroom/news-and-updates/150/central-tham-mascot-contest-illustration-impact-with-central-tham?fbclid=IwVERDUANwNt5leHRuA2FlbQIxMQABHvyW9tTacB4Tazik376LqPpoJUTVxjyg2cep4NC0u2eoOM1lKEtpr4APLc_q_aem_jeqlMmr6v_LT0I8hTT1W7g"}
    ]
}




];


