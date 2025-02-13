import { describe, it } from "@effect/vitest"
import * as S from "effect/Schema"
import * as Util from "effect/test/Schema/TestUtils"

describe("Class", () => {
  it("required property signature", () => {
    class Class extends S.Class<Class>("Class")({
      a: S.Number
    }) {}
    Util.assertions.arbitrary.validateGeneratedValues(Class)
  })

  it("required property signature with undefined", () => {
    class Class extends S.Class<Class>("Class")({
      a: S.Union(S.Number, S.Undefined)
    }) {}
    Util.assertions.arbitrary.validateGeneratedValues(Class)
  })

  it("exact optional property signature", () => {
    class Class extends S.Class<Class>("Class")({
      a: S.optionalWith(S.Number, { exact: true })
    }) {}
    Util.assertions.arbitrary.validateGeneratedValues(Class)
  })

  it("exact optional property signature with undefined", () => {
    class Class extends S.Class<Class>("Class")({
      a: S.optionalWith(S.Union(S.Number, S.Undefined), { exact: true })
    }) {}
    Util.assertions.arbitrary.validateGeneratedValues(Class)
  })

  it("baseline", () => {
    class Class extends S.Class<Class>("Class")({
      a: S.String,
      b: S.NumberFromString
    }) {}
    Util.assertions.arbitrary.validateGeneratedValues(Class)
  })
})
