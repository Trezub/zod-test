import { TypedRequest as ZodTypedRequest } from 'zod-express-middleware';
import Validator from './Validator';
type TypedRequest<T extends Validator> = ZodTypedRequest<T['params'], T['query'], T['body']>;

export default TypedRequest;