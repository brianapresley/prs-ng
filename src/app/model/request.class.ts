import { User } from './user.class';

export class Request {
    id: number;
    description: string;
    justification: string;
    rejectionreason: string;
    deliverymode: string;
    status: string;
    total: number;
    userId: number;
    user: User;

    constructor(id:number = 0, description:string = '', justification:string = '', 
                rejectionreason:string = '', deliverymode:string = 'Pickup', 
                status:string = 'New', total:number = 0, userId:number = 0, 
                user:User= new User() 
                ) {
        this.id = id;
        this.description = description;
        this.justification = justification;
        this.rejectionreason = rejectionreason;
        this.deliverymode = deliverymode;
        this.status = status;
        this.total = total;
        this.userId = userId;
        this.user = user;
        

    }
}
