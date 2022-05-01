import { Response } from 'express';
import Validator from './Validator';
import { infer } from 'zod';

type TypedResponse<T extends Validator> = Response<T['response']['_output']>;

export default TypedResponse;