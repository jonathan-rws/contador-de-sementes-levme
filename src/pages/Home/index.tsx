import { CalculateButton, FormContainer, HomeContainer, ResultContainer, SelectButton, SelectContainer } from "./styles";
import imgLogo from '../../assets/logo.jpg'
import { FormEvent, useState } from "react";
export function Home() {

  const [isGram, setIsGram] = useState(true)
  const [amountPerGram, setAmountPerGram] = useState('')
  const [weigth, setWeigth] = useState('')
  const [totalSeeds, setTotalSeeds] = useState<number>(0)
  function handleChangeisGram() {
    setIsGram(!isGram)
  }
  console.log(amountPerGram, weigth)
  function handleCalculate(e: FormEvent) {
    e.preventDefault()
    const weightNumber = Number(weigth)
    const amountPerGramNumber = Number(amountPerGram)
    if (!isGram) {
      setTotalSeeds(weightNumber / 1000 * amountPerGramNumber)
    }

    if (isGram) {
      setTotalSeeds(weightNumber * amountPerGramNumber)
    }
  }

  return (

    <HomeContainer>
      <FormContainer onSubmit={handleCalculate}>

        <img src={imgLogo} />

        <label htmlFor="amountPerGram">Quantidade de sementes:</label>
        <input
          type="number"
          name="amountPerGram"
          id="amountPerGram"
          value={amountPerGram}
          onChange={e => setAmountPerGram(e.target.value)}
        />
        <label htmlFor="weight">Peso do envelope:</label>
        <input
          type="number"
          name="weight"
          id="weight"
          value={weigth}
          onChange={e => setWeigth(e.target.value)}
        />
        <SelectContainer>
          <SelectButton
            type="button"
            isActive={!isGram}
            onClick={handleChangeisGram}
            disabled={!isGram}>
            Miligrama
          </SelectButton>
          <SelectButton
            type="button"
            isActive={isGram}
            onClick={handleChangeisGram}
            disabled={isGram}>
            Grama
          </SelectButton>
        </SelectContainer>
        <CalculateButton type="submit">Calcular</CalculateButton>
      </FormContainer>
      <ResultContainer>
        {totalSeeds > 0 && <span>Este envelope contém {totalSeeds} sementes!</span>}
      </ResultContainer>

    </HomeContainer>

  )
}