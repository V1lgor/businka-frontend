import {schema} from 'normalizr';

const City = new schema.Entity("city");

const Region = new schema.Entity("region", {
    cityList: [City]
});

export default Region;

