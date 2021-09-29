
import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "../src/astnlodash.ts";

Deno.test("chunk", () => {
  assertEquals(_.chunk(['a', 'b', 'c', 'd'], 2), [['a','b'], ['c','d']])
  assertEquals(_.chunk(['a', 'b', 'c', 'd'], 3), [['a','b', 'c'], ['d']])
  // assertEquals(_.chunk(['a', 'b', 'c', 'd'], 3), [['a','b'], ['c','d']])
})
