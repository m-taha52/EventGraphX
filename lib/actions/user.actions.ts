'use server'

import { CreateUserParams, UpdateUserParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database"
import User from "../database/models/user.model"
import Order from "../database/models/order.model"
import Event from "../database/models/event.model"

export const createUser = async (user: CreateUserParams) =>
{
    try 
    {
        await connectToDatabase();

        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } 
    catch(error)
    {
        handleError(error)
    }
}

export const updateUser = async (clerkId: String, user: UpdateUserParams) =>
{
    try 
    {
        await connectToDatabase();

        const updatedUser = await User.findOneAndUpdate({clerkId}, user, {new: true});

        if(!updateUser)
            throw new Error("User Update Failed")
        return JSON.parse(JSON.stringify(updatedUser));
    } 
    catch(error)
    {
        handleError(error)
    }
}

export const getUserById = async (userId: String) =>
{
    try 
    {
        await connectToDatabase();

        const user = await User.findById(userId);

        if(!user)
            throw new Error("User not found")
        return JSON.parse(JSON.stringify(user));
    } 
    catch(error)
    {
        handleError(error)
    }
}