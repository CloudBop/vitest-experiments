import { describe, it, expect, vi } from 'vitest';
import { sendDataRequest } from './http';
// import { HttpError, ValidationError } from "./errors"


// 
// overrule vi blobal 'fetch()'
//
vi.stubGlobal('fetch', () => { });

it('should return any available response data', () => {
  sendDataRequest();
})