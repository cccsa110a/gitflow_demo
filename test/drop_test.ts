import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "../src/drop.ts";

Deno.test("drop", () => {
  assertEquals(_.drop(['a', 'b', 'c', 'd'], 2), ['c', 'd'])
  assertEquals(_.drop(['a', 'b', 'c', 'd'], 0), ['a', 'b', 'c', 'd'])
  // assertEquals(_.chunk(['a', 'b', 'c', 'd'], 3), [['a','b'], ['c','d']])
})
