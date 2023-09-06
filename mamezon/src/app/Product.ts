export class Product{
    title! : string;
    price! : number;
    image! : string;


constructor(values : Object = {})
    {
        //Constructor Initialization
        Object.assign(this, values);
    }
}