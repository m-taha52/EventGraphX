'use server'

import { CreateUserParams, UpdateUserParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database"
import User from "../database/models/user.model"

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
        return JSON.parse(JSON.stringify(updateUser));
    } 
    catch(error)
    {
        handleError(error)
    }
}