import { assertEquals } from 'https://deno.land/std@0.63.0/testing/asserts.ts'
import * as _ from "../src/Christinalodash.ts";

Deno.test("initial", () => {
    assertEquals(_.initial([1,2,3]), [1,2])
    
})
  