// conditional type 
// this type diffent on conditional 


type One = null 
type Tow = undefined
type Three = One extends null ? true : Tow extends undefined ? true  : false;


type RichEpb = {
    car: string, 
    bike: string, 
    ship: string
}
type CheckVehicle <T> = T extends keyof RichEpb ? true : false
type HasBike = CheckVehicle<'bike'> 
