import React from 'react';

function SingleAccordion(accordionProps) {

  const [isBodyVisible, setIsBodyVisible] = React.useState(false);

 return(
  <div style={{width: "100%"}}>
    <button 
      
      style={{width:"100%"}} 
      onClick={() => setIsBodyVisible(!isBodyVisible)}
    > <div 
        style={{
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          paddingRight: "1rem", 
          paddingLeft: "1rem"
        }}
      >
        <h3>{accordionProps.accordionProps.title}</h3>         
        <span
          aria-hidden={true}
          className={isBodyVisible ? "accordion-icon--rotated" : "accordion-icon"}
        />
      </div>
    </button>
    <div 
      aria-hidden={!isBodyVisible} 
      style={{display: isBodyVisible? 'block': 'none', marginTop: "1rem"}}
    >
        {accordionProps.accordionProps.body}
    </div>
  </div>
 )
}

const content = [
  {
    id: 1,
    title: "HTML", 
    body: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
  },
  {
    id: 2,
    title: "CSS", 
    body:"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
  },
  {
    id: 3,
    title: "Javascript", 
    body: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
  }
]

export default function Accordion() {
  return (
    <>
    { 
      content.map((accordionObj)=> 
        <div key={accordionObj.id}>
          <SingleAccordion accordionProps={accordionObj}/>
          <br/>
        </div>
      )
    }
    </>
  )
}
