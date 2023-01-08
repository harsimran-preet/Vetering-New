import { Card, Grid, Text, Link } from "@nextui-org/react";
import Link1 from "react-router-dom/Link";
import dumprun from "../serviceicons/dumprun.png";
import transportation from "../serviceicons/transportation.png";
import food from "../serviceicons/food.png";
import Rating from "@mui/material/Rating";
import { Button } from "@nextui-org/react";

export default function CardCompPerson(props) {
  const { servicename, date, photo, acolor, value, link1, link2, btnmessage } =
    props;
  return (
    <Grid.Container direction="column" gap={1} justify="center">
      <Card
        // isPressable
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
              <Text h5 css={{ lineHeight: "$xs" }}>
                {servicename}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Rating name="read-only" value={value} readOnly />
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$3" }}>
          <h6> {date}</h6>
          <Link1 to={link1}>
            <Button style={{ marginLeft: "70px" }}>{btnmessage}</Button>
          </Link1>
          {/* <h6></h6>
          <Link1 to={link2}>
            <Button>Confirm</Button>
          </Link1> */}
        </Card.Body>
      </Card>
    </Grid.Container>
  );
}
// return (
//   <Grid.Container direction="column" gap={1} justify="center">
//     <Grid>
//       <Link1 to="/request-info1">
//         <Cardcomp
//           servicename="Dumpster Run"
//           date="Date (08/01/2022)"
//           photo={dumprun}
//           acolor="white"
//         />
//       </Link1>
//     </Grid>
//     <Grid>
//       <Link1 to="/request-info2">
//         <Cardcomp
//           servicename="Food"
//           date="Date (07/31/2022)"
//           photo={food}
//           acolor="#FFED01"
//         />
//       </Link1>
//     </Grid>
//     <Grid>
//       <Link1 to="/request-info3">
//         <Cardcomp
//           servicename="Transportation"
//           date="Date (07/30/2022)"
//           photo={transportation}
//           acolor="rgb(30, 215, 96)"
//         />
//       </Link1>
//     </Grid>
//   </Grid.Container>
// );
