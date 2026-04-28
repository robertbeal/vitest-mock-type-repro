# vitest-mock-type-repro

Minimal reproduction for [vitest#10224](https://github.com/vitest-dev/vitest/issues/10224).

`vi.mock(import('./module'))` is useful because TypeScript refactoring tools can track the module path. But the factory type is too strict - `vi.fn()` is rejected when the module exports a class instance with private fields.

## Reproduce

```
npm install
npx tsc --noEmit
```

The string form on line 4 of `logger.test.ts` typechecks fine. The `import()` form on line 9 fails with:

```
Property '#config' is missing in type '{ info: Mock<Procedure>; ... }' but required in type 'Logger'.
```
