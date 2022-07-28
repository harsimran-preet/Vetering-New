import { Card, Grid, Text, Link } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <Link to="/09-home">
      <Card css={{ p: "$6", mw: "400px" }}>
        <Card.Header>
          <img
            alt="nextui logo"
            src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
            width="34px"
            height="34px"
          />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                Jenson Carr
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>Veteran</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Text>Here I will list the possible issues that I am facing.</Text>
        </Card.Body>
        <Card.Footer>
          <Link
            icon
            color="primary"
            target="_blank"
            // href="https://github.com/nextui-org/nextui"
          >
            Learn More
          </Link>
        </Card.Footer>
      </Card>
    </Link>
  );
}
