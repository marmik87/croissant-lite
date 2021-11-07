import React from 'react'
import { type Item } from '../utils/utils'
import { AddIcon, Button, RemoveIcon, Row } from './StyledComponents'
import { messages } from '../mocks/messages'

type Props = {
  item: Item,
  updateCart: Function,
}

const CounterWrap = ({ item, updateCart }: Props) => {
  return (
    <Row>
      <Button
        aria-label={`${messages.amountCounter.removePiece} ${item.name}`}
        onClick={() => updateCart(item, -1)}>
        <RemoveIcon />
      </Button>
      <span>{item.qty}</span>
      <Button
        aria-label={`${messages.amountCounter.addPiece} ${item.name}`}
        onClick={() => updateCart(item, 1)}>
        <AddIcon />
      </Button>
    </Row>
  )
}

export default CounterWrap
