/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/

import React from "react";

import {
  Container,
  InstructionsButton,
  InstructionsButtonText,
  StarGameButton,
  StartGameButtonText,
  TextStyle,
  FeedbackMessage
} from "../styles/menuStyles";

function GameOver({ navigation, route: { params } }) {
  const feedbackMessage = params.points > 0 ? 'Mandou bem!' : 'Que pena! Tente outra vez.';
  return (
    <Container>
      <TextStyle>Pontuação: {params.points}</TextStyle>
      <FeedbackMessage>{feedbackMessage}</FeedbackMessage>
      <StarGameButton>
        <StartGameButtonText onPress={() => navigation.navigate("Game")}>
          Reiniciar o jogo
        </StartGameButtonText>
      </StarGameButton>
      <InstructionsButton onPress={() => navigation.navigate("HomeMenu")}>
        <InstructionsButtonText>Ir para o Menu</InstructionsButtonText>
      </InstructionsButton>
    </Container>
  );
}

export default GameOver;
