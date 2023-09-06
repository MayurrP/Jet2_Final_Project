export class User
{
    name! : string;
    email! : string;
    password! : string;  
    terms : boolean = false;   
    
    constructor(values : Object = {})
    {
        //Constructor Initialization
        Object.assign(this, values);
    }
}

