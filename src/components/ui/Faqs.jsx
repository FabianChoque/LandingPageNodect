import React, { useEffect, useState } from 'react'
import QuestionBox from './QuestionBox'
import { faqs } from '../../data/Questions';

const Faqs = () => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions(faqs)
      }, []);

  return (
    <div className='min-h-[90vh] pt-10'>
        <h1 className='mb-10 text-4xl font-bold text-center md:text-5xl text-primary'>Preguntas frecuentes</h1>
        <div className='flex flex-col gap-10 px-10 md:px-20'>
            { questions.map(question => (
                <QuestionBox 
                    key={ question.id }
                    {...question}
                />
            ))}
            
        </div>
    </div>
  )
}

export default Faqs