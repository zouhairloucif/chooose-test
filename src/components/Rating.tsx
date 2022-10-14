import React from 'react'
import { StarIcon } from "@chakra-ui/icons"
import IRating from '../interface/IRating';

const Rating = ({ rating }: IRating) => {

  const isActive = (rate: number) => {
    if (rating >= rate) {
      return 'gold';
    }
    return 'grey';
  }

  return (
    <>
      {[1,2,3,4,5].map((rate) => (<StarIcon color={isActive(rate)} fontSize='18px' key={rate}></StarIcon>))}
    </>
  )
}

export default Rating;