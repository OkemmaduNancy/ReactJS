import { render, fireEvent} from "@testing-library/react";
import Cart from "./test";

test("to check using fireEvent", () => {
    const SignIn = render(<Cart/>)
    const name = SignIn.getByTestId("add-name")
    const price = SignIn.getByTestId("add-price")
    const quantity = SignIn.getByTestId("add-quantity")
    const desc = SignIn.getByTestId("add-desc")
    const color = SignIn.getByTestId("add-color")
    const btn = SignIn.getByTestId("signIn-btn")
    expect(name.value).toBe("")
    expect(price.value).toBe("")
    expect(quantity.value).toBe("")
    expect(desc.value).toBe("")
    expect(color.value).toBe("")
    expect(btn.textContent).toBe("SignIn")

    fireEvent.change(name, {target:{value: "nancy"}})
    expect(name.value).toBe("nancy")

})