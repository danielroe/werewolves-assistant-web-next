import { After, AfterAll, Before } from "@cucumber/cucumber";
import { createPage, createTest } from "@nuxt/test-utils/e2e";

import type { CustomWorld } from "~/tests/acceptance/shared/types/word.types";

const { beforeEach, afterEach, afterAll, setup } = createTest({ runner: "vitest", server: true });

Before({ timeout: 60 * 1000 }, async function(this: CustomWorld): Promise<void> {
  await setup();
  // beforeEach();

  console.log("here");
  this.page = await createPage("/");
});

After((): void => {
  afterEach();
});

AfterAll((): void => {
  afterAll();
});