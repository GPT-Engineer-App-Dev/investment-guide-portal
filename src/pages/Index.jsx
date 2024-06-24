import React from 'react';
import { Box, Container, Flex, Heading, Text, VStack, HStack, Image, Link, Grid, GridItem } from "@chakra-ui/react";
import { FaSearch, FaUser } from "react-icons/fa";

const Header = () => (
  <Box bg="blue.900" color="white" py={2}>
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <FaSearch />
          <FaUser />
          <Link>Subscribe</Link>
          <Link>Sign In</Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

const NavBar = () => (
  <Box bg="gray.100" py={2}>
    <Container maxW="container.xl">
      <HStack spacing={6}>
        {['Home', 'World', 'US', 'Companies', 'Tech', 'Markets', 'Graphics', 'Opinion'].map((item) => (
          <Link key={item}>{item}</Link>
        ))}
      </HStack>
    </Container>
  </Box>
);

const NewsItem = ({ title, description }) => (
  <Box borderBottom="1px" borderColor="gray.200" py={4}>
    <Heading as="h3" size="md" mb={2}>{title}</Heading>
    <Text>{description}</Text>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Header />
      <NavBar />
      <Container maxW="container.xl" mt={8}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem colSpan={2}>
            <VStack align="stretch" spacing={6}>
              <NewsItem 
                title="Global Markets Face Uncertainty Amid Economic Shifts"
                description="Investors grapple with changing dynamics as central banks adjust policies."
              />
              <NewsItem 
                title="Tech Giants Unveil New AI Initiatives"
                description="Leading companies showcase advancements in artificial intelligence technology."
              />
              <NewsItem 
                title="Climate Change Impacts Global Supply Chains"
                description="Businesses adapt strategies to mitigate risks associated with environmental changes."
              />
            </VStack>
          </GridItem>
          <GridItem>
            <Box bg="gray.100" p={4}>
              <Heading as="h2" size="md" mb={4}>Market Data</Heading>
              <VStack align="stretch" spacing={2}>
                <HStack justifyContent="space-between">
                  <Text>FTSE 100</Text>
                  <Text>7,500.00</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text>S&P 500</Text>
                  <Text>4,200.00</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text>Nikkei 225</Text>
                  <Text>28,000.00</Text>
                </HStack>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;