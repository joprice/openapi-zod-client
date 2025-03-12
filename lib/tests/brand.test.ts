import { describe, expect, test } from "vitest";
import { getZodChain, getZodSchema } from "../src/openApiToZod";

// see: https://swagger.io/docs/specification/data-models/data-types/#free-form
describe("brand", () => {
    test("add brand to chain", () => {
        const schema = {
            type: "string",
            "x-brand": "Status",
        } as const;
        const code = getZodSchema({ schema }) + getZodChain({ schema: schema });
        expect(code).toMatchInlineSnapshot('"z.string().brand("Status").optional()"');
    });
});
