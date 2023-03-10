import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Box,
  Divider,
  Badge,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Feature() {
  const router = useRouter();
  return (
    <Container
      maxW="5xl"
      py={{ base: "8", lg: "12" }}
      mt={{ base: "0", lg: "10" }}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        mb={{ base: "4", md: "12" }}
        pb={{ base: "4", md: "8" }}
      >
        <Stack spacing={4}>
          <Text
            textTransform="uppercase"
            color="orange.400"
            fontWeight={600}
            fontSize="sm"
            bg="gray.50"
            p={2}
            alignSelf="flex-start"
            rounded="md"
          >
            Our Story
          </Text>
          <Heading color="gray.800">Welcome to Oishii Restaurants</Heading>
          <Text color="gray.500" fontSize={{ base: "sm", md: "md" }}>
            Chef Thanh Nguyen of Oishii is a man of few words. Or so it seems
            from the other side of the sushi bar as I watch him swiftly yet
            meticulously craft, roll, torch, slice, shred and garnish raw fish
            with an eye for detail. He moves with quickness like most sushi
            chefs I’ve admired, but he doesn’t miss an opportunity to engage
            with those around him. People flock to this longstanding
            neighborhood gem not only for the food, but the people behind it.
          </Text>
          <Button
            size="md"
            colorScheme="orange"
            rightIcon={<ArrowForwardIcon />}
            maxWidth={{ base: "auto", md: "300px" }}
            onClick={() => router.push("/about-us")}
          >
            Learn more
          </Button>
        </Stack>
        <Flex>
          <Image
            rounded="md"
            alt="feature image"
            src="/assets/Chef_Thanh_Nguyen.jpg"
            objectFit="cover"
          />
        </Flex>
      </SimpleGrid>

      <Divider orientation="horizontal" mt="5" />

      <Box textAlign="center" py={10} px={6} mt="5">
        <Flex align="center" justify="center">
          <Image
            rounded="md"
            alt="feature image"
            src="/assets/wavy-lines.png"
            objectFit="cover"
          />
        </Flex>
        <Heading as="h2" size="xl" mt={6} mb={2} color="gray.800">
          Sushi Delivery to the house from Oishii Restaurants
        </Heading>
        <Text color="gray.500">
          From the Cowboys Roll to the Salmon Carpaccio, our Chefs will have you
          coming back for more.
        </Text>
      </Box>
      <Box p={4}>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: "2", md: "10" }}
        >
          <Box>
            <Image
              rounded="md"
              alt="feature image"
              src="/assets/menu/FlowerRoll.jpg"
              objectFit="cover"
            />
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
              className="image-box-badge"
            >
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Sushi
              </Badge>
            </Box>
          </Box>
          <Box>
            <Image
              rounded="md"
              alt="feature image"
              src="/assets/menu/SushiSME.jpg"
              objectFit="cover"
            />
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
              className="image-box-badge"
            >
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Sashimi
              </Badge>
            </Box>
          </Box>
          <Box>
            <Image
              rounded="md"
              alt="feature image"
              src="/assets/menu/PokeRoll.jpg"
              objectFit="cover"
            />
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
              className="image-box-badge"
            >
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Specialty
              </Badge>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
}
