interface IUser {
    UserID: number;
    EmailID: string;
    Password: string;
    ImageUrl: string;
    FirstName: string;
    LastName: string;
    Address: string;
    State: string;
    Age: number;
    AadharNo: string;
    IsApproved: number;
    IsApprover: boolean;
}
export class User implements IUser {
    constructor(
        public UserID: number,
        public EmailID: string,
        public Password: string,
        public ImageUrl: string,
        public FirstName: string,
        public LastName: string,
        public Address: string,
        public State: string,
        public Age: number,
        public AadharNo: string,
        public IsApproved: number,
        public IsApprover: boolean) {
    }
}