export class BusinessCardServ{
    _id?: number;
    name?: string;
    title?: string;
    email?: string;
    phone?: string;
    website?: string;
    bName?: string;
    bServ?: string;

    constructor(name: string, title: string, email: string, phone: string, website: string, bName: string, bServ: string){
        this.name = name;
        this.title = title;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.bName = bName;
        this.bServ = bServ;
    }
}

export class EventServ {
    _id?: string;
    eventName?: string;
    eventDesc?: string;
    email?: string;
    creatorName?: string;
    eventLocation?: string;
    eventStart?: string;
    eventEnd?: string;

    constructor(eventName: string, eventDesc: string, email: string, creatorName: string, eventLocation: string, eventStart: string, eventEnd: string){
        this.eventName = eventName;
        this.eventDesc = eventDesc;
        this.email = email;
        this.creatorName = creatorName;
        this.eventLocation = eventLocation;
        this.eventStart = eventStart;
        this.eventEnd = eventEnd;
    }
}

export class JobServ{
    _id?: string;
    jobName?: string;
    jobDesc?: string;
    email?: string;
    creatorName?: string;
    jobLocation?: string;
    phone?: string;
    
    constructor(jobName: string, jobDesc: string, email: string, creatorName: string, jobLocation: string, phone: string){
        this.jobName = jobName;
        this.jobDesc = jobDesc;
        this.email = email;
        this.creatorName = creatorName;
        this.jobLocation = jobLocation;
        this.phone = phone;
    }
}


export class UserServ{
    _id?: string;
    name?: string;
    email?: string;
    address?: string;
    phone?: string;
    password?: string;

    constructor( name: string, email: string, address: string, phone: string, password: string){
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.password = password;
    }
}

export class CMSServ{
    _id?: string;
    intro?: string;
    sitedesc?: string;
    imgdesc?: string;
    
    constructor(intro: string, sitedesc: string, imgdesc: string){
        this.intro = intro;
        this.sitedesc = sitedesc;
        this.imgdesc = imgdesc;
    }
}
