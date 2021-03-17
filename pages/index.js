import React from 'react';
import Link from 'next/link';
import {useAuth} from '../auth';
import Container from '../components/Container';
import {Flex, Box, Button, Text, Heading, Stack} from "@chakra-ui/core";

export default function Home() {
  const {user} = useAuth();
  return (
    <Container>
      <Flex>
        <Box w={500} p={4} my={12} mx="auto">
          <Heading as="h2" textAlign="center">
              welcome to home page
          </Heading>
          <Text mt={8} textAlign="center">{`user id: ${user ? user.uid : "No user signed in"}`}</Text>
          <Stack mt={8} alignItems="center" justifyContent="center" isInline width="100%">
            <Button variant="solid" variantColor="blude" isDisabled={!user} width="100%">
              <Link href="/authenticated">
                <a>
                        go to authenticated page
                </a>
              </Link>
            </Button>
            <Button width="100%" variant="solid" variantColor="green" isDisabled={user}>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Container>
    
  )
}
