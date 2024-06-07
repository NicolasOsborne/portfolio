import { useEffect, useRef } from 'react'

const HeroAnimation = () => {
  const wordsRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    let words = document.querySelectorAll('.word')
    words.forEach((word, index) => {
      wordsRef.current.push(word as HTMLSpanElement)
      let letters = word.textContent.split('')
      word.textContent = ''
      letters.forEach((letter) => {
        let span = document.createElement('span')
        span.textContent = letter
        span.className = 'letter'
        word.append(span)
      })
    })

    let currentWordIndex = 0
    let maxWordIndex = words.length - 1
    ;(words[currentWordIndex] as HTMLElement).style.opacity = '1'

    let rotateText = () => {
      let currentWord = words[currentWordIndex]
      let nextWord =
        currentWordIndex === maxWordIndex
          ? words[0]
          : words[currentWordIndex + 1]

      // reveal and rotate in letters of next word
      ;(nextWord as HTMLElement).style.opacity = '1'
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = 'letter behind'
        setTimeout(() => {
          letter.className = 'letter in'
        }, 340 + i * 80)
      })
      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1
    }

    rotateText()
    setInterval(rotateText, 4000)
  }, [])

  return (
    <>
      <span className='rotating-text nicolas'>
        <span className='nico'>NICO</span>
        <span className='word'></span>
        <span className='word'></span>
        <span className='word las text-mainAccent'>LAS</span>
      </span>
      <span className='rotating-text osborne animate-slideDown'>
        <span className='o'>O</span>
        <span className='word sborne text-mainAccent'>SBORNE</span>
      </span>
    </>
  )
}

export default HeroAnimation
