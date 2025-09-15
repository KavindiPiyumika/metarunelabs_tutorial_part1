//Enums

enum ResourceType{BUS , CAR ,VAN ,JEEP ,BIKE}

interface Resource <T>{
    uid: number;
    resourceType: number;
    data: T;

}

const docOne: Resource<object> ={
uid:1,
resourceType: ResourceType.BUS,
data:{title:'name of the wind'}
}

const docTwo: Resource<object> = {
uid:10,
resourceType:ResourceType.BIKE,
data:{name:'Yashi'}
}