/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { aboutNitendo } from "../../../../constant";
import {
  Nintendo,
  Support,
  Store,
  Parents,
  Community,
  Privacy,
} from "../../../../constant/types";
import CommunityFooter from "./community-footer";
import NintendoFooter from "./nintendo-footer";
import ParentFooter from "./parrent-footer";
import PrivacyFooter from "./privacy-footer";
import StoreFooter from "./store-footer";
import SupportFooter from "./support-footer";

interface About {
  nintendo: Nintendo;
  support: Support;
  store: Store;
  parent: Parents;
  community: Community;
  privacy: Privacy;
}

const styles = {
  container: {
    width: "68%",
    display: "flex",
    justifyContent: "space-around",
    margin: "0 auto",
  },
};
export default function FooterAbout() {
  const { nintendo, support, store, parent, community, privacy } =
    aboutNitendo as About;

  return (
    <div className="containter" style={styles.container}>
      <NintendoFooter {...nintendo} />
      <div className="where-to-buy">
        <StoreFooter {...store} />
      </div>
      <div className="support">
        <SupportFooter {...support} />
      </div>
      <div className="parent">
        <ParentFooter {...parent} />
      </div>
      <div className="privacy">
        <PrivacyFooter {...privacy} />
      </div>
      <div className="community">
        <CommunityFooter {...community} />
      </div>
    </div>
  );
}
