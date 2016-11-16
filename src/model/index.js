
/* TODO : Créer le modèle objet ici */ 
export class Data {
    constructor() {
    }
}

export class Datum extends Data {
    constructor(value) {
        super();
        this.value = value;
    }
	
    get value() {
        return this.value1;
    }
	
    set value(values) {
	if(Number.isInteger(values)){
		this.value = values;
	}else throw "Err : valeur doit être un entier ";
    }
}

export class TimeSeries extends Data {
	constructor(value,label) {
        super();
        this.values=value;
        this.labels=label;
    }
	
    get values() {
        return this.values;
    }
	
    set values(value) {
	for (let i=0;i<values.length;i++){
	//les valeurs doivent être des entier positif dans une liste
	if(Number.isInteger(values) && Array.isArray(values[i]) || values<=0){
		this.values = value;
	}else throw "Err : valeurs doivent être des entier positif dans une liste ";
    }
	    
    set labels(label) {
        this.labels = label;
    }
    get labels() {
        return this.labels;
    }

    ToString(string) {
	return (`[${this.values}, ${this.labels}]`);
     }	
}

export class SensorType {
     constructor() {
         this.types = ['TEMPERATURE', 'HUMDITY', 'LIGHT', 'SWITCH', 'DOOR', 'FAN_SPEED'];
     }
  
     get type() {
        return this.types;
     }
  
     set type(type) {
        this.types = type;
     }
}

export class Sensor {
    constructor(id,name,type) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.data = new Data();
    }

    get id() {
        return this._id;
    }
    set id(Id) {
        this.id = Id;
    }

    get name() {
        return this.name;
    }
    set name(nom) {
        this.name = nom;
    }

    get type() {
        return this.type;
    }
    set type(Type) {
        this.type = Type;
    }

    get data() {
        return this.data;
    }
    set data(donnee) {
        this.data = donnee;
    }

}
