import mongoose from "mongoose";
import User from '../models/userModel.js'
import asyncHandler from "../utils/asyncHandler.js";
import contactFormSchema from "../Validations/schemas.js";

// Create User
export const postUsers = asyncHandler (async (req, res) => {
  const result = contactFormSchema.safeParse(req.body);

    if (!result.success) {
    console.log('Failed to received the data:', result.error.issues);
    return res.status(400).json({ errors: result.error.issues });
  } 
    // Before using result.data i have to validate it first
    const user = await User.create(result.data);
    if (!user) throw new Error(`User cannot be created.`); // Directly throw
    
    console.log('The data has been received successfully', result.data);
    res.status(201).json({ message: 'Client data received', data: user });
});

// READ ALL
export const getUsers = asyncHandler (async (req, res) => {
  const users = await User.find();

  if(!users || users.length === 0) {
    return res.status(404).json({ message: 'User not found' })
  } 

  res.status(200).json({ message: 'Fetch all items', data: users });
});

// FETCH BY USERID
export const getUserById = asyncHandler (async (req, res) => {
  const { id } = req.params; // GET ID FROM URL PARAMETERS
  const user = await User.findById(id);

  if(!user) {
    return res.status(404).json({ message: 'UserId not found' })
  }

  res.status(200).json({ message: 'UserId was found', data: user })
});

// UPDATE AN EXISTING FILE
export const patchUpdateById = asyncHandler (async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body, {returnDocument: 'after'});

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({ message: 'User found and updated', data: user })
});

// DELETE A FILE
export const deleteUserById = asyncHandler (async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({ message: 'UserId not found' });
  }

  res.status(200).json({ message: 'Document found and deleted', data: user });
});