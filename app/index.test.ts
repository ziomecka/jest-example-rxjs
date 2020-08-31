import { someFn } from "./index";

describe("this test:", () => {
  it("will always pass", async () => {
    // The test always passes - it does not wait for the callback
    someFn().subscribe(() => {
      expect(false).toBeTruthy();
    });
  });

  it("will always fail", (done) => {
    // The test always fails - it does wait for the callback
    someFn().subscribe(() => {
      expect(false).toBeTruthy();
      done();
    });
  });
});
