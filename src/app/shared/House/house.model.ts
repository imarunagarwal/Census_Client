interface IHouse {
    CensusHouseNoID: number;
    BuildingNo: string;
    Address: string;
    State: string;
    HeadFullName: string;
    HouseStatus: number;
    NoOfRooms: number;
}
export class House implements IHouse {
    constructor(
        public CensusHouseNoID: number,
        public BuildingNo: string,
        public Address: string,
        public State: string,
        public HeadFullName: string,
        public HouseStatus: number,
        public NoOfRooms: number) {
    }
}