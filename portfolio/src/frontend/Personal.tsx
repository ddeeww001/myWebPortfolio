interface MyDetails{
    id:number;
    name:string;
    birtday:string;
    conTract:string[];
    introduce:string|any;
    role:string[];
}

export const myDetailsData:MyDetails = {
    id:0,
    name:"THITIRAT SIRISAWAD",
    birtday:"14/JUNE/2006",
    conTract:["GitHub: ddeeww001", "Email: dewthitirat@mail.com"],
    introduce:"I am a UX/UI designer and Frontend developer.",
    role:["UX/UI designer","Frontend"]
};


export const Profile = ({data}:{data:MyDetails})=>{
    return(
        <div className="Profile">
            <h1>Profile</h1>
            <div className="myName">
                <h3>{data.name}</h3>
                <div className="myDetail">
                    <p>{data.birtday}</p>
                    <div className="contract">
                    <ul>
                       {data.conTract.map((index,item)=>(
                        <li key={index}>{item}</li>
                       ))}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}