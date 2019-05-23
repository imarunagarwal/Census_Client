interface IAgeGraph {
    Age:number;

    Count:number;
}
export class AgeGraphData implements IAgeGraph {
    constructor(
        public Age: number,
        public Count: number) {
    }
}