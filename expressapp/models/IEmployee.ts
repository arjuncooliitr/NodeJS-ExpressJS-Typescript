import {Document, Schema, model, Model} from 'mongoose';

// _id, _v
export interface IEmployee extends Document {
    "id":number,
    "name":string,
    "username":string,
    "email":string,
    "company":string
}

const employeesSchema:Schema = new Schema({
    id: {
        type:Number,
        min:1
    },
    name: {
        type:String,
        required:true
    },
    username:String,
    email:String,
    company:String
});

const Employee:Model<IEmployee> = model("employees",employeesSchema);

export default Employee;