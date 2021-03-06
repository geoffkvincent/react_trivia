import React from 'react'
import { connect } from 'react-redux'
import { getCards } from '../reducers/cards'
import { Card, Container, Modal } from 'semantic-ui-react'

class Category extends React.Component {
  state = { 
    userAnswer: '', 
    currentId: '', 
    open: false, 
  }

  render () {
    return (
      null
    )
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards }
}

export default connect(mapStateToProps)(Category)

// class Category extends React.Component {
//   state = { 
//     userAnswer: '', 
//     currentId: '', 
//     open: false, 
//     points: [100, 200, 300, 400]
//   }

//   componentDidMount() {
//     const {id} = this.props
//     this.props.dispatch(getCards(id))
//   }

//   handleClickA = (id) => {
//     this.setState({ userAnswer: 'a', currentId: id }, () => {
//       this.answerCheck()
//     })
//   }

//   handleClickB = (id) => {
//     this.setState({ userAnswer: 'b', currentId: id }, () => {
//       this.answerCheck()
//     })
//   }

//   handleClickC = (id) => {
//     this.setState({ userAnswer: 'c', currentId: id }, () => {
//       this.answerCheck()
//     }) 
//   }

//   handleClickD = (id) => {
//     this.setState({ userAnswer: 'd', currentId: id }, () => {
//       this.answerCheck()
//     })
//   }

//   answerCheck = () => {
//     const {cards} = this.props
//     const {userAnswer, currentId } = this.state
//     const check = cards.find(card => card.id === currentId)
//     if (check.correct_answer === userAnswer) {
//       console.log('Winner')
//     } else {
//       console.log('Loser')
//     }
//     return this.close
//   }

//   open = () => this.setState({ open: true })

//   close = () => this.setState({ open: false, userAnswer: '', currentId: '' })

//   render() {
//     const { cards } = this.props
//     return (
//       <Container>
//         <Card.Group itemsPerRow={1}>
//           { cards.map(card => 
//           <Card key={card.id}>
//             <Modal 
//               trigger={
//                 <Card.Content style={{cursor: "pointer"}} textAlign='center'>
//                   <h1>{points}</h1>
//                 </Card.Content>
//               }
//               // open={this.state.open}
//               onOpen={this.open}
//               onClose={this.close}
//             >
//             <Modal.Content>
//               <Modal.Description>
//                 <ul>
//                   <h1>{card.question}</h1>
//                   <li>
//                     <h2 
//                       style={{cursor: "pointer"}} 
//                       onClick={() => this.handleClickA(card.id)}
//                     >
//                       A.{card.answer_a}
//                     </h2>
//                   </li>
//                   <li>
//                     <h2 
//                       style={{cursor: "pointer"}} 
//                       onClick={() => this.handleClickB(card.id)}
//                     >
//                       B.{card.answer_b}
//                     </h2>
//                   </li>
//                   <li>
//                     <h2 
//                       style={{cursor: "pointer"}} 
//                       onClick={() => this.handleClickC(card.id)}
//                     >
//                       C.{card.answer_c}
//                     </h2>
//                   </li>
//                   <li>
//                     <h2 
//                       style={{cursor: "pointer"}} 
//                       onClick={() => this.handleClickD(card.id)}
//                     >
//                       D.{card.answer_d}
//                     </h2>
//                   </li>
//                 </ul>
//               </Modal.Description>
//             </Modal.Content>
//             </Modal>
//           </Card>
//           )}
//         </Card.Group>
//       </Container>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return { cards: state.cards }
// }

// export default connect(mapStateToProps)(Category)
