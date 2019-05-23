interface IStateGraph {
    State: string,
    Count: number
}
export class StateGraphData implements IStateGraph {
    constructor(
        
        public State: string,
        public Count: number) {
    }
}