import React from "react";
import Notifications from "./Notifications";
import { shallow } from 'enzyme';

describe("Testing the behavior of Notification component", () => {
    it("Notifications renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists());
    });

    it("Notifications renders close-button", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        expect(wrapper.find(".close-button")).toHaveLength(1);
    });

    it("Notifications renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists());
    });

    it("Notifications renders Notification Item and first item has correct html", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const listItems = wrapper.find("NotificationItem");
        expect(listItems).toBeDefined();
        expect(listItems.first().html()).toEqual(
            '<li data-notification-type="default">New course available</li>'
        );
    });

    it("menu item is being displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const item = wrapper.find("div.menuItem");
        expect(item).toHaveLength(1);
    });
    it("div.Notifications is not being displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const item = wrapper.find("div.Notifications");
        expect(item).toHaveLength(0);
    });
    it("menu item is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const item = wrapper.find("div.menuItem");
        expect(item).toHaveLength(1);
    });
    it("div.Notifications is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const item = wrapper.find("div.Notifications");
        expect(item).toHaveLength(1);
    });
});