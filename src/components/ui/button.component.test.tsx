import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import { Button } from "./button.tsx";

test("Button déclenche onClick", async () => {
	const onClick = vi.fn();
	render(<Button onClick={onClick}>Envoyer</Button>);
	await userEvent.click(screen.getByRole("button", { name: "Envoyer" }));
	expect(onClick).toHaveBeenCalledOnce();
});
