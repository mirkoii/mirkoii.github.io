import { describe, expect, it } from "vitest";
import { cv } from "../src/data/cv";
describe("public CV content integrity", () => {
  it("only features sourced, non-fork repositories belonging to the public account", () => {
    expect(cv.projects.length).toBeGreaterThan(0);
    for (const project of cv.projects) {
      expect(project.fork).toBe(false);
      expect(new URL(project.url).origin).toBe("https://github.com");
      expect(new URL(project.url).pathname.startsWith("/mirkoii/")).toBe(true);
      expect(
        new URL(project.source).pathname.startsWith("/repos/mirkoii/"),
      ).toBe(true);
    }
  });
  it("keeps milestones and certificates traceable and dates ordered", () => {
    for (const item of [...cv.timeline, ...cv.certifications])
      expect(item.source).toMatch(/^https:\/\/github.com\/mirkoii\//);
    const years = cv.timeline.map((item) => Number(item.year));
    expect(years).toEqual([...years].sort((a, b) => b - a));
  });
  it("does not fabricate education records", () => {
    expect(cv.education).toEqual([]);
  });
});
