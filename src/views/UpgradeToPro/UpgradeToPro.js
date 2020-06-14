import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar",
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit",
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)",
    },
    "& td, & th": {
      display: "table-cell",
    },
  },
  center: {
    textAlign: "center",
  },
};

const useStyles = makeStyles(styles);

export default function UpgradeToPro() {
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>
              Material Dashboard PRO React
            </h4>
            <p className={classes.cardCategoryWhite}>
              Are you looking for more features? Please check our Premium
              Version of FAKE_NAME.
            </p>
          </CardHeader>
          <CardBody>
            <div className={classes.tableUpgradeWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th />
                    <th className={classes.center}>Free</th>
                    <th className={classes.center}>PRO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Number of paper recommended per month</td>
                    <td className={classes.center}>30</td>
                    <td className={classes.center}>unlimited</td>
                  </tr>
                  <tr>
                    <td>Storage</td>
                    <td className={classes.center}>1GB</td>
                    <td className={classes.center}>3TB</td>
                  </tr>
                  <tr>
                    <td>Text search in documents</td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>Mobile offline folders</td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>Premium Support</td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td className={classes.center}>Free</td>
                    <td className={classes.center}>Just 59 USD/month</td>
                  </tr>
                  <tr>
                    <td />
                    <td className={classes.center}>
                      <Button round disabled>
                        Current Version
                      </Button>
                    </td>
                    <td className={classes.center}>
                      <Button round color="danger" href="">
                        Upgrade to Pro
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
