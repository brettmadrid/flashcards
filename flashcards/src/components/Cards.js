import React from 'react'
import Card from './Card'

const set1 = [
  {front: "I am", back: "an'i"},
  {front: "With you (m.)", back: "it'cha"},
  {front: "With you (f.)", back: "it'ach"},
  {front: "With him", back: "it'o"},
  {front: "With her", back: "it'a"},
  {front: "With us", back: "i'tanu"},
  {front: "For you (m.)", back: "bishvil'cha"},
  {front: "For you (f.)", back: "bishvil'ech"},
  {front: "Without them (m.)", back: "bila'daychem"},
  {front: "Without them (f.)", back: "bila'daychen"},
  {front: "Always", back: "tam'id"},
  {front: "At the (or) In (m.)", back: "beh"},
  {front: "At the (or) In (f.)", back: "ba"},
  {front: "This (or) This is (m.)", back: "zeh"},
  {front: "This (or) This is (f.)", back: "zot"},
  {front: "You, You are (m.)", back: "a'ta"},
  {front: "You, You are (f.)", back: "at"},
  {front: "Sometimes", back: "lefa'mim"},
  {front: "Maybe", back: "oo'lai (o) ita'chen"},
  {front: "Are you (m.)", back: "ha'im"},
  {front: "Are you (f.)", back: "ha'im at"},
  {front: "With", back: "eem"},
  {front: "Today", back: "ha'yom"},
  {front: "He, He is", back: "hoo"},
  {front: "She, She is", back: "hee"},
  {front: "From", back: "meh"}
]

const Cards = () => {
  return (
    set1.map(e => <Card front={e.front} back={e.back} />)
  )
}

export default Cards
