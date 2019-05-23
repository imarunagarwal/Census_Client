interface IRegisterPopulation {
    NPRID: number;
    FullName: string;
    CensusHouseNoID: number;
    RelationshipToHead: number;
    Gender: number;
    DOB: Date;
    MaritalStatus: number;
    AgeAtMarriage: number;
    Occupation: number;
    NatureOfOccupationIndustry: string;

}
export class RegisterPopulation implements IRegisterPopulation {
    constructor(
        public NPRID: number,
        public FullName: string,
        public CensusHouseNoID: number,
        public RelationshipToHead: number,
        public Gender: number,
        public DOB: Date,
        public MaritalStatus: number,
        public AgeAtMarriage: number,
        public Occupation: number,
        public NatureOfOccupationIndustry: string) {
    }
}