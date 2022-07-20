import { Card, Grid, Text, Link } from "@nextui-org/react";

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
        <Cardcomp
          servicename="Service Name"
          date="Date (MM/DD/YYYY)"
          photo="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          acolor="rgb(234, 247, 116)"
        />
      </Grid>
      <Grid>
        <Cardcomp
          servicename="Service Name"
          date="Date (MM/DD/YYYY)"
          photo="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          acolor="rgb(247, 116, 116)"
        />
      </Grid>
      <Grid>
        <Cardcomp
          servicename="Service Name"
          date="Date (MM/DD/YYYY)"
          photo="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          acolor="white"
        />
      </Grid>
    </Grid.Container>
  );
}
