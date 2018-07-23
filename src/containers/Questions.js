import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchQuestions, fetchNextQuestions, fetchPrevQuestions, fecthSelectedoption, finalResult } from '../actions/index';


class Questions extends Component {
      componentWillMount() {
      this.props.fetchQuestions();
}

    onChangOptions(qid,val) {
   	  this.props.questions.Allquestions.map((data)=>{
         if(qid === data.qid ){ 
         	data.answers.map((answer) => {
         	  if(val === answer.id)
         		 answer.selected="checked";
         		 else
		         answer.selected="";
         	});        	  
		}
	});

     	this.props.fecthSelectedoption(this.props);
}



	finalScore() {
	let score = 0;	
  	this.props.questions.Allquestions.map((data)=>{
        data.answers.map((answer) => {
             if(answer.selected === 'checked')
             {
             	score = score+answer.point;
             }
        });	
  	});
  	this.props.finalResult(score);
}



	renderAnswers(qid,answers)
	{ 
	return answers.map((answer) => {
        return (
        <div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">
        <input type="radio" key={answer.id+answer.id} onChange={()=>this.onChangOptions(qid,answer.id)} checked={answer.selected}/>
        <label>{answer.label}</label>
        </li>
        </ul>
        </div>
        );
     });  
   }  

	 renderQuestions() 
	 {
	    if(this.props.questions.Allquestions) {
            if(this.props.finalScore != null){
		return <div>FINAL SCORE IS : {this.props.finalScore}</div>
		}
		else
		{
                    return this.props.questions.Allquestions.map((data)=>{
                    if(this.props.currentQuestion === data.qid ){ 
                    return (
                     <div>
		     <p key={data.qid}>{data.question}</p>
		     {this.renderAnswers(data.qid,data.answers)}</div>
		     );
		}
	 });
        }
      }
   }

    

     displayPrevQuestion(currVal)
     {
        this.props.fetchPrevQuestions(currVal);
     }

     displayNextQuestion(currVal)
     {
        this.props.fetchNextQuestions(currVal);
     }


	render() {

    let currentIndex = this.props.currentQuestion;
   
    let totalNoOfQuestions;

    if(this.props.questions.Allquestions) {
       totalNoOfQuestions = this.props.questions.Allquestions.length;             
    }


    let prevButton;
    let nextButton;


         if(currentIndex > 0 && this.props.finalScore === null) {
          prevButton = <button type="submit" className="btn-default succes" onClick={()=>this.displayPrevQuestion(this.props.currentQuestion)}>Prev</button>
         } 
         else 
         {
         prevButton = '';
         }


  	if(currentIndex < totalNoOfQuestions-1 && this.props.finalScore === null) {
    	nextButton = <button type="submit" className="btn-default succes" onClick={()=>this.displayNextQuestion(this.props.currentQuestion)}>Next</button>
   	}
    	else
   	{
   	if(this.props.finalScore === null)
    	nextButton = <button type="submit" className="btn-default succes" onClick={()=>this.finalScore()}>SUBMIT</button>
    	}


	return (

        <div className="cardContainer">
			<div className="card card-body">
 				 <p className="card-text">{this.renderQuestions()}</p>
    				<div className="flex-row">
        				<a className="card-link prevbtn">{prevButton}</a>
        				<a className="card-link">{nextButton}</a>
    				</div>
			</div>

		</div>
           );
	}
}

function mapStateToProps(state) {
	return {
  	questions: state.questions.all,
  	currentQuestion: state.questions.curr,
  	answerOptions: state.questions.option,
  	finalScore: state.questions.score
  };
}

export default connect(mapStateToProps, { fetchQuestions, fetchNextQuestions, fetchPrevQuestions, fecthSelectedoption,finalResult })(Questions);



