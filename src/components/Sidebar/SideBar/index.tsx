import React, { useReducer, createContext, PropsWithChildren } from "react";
// type
import {
  SideBarActionProps,
  SideBarContextProps,
  SideBarContextType,
  SideBarProviderType,
} from "./types";
// styled component
import { LayoutWrapper, SideBarWrapper, OverLayer } from "./SideBar.style";

// -----------------------------------------------------------

const INITIAL_STATE: SideBarContextProps = {
  opened: "",
  param: null,
};

/**
 * context for sidebar
 */
const SideBarContext = createContext<SideBarContextType>({
  sideBarState: INITIAL_STATE,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  sideBarDispatch: () => {},
});

/**
 * reducer for sidebar
 */

const reducer = (_: any, action: SideBarActionProps) => {
  if (action.type !== "") return { opened: action.type, param: action.payload };
  return INITIAL_STATE;
};

/**
 * provider for sidebar
 */
const SideBarProvider: React.FC<PropsWithChildren<SideBarProviderType>> = ({
  items = [],
  children,
}) => {
  const [sideBarState, sideBarDispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <SideBarContext.Provider value={{ sideBarState, sideBarDispatch }}>
      <LayoutWrapper opened={sideBarState.opened !== ""}>
        {children}
        {items.map((SidebarItem, index) => (
          <SideBarWrapper
            key={`sidebarWrapper_${index}`}
            rWidth={SidebarItem.rWidth}
            rHeight={SidebarItem.rHeight}
            opened={sideBarState.opened === SidebarItem.id}
            direction={SidebarItem?.direction ?? "horizontal"}
            bg={SidebarItem.bg}
          >
            <SidebarItem.barItem />
          </SideBarWrapper>
        ))}
      </LayoutWrapper>
      <OverLayer
        opened={sideBarState.opened !== ""}
        onClick={() => {
          sideBarDispatch({
            type: "",
            payload: null,
          });
        }}
      />
    </SideBarContext.Provider>
  );
};
export default { Context: SideBarContext, Provider: SideBarProvider };
