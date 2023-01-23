import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    phone: Number,
    diaChi: String,
    tongHoadon: Number,
    soTienTra: Number,
    duNo: Number,
    date: String,
    ghiChu: String
});

const Users = models.user || model('user', userSchema)

export default Users;