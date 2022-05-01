import { z } from 'zod';

type Validator = {
    body: z.ZodType<any, z.ZodTypeDef, any>;
    query: z.ZodType<any, z.ZodTypeDef, any>;
    params: z.ZodType<any, z.ZodTypeDef, any>;
    response: z.ZodType<any, z.ZodTypeDef, any>;
};

export default Validator;