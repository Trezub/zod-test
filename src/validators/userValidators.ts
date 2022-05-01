import { z, infer } from "zod";

const userSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    age: z.number().gt(0),
});

export const createUser = {
    body: userSchema,
    query: z.any(),
    params: z.any(),
    response: userSchema.extend({
        id: z.number(),
    })
};
