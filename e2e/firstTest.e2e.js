describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("check register a new skill", async () => {
    const inputSkill = await element(by.id("input-skill"));
    const buttonSkill = await element(by.id("button-skill"));
    const flatListSkill = await element(by.id("flat-list-skill"));

    await inputSkill.tap();
    await inputSkill.typeText("React native\n");
    await buttonSkill.tap();

    await flatListSkill.tap();

    await inputSkill.tap();
    await inputSkill.typeText("React JS\n");
    await buttonSkill.tap();

    await flatListSkill.tap();

    expect(flatListSkill).toBeVisible();
  });
});
