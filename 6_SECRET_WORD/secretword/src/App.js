//CSS
import './App.css';

//React
import { useCallback, useEffect, useState} from 'react'

//Data
import { wordList } from './data/words';

//Components 
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {

  const guessesQuantity = 3;

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const [pickedWord, setPicketWord] = useState("");
  const [pickedCategory, setPicketCategory] = useState("");
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQuantity);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    // Pick random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // Pick random word
    const word = words[category][Math.floor(Math.random() * Object.keys(words[category]).length)]
    console.log(category);
    console.log(word);

    return { word, category }
  },[words]);

  //Starts the secret word game
  const startGame = useCallback(() => {
    // pick word and pick category
    const { word, category } = pickWordAndCategory();
    clearLetterStates();
    console.log(word, category);

    // create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    //fill states
    setPicketWord(word)
    setPicketCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name);
  },[pickWordAndCategory]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    console.log(uniqueLetters);

    //win condition

    if(guessedLetters.length === uniqueLetters.length) {
      //add score
      setScore((actualScore) => actualScore+100);

      //stat new game
      startGame();
    }

  }, [guessedLetters, letters, startGame]);


  // process the letter input
  const VerifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ]);
    } else {
      setGuesses((actualGuesses) => {
        actualGuesses = actualGuesses - 1;
        if (actualGuesses <= 0) {
          // reset all states
          console.log(guesses);
          clearLetterStates();
          setGameStage(stages[2].name);
        }
        return actualGuesses;
      });
      setWrongLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ]);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // process the letter input
  const retry = () => {
    setScore(0);
    setGuesses(guessesQuantity);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={VerifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
