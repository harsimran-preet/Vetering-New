import { Card, Grid, Text, Link } from "@nextui-org/react";
import Link1 from "react-router-dom/Link";
import dumprun from "../serviceicons/dumprun.png";
import transportation from "../serviceicons/transportation.png";
import food from "../serviceicons/food.png";
import Button from "@mui/material/Button";

export default function App(props) {
  const {photo, pname, date, acolor} = props;
    return (
      <div>
      <Card
        isPressable
        isHoverable
        css={{
          p: "$1",
          fontFamily: "Arial",
          mw: "400px",
          backgroundColor: acolor,
        }}
      >
        <Card.Header>
          <img alt="nextui logo" src={photo} width="34px" height="34px" />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                {pname}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8", fontFamily: "Arial" }}>
                {date}
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        {/* <Card.Body css={{ py: "$2" }}>
          <Text>
            Make beautiful websites regardless of your design experience.
          </Text>
        </Card.Body> */}
      </Card>
      </div>
      <div><Button variant="contained" startIcon={<SendIcon />}>
              Update
            </Button></div>
    );
  };
