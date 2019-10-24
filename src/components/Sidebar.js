import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import ContactIcon from "@material-ui/icons/ContactSupport";
import MailIcon from "@material-ui/icons/Mail";
import EditIcon from "@material-ui/icons/Edit";
import LockIcon from "@material-ui/icons/Lock";
import ShopIcon from "@material-ui/icons/ShoppingCart";
import styled from "styled-components";

function Sidebar(props) {
  return (
    <div>
      <Barcontena>
        <nav aria-label="mailbox folders">
          <List>
            <ListItem button>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="マイページ編集" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText primary="セキュリティ設定" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ContactIcon />
              </ListItemIcon>
              <ListItemText primary="よくある質問" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ShopIcon />
              </ListItemIcon>
              <ListItemText primary="料金プランの変更" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="特定取引商法について" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="お問い合わせ" />
            </ListItem>
          </List>
        </nav>
      </Barcontena>
    </div>
  );
}

const Barcontena = styled.div`
  width: 20%;
`;

export default Sidebar;
