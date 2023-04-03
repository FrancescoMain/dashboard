import React from 'react'
import { z } from "zod";

const User = z.object({
    username: 
    z.string()
    .min(3, { message: "L'username deve contenere un minimo di 3 caratteri" })
    .max(10, { message: "L'username deve contenere un massimo di 10 caratteri"}),
    email:
    z.string()
    .email()
})

const UserForm = () => {
  return (
    <>
    <form>
        <div>
            <label>Username:</label>
            <input></input>
        </div>
    </form>
    </>
  )
}

export default UserForm