import axios from "axios";

/**
 * @public
 * @description fetch Menu Data from our App setting
 */
export const getMenuData = async () => {
  return await axios
    .get("https://www.nutritionwarehouse.com.au/pages/menus/main-menu")
    .then((res) => res.data["main-menu"] || []);
};
