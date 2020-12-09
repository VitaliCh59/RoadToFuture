import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe ("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status = "it-kamasutra.com" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra.com");
    });

    test("after create span  should be displayed", () => {
        const component = create(<ProfileStatus status = "it-kamasutra.com" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span).not.toBeNull();
    });

    test("after create input  should be displayed", () => {
        const component = create(<ProfileStatus status = "it-kamasutra.com" />);
        const root = component.root;
        expect ( () => {
        let input = root.findByType("input")
       }).toThrow();
    });
});