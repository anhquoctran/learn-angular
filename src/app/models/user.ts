export class User {
    id:number;
    name:string;
    username:string;
    email:string;
    address:Address;
    phone:string;
    website:string;
    company:Company;

    static fromJSON(json): User {
        if(json === undefined || json == null) return undefined;
        const user = new User() ;
        user.id = json.id;
        user.name = json.name;
        user.username = json.username;
        user.email = json.email;
        user.phone = json.phone;
        user.website = json.website;
        user.address = Address.fromJSON(json.address);
        user.company = Company.fromJSON(json.company);

        return user;
    }
    
}

export class Address {
    street:string;
    suite:string;
    city: string;
    zipcode:string;
    geo: Geo;

    static fromJSON(json): Address{
        if(json === null || json === undefined) return undefined;
        const address = new Address();
        address.city = json.city;
        address.geo = json.geo;
        address.street = json.street;
        address.zipcode = json.zipcode;
        address.geo = Geo.fromJSON(json.geo);
        return address;
    }
}

export class Geo {
    lat: number;
    lng: number;

    static fromJSON(json): Geo {
        if(json === null || json === undefined) return undefined;
        const geo = new Geo();
        geo.lat = json.lat;
        geo.lng = json.lng;

        return geo;
    }
}

export class Company {
    name:string;
    catchPhrase:string;
    bs:string;

    static fromJSON(json): Company {
        if(json === null || json === undefined) return undefined;
        const company = new Company();
        company.name = json.name;
        company.catchPhrase = json.catchPhrase;
        company.bs = json.bs;

        return company;
    }
}