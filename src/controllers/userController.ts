import TypedRequest from '../types/TypedRequest';
import TypedResponse from "../types/TypedResponse";
import { createUser } from "../validators/userValidators";

export default {
    async createUser(req: TypedRequest<typeof createUser>, res: TypedResponse<typeof createUser>) {
        res.json({
            id: Math.round(Math.random() * 10000),
            ...req.body,
        })
    }
}