import { vi } from "vitest";

// works - but the module path is just a string, invisible to refactoring tools
vi.mock("./logger.js", () => ({
  default: { info: vi.fn(), warn: vi.fn(), error: vi.fn() },
}));

// fails typecheck - Mock<Procedure> is not assignable to Logger['info']
vi.mock(import("./logger.js"), () => ({
  default: { info: vi.fn(), warn: vi.fn(), error: vi.fn() },
}));
