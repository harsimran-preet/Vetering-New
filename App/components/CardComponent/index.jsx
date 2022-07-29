import { Card, Grid, Text, Link } from "@nextui-org/react";
import Link1 from "react-router-dom/Link";
import dumprun from "../serviceicons/dumprun.png";
import transportation from "../serviceicons/transportation.png";
import food from "../serviceicons/food.png";

export default function App() {
  const Cardcomp = ({ servicename, date, photo, acolor }) => {
    return (
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
                {servicename}
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
    );
  };
  return (
    <Grid.Container direction="column" gap={1} justify="center">
      <Grid>
        <Link1 to="/request-info1">
          <Cardcomp
            servicename="Dumpster Run"
            date="Date (08/01/2022)"
            photo={dumprun}
            acolor="white"
          />
        </Link1>
      </Grid>
      <Grid>
        <Link1 to="/request-info2">
          <Cardcomp
            servicename="Food"
            date="Date (07/31/2022)"
            photo={food}
            acolor="#FFED01"
          />
        </Link1>
      </Grid>
      <Grid>
        <Link1 to="/request-info3">
          <Cardcomp
            servicename="Transportation"
            date="Date (07/30/2022)"
            photo={transportation}
            acolor="rgb(30, 215, 96)"
          />
        </Link1>
      </Grid>
    </Grid.Container>
  );
}
