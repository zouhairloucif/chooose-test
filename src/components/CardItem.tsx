import * as React from 'react'
import { Box, Center, Text, GridItem, VStack, Flex, Spacer, Image } from "@chakra-ui/react"
import ICardItem from '../interface/ICardItem'
import Rating from './Rating'
import './style.css'

const CardItem = ({ item }: ICardItem) => {
  return (
    <GridItem>
      <Box className='card-item' borderWidth='6px' borderColor='white' borderRadius='lg' overflow='hidden' height='350px'>
        <Image className='card-item-image' src={item.imageUrl} alt={item.imageAlt}></Image>
        <Center h='100%'>
          <VStack w='100%'>
            <Text as='b'>{ item.title }</Text>
            <Text fontSize='xs'>{ item.countries } Countries, { item.days } Days</Text>
            <Box borderRadius='lg' overflow='hidden' bg='#2D3748' w='80%' p={2}>
              <Flex py='2'>
                <Text fontSize='sm'>
                  Emissions offset
                </Text>
                <Spacer />
                <Text fontSize='sm'>
                  { item.emissions } { item.unit } CO2e
                </Text>
              </Flex>
            </Box>
          </VStack>
        </Center>
        <Box className='rating' overflow='hidden' bg='white' color='black' w='80%' p={2}>
          <Flex py='2'>
            <Text fontSize='sm'>
              Top rating
            </Text>
            <Spacer />
            <Text fontSize='sm'>
              <Rating rating={item.rating} />
              <span style={{marginLeft: '5px'}}>{ item.rating }</span>
            </Text>
          </Flex>
        </Box>
      </Box>
    </GridItem>
  )
}

export default CardItem;