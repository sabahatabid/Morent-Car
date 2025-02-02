export interface car {
    _id: string;
    name: string;
    _type: "car";
    image? : {
        asset:{
            _ref: string;
            _type: "image";
        }
    };
    priceperday: number;
    description?: string;
    slug:{
        _type: "slug";
        current: string;
    };
    transmission: number;
    
}