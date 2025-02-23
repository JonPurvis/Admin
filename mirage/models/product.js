import {Model, hasMany} from 'miragejs';

export default Model.extend({
    // ran into odd relationship bugs when called `benefits`
    // serializer will rename to `benefits`
    productBenefits: hasMany(),
    members: hasMany()
});
