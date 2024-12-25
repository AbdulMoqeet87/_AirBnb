import mongoose from "mongoose";
import validator from "validator";
const { Schema } = mongoose;


// Define the Booked Slot Schema
// const BookedProperties = new Schema({
//   propertyId: { 
//     type: String, 
//     required: true, // ID of the booked property
   
//   },
//   userId: { 
//     type: String, 
//     required: true // ID of the user who booked the property
//   },
//   userName: {
//     type: String,
//     required: true // Name of the user who booked
//   },
//   userEmail: {
//     type: String,
//     required: true // Email of the user who booked
//   },
//   bookingDate: { 
//     type: Date, 
//     required: true, // Date when the property was booked
//     default: Date.now 
//   },
//   checkInDate: { 
//     type: Date, 
//     required: true // Check-in date for the property
//   },
//   checkOutDate: { 
//     type: Date, 
//     required: true // Check-out date for the property
//   },
//   totalGuests: { 
//     type: Number, 
//     required: true // Number of guests staying
//   },
//   totalPrice: { 
//     type: Number, 
//     required: true // Total price for the booking
//   },
//   status: { 
//     type: String, 
//     enum: ['Pending', 'Confirmed', 'Cancelled'], 
//     default: 'Pending' // Status of the booking
//   }
// });


const Property = new Schema({
  id: { 
    type: String, 
    required: true 
  },
  image: String,
  title: String,
  type: String,
  guests: Number,
  bedrooms: Number,
  bathrooms: Number,
  price: String,
  rating: Number,
  town: String,
  city: String,
  bookingDate: Date,
  bookingEndDate:Date,
  TotalPrice:Number
});


const UserSchema = new Schema({
    
  UserName: {
    type: String,
    required: true,
    minLength: [3, "Username MUST be at least 3 characters long."],
    maxLength: [255, "Username CANNOT exceed 255 characters."]
  },
  Password: {
    type: String,
    required: true,
    minLength: [6, "Password MUST be at least 6 characters long."]
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email"]
  },
  PhoneNo: {
    type: String,
    required: true,
    minLength: [11, "Phone number MUST contain 11 digits."],
    maxLength: [11, "Phone number MUST contain 11 digits."]
  },

  role: {
    type: String
  }
  ,
  Properties:[Property],
//  BookedSlots:[BookedProperties]
});

export const User = mongoose.model("User", UserSchema);