"use strict";
//Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BUS"] = 0] = "BUS";
    ResourceType[ResourceType["CAR"] = 1] = "CAR";
    ResourceType[ResourceType["VAN"] = 2] = "VAN";
    ResourceType[ResourceType["JEEP"] = 3] = "JEEP";
    ResourceType[ResourceType["BIKE"] = 4] = "BIKE";
})(ResourceType || (ResourceType = {}));
var docOne = {
    uid: 1,
    resourceType: ResourceType.BUS,
    data: { title: 'name of the wind' }
};
var docTwo = {
    uid: 10,
    resourceType: ResourceType.BIKE,
    data: { name: 'Yashi' }
};
