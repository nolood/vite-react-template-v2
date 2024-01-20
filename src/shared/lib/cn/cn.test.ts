import { cn } from "./cn.ts";

test("tailwind merge + clsx (CN FUNC)", () => {
  expect(cn("test", "test2", "kek")).toBe("test test2 kek");
});
